# Logo & Branding Guidelines

## Overview
GTA6 Vault logo is a minimalist, premium design with Vice City aesthetic. All original, zero copyright risk.

---

## 1. LOGO CONCEPT

### Design Principles
- **Minimalist** — Simple, scalable, memorable
- **Vice City Aesthetic** — Neon Pink (#FF6B9D) + Cyan (#00D4FF)
- **Modern** — Clean lines, geometric shapes
- **Versatile** — Works at any size (16px → 512px)

### Logo Variations
```
Full Logo:      "GTA6 VAULT" text + mark
Horizontal:     Mark on left, text on right
Vertical:       Mark on top, text below
Mark Only:      Icon without text (favicon, app icon)
Text Only:      "GTA6 VAULT" wordmark (social media)
```

---

## 2. COLOR SPECIFICATIONS

### Primary Logo
- **Mark**: Neon Pink (#FF6B9D)
- **Accent**: Cyan (#00D4FF) - optional inner stroke
- **Text**: White (#F5F3FF)
- **Background**: Dark (#0A0A0A) — dark mode only

### Monochrome (Print/Grayscale)
- White on dark background
- Black on light background (minimal use)

### Negative Space (Reverse)
- Invert colors if necessary
- Minimum spacing: 8px clear area

---

## 3. LOGO FILES

### Required Formats
```
/public/logo/
├── logo.svg           → Vector (primary)
├── logo.png           → Raster 1024x1024 @ 300ppi
├── logo-horizontal.svg → Wide format for headers
├── logo-mark-only.svg → Icon only (favicon)
├── favicon.ico        → Browser tab (32x32)
├── apple-touch-icon.png → Mobile app icon (180x180)
└── og-logo.png        → Social share default (1200x630)
```

### File Specifications
| Format | Dimensions | Use Case |
|--------|-----------|----------|
| SVG | Scalable | Web, print, all sizes |
| PNG | 1024x1024 | Design tools, exports |
| ICO | 32x32 | Browser favicon |
| PNG | 180x180 | Apple touch icon |
| PNG | 1200x630 | Social media fallback |

---

## 4. LOGO USAGE IN CODE

### Current Implementation
```jsx
// components/Logo.jsx
import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo/logo.svg"
      alt="GTA6 Vault"
      width={40}
      height={40}
      priority
    />
  );
}
```

### In HTML
```html
<!-- Navbar -->
<img src="/logo/logo.svg" alt="GTA6 Vault" width="40" height="40" />

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/logo/favicon.ico" />
<link rel="apple-touch-icon" href="/logo/apple-touch-icon.png" />

<!-- Social Share -->
<meta property="og:image" content="/logo/og-logo.png" />
```

---

## 5. SIZING GUIDELINES

### Minimum Size
- **Digital**: 16px (favicon)
- **Print**: 0.5 inches (12.7mm)

### Recommended Sizes
- Favicon: 16px, 32px, 64px
- Navigation: 32px, 40px, 48px
- Hero/Header: 64px, 80px, 128px
- Social: 256x256px, 512x512px
- Print: 1 inch (25.4mm), 2 inches (50.8mm)

### Spacing (Clear Space)
- Minimum clear space: 8px or ½ logo width
- No crowding with other elements
- Breathing room in layouts

---

## 6. LOGO PLACEMENT RULES

### Navigation Bar
- Left corner (primary position)
- Size: 32-48px height
- Should not exceed navbar height

### Footer
- Left column or center
- Size: 24-32px height
- Link to homepage

### Social Media
- 256x256px minimum
- Square format preferred
- On brand colors background

### Hero Sections
- Large format (128px+)
- Centered or top-right
- Paired with tagline

---

## 7. DESIGN SYSTEM ALIGNMENT

### Typography with Logo
```
[Logo] GTA6 VAULT
Font: Orbitron Bold
Color: Neon Pink + Cyan accents
Letter spacing: 0.05em
```

### Color Usage
- Logo Mark: Neon Pink (#FF6B9D)
- Text: White (#F5F3FF) or brand color
- No gradient (keeps it sharp at small sizes)

### Spacing in Navbar
```
← 16px | [Logo] | 8px | Text Links | 16px →
```

---

## 8. LOGO ANIMATION (OPTIONAL)

### Hover Effect (Navbar)
```css
.logo-link:hover svg {
  filter: drop-shadow(0 0 8px rgba(255, 107, 157, 0.5));
  transform: scale(1.05);
  transition: all 0.2s ease;
}
```

### Glow Effect
```css
.logo svg {
  filter: drop-shadow(0 0 4px rgba(0, 212, 255, 0.3));
}
```

---

## 9. CREATION STEPS (IF REDESIGNING)

### Option A: Using Figma
1. Create 1024x1024 canvas
2. Design mark (geometric, Vice City vibe)
3. Add "GTA6 VAULT" wordmark below
4. Export SVG (clean code, remove hidden layers)
5. Export PNG at 1024x1024
6. Create variations (horizontal, icon-only)

### Option B: Using Canva
1. Start with "Professional Logo" template
2. Customize with:
   - Neon Pink + Cyan colors
   - Orbitron or similar font
   - Minimalist geometric mark
3. Export PNG, then convert to SVG (Potrace)

### Option C: Professional Designer
- Budget: $500-1500
- Deliverables: SVG, PNG, favicon set
- Turnaround: 1-2 weeks
- Recommendation: Use designer familiar with Vice City aesthetic

---

## 10. IMPLEMENTATION CHECKLIST

- [ ] Create/source SVG logo file
- [ ] Export PNG variants (1024x1024, 512x512, etc.)
- [ ] Generate favicon set using favicon.io or RealFaviconGenerator
- [ ] Test logo at 16px, 32px, 128px sizes
- [ ] Verify color contrast (WCAG AA minimum)
- [ ] Update components/Logo.jsx with SVG path
- [ ] Add favicon links to public/favicon.ico
- [ ] Update og:image meta tag
- [ ] Test on light/dark backgrounds
- [ ] Document in brand guide

---

## 11. LOGO ANIMATION EXAMPLES

### Subtle Glow (Recommended)
```jsx
export default function Logo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" className="logo-animated">
      {/* logo content */}
      <style>{`
        .logo-animated {
          filter: drop-shadow(0 0 2px rgba(0, 212, 255, 0.3));
          transition: all 0.3s ease;
        }
        .logo-animated:hover {
          filter: drop-shadow(0 0 8px rgba(255, 107, 157, 0.5));
        }
      `}</style>
    </svg>
  );
}
```

---

## 12. APPROVED LOGO VARIATIONS

### Current Logo Status
- ✅ Simple, clean
- ✅ Vice City colors
- ✅ Minimalist design
- ⚠️ Could be more premium
- ⚠️ Icon not optimized for all sizes

### Enhancement Recommendations
1. Add geometric accent (e.g., hexagon, grid pattern)
2. Refine stroke weights for consistency
3. Test at 16px minimum size
4. Add cyan accent stripe
5. Consider angled/dynamic layout

---

## 13. COMPLIANCE NOTES

- ✅ 100% original design (no Rockstar assets)
- ✅ No trademarked elements
- ✅ Safe for commercial use
- ✅ Can be updated anytime without legal risk

---

**Last Updated**: May 15, 2026
**Logo Version**: 1.0
**Status**: Ready for Enhancement
**Next Review**: June 2026
