# GTA6 Vault — Branding Guide

**Version:** 1.0  
**Last Updated:** May 15, 2026  
**Brand Color:** Vice City Neon (Pink + Cyan)

---

## 📐 Logo Usage

### Primary Logo (2048x2048)
**File:** `/public/logo-lg.png`

The primary logo features:
- V shape (neon pink → cyan gradient)
- Realistic cyan/pink glow effect
- Black background
- Perfect for social media, email headers, presentations

**Minimum Size:** 48px × 48px (web header)  
**Preferred Size:** 512px + (social media, print)

### Usage Rules

✅ **DO:**
- Use on dark backgrounds (black, dark purple, very dark blue)
- Add subtle glow effect on hover (websites)
- Maintain aspect ratio (square, 1:1)
- Use full color on dark backgrounds
- Add shadow/glow for depth

❌ **DON'T:**
- Distort or stretch the logo
- Change the color gradient (always pink → cyan)
- Use on light backgrounds without significant darkening
- Add shadows that obscure the glow
- Rotate or flip the logo
- Use without breathing room (see clear space rules below)

### Clear Space

Maintain **minimum 20% of logo height/width** as clear space around the logo.

```
┌─────────────────────────────┐
│  [clear]    [logo]    [clear]│
│  [space]    [glow]    [space]│
└─────────────────────────────┘
```

---

## 🎨 Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Neon Pink** | `#FF6B9D` | rgb(255, 107, 157) | Logo gradient, accents, highlights |
| **Neon Cyan** | `#00D4FF` | rgb(0, 212, 255) | Logo gradient, secondary accents |

### Neutral Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Pure Black** | `#0A0A0A` | rgb(10, 10, 10) | Background, logo background |
| **Dark Gray** | `#1A1A1A` | rgb(26, 26, 26) | Secondary background |
| **Medium Muted** | `#737373` | rgb(115, 115, 115) | Text, secondary text |
| **Light Text** | `#E8E8E8` | rgb(232, 232, 232) | Primary text |

### Status Colors

| Status | Color | Hex |
|--------|-------|-----|
| **VERIFIED** | Emerald Green | `#10B981` |
| **RUMOR** | Yellow | `#FBBF24` |
| **DEBUNKED** | Pink | `#FF6B9D` |

---

## 🔤 Typography

### Display (Headlines)
- **Font Family:** Orbitron (Google Fonts)
- **Weights:** 500, 700, 900
- **Usage:** Main headings, logo text, "Welcome back to Vice City"
- **Letter Spacing:** 0.1em (loose)

### Body Text
- **Font Family:** Inter (Google Fonts)
- **Weight:** 400, 500, 600
- **Usage:** Article content, descriptions, paragraphs
- **Letter Spacing:** Normal

### Monospace (UI, Code)
- **Font Family:** JetBrains Mono (Google Fonts)
- **Weight:** 400, 500, 600
- **Usage:** Navigation labels, category tags, tech specs
- **Letter Spacing:** 0.25em (uppercase), 0.3em (caps)
- **Transform:** UPPERCASE (navigation, labels)

### Hierarchy Example

```
[Display Font - Black, 8xl]
WELCOME BACK TO VICE CITY

[Monospace - Uppercase, 10px]
PREMIUM GTA 6 NEWSROOM

[Body Font - Regular, 1rem]
Verified. Curated. Daily. Every leak, trailer frame, and rumor — 
tagged Verified, Rumor, or Debunked so you always know what's real.
```

---

## 📱 Logo Sizes & Applications

### Website

| Use Case | Size | File |
|----------|------|------|
| Header Logo | 48px × 48px | `/public/logo.png` (512×512) |
| Favicon (Browser Tab) | 32px × 32px | `/public/favicon.ico` (256×256) |
| OG Image (Social Share) | 1200px × 1200px | `/public/logo-lg.png` (2048×2048) |
| Footer Logo | 40px × 40px | `/public/logo.png` (512×512) |

### Social Media Avatars

