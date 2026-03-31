"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const phrases = [
  "your standups",
  "your sales calls",
  "your team syncs",
  "your client meetings",
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
    <span className="relative inline-flex overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="inline-block text-primary"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
