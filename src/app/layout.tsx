import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

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
    return "https://meetally.ai";
  }

  return envUrl.startsWith("http") ? envUrl : `https://${envUrl}`;
}

const siteUrl = resolveSiteUrl();
const siteTitle = "MeetAlly - The AI That Actually Shows Up to Your Meetings";
const siteDescription =
  "MeetAlly is an AI meeting agent with a 3D avatar that joins your calls, takes notes, answers questions in real-time, and generates action items. Works with Zoom, Google Meet, and Microsoft Teams.";

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
      "An active AI participant that joins your meetings with a 3D avatar, speaks in real-time, answers questions, and generates action items.",
    type: "website",
    url: "/",
    siteName: "MeetAlly",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description:
      "An active AI participant that joins your meetings with a 3D avatar, speaks in real-time, answers questions, and generates action items.",
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
      className={cn(plusJakarta.variable, jetbrainsMono.variable)}
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
