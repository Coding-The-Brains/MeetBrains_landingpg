"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { EmailCapture } from "@/components/shared/email-capture";
import { RotatingText } from "@/components/shared/rotating-text";
import { MeetingSimulation } from "@/components/shared/meeting-simulation";
import { ZoomIcon, GoogleMeetIcon, MicrosoftTeamsIcon } from "@/components/shared/brand-icons";

function PlatformLogos() {
  return (
    <div className="flex items-center gap-3 text-xs text-muted-foreground">
      <span className="font-medium">Works with</span>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted border border-border">
          <ZoomIcon className="w-4 h-4" />
          <span className="text-[11px] font-medium text-foreground/70">Zoom</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted border border-border">
          <GoogleMeetIcon className="w-4 h-4" />
          <span className="text-[11px] font-medium text-foreground/70">Meet</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted border border-border">
          <MicrosoftTeamsIcon className="w-4 h-4" />
          <span className="text-[11px] font-medium text-foreground/70">Teams</span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      {/* Subtle background orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/[0.04] dark:bg-primary/[0.07] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-64 h-64 bg-teal/[0.04] dark:bg-teal/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">

          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/8 dark:bg-primary/12 text-primary border border-primary/20">
              <Sparkles className="w-3 h-3" />
              Now in Early Access
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-[-0.03em] leading-[1.08]"
          >
            The AI that shows up
            <br />
            to{" "}
            <RotatingText />
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-muted-foreground max-w-[520px] leading-[1.7]"
          >
            MeetAlly joins your meetings with a 3D avatar, takes notes, answers
            questions in real-time, and makes sure nothing falls through the
            cracks.
          </motion.p>

          {/* Email capture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 w-full flex justify-center"
          >
            <EmailCapture />
          </motion.div>

          {/* Platform logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-5"
          >
            <PlatformLogos />
          </motion.div>

          {/* Meeting simulation */}
          <div className="mt-12 sm:mt-16 w-full">
            <MeetingSimulation />
          </div>
        </div>
      </div>
    </section>
  );
}
