"use client";

import { motion } from "framer-motion";
import { Sparkles, Shield, CreditCard, Mail, ArrowRight } from "lucide-react";
import { SignupCta } from "@/components/shared/signup-cta";

const trustItems = [
  { icon: Shield, label: "Free during beta" },
  { icon: CreditCard, label: "No credit card required" },
  { icon: Mail, label: "No spam, ever" },
];

export function Testimonials() {
  return (
    <section id="get-started" className="py-24 sm:py-32 relative overflow-hidden dot-grid section-glow-top">
      {/* Animated gradient border top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Aurora glow behind */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[600px] h-[500px] bg-primary/[0.05] dark:bg-primary/[0.08] rounded-full blur-[120px]"
          animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
          {/* Overline */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold bg-primary/8 dark:bg-primary/12 text-primary border border-primary/20"
          >
            <Sparkles className="w-3 h-3" />
            Now live
          </motion.span>

          {/* Headline */}
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.02em]">
            Ready to send an AI agent
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient animate-gradient-shift">to your next meeting?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
            Create your account, build an agent, and send it to your next
            call. It takes about five minutes.
          </p>

          {/* Email capture */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 w-full flex justify-center"
          >
            <SignupCta id="get-started-form" />
          </motion.div>


          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {trustItems.map(({ icon: Icon, label }, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flex items-center gap-1.5 text-xs text-muted-foreground"
              >
                <Icon className="w-3.5 h-3.5 text-muted-foreground/60" />
                {label}
              </motion.span>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
