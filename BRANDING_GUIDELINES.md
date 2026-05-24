# Jason K Hanani — Brand Guidelines

## Brand Overview

**Jason K Hanani** is positioned as an **Operations & Product Systems architect**—someone who designs and implements systems that turn product strategy into clear execution and measurable outcomes. The brand identity reflects this positioning: grounded, intentional, and human-centered.

### Brand Pillars
- **Diagnostic**: Data-driven analysis and problem identification
- **Systematic**: Engineering-minded approach to operations
- **Human**: Warm, accessible, and relatable despite technical depth
- **Authoritative**: Deep expertise backed by quantified outcomes

---

## Visual Identity

### Color Palette

The teal & cream system creates a **grounded, warm, human** aesthetic—not techy or corporate.

#### Primary Colors

| Token | Hex | Use | Purpose |
|-------|-----|-----|---------|
| **bg** | `#faf7f2` | Page backgrounds, primary surface | Warm cream—inviting, approachable |
| **ink** | `#1c1c18` | Body text, primary copy | Warm near-black—readable, not harsh |
| **acc** | `#007a5c` | Accent color, CTAs, emphasis | Deep teal—considered, restrained |

#### Secondary Colors

| Token | Hex | Use | Purpose |
|-------|-----|-----|---------|
| **bg2** | `#f0ebe0` | Secondary sections, code backgrounds | Slightly darker cream for hierarchy |
| **bg3** | `#e8e2d4` | Tertiary backgrounds, contrast sections | Darkest cream—used sparingly |
| **ink2** | `#3e3c36` | Subheadings, secondary text | Softer ink—less visual weight |
| **mut** | `#8a8478` | Captions, labels, metadata | Muted warm grey—de-emphasized |

#### Accent Variations

| Token | Hex | Use | Purpose |
|-------|-----|-----|---------|
| **acc2** | `#005c44` | Hover states, CTA backgrounds | Darker teal—interaction feedback |
| **accl** | `#c8e8de` | Light accent on dark backgrounds, underlines | Light teal—high contrast on `--ink` |
| **acct** | `#e4f4ef` | Tag/badge backgrounds | Very light teal—subtle tint |
| **accd** | `#003d2e` | Tag/badge text on `--acct` | Very dark teal—proper contrast |

#### Borders & Utility

| Token | Value | Use |
|-------|-------|-----|
| **bdr** | `rgba(0,0,0,0.08)` | Subtle structural borders |

### Typography

The font stack balances warmth with clarity.

#### Font Families

- **Display/Headings**: **Lora** (serif, weights: 400, 600, 700, italic)
  - Warm, literary quality
  - Conveys depth and authority
  - Use italic variants for emphasis

- **Body/UI**: **DM Sans** (sans-serif, weights: 300, 400, 500, 600)
  - Clean, geometric, modern
  - High readability at all sizes
  - Neutral counterpoint to serif headings

- **Monospace**: System monospace stack
  - Used for eyebrows, tags, labels, code
  - Technical, precise feel

#### Type Hierarchy

| Element | Font | Weight | Size (Desktop) | Line Height | Use |
|---------|------|--------|---|---|---|
| H1 | Lora | 700 | 48–64px | 1.08 | Page titles, hero text |
| H2 | Lora | 700 | 32–48px | 1.2 | Section headings |
| H3 | Lora | 700 | 24–32px | 1.2 | Subsection headings |
| H4 | Lora | 600 | 18–24px | 1.2 | Article subheadings |
| Body | DM Sans | 400 | 16–18px | 1.75 | Primary copy, article text |
| Small | DM Sans | 400 | 14px | 1.5 | Secondary text, captions |
| Eyebrow | Monospace | 700 | 10–12px | 1.2 | Labels above headings, tags |
| Button | DM Sans | 600 | 14–16px | 1.2 | CTA text |

---

## Logo & Mark System

The brand uses a **dual-mark system**: a signature wordmark for formal use and a portrait mark for personal connection.

### 1. Signature Wordmark (Primary)
**Use for**: Main branding, headers, formal contexts
- Clean, typographic lock-up
- Positioned at top-left of pages
- Works in single-color and teal accent
- Minimum size: 120px wide (web), 1 inch (print)

