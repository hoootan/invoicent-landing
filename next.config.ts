import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // App Store badges are bundled locally in /public/badges
  // next/image + svg can be flaky depending on host/CDN, so explicitly allow it.
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
