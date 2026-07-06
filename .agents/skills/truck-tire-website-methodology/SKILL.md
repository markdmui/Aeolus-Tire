---
name: truck-tire-website-methodology
description: Brand-agnostic framework for building a commercial/truck tire (TBR) manufacturer website - data model, cutaway diagram component, standalone tire-finder prototype, page structure, and naming conventions. Use when starting a NEW tire company site (any brand) or porting patterns from a prior tire site. Contains structure/process only, no brand-specific content, images, or copy.
---

# Truck Tire Website Methodology

A reusable blueprint distilled from building a full TBR (Truck & Bus Radial) tire manufacturer
site (React + Vite + Tailwind + Wouter, dark theme). Use this to bootstrap a **new, unrelated**
tire brand's site quickly and consistently. Nothing here references any specific brand — swap in
the new company's name, colors, logo, and tire lineup.

## 1. Tire Data Model (`src/data/tires.ts`)

Define one `TireData` interface that separates marketing content from technical specs:

```ts
interface TireData {
  slug: string;                 // kebab-case, unique, used for /tires/:slug routing
  name: string;                 // display name
  subtitle: string;             // one-line marketing description
  segment: string;              // e.g. "Premium Long Haul", "Standard Off Road"
  position: TirePosition;       // "Drive" | "Steer" | "Trailer" | "All Position" | "OTR" | "Bus"
  bullets: string[];            // short marketing highlights (hero section)
  features: TireFeature[];      // { title, body, image } — deep-dive feature callouts
  specRows: TireSpecRow[];      // technical spec table rows (see below)
  tireImage: string;            // product shot
  heroBg: string;               // hero background
  bgTruck: string;              // truck lifestyle background
  cutawayImage: string;         // cutaway/technology diagram image
  downloads: {
    catalog?: string;
    productSheet?: string;
    warranty?: string;
    tirePhoto?: string;
  };
}

interface TireSpecRow {
  size: string; ply: string;
  rimW: string; secW: string;
  odIn: string; odMm: string;
  td32: string; tdMm: string;
  mlSlbs: string; mlSpsi: string; mlSkg: string; mlSkpa: string; // max load single
  mlDlbs: string; mlDpsi: string; mlDkg: string; mlDkpa: string; // max load dual
  liss: string;      // load index / speed symbol
  smartway: boolean;
  ms: boolean;        // mud & snow rated
}
```

Import all images at the top of the file via the `@assets` alias (see §7) rather than passing raw
string paths — this lets Vite hash/bundle them and catches missing files at build time.

## 2. Wireframe JSON — Source of Truth for Rapid Iteration

Keep a flat JSON array (e.g. `.agents/memory/wireframe-data.json` or a project `data/` file) as the
single source of truth while the lineup is still being defined by the client/stakeholder. Shape:

```json
[
  {
    "name": "...",
    "category": "...",
    "subtitle": "...",
    "pos": "Drive",
    "tags": ["..."],
    "bullets": ["..."],
    "specs_table": [
      ["11R22.5", "16", "8.25", "11.1", "41.4", "1051", "15", "18.9", ...]
    ]
  }
]
```

