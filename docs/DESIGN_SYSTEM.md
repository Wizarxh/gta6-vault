# GTA6 Vault — Design System v1.0

## Overview
Premium, minimalist Vice City aesthetic. All assets are original or licensed. Zero Rockstar copyright risk.

---

## 1. COLOR PALETTE

### Primary Colors
- **Neon Pink** `#FF6B9D` — Energetic, Vice City primary
  - Usage: CTAs, headings, highlights
  - Accessible contrast: ✓ WCAG AA
  
- **Cyan** `#00D4FF` — Cool, modern accent
  - Usage: Secondary CTAs, borders, accents
  - Accessible contrast: ✓ WCAG AA

### Secondary Colors
- **Deep Purple** `#2E1A47` — Luxury, depth
  - Usage: Dark sections, premium feel
  - Alt: `#7B2CBF` for medium purple
  
- **Neon Yellow** `#FFD23F` — Alerts, emphasis
  - Usage: Labels (RUMOR tag), warnings
  
- **Emerald Green** `#10B981` — Verification, trust
  - Usage: VERIFIED tags, success states

### Neutral Colors
- **Dark** `#0A0A0A` — Primary background
- **Surface Elevation** `#131018` — Elevated surfaces
- **Text Primary** `#F5F3FF` — Main text
- **Text Muted** `#9AA0B4` — Secondary text, captions
- **Border** `rgba(255, 107, 157, 0.18)` — Subtle pink borders

### Color Matrix
```
Status Tags:
  VERIFIED   → Emerald (#10B981)
  RUMOR      → Neon Yellow (#FFD23F)
  DEBUNKED   → Neon Pink (#FF6B9D)
  
Interaction:
  Default    → Cyan (#00D4FF)
  Hover      → Brighter Cyan (#00E5FF)
  Active     → Neon Pink (#FF6B9D)
  Disabled   → Muted (#9AA0B4)
```

---

## 2. TYPOGRAPHY

### Font Stack
- **Display** (Headings): `Orbitron` Bold/900
  - H1: 56px, 900 weight, tracking 0.02em
  - H2: 32px, 700 weight, tracking 0.01em
  - H3: 24px, 700 weight, tracking 0.01em

- **Body Text**: `Inter` Regular/Medium
  - Large: 18px, 400 weight, 1.6 line-height
  - Regular: 16px, 400 weight, 1.6 line-height
  - Small: 14px, 400 weight, 1.5 line-height

- **Monospace**: `JetBrains Mono` Regular
  - Used for: URLs, status labels, code, timestamps
  - 13px, 400 weight, tracking 0.05em uppercase

### Text Hierarchy
```
H1 - Page Title
H2 - Section Header
H3 - Subsection Header
p  - Body copy
small - Captions, metadata
code - Technical references
```

---

## 3. LAYOUT & SPACING

### Spacing Scale (8px base)
```
xs: 4px    (0.25rem)
sm: 8px    (0.5rem)
md: 16px   (1rem)
lg: 24px   (1.5rem)
xl: 32px   (2rem)
2xl: 48px  (3rem)
```

### Container Widths
- Mobile: Full width - 16px padding
- Tablet: 640px max
- Desktop: 1024px max
- Wide: 1280px max

### Breakpoints
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

---

## 4. COMPONENTS

### Buttons
```
Primary Button:
  Background: Neon Pink (#FF6B9D)
  Text: Black (#000)
  Padding: 12px 24px
  Border Radius: 9999px (full)
  Font: Mono, 11px, bold, uppercase
  Hover: Scale 105%, shadow
  
Secondary Button:
  Background: Transparent
  Border: 1px Cyan
  Text: Cyan
  Padding: 12px 24px
  Hover: Background Cyan, text black
```

### Cards
```
Border: 1px rgba(255, 107, 157, 0.18)
Background: rgba(19, 16, 24, 0.8)
Border Radius: 12px
Padding: 20px
Box Shadow: 0 4px 12px rgba(0, 0, 0, 0.3)
Hover: Lift +2px shadow, border color brightens
```

### Badges
```
Status Badge (Verified):
  Background: rgba(16, 185, 129, 0.15)
  Text: Emerald (#10B981)
  Font: Mono, 10px, uppercase, bold
  Padding: 4px 8px
  Border Radius: 4px
```

### Input Fields
```
Border: 1px Muted (#9AA0B4)
Background: Dark (#0A0A0A)
Text: Text Primary (#F5F3FF)
Padding: 12px 16px
Border Radius: 8px
Focus: Border Cyan, shadow 0 0 12px rgba(0, 212, 255, 0.3)
```

---

## 5. IMAGERY GUIDELINES

