"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { SIGNUP_URL, LOGIN_URL } from "./signup-cta";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Sign in", href: LOGIN_URL },
];

// Sidebar overlay + slide-in variants
const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const drawerVariants = {
  closed: { x: "100%" },
  open: {
    x: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  },
};

const drawerItemVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeDrawer = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      {/* ─── Top Navbar ─── */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-3"
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "mt-2 max-w-4xl rounded-2xl border border-nav-border bg-nav-bg px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
              : "mt-0 max-w-[1240px] border border-transparent bg-transparent px-3 py-4"
          }`}
        >
          {/* Left: Logo */}
          <Logo />

          {/* Center: Desktop nav links (pill style) */}
          <div className="hidden md:flex items-center gap-1 rounded-full bg-muted/60 dark:bg-muted/40 border border-border/50 px-1.5 py-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 cursor-pointer rounded-full"
                >
                  <span
                    className={`relative z-10 ${
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-pill"
                      className="absolute inset-0 bg-card rounded-full shadow-sm border border-border/50 -z-0"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="hidden sm:block">
              <Button asChild className="h-9 rounded-full cursor-pointer px-5 gap-2">
                <a href={SIGNUP_URL}>
                  Get started
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </Button>
            </motion.div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden w-9 h-9 rounded-xl border border-border bg-card flex items-center justify-center cursor-pointer hover:bg-muted transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ─── Mobile Drawer Sidebar ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              key="drawer-overlay"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.25 }}
              onClick={closeDrawer}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />

            {/* Drawer panel — slides from right */}
            <motion.aside
              key="drawer-panel"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 z-[70] w-[280px] bg-card border-l border-border shadow-2xl md:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-border shrink-0">
                <span className="text-sm font-bold text-foreground">Menu</span>
                <button
                  onClick={closeDrawer}
                  className="w-8 h-8 rounded-lg border border-border flex items-center justify-center cursor-pointer hover:bg-muted transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4 text-foreground" />
                </button>
              </div>

              {/* Drawer nav links */}
              <nav className="flex-1 px-4 py-5 space-y-1 overflow-y-auto">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={closeDrawer}
                      custom={i}
                      variants={drawerItemVariants}
                      initial="closed"
                      animate="open"
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                        isActive
                          ? "bg-primary/8 text-primary border border-primary/15"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      )}
                      {link.label}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Drawer footer CTA */}
              <motion.div
                custom={navLinks.length}
                variants={drawerItemVariants}
                initial="closed"
                animate="open"
                className="p-4 border-t border-border shrink-0 space-y-3"
              >
                <Button asChild className="w-full h-11 rounded-xl cursor-pointer gap-2">
                  <a href={SIGNUP_URL} onClick={closeDrawer}>
                    <Sparkles className="w-4 h-4" />
                    Get started free
                  </a>
                </Button>
                <p className="text-[10px] text-center text-muted-foreground/60">
                  Free during beta &middot; No credit card
                </p>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
