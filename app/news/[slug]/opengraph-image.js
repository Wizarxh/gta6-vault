import { ImageResponse } from "next/og";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { SITE } from "@/lib/site";

export const alt = "GTA6 Vault article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

const STATUS_GRADIENT = {
  VERIFIED: "linear-gradient(135deg, #34d399 0%, #10b981 100%)",
  RUMOR: "linear-gradient(135deg, #FFD23F 0%, #f59e0b 100%)",
  DEBUNKED: "linear-gradient(135deg, #FF6B9D 0%, #ff1493 100%)",
};

export default async function Image({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const title = article?.title ?? "GTA6 Vault";
  const status = article?.status ?? "VERIFIED";
  const category = article?.category ?? "Dispatch";
  const gradient = STATUS_GRADIENT[status] ?? "linear-gradient(135deg, #FF6B9D 0%, #00D4FF 100%)";

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
          background: gradient,
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
                border: `2px solid rgba(255,255,255,0.8)`,
                color: "#fff",
                background: "rgba(0,0,0,0.45)",
                borderRadius: 999,
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: 4,
                textTransform: "uppercase",
                display: "flex",
              }}
            >
              {status}
            </div>
            <div
              style={{
                padding: "8px 16px",
                border: "2px solid rgba(255,255,255,0.45)",
                color: "#fff",
                background: "rgba(0,0,0,0.45)",
                borderRadius: 999,
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: 4,
                textTransform: "uppercase",
                display: "flex",
              }}
            >
              {category}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 1000,
          }}
        >
          <div
            style={{
              fontSize: title.length > 60 ? 56 : 72,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: -1,
              display: "flex",
              textShadow: "0 4px 24px rgba(0,0,0,0.45)",
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "rgba(255,255,255,0.85)",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex" }}>
            {article?.author ?? "GTA6 Vault editorial"}
          </div>
          <div style={{ display: "flex" }}>{SITE.url.replace("https://", "")}</div>
        </div>
      </div>
    ),
    size,
  );
}
