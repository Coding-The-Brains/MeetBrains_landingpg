import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Shell for the privacy policy and terms.
 *
 * These are read by people deciding whether to trust us with a recording of their meeting, and by
 * Google's OAuth reviewers, so they are set as documents rather than as marketing: a measured
 * column, real hierarchy, and no accent competing with the words.
 */
export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-28 sm:pt-32">
      <Link
        href="/"
        className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
      >
        &larr; Back to MeetBrains
      </Link>

      <h1 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated {updated}</p>
      <p className="mt-6 text-base leading-relaxed text-muted-foreground">{intro}</p>

      <div className="mt-12 space-y-10">{children}</div>

      <hr className="my-14 border-border" />
      <p className="text-sm leading-relaxed text-muted-foreground">
        Coding The Brains LLC &middot; Questions about this document:{" "}
        <a
          href="mailto:hello@meetbrains.ai"
          className="text-foreground underline underline-offset-4 hover:no-underline"
        >
          hello@meetbrains.ai
        </a>
      </p>
    </main>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="space-y-4 text-base leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

/** A plain definition row, for the sub-processor and data tables. */
export function Row({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 border-t border-border py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
      <dt className="text-sm font-medium text-foreground">{term}</dt>
      <dd className="text-sm leading-relaxed text-muted-foreground">{children}</dd>
    </div>
  );
}
