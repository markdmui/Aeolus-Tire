# Aeolus Truck Tires — Design System

A reference document for creating on-brand assets in any design or AI tool.

---

## 1. Brand Identity

**Brand name:** Aeolus Truck Tires  
**Industry:** Commercial / Truck & Bus Radial (TBR) tire manufacturing  
**Positioning:** Premium engineering, industrial authority, global performance  
**Personality:** Bold, precise, technical, dependable

---

## 2. Color Palette

### Core Brand Colors

| Name | Hex | Usage |
|---|---|---|
| **Brand Black** | `#000000` | Primary background, all pages |
| **Brand Gold** | `#F2C94C` | Primary accent — CTAs, hover states, active borders, highlights |
| **Top Bar Gold** | `#FFD700` | 6px top border stripe running across the very top of every page |
| **White** | `#FFFFFF` | Primary text, headings |
| **Muted Text** | `#B1B1B1` | Secondary / descriptive text |
| **Muted Dark** | `#8E8E93` | Placeholder text, disabled states |

### Surface / Layer Colors

| Name | Hex / Value | Usage |
|---|---|---|
| **Card Surface** | `#111112` | Tire product cards, feature tiles |
| **Elevated Card** | `#161618` | Card hover state background |
| **Divider / Border** | `#2C2C2E` | All borders, table rules, section dividers |
| **Subtle Lift 1** | `rgba(255,255,255, 0.04)` | Lowest elevation surface |
| **Subtle Lift 2** | `rgba(255,255,255, 0.09)` | Medium elevation surface |
| **Button Outline** | `rgba(255,255,255, 0.10)` | Ghost/outline button borders |
| **Badge Background** | `rgba(255,255,255, 0.05)` | Pill / badge backgrounds |

### Interaction States

- **Focus ring / primary ring:** Gold `#F2C94C`
- **Border hover:** Swaps from `#2C2C2E` → `#F2C94C`
- **Download button active left-border:** `5px solid #F2C94C` → swaps to `5px solid #FFFFFF` on hover
- **Hover transitions:** `0.3s ease` on color, border-color, transform, background

---

## 3. Typography

### Font Families

| Role | Family | Usage |
|---|---|---|
| **Headings** | `Inter` (Google Fonts, weight 600) | All `h1–h6` |
| **Body / UI** | `Helvetica Neue, Helvetica, Arial, sans-serif` | All body copy, labels, nav, buttons |

### Type Scale

| Element | Size | Weight | Letter-spacing | Notes |
|---|---|---|---|---|
| **Hero Headline (h1)** | `clamp(40px, 6.5vw, 128px)` | 600 | `-0.04em` | Very tight tracking, large impact |
| **Product Page h1** | `clamp(38px, 4.5vw, 64px)` | 600 | `-0.02em` | |
| **Section Heading (h2)** | `clamp(25.6px, 3.5vw, 48px)` | 600 | `-0.02em` | |
| **Large Section Headline** | `clamp(1.6rem, 3.5vw, 3rem)` | 600 | tight | |
| **Card / Feature Headline** | `clamp(1.4rem, 3vw, 2.8rem)` | 600 | tight | |
| **Body / Subtitle** | `clamp(0.95rem, 2.5vw, 1.1rem)` | 400 | normal | Color: `rgba(255,255,255, 0.72)` |
| **Eyebrow / Label** | `0.7rem – 0.85rem` | 400–600 | `0.05–0.1em` | UPPERCASE always |
| **Badge / Tag** | `0.8rem` | 400 | `0.05em` | UPPERCASE always |
| **Spec Table** | `0.86rem` | 400 | normal | |
| **Mobile base** | `13.5px` | — | — | Root font-size at ≤767px |

### Typography Rules
- **Headings:** Always Inter, always uppercase labels, always tight tracking
- **Eyebrow labels** (small all-caps text above a heading): Gold `#F2C94C`, `font-size: 0.7rem`, `letter-spacing: 0.1em`, `text-transform: uppercase`
- **Body copy max-width:** `32rem` for readability in hero/intro blocks
- **Line height:** `1.4` body, `0.85–1.05` for large display headings
- **Antialiasing:** `-webkit-font-smoothing: antialiased` on body
- **Border-radius:** `0` (sharp corners everywhere — no rounding)

---

## 4. Layout & Spacing

- **Max content width:** `1600px` (centered with `margin: auto`)
- **Horizontal page padding:** `calc(4vw + 20px)` desktop / `calc(4vw + 5px)` mobile
- **Column gap:** `1.5rem` (`--col-gap`)
- **Section vertical padding:** `py-16 md:py-20` (4rem / 5rem)
- **Grid columns:** 2-col (desktop) with `gap: 64px` for hero layouts; 3-col for cards
- **Aspect ratio for tech diagrams:** `16 / 11`

