import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "@fontsource-variable/geist";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";


const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

function resolveSiteUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL;

  if (!envUrl) {
    return "https://meetbrains.ai";
  }

  return envUrl.startsWith("http") ? envUrl : `https://${envUrl}`;
}

const siteUrl = resolveSiteUrl();
const siteTitle = "MeetBrains - Your AI Agent That Actually Speaks in Meetings";
const siteDescription =
  "MeetBrains sends a custom AI agent to your Zoom, Google Meet, or Teams calls. It greets participants, answers questions using your documents, and delivers a full report after.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "AI meeting assistant",
    "AI notetaker",
    "meeting bot",
    "AI agent",
    "meeting notes",
    "action items",
    "Zoom AI",
    "Google Meet AI",
    "Microsoft Teams AI",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description:
      "Send a custom AI agent to your Zoom, Google Meet, or Teams calls. It greets participants, answers questions using your documents, and delivers a full report after.",
    type: "website",
    url: "/",
    siteName: "MeetBrains",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description:
      "Send a custom AI agent to your Zoom, Google Meet, or Teams calls. It greets participants, answers questions using your documents, and delivers a full report after.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(jetbrainsMono.variable)}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-background text-foreground font-sans antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
