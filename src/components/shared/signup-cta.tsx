"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * The product is live, so the landing page no longer collects emails for a
 * list: it sends people to the app to create an account. The email field is
 * kept because it is the one thing every visitor has ready, and carrying it
 * across means the sign-up form opens already filled in.
 */
const APP_URL = (process.env.NEXT_PUBLIC_APP_URL ?? "https://app.meetbrains.ai").replace(/\/$/, "");

export const SIGNUP_URL = `${APP_URL}/signup`;
export const LOGIN_URL = `${APP_URL}/login`;

export function signupHref(email?: string) {
  const trimmed = email?.trim();
  return trimmed ? `${SIGNUP_URL}?email=${encodeURIComponent(trimmed)}` : SIGNUP_URL;
}

export function SignupCta({ id }: { id?: string }) {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.assign(signupHref(email));
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="relative w-full" id={id}>
        {/* Glow ring behind input when focused */}
        <motion.div
          className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-teal/20 to-primary/20 blur-lg pointer-events-none"
          animate={{ opacity: focused ? 0.6 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <div className="relative flex-1">
            <input
              type="email"
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
            {/* A real link, not a scripted button: the primary call to action should
                survive right-click, middle-click and a crawler. The href tracks what
                has been typed, and the form's submit handler covers pressing Enter
                inside the field. */}
            <Button
              asChild
              className="h-12 px-6 rounded-xl cursor-pointer gap-2 text-sm font-semibold w-full sm:w-auto"
            >
              <a href={signupHref(email)}>
                Get started free
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </form>

      <p className="mt-3 text-sm text-muted-foreground">
        Already have an account?{" "}
        <a href={LOGIN_URL} className="font-medium text-primary hover:underline underline-offset-4">
          Sign in
        </a>
      </p>
    </div>
  );
}
