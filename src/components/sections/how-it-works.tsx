"use client";

import { motion } from "framer-motion";
import { CalendarDays, Bot, FileCheck } from "lucide-react";

const steps = [
  {
    icon: CalendarDays,
    number: "01",
    title: "Connect your calendar",
    description:
      "Link Google Calendar or Outlook. MeetAlly automatically joins your scheduled meetings.",
    detail: "Takes 60 seconds",
    iconBg: "bg-blue-500/10 dark:bg-blue-500/15",
    iconColor: "text-blue-500",
  },
  {
    icon: Bot,
    number: "02",
    title: "MeetAlly joins the call",
    description:
      "A 3D avatar appears as a real participant. It listens, takes notes, answers questions.",
    detail: "Zero effort required",
    iconBg: "bg-primary/10 dark:bg-primary/15",
    iconColor: "text-primary",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Get instant summaries",
    description:
      "Action items, decisions, and follow-ups delivered to Slack, email, or Notion instantly.",
    detail: "Auto-delivered",
    iconBg: "bg-teal/10 dark:bg-teal/15",
    iconColor: "text-teal",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-primary">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-[-0.02em]">
            Up and running in 60 seconds
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting dashed line (desktop only) */}
          <div
            className="hidden lg:block absolute top-[3.6rem] left-[calc(16.6%+2rem)] right-[calc(16.6%+2rem)] h-px"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, var(--color-border) 0, var(--color-border) 6px, transparent 6px, transparent 14px)",
            }}
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.14 }}
                className="flex flex-col items-center text-center"
              >
                {/* Step badge */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-card border-2 border-border shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${step.iconBg}`}>
                      <step.icon className={`w-5 h-5 ${step.iconColor}`} strokeWidth={1.75} />
                    </div>
                  </div>
                  <span className="mt-1.5 text-[10px] font-bold font-mono text-muted-foreground/50 tracking-widest">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-[1.7] max-w-[240px]">
                  {step.description}
                </p>

                {/* Detail pill */}
                <span className="mt-3 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold bg-muted border border-border text-muted-foreground">
                  {step.detail}
                </span>

                {/* Mobile vertical connector */}
                {i < steps.length - 1 && (
                  <div
                    className="lg:hidden mt-6 w-px h-8"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to bottom, var(--color-border) 0, var(--color-border) 4px, transparent 4px, transparent 10px)",
                    }}
                    aria-hidden="true"
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