`specs_table` rows are **positional arrays** (index 0 = size, 1 = ply, 2 = rim width, ...) rather
than named objects — faster to paste from spreadsheets during data entry. Write a small script to
convert this into the strongly-typed `tires.ts` structure, and re-run it whenever specs change
(don't hand-edit both places).

When the client asks to add/remove a tire or edit specs, treat this JSON as the one place to edit,
then regenerate/sync the TypeScript data and any standalone prototypes (§3) from it.

## 3. Standalone Tire-Finder Prototype (`public/tire-finder.html`)

A zero-dependency single HTML file (inline `<style>`/`<script>`, no build step) used for:
- Fast client demos/sign-off before wiring into the full React app.
- A `TIRES` JS constant embedded directly in the file, derived from the wireframe JSON.
- Two filter modes: **by application** (segment/position tags) and **by size** (spec lookup).
- A results count header ("N OF N TIRES") and a modal per tire showing the full spec table.

Sync strategy: whenever the wireframe JSON changes, regenerate the embedded `TIRES` array in this
file too (e.g. via a small script or careful find/replace) — do not let it drift from the JSON.
This file is not meant to be the final UI; it's a disposable prototyping surface that later
graduates into React components once the design is approved.

## 4. Page Structure & Routing (Wouter)

| Route | Component | Responsibility |
|---|---|---|
| `/` | `LandingPage.tsx` | Brand hero, best-sellers grid, engineering/quality pillars, CTA |
| `/tires` | `TirePage.tsx` | Full lineup grid with category/segment filtering, tire cards |
| `/tires/:slug` | `TireProductPage.tsx` | Deep dive: hero, feature callouts, cutaway tech explorer, spec table, downloads |
| — | `Navbar.tsx` | Multi-column dropdown nav grouped by product line/series, then by segment |
| — | `Footer.tsx` | Categories, company links, social |

Keep `TireProductPage` driven entirely by `getTireBySlug(slug)` — no per-tire page components.

## 5. Cutaway/Technology Explorer Component

A reusable interactive diagram: cutaway tire image + numbered dots overlaid, synced with a text
list of features. Pattern (component-agnostic of brand):

```ts
interface Point { id: number; title: string; bullets: string[]; x: number; y: number; }
interface Props { imageSrc: string; points: Point[]; imageAlt?: string; }
```

- Dots are `position: absolute; left: ${x}%; top: ${y}%; transform: translate(-50%, -50%)` inside
  a container with a **fixed `aspectRatio`** (e.g. `16 / 11`) and `object-contain` image.
- Clicking/hovering a dot or its matching list row sets shared `activeId` state — keep them in
  sync via one `useState`, not two.
- `x`/`y` are percentages of the **container**, not the image pixels. If the image's aspect ratio
  differs from the container's, `object-contain` will letterbox/pillarbox it — account for the
  margin when converting pixel positions from a reference mockup into `x`/`y` percentages:
  ```
  displayedFraction = imageAspect / containerAspect   // assumes image is narrower than container
  margin = (1 - displayedFraction) / 2
  containerX% = (margin + imageFractionX * displayedFraction) * 100
  containerY% = imageFractionY * 100   // no vertical letterbox if image is the narrower dimension
  ```
  (If instead the container is narrower than the image, letterboxing happens top/bottom and the
  formula flips to the Y axis.)
- When asked to nudge a dot by pixels ("move it left 20px"), convert px → percent using the
  *rendered* container's width/height at the current viewport, not the image's native pixels.

## 6. Naming & Slug Conventions

- Slugs: kebab-case, unique, human-readable (`neo-fuel-d3`, not an ID). Match to asset filenames
  where practical so images can be looked up by convention.
- Model naming pattern to replicate structurally (not literally): `<Line Prefix><Function><Position Code>`
  — e.g. a premium line prefix, a functional descriptor (fuel efficiency, urban, winter), and a
  position letter (S = Steer, D = Drive, T = Trailer, — = All Position). Adapt the actual prefixes/
  codes to the new brand's own naming scheme.
- Segment taxonomy: pair a tier (Premium / Standard) with a use-case (Long Haul, Regional, Urban,
  On/Off, Off Road, Winter) — this two-axis taxonomy drives both nav grouping and lineup filtering.

## 7. Asset Import Convention

- Configure a Vite alias (e.g. `@assets`) pointing at wherever uploaded/attached images live.
- Always `import x from "@assets/file.png"` at the top of data files instead of using raw string
  paths — catches missing files at build time and lets Vite hash/cache-bust them.
- Keep large photo catalogs (hi-res product shots, etc.) in `public/` and reference by URL path
  when they don't need bundling (e.g. referenced only from the standalone HTML prototype).

## What NOT to Carry Over

This skill is intentionally silent on: color palette, logo, typography, copywriting voice, actual
tire model names/specs, and any brand imagery — all of that must come fresh from the new company's
brand guidelines. Only the data shapes, component patterns, and process above are reusable.
