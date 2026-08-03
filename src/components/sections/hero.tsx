"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, AudioLines } from "lucide-react";
import { EmailCapture } from "@/components/shared/email-capture";
import { RotatingText } from "@/components/shared/rotating-text";
import { MeetingSimulation } from "@/components/shared/meeting-simulation";
import { ZoomIcon, GoogleMeetIcon, MicrosoftTeamsIcon } from "@/components/shared/brand-icons";
import { useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function PlatformLogos() {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {[
        { Icon: ZoomIcon, label: "Zoom" },
        { Icon: GoogleMeetIcon, label: "Meet" },
        { Icon: MicrosoftTeamsIcon, label: "Teams" },
      ].map(({ Icon, label }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 + i * 0.1, duration: 0.4, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.06, y: -1 }}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted border border-border cursor-default"
        >
          <Icon className="w-3.5 h-3.5" />
          <span className="text-[11px] font-medium text-foreground/70">{label}</span>
        </motion.div>
      ))}
    </div>
  );
}

function WaitlistCounter() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="flex items-center gap-2 text-xs text-muted-foreground"
    >
      {/* Stacked avatars */}
      <div className="flex -space-x-2">
        {["bg-muted-foreground/70", "bg-muted-foreground/55", "bg-muted-foreground/40", "bg-muted-foreground/25"].map((bg, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.3 + i * 0.05, type: "spring", stiffness: 300 }}
            className={`w-6 h-6 rounded-full ${bg} border-2 border-background flex items-center justify-center`}
          >
            <span className="text-[8px] font-bold text-background">
              {["S", "J", "M", "A"][i]}
            </span>
          </motion.div>
        ))}
      </div>
      <span>
        <span className="font-semibold text-foreground">143+</span> people on the waitlist
      </span>
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const simY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={ref} className="relative pt-24 sm:pt-28 pb-16 lg:pb-24 overflow-x-clip">
      {/* Aurora orbs with parallax */}
      <motion.div
        style={{ y: orbY1 }}
        className="absolute -top-20 -left-32 w-[600px] h-[600px] bg-primary/[0.05] dark:bg-primary/[0.08] rounded-full blur-[120px] pointer-events-none animate-aurora"
      />
      <motion.div
        style={{ y: orbY2 }}
        className="absolute top-40 -right-20 w-[400px] h-[400px] bg-teal/[0.04] dark:bg-teal/[0.07] rounded-full blur-[100px] pointer-events-none animate-aurora"
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-primary/[0.03] dark:bg-primary/[0.05] rounded-full blur-[100px] pointer-events-none"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* ─── Two-column split layout ─── */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">

          {/* ─── Left: Text content ─── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left max-lg:items-center max-lg:text-center"
          >
            {/* Badge with shimmer */}
            <motion.div variants={item}>
              <motion.span
                whileHover={{ scale: 1.04 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold bg-primary/8 dark:bg-primary/12 text-primary border border-primary/20 cursor-default"
              >
                <Sparkles className="w-3 h-3" />
                Coming Q3 2026
              </motion.span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="mt-6 text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-5xl font-extrabold tracking-[-0.03em] leading-[1.14] sm:leading-[1.12]"
            >
              Your AI agent that
              <br className="hidden sm:block" />
              actually{" "}
              <span className="relative inline-flex items-center">
                <span className="text-gradient animate-gradient-shift">speaks</span>
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="ml-1.5"
                >
                  <AudioLines className="w-5 h-5 sm:w-6 sm:h-6 text-primary/60" />
                </motion.span>
              </span>
              {" "}in
              <br />
              <RotatingText />
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={item}
              className="mt-5 text-base sm:text-[17px] text-muted-foreground max-w-[480px] leading-[1.7]"
            >
              Build a custom agent. Upload your docs. Send it to Zoom, Meet, or
              Teams. Get a full report after.
            </motion.p>

            {/* Email capture */}
            <motion.div variants={item} className="mt-7 w-full max-w-md max-lg:mx-auto">
              <EmailCapture />
            </motion.div>

            {/* Waitlist counter */}
            <motion.div variants={item} className="mt-4 max-lg:mx-auto">
              <WaitlistCounter />
            </motion.div>

            {/* Platform logos */}
            <motion.div variants={item} className="mt-5 max-lg:mx-auto">
              <PlatformLogos />
            </motion.div>
          </motion.div>

          {/* ─── Right: Product demo (meeting simulation) ─── */}
          <motion.div
            style={{ y: simY }}
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Glow ring behind the simulation */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/[0.06] via-transparent to-teal/[0.06] rounded-3xl blur-2xl pointer-events-none animate-glow-pulse" />

            <MeetingSimulation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
