import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "wouter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TIRES, TireData } from "../data/tires";
import "./TireFinderPage.css";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

// ── Adapter ─────────────────────────────────────────────────────────────────

interface FinderSize {
  size: string; ply: string; rimw: string; secw: string;
  diam: string; odMm: string; td32: string; tdMm: string;
  loadSlbs: string; loadSpsi: string; loadSkg: string; loadSkpa: string;
  loadDlbs: string; loadDpsi: string; loadDkg: string; loadDkpa: string;
  liss: string; smartway: boolean; ms: boolean; pmsf: boolean;
}

interface FinderTire {
  slug: string; name: string;
  finderSegment: string;  // "Long Haul" | "Regional" | "Construction" | "Winter" | "Urban" | …
  series: string;         // "Premium" | "Standard"
  pos: string;
  subtitle: string; bullets: string[]; tags: string[];
  sizes: FinderSize[]; tireImage: string;
}

function adaptTire(t: TireData): FinderTire | null {
  if (t.slug.startsWith("demo-")) return null;

  let series = "Standard";
  let finderSegment = t.segment;
  if (t.segment.startsWith("Premium")) {
    series = "Premium";
    finderSegment = t.segment.replace("Premium ", "");
  } else if (t.segment.startsWith("Standard")) {
    series = "Standard";
    finderSegment = t.segment.replace("Standard ", "");
  }
  finderSegment = finderSegment
    .replace("On/Off Road", "Construction")
    .replace("On/Off", "Construction")
    .replace("Off Road", "Construction")
    .trim() || "Other";

  return {
    slug: t.slug, name: t.name,
    finderSegment, series,
    pos: t.position,
    subtitle: t.subtitle,
    bullets: t.bullets,
    tags: t.tags ?? [],
    sizes: t.specRows.map(r => ({
      size: r.size, ply: r.ply, rimw: r.rimW, secw: r.secW,
      diam: r.odIn, odMm: r.odMm, td32: r.td32, tdMm: r.tdMm,
      loadSlbs: r.mlSlbs, loadSpsi: r.mlSpsi, loadSkg: r.mlSkg, loadSkpa: r.mlSkpa,
      loadDlbs: r.mlDlbs, loadDpsi: r.mlDpsi, loadDkg: r.mlDkg, loadDkpa: r.mlDkpa,
      liss: r.liss, smartway: r.smartway, ms: r.ms, pmsf: r["3PMSF"],
    })),
    tireImage: t.tireImage,
  };
}

const FINDER_TIRES: FinderTire[] = TIRES.flatMap(t => {
  const ft = adaptTire(t);
  return ft ? [ft] : [];
});

// ── Derived constants ────────────────────────────────────────────────────────

const SEGMENTS   = ["Long Haul", "Regional", "Construction", "Winter", "Urban", "Other"];
const ACTIVE_SEGS = Array.from(new Set(FINDER_TIRES.map(t => t.finderSegment)))
  .sort((a, b) => SEGMENTS.indexOf(a) - SEGMENTS.indexOf(b));
const POSITIONS  = Array.from(new Set(FINDER_TIRES.map(t => t.pos))).sort();
const SERIES_OPTS = ["Premium", "Standard"];

const CERTS = [
  { key: "M+S Rated",          check: (t: FinderTire) => t.sizes.some(s => s.ms) },
  { key: "3PMSF Severe Snow",  check: (t: FinderTire) => t.sizes.some(s => s.pmsf) },
  { key: "SmartWay Verified",  check: (t: FinderTire) => t.sizes.some(s => s.smartway) },
];

const EXCLUDE_TAGS = new Set([
  ...SEGMENTS, ...SERIES_OPTS, "M+S", "3PMSF", "SmartWay", "ML",
  "Long Haul", "Regional", "Construction", "Winter", "Urban",
]);
const FEATURE_TAGS = Array.from(
  new Set(FINDER_TIRES.flatMap(t => t.tags).filter(tag => !EXCLUDE_TAGS.has(tag)))
).sort();

// ── Size cascade helpers ─────────────────────────────────────────────────────

interface SizeCombo { width: string; ratio: string; rim: string; }

function sizeTokens(s: string): string[] {
  return s.toLowerCase().replace(/\s/g, "").split(/[\/r]/i).filter(Boolean);
}

function numSort(arr: string[]): string[] {
  return [...arr].sort((a, b) => parseFloat(a) - parseFloat(b));
}

