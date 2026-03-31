"use client";

import { motion } from "framer-motion";
import { X, Check, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const problems = [
  "Passive bots that just record \u2014 you still do all the real work",
  "Context gets lost between meetings",
  "Action items vanish into Slack threads",
  "Meeting bots feel awkward \u2014 clients hate the \u2018Notetaker\u2019 in the call",
];

const solutions = [
  "Active AI participant that speaks, answers questions, and surfaces insights",
  "3D avatar that feels like a natural teammate",
  "Auto-generates and assigns action items with deadlines",
  "Remembers every past meeting \u2014 full organizational memory",
];

export function ProblemSolution() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-primary">
            Why MeetAlly?
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-[-0.02em]">
            Stop taking notes. Start running meetings.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-stretch">
          {/* Before card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
              "rounded-2xl border border-destructive/15 bg-destructive/[0.025] p-6 shadow-[0_1px_4px_rgba(0,0,0,0.04)] sm:p-8",
              "dark:bg-destructive/[0.05]"
            )}
          >
            {/* Card header */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                <X className="w-3.5 h-3.5 text-destructive" />
              </span>
              <h3 className="text-sm font-bold text-destructive/80 uppercase tracking-wide">
                Before MeetAlly
              </h3>
            </div>
            <ul className="space-y-3.5">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 rounded-sm bg-destructive/8 flex items-center justify-center shrink-0">
                    <X className="w-2.5 h-2.5 text-destructive/60" />
                  </span>
                  <span className="text-sm text-muted-foreground leading-[1.7]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow connector */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-9 h-9 rounded-full bg-card border border-border shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center">
              <ChevronRight className="w-4 h-4 text-primary" />
            </div>
          </div>

          {/* With MeetAlly card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
              "rounded-2xl border border-teal/15 bg-teal/[0.025] p-6 shadow-[0_1px_4px_rgba(0,0,0,0.04)] sm:p-8",
              "dark:bg-teal/[0.05]"
            )}
          >
            {/* Card header */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-teal" />
              </span>
              <h3 className="text-sm font-bold text-teal uppercase tracking-wide">
                With MeetAlly
              </h3>
            </div>
            <ul className="space-y-3.5">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 rounded-sm bg-teal/8 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-teal/70" />
                  </span>
                  <span className="text-sm text-muted-foreground leading-[1.7]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
