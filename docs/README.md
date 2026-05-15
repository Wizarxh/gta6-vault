# GTA6 Vault Design & Brand Documentation

Welcome to the GTA6 Vault design system and branding guides. Everything here is 100% copyright-safe with zero Rockstar assets.

---

## 📚 Quick Links

### Brand & Identity
- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** — Complete design system with color palette, typography, components, and spacing rules
- **[LOGO_GUIDELINES.md](./LOGO_GUIDELINES.md)** — Logo specifications, sizing, placement, and usage rules
- **[TYPOGRAPHY_GUIDE.md](./TYPOGRAPHY_GUIDE.md)** — Font selection, sizing scale, and implementation

### Content & Assets
- **[IMAGE_SOURCES.md](./IMAGE_SOURCES.md)** — Approved copyright-safe image sources (Unsplash, Higgsfield, Pexels)
- **[IMPLEMENTATION_CHECKLIST.md](./IMPLEMENTATION_CHECKLIST.md)** — Phased implementation plan and quick start guide

---

## 🎨 Design System Overview

### Colors
- **Primary**: Neon Pink (#FF6B9D) + Cyan (#00D4FF)
- **Secondary**: Deep Purple (#2E1A47), Yellow (#FFD23F), Emerald (#10B981)
- **Neutral**: Dark (#0A0A0A), Text (#F5F3FF), Muted (#9AA0B4)

### Typography
- **Display**: Orbitron (geometric, futuristic)
- **Body**: Inter (clean, modern)
- **Monospace**: JetBrains Mono (technical, labels)

### Components
- **Button** — Primary, secondary, tertiary variants
- **Card** — Default, elevated, accent, ghost styles
- **Badge** — Status labels (VERIFIED, RUMOR, DEBUNKED)

---

## 🚀 Quick Start

### Using Components
```jsx
import Button from "@/components/Button";
import Card from "@/components/Card";
import Badge from "@/components/Badge";

// Button
<Button variant="primary" size="md">Click Me</Button>

// Card
<Card variant="default">
  <h3>Title</h3>
  <p>Content</p>
</Card>

// Badge
<Badge status="VERIFIED" />
```

### Color Classes
```jsx
{/* Text colors */}
<span className="text-vc-pink">Primary</span>
<span className="text-vc-cyan">Secondary</span>
<span className="text-vc-muted">Muted</span>

{/* Background colors */}
<div className="bg-vc-bg">Dark background</div>
<div className="bg-black/40">Elevated surface</div>
```

### Typography Classes
```jsx
<h1 className="font-display text-6xl font-black">Heading</h1>
<p className="text-base leading-relaxed">Body text</p>
<span className="font-mono text-xs uppercase">Label</span>
```

---

## ✅ Compliance & Safety

### Copyright
- ✅ Zero Rockstar assets or gameplay footage
- ✅ All images from approved sources (Unsplash, Higgsfield, etc.)
- ✅ All fonts open source (OFL license)
- ✅ Original designs and components

### Accessibility
- ✅ WCAG AA contrast (4.5:1 minimum)
- ✅ Semantic HTML structure
- ✅ Keyboard navigation support
- ✅ Focus visible on all interactive elements

### Performance
- ✅ Optimized fonts via `next/font`
- ✅ Images ≤200KB per file
- ✅ CSS-in-JS with Tailwind
- ✅ Zero layout shift (CLS < 0.1)

---

## 📋 Implementation Phases

### Phase 1: Foundation ✅
- Design system documentation
- Color palette definition
- Component library creation
- Typography specifications

### Phase 2: Component Migration (Next)
- Replace buttons with Button component
- Update article cards with Card component
- Add Badge component to status labels
- Update navbar/footer styling

### Phase 3: Page Styling (Optional)
- Home page enhancement
- Article pages styling
- Newsletter page styling
- About page polish

### Phase 4: Imagery (Optional)
- Generate hero images via Higgsfield
- Optimize and convert to WebP
- Create favicon set
- Archive image sources

### Phase 5: QA (Next)
- Visual testing across browsers
- Accessibility audit
- Performance testing
- Responsive behavior verification

### Phase 6: Documentation (Final)
- Component usage guide
- Developer best practices
- Maintenance procedures
- Brand guidelines for team

---

## 📖 How to Use This Documentation

### For Designers
1. Start with **DESIGN_SYSTEM.md** for the overall vision
2. Check **LOGO_GUIDELINES.md** for brand mark specs
3. Refer to **TYPOGRAPHY_GUIDE.md** for font usage

### For Developers
1. Reference **DESIGN_SYSTEM.md** for component specifications
2. Use **IMPLEMENTATION_CHECKLIST.md** to migrate components
3. Check **IMAGE_SOURCES.md** for approved asset sources

### For Product Managers
1. Review **IMPLEMENTATION_CHECKLIST.md** for timeline
2. Check Phase breakdown for release planning
3. Success criteria document for launch readiness

---

## 🎯 Key Principles

### Do's ✅
- Use component library consistently
- Follow 8px spacing grid
- Maintain color hierarchy
- Test WCAG accessibility
- Source images from approved sources only
- Document design decisions

### Don'ts ❌
- Mix fonts (only Orbitron, Inter, JetBrains Mono)
- Use light backgrounds (dark mode only)
- Add Rockstar/GTA assets without license
- Ignore accessibility standards
- Create one-off custom styles (use components)
- Skip testing before shipping

---

## 🔗 External Resources

### Fonts
- [Orbitron - Google Fonts](https://fonts.google.com/specimen/Orbitron)
- [Inter - Google Fonts](https://fonts.google.com/specimen/Inter)
- [JetBrains Mono - Google Fonts](https://fonts.google.com/specimen/JetBrains+Mono)

### Image Sources
- [Unsplash](https://unsplash.com) — Free stock photos
- [Pexels](https://pexels.com) — Free stock photos
- [Higgsfield](https://higgsfield.ai) — AI image generation

### Tools
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) — WCAG compliance
- [TinyPNG](https://tinypng.com) — Image optimization
- [Favicon Generator](https://favicon.io) — Favicon creation

---

## 📞 Questions & Updates

### Design Questions
Check **DESIGN_SYSTEM.md** for complete specifications and rationale.

### Component Questions
Review component definitions in **DESIGN_SYSTEM.md** Section 4, or check the actual component files in `/components/`.

### Image/Copyright Questions
See **IMAGE_SOURCES.md** for approved sources and compliance checklist.

### Implementation Questions
Reference **IMPLEMENTATION_CHECKLIST.md** Phase 2-6 for detailed steps.

---

## 🗓️ Next Steps

1. Review **IMPLEMENTATION_CHECKLIST.md** Phase 2
2. Begin migrating components (Button, Card, Badge)
3. Update Navbar and article cards
4. Run accessibility audit
5. Deploy and monitor Lighthouse score

---

**Documentation Version**: 1.0
**Last Updated**: May 15, 2026
**Status**: Phase 1 Complete, Ready for Phase 2
**Maintenance**: Quarterly review scheduled

For updates or questions, refer to individual documentation files or the IMPLEMENTATION_CHECKLIST.
