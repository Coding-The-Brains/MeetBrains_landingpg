"use client";

import { motion } from "framer-motion";
import { Video, MessageSquare, Zap, Brain, Shield, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Video,
    title: "3D Avatar Presence",
    description:
      "A lifelike 3D avatar joins your meeting as a real participant. No more awkward silent bots.",
    iconBg: "bg-blue-500/10 dark:bg-blue-500/15",
    iconColor: "text-blue-500",
    accentColor: "group-hover:border-blue-500/25",
    featured: false,
  },
  {
    icon: MessageSquare,
    title: "Active Participation",
    description:
      "Speaks up with relevant data, answers questions from past meetings, and flags contradictions.",
    iconBg: "bg-primary/10 dark:bg-primary/15",
    iconColor: "text-primary",
    accentColor: "group-hover:border-primary/25",
    featured: true,
  },
  {
    icon: Zap,
    title: "Real-Time Actions",
    description:
      "Auto-generates action items, assigns owners, sets deadlines, pushes to Slack, Jira, or Notion.",
    iconBg: "bg-amber-500/10 dark:bg-amber-500/15",
    iconColor: "text-amber-500",
    accentColor: "group-hover:border-amber-500/25",
    featured: false,
  },
  {
    icon: Brain,
    title: "Organizational Memory",
    description:
      "Remembers every discussion across your team. Ask anything about past meetings instantly.",
    iconBg: "bg-pink-500/10 dark:bg-pink-500/15",
    iconColor: "text-pink-500",
    accentColor: "group-hover:border-pink-500/25",
    featured: false,
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant. End-to-end encryption. Your data never trains models. On-prem option.",
    iconBg: "bg-emerald-500/10 dark:bg-emerald-500/15",
    iconColor: "text-emerald-500",
    accentColor: "group-hover:border-emerald-500/25",
    featured: false,
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description:
      "Zoom, Google Meet, Microsoft Teams. Supports 30+ languages across every timezone.",
    iconBg: "bg-cyan-500/10 dark:bg-cyan-500/15",
    iconColor: "text-cyan-500",
    accentColor: "group-hover:border-cyan-500/25",
    featured: false,
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={cn(
                "group relative rounded-2xl border bg-card p-6 sm:p-7 cursor-pointer transition-all duration-200 hover:-translate-y-1 shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]",
                feature.featured
                  ? "border-primary/25 bg-gradient-to-b from-primary/[0.02] to-transparent"
                  : `border-border ${feature.accentColor}`
              )}
            >
              {feature.featured && (
                <span className="absolute -top-2.5 right-4 px-2.5 py-0.5 text-[9px] font-bold font-mono uppercase tracking-wider bg-primary text-white rounded-full shadow-sm">
                  Most used
                </span>
              )}

              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${feature.iconBg}`}>
                <feature.icon className={`w-5 h-5 ${feature.iconColor}`} strokeWidth={1.75} />
              </div>

              <h3 className="mt-4 text-sm font-bold text-foreground leading-snug">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-[1.7]">
                {feature.description}
              </p>

              {/* Bottom accent line on hover */}
              <div className={`absolute bottom-0 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-r from-transparent via-primary/30 to-transparent`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
