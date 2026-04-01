"use client";

import { motion } from "framer-motion";
import { EmailCapture } from "@/components/shared/email-capture";

export function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Animated gradient border top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Aurora glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[500px] h-[400px] bg-primary/[0.05] dark:bg-primary/[0.08] rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-teal/[0.04] dark:bg-teal/[0.06] rounded-full blur-[80px] pointer-events-none animate-aurora" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Ready to send an AI agent
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient animate-gradient-shift">to your next meeting?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
            Join the waitlist and be among the first to experience meetings with
            an AI that actually speaks.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 w-full flex justify-center"
          >
            <EmailCapture id="final-cta-form" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-xs text-muted-foreground/70"
          >
            Launching Q3 2026 &middot; Free during beta &middot; No credit card
            required
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
