---
name: Tire Finder Nav & Dropdown CSS Lessons
description: Gotchas from replicating the React Navbar in tire-finder.html (static HTML).
---

## Scoping nav link selectors
Use `.site-nav-links>li>a` (direct child combinator), NOT `.site-nav-links a`.
The dropdown `.tires-dd-link` elements are nested inside the same `<ul>`, so a loose
`a` selector bleeds `text-transform:uppercase`, negative margins, and font overrides
into the dropdown — breaking layout completely.

**Why:** The React Navbar uses scoped className styles; plain CSS in a standalone HTML
file has no scoping, so descendant selectors must be explicit.

## Dropdown panel positioning
The TIRES dropdown panel must be `position:absolute` relative to `.site-nav-right`
(the flex wrapper that holds both the nav `<ul>` and the SEARCH button), with `right:0`.
This aligns the panel's right edge with the SEARCH button — matching the homepage.

**How to apply:** `.tires-dd-wrap` (the `<li>`) must have `position:static` (not relative).
`.site-nav-right` must have `position:relative`. Panel then anchors to `.site-nav-right`.

## Size dropdown panels and scroll lock
Size dropdowns (Width/Ratio/Rim) use a `csPanels` map. `updateScrollLock()` must be
called both on open AND in `closeSelect()`. Only restore scroll when `Object.keys(csPanels).length === 0`.

## Spec table in popup vs product page
The popup spec table replicates the product page two-row header exactly:
- Size, Ply: rowspan=2
- Rim Width, Section Width: NOT rowspan=2 — they get "in" sub-header cells (class="sub")
- Group headers (Overall Diameter, Tread Depth, Max Load): text-align left, colspan
- Sub-header row cells: class="sub", vertical-align:bottom, border-bottom hairline
- Main header row: border-top on first row only (no border-bottom between rows)
