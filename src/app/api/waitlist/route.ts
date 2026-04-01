import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getSupabaseAdminClient() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export async function POST(request: Request) {
  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    return NextResponse.json(
      { error: "Waitlist is not configured yet. Add the Supabase environment variables in Vercel." },
      { status: 500 }
    );
  }

  let payload: { email?: string; source?: string } | null = null;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = payload?.email?.trim().toLowerCase();
  const source = payload?.source?.trim().slice(0, 100) || "waitlist-form";

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const { error } = await supabase
    .from("waitlist_signups")
    .insert({
      email,
      source,
    });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ ok: true, duplicate: true }, { status: 200 });
    }

    return NextResponse.json({ error: "Failed to save your email. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
