"use client";

import { motion } from "framer-motion";
import { Bot, Mic, BookOpen, FileBarChart, SlidersHorizontal, Monitor, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const heroFeature = {
  icon: Bot,
  title: "Custom AI Agents",
  description:
    "Build agents with unique personalities — set formality, humor, assertiveness. Choose from 8 voices and 4 LLM models. Each agent remembers your documents and adapts to your team's context.",
  iconBg: "bg-primary/10 dark:bg-primary/15",
  iconColor: "text-primary",
};

const features = [
  {
    icon: Mic,
    title: "Real Voice Participation",
    description:
      "Your agent speaks in the meeting with sub-second latency. Greets participants, answers questions, and engages naturally.",
    iconBg: "bg-amber-500/10 dark:bg-amber-500/15",
    iconColor: "text-amber-500",
  },
  {
    icon: BookOpen,
    title: "Knowledge-Powered",
    description:
      "Upload PDFs, docs, or URLs. Your agent uses them to answer questions accurately in live meetings via RAG.",
    iconBg: "bg-emerald-500/10 dark:bg-emerald-500/15",
    iconColor: "text-emerald-500",
  },
  {
    icon: FileBarChart,
    title: "Instant Reports",
    description:
      "After every meeting: executive summary, action items, decisions made, and flagged concerns. Auto-generated.",
    iconBg: "bg-pink-500/10 dark:bg-pink-500/15",
    iconColor: "text-pink-500",
  },
  {
    icon: SlidersHorizontal,
    title: "5 Participation Levels",
    description:
      "From silent observer to fully active participant. Dial in exactly how much your agent should engage.",
    iconBg: "bg-blue-500/10 dark:bg-blue-500/15",
    iconColor: "text-blue-500",
  },
  {
    icon: Monitor,
    title: "Live Control Dashboard",
    description:
      "Watch the live transcript, mute/unmute your agent, inject speech manually — full control while it\u2019s in the meeting.",
    iconBg: "bg-cyan-500/10 dark:bg-cyan-500/15",
    iconColor: "text-cyan-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-muted relative dot-grid section-glow-top">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-primary">
            Features
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-[-0.02em]">
            Everything your meetings need.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> Nothing they don&apos;t.</span>
            <span className="hidden sm:inline">Nothing they don&apos;t.</span>
          </h2>
        </motion.div>

        {/* Hero feature card — full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.04] via-card to-teal/[0.03] p-7 sm:p-9 mb-5 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] transition-shadow duration-300 overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/[0.04] rounded-full blur-[80px] pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row sm:items-center gap-5">
            <motion.div
              whileHover={{ rotate: 6, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${heroFeature.iconBg}`}
            >
              <heroFeature.icon className={`w-7 h-7 ${heroFeature.iconColor}`} strokeWidth={1.5} />
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="text-lg font-bold text-foreground">{heroFeature.title}</h3>
                <span className="px-2 py-0.5 text-[9px] font-bold font-mono uppercase tracking-wider bg-primary text-white rounded-full">
                  Core
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-[1.7] max-w-2xl">
                {heroFeature.description}
              </p>
            </div>
            <Sparkles className="w-5 h-5 text-primary/30 shrink-0 hidden sm:block" />
          </div>
        </motion.div>

        {/* Remaining features grid — 5 cards in a bento arrangement */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl border border-border bg-card p-6 sm:p-7 cursor-pointer shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-shadow duration-300"
            >
              <motion.div
                className={`w-11 h-11 rounded-xl flex items-center justify-center ${feature.iconBg}`}
                whileHover={{ y: -3, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon className={`w-5 h-5 ${feature.iconColor}`} strokeWidth={1.75} />
              </motion.div>

              <h3 className="mt-4 text-sm font-bold text-foreground leading-snug">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-[1.7]">
                {feature.description}
              </p>

              {/* Animated bottom accent */}
              <div className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
