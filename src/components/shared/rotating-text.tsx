"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const phrases = [
  "your standups",
  "your sales calls",
  "your team syncs",
  "your client meetings",
  "your strategy reviews",
];

export function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-flex overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          initial={{ y: 30, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -30, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block text-gradient animate-gradient-shift"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