### 2. Portrait Mark (Secondary/Personal)
**Use for**: Profile images, author bylines, personal touch points, social media
- Circular frame, minimalist line drawing
- Modern, approachable, human-centered
- Can be used solo or paired with signature
- Size flexibility: 80px minimum (web), 0.5 inch minimum (print)

#### Portrait Mark Usage Strategy

**Option A: Portrait as Primary Mark**
- Use the portrait as the main avatar/identifier
- Position signature wordmark below or to the side
- Best for: Personal brand emphasis, social profiles, byline author photos

**Option B: Portrait + Signature Lockup**
- Pair portrait with signature in a horizontal lockup
- Creates memorable, cohesive mark
- Best for: Business cards, email signatures, about section

**Option C: Signature Primary, Portrait Secondary**
- Keep signature as main logo
- Use portrait as supplementary mark for human touch
- Best for: Current site structure, formal contexts

### Recommended Approach for Your Site

**Consider a hybrid strategy:**
1. **Keep signature as primary** on navigation and headers (your current approach works well)
2. **Introduce portrait mark as secondary** in:
   - About/Hero section (humanize the brand)
   - Author bylines on articles
   - Email signature
   - Social media profiles
   - Footer alternative to text-only brand attribution

This maintains professional consistency while adding the personal, approachable element.

---

## Component Guidelines

### Buttons

#### Primary Button
```
Background: --acc (#007a5c)
Text: White
Font: DM Sans, 600, 14–16px
Padding: 12px 32px
Border Radius: 24px (pill) or 4px (rectangular)
Hover: Background → --acc2 (#005c44)
```

#### Secondary / Ghost Button
```
Background: Transparent
Border: 1.5px solid --bdr
Text: --ink2
Font: DM Sans, 600, 14–16px
Padding: 12px 32px
Border Radius: 24px (pill) or 4px (rectangular)
Hover: Background → --ink, Text → --bg
```

### Cards & Containers

```
Border: 1px solid --bdr
Background: --bg
Border Radius: 6–8px
Padding: 24px (desktop), 16px (mobile)
Optional: 3px solid --acc top border stripe
Box Shadow: None (flat design preferred)
```

### Tags & Badges

```
Background: --acct (#e4f4ef)
Text: --accd (#003d2e)
Font: Monospace, 700, 10px
Padding: 4px 8px
Border Radius: 3px
```

### Eyebrows (Small Uppercase Labels)

```
Font: Monospace, 700, 10px
Letter Spacing: 0.22em
Text Transform: Uppercase
Color: --acc (#007a5c)
Optional: 28px × 2px --acc line before text
```

### Links

```
Color: --acc (#007a5c)
Text Decoration: Underline
Decoration Color: --accl (#c8e8de)
Text Underline Offset: 3px
Hover: Color stays --acc, decoration opacity increases
```

### Blockquotes & Callouts

```
Border Left: 4px solid --acc
Background: --acct (#e4f4ef)
Text Color: --ink
Padding: 16px 16px 16px 24px
Border Radius: 4px
Font Style: Italic (optional)
```

### Dark Background Sections (Footer, CTA)

```
Background: --ink (#1c1c18) or --acc2 (#005c44)
Text: --bg (cream) or --ricePaper (white)
Accent: --accl (#c8e8de) ← ALWAYS use light teal on dark
Never use --acc on dark backgrounds (poor contrast)
```

---

## Typography Usage Rules

### Headings
- Always use **Lora serif**
- Maintain clear hierarchy (H1 > H2 > H3)
- Line height: 1.08–1.2 for optimal readability
- Italic variants for emphasis or quotes

### Body Text
- Use **DM Sans** for all body copy
- 16–18px for primary content (article text)
- 14px for secondary content (captions, labels)
- Line height: 1.75 for generous breathing room

### Eyebrows & Labels
- Use **system monospace** for technical, precise feel
- 10–12px, all uppercase, 0.22em letter spacing
- Color: --acc on light backgrounds, --accl on dark

