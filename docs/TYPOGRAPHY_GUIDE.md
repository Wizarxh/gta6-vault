# Typography Guidelines

## Overview
GTA6 Vault uses three carefully selected fonts to create a premium, modern Vice City aesthetic.

---

## 1. FONT STACK

### Display Font: Orbitron
- **Usage**: All headings (H1, H2, H3)
- **Weights**: 500, 700, 900
- **Import**: `next/font/google`
- **Characteristic**: Geometric, futuristic, bold
- **License**: Open Font License (OFL) — free for commercial use

### Body Font: Inter
- **Usage**: Body text, paragraphs, descriptions
- **Weights**: 400, 500, 600
- **Import**: `next/font/google`
- **Characteristic**: Clean, modern, highly readable
- **License**: Open Font License (OFL) — free for commercial use

### Monospace Font: JetBrains Mono
- **Usage**: Code, timestamps, status labels, URLs
- **Weights**: 400, 600
- **Import**: `next/font/google`
- **Characteristic**: Technical, consistent spacing, modern
- **License**: Open Font License (OFL) — free for commercial use

---

## 2. IMPLEMENTATION

### In layout.js
```jsx
import { Orbitron, Inter, JetBrains_Mono } from "next/font/google";

const display = Orbitron({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function RootLayout({ children }) {
  return (
    <html
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      {children}
    </html>
  );
}
```

### In globals.css
```css
:root {
  --font-display: var(--font-display), 'Orbitron', ui-sans-serif, sans-serif;
  --font-body: var(--font-body), 'Inter', ui-sans-serif, sans-serif;
  --font-mono: var(--font-mono), 'JetBrains Mono', ui-monospace, monospace;
}

html,
body {
  font-family: var(--font-body);
}
```

---

## 3. TYPOGRAPHIC SCALE

### Headings
| Level | Font | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|------|--------|-------------|----------------|-------|
| H1 | Orbitron | 56px (sm: 72px) | 900 | 1.2 | 0.02em | Page titles |
| H2 | Orbitron | 32px (sm: 40px) | 700 | 1.2 | 0.01em | Section headers |
| H3 | Orbitron | 24px (sm: 28px) | 700 | 1.3 | 0.01em | Subsections |
| H4 | Inter | 20px | 600 | 1.3 | normal | Minor headings |
| H5 | Inter | 16px | 600 | 1.4 | normal | Widget titles |
| H6 | Inter | 14px | 600 | 1.4 | normal | Labels |

### Body Text
| Type | Font | Size | Weight | Line Height | Usage |
|------|------|------|--------|-------------|-------|
| Large | Inter | 18px | 400 | 1.6 | Feature text, intro |
| Regular | Inter | 16px | 400 | 1.6 | Main body copy |
| Small | Inter | 14px | 400 | 1.5 | Captions, metadata |
| Extra Small | Inter | 12px | 400 | 1.5 | UI text, small labels |

### Monospace
| Type | Font | Size | Weight | Letter Spacing | Usage |
|------|------|------|--------|----------------|-------|
| Regular | JetBrains Mono | 13px | 400 | 0.05em | Code, URLs |
| Bold | JetBrains Mono | 11px | 600 | 0.05em | Status labels |
| Extra Small | JetBrains Mono | 10px | 400 | 0.03em | Badges, timestamps |

---

## 4. TAILWIND TYPOGRAPHY UTILITIES

### CSS Classes for Text Styles
```css
/* Headings */
.h1 { @apply font-display text-5xl font-black uppercase tracking-tight sm:text-6xl; }
.h2 { @apply font-display text-2xl font-bold uppercase tracking-[0.2em]; }
.h3 { @apply font-display text-xl font-bold uppercase tracking-[0.1em]; }

/* Body */
.body-lg { @apply text-lg leading-relaxed; }
.body-md { @apply text-base leading-relaxed; }
.body-sm { @apply text-sm leading-relaxed text-vc-muted; }

/* Monospace */
.mono-label { @apply font-mono text-xs uppercase tracking-[0.3em]; }
.mono-sm { @apply font-mono text-[11px] uppercase tracking-[0.25em]; }
```

### In Components
```jsx
<h1 className="h1">GTA6 Vault</h1>
<h2 className="h2">Latest News</h2>
<p className="body-md">Read the full story...</p>
<span className="mono-label text-vc-pink">VERIFIED</span>
```

---

## 5. COLOR + TYPOGRAPHY COMBINATIONS

### Article Title
```css
.article-title {
  @apply font-display text-4xl font-black uppercase tracking-tight;
  color: var(--vc-text);
}
/* Hover: add glow effect */
&:hover {
  color: var(--vc-pink);
  text-shadow: 0 0 8px rgba(255, 107, 157, 0.3);
}
```

