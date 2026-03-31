"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmailCapture({ id }: { id?: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;

    setLoading(true);
    // TODO: Wire up Supabase/ConvertKit for email collection
    console.log("Waitlist email:", email);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-teal/10 border border-teal/20 text-teal font-medium text-sm animate-in fade-in duration-300">
        <Check className="w-4 h-4 shrink-0" />
        <span>You&apos;re in! We&apos;ll reach out soon.</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
      id={id}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your work email"
        className="flex-1 h-11 px-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
        aria-label="Work email address"
      />
      <Button
        type="submit"
        disabled={loading}
        className="h-11 px-5 rounded-xl cursor-pointer gap-2 text-sm font-semibold"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  );
}
