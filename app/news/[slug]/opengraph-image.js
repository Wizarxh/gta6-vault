import { ImageResponse } from "next/og";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";

export const alt = "GTA6 Vault article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

const STATUS_COLOR = {
  VERIFIED: "#34d399",
  RUMOR: "#FFD23F",
  DEBUNKED: "#FF6B9D",
};

const STATUS_GRADIENT = {
  VERIFIED: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
  RUMOR: "linear-gradient(135deg, #0a0a0a 0%, #2d2d1a 100%)",
  DEBUNKED: "linear-gradient(135deg, #0a0a0a 0%, #2d1a1a 100%)",
};

export default async function Image({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const title = article?.title ?? "GTA6 Vault";
  const status = article?.status ?? "VERIFIED";
  const category = article?.category ?? "Dispatch";
  const accent = STATUS_COLOR[status] ?? "#FF6B9D";
  const bgGradient = STATUS_GRADIENT[status] ?? "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)";

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
          background: bgGradient,
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.85) 100%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 8,
                background: "linear-gradient(135deg, #FF6B9D, #00D4FF)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#000",
                fontWeight: 900,
                fontSize: 18,
              }}
            >
              VI
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: 6,
                textTransform: "uppercase",
                display: "flex",
                gap: 4,
              }}
            >
              <span style={{ color: "#FF6B9D" }}>GTA6</span>
              <span style={{ color: "#00D4FF" }}>Vault</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <div
              style={{
                padding: "8px 16px",
                border: `2px solid ${accent}`,
                color: accent,
                background: "rgba(0,0,0,0.45)",
                borderRadius: 999,
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {status}
            </div>
          </div>
        </div>

        <div style={{ zIndex: 10 }}>
          <h1
            style={{
              fontSize: 56,
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 24,
              maxWidth: "90%",
            }}
          >
            {title}
          </h1>
          <div
            style={{
              display: "flex",
              gap: 20,
              fontSize: 18,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            <span>{category}</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 14,
            color: "rgba(255,255,255,0.6)",
            zIndex: 10,
          }}
        >
          <span>GTA6 Vault • Verified. Curated. Daily.</span>
          <span>gta6vault.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
