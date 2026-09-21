"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * The product is live, so the landing page sends people to the app to create an
 * account.
 *
 * Deliberately no email field. It belonged to the waiting list, where handing
 * over an address WAS the action. Sign-up asks for the same address one screen
 * later, so keeping it here just means typing it twice and turns one button
 * into a form.
 */
const APP_URL = (process.env.NEXT_PUBLIC_APP_URL ?? "https://app.meetbrains.ai").replace(/\/$/, "");

export const SIGNUP_URL = `${APP_URL}/signup`;
export const LOGIN_URL = `${APP_URL}/login`;

export function SignupCta({ id, align = "start" }: { id?: string; align?: "start" | "center" }) {
  return (
    <div
      id={id}
      className={
        align === "center"
          ? "flex flex-col items-center gap-3"
          : "flex flex-col items-start gap-3 max-lg:items-center"
      }
    >
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Button
          asChild
          className="h-12 px-7 rounded-xl cursor-pointer gap-2 text-sm font-semibold"
        >
          <a href={SIGNUP_URL}>
            Get started free
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </motion.div>

      <p className="text-sm text-muted-foreground">
        Already have an account?{" "}
        <a href={LOGIN_URL} className="font-medium text-primary hover:underline underline-offset-4">
          Sign in
        </a>
      </p>
    </div>
  );
}