| Platform | Size | File |
|----------|------|------|
| **TikTok** | 200×200px | `/public/tiktok-avatar.png` |
| **YouTube** | 800×800px | `/public/youtube-avatar.png` |
| **Instagram** | 1080×1080px | `/public/instagram-avatar.png` |
| **Discord** | 512×512px | `/public/discord-avatar.png` |
| **Twitter/X** | 400×400px | `/public/twitter-avatar.png` |

### Social Media Headers

| Platform | Dimensions | File |
|----------|------------|------|
| **TikTok Header** | 2000×500px | `/public/tiktok-header.png` |
| **YouTube Header** | 2560×1440px | `/public/youtube-header.png` |
| **Discord Server Icon** | 512×512px | `/public/discord-server-icon.png` |

### Email & Newsletter

| Use Case | Size | File |
|----------|------|------|
| Beehiiv Email Header | 600×200px | `/public/newsletter-header-base.png` |

---

## ✨ Effects & Animations

### Glow Effect (Web)

**CSS:**
```css
.logo:hover {
  filter: drop-shadow(0 0 12px rgba(255, 107, 157, 0.8))
          drop-shadow(0 0 16px rgba(0, 212, 255, 0.6));
  transition: all 200ms ease;
}
```

**Animated Glow (subtle pulse):**
```css
@keyframes glow-pulse {
  0%, 100% { filter: drop-shadow(0 0 4px rgba(255, 107, 157, 0.6)); }
  50% { filter: drop-shadow(0 0 12px rgba(255, 107, 157, 0.8)); }
}

.logo { animation: glow-pulse 3s ease-in-out infinite; }
```

### Scan Lines (Aesthetic)

Applied to background video and hero sections:
```css
background: repeating-linear-gradient(
  0deg,
  rgba(0, 0, 0, 0.15) 0px,
  rgba(0, 0, 0, 0.15) 1px,
  transparent 1px,
  transparent 3px
);
background-size: 100% 3px;
animation: scanlines 8s linear infinite;
```

---

## 📏 Spacing & Alignment

### Navbar Layout
```
[Logo 48px] [24px gap] [Brand Text]
                            ↓
                    [GTA6 + Vault]
                    [12px spacing]
```

### Footer Layout
```
┌─────────────────────────────────┐
│ [Logo]  [Brand]                 │
│  40px    [GTA6 Vault]           │
│          [small text]           │
│                                 │
│ [Description text...]           │
└─────────────────────────────────┘
```

---

## 🚀 Implementation Checklist

- [x] Logo created (2048×2048, neon pink/cyan gradient)
- [x] Header integration (48px responsive)
- [x] Footer integration (40px logo + brand)
- [x] Favicon created (256×256, browser tab)
- [x] Social avatars (5 sizes)
- [x] Social headers (3 variations)
- [x] Newsletter header base
- [x] Metadata configured (OpenGraph, Twitter)
- [x] Glow effect implemented (hover state)
- [x] Clear space rules defined

---

## 📎 File Inventory

### Logo Files (Public)
```
/public/
├── logo.png                (512×512, website header)
├── logo-lg.png            (2048×2048, social OG)
├── favicon.ico            (256×256, browser tab)
├── tiktok-avatar.png      (200×200)
├── youtube-avatar.png     (800×800)
├── instagram-avatar.png   (1080×1080)
├── discord-avatar.png     (512×512)
├── twitter-avatar.png     (400×400)
├── tiktok-header.png      (2000×500)
├── youtube-header.png     (2560×1440)
├── discord-server-icon.png (512×512)
└── newsletter-header-base.png (600×200)
```

---

## 🔗 Quick Links

- **Logo Creator:** Higgsfield  
- **Font Licenses:** Google Fonts (Open Source)
- **Brand Colors:** Vice City Neon Palette
- **Last Updated:** 2026-05-15

---

**Questions?** Contact the GTA6 Vault editorial team.

_This branding guide ensures consistency across all platforms and maintains the premium Vice City aesthetic._
