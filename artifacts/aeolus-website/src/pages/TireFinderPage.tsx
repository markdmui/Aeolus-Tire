import { useState, useEffect, useCallback, useRef, useMemo, useId } from "react";
import type { Dispatch, SetStateAction } from "react";
import { Link } from "wouter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TIRES, TireData } from "../data/tires";
import { usePageMeta } from "../lib/seo";
import "./TireFinderPage.css";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

// One-line rollback switch: flip to false to bring back the three separate
// Width/Ratio/Rim dropdowns if the combined size picker doesn't land well.
const USE_COMBINED_SIZE_PICKER = true;

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
// Tires whose wireframe block has no position yet contribute no facet —
// otherwise the list renders a blank, unlabelled checkbox.
const POSITIONS  = Array.from(new Set(FINDER_TIRES.map(t => t.pos).filter(Boolean))).sort();
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

// Display-only shorthand for filter buttons whose full tag text wraps to two
// lines. The underlying tag string — used for matching, and everywhere else
// it appears — stays unabbreviated.
const TAG_DISPLAY_OVERRIDES: Record<string, string> = {
  "Low Rolling Resistance": "Low Roll. Resist.",
};

// Tread depth (32nds) drops a trailing ".0" for whole numbers but keeps one
// decimal place otherwise (23.4, 18.7).
function formatTd32(v: string): string {
  const n = parseFloat(v);
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}

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

// ── URL <-> filter state ─────────────────────────────────────────────────────
// Filters live in the query string so a filtered view can be bookmarked or sent
// to a dealer. Written with replaceState, so Back leaves the page rather than
// unwinding one checkbox at a time.

const SET_PARAMS: [keyof FilterState, string][] = [
  ["series", "series"], ["segment", "cat"], ["pos", "pos"],
  ["cert", "cert"], ["tags", "tag"],
];
const STR_PARAMS: [keyof FilterState, string][] = [
  ["sizeWidth", "w"], ["sizeRatio", "r"], ["sizeRim", "rim"], ["q", "q"],
];

function filtersToSearch(fs: FilterState): string {
  const p = new URLSearchParams();
  for (const [key, param] of SET_PARAMS) {
    const set = fs[key] as Set<string>;
    if (set.size) p.set(param, Array.from(set).join("~"));
  }
  for (const [key, param] of STR_PARAMS) {
    const v = fs[key] as string;
    if (v) p.set(param, v);
  }
  const s = p.toString();
  return s ? "?" + s : "";
}

function filtersFromSearch(search: string): FilterState {
  const p = new URLSearchParams(search);
  const fs = emptyFilters();
  for (const [key, param] of SET_PARAMS) {
    const raw = p.get(param);
    if (raw) (fs[key] as Set<string>) = new Set(raw.split("~").filter(Boolean));
  }
  for (const [key, param] of STR_PARAMS) {
    (fs[key] as string) = p.get(param) ?? "";
  }
  return fs;
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
      // Comma-separated terms are OR'd together — "c52, l58" merges two
      // separate lookups into one result set. A query with no comma is a
      // single-term array, so plain single-word search is unaffected.
      const terms = fs.q.split(",").map(t => t.trim().toLowerCase()).filter(Boolean);
      const matchesTerm = (q: string) => {
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
        return nameMatch || subMatch || tagMatch || segMatch || posMatch || sizeMatch;
      };
      if (terms.length > 0 && !terms.some(matchesTerm)) return false;
    }
    return true;
  }).sort((a, b) => a.name.localeCompare(b.name));
}

// ── Sub-components ───────────────────────────────────────────────────────────

/** One filter option. A real checkbox so it is focusable and announced. */
function FacetOption({
  value, checked, onToggle, hideBox,
}: {
  value: string; checked: boolean; onToggle: (v: string) => void; hideBox?: boolean;
}) {
  return (
    <label className={`tf-facet-opt${checked ? " tf-checked" : ""}`}>
      <input
        type="checkbox"
        className="tf-facet-input"
        checked={checked}
        onChange={() => onToggle(value)}
      />
      {!hideBox && <span className="tf-box" aria-hidden="true" />}
      <span className="tf-tag-text">{TAG_DISPLAY_OVERRIDES[value] ?? value}</span>
    </label>
  );
}

