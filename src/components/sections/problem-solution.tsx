"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const problems = [
  { text: "Passive bots that just record", detail: "You still do all the real work" },
  { text: "Context gets lost between meetings", detail: "No one remembers what was said" },
  { text: "Action items vanish", detail: "Lost in Slack threads and forgotten docs" },
  { text: "Clients hate \u2018Notetaker\u2019 bots", detail: "Awkward, silent, and impersonal" },
];

const solutions = [
  { text: "AI agent that actually speaks", detail: "Answers questions and engages naturally" },
  { text: "Knowledge-powered from your docs", detail: "Upload PDFs — agent uses them in meetings via RAG" },
  { text: "Auto-generated reports after every call", detail: "Action items, decisions, and flagged concerns" },
  { text: "Custom personality & voice", detail: "Set participation level — feels like a real teammate" },
];

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function ProblemSolution() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-primary">
            Why MeetBrains?
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-[-0.02em]">
            Stop taking notes. Start running meetings.
          </h2>
        </motion.div>

        {/* Bento grid: problems left, solutions right */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Problems column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "rounded-2xl border border-destructive/12 bg-destructive/[0.02] p-6 sm:p-7",
              "dark:bg-destructive/[0.04]"
            )}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-7 h-7 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                <X className="w-3.5 h-3.5 text-destructive" />
              </span>
              <h3 className="text-sm font-bold text-destructive/80 uppercase tracking-wide">
                The old way
              </h3>
            </div>
            <div className="space-y-3">
              {problems.map((item, i) => (
                <motion.div
                  key={item.text}
                  custom={i}
                  variants={cardItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-background/60 dark:bg-background/30 border border-destructive/8"
                >
                  <span className="mt-0.5 w-5 h-5 rounded-md bg-destructive/8 flex items-center justify-center shrink-0">
                    <X className="w-3 h-3 text-destructive/50" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground/80 leading-snug">{item.text}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "rounded-2xl border border-teal/12 bg-teal/[0.02] p-6 sm:p-7",
              "dark:bg-teal/[0.04]"
            )}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-7 h-7 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-teal" />
              </span>
              <h3 className="text-sm font-bold text-teal uppercase tracking-wide">
                With MeetBrains
              </h3>
            </div>
            <div className="space-y-3">
              {solutions.map((item, i) => (
                <motion.div
                  key={item.text}
                  custom={i}
                  variants={cardItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-background/60 dark:bg-background/30 border border-teal/8"
                >
                  <span className="mt-0.5 w-5 h-5 rounded-md bg-teal/8 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-teal/60" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground/80 leading-snug">{item.text}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Arrow transition hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-8"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center"
          >
            <ArrowDown className="w-3.5 h-3.5 text-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
