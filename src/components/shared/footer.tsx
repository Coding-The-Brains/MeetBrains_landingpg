"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Logo } from "./logo";

const footerLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "mailto:hello@meetbrains.ai" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-8 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <Logo />
          <span className="text-xs text-muted-foreground">
            &copy; 2026 MeetBrains. All rights reserved.
          </span>
        </motion.div>

        <div className="flex items-center gap-6">
          {footerLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              whileHover={{ y: -1 }}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </motion.a>
          ))}

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center cursor-pointer hover:border-primary/30 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5 text-muted-foreground" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
