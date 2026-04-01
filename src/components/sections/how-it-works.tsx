"use client";

import { motion } from "framer-motion";
import { CalendarDays, Bot, FileCheck } from "lucide-react";

const steps = [
  {
    icon: CalendarDays,
    number: "01",
    title: "Create your AI agent",
    description:
      "Build a custom agent with its own personality, voice, and knowledge base. Upload your docs so it comes prepared.",
    detail: "Takes 5 minutes",
    iconBg: "bg-blue-500/10 dark:bg-blue-500/15",
    iconColor: "text-blue-500",
  },
  {
    icon: Bot,
    number: "02",
    title: "Delegate your meeting",
    description:
      "Connect your calendar or paste a meeting link. Your agent joins automatically, greets participants, and speaks in real-time.",
    detail: "Zero effort required",
    iconBg: "bg-primary/10 dark:bg-primary/15",
    iconColor: "text-primary",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Get instant reports",
    description:
      "After every meeting: executive summary, action items with assignees, decisions made, and flagged concerns — all auto-generated.",
    detail: "Auto-generated",
    iconBg: "bg-teal/10 dark:bg-teal/15",
    iconColor: "text-teal",
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 relative section-glow-top">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-primary">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-[-0.02em]">
            Up and running in 5 minutes
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[3.6rem] left-[calc(16.6%+2rem)] right-[calc(16.6%+2rem)]">
            <motion.div
              className="h-px bg-gradient-to-r from-blue-500/30 via-primary/30 to-teal/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col items-center text-center"
              >
                {/* Step badge with entrance */}
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-14 h-14 rounded-2xl bg-card border-2 border-border shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center cursor-default"
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${step.iconBg}`}>
                      <step.icon className={`w-5 h-5 ${step.iconColor}`} strokeWidth={1.75} />
                    </div>
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.3 }}
                    className="mt-1.5 text-[10px] font-bold font-mono text-muted-foreground/50 tracking-widest"
                  >
                    {step.number}
                  </motion.span>
                </div>

                <h3 className="mt-4 text-base font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-[1.7] max-w-[260px]">
                  {step.description}
                </p>

                {/* Detail pill */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.4, type: "spring", stiffness: 200 }}
                  className="mt-3 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold bg-muted border border-border text-muted-foreground"
                >
                  {step.detail}
                </motion.span>

                {/* Mobile vertical connector */}
                {i < steps.length - 1 && (
                  <motion.div
                    className="lg:hidden mt-6 w-px h-8 bg-gradient-to-b from-border to-transparent"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    style={{ transformOrigin: "top" }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