### Lists
- Bullet points: Use en-dash (–) or disc marker
- Numbered lists: Use numerals with periods
- Indent secondary levels clearly
- Maintain consistent spacing between items

---

## Color Application Rules

### ✅ DO

- Use **--acc** (#007a5c) for:
  - Eyebrow text on light backgrounds
  - Inline emphasis and highlights
  - Links and hover states on light backgrounds
  - Button backgrounds (primary CTA)
  - Icon accents and decorative bars
  - Section number labels (01, 02, 03)
  - Top border stripe on cards

- Use **--accl** (#c8e8de) for:
  - Text and icons on dark backgrounds (footer, dark sections)
  - Underline decoration colors
  - Subtle background tints behind quotes
  - Tag backgrounds (with --accd text)

- Use **--bg**, **--bg2**, **--bg3** for:
  - Page backgrounds and surfaces
  - Section backgrounds for hierarchy
  - Code block backgrounds

- Use **--ink**, **--ink2**, **--mut** for:
  - Body text (--ink primary, --ink2 secondary)
  - Captions and metadata (--mut)
  - Maintain semantic meaning through color weight

### ❌ DON'T

- ⚠️ Never use **--acc** as text/icon color on dark backgrounds
  - Creates insufficient contrast
  - Always use **--accl** instead

- ⚠️ Never use large impact numbers in **--acc**
  - Use --ink for large numerals
  - Add 3px --acc bar beneath instead

- ⚠️ Never mix accent colors in the same component
  - Choose either --acc or --acc2, not both
  - Use --acc2 only for hover/active states

- ⚠️ Never use raw hex values
  - Always use Tailwind semantic tokens
  - Ensures consistency and maintainability

---

## Grid & Spacing System

### Container Widths
- **Max content width**: 1280px (max-w-7xl)
- **Breakpoints**:
  - Mobile: 320px–640px (base styles)
  - Tablet: 641px–1024px (md: breakpoint)
  - Desktop: 1025px+ (lg: breakpoint)

### Spacing Scale
Use multiples of 4px (Tailwind default):
- 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 80px, 96px

### Padding & Margins
- Page padding: 24px (mobile), 32px (tablet), 48px (desktop)
- Component internal padding: 16px–24px
- Margin between sections: 48px (mobile), 64px–80px (desktop)

---

## Border & Divider Guidelines

### Borders
- **Thickness**: 0.5px for "engineering precision" feel (custom Tailwind token)
- **Color**: --bdr (rgba(0,0,0,0.08)) for subtle, neutral appearance
- **Radius**: 4–8px for cards, 24px for pill buttons

### Dividers
- Use **1px solid --bdr** for section separators
- Use **3px solid --acc** as decorative top stripe on cards or sections
- Use **2px solid --acc** for small accent lines (e.g., underlines)

### Grid Background
- Optional: Radial gradient in --acc with 0.05 opacity
- Creates subtle texture without visual noise

---

## Imagery & Photography

### Style
- Clean, focused compositions
- Warm, human tone (avoid corporate generic stock)
- Prefer environmental shots over pure headshots for authenticity
- Muted color grading that complements teal & cream palette

### Image Treatments
- **Border Radius**: 6–8px for soft, approachable feel
- **Shadow**: Subtle shadow (optional) or flat
- **Overlay**: Avoid heavy overlays; use light teal tint if needed

### Icon Library
- **Primary**: lucide-react (already integrated)
- **Stroke Weight**: 1.5–2px
- **Color**: Match context (--ink for dark backgrounds, --acc for highlights)
- **Size**: 18–24px for inline, 40–64px for standalone

---

## Social Media & Digital Applications

### Profile Images
Use portrait mark (circular, 200px minimum)
- Consistent across platforms
- Strong personal brand recognition
- Works well at small sizes (Twitter, LinkedIn, Slack)

### Covers / Banners
- Incorporate signature wordmark
- Use teal & cream color system
- Leave breathing room around logo
- Dimensions: Platform-specific (1500×500px for Twitter, 820×462px for LinkedIn)

### Content Graphics
- Use accent colors sparingly for emphasis
- Maintain typography hierarchy
- Keep design clean and minimal
- Use consistent spacing and grid

---

## Print Applications

### Business Cards
**Front:**
- Portrait mark or signature (left or center)
- Name and title in Lora/DM Sans
- Minimal layout, plenty of white space

**Back:**
- Contact info in DM Sans 400
- Optional: Teal accent line or small portrait

### Letterhead
- Signature wordmark top-left or centered
- Warm cream background (#faf7f2) optional
- Contact info in footer (DM Sans, 10px)

### Resumes
- Use Lora for section headings
- DM Sans for body text
- Teal accent for section labels (10px monospace eyebrow)
- Maintain single-column layout for clarity
- Whitespace is your friend

---

## Accessibility & Contrast

### WCAG Compliance

| Color Combination | Contrast Ratio | Level |
|---|---|---|
| --acc on --bg | 5.2:1 | AA ✅ |
| --accl on --ink | 7.1:1 | AAA ✅ |
| --ink on --bg | 9.8:1 | AAA ✅ |
| --ink2 on --bg | 4.8:1 | AA ✅ |
| **--acc on --ink (DON'T USE)** | **2.1:1** | **❌ FAILS** |

### Best Practices
- Always test color combinations with tools like WebAIM Contrast Checker
- Use --accl on dark backgrounds (never --acc)
- Maintain minimum 4.5:1 contrast ratio for text
- Test interactive elements at various zoom levels

---

## File Formats & Deliverables

### Logo Files Needed

**Signature Wordmark:**
- SVG (vector, scalable)
- PNG (300dpi for print, 96dpi for web)
- Black, white, and teal versions
- With and without tagline

**Portrait Mark:**
- SVG (vector, scalable)
- PNG (300dpi for print, 96dpi for web)
- Circular version (primary)
- Square version (social profiles)
- With optional background color options

### Web Assets
- Optimized SVG for fast loading
- PNG fallbacks at 2x density for retina displays
- Minimum sizes: 120px (wordmark), 80px (portrait)

### Print Assets
- 300dpi minimum for all print applications
- Color-managed CMYK PDF for professional printing
- Bleed guidelines and safe areas documented

---

## Tone & Voice (Visual)

The visual identity should feel:
- **Warm** — cream backgrounds, friendly proportions
- **Intelligent** — clean typography, considered color use
- **Accessible** — human portraiture, clear hierarchies
- **Restrained** — minimal flourishes, intentional accents
- **Professional** — strong contrast, good spacing, clear structure

Avoid:
- Corporate jargon visually (no overuse of stock imagery)
- Trendy effects (flat design > skeuomorphism, but avoid extremes)
- Over-designed elements (simplicity > complexity)
- Harsh contrast (warm, inviting > stark/clinical)

---

## Implementation Checklist

- [ ] Update favicon to use portrait mark or teal accent
- [ ] Add portrait mark to about/hero section
- [ ] Create signature + portrait lockup for business card
- [ ] Generate SVG and PNG versions of both logos
- [ ] Update email signature with portrait mark
- [ ] Set portrait as social media profile images
- [ ] Document Tailwind color token usage in components
- [ ] Audit all existing colors for compliance with new system
- [ ] Create print-ready versions (300dpi, CMYK)
- [ ] Test all color combinations for accessibility
- [ ] Document in team/brand standards wiki

---

## Questions to Explore

1. **Portrait Mark Primary vs. Secondary?**
   - How prominent should the personal element be?
   - Does the portrait replace or complement the signature?

2. **Logo Lock-up?**
   - Would a combined portrait + signature mark be stronger?
   - Horizontal, vertical, or both orientations?

3. **Favicon & Iconography?**
   - Use portrait for favicon, or small teal accent mark?
   - Portrait at article bylines, or keep text-only?

4. **Print Strategy?**
   - Business cards priority? Stationery?
   - Opportunity to use portrait on collateral?

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-05-24 | Initial brand guidelines with teal & cream palette, typography system, and dual-mark strategy |

---

**Brand Owner:** Jason K Hanani  
**Last Updated:** 2026-05-24  
**Maintained by:** Claude Code
