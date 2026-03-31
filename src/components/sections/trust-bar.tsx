"use client";

import { motion } from "framer-motion";
import {
  ZoomIcon,
  GoogleMeetIcon,
  MicrosoftTeamsIcon,
  SlackIcon,
  NotionIcon,
  JiraIcon,
} from "@/components/shared/brand-icons";

const stats = [
  { value: "10,000+", label: "meetings recorded" },
  { value: "500+", label: "teams onboarded" },
  { value: "4.9/5", label: "average rating" },
];

const integrations = [
  { icon: ZoomIcon, name: "Zoom" },
  { icon: GoogleMeetIcon, name: "Google Meet" },
  { icon: MicrosoftTeamsIcon, name: "Teams" },
  { icon: SlackIcon, name: "Slack" },
  { icon: NotionIcon, name: "Notion" },
  { icon: JiraIcon, name: "Jira" },
];

export function TrustBar() {
  return (
    <section className="py-12 sm:py-16 bg-muted border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* Integrations row */}
          <div className="flex flex-col items-center gap-4 mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Integrates with your stack
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {integrations.map(({ icon: Icon, name }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-card border border-border shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.07)] hover:-translate-y-px transition-all duration-200 cursor-default"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs font-medium text-foreground/80">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border mb-10" />

          {/* Stats row */}
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-10">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden sm:block w-px h-10 bg-border" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
