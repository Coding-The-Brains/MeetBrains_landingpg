import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server bundle: the box has no Node toolchain and only ~0.5GB free RAM, so the
  // build happens off-box and only .next/standalone + static assets are shipped.
  output: "standalone",
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;
