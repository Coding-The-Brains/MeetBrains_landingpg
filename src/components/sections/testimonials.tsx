"use client";

import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { AvatarPhoto } from "@/components/shared/avatar-photo";

const testimonials = [
  {
    quote:
      "The first time MeetAlly spoke up in a meeting to remind us about a deadline we'd set two sprints ago - my entire team went silent. Game changer.",
    name: "Alex Reynolds",
    title: "VP Engineering",
    company: "Series B Startup",
    initials: "AR",
    avatarSrc: "https://randomuser.me/api/portraits/men/76.jpg",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    quote:
      "We were paying for Otter AND a project manager to track action items. MeetAlly replaced both. The 3D avatar actually makes clients smile.",
    name: "Maya Patel",
    title: "Founder",
    company: "Digital Agency",
    initials: "MP",
    avatarSrc: "https://randomuser.me/api/portraits/women/65.jpg",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    quote:
      "I asked MeetAlly mid-call 'what did marketing commit to last quarter?' and it pulled the exact answer from a meeting I wasn't even in. Insane.",
    name: "Tom Chen",
    title: "Head of Sales",
    company: "Enterprise SaaS",
    initials: "TC",
    avatarSrc: "https://randomuser.me/api/portraits/men/51.jpg",
    gradient: "from-orange-500 to-orange-600",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 star rating">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function QuoteMark() {
  return (
    <svg
      className="w-8 h-8 text-primary/10 dark:text-primary/15 mb-1 -ml-1"
      fill="currentColor"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.334C7.334 11.794 8.794 10 10 10V8zM22 8c-3.314 0-6 2.686-6 6v10h10V14h-6.666C19.334 11.794 20.794 10 22 10V8z" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-[-0.02em]">
            What early users are saying
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "group rounded-2xl border border-border bg-card p-6 transition-all duration-200 cursor-pointer shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] sm:p-7"
              )}
            >
              <div className="flex items-start justify-between mb-1">
                <Stars />
                <BadgeCheck
                  className="w-4 h-4 text-teal shrink-0 mt-0.5"
                  aria-label="Verified review"
                />
              </div>

              <QuoteMark />

              <blockquote className="text-sm text-muted-foreground leading-[1.75]">
                {t.quote}
              </blockquote>

              <div className="mt-5 pt-4 border-t border-border flex items-center gap-3">
                <AvatarPhoto
                  name={t.name}
                  src={t.avatarSrc}
                  fallback={t.initials}
                  sizes="36px"
                  className="w-9 h-9 shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                  fallbackClassName={`bg-gradient-to-br ${t.gradient}`}
                  textClassName="text-white text-xs font-bold"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {t.title} {"\u00b7"} {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
