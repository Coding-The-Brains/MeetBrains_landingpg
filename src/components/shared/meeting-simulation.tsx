"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Users } from "lucide-react";
import { AvatarPhoto } from "./avatar-photo";

const transcriptLines = [
  "Hi everyone, glad to join today\u2019s strategy review. I\u2019ve reviewed the uploaded docs and I\u2019m ready to help.",
  "Sarah, based on the product brief you uploaded, the timeline shows Phase 2 starting next month.",
  "I can answer that. The Q1 metrics doc mentions a 23% increase in API response time.",
  "James, I\u2019ve noted that as an action item. I\u2019ll include it in the post-meeting report.",
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


/** The Presence mark at participant-tile scale. Two shapes, no seam — the seam is a 2.4px stroke on
 *  a 100-unit canvas, which disappears below about 20px anyway, so it is dropped rather than smeared. */
function PresenceGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <path
        d="M63.6 8.15A44 44 0 0 1 63.6 91.85L60.2 81.39A33 33 0 0 0 60.2 18.61Z"
        fill="var(--mark-core)"
        opacity=".38"
      />
      <path d="M50 6a44 44 0 0 0 0 88c9-16 9-72 0-88Z" fill="var(--mark-core)" />
    </svg>
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
  // The agent shows its mark, the humans show their faces — which is precisely the situation the
  // mark was drawn for: a small circular crop beside real photographs.
  const avatar = isAI ? (
    <span className="grid w-9 h-9 sm:w-12 sm:h-12 place-items-center rounded-full bg-primary/12 ring-1 ring-primary/25">
      <PresenceGlyph className="w-5 h-5 sm:w-7 sm:h-7" />
    </span>
  ) : (
    <AvatarPhoto
      name={name}
      src={avatarSrc}
      fallback={initials}
      sizes="48px"
      className="w-9 h-9 sm:w-12 sm:h-12 shadow-sm ring-1 ring-black/5 dark:ring-white/10"
      fallbackClassName={colorClass}
      textClassName="text-white font-bold text-xs sm:text-sm"
    />
  );
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative flex flex-col items-center justify-center rounded-xl p-3 sm:p-5 min-h-[110px] sm:min-h-[140px] transition-all duration-200 ${
        isAI
          ? "bg-gradient-to-b from-primary/[0.08] to-primary/[0.03] dark:from-primary/15 dark:to-primary/5 border-2 border-primary/30 shadow-[0_0_0_1px_hsl(var(--primary)/0.10)] dark:shadow-[0_0_16px_hsl(var(--primary)/0.14)]"
          : "bg-muted/60 border border-border"
      }`}
    >
      {isAI && (
        <>
          <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[9px] font-bold font-mono uppercase tracking-wider bg-primary text-primary-foreground rounded-full whitespace-nowrap shadow-sm">
            AI Agent
          </span>
          {/* Pulse ring for active AI */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-primary/20"
            animate={{ scale: [1, 1.03, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {avatar}

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
    </motion.div>
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
        <span className="text-[10px] font-bold font-mono text-primary">MeetBrains</span>
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
      <span className="text-[9px] text-muted-foreground font-medium">Powered by</span>
      {["Knowledge Base", "Voice AI", "Auto Reports"].map((label) => (
        <span
          key={label}
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/8 dark:bg-primary/15 border border-primary/15 dark:border-primary/25"
        >
          <span className="text-[9px] font-medium text-foreground/70">{label}</span>
        </span>
      ))}
    </div>
  );
}

export function MeetingSimulation() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Multi-layer glow */}
      <div className="absolute -inset-6 bg-gradient-to-br from-primary/8 via-transparent to-teal/8 rounded-3xl blur-3xl opacity-80 dark:opacity-50 pointer-events-none" />
      <motion.div
        className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/5 to-teal/5"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Window frame */}
      <div className="relative rounded-2xl border border-border bg-card shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.3)] overflow-hidden">

        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/40 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57] cursor-default" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E] cursor-default" />
              <span className="w-3 h-3 rounded-full bg-[#28C840] cursor-default" />
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
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-destructive"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
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
            name="MeetBrains"
            role="AI Teammate"
            initials="MB"
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

        {/* Transcript + chips */}
        <div className="px-3 sm:px-5 pb-3 sm:pb-4 space-y-2">
          <div className="rounded-xl bg-muted/60 border border-border p-3 sm:p-3.5">
            <TypewriterTranscript />
          </div>
          <div className="px-1">
            <IntegrationChips />
          </div>
        </div>
      </div>
    </div>
  );
}
