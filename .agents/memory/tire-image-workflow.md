---
name: Tire image workflow
description: How to handle tire hero images — print vs web split, file naming, and tooling.
---

## Rule
Every tire gets two image files in `public/`:
- `{tire-slug}.png` — 800×1000px at 72 DPI (web display, hero image on page)
- `{tire-slug}-print.png` — 1920×2400px at 300 DPI (dealer download via "Tire Photo" button)

## How to apply
1. User sends a 300 DPI source PNG.
2. Use Python Pillow to generate both outputs:
   - Print: save as-is with `dpi=(300,300)`
   - Web: `img.resize((800,1000), Image.LANCZOS)`, save with `dpi=(72,72), optimize=True`
3. `TireProductPage.tsx` loads the web version as a string const (`const tireImg = "/{slug}.png"`) — NOT a Vite import — because it lives in `public/`.
4. The "Tire Photo" download button `href` points to `/{slug}-print.png`.

**Why:** Dealers need print-quality files (300 DPI) for marketing; the web version keeps page load fast. Pillow is already pip-installed in this environment.
