"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmailCapture({ id }: { id?: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;

    setLoading(true);
    // TODO: Wire up Supabase/ConvertKit for email collection
    console.log("Waitlist email:", email);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="flex items-center gap-2.5 px-5 py-3.5 rounded-2xl bg-teal/10 border border-teal/20 text-teal font-medium text-sm"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 400, damping: 15 }}
          >
            <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center">
              <Check className="w-3.5 h-3.5" />
            </div>
          </motion.div>
          <div>
            <span className="font-semibold">You&apos;re in!</span>
            <span className="text-teal/70 ml-1.5">We&apos;ll reach out when it&apos;s your turn.</span>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Sparkles className="w-4 h-4 text-teal/50" />
          </motion.div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="relative flex flex-col sm:flex-row gap-3 w-full max-w-md"
          id={id}
        >
          {/* Glow ring behind input when focused */}
          <motion.div
            className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-teal/20 to-primary/20 blur-lg pointer-events-none"
            animate={{ opacity: focused ? 0.6 : 0 }}
            transition={{ duration: 0.3 }}
          />

          <div className="relative flex-1">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Enter your work email"
              className="w-full h-12 px-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
              aria-label="Work email address"
            />
          </div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              type="submit"
              disabled={loading}
              className="h-12 px-6 rounded-xl cursor-pointer gap-2 text-sm font-semibold w-full sm:w-auto"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  Join Waitlist
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </motion.div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