const ALL_SIZE_COMBOS: SizeCombo[] = (() => {
  const all = Array.from(new Set(FINDER_TIRES.flatMap(t => t.sizes.map(s => s.size)))).sort();
  return all.flatMap(sz => {
    const toks = sizeTokens(sz);
    if (toks.length === 3) return [{ width: toks[0], ratio: toks[1], rim: toks[2] }];
    if (toks.length === 2) return [{ width: toks[0], ratio: "",       rim: toks[1] }];
    return [];
  });
})();

function sizeOptionsFor(
  dim: "width" | "ratio" | "rim",
  sel: { width: string; ratio: string; rim: string }
): string[] {
  const matches = ALL_SIZE_COMBOS.filter(c => {
    if (dim !== "width" && sel.width && c.width !== sel.width) return false;
    if (dim !== "ratio" && sel.ratio && c.ratio !== sel.ratio) return false;
    if (dim !== "rim"   && sel.rim   && c.rim   !== sel.rim)   return false;
    return true;
  });
  const set = new Set<string>();
  matches.forEach(c => { if (c[dim]) set.add(c[dim]); });
  return numSort(Array.from(set));
}

// ── State types ──────────────────────────────────────────────────────────────

interface FilterState {
  segment: Set<string>; pos: Set<string>; series: Set<string>; cert: Set<string>; tags: Set<string>;
  sizeWidth: string; sizeRatio: string; sizeRim: string; q: string;
}

function emptyFilters(): FilterState {
  return {
    segment: new Set(), pos: new Set(), series: new Set(), cert: new Set(), tags: new Set(),
    sizeWidth: "", sizeRatio: "", sizeRim: "", q: "",
  };
}

// ── Filter logic ─────────────────────────────────────────────────────────────

function filteredTires(fs: FilterState): FinderTire[] {
  return FINDER_TIRES.filter(item => {
    if (fs.segment.size && !fs.segment.has(item.finderSegment)) return false;
    if (fs.pos.size     && !fs.pos.has(item.pos))               return false;
    if (fs.series.size  && !fs.series.has(item.series))         return false;
    if (fs.cert.size) {
      for (const c of fs.cert) {
        const certObj = CERTS.find(o => o.key === c);
        if (certObj && !certObj.check(item)) return false;
      }
    }
    if (fs.tags.size) {
      for (const tag of fs.tags) { if (!item.tags.includes(tag)) return false; }
    }
    if (fs.sizeWidth || fs.sizeRatio || fs.sizeRim) {
      const need = [fs.sizeWidth, fs.sizeRatio, fs.sizeRim].filter(Boolean);
      const ok = item.sizes.some(s => {
        const toks = sizeTokens(s.size);
        return need.every(n => toks.includes(n));
      });
      if (!ok) return false;
    }
    if (fs.q) {
      const q = fs.q.toLowerCase();
      const qToks = q.replace(/\s/g, "").split(/[\/r]/i).filter(Boolean);
      const nameMatch  = item.name.toLowerCase().includes(q);
      const subMatch   = item.subtitle.toLowerCase().includes(q);
      const tagMatch   = item.tags.some(t => t.toLowerCase().includes(q));
      const segMatch   = item.finderSegment.toLowerCase().includes(q);
      const posMatch   = item.pos.toLowerCase().includes(q);
      const sizeMatch  = qToks.length > 0 && item.sizes.some(s => {
        const sToks = sizeTokens(s.size);
        return qToks.every(qt => sToks.includes(qt));
      });
      if (!nameMatch && !subMatch && !tagMatch && !segMatch && !posMatch && !sizeMatch) return false;
    }
    return true;
  }).sort((a, b) => a.name.localeCompare(b.name));
}

// ── Sub-components ───────────────────────────────────────────────────────────

