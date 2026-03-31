"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Users } from "lucide-react";
import { SlackIcon } from "./brand-icons";
import { AvatarPhoto } from "./avatar-photo";

const transcriptLines = [
  "Based on the last 3 standups, the API migration is 2 days behind schedule. Want me to flag it?",
  "Sarah, you mentioned exploring Stripe last Tuesday \u2014 here\u2019s a quick comparison I pulled together.",
  "I\u2019ve assigned 4 action items from this meeting. Sending to Slack now.",
  "James, the latency issue you raised matches a ticket from Sprint 12. Should I link them?",
  "Summary ready: 3 decisions made, 4 action items, 1 blocker identified.",
];

function AudioBars() {
  return (
    <div className="flex items-end gap-[2px] h-4" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full bg-primary"
          animate={{ height: ["3px", "14px", "5px", "12px", "3px"] }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            delay: i * 0.13,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function MeetingTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");

  return (
    <span className="font-mono text-[10px] text-muted-foreground tabular-nums">
      {m}:{s}
    </span>
  );
}

function ParticipantTile({
  name,
  role,
  initials,
  avatarSrc,
  colorClass,
  isAI,
}: {
  name: string;
  role: string;
  initials: string;
  avatarSrc?: string;
  colorClass: string;
  isAI?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center rounded-xl p-3 sm:p-5 min-h-[110px] sm:min-h-[140px] transition-all duration-200 ${
        isAI
          ? "bg-gradient-to-b from-primary/[0.08] to-primary/[0.03] dark:from-primary/15 dark:to-primary/5 border-2 border-primary/30 shadow-[0_0_0_1px_rgba(91,76,255,0.08)] dark:shadow-[0_0_12px_rgba(123,111,255,0.12)]"
          : "bg-muted/60 border border-border"
      }`}
    >
      {isAI && (
        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[9px] font-bold font-mono uppercase tracking-wider bg-primary text-white rounded-full whitespace-nowrap shadow-sm">
          AI Agent
        </span>
      )}

      {/* Avatar */}
      <AvatarPhoto
        name={name}
        src={avatarSrc}
        fallback={initials}
        sizes="48px"
        className="w-9 h-9 sm:w-12 sm:h-12 shadow-sm ring-1 ring-black/5 dark:ring-white/10"
        fallbackClassName={colorClass}
        textClassName="text-white font-bold text-xs sm:text-sm"
      />

      <p className="mt-2 text-[10px] sm:text-xs font-semibold text-foreground text-center leading-tight">
        {name}
      </p>
      <p className="text-[9px] sm:text-[10px] text-muted-foreground text-center mt-0.5">
        {role}
      </p>

      {isAI && (
        <div className="mt-2 flex items-center gap-1.5">
          <AudioBars />
        </div>
      )}

      {!isAI && (
        <div className="mt-2 flex gap-[3px] items-end h-3" aria-hidden="true">
          {[2, 4, 3, 5, 2].map((h, i) => (
            <div
              key={i}
              className="w-[2px] rounded-full bg-muted-foreground/20"
              style={{ height: `${h * 2}px` }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function TypewriterTranscript() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentLine = transcriptLines[lineIndex];

  useEffect(() => {
    if (!isDeleting && charIndex < currentLine.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 26);
      return () => clearTimeout(t);
    }
    if (!isDeleting && charIndex === currentLine.length) {
      const t = setTimeout(() => setIsDeleting(true), 2800);
      return () => clearTimeout(t);
    }
    if (isDeleting) {
      const t = setTimeout(() => {
        setCharIndex(0);
        setIsDeleting(false);
        setLineIndex((l) => (l + 1) % transcriptLines.length);
      }, 350);
      return () => clearTimeout(t);
    }
  }, [charIndex, isDeleting, currentLine.length, lineIndex]);

  return (
    <div className="flex items-start gap-2.5 min-h-[2.5rem]">
      <div className="shrink-0 mt-0.5 flex items-center gap-1.5">
        <span className="inline-block w-5 h-5 rounded-full bg-gradient-to-br from-primary to-teal flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="white" aria-hidden="true">
            <circle cx="5" cy="5" r="2.5" />
          </svg>
        </span>
        <span className="text-[10px] font-bold font-mono text-primary">MeetAlly</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.span
          key={lineIndex + (isDeleting ? "-out" : "")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed"
        >
          {isDeleting ? "" : currentLine.slice(0, charIndex)}
          {!isDeleting && (
            <span className="inline-block w-[2px] h-3 bg-primary ml-0.5 align-middle animate-pulse" />
          )}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function IntegrationChips() {
  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      <span className="text-[9px] text-muted-foreground font-medium">Sending to</span>
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#4A154B]/8 dark:bg-[#4A154B]/20 border border-[#4A154B]/15 dark:border-[#4A154B]/25">
        <SlackIcon className="w-2.5 h-2.5" />
        <span className="text-[9px] font-medium text-foreground/70">Slack</span>
      </span>
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-border/50 border border-border">
        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#0052CC" />
          <path d="M7 12.5l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[9px] font-medium text-foreground/70">Jira</span>
      </span>
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-border/50 border border-border">
        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="#E8E8E8" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#191919" />
          <path d="M7 7h4v10H7zM13 7h4v4h-4z" fill="white" />
        </svg>
        <span className="text-[9px] font-medium text-foreground/70">Notion</span>
      </span>
    </div>
  );
}

export function MeetingSimulation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-3xl mx-auto"
    >
      {/* Multi-layer ambient glow */}
      <div className="absolute -inset-6 bg-gradient-to-br from-primary/8 via-transparent to-teal/8 rounded-3xl blur-3xl opacity-80 dark:opacity-50 pointer-events-none" />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none" />

      {/* Window frame */}
      <div className="relative rounded-2xl border border-border bg-card shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.3)] overflow-hidden">

        {/* macOS-style title bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/40 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57] hover:brightness-90 transition-all cursor-default" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E] hover:brightness-90 transition-all cursor-default" />
              <span className="w-3 h-3 rounded-full bg-[#28C840] hover:brightness-90 transition-all cursor-default" />
            </div>
            <div className="flex items-center gap-2 ml-1">
              <span className="text-xs sm:text-sm font-semibold text-foreground">
                Q2 Strategy Review
              </span>
              <span className="hidden sm:flex items-center gap-1 px-1.5 py-0.5 rounded bg-muted border border-border">
                <Users className="w-2.5 h-2.5 text-muted-foreground" />
                <span className="text-[9px] text-muted-foreground font-medium">3</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MeetingTimer />
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse" />
              <span className="text-[9px] font-bold font-mono text-destructive tracking-wider">REC</span>
            </div>
            <Mic className="w-3.5 h-3.5 text-primary" />
          </div>
        </div>

        {/* Participants grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-5">
          <ParticipantTile
            name="Sarah Kim"
            role="Product Lead"
            initials="SK"
            avatarSrc="https://randomuser.me/api/portraits/women/44.jpg"
            colorClass="bg-gradient-to-br from-blue-500 to-blue-600"
          />
          <ParticipantTile
            name="MeetAlly"
            role="AI Teammate"
            initials="MA"
            colorClass="bg-gradient-to-br from-primary to-teal"
            isAI
          />
          <ParticipantTile
            name="James Rivera"
            role="Engineering"
            initials="JR"
            avatarSrc="https://randomuser.me/api/portraits/men/32.jpg"
            colorClass="bg-gradient-to-br from-orange-500 to-orange-600"
          />
        </div>

        {/* Live transcript + integration bar */}
        <div className="px-3 sm:px-5 pb-3 sm:pb-4 space-y-2">
          <div className="rounded-xl bg-muted/60 border border-border p-3 sm:p-3.5">
            <TypewriterTranscript />
          </div>
          <div className="px-1">
            <IntegrationChips />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