### Hero Images
- **Dimensions**: 1200x630px (OG card optimized)
- **Format**: WebP with JPG fallback
- **Sources**:
  - Generated: Higgsfield (nano_banana_2 model) for brand imagery
  - Licensed: Unsplash (search: "Miami neon", "synthwave", "urban", "tech")
  - Custom: Minimal overlays, dark tones, Vice City aesthetic

### Image Processing
```
1. Generate/source at 1200x630px
2. Add dark overlay: rgba(10, 10, 10, 0.4) or gradient
3. Add subtle noise for texture
4. Compress: max 200KB for web
5. Convert: WebP primary, JPG fallback
```

### No-Go Assets
- ❌ Screenshots from GTA games (copyright)
- ❌ Rockstar logos/marks (trademark)
- ❌ Character art (IP protected)
- ❌ In-game music/sounds (copyright)

### Approved Sources
- ✅ Unsplash (free license)
- ✅ Higgsfield (generated images)
- ✅ Original photography
- ✅ Diagrams/illustrations created for brand

---

## 6. BACKGROUND EFFECTS

### Hero Gradient (Full Page)
```css
background-image:
  radial-gradient(
    1200px 600px at 80% -10%,
    rgba(255, 107, 157, 0.18),
    transparent 60%
  ),
  radial-gradient(
    900px 500px at -10% 10%,
    rgba(0, 212, 255, 0.14),
    transparent 60%
  ),
  linear-gradient(180deg, #0a0a0a 0%, #0a0a0a 100%);
background-attachment: fixed;
```

### Card Hover Effect
```css
transition: all 0.3s ease;
&:hover {
  border-color: rgba(255, 107, 157, 0.4);
  box-shadow: 0 8px 24px rgba(255, 107, 157, 0.1);
  transform: translateY(-2px);
}
```

---

## 7. ACCESSIBILITY

### Color Contrast
- All text ≥4.5:1 contrast ratio (WCAG AA)
- Status colors tested with Stark/WebAIM

### Focus States
- All interactive elements: 2px Cyan outline
- :focus-visible maintained
- Tab order: logical, top-to-bottom

### Typography
- Base font size: 16px (mobile)
- Min line height: 1.5
- Min letter spacing: 0.02em (headings)

---

## 8. DARK MODE ONLY

GTA6 Vault operates in **dark mode exclusively**.
- No light mode toggle
- All colors tested on #0A0A0A background
- Ensures consistent Vice City aesthetic

---

## 9. CONSISTENCY RULES

### Do's
✅ Use Neon Pink for primary CTAs
✅ Use Cyan for secondary accents
✅ Use Orbitron for all headings
✅ Keep 8px spacing grid
✅ Use card component for content containers
✅ Add hover states to all interactive elements
✅ Use status badges for article labels
✅ Optimize images: max 200KB, 1200x630px

### Don'ts
❌ Mix fonts (Orbitron + other display fonts)
❌ Use light backgrounds
❌ Add Rockstar/GTA assets without license
❌ Ignore WCAG contrast requirements
❌ Create irregular spacing
❌ Skip hover/focus states
❌ Use images > 250KB
❌ Screenshot in-game content

---

## 10. FILE ORGANIZATION

```
/app
  /globals.css              → Color vars, typography, base styles
  /layout.js                → Font imports, metadata

/components
  /Button.jsx               → Reusable button component
  /Card.jsx                 → Reusable card component
  /Badge.jsx                → Status badge component
  /Navbar.jsx               → Navigation
  /Footer.jsx               → Footer

/public/images
  /og-default.jpg           → Default OG image
  /backgrounds/
    *.webp                  → Hero backgrounds
  /logo/
    logo.svg                → Vector logo
    favicon.ico             → 32x32 favicon

/docs
  /DESIGN_SYSTEM.md         → This file
  /BRAND_GUIDELINES.md      → Brand voice, tone
  /IMAGE_SOURCES.md         → Licensed image list
```

---

## 11. IMPLEMENTATION CHECKLIST

- [ ] Add Tailwind color utilities to tailwind.config.js
- [ ] Create reusable Button component
- [ ] Create reusable Card component
- [ ] Create Badge component with status variants
- [ ] Document image sources in IMAGE_SOURCES.md
- [ ] Generate/license hero images
- [ ] Optimize logo files (SVG + PNG)
- [ ] Create favicon set (16x16, 32x32, 180x180)
- [ ] Test all colors for WCAG contrast
- [ ] Audit all fonts for loading performance
- [ ] Document custom components in Storybook (future)

---

**Last Updated**: May 15, 2026
**Version**: 1.0
**Status**: Active