### Status Label
```css
.status-label {
  @apply font-mono text-xs font-bold uppercase tracking-[0.3em];
  /* Color depends on status */
  &.verified { color: var(--vc-green); }
  &.rumor { color: var(--vc-yellow); }
  &.debunked { color: var(--vc-pink); }
}
```

### Metadata
```css
.metadata {
  @apply font-mono text-xs uppercase tracking-[0.2em] text-vc-muted;
}
```

---

## 6. RESPONSIVE TYPOGRAPHY

### Mobile First
```css
/* Base (mobile) */
h1 { font-size: 32px; }
h2 { font-size: 24px; }
p { font-size: 16px; }

/* Tablet + Desktop */
@media (min-width: 768px) {
  h1 { font-size: 56px; }
  h2 { font-size: 32px; }
  p { font-size: 18px; }
}
```

### Using Tailwind
```jsx
<h1 className="text-4xl sm:text-5xl md:text-6xl">
  Title scales by breakpoint
</h1>
```

---

## 7. LINE HEIGHT & SPACING

### Optimal Readability
```
Line Height:
  Headings: 1.2 (tight, modern)
  Body:     1.6 (comfortable, readable)
  Code:     1.5 (compact, technical)

Paragraph Spacing:
  After H1: 24px (2rem)
  After H2: 16px (1rem)
  After H3: 12px (0.75rem)
  Between P: 16px (1rem)
```

### Letter Spacing (Tracking)
```
Headings:     0.02em (very tight)
Subheadings:  0.01em (tight)
Labels:       0.05em (wide, uppercase)
Body:         normal (0)
Monospace:    0.05em (technical look)
```

---

## 8. FONT LOADING OPTIMIZATION

### Next.js Font Variables
```jsx
// Automatic optimization
// Fonts are pre-loaded and preconnect to fonts.googleapis.com
const display = Orbitron({ variable: "--font-display" });

// Fonts apply via CSS variables
html {
  font-family: var(--font-display);
}
```

### Performance Tips
- ✅ Use `next/font` (automatic optimization)
- ✅ Limit weights (500, 700, 900 only)
- ✅ Use variable fonts when available
- ✅ Subset to Latin (no CJK unless needed)
- ✅ Preload critical fonts

### Font Display Strategy
```css
@font-face {
  font-family: 'Orbitron';
  font-display: swap; /* Fallback immediately, update later */
}
```

---

## 9. ACCESSIBILITY CONSIDERATIONS

### WCAG Compliance
- ✅ Minimum 16px body text (desktop)
- ✅ Line height ≥ 1.5
- ✅ Letter spacing ≥ 0.02em
- ✅ Sufficient color contrast (4.5:1 minimum)

### Readability
- ✅ Max line length 75-80 characters
- ✅ Clear visual hierarchy
- ✅ Avoid text transforms in body copy
- ✅ Sufficient whitespace

### Screen Readers
- Semantic HTML (`<h1>`, `<h2>`, `<p>`)
- Proper heading order
- Alt text for images
- Descriptive link text (not "click here")

---

## 10. USAGE EXAMPLES

### Hero Section
```jsx
<section>
  <h1 className="font-display text-6xl font-black tracking-tight">
    <span className="chrome-text">GTA6 Vault</span>
  </h1>
  <p className="mt-4 text-lg text-vc-muted">
    Premium news for the GTA community
  </p>
</section>
```

### Article Card
```jsx
<article>
  <h2 className="font-display text-2xl font-bold tracking-[0.1em]">
    Latest News
  </h2>
  <p className="text-base leading-relaxed">
    Full article preview text...
  </p>
  <span className="font-mono text-xs uppercase tracking-[0.3em]">
    May 15, 2026
  </span>
</article>
```

### Status Badge
```jsx
<span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-emerald-300">
  VERIFIED
</span>
```

---

## 11. FONT PAIRING DO'S & DON'Ts

### ✅ DO
- Mix geometric (Orbitron) with clean (Inter)
- Use monospace for technical elements
- Maintain consistent weight hierarchy
- Keep uppercase limited to labels/headings

### ❌ DON'T
- Mix multiple display fonts
- Use all-caps in body text
- Ignore line height requirements
- Use Orbitron for body copy (readability)
- Forget preloading in `next/font`

---

## 12. IMPLEMENTATION CHECKLIST

- [ ] Verify all fonts imported in layout.js
- [ ] Check CSS variables applied in globals.css
- [ ] Test heading sizes at sm/md/lg breakpoints
- [ ] Verify line heights (1.2 headings, 1.6 body)
- [ ] Test color contrast (headings + body on dark bg)
- [ ] Audit font file sizes (should be < 50KB total)
- [ ] Test on mobile, tablet, desktop
- [ ] Verify monospace labels are readable at 10px
- [ ] Check font loading with slow network (DevTools throttle)
- [ ] Ensure fallback fonts are similar weight/width

---

**Last Updated**: May 15, 2026
**Font Version**: 1.0
**Status**: Implemented
**Performance**: Optimized with next/font