---

## 5. UI Components

### Product Card
- Background: `#111112`
- Border: `1px solid #2C2C2E`
- **No border-radius** (sharp corners)
- Hover: border → `#F2C94C`, lift `translateY(-5px)`, background → `#161618`
- Transition: `0.3s ease` on all properties

### Section / Feature Card
- Top accent bar: `2px solid #F2C94C` on top edge
- Border: `1px solid #2C2C2E` on remaining sides
- Background: dark surface (`#111112` or transparent)

### Eyebrow + Heading Pattern
```
[GOLD UPPERCASE LABEL]       ← 0.7rem, #F2C94C, letter-spacing 0.1em
[Large Heading]              ← clamp size, Inter 600, tight tracking
[Muted description text]     ← 0.95–1.1rem, rgba(255,255,255,0.72)
```

### Horizontal Divider Rule
- `1px solid #2C2C2E` — used between nav items, spec rows, section tops, table rows

### Prop Card (Engineering Pillars)
- Top line: `1px solid #FFFFFF` — transitions to `#F2C94C` on hover
- Padding-top: `1.5rem`

### Download / Action Button
- Background: dark (`rgba(255,255,255, 0.04)`)
- Left border: `5px solid #F2C94C`
- Other borders: `1px solid rgba(255,255,255, 0.2)`
- Hover: left border → `5px solid #FFFFFF`, background brightens slightly
- Text: white, UPPERCASE, `0.8rem`, `letter-spacing: 0.05em`
- No border-radius

### Tags / Position Badges
- Background: `rgba(255,255,255, 0.05)`
- Border: `1px solid rgba(255,255,255, 0.10)`
- Text: white, UPPERCASE, `0.8rem`, `letter-spacing: 0.05em`
- No border-radius

### Spec Table
- Collapse borders, `fontSize: 0.86rem`
- Header row: background `rgba(255,255,255,0.04)`
- Row dividers: `1px solid #2C2C2E`
- Empty cells: `—` in `#2C2C2E` color
- Smartway / M+S booleans: gold checkmark `✓` or grey dash

---

## 6. Iconography & Graphic Elements

- **Top-of-page gold stripe:** `6px solid #FFD700` bar across the very top of the browser — a signature brand mark; include in any header/banner asset
- **Dot markers** (tech diagrams): circular, gold `#F2C94C` border, dark fill, `28px × 28px`, numbered
- **Active dot state:** filled gold background, white number
- **Section separators:** horizontal `1px` rule in `#2C2C2E`
- **Hover line indicator** (prop cards): thin horizontal rule that transitions white → gold

---

## 7. Photography & Imagery Style

- **Tire product shots:** Pure black (`#000000`) or very dark background, high contrast, isolated
- **Hero backgrounds:** Dark atmospheric truck/road photography; hero text overlaid directly
- **Lifestyle / stats sections:** Truck photography used as large background (CSS `background-image`), not inline images
- **Cutaway diagrams:** Technical, high-detail cross-section on dark background
- **Feature images:** Close-up material/texture shots (tread, belt layers, wire)
- **Overall mood:** Industrial, cinematic, dark — no bright/colorful photography

---

## 8. Motion & Animation

- **Standard transition:** `0.3s ease` — used on color, border-color, background, transform
- **Button hover:** `0.15s ease` (slightly snappier)
- **Card lift on hover:** `translateY(-5px)`
- **No bounce or spring** — all easing is simple `ease` or `ease-in-out`

---

## 9. Voice & Copy Style

- **Tone:** Direct, technical, confident — no fluff
- **Headlines:** Short, powerful, often fragments ("Engineering That Performs.")
- **Labels/tags:** All caps, abbreviated (STEER, DRIVE, TRL for Trailer)
- **Spec language:** Standard tire notation (`11R22.5 16-ply`, load index, PSI)
- **Feature bullets:** Action-oriented 1-liners ("Reduces heat buildup at high speed")

---

## 10. Do / Don't

| Do | Don't |
|---|---|
| Use pure black backgrounds | Use off-white, grey, or white backgrounds |
| Use Gold (`#F2C94C`) as a single accent | Use gold as a fill color on large areas |
| Use sharp corners (0px radius) everywhere | Round buttons, cards, or inputs |
| Keep typography tight and uppercase for labels | Use sentence case for labels/tags |
| Layer dark surfaces (`#111112` on `#000000`) | Use colored backgrounds or gradients |
| Use Inter 600 for all headings | Mix heading fonts |
| Lead with technical credibility | Use lifestyle/aspirational-only language |
