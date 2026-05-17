// Note: Set NEXT_PUBLIC_SITE_URL env var on Vercel to override production URL
// Production URL must match domain configured in Google Search Console (with www)

// SEO metadata for homepage
export const HOME_SEO = {
  title: "GTA 6 News Hub — Breaking Updates & Trailer Analysis",
  description: "GTA6 Vault: Verified GTA 6 news hub with breaking news, leaks, rumors & trailer breakdowns. Every story tagged for credibility — know what's real.",
};

// SEO metadata for news page
export const NEWS_SEO = {
  title: "GTA 6 Latest News & Updates — All Articles",
  description: "Complete GTA 6 news archive. Verified trailers, leaks, rumors, character updates, and pre-order information. Tracked with confidence scores.",
};

export const SITE = {
  name: "GTA6 Vault — News Hub",
  tagline: "GTA 6 News — Verified. Curated. Daily.",
  // Meta description (120-160 chars for better CTR)
  description:
    "GTA6 Vault: Verified GTA 6 news hub with breaking news, leaks, rumors & trailer breakdowns. Every story tagged for credibility — know what's real.",
  // Long desc for SEO
  longDescription:
    "GTA6 Vault is the premium hub for Grand Theft Auto 6 news. Every leak, trailer breakdown, and rumor is tagged Verified, Rumor, or Debunked. Track the latest Trailer 3 rumors, pre-order news, and release date updates.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.gta6-vault.com",
  locale: "en_US",
  twitter: "@gta6vault",
  twitterUrl: "https://twitter.com/gta6vault",
  youtube: "https://www.youtube.com/@gta6vault",
  instagram: "https://instagram.com/gta6vault",
  facebook: "https://facebook.com/gta6vault",
  linkedin: "https://linkedin.com/company/gta6vault",
  email: "tips@gta6-vault.com",
  discord: "https://discord.gg/gta6vault",
  releaseDate: "2026-11-19T00:00:00-05:00",
};
