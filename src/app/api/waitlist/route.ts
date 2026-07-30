import { NextResponse } from "next/server";

/**
 * Waitlist capture.
 *
 * Signups go to the MeetBrains backend (Django + Postgres on AWS) rather than a separate database,
 * so every piece of customer data lives in one place and is visible in the admin panel. This route
 * stays as a thin server-side proxy so the browser never talks to the backend directly — the API
 * host is not exposed to the client and CORS is a non-issue.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BACKEND_URL = process.env.MEETBRAINS_API_URL ?? "https://app.meetbrains.ai";

export async function POST(request: Request) {
  let payload: { email?: string; source?: string } | null = null;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = payload?.email?.trim().toLowerCase();
  const source = payload?.source?.trim().slice(0, 64) || "landing";

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    // Without this the backend records the proxy's own IP for every signup. Forward the chain so the
    // visitor's address survives the hop. Attribution/abuse-triage only — a client can set this
    // header, so nothing may depend on it for authorisation.
    const forwardedFor = request.headers.get("x-forwarded-for");

    const response = await fetch(`${BACKEND_URL}/api/marketing/waitlist/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(forwardedFor ? { "x-forwarded-for": forwardedFor } : {}),
      },
      body: JSON.stringify({
        email,
        source,
        referrer: request.headers.get("referer") ?? "",
      }),
      // A signup form should never hang the page waiting on a slow backend.
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });

    if (response.ok) {
      const data = (await response.json().catch(() => ({}))) as { already?: boolean };
      // Already on the list is a success from the visitor's point of view, not an error.
      return NextResponse.json({ ok: true, duplicate: Boolean(data.already) }, { status: response.status });
    }

    if (response.status === 400) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    console.error("waitlist backend responded", response.status);
    return NextResponse.json({ error: "Failed to save your email. Please try again." }, { status: 502 });
  } catch (error) {
    console.error("waitlist backend unreachable", error);
    return NextResponse.json({ error: "Failed to save your email. Please try again." }, { status: 502 });
  }
}
