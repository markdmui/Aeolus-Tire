---
name: Tire Finder Migration
description: History and current state of the tire finder page; how data flows and what to touch when specs change.
---

## Status: COMPLETE (migrated to React)

`public/tire-finder.html` is now superseded by `src/pages/TireFinderPage.tsx` at route `/tire-finder`.

## Single source of truth

`src/data/tires.ts` → `TireFinderPage.tsx` + product pages.
Edit one file; both surfaces update automatically.

## How the adapter works

`adaptTire(t: TireData)` in TireFinderPage.tsx maps:
- `t.segment` (e.g. "Premium Long Haul") → `series` ("Premium") + `finderSegment` ("Long Haul")
- "On/Off Road" / "On/Off" / "Off Road" → "Construction"
- `t.specRows` → `FinderSize[]` (field name mapping only; values unchanged)
- `t.tags` → filter tags (must be present on TireData; added as `tags?: string[]` to interface)

## Tags field

`tags?: string[]` added to TireData interface. Populated for all 43 wireframe-06 tires.
Extra tires (not in wireframe) have no tags — they appear in the grid but aren't filterable by feature.
When a new tire is added to tires.ts, add a `tags:` line before `downloads:` to make it filterable.

**Why:** The feature-tag facet in the finder reads directly from each tire's `tags` array. Missing tags = tire shows but won't appear in tag-filtered results.

## Demo tires

Tires with `slug.startsWith("demo-")` are filtered out of the finder automatically in the adapter.

## What to touch for common changes

| Change | File(s) |
|---|---|
| New spec row / size | `tires.ts` → specRows array for that tire |
| New tire | `tires.ts` (add entry with tags + specRows) → `Navbar.tsx` + `TirePage.tsx` |
| Remove tire | `tires.ts` (delete entry) → `Navbar.tsx` + `TirePage.tsx` |
| New feature tag | Just add to `tags:` in tires.ts; finder picks it up automatically |
| Finder filter logic | `TireFinderPage.tsx` (filteredTires function) |
| Finder visual/CSS | `TireFinderPage.css` |

## Files

- `artifacts/aeolus-website/src/pages/TireFinderPage.tsx` — React component
- `artifacts/aeolus-website/src/pages/TireFinderPage.css` — scoped styles (all prefixed `tf-`)
- `artifacts/aeolus-website/public/tire-finder.html` — old HTML file, kept as archive
