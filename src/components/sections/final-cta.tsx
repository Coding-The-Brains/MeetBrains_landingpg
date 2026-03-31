"use client";

import { motion } from "framer-motion";
import { EmailCapture } from "@/components/shared/email-capture";

export function FinalCTA() {
  return (
    <section
      id="waitlist"
      className="relative py-20 sm:py-28 bg-muted overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-primary/[0.06] dark:bg-primary/[0.08] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Ready to give your team
            <br className="hidden sm:block" /> an unfair advantage?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
            Join the waitlist and be among the first to experience meetings with
            an AI that actually shows up.
          </p>

          <div className="mt-8 w-full flex justify-center">
            <EmailCapture id="waitlist-form" />
          </div>

          <p className="mt-6 text-xs text-muted-foreground/70">
            Launching Q3 2026 &middot; Free during beta &middot; No credit card
            required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
