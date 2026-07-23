---
name: Tire Finder Migration Plan
description: Agreed strategy for converting tire-finder.html to a data-driven React page when the wireframe is finalized.
---

## Decision
Do NOT convert `tire-finder.html` to React until the client delivers the finalized wireframe. Doing it early means doing it twice.

## Why
- Wireframe data (slugs, image names, specs, labels, categories) will change when finalized.
- tire-finder.html functionality is complex (~102KB, tightly coupled filters/search/modal/dropdown CSS+JS).
- Porting before data is final = wasted effort.

## Plan (trigger: client delivers updated wireframe)
1. Extract wireframe data into a single TypeScript data file (same one powering product pages).
2. Convert `public/tire-finder.html` → `src/pages/TireFinderPage.tsx` at route `/tire-finder`.
   - Inherits React `<Navbar />` automatically.
   - All filter/search/modal logic ported once, to final state.
   - Visual appearance must match current tire-finder.html exactly.
3. Product pages update from the same data file — slugs, images, specs stay in sync.

## Result
Single source of truth: edit one data file → product pages + tire finder both update.

## Current state
- `tire-finder.html` stays as-is in `public/`.
- Nav ABOUT link already fixed to `/about`.
- Wireframe data currently at `.local/wireframe-data.json` (Wireframe-04, 45 tires).
