# Image Sources & Copyright Compliance

## Overview
All images on GTA6 Vault must be original, licensed, or publicly available. **Zero Rockstar assets.**

---

## 1. APPROVED IMAGE SOURCES

### Free Licensed (CC0 / Public Domain)
- **Unsplash** — https://unsplash.com
  - Search terms: "neon", "synthwave", "miami", "vice city aesthetic", "urban night", "cyberpunk"
  - License: Unsplash License (free for commercial use)
  - Recommended photographers: @pawel_czerwinski, @andremouton, @noahbuscher

- **Pexels** — https://www.pexels.com
  - Similar aesthetic searches
  - License: Pexels License (CC0)

- **Pixabay** — https://pixabay.com
  - Technology, abstract, neon imagery
  - License: Pixabay License (CC0)

### Generated Images
- **Higgsfield** — nano_banana_2 model
  - Use for: Custom hero images, brand imagery
  - Prompts: "neon Vice City aesthetic", "synthwave background", "dark modern tech"
  - Ownership: 100% original, no copyright issues

- **Midjourney** (Alternative)
  - Prompts: Focus on Vice City aesthetic, NOT specific GTA content
  - License: User owns outputs (paid tier)
  - Avoid: "Grand Theft Auto", "Rockstar" references

### Licensed Stock Photos
- **Unsplash+** or **Pexels Premium**
- Budget: Free tier sufficient for launch

---

## 2. IMAGE SPECIFICATIONS

### Hero Images (OG Cards)
```
Format:    WebP (primary), JPG (fallback)
Dimensions: 1200x630px (standard OG card)
Max Size:  200KB
Color:     Dark tones, Neon Pink/Cyan accents
Overlay:   rgba(10, 10, 10, 0.4) gradient
```

### Article Thumbnails
```
Format:    WebP (primary), JPG (fallback)
Dimensions: 800x400px
Max Size:  150KB
Aspect:    2:1 ratio
```

### Background Images
```
Format:    WebP
Dimensions: 1920x1080px (hero), 1200x600px (section)
Max Size:  300KB
Filter:    Blur + dark overlay
```

### Favicon
```
Formats:   ICO, PNG
Sizes:     16x16, 32x32, 180x180 (apple-touch-icon)
Color:     Brand colors (pink/cyan gradient)
```

---

## 3. CREATION WORKFLOW

### Step 1: Search Approved Sources
```bash
# For hero images
Unsplash: "neon cyberpunk dark"
Pexels: "synthwave miami"

# For backgrounds
Unsplash: "urban night lights"
Pexels: "tech abstract"
```

### Step 2: Download & Process
```bash
# Resize to target dimensions
ffmpeg -i input.jpg -vf scale=1200:630 output_1200x630.jpg

# Convert to WebP
cwebp -q 80 output_1200x630.jpg -o output.webp

# Add overlay (ImageMagick)
convert output.webp \
  -background "rgba(10,10,10,0.4)" \
  -flatten output_overlay.webp
```

### Step 3: Optimize
- Target: ≤ 200KB per image
- Tool: TinyPNG or ImageOptim
- Fallback: Create JPG version

### Step 4: Archive Source
```
/public/images/
├── hero/
│   ├── about-hero.webp
│   ├── about-hero.jpg
│   └── SOURCE.txt  → "Unsplash: John Doe"
├── backgrounds/
│   └── ...
└── og/
    └── ...
```

---

## 4. CREATING BRAND IMAGERY WITH HIGGSFIELD

### Generate Custom Hero Images
```
Model: nano_banana_2
Prompts:
  ✓ "Minimalist Vice City aesthetic, neon pink and cyan, dark background, urban"
  ✓ "Synthwave night city, Miami vibe, neon lights, dark moody"
  ✓ "Abstract tech background, neon grid, dark futuristic, cyberpunk"
  
Avoid:
  ✗ "Grand Theft Auto", "GTA", "Rockstar", "Game screenshot"
  ✗ Anything resembling game characters or locations
```

### Post-Processing Generated Images
1. Download generated image
2. Resize to 1200x630px
3. Add color grading (optional darker tones)
4. Convert to WebP
5. Compress to ≤200KB

---

## 5. COPYRIGHT COMPLIANCE CHECKLIST

For each image, verify:

- [ ] Source is approved (Unsplash, Higgsfield, Pexels, etc.)
- [ ] License is CC0 or commercial-use approved
- [ ] Image contains NO Rockstar/GTA assets
- [ ] Image contains NO copyrighted characters/locations
- [ ] Image is optimized (WebP, ≤200KB)
- [ ] IMAGE_SOURCES.md entry created
- [ ] SOURCE.txt included in image directory
- [ ] No AI-generated faces (unless licensed)

---

## 6. CURRENT IMAGE INVENTORY

### Hero Images
| File | Source | License | Status |
|------|--------|---------|--------|
| gta6-official.jpg | Generated | Original | ✅ Live |
| newsletter-hero.webp | Unsplash | CC0 | TBD |
| about-hero.webp | Higgsfield | Original | TBD |

### Backgrounds
| File | Source | License | Status |
|------|--------|---------|--------|
| body-gradient | Custom CSS | Original | ✅ Live |

---

## 7. ATTRIBUTION EXAMPLES

### Unsplash Images
```
<!-- In HTML comment or footer -->
Photo by [Name] on Unsplash
https://unsplash.com/photos/[ID]
```

### Higgsfield Generated
```
<!-- In image metadata or source -->
Generated with Higgsfield nano_banana_2 model
Date: May 15, 2026
Prompt: [Your prompt here]
```

---

## 8. WHAT TO AVOID

### ❌ ABSOLUTE NO-GO
- Screenshots from GTA games
- Character artwork from GTA
- In-game logos or UI elements
- Music/sounds from games
- Any Rockstar Games trademark

### ⚠️ RISKY (Avoid)
- Ambiguous "Vice City" references
- Florida-based photos mimicking GTA locations
- Fan art of game characters
- Unofficial game art

### ✅ SAFE (Approved)
- Generic neon/synthwave imagery
- Original photography
- Generated images (Higgsfield/Midjourney)
- Licensed stock photos
- Custom illustrations

---

## 9. FUTURE IMAGE NEEDS

As the site grows:
- [ ] Commission custom hero illustrations (Vice City aesthetic, no GTA IP)
- [ ] Partner with neon photographer
- [ ] Create animated backgrounds (Lottie + Higgsfield)
- [ ] Build image CDN (Cloudinary/Imgix)

---

**Last Updated**: May 15, 2026
**Compliance Status**: ✅ 100% Copyright Safe
**Audit**: May 21, 2026
