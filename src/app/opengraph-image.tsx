import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MEGATHON — Europe's Biggest Launchpad. June 19–21, 2026, Amsterdam.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(212,168,67,0.28) 0%, rgba(212,168,67,0.06) 35%, #0a0a0a 70%), #0a0a0a",
          padding: "80px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: 8,
            color: "#d4a843",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              background: "#d4a843",
              transform: "rotate(45deg)",
              display: "flex",
            }}
          />
          <span>June 19–21, 2026 / Amsterdam</span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 200,
            fontWeight: 900,
            lineHeight: 1,
            marginTop: 32,
            letterSpacing: -4,
            color: "#d4a843",
            textShadow: "0 0 60px rgba(212,168,67,0.45)",
          }}
        >
          MEGATHON
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 44,
            fontWeight: 700,
            marginTop: 28,
            color: "rgba(255,255,255,0.92)",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Europe&apos;s biggest Launchpad.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            marginTop: 8,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.3,
            maxWidth: 900,
          }}
        >
          48 hours to prove Europe builds different.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "auto",
            gap: 48,
            fontSize: 22,
            color: "rgba(255,255,255,0.75)",
            letterSpacing: 2,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          <span style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ color: "#d4a843" }}>500+</span>Founders
          </span>
          <span style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ color: "#d4a843" }}>€100K+</span>Prize Pool
          </span>
          <span style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ color: "#d4a843" }}>5+</span>Countries
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
