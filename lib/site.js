// Note: Set NEXT_PUBLIC_SITE_URL env var on Vercel to override production URL

export const SITE = {
  name: "GTA6 Vault",
  tagline: "Verified. Curated. Daily.",
  // Short desc for meta (100-130 chars)
  description:
    "GTA6 Vault: Verified GTA 6 news hub. Leaks, rumors & trailers tagged for credibility.",
  // Long desc for SEO
  longDescription:
    "GTA6 Vault is the premium hub for Grand Theft Auto 6 news. Every leak, trailer breakdown, and rumor is tagged Verified, Rumor, or Debunked so you always know what's real.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gta6-vault.com",
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
