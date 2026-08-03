"use client";

import { motion } from "framer-motion";

/**
 * MeetBrains identity — the "Presence" mark.
 *
 * One circle in two states: the left lobe solid and lit, the delegate present and speaking; the
 * right half an open ring, you, absent but still accounted for. Two shapes, two values, no face —
 * it has to survive 16px cropped to a circle in a participant grid, beside photographs of people.
 *
 * The mark is never rotated. The seam is a vertical horizon, and tilted the whole thing reads as a
 * loading spinner, so the hover here lifts the seam rather than turning the circle.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#"
      aria-label="MeetBrains home"
      className={`flex items-center gap-2.5 cursor-pointer group ${className ?? ""}`}
    >
      <motion.svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        aria-hidden="true"
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
      >
        <defs>
          <linearGradient id="mb-presence-nav" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="var(--mark-deep)" />
            <stop offset=".6" stopColor="var(--mark-core)" />
            <stop offset="1" stopColor="var(--mark-lift)" />
          </linearGradient>
        </defs>

        {/* The open half — you, absent but accounted for. It closes a little on hover. */}
        <motion.path
          d="M63.6 8.15A44 44 0 0 1 63.6 91.85L60.2 81.39A33 33 0 0 0 60.2 18.61Z"
          fill="var(--mark-core)"
          variants={{ rest: { opacity: 0.34 }, hover: { opacity: 0.55 } }}
        />
        {/* The lit half — the delegate, in the room. */}
        <path d="M50 6a44 44 0 0 0 0 88c9-16 9-72 0-88Z" fill="url(#mb-presence-nav)" />
        {/* The seam: the one lit edge, where the handoff happens. */}
        <motion.path
          d="M50 6c9 16 9 72 0 88"
          fill="none"
          stroke="var(--mark-seam)"
          strokeWidth="2.4"
          strokeLinecap="round"
          variants={{ rest: { opacity: 0.75 }, hover: { opacity: 1 } }}
        />
      </motion.svg>

      {/* "Meet" leads at 600, "Brains" resolves at 200 — the weight break is the family logic, and
          every sibling brand is typeset identically. The wordmark is never coloured: colour belongs
          to the mark alone. */}
      <span className="text-lg leading-none tracking-[-0.02em] text-foreground select-none">
        <span className="font-semibold">Meet</span>
        <span className="font-extralight">Brains</span>
      </span>
    </a>
  );
}
