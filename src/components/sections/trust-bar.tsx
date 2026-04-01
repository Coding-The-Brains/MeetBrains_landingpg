"use client";

import { motion } from "framer-motion";
import { CalendarDays, FileText, Mic, Brain, SlidersHorizontal, Monitor } from "lucide-react";

const capabilities = [
  { icon: Mic, name: "Real-Time Voice AI" },
  { icon: Brain, name: "RAG Knowledge Base" },
  { icon: CalendarDays, name: "Calendar Auto-Join" },
  { icon: FileText, name: "Auto Meeting Reports" },
  { icon: SlidersHorizontal, name: "5 Participation Levels" },
  { icon: Monitor, name: "Live Control Dashboard" },
];

export function TrustBar() {
  return (
    <section className="py-10 sm:py-12 border-y border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-[11px] font-medium uppercase tracking-widest text-muted-foreground mb-5">
            What&apos;s already built &amp; working
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {capabilities.map(({ icon: Icon, name }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                whileHover={{ y: -2, scale: 1.03 }}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-card border border-border shadow-[0_1px_3px_rgba(0,0,0,0.03)] cursor-default"
              >
                <Icon className="w-3.5 h-3.5 text-primary/60" strokeWidth={1.75} />
                <span className="text-xs font-medium text-foreground/70 whitespace-nowrap">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
