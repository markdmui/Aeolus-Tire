# Tire / Product Search Page — Portable Spec

> **Brand & product agnostic.** All color values use placeholder tokens. All product-specific field names are labelled generically. Drop this into any React + React Router project.

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Data Shape](#2-data-shape)
3. [Pre-computed Constants](#3-pre-computed-constants)
4. [Filter State](#4-filter-state)
5. [Filter Logic](#5-filter-logic)
6. [Size Dropdown Cascading Logic](#6-size-dropdown-cascading-logic)
7. [Free-text Search Logic](#7-free-text-search-logic)
8. [Component Inventory](#8-component-inventory)
9. [CustomSelect Component](#9-customselect-component)
10. [FacetGroup Component](#10-facetgroup-component)
11. [Page Layout — HTML Structure](#11-page-layout--html-structure)
12. [Sidebar — Filter Panels](#12-sidebar--filter-panels)
13. [Results Grid — Product Cards](#13-results-grid--product-cards)
14. [Detail Modal](#14-detail-modal)
15. [CSS Layout System](#15-css-layout-system)
16. [CSS Design Tokens](#16-css-design-tokens)
17. [CSS — Full Component Styles](#17-css--full-component-styles)
18. [Responsive Breakpoints](#18-responsive-breakpoints)
19. [Button & Interaction Reference](#19-button--interaction-reference)
20. [Utility Functions](#20-utility-functions)
21. [Porting Checklist](#21-porting-checklist)

---

## 1. Architecture Overview

```
SearchPage (default export)
│
├── usePageStyle(css)           — injects scoped CSS on mount, removes on unmount
│
├── State (useState)            — 9 independent filter slices + 1 modal state
│
├── Derived options (useMemo)   — cascading size dropdown options
│
├── Filtered results (useMemo)  — single pass filter across all active slices
│
├── <ShortHeader />             — shared site navigation bar
│
├── .pagehead                   — headline + free-text search row
│
├── .layout
│   ├── <aside .sidebar>        — all filter panels (sticky on desktop)
│   └── <main .main>            — result count + card grid
│
└── {activeTire && modal}       — detail modal via conditional render
```

**Dependencies:** React (`useState`, `useMemo`, `useRef`, `useEffect`), React Router (`Link`), React DOM (`createPortal`).

---

## 2. Data Shape

Each item in the `PRODUCTS` array must conform to:

```js
{
  // --- Identity ---
  name:        String,   // short model code, used as React key
  fullname:    String,   // full display name
  subtitle:    String,   // one-line descriptor shown on card and modal
  description: String,   // longer paragraph shown in modal body

  // --- Facet fields (drive sidebar filters) ---
  segment:     String,   // top-level category  (e.g. "Long Haul", "Regional")
  pos:         String,   // sub-position        (e.g. "Steer", "Drive", "Trailer")
  series:      String,   // product tier label  (e.g. "Premium", "Standard")

  // --- Boolean cert flags (drive sidebar filter + card indicators) ---
  smartway:    Boolean,  // or any cert flag A
  // additional cert B is tag-based (see tags array)

  // --- Free-form tags (drive Features facet + search) ---
  tags:        String[], // e.g. ["Fuel Efficient", "High Mileage", "3PMSF Winter Certified"]

  // --- Modal sections ---
  bullets:      String[],  // key features list
  badges:       String[],  // short cert/warranty labels rendered as pill chips
  applications: String[],  // use-case chips
  warrantyNote: String,    // footnote line 1
  retreadNote:  String,    // footnote line 2 (omit / rename for non-tire products)
  compref:      String,    // internal reference note (shown in footnote if present)
  quality:      String,    // optional quality statement (not currently rendered in modal)

  // --- Size / SKU table rows (one per SKU) ---
  sizes: [
    {
      size:        String,  // dimension string, e.g. "295/75R22.5"
      liss:        String,  // Load Index / Speed Symbol
      ply:         Number,
      td:          Number,  // tread depth
      rimw:        Number,  // rim width
      diam:        Number,  // outer diameter
      secw:        Number,  // section width
      loadS_lbs:   Number,  // single load (lbs)
      loadD_lbs:   Number,  // dual load (lbs)
      loadS_psi:   Number,  // inflation pressure
      // ... add/remove columns as needed; table headers must match
    }
  ]
}
```

---

## 3. Pre-computed Constants

These run **once at module load** — outside any component — so they never re-execute on renders.

```js
// Derive facet value lists directly from data so they stay in sync automatically.
const SEGMENTS = uniqueSorted(PRODUCTS.map(p => p.segment));
const POSITIONS = uniqueSorted(PRODUCTS.map(p => p.pos));

// Hard-coded ordered lists (order matters for display):
const SERIES = ['Premium', 'Mid-range', 'Standard'];
const CERTS  = ['Cert Label A', 'Cert Label B'];

// Tags that are NOT features (exclude segment/series/cert labels from Features facet):
const EXCLUDE_TAGS = new Set([...SEGMENTS, ...SERIES, ...CERTS]);
const FEATURE_TAGS = uniqueSorted(
  PRODUCTS.reduce((acc, p) => acc.concat(p.tags), [])
    .filter(tag => !EXCLUDE_TAGS.has(tag))
);

// All unique size strings across the catalog:
const allSizeStrings = uniqueSorted(
  PRODUCTS.reduce((acc, p) => acc.concat(p.sizes.map(s => s.size)), [])
);

// Parse each size string into { width, ratio, rim } for cascading dropdowns:
const SIZE_COMBOS = allSizeStrings
  .map(sz => {
    const toks = sizeTokens(sz);            // see §20
    if (toks.length === 3) return { width: toks[0], ratio: toks[1], rim: toks[2] };
    if (toks.length === 2) return { width: toks[0], ratio: '',       rim: toks[1] };
    return null;
  })
  .filter(Boolean);
```

---

## 4. Filter State

```js
// Multi-select facets (each is a Set<string>):
const [segment, setSegment] = useState(new Set());
const [pos,     setPos]     = useState(new Set());
const [series,  setSeries]  = useState(new Set());
const [cert,    setCert]    = useState(new Set());
const [tags,    setTags]    = useState(new Set());

// Cascading size dropdowns (each is a string, '' = unset):
const [sizeWidth, setSizeWidth] = useState('');
const [sizeRatio, setSizeRatio] = useState('');
const [sizeRim,   setSizeRim]   = useState('');

// Free-text search:
const [q, setQ] = useState('');

// Modal:
const [activeItem, setActiveItem] = useState(null);
```

**Reset all filters:**
```js
function resetAll() {
  setSegment(new Set());
  setPos(new Set());
  setSeries(new Set());
  setCert(new Set());
  setTags(new Set());
  setSizeWidth('');
  setSizeRatio('');
  setSizeRim('');
  // Note: q (search text) is intentionally NOT reset here;
  // the search bar has its own Clear button.
}
```

**Toggle a value in a Set-based filter:**
```js
function toggleInSet(set, value) {
  const next = new Set(set);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}
// Usage: setSegment(s => toggleInSet(s, value))
```

---

## 5. Filter Logic

All active filters are ANDed together. Each slice is a no-op when empty (size 0 / empty string).

```js
const filtered = useMemo(() => {
  return PRODUCTS.filter(item => {

    // --- Multi-select facets: item must match AT LEAST ONE selected value ---
    if (segment.size && !segment.has(item.segment)) return false;
    if (pos.size     && !pos.has(item.pos))         return false;
    if (series.size  && !series.has(item.series))   return false;

    // --- Cert filter: item must satisfy ALL selected certs ---
    if (cert.size) {
      for (const c of cert) {
        if (c === 'Cert Label A' && !item.certFlagA) return false;
        if (c === 'Cert Label B' && !item.tags.includes('Cert Label B')) return false;
        // Add more cert checks here as needed
      }
    }

    // --- Feature tags: item must have ALL selected tags ---
    if (tags.size) {
      for (const tag of tags) {
        if (!item.tags.includes(tag)) return false;
      }
    }

    // --- Size filter: item must have at least one SKU matching all selected dimensions ---
    if (sizeWidth || sizeRatio || sizeRim) {
      const need = [sizeWidth, sizeRatio, sizeRim].filter(Boolean);
      const ok = item.sizes.some(s => {
        const toks = sizeTokens(s.size);
        return need.every(n => toks.includes(n));
      });
      if (!ok) return false;
    }

    // --- Free-text search ---
    if (!matchesSearch(item, q)) return false;

    return true;
  });
}, [segment, pos, series, cert, tags, sizeWidth, sizeRatio, sizeRim, q]);
```

---

## 6. Size Dropdown Cascading Logic

The three size dropdowns (Width / Ratio / Rim) are interdependent. Each dropdown only shows values that are valid given the other two selections, preventing zero-result combinations.

```js
// Returns the Set of valid values for `dim` given the other two selected values.
function sizeOptionsFor(dim, sel) {
  const matches = SIZE_COMBOS.filter(c => {
    if (dim !== 'width' && sel.width && c.width !== sel.width) return false;
    if (dim !== 'ratio' && sel.ratio && c.ratio !== sel.ratio) return false;
    if (dim !== 'rim'   && sel.rim   && c.rim   !== sel.rim)   return false;
    return true;
  });
  const set = new Set();
  matches.forEach(c => { if (c[dim]) set.add(c[dim]); });
  return set;
}

// Memoized option lists (each recalculates only when the other two change):
const availWidths = useMemo(
  () => numSortedArray(sizeOptionsFor('width', { width: '',        ratio: sizeRatio, rim: sizeRim })),
  [sizeRatio, sizeRim]
);
const availRatios = useMemo(
  () => numSortedArray(sizeOptionsFor('ratio', { width: sizeWidth, ratio: '',        rim: sizeRim })),
  [sizeWidth, sizeRim]
);
const availRims = useMemo(
  () => numSortedArray(sizeOptionsFor('rim',   { width: sizeWidth, ratio: sizeRatio, rim: ''      })),
  [sizeWidth, sizeRatio]
);

// Auto-clear a selection when it is no longer valid (prevents silent zero results):
useEffect(() => { if (sizeWidth && !availWidths.includes(sizeWidth)) setSizeWidth(''); }, [availWidths]);
useEffect(() => { if (sizeRatio && !availRatios.includes(sizeRatio)) setSizeRatio(''); }, [availRatios]);
useEffect(() => { if (sizeRim   && !availRims.includes(sizeRim))     setSizeRim('');   }, [availRims]);
```

---

## 7. Free-text Search Logic

Searches name, fullname, subtitle, all tags, segment, position, and size strings.

```js
function matchesSearch(item, query) {
  if (!query) return true;
  const q = query.toLowerCase();

  if (item.name.toLowerCase().includes(q))     return true;
  if (item.fullname.toLowerCase().includes(q)) return true;
  if (item.subtitle.toLowerCase().includes(q)) return true;
  if (item.tags.some(tag => tag.toLowerCase().includes(q))) return true;
  if (item.segment.toLowerCase().includes(q))  return true;
  if (item.pos.toLowerCase().includes(q))      return true;

  // Size string match: tokenise both query and size, check all query tokens are present
  const qTokens = q.replace(/\s/g, '').split(/[/r]/i).filter(Boolean);
  if (
    qTokens.length &&
    item.sizes.some(s => {
      const sTokens = sizeTokens(s.size);
      return qTokens.every(qt => sTokens.includes(qt));
    })
  ) return true;

  return false;
}
```

---

## 8. Component Inventory

| Component | Type | Purpose |
|---|---|---|
| `SearchPage` | Page (default export) | Root component, owns all state |
| `CustomSelect` | UI | Portal-based dropdown for Width/Ratio/Rim; keyboard & click-outside aware |
| `FacetGroup` | UI | Renders a list of checkbox-style filter options |
| `ShortHeader` | Shared | Site navigation bar (imported from shared components) |

---

## 9. CustomSelect Component

A fully custom dropdown that portals its panel to `document.body` to avoid overflow/clip issues. Replaces native `<select>` for visual consistency.

```jsx
function CustomSelect({ placeholder, values, current, onChange }) {
  const [open, setOpen]           = useState(false);
  const [panelRect, setPanelRect] = useState(null);
  const ref      = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    // Reposition panel on scroll/resize (handles sticky sidebars)
    const reposition = () => {
      const trigger = ref.current?.querySelector('.cs-trigger');
      if (!trigger) return;
      const r = trigger.getBoundingClientRect();
      setPanelRect({ top: r.bottom + 2, left: r.left, width: r.width });
    };
    reposition();

    const close = e => {
      if (ref.current?.contains(e.target))      return;
      if (panelRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    const onEsc = e => { if (e.key === 'Escape') setOpen(false); };

    document.addEventListener('click', close);
    document.addEventListener('keydown', onEsc);
    window.addEventListener('scroll', reposition, true);
    window.addEventListener('resize', reposition);

    return () => {
      document.removeEventListener('click', close);
      document.removeEventListener('keydown', onEsc);
      window.removeEventListener('scroll', reposition, true);
      window.removeEventListener('resize', reposition);
    };
  }, [open]);

  return (
    <div className="customselect" ref={ref}>
      <button
        type="button"
        className={`cs-trigger${open ? ' open' : ''}${current ? ' has-value' : ''}`}
        aria-haspopup="listbox"
        onClick={e => { e.stopPropagation(); setOpen(o => !o); }}
      >
        <span className="cs-label">{current || placeholder}</span>
        <svg className="cs-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && panelRect && createPortal(
        <div
          className="cs-panel"
          role="listbox"
          ref={panelRef}
          style={{ top: panelRect.top, left: panelRect.left, width: panelRect.width }}
        >
          {/* "Clear" option — always first */}
          <div
            className={`cs-option${current === '' ? ' selected' : ''}`}
            onClick={e => { e.stopPropagation(); onChange(''); setOpen(false); }}
          >
            {placeholder}
          </div>
          {values.map(v => (
            <div
              key={v}
              className={`cs-option${v === current ? ' selected' : ''}`}
              onClick={e => { e.stopPropagation(); onChange(v); setOpen(false); }}
            >
              {v}
            </div>
          ))}
        </div>,
        document.body
      )}
    </div>
  );
}
```

**State classes on `.cs-trigger`:**
| Class | Meaning |
|---|---|
| *(none)* | Closed, no value selected |
| `.open` | Panel is visible |
| `.has-value` | A value is selected (renders with filled background) |

---

## 10. FacetGroup Component

Renders a list of toggle items with a custom checkbox visual. Used for Segment, Position, Series, Certs, and Features.

```jsx
function FacetGroup({ id, values, selected, onToggle }) {
  return (
    <div id={id}>
      {values.map(v => (
        <div
          key={v}
          className={`facet-opt${selected.has(v) ? ' checked' : ''}`}
          onClick={() => onToggle(v)}
        >
          <span className="box"></span>
          <span className="tag-text">{v}</span>
        </div>
      ))}
    </div>
  );
}
```

- `id` prop is optional; used to apply special CSS to the Features panel (`id="facetTags"` renders in a 2-col grid and hides the `.box` in favour of text-underline styling).
- `selected` must be a `Set<string>`.
- `onToggle(value)` should call `setX(s => toggleInSet(s, value))`.

---

## 11. Page Layout — HTML Structure

```jsx
<>
  <ShortHeader active="search" />

  {/* ── Page header: title + search bar ── */}
  <div className="pagehead">
    <h1 className="headline">
      PRODUCT <span className="accent">SEARCH</span>
    </h1>
    <div className="searchrow">
      <span className="searchicon">{/* SVG magnifier */}</span>
      <input
        type="text"
        placeholder="Search by name, size or feature…"
        autoComplete="off"
        value={q}
        onChange={e => setQ(e.target.value)}
      />
      <button className="clearbtn" onClick={() => setQ('')}>Clear</button>
    </div>
  </div>

  {/* ── Main two-column layout ── */}
  <div className="layout">
    <aside className="sidebar">
      {/* Filter panels — see §12 */}
    </aside>
    <main className="main">
      {/* Results — see §13 */}
    </main>
  </div>

  {/* ── Detail modal — see §14 ── */}
  {activeItem && ( /* ... */ )}
</>
```

---

## 12. Sidebar — Filter Panels

```jsx
<aside className="sidebar">

  {/* Group 1: short facets rendered side-by-side via CSS column layout */}
  <div className="facet-cols">

    <div className="facet">
      <div className="facet-head">
        <span className="label">Category</span>
        <button onClick={resetAll}>Reset</button>   {/* Reset is on first panel only */}
      </div>
      <FacetGroup values={SEGMENTS} selected={segment} onToggle={v => setSegment(s => toggleInSet(s, v))} />
    </div>

    <div className="facet">
      <div className="facet-head"><span className="label">Sub-type</span></div>
      <FacetGroup values={POSITIONS} selected={pos} onToggle={v => setPos(s => toggleInSet(s, v))} />
    </div>

    <div className="facet">
      <div className="facet-head"><span className="label">Series / Tier</span></div>
      <FacetGroup values={SERIES} selected={series} onToggle={v => setSeries(s => toggleInSet(s, v))} />
    </div>

    <div className="facet">
      <div className="facet-head"><span className="label">Certifications</span></div>
      <FacetGroup values={CERTS} selected={cert} onToggle={v => setCert(s => toggleInSet(s, v))} />
    </div>

  </div>

  {/* Size cascading dropdowns */}
  <div className="facet">
    <div className="facet-head">
      <span className="label">Size</span>
      <button onClick={resetAll}>Reset</button>
    </div>
    <div className="size-row">
      <CustomSelect placeholder="Width" values={availWidths} current={sizeWidth} onChange={setSizeWidth} />
      <CustomSelect placeholder="Ratio" values={availRatios} current={sizeRatio} onChange={setSizeRatio} />
      <CustomSelect placeholder="Rim"   values={availRims}   current={sizeRim}   onChange={setSizeRim}   />
    </div>
  </div>

  {/* Features tag cloud */}
  <div className="facet">
    <div className="facet-head">
      <span className="label">Features</span>
      <button onClick={resetAll}>Reset</button>
    </div>
    <FacetGroup
      id="facetTags"
      values={FEATURE_TAGS}
      selected={tags}
      onToggle={v => setTags(s => toggleInSet(s, v))}
    />
  </div>

</aside>
```

**Reset button placement:** Reset buttons appear on the first panel (`Category`) and on `Size` and `Features`. They all call `resetAll()` which clears every filter slice simultaneously.

---

## 13. Results Grid — Product Cards

```jsx
<main className="main">
  <div id="resultsCountRow">
    Showing <b>{filtered.length}</b> of {PRODUCTS.length} products
  </div>

  <div className="grid">
    {filtered.length === 0 && (
      <div className="empty-state" style={{ gridColumn: '1/-1' }}>
        No products match these filters. Try clearing a filter or broadening your search.
      </div>
    )}

    {filtered.map(item => {
      const certAOn  = item.certFlagA ? 'on' : '';
      const certBOn  = item.tags.includes('Cert Label B') ? 'on' : '';
      const sizeCount = item.sizes.length;

      return (
        <div className="card" key={item.name} onClick={() => setActiveItem(item)}>
          {/* Swatch: placeholder visual in lieu of a product image */}
          <div className="swatch">{item.name.slice(0, 4)}</div>

          <div className="body">
            <div className="segment">{item.segment} · {item.pos}</div>
            <div className="name">{item.name}</div>
            <div className="subtitle">{item.subtitle}</div>
            <div className="meta-row">
              <span>{sizeCount ? `${sizeCount} ${sizeCount === 1 ? 'size' : 'sizes'}` : ''}</span>
              <span className="certs">
                <span className={`dot ${certAOn}`}></span>
                <span className="cert-label">A</span>
                <span className={`dot ${certBOn}`}></span>
                <span className="cert-label">B</span>
              </span>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</main>
```

**Card anatomy:**
- `.swatch` — image/placeholder area (110 px tall). Replace with `<img>` when assets are available.
- `.segment` — category · sub-type breadcrumb in accent colour.
- `.name` — primary product name.
- `.subtitle` — secondary descriptor.
- `.meta-row` — size count (left) + certification indicator dots (right).
- Certification dots: `.dot` = off state (light grey); `.dot.on` = on state (accent yellow or colour of choice).

---

## 14. Detail Modal

Triggered by clicking any card. Closed by: clicking outside the modal box, clicking ×, or pressing Escape.

```jsx
{/* Escape key listener */}
useEffect(() => {
  if (!activeItem) return undefined;
  const onEsc = e => { if (e.key === 'Escape') setActiveItem(null); };
  document.addEventListener('keydown', onEsc);
  return () => document.removeEventListener('keydown', onEsc);
}, [activeItem]);

{/* Modal JSX */}
{activeItem && (
  <div
    className="modal-overlay open"
    onClick={e => e.target === e.currentTarget && setActiveItem(null)}  // click-outside-to-close
  >
    <div className="modal">

      {/* ── Modal header ── */}
      <div className="modal-head">
        <div>
          <div className="segment">{activeItem.segment} · {activeItem.pos}</div>
          <h2>{activeItem.name}</h2>
          <div className="subtitle">{activeItem.subtitle}</div>
        </div>
        <div className="modal-head-actions">
          <button className="modal-close" onClick={() => setActiveItem(null)}>&times;</button>
          {/* CTA button — link to detail page */}
          <Link
            to="/products/detail-page"
            className="modal-product-btn"
          >
            View Product Page
          </Link>
        </div>
      </div>

      {/* ── Modal body ── */}
      <div className="modal-body">

        {/* Description paragraph */}
        {activeItem.description && (
          <div className="modal-section">
            <p style={{ margin: 0, fontSize: 13, color: 'var(--muted)' }}>
              {activeItem.description}
            </p>
          </div>
        )}

        {/* Badges / certifications */}
        {activeItem.badges?.length > 0 && (
          <div className="modal-section">
            <h3>Coverage &amp; Certification</h3>
            <div className="badges">
              {activeItem.badges.map(b => <span className="badge" key={b}>{b}</span>)}
            </div>
          </div>
        )}

        {/* Key features list */}
        <div className="modal-section">
          <h3>Key Features</h3>
          <ul className="bullets">
            {activeItem.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>

        {/* Applications chips */}
        {activeItem.applications?.length > 0 && (
          <div className="modal-section">
            <h3>Applications</h3>
            <div className="tagchips">
              {activeItem.applications.map(a => <span className="tagchip" key={a}>{a}</span>)}
            </div>
          </div>
        )}

        {/* Tags chips */}
        {activeItem.tags?.length > 0 && (
          <div className="modal-section">
            <h3>Tags</h3>
            <div className="tagchips">
              {activeItem.tags.map(t => <span className="tagchip" key={t}>{t}</span>)}
            </div>
          </div>
        )}

        {/* Spec table */}
        <div className="modal-section">
          <h3>Size &amp; Spec Chart</h3>
          <table className="spec">
            <thead>
              <tr>
                <th>Size</th>
                <th>LI/SR</th>
                <th>Ply</th>
                <th>T.D. (32nds)</th>
                <th>Rim</th>
                <th>O.D. (in)</th>
                <th>S.W. (in)</th>
                <th>Load Single (lbs)</th>
                <th>Load Dual (lbs)</th>
                <th>PSI</th>
              </tr>
            </thead>
            <tbody>
              {(activeItem.sizes || []).map((s, i) => (
                <tr key={i}>
                  <td>{s.size}</td>
                  <td>{s.liss   || ''}</td>
                  <td>{s.ply    || ''}</td>
                  <td>{s.td     || ''}</td>
                  <td>{s.rimw   || ''}</td>
                  <td>{s.diam   || ''}</td>
                  <td>{s.secw   || ''}</td>
                  <td>{s.loadS_lbs || ''}</td>
                  <td>{s.loadD_lbs || ''}</td>
                  <td>{s.loadS_psi || ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Remove or rename spec columns to match your data shape */}
        </div>

        {/* Footnotes */}
        <div className="modal-footnote">
          {[
            activeItem.warrantyNote,
            activeItem.retreadNote,
            activeItem.compref && `Internal reference: ${activeItem.compref}`
          ]
            .filter(Boolean)
            .map((line, i) => <span key={i}>{line}<br /></span>)}
        </div>

      </div>
    </div>
  </div>
)}
```

---

## 15. CSS Layout System

### Page wrapper max-width
Both `.pagehead` and `.layout` use `max-width: 1280px; margin: 0 auto` to centre content on wide viewports.

### Two-column layout
```
.layout
  display: flex
  gap: 32px
  padding: 20px 32px 60px
  align-items: flex-start
```

### Sidebar
```
.sidebar
  width: 230px            — fixed width, does not grow
  flex: 0 0 230px
  position: sticky        — stays in view while scrolling results
  top: 20px
  max-height: calc(100vh - 40px)
  overflow-y: auto        — sidebar scrolls independently if taller than viewport
```

### Results area
```
.main
  flex: 1                 — takes all remaining space
  min-width: 0            — prevents overflow in flex containers
```

### Results grid
```
.grid
  display: grid
  grid-template-columns: repeat(4, 1fr)   — 4 columns desktop
  gap: 8px
  margin-top: 24px
```

---

## 16. CSS Design Tokens

Replace these values to retheme for any brand:

```css
:root {
  --font:          'Your Font', Helvetica, Arial, sans-serif;
  --ink:           #1a1a1a;          /* primary text */
  --paper:         #ffffff;          /* page background */
  --paper-grey:    #f0f0f0;          /* card swatch background */
  --image-fill:    #e8e8e8;          /* image placeholder */
  --hairline:      #d6d6d6;          /* borders & dividers */
  --muted:         #595959;          /* secondary text */
  --label-grey:    #888888;          /* facet labels, cert labels */
  --accent:        #REPLACE_ME;      /* brand primary colour */
  --accent-deep:   #REPLACE_ME;      /* darker shade for hover states */
  --surface-hover: #REPLACE_ME_LIGHT;/* light tint of accent for hover bg */
  --cert-off:      #ebebeb;          /* cert dot — not certified */
  --cert-on:       #REPLACE_ME;      /* cert dot — certified */
}
```

---

## 17. CSS — Full Component Styles

```css
/* ── Reset ── */
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  font-family: var(--font);
  color: var(--ink);
  background: var(--paper);
  font-size: 14px;
  line-height: 1.5;
}
a { color: inherit; }

/* ── Page header ── */
.pagehead {
  padding: 20px 32px;
  border-bottom: 1px solid var(--hairline);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px 0;
  max-width: 1280px;
  margin: 0 auto;
}
.headline {
  font-size: 28px;
  font-weight: 400;
  letter-spacing: -.02em;
  color: var(--ink);
  margin: 0 28px 0 0;
  white-space: nowrap;
}
.headline .accent { color: var(--accent); }

/* ── Search bar ── */
.searchrow {
  display: flex;
  align-items: stretch;
  border: 1px solid var(--hairline);
  flex: 1 1 360px;
  min-width: 260px;
  max-width: 640px;
  margin-left: auto;
}
.searchrow .searchicon {
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-right: 1px solid var(--hairline);
  color: var(--label-grey);
}
.searchrow input[type="text"] {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--font);
  font-size: 15px;
  padding: 14px 16px;
  color: var(--ink);
}
.searchrow input[type="text"]::placeholder { color: var(--label-grey); }
.searchrow .clearbtn {
  border: none;
  border-left: 1px solid var(--hairline);
  background: none;
  padding: 0 20px;
  font-family: var(--font);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
  cursor: pointer;
  white-space: nowrap;
}
.searchrow .clearbtn:hover { background: var(--surface-hover); }

/* ── Layout ── */
.layout {
  display: flex;
  align-items: flex-start;
  gap: 32px;
  padding: 20px 32px 60px;
  max-width: 1280px;
  margin: 0 auto;
}
.sidebar {
  width: 230px;
  flex: 0 0 230px;
  position: sticky;
  top: 20px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  padding-right: 6px;
}
.sidebar::-webkit-scrollbar { width: 1px; }
.sidebar::-webkit-scrollbar-thumb { background: rgba(0,0,0,.15); }

/* ── Facet panels ── */
.facet {
  border-bottom: 1px solid var(--hairline);
  padding: 14px 0;
}
.facet:first-child { padding-top: 0; }
.facet-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.facet-head .label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: var(--label-grey);
}
.facet-head button {
  font-family: var(--font);
  font-size: 10px;
  color: var(--accent);
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px 4px;
  margin: -2px -4px;
}
.facet-head button:hover {
  color: var(--ink);
  background: var(--surface-hover);
}

/* ── Checkbox-style facet options ── */
.facet-opt {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12.5px;
  padding: 2px 0;
  cursor: pointer;
  color: var(--ink);
  user-select: none;
}
.facet-opt .box {
  width: 13px; height: 13px;
  border: 1px solid var(--hairline);
  flex: 0 0 13px;
  background: var(--paper);
}
.facet-opt.checked .box {
  background: var(--accent);
  border-color: var(--accent);
}
.facet-opt:hover .tag-text { color: var(--accent); text-decoration: underline; }
.facet-opt.checked .tag-text { color: var(--ink); font-weight: 700; text-decoration: none; }
.facet-opt .count { margin-left: auto; color: var(--label-grey); font-size: 11px; }

/* ── Size dropdowns ── */
.size-row { display: flex; gap: 6px; }
.customselect { flex: 1; position: relative; }
.cs-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  font-family: var(--font);
  font-size: 12px;
  padding: 6px 8px;
  border: 1px solid var(--hairline);
  color: var(--ink);
  background: var(--paper);
  cursor: pointer;
}
.cs-trigger:focus, .cs-trigger.open { outline: none; border-color: var(--accent); }
.cs-trigger.has-value {
  background: var(--accent-deep);
  border-color: var(--accent-deep);
  color: #ffffff;
}
.cs-trigger.has-value .cs-caret { color: #ffffff; }
.cs-trigger .cs-caret { width: 9px; height: 9px; flex: 0 0 9px; color: var(--label-grey); }
.cs-panel {
  position: fixed;
  background: var(--paper);
  border: 1px solid var(--hairline);
  box-shadow: 0 6px 16px rgba(0,0,0,.1);
  max-height: 240px;
  overflow-y: auto;
  z-index: 200;
  font-family: var(--font);
  font-size: 12px;
}
.cs-option { padding: 6px 10px; cursor: pointer; color: var(--ink); white-space: nowrap; }
.cs-option:hover, .cs-option.highlighted { background: var(--surface-hover); }
.cs-option.selected { font-weight: 700; color: var(--accent); }

/* ── Features tag panel (2-col, text-link style, no checkbox box) ── */
#facetTags {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8px;
}
#facetTags .facet-opt { padding: 1px 2px; gap: 0; }
#facetTags .facet-opt .box { display: none; }
#facetTags .facet-opt .tag-text {
  padding: 2px 3px;
  border-radius: 2px;
  color: #979797;
}
#facetTags .facet-opt:hover .tag-text {
  color: var(--ink);
  background: var(--surface-hover);
  text-decoration: underline;
}
#facetTags .facet-opt.checked .tag-text {
  color: var(--ink);
  font-weight: 700;
  background: var(--surface-hover);
  text-decoration: underline;
  text-decoration-color: var(--accent);
}

/* ── Results area ── */
.main { flex: 1; min-width: 0; }
#resultsCountRow { font-size: 12px; color: var(--muted); margin-bottom: -15px; }
#resultsCountRow b { color: var(--ink); }
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 24px;
}

/* ── Product card ── */
.card {
  border: 1px solid var(--hairline);
  padding: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: border-color .15s;
}
.card:hover { border-color: var(--accent); }
.card .swatch {
  background: var(--paper-grey);
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--label-grey);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.5px;
}
.card .body { padding: 12px 14px 14px; }
.card .segment {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--accent);
  font-weight: 700;
  margin-bottom: 4px;
}
.card .name { font-size: 15px; font-weight: 700; margin-bottom: 2px; }
.card .subtitle { font-size: 12px; color: var(--muted); margin-bottom: 8px; min-height: 32px; }
.card .meta-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: var(--label-grey);
  border-top: 1px solid var(--hairline);
  padding-top: 8px;
}
.card .certs { display: flex; gap: 6px; align-items: center; }
.card .certs .dot { width: 9px; height: 9px; background: var(--cert-off); display: inline-block; }
.card .certs .dot.on { background: var(--cert-on); }
.card .certs .cert-label { font-size: 9px; color: var(--label-grey); }
.empty-state { padding: 60px 0; text-align: center; color: var(--muted); font-size: 13px; }

/* ── Modal ── */
.modal-overlay {
  display: none;
  position: fixed; inset: 0;
  background: rgba(26,26,26,.5);
  z-index: 1200;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 16px;
  overflow-y: auto;
}
.modal-overlay.open { display: flex; }
.modal {
  background: var(--paper);
  max-width: 760px;
  width: 100%;
  border: 1px solid var(--hairline);
}
.modal-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px 28px 16px;
  border-bottom: 1px solid var(--hairline);
}
.modal-head .segment { font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px; color: var(--accent); font-weight: 700; margin-bottom: 4px; }
.modal-head h2 { margin: 0 0 2px; font-size: 22px; font-weight: 400; }
.modal-head .subtitle { color: var(--muted); font-size: 13px; }
.modal-head-actions { display: flex; flex-direction: column; align-items: flex-end; gap: 10px; }
.modal-product-btn {
  font-size: 13px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase;
  padding: 7px 14px; background: var(--accent); color: #fff; text-decoration: none;
  white-space: nowrap; display: inline-flex; align-items: center; cursor: pointer;
  font-family: var(--font); border: none;
}
.modal-product-btn:hover { background: var(--accent-deep); }
.modal-close {
  font-family: var(--font);
  background: none; border: none; cursor: pointer;
  font-size: 20px; color: var(--muted); line-height: 1;
  padding: 2px 4px;
}
.modal-body { padding: 20px 28px 28px; }
.modal-section { margin-bottom: 22px; }
.modal-section h3 {
  font-size: 11px; text-transform: uppercase; letter-spacing: 0.6px;
  color: var(--label-grey); font-weight: 700; margin: 0 0 10px;
}
.badges { display: flex; gap: 8px; flex-wrap: wrap; }
.badge { border: 1px solid var(--hairline); padding: 5px 10px; font-size: 11px; color: var(--ink); }
.bullets { margin: 0; padding-left: 18px; }
.bullets li { margin-bottom: 6px; font-size: 13px; }
.tagchips { display: flex; flex-wrap: wrap; gap: 6px; }
.tagchip { font-size: 11px; padding: 5px 10px; border: 1px solid var(--hairline); color: var(--muted); }
table.spec { width: 100%; border-collapse: collapse; font-size: 11.5px; }
table.spec th {
  text-align: right; font-weight: 700; color: var(--label-grey);
  border-bottom: 1px solid var(--ink); padding: 6px 8px; white-space: nowrap;
}
table.spec th:first-child, table.spec td:first-child { text-align: left; }
table.spec td { text-align: right; padding: 6px 8px; border-bottom: 1px solid var(--hairline); white-space: nowrap; }
.modal-footnote {
  font-size: 11px; color: var(--label-grey);
  border-top: 1px solid var(--hairline); padding-top: 12px; margin-top: 4px;
}
```

---

## 18. Responsive Breakpoints

```css
/* ≤ 1024px: collapse from 4 to 3 result columns */
@media (max-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}

/* ≤ 820px: stack sidebar above results; spread facet groups into columns */
@media (max-width: 820px) {
  .layout { flex-direction: column; }
  .sidebar { width: 100%; flex: none; position: static; max-height: none; }
  .facet-cols { column-count: 3; column-gap: 28px; }
  .facet-cols .facet { break-inside: avoid-column; -webkit-column-break-inside: avoid; }
  #facetTags { grid-template-columns: 1fr 1fr 1fr; }
}

/* ≤ 560px: 2-column facets; 2-column results grid */
@media (max-width: 560px) {
  .facet-cols { column-count: 2; }
  #facetTags  { grid-template-columns: 1fr 1fr; }
  .grid       { grid-template-columns: repeat(2, 1fr); }
}
```

---

## 19. Button & Interaction Reference

| Element | Class / Selector | Action | State Change |
|---|---|---|---|
| Search input | `.searchrow input` | Type to filter | Updates `q` state |
| Search clear | `.searchrow .clearbtn` | Clear text search | `setQ('')` |
| Facet option | `.facet-opt` | Toggle filter | `toggleInSet(s, value)` on relevant Set |
| Reset (any) | `.facet-head button` | Clear all filters | `resetAll()` |
| Size dropdown trigger | `.cs-trigger` | Open/close panel | `setOpen(o => !o)` |
| Size dropdown option | `.cs-option` | Select a value | `onChange(value); setOpen(false)` |
| Size dropdown — clear option | First `.cs-option` | Clear selection | `onChange(''); setOpen(false)` |
| Product card | `.card` | Open detail modal | `setActiveItem(item)` |
| Modal close button | `.modal-close` | Close modal | `setActiveItem(null)` |
| Modal overlay | `.modal-overlay` | Click-outside to close | `setActiveItem(null)` if `e.target === e.currentTarget` |
| Escape key | document | Close modal or dropdown | `setActiveItem(null)` / `setOpen(false)` |
| Modal CTA | `.modal-product-btn` | Navigate to detail page | React Router `<Link to="...">` |

---

## 20. Utility Functions

```js
// De-duplicate and alphabetically sort an array of strings.
function uniqueSorted(arr) {
  return Array.from(new Set(arr)).sort();
}

// Tokenise a size string (e.g. "295/75R22.5") into ["295", "75", "22.5"].
// Splits on "/" and "R" (case-insensitive), strips whitespace.
function sizeTokens(sizeStr) {
  return sizeStr.toLowerCase().replace(/\s/g, '').split(/[/r]/i).filter(Boolean);
}

// Sort a Set or array numerically (for size dimension dropdowns).
function numSortedArray(set) {
  return Array.from(set).sort((a, b) => parseFloat(a) - parseFloat(b));
}
```

---

## 21. Porting Checklist

- [ ] Install React, React Router, React DOM (peer deps)
- [ ] Copy the three utility functions (`uniqueSorted`, `sizeTokens`, `numSortedArray`)
- [ ] Create `productsData.js` with your `PRODUCTS` array matching the shape in §2
- [ ] Rename field names in constants (§3), filter state (§4), filter logic (§5), and card JSX (§13) to match your data shape
- [ ] Update `SERIES` and `CERTS` hard-coded arrays to your tier/certification labels
- [ ] Update cert filter logic in §5 to match your cert flag field names
- [ ] Replace `--accent`, `--accent-deep`, `--surface-hover`, `--cert-on` tokens in §16
- [ ] Replace `--font` token with your typeface
- [ ] Replace the `<Link to="...">` in the modal CTA with your product detail route
- [ ] If you have product images, replace `.swatch` placeholder divs with `<img>` tags
- [ ] If spec table columns differ, update `<thead>` labels and `<td>` field references in §14
- [ ] Remove `warrantyNote` / `retreadNote` from modal footnote if not applicable
- [ ] Wire `<ShortHeader />` to your own nav component (or remove it)
- [ ] If not using `usePageStyle` hook, import the CSS normally
- [ ] Test cascading size dropdowns with your size string format; update `sizeTokens()` regex if needed
