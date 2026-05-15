# Visual Identity Implementation Checklist

## Status: Phase 1 Complete ✅

All design system documentation, components, and color palette are ready to implement across the site.

---

## PHASE 1: FOUNDATION (COMPLETE ✅)

### Color Palette
- [x] Define primary colors (Neon Pink #FF6B9D + Cyan #00D4FF)
- [x] Define secondary colors (Purple, Yellow, Green)
- [x] Document color usage in DESIGN_SYSTEM.md
- [x] Update CSS variables in globals.css
- [x] Test WCAG AA contrast on dark background

### Typography
- [x] Select fonts (Orbitron, Inter, JetBrains Mono)
- [x] Verify fonts imported in layout.js
- [x] Document sizing scale in TYPOGRAPHY_GUIDE.md
- [x] Test readability at all sizes
- [x] Verify font loading performance

### Component Library
- [x] Create Button component (3 variants)
- [x] Create Card component (4 variants)
- [x] Create Badge component (status labels)
- [x] Add hover/focus/active states
- [x] Document in DESIGN_SYSTEM.md

### Documentation
- [x] Create DESIGN_SYSTEM.md (comprehensive)
- [x] Create TYPOGRAPHY_GUIDE.md (fonts + sizing)
- [x] Create LOGO_GUIDELINES.md (logo specs)
- [x] Create IMAGE_SOURCES.md (copyright-safe sources)
- [x] Create IMPLEMENTATION_CHECKLIST.md (this file)

---

## PHASE 2: COMPONENT MIGRATION (READY TO START)

### Navbar & Footer
- [ ] Replace existing buttons with `<Button>` component
- [ ] Update link styling to use new color palette
- [ ] Test responsive behavior at all breakpoints
- [ ] Verify hover states with neon glow

### Article Cards (ArticleCard.jsx)
- [ ] Use `<Card>` component as wrapper
- [ ] Replace Status tag with `<Badge>` component
- [ ] Update text colors to use `text-vc-*` utilities
- [ ] Add hover effects (lift + shadow)
- [ ] Optimize image sizing (800x400px)

### Status Labels
- [ ] Replace all status displays with `<Badge>` component
- [ ] Test VERIFIED (green), RUMOR (yellow), DEBUNKED (pink)
- [ ] Ensure consistent styling across all pages

### CTA Buttons
- [ ] Replace all custom buttons with `<Button>` component
- [ ] Use primary variant for main CTAs
- [ ] Use secondary variant for alternative actions
- [ ] Test on dark background

---

## PHASE 3: PAGE STYLING (OPTIONAL ENHANCEMENTS)

### Home Page
- [ ] Update hero section typography
- [ ] Add background gradient overlay
- [ ] Style article grid with Card component
- [ ] Enhance "Read More" buttons

### News Archive (/news)
- [ ] Grid layout with Card components
- [ ] Status badges on all articles
- [ ] Consistent spacing (8px scale)
- [ ] Pagination styling

### Article Detail (/news/[slug])
- [ ] Hero image (1200x630px optimized)
- [ ] Article metadata with Badge
- [ ] Related articles section (Card component)
- [ ] Share buttons styled

### About Page (/about)
- [ ] Hero section styling
- [ ] Principles grid with Card components
- [ ] Section headings with Orbitron
- [ ] CTA buttons

### Newsletter Page (/newsletter)
- [ ] Hero section with neon text
- [ ] Newsletter benefits listed
- [ ] Beehiiv form container styled
- [ ] Social links

---

## PHASE 4: IMAGERY & BRANDING (OPTIONAL ENHANCEMENTS)

### Logo
- [ ] Review current logo design
- [ ] Options:
  - [ ] Keep current, enhance with CSS effects
  - [ ] Redesign in Figma (geometric, Vice City aesthetic)
  - [ ] Commission professional designer
- [ ] Generate favicon set (16x16, 32x32, 180x180)
- [ ] Create horizontal variant for header

### Hero Images
- [ ] Generate 3-5 hero images via Higgsfield (nano_banana_2)
- [ ] Download from Unsplash as backup
- [ ] Optimize to 1200x630px, ≤200KB
- [ ] Convert to WebP format
- [ ] Archive in /public/images/og/

### Background Images
- [ ] Create subtle section backgrounds
- [ ] Add dark overlays (rgba(10, 10, 10, 0.4))
- [ ] Source from Unsplash premium
- [ ] Test on mobile readability

---

## PHASE 5: QUALITY ASSURANCE

### Visual Testing
- [ ] [ ] Test all colors on dark background (#0A0A0A)
- [ ] [ ] Verify hover states on all interactive elements
- [ ] [ ] Check focus states (cyan outline, 2px)
- [ ] [ ] Test responsiveness (sm/md/lg breakpoints)
- [ ] [ ] Verify animations smooth (no jank)

### Performance Testing
- [ ] Lighthouse score ≥ 90
- [ ] Font loading < 100ms
- [ ] Images optimized < 200KB
- [ ] No layout shift (CLS < 0.1)

### Accessibility Testing
- [ ] Run WCAG contrast checker on all colors
- [ ] Verify keyboard navigation
- [ ] Test with screen reader (NVDA/JAWS)
- [ ] Check focus visible on all elements

### Cross-Browser Testing
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS 15+)
- [ ] Chrome Mobile (Android)

---

## PHASE 6: DOCUMENTATION & HANDOFF

### Internal Documentation
- [ ] Component usage guide (Storybook optional)
- [ ] Color palette Figma file
- [ ] Typography specimens
- [ ] Responsive breakpoint guide

### Developer Guide
- [ ] How to use Button component
- [ ] How to use Card component
- [ ] How to add images correctly
- [ ] Common patterns (grids, modals, forms)

### Maintenance
- [ ] Document design system updates
- [ ] Schedule quarterly brand review
- [ ] Monitor for accessibility compliance
- [ ] Archive deprecated components

---

## QUICK START: Using New Components

### Button Component
```jsx
import Button from "@/components/Button";

// Primary (pink, main CTA)
<Button variant="primary" size="md">Subscribe Now</Button>

// Secondary (cyan outline)
<Button variant="secondary">Learn More</Button>

// Tertiary (text)
<Button variant="tertiary">Cancel</Button>
```

### Card Component
```jsx
import Card from "@/components/Card";

// Default card
<Card>
  <h3>Article Title</h3>
  <p>Preview text...</p>
</Card>

// Accent card (cyan border)
<Card variant="accent">
  Featured content
</Card>
```

### Badge Component
```jsx
import Badge from "@/components/Badge";

<Badge status="VERIFIED" />   {/* Green */}
<Badge status="RUMOR" />      {/* Yellow */}
<Badge status="DEBUNKED" />   {/* Pink */}
```

---

## PRIORITY: MUST-DO ITEMS

### Before Launch
1. ✅ Document design system
2. ✅ Create reusable components
3. ✅ Define copyright-safe image sources
4. ✅ Test color contrast (WCAG AA)
5. [ ] Replace existing buttons with Button component
6. [ ] Replace article cards with Card component
7. [ ] Add Badge component to all status labels
8. [ ] Generate/optimize hero images
9. [ ] Create favicon set
10. [ ] Final accessibility audit

---

## NICE-TO-HAVE ITEMS

- [ ] Animated logo with glow effect
- [ ] Custom Figma design file
- [ ] Storybook component library
- [ ] CSS animation library (Framer Motion optional)
- [ ] Custom Tailwind theme file
- [ ] Brand voice guide (tone/messaging)
- [ ] Social media template kit

---

## TIMELINE ESTIMATE

| Phase | Task | Duration | Status |
|-------|------|----------|--------|
| 1 | Design system foundation | ✅ Done | Complete |
| 2 | Component migration | 2-3 hours | Ready |
| 3 | Page styling | 3-4 hours | Optional |
| 4 | Imagery | 2-3 hours | Optional |
| 5 | QA & Testing | 2 hours | Next |
| 6 | Documentation | 1 hour | Next |

**Total Time**: 10-14 hours (excluding optional enhancements)

---

## SUCCESS CRITERIA

- ✅ All components use consistent color palette
- ✅ All text is readable (WCAG AA minimum)
- ✅ All CTAs use Button component
- ✅ All cards use Card component
- ✅ No Rockstar/copyrighted assets
- ✅ Images optimized for web
- ✅ Responsive at sm/md/lg breakpoints
- ✅ Hover/focus states on all interactive elements
- ✅ Lighthouse score ≥ 90
- ✅ Zero console errors

---

## NOTES FOR TEAM

### Consistency is Key
- Use components, not custom CSS
- Keep color palette consistent
- Follow spacing scale (8px grid)
- Maintain hierarchy with typography

### When to Create New Components
- Repeated pattern (≥3 uses)
- Complex styling logic
- Multiple variants needed
- Clear visual boundary

### When to Use Utility Classes
- One-off styling
- Simple colors/spacing
- Responsive tweaks
- Temporary elements

---

## MIGRATION PATH

### Option 1: Incremental (Recommended)
1. Update Navbar/Footer (1 hour)
2. Update article cards (2 hours)
3. Update status badges (30 min)
4. Update buttons sitewide (2 hours)
5. Polish remaining pages (3-4 hours)

### Option 2: Full Redesign
- Reserve entire day
- Redesign all pages simultaneously
- Comprehensive QA at end
- Risk: More QA time needed

---

**Last Updated**: May 15, 2026
**Phase**: 1 Complete, 2-6 Ready
**Next Step**: Component migration (Phase 2)
**Deadline**: May 21, 2026 (7 days for full implementation)
