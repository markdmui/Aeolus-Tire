---
name: SpecsSection layout constants
description: Named constants controlling the truck background / specs overlap section in TireProductPage.tsx
---

All layout values for the truck-bg + specs table section live as named constants at the top of `TireProductPage.tsx`. Edit these before touching any inline styles.

| Constant | Current value | Controls |
|---|---|---|
| `TRUCK_BG_POSITION` | `center calc(60% + 190px)` | Where inside the image the viewport is anchored |
| `TRUCK_MIN_HEIGHT` | `700px` | Height of the truck bg container |
| `TRUCK_MARGIN_BOTTOM` | `-180px` | How far the specs table pulls up into the truck bg |
| `SPECS_TABLE_BG` | `linear-gradient(transparent 0%, rgba(0,0,0,0.75) 200px)` | Fade overlay on specs table (reduced from full black to 75%) |
| `DOWNLOAD_BTN_PT` | `calc(3rem + 130px)` | Top padding on the download buttons column |
| `FEATURE_SECTION_BG` | `linear-gradient(transparent 0%, #000 220px, #000 55%, transparent 100%)` | Gradient on the feature section so truck bleeds through bottom |

**Section overlap pattern:**
- `SpecsSection` wrapper has `marginTop: "-110px"` to pull truck up flush with feature section bottom.
- Truck bg div has `marginBottom: TRUCK_MARGIN_BOTTOM` (-180px) so specs table overlaps it from below.
- Specs table's `SPECS_TABLE_BG` gradient provides the visual fade from transparent → dark at the top of that overlap.

**Why:** The truck image and specs table are separate divs with a negative-margin overlap trick. The gradient lives on the specs table, not the image, so it can be toggled/adjusted independently.

**How to apply:** Adjust only the named constants; do not add inline style overrides elsewhere in the component.