function FacetGroup({
  label, values, selected, onToggle, twoCol, isTags, onReset,
}: {
  label: string; values: string[]; selected: Set<string>;
  onToggle: (v: string) => void; twoCol?: boolean; isTags?: boolean; onReset?: () => void;
}) {
  return (
    <fieldset className="tf-facet">
      <div className="tf-facet-head">
        <legend className="tf-label">{label}</legend>
        {onReset && <button type="button" onClick={onReset}>Reset</button>}
      </div>
      <div className={isTags ? "tf-facet-tags" : twoCol ? "tf-facet-2col" : undefined}>
        {values.map(v => (
          <FacetOption
            key={v}
            value={v}
            checked={selected.has(v)}
            onToggle={onToggle}
            hideBox={isTags}
          />
        ))}
      </div>
    </fieldset>
  );
}

function SizeSelect({
  placeholder, options, value, onChange,
}: {
  placeholder: string; options: string[]; value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  // "" (the clear option) sits at index 0, so the option list is offset by one.
  const items = ["", ...options];

  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      const target = e.target as Element;
      if (!ref.current || ref.current.contains(target)) return;
      // A sibling Width/Ratio/Rim select manages its own open state — clicking
      // it shouldn't force this one closed. Only a true click-off does that.
      if (target.closest?.(".tf-cs")) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  useEffect(() => {
    if (open) setActive(Math.max(0, items.indexOf(value)));
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  function commit(v: string) {
    onChange(v);
    triggerRef.current?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive(i => Math.min(i + 1, items.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(i => Math.max(i - 1, 0));
    } else if (e.key === "Home") {
      e.preventDefault(); setActive(0);
    } else if (e.key === "End") {
      e.preventDefault(); setActive(items.length - 1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      commit(items[active]);
    }
  }

  const hasVal = value !== "";

  return (
    <div className="tf-cs" ref={ref} onKeyDown={onKeyDown}>
      <button
        ref={triggerRef}
        className={`tf-cs-trigger${open ? " tf-open" : ""}${hasVal ? " tf-has-value" : ""}`}
        onClick={() => setOpen(o => !o)}
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-haspopup="listbox"
        aria-label={`${placeholder}${hasVal ? `: ${value}` : ""}`}
      >
        <span>{hasVal ? value : placeholder}</span>
        <svg className="tf-cs-caret" viewBox="0 0 9 9" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <polyline points="1,3 4.5,6.5 8,3" />
        </svg>
      </button>
      {open && (
        <div className="tf-cs-panel" id={listId} role="listbox" aria-label={placeholder}>
          {items.map((opt, i) => (
            <div
              key={opt || "__any"}
              role="option"
              aria-selected={opt === value}
              className={`tf-cs-option${opt === value ? " tf-selected" : ""}${i === active ? " tf-active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onClick={() => commit(opt)}
            >
              {opt || placeholder}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SizeComboColumn({
  label, options, value, onToggle,
}: {
  label: string; options: string[]; value: string; onToggle: (v: string) => void;
}) {
  return (
    <div className="tf-size-combo-col">
      <div className="tf-size-combo-collabel">{label}</div>
      <div className="tf-size-combo-list" role="listbox" aria-label={label}>
        {options.map(v => (
          <div
            key={v}
            role="option"
            tabIndex={0}
            aria-selected={v === value}
            className={`tf-size-combo-opt${v === value ? " tf-selected" : ""}`}
            onClick={() => onToggle(v)}
            onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onToggle(v); } }}
          >
            {v}
          </div>
        ))}
      </div>
    </div>
  );
}

function SizeComboPicker({
  adjFs, availWidths, availRatios, availRims, setFs, resetSize,
}: {
  adjFs: FilterState;
  availWidths: string[]; availRatios: string[]; availRims: string[];
  setFs: Dispatch<SetStateAction<FilterState>>;
  resetSize: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") { setOpen(false); triggerRef.current?.focus(); }
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Lock body scroll while the panel is open, same as the spec modal.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const matchCount = ALL_SIZE_COMBOS.filter(c =>
    (!adjFs.sizeWidth || c.width === adjFs.sizeWidth) &&
    (!adjFs.sizeRatio || c.ratio === adjFs.sizeRatio) &&
    (!adjFs.sizeRim   || c.rim   === adjFs.sizeRim)
  ).length;

  const slots = [adjFs.sizeWidth, adjFs.sizeRatio, adjFs.sizeRim];
  const hasVal = slots.some(Boolean);
  const ariaLabel = hasVal
    ? `Tire size: Width ${adjFs.sizeWidth || "unset"}, Ratio ${adjFs.sizeRatio || "unset"}, Rim ${adjFs.sizeRim || "unset"}`
    : "Tire size";

  function toggle(dim: "sizeWidth" | "sizeRatio" | "sizeRim", v: string) {
    setFs(p => ({ ...p, [dim]: p[dim] === v ? "" : v }));
  }

  return (
    <div className="tf-size-combo" ref={ref}>
      <button
        ref={triggerRef}
        type="button"
        className={`tf-size-combo-trigger${open ? " tf-open" : ""}${hasVal ? " tf-has-value" : ""}`}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={ariaLabel}
      >
        <span>
          {hasVal ? (
            slots.map((v, i) => (
              <span key={i}>
                {i > 0 && " / "}
                {v || <span className="tf-size-combo-label-empty" aria-hidden="true">—</span>}
              </span>
            ))
          ) : "Tire size"}
        </span>
        <svg className="tf-cs-caret" viewBox="0 0 9 9" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <polyline points="1,3 4.5,6.5 8,3" />
        </svg>
      </button>
      {open && (
        <div className="tf-size-combo-panel">
          <div className="tf-size-combo-cols">
            <SizeComboColumn label="Width" options={availWidths} value={adjFs.sizeWidth} onToggle={v => toggle("sizeWidth", v)} />
            <SizeComboColumn label="Ratio" options={availRatios} value={adjFs.sizeRatio} onToggle={v => toggle("sizeRatio", v)} />
            <SizeComboColumn label="Rim"   options={availRims}   value={adjFs.sizeRim}   onToggle={v => toggle("sizeRim", v)} />
          </div>
          <div className="tf-size-combo-footer">
            <span className="tf-size-combo-count">{matchCount} {matchCount === 1 ? "size" : "sizes"}</span>
            <div className="tf-size-combo-actions">
              <button type="button" className="tf-size-combo-reset" onClick={resetSize}>Reset</button>
              <span className="tf-size-combo-divider" aria-hidden="true" />
              <button type="button" onClick={() => setOpen(false)}>Done</button>
            </div>
          </div>
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
    <button type="button" className="tf-card" onClick={onClick}
            aria-label={`${tire.name} — view size and spec chart`}>
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
    </button>
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

  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  // Move focus in on open, hand it back to whatever opened the modal on close.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    return () => opener?.focus?.();
  }, []);

  // Keep Tab inside the dialog.
  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key !== "Tab" || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  }

  // close on overlay click
  function onOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div className="tf-modal-overlay tf-open" onClick={onOverlayClick}>
      <div
        className="tf-modal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onKeyDown={onKeyDown}
      >
        {/* Head */}
        <div className="tf-modal-head">
          <div>
            <div className="tf-seg-line">{tire.finderSegment} · {tire.pos}</div>
            <h2 id={titleId}>{tire.name}</h2>
            <div className="tf-modal-subtitle">{tire.subtitle}</div>
          </div>
          <div className="tf-modal-head-actions">
            <button ref={closeRef} className="tf-modal-close" onClick={onClose} aria-label="Close">×</button>
            <Link href={`/tires/${tire.slug}`} className="tf-modal-product-btn">
              View Product Page
            </Link>
          </div>
        </div>

        {/* Body */}
        <div className="tf-modal-body">
          {(tire.bullets.length > 0 || tire.tags.length > 0 || badges.length > 0 || tire.tireImage) && (
            <div className="tf-modal-section tf-modal-features-row">
              <div className="tf-modal-features-col">
                {tire.bullets.length > 0 && (
                  <>
                    <h3>Key Features</h3>
                    <ul className="tf-bullets">
                      {tire.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </>
                )}

                {(tire.tags.length > 0 || badges.length > 0) && (
                  <div className="tf-modal-tags-certs-row">
                    {tire.tags.length > 0 && (
                      <div>
                        <h3>Tags</h3>
                        <div className="tf-tagchips">
                          {tire.tags.map(tag => <span key={tag} className="tf-tagchip">{tag}</span>)}
                        </div>
                      </div>
                    )}
                    {badges.length > 0 && (
                      <div>
                        <h3>Certifications</h3>
                        <div className="tf-badges">
                          {badges.map(b => <span key={b} className="tf-badge">{b}</span>)}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="tf-modal-image-col">
                <img
                  src={`${BASE}${tire.tireImage}`}
                  alt={tire.name}
                  onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
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
                        <td>{s.td32 ? formatTd32(s.td32) : D}</td>
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
  usePageMeta({
    title: "Tire Finder",
    description:
      "Find the right Aeolus truck tire by size, position, and application. Search the full TBR and OTR lineup by width, ratio, and rim.",
  });

  const [fs, setFs] = useState<FilterState>(() =>
    filtersFromSearch(typeof window === "undefined" ? "" : window.location.search));
  const [modalTire, setModalTire] = useState<FinderTire | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Mirror filters into the query string so the view is shareable.
  useEffect(() => {
    const search = filtersToSearch(fs);
    if (search !== window.location.search) {
      window.history.replaceState(null, "", window.location.pathname + search);
    }
  }, [fs]);

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

  const results = useMemo(
    () => filteredTires(adjFs),
    [adjFs.segment, adjFs.pos, adjFs.series, adjFs.cert, adjFs.tags,
     adjFs.sizeWidth, adjFs.sizeRatio, adjFs.sizeRim, adjFs.q]
  );
  const total = FINDER_TIRES.length;

  const activeCount =
    fs.segment.size + fs.pos.size + fs.series.size + fs.cert.size + fs.tags.size +
    (fs.sizeWidth ? 1 : 0) + (fs.sizeRatio ? 1 : 0) + (fs.sizeRim ? 1 : 0);

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
          <span className="tf-searchicon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="6.5" cy="6.5" r="5" />
              <line x1="10.5" y1="10.5" x2="14" y2="14" />
            </svg>
          </span>
          <label className="tf-visually-hidden" htmlFor="searchInput">
            Search tires by name, size or feature
          </label>
          <input
            id="searchInput"
            type="text"
            placeholder="Search by name, size or feature…"
            autoComplete="off"
            value={fs.q}
            onChange={e => setFs(p => ({ ...p, q: e.target.value }))}
          />
          <button type="button" className="tf-clearbtn" aria-label="Clear all filters"
                  onClick={resetAll}>Clear</button>
        </div>
      </div>

      {/* Mobile-only filter toggle — the sidebar is ~1.5 screens tall on a phone. */}
      <button
        type="button"
        className="tf-filter-toggle"
        aria-expanded={filtersOpen}
        aria-controls="tf-sidebar"
        onClick={() => setFiltersOpen(o => !o)}
      >
        {filtersOpen ? "Hide filters" : "Filters"}
        {activeCount > 0 && <span className="tf-filter-count">{activeCount}</span>}
      </button>

      {/* Layout */}
      <div className="tf-layout">

        {/* ── Sidebar ── */}
        <aside
          className={`tf-sidebar${filtersOpen ? " tf-sidebar-open" : ""}`}
          id="tf-sidebar"
          aria-label="Tire filters"
        >

          <fieldset className="tf-facet">
            <div className="tf-facet-head">
              <legend className="tf-label">Series</legend>
              <button type="button" onClick={resetAll}>Reset</button>
            </div>
            <div className="tf-facet-2col">
              {SERIES_OPTS.map(v => (
                <FacetOption key={v} value={v} checked={fs.series.has(v)}
                             onToggle={x => toggleSet("series", x)} />
              ))}
            </div>
          </fieldset>

          <div className="tf-facet tf-facet-pair">
            <fieldset className="tf-facet-col">
              <div className="tf-facet-head"><legend className="tf-label">Category</legend></div>
              {ACTIVE_SEGS.map(v => (
                <FacetOption key={v} value={v} checked={fs.segment.has(v)}
                             onToggle={x => toggleSet("segment", x)} />
              ))}
            </fieldset>
            <fieldset className="tf-facet-col">
              <div className="tf-facet-head"><legend className="tf-label">Position</legend></div>
              {POSITIONS.map(v => (
                <FacetOption key={v} value={v} checked={fs.pos.has(v)}
                             onToggle={x => toggleSet("pos", x)} />
              ))}
            </fieldset>
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
            <span aria-live="polite">Showing <b>{results.length}</b> of {total} tires</span>
            <div className="tf-size-inline-row">
              {USE_COMBINED_SIZE_PICKER ? (
                <SizeComboPicker
                  adjFs={adjFs}
                  availWidths={availWidths}
                  availRatios={availRatios}
                  availRims={availRims}
                  setFs={setFs}
                  resetSize={resetSize}
                />
              ) : (
                <>
                  <span className="tf-size-inline-label" id="tf-size-label">SIZE</span>
                  <button type="button" className="tf-size-inline-reset" onClick={resetSize}>Reset</button>
                  <SizeSelect
                    placeholder="Width"
                    options={availWidths}
                    value={adjFs.sizeWidth}
                    onChange={v => setFs(p => ({ ...p, sizeWidth: v }))}
                  />
                  <SizeSelect
                    placeholder="Ratio"
                    options={availRatios}
                    value={adjFs.sizeRatio}
                    onChange={v => setFs(p => ({ ...p, sizeRatio: v }))}
                  />
                  <SizeSelect
                    placeholder="Rim"
                    options={availRims}
                    value={adjFs.sizeRim}
                    onChange={v => setFs(p => ({ ...p, sizeRim: v }))}
                  />
                </>
              )}
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