function FacetGroup({
  label, values, selected, onToggle, twoCol, isTags, onReset,
}: {
  label: string; values: string[]; selected: Set<string>;
  onToggle: (v: string) => void; twoCol?: boolean; isTags?: boolean; onReset?: () => void;
}) {
  return (
    <div className="tf-facet">
      <div className="tf-facet-head">
        <span className="tf-label">{label}</span>
        {onReset && <button onClick={onReset}>Reset</button>}
      </div>
      <div className={isTags ? "tf-facet-tags" : twoCol ? "tf-facet-2col" : undefined}>
        {values.map(v => (
          <div
            key={v}
            className={`tf-facet-opt${selected.has(v) ? " tf-checked" : ""}`}
            onClick={() => onToggle(v)}
          >
            {!isTags && <span className="tf-box" />}
            <span className="tf-tag-text">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SizeSelect({
  id, placeholder, options, value, onChange,
}: {
  id: string; placeholder: string; options: string[]; value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const hasVal = value !== "";

  return (
    <div className="tf-cs" ref={ref}>
      <button
        className={`tf-cs-trigger${open ? " tf-open" : ""}${hasVal ? " tf-has-value" : ""}`}
        onClick={() => setOpen(o => !o)}
        type="button"
      >
        <span>{hasVal ? value : placeholder}</span>
        <svg className="tf-cs-caret" viewBox="0 0 9 9" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="1,3 4.5,6.5 8,3" />
        </svg>
      </button>
      {open && (
        <div className="tf-cs-panel">
          <div
            className={`tf-cs-option${value === "" ? " tf-selected" : ""}`}
            onClick={() => { onChange(""); setOpen(false); }}
          >
            {placeholder}
          </div>
          {options.map(opt => (
            <div
              key={opt}
              className={`tf-cs-option${opt === value ? " tf-selected" : ""}`}
              onClick={() => { onChange(opt); setOpen(false); }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TireCard({ tire, onClick }: { tire: FinderTire; onClick: () => void }) {
  const hasMS   = tire.sizes.some(s => s.ms);
  const hasPMSF = tire.sizes.some(s => s.pmsf);
  const hasSW   = tire.sizes.some(s => s.smartway);
  const n       = tire.sizes.length;

  return (
    <div className="tf-card" onClick={onClick}>
      <div className="tf-swatch">
        <img
          src={`${BASE}${tire.tireImage}`}
          alt={tire.name}
          onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
      </div>
      <div className="tf-card-body">
        <div className="tf-seg-line">{tire.finderSegment} · {tire.pos}</div>
        <div className="tf-card-name">{tire.name}</div>
        <div className="tf-card-subtitle">{tire.subtitle}</div>
        <div className="tf-meta-row">
          <span>{n ? `${n} size${n !== 1 ? "s" : ""}` : "Spec pending"}</span>
          <span className="tf-certs">
            {hasMS   && <span className="tf-cert-label">M+S</span>}
            {hasPMSF && <span className="tf-cert-label">3PMSF</span>}
            {hasSW   && <span className="tf-cert-label">SW</span>}
          </span>
        </div>
      </div>
    </div>
  );
}

function SpecModal({ tire, onClose }: { tire: FinderTire; onClose: () => void }) {
  const badges: string[] = [];
  if (tire.sizes.some(s => s.ms))       badges.push("M+S Rated");
  if (tire.sizes.some(s => s.pmsf))     badges.push("3PMSF Severe Snow");
  if (tire.sizes.some(s => s.smartway)) badges.push("SmartWay Verified");

  const showSW   = tire.sizes.some(s => s.smartway);
  const showMS   = tire.sizes.some(s => s.ms);
  const showPMSF = tire.sizes.some(s => s.pmsf);
  const D = "—";

  // close on overlay click
  function onOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div className="tf-modal-overlay tf-open" onClick={onOverlayClick}>
      <div className="tf-modal">
        {/* Head */}
        <div className="tf-modal-head">
          <div>
            <div className="tf-seg-line">{tire.finderSegment} · {tire.pos}</div>
            <h2>{tire.name}</h2>
            <div className="tf-modal-subtitle">{tire.subtitle}</div>
          </div>
          <div className="tf-modal-head-actions">
            <button className="tf-modal-close" onClick={onClose}>×</button>
            <Link href={`/tires/${tire.slug}`} className="tf-modal-product-btn">
              View Product Page
            </Link>
          </div>
        </div>

        {/* Body */}
        <div className="tf-modal-body">
          {badges.length > 0 && (
            <div className="tf-modal-section">
              <h3>Coverage &amp; Certifications</h3>
              <div className="tf-badges">
                {badges.map(b => <span key={b} className="tf-badge">{b}</span>)}
              </div>
            </div>
          )}

          {tire.bullets.length > 0 && (
            <div className="tf-modal-section">
              <h3>Key Features</h3>
              <ul className="tf-bullets">
                {tire.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          )}

          {tire.tags.length > 0 && (
            <div className="tf-modal-section">
              <h3>Tags</h3>
              <div className="tf-tagchips">
                {tire.tags.map(tag => <span key={tag} className="tf-tagchip">{tag}</span>)}
              </div>
            </div>
          )}

          <div className="tf-modal-section">
            <h3>Size &amp; Spec Chart</h3>
            {tire.sizes.length > 0 ? (
              <div className="tf-spectable-wrap">
                <table className="tf-spec">
                  <thead>
                    <tr>
                      <th rowSpan={2}>Size</th>
                      <th rowSpan={2}>Ply</th>
                      <th>Rim<br />Width</th>
                      <th>Section<br />Width</th>
                      <th colSpan={2}>Overall<br />Diameter</th>
                      <th colSpan={2}>Tread<br />Depth</th>
                      <th colSpan={4}>Max. Load<br />(Single)</th>
                      <th colSpan={4}>Max. Load<br />(Dual)</th>
                      <th rowSpan={2}>LI/SS</th>
                      {showSW   && <th rowSpan={2} style={{ textAlign: "center" }}>SmartWay</th>}
                      {showMS   && <th rowSpan={2} style={{ textAlign: "center" }}>M+S</th>}
                      {showPMSF && <th rowSpan={2} style={{ textAlign: "center" }}>3PMSF</th>}
                    </tr>
                    <tr>
                      <th className="tf-sub">in</th>
                      <th className="tf-sub">in</th>
                      <th className="tf-sub">in</th><th className="tf-sub">mm</th>
                      <th className="tf-sub">mm</th><th className="tf-sub">32nds</th>
                      <th className="tf-sub">lbs</th><th className="tf-sub">psi</th>
                      <th className="tf-sub">kg</th><th className="tf-sub">kPa</th>
                      <th className="tf-sub">lbs</th><th className="tf-sub">psi</th>
                      <th className="tf-sub">kg</th><th className="tf-sub">kPa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tire.sizes.map((s, i) => (
                      <tr key={i}>
                        <td>{s.size}</td>
                        <td>{s.ply || D}</td>
                        <td>{s.rimw ? parseFloat(s.rimw).toFixed(2) : D}</td>
                        <td>{s.secw ? parseFloat(s.secw).toFixed(1) : D}</td>
                        <td>{s.diam ? parseFloat(s.diam).toFixed(1) : D}</td>
                        <td>{s.odMm || D}</td>
                        <td>{s.tdMm || D}</td>
                        <td>{s.td32 ? parseFloat(s.td32).toFixed(1) : D}</td>
                        <td>{s.loadSlbs || D}</td>
                        <td>{s.loadSpsi || D}</td>
                        <td>{s.loadSkg  || D}</td>
                        <td>{s.loadSkpa || D}</td>
                        <td>{s.loadDlbs || D}</td>
                        <td>{s.loadDpsi || D}</td>
                        <td>{s.loadDkg  || D}</td>
                        <td>{s.loadDkpa || D}</td>
                        <td>{s.liss || D}</td>
                        {showSW   && <td style={{ textAlign: "center" }}>{s.smartway ? "✓" : D}</td>}
                        {showMS   && <td style={{ textAlign: "center" }}>{s.ms       ? "✓" : D}</td>}
                        {showPMSF && <td style={{ textAlign: "center" }}>{s.pmsf     ? "✓" : D}</td>}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="tf-pending-note">
                Spec chart pending — contact product engineering for current availability.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main page ────────────────────────────────────────────────────────────────

export default function TireFinderPage() {
  const [fs, setFs] = useState<FilterState>(emptyFilters);
  const [modalTire, setModalTire] = useState<FinderTire | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalTire ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalTire]);

  // Escape key closes modal
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") setModalTire(null); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleSet = useCallback((key: keyof FilterState, val: string) => {
    setFs(prev => {
      const s = new Set(prev[key] as Set<string>);
      s.has(val) ? s.delete(val) : s.add(val);
      return { ...prev, [key]: s };
    });
  }, []);

  const resetAll = useCallback(() => setFs(emptyFilters()), []);
  const resetSize = useCallback(() => setFs(p => ({ ...p, sizeWidth: "", sizeRatio: "", sizeRim: "" })), []);

  // Cascading size options — auto-clear stale values
  const availWidths = sizeOptionsFor("width", { width: "",          ratio: fs.sizeRatio, rim: fs.sizeRim });
  const availRatios = sizeOptionsFor("ratio", { width: fs.sizeWidth, ratio: "",          rim: fs.sizeRim });
  const availRims   = sizeOptionsFor("rim",   { width: fs.sizeWidth, ratio: fs.sizeRatio, rim: ""       });

  const adjFs = {
    ...fs,
    sizeWidth: availWidths.includes(fs.sizeWidth) ? fs.sizeWidth : "",
    sizeRatio: availRatios.includes(fs.sizeRatio) ? fs.sizeRatio : "",
    sizeRim:   availRims.includes(fs.sizeRim)     ? fs.sizeRim   : "",
  };

  const results = filteredTires(adjFs);
  const total   = FINDER_TIRES.length;

  return (
    <>
      <Navbar />
      <div className="tf-root">

      {/* Page head */}
      <div className="tf-pagehead">
        <h1 className="tf-headline">
          Find Your <span className="tf-accent">Tire</span>
        </h1>
        <div className="tf-searchrow">
          <span className="tf-searchicon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="6.5" cy="6.5" r="5" />
              <line x1="10.5" y1="10.5" x2="14" y2="14" />
            </svg>
          </span>
          <input
            id="searchInput"
            type="text"
            placeholder="Search by name, size or feature…"
            autoComplete="off"
            value={fs.q}
            onChange={e => setFs(p => ({ ...p, q: e.target.value }))}
          />
          {fs.q && (
            <button className="tf-clearbtn" onClick={() => setFs(p => ({ ...p, q: "" }))}>×</button>
          )}
        </div>
      </div>

      {/* Layout */}
      <div className="tf-layout">

        {/* ── Sidebar ── */}
        <aside className="tf-sidebar">

          <div className="tf-facet">
            <div className="tf-facet-head">
              <span className="tf-label">Series</span>
              <button onClick={resetAll}>Reset all</button>
            </div>
            <div className="tf-facet-2col">
              {SERIES_OPTS.map(v => (
                <div
                  key={v}
                  className={`tf-facet-opt${fs.series.has(v) ? " tf-checked" : ""}`}
                  onClick={() => toggleSet("series", v)}
                >
                  <span className="tf-box" /><span className="tf-tag-text">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="tf-facet tf-facet-pair">
            <div className="tf-facet-col">
              <div className="tf-facet-head"><span className="tf-label">Category</span></div>
              {ACTIVE_SEGS.map(v => (
                <div
                  key={v}
                  className={`tf-facet-opt${fs.segment.has(v) ? " tf-checked" : ""}`}
                  onClick={() => toggleSet("segment", v)}
                >
                  <span className="tf-box" /><span className="tf-tag-text">{v}</span>
                </div>
              ))}
            </div>
            <div className="tf-facet-col">
              <div className="tf-facet-head"><span className="tf-label">Position</span></div>
              {POSITIONS.map(v => (
                <div
                  key={v}
                  className={`tf-facet-opt${fs.pos.has(v) ? " tf-checked" : ""}`}
                  onClick={() => toggleSet("pos", v)}
                >
                  <span className="tf-box" /><span className="tf-tag-text">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <FacetGroup
            label="Certifications"
            values={CERTS.map(c => c.key)}
            selected={fs.cert}
            onToggle={v => toggleSet("cert", v)}
          />

          <FacetGroup
            label="Features"
            values={FEATURE_TAGS}
            selected={fs.tags}
            onToggle={v => toggleSet("tags", v)}
            isTags
            onReset={resetAll}
          />

        </aside>

        {/* ── Main ── */}
        <main className="tf-main">
          <div className="tf-results-count-row">
            <span>Showing <b>{results.length}</b> of {total} tires</span>
            <div className="tf-size-inline-row">
              <span className="tf-size-inline-label">SIZE</span>
              <button className="tf-size-inline-reset" onClick={resetSize}>Reset</button>
              <SizeSelect
                id="csWidth"
                placeholder="Width"
                options={availWidths}
                value={adjFs.sizeWidth}
                onChange={v => setFs(p => ({ ...p, sizeWidth: v }))}
              />
              <SizeSelect
                id="csRatio"
                placeholder="Ratio"
                options={availRatios}
                value={adjFs.sizeRatio}
                onChange={v => setFs(p => ({ ...p, sizeRatio: v }))}
              />
              <SizeSelect
                id="csRim"
                placeholder="Rim"
                options={availRims}
                value={adjFs.sizeRim}
                onChange={v => setFs(p => ({ ...p, sizeRim: v }))}
              />
            </div>
          </div>

          <div className="tf-grid">
            {results.length === 0 ? (
              <div className="tf-empty-state">No tires match these filters — try clearing some.</div>
            ) : (
              results.map(tire => (
                <TireCard key={tire.slug} tire={tire} onClick={() => setModalTire(tire)} />
              ))
            )}
          </div>
        </main>

      </div>

      {/* Modal */}
      {modalTire && (
        <SpecModal tire={modalTire} onClose={() => setModalTire(null)} />
      )}

      </div>
      <Footer />
    </>
  );
}
