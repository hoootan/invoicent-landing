import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage(): ImageResponse {
  // Same as OG image, duplicated because Next.js forbids re-exporting route config.
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background:
            "radial-gradient(1000px 600px at 20% 30%, rgba(160, 80, 255, 0.35), rgba(0,0,0,0) 60%), radial-gradient(900px 500px at 85% 20%, rgba(70, 230, 210, 0.18), rgba(0,0,0,0) 55%), #07070a",
          color: "white",
          fontFamily: "ui-sans-serif, system-ui",
        }}
      >
        <div style={{ fontSize: 22, opacity: 0.85, marginBottom: 16 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ fontSize: 28, opacity: 0.8, marginTop: 22, maxWidth: 950 }}>
          {siteConfig.description}
        </div>
        <div style={{ fontSize: 18, opacity: 0.7, marginTop: 34 }}>
          Download on the App Store
        </div>
      </div>
    ),
    size
  );
}
