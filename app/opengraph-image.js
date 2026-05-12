import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background:
            "radial-gradient(1000px 600px at 80% -10%, rgba(255,107,157,0.4), transparent 60%), radial-gradient(900px 500px at -5% 10%, rgba(0,212,255,0.35), transparent 60%), #0a0a0a",
          color: "#f5f3ff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 10,
              background: "linear-gradient(135deg, #FF6B9D, #00D4FF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#000",
              fontWeight: 900,
              fontSize: 22,
              letterSpacing: 1,
            }}
          >
            VI
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 8,
              textTransform: "uppercase",
              display: "flex",
              gap: 4,
            }}
          >
            <span style={{ color: "#FF6B9D" }}>GTA6</span>
            <span style={{ color: "#00D4FF" }}>Vault</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 1,
              textTransform: "uppercase",
              letterSpacing: -2,
              backgroundImage:
                "linear-gradient(180deg, #FF6B9D 0%, #FFD23F 50%, #00D4FF 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Welcome back
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 1,
              textTransform: "uppercase",
              letterSpacing: -2,
              backgroundImage:
                "linear-gradient(180deg, #FF6B9D 0%, #FFD23F 50%, #00D4FF 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            to Vice City.
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 28,
              color: "#9aa0b4",
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            {SITE.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            color: "#9aa0b4",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div>Launch &middot; 19 Nov 2026</div>
          <div>gta6vault.example.com</div>
        </div>
      </div>
    ),
    size,
  );
}
