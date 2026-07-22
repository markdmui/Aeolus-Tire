import { useState, useMemo, useRef } from "react";
import { Link } from "wouter";
import { MagnifyingGlass, X, FunnelSimple } from "@phosphor-icons/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FINDER_TIRES,
  SEGMENTS,
  POSITIONS,
  FEATURE_TAGS,
  SIZE_WIDTHS,
  SIZE_RATIOS,
  SIZE_RIMS,
  parseTireSize,
  type FinderTire,
} from "@/data/finderTires";

// ─── Types ────────────────────────────────────────────────────────────────────
type Mode = "application" | "size";
type SortKey = "name" | "series" | "sizes";

interface FilterState {
  search: string;
  segment: Set<string>;
  pos: Set<string>;
  series: Set<string>;
  cert: Set<string>;
  tags: Set<string>;
  sizeWidth: string;
  sizeRatio: string;
  sizeRim: string;
}

const CERT_KEY_MAP: Record<string, keyof FinderTire["sizes"][0]> = {
  "M+S": "ms",
  "3PMSF": "pmsf",
  SmartWay: "smartway",
};

function initFilter(): FilterState {
  return {
    search: "",
    segment: new Set(),
    pos: new Set(),
    series: new Set(),
    cert: new Set(),
    tags: new Set(),
    sizeWidth: "",
    sizeRatio: "",
    sizeRim: "",
  };
}

// ─── Filtering logic ──────────────────────────────────────────────────────────
function matchesSearch(t: FinderTire, q: string): boolean {
  if (!q) return true;
  const lq = q.toLowerCase().replace(/\s/g, "");
  return (
    t.name.toLowerCase().includes(q.toLowerCase()) ||
    t.subtitle.toLowerCase().includes(q.toLowerCase()) ||
    t.tags.some((tag) => tag.toLowerCase().includes(q.toLowerCase())) ||
    t.sizes.some((s) => s.size.toLowerCase().replace(/\s/g, "").includes(lq)) ||
    t.segment.toLowerCase().includes(q.toLowerCase()) ||
    t.pos.toLowerCase().includes(q.toLowerCase())
  );
}

function matchesSize(t: FinderTire, f: FilterState): boolean {
  if (!f.sizeWidth && !f.sizeRatio && !f.sizeRim) return true;
  return t.sizes.some((sz) => {
    const p = parseTireSize(sz.size);
    if (f.sizeWidth && p.width !== f.sizeWidth) return false;
    if (f.sizeRatio && p.ratio !== f.sizeRatio) return false;
    if (f.sizeRim && p.rim !== f.sizeRim) return false;
    return true;
  });
}

function applyFilters(tires: FinderTire[], f: FilterState, mode: Mode): FinderTire[] {
  return tires.filter((t) => {
    if (!matchesSearch(t, f.search)) return false;
    if (mode === "size" && !matchesSize(t, f)) return false;
    if (f.segment.size && !f.segment.has(t.segment)) return false;
    if (f.pos.size && !f.pos.has(t.pos)) return false;
    if (f.series.size && !f.series.has(t.series)) return false;
    if (f.cert.size) {
      for (const c of f.cert) {
        const key = CERT_KEY_MAP[c];
        if (!t.sizes.some((s) => s[key])) return false;
      }
    }
    if (f.tags.size) {
      for (const tag of f.tags) {
        if (!t.tags.includes(tag)) return false;
      }
    }
    return true;
  });
}

function sortTires(list: FinderTire[], sort: SortKey): FinderTire[] {
  const arr = [...list];
  if (sort === "name") arr.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "series")
    arr.sort((a, b) =>
      a.series === b.series
        ? a.name.localeCompare(b.name)
        : a.series === "Premium"
        ? -1
        : 1
    );
  if (sort === "sizes")
    arr.sort((a, b) => b.sizes.length - a.sizes.length || a.name.localeCompare(b.name));
  return arr;
}

function sizeRange(t: FinderTire): string | null {
  if (!t.sizes.length) return null;
  const rims = [...new Set(t.sizes.map((s) => parseTireSize(s.size).rim).filter(Boolean))];
  rims.sort((a, b) => parseFloat(a!) - parseFloat(b!));
  if (rims.length === 1) return `${rims[0]}"`;
  return `${rims[0]}"–${rims[rims.length - 1]}"`;
}

function toggle<T>(set: Set<T>, val: T): Set<T> {
  const next = new Set(set);
  next.has(val) ? next.delete(val) : next.add(val);
  return next;
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function CheckRow({
  label,
  count,
  checked,
  onClick,
}: {
  label: string;
  count: number;
  checked: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "4px 0",
        textAlign: "left",
      }}
    >
      <span
        style={{
          width: 15,
          height: 15,
          border: `1.5px solid ${checked ? "var(--accent-yellow)" : "#555"}`,
          background: checked ? "var(--accent-yellow)" : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {checked && (
          <svg viewBox="0 0 10 10" width={9} height={9}>
            <path
              d="M1 5l3 3 5-6"
              fill="none"
              stroke="#000"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span style={{ flex: 1, color: checked ? "#fff" : "#b1b1b1", fontSize: "0.875rem" }}>
        {label}
      </span>
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.72rem",
          color: "#555",
          letterSpacing: "0.04em",
        }}
      >
        {count}
      </span>
    </button>
  );
}

function FacetSection({
  title,
  onReset,
  children,
}: {
  title: string;
  onReset?: () => void;
  children: React.ReactNode;
}) {
  return (
    <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "0.875rem", marginTop: "0.875rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <span
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          {title}
        </span>
        {onReset && (
          <button
            onClick={onReset}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#555",
              fontSize: "0.7rem",
              textDecoration: "underline",
              padding: 0,
            }}
          >
            reset
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

function TireCard({ tire }: { tire: FinderTire }) {
  const range = sizeRange(tire);
  const isPremium = tire.series === "Premium";
  const certBadges = [];
  if (tire.sizes.some((s) => s.ms)) certBadges.push("M+S");
  if (tire.sizes.some((s) => s.pmsf)) certBadges.push("3PMSF");
  if (tire.sizes.some((s) => s.smartway)) certBadges.push("SW");

  return (
    <Link
      href="/tires/neo-fuel-x3"
      style={{ textDecoration: "none", display: "block" }}
    >
      <div
        className="product-card"
        style={{
          padding: "1.25rem 1.25rem 1rem",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
        }}
      >
        {/* Top badges row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: isPremium ? "var(--accent-yellow)" : "#888",
              fontWeight: 600,
            }}
          >
            {tire.series}
          </span>
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#b1b1b1",
              border: "1px solid #333",
              padding: "2px 7px",
            }}
          >
            {tire.pos}
          </span>
        </div>

        {/* Name */}
        <div>
          <div
            style={{
              fontSize: "1.25rem",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.1,
            }}
          >
            {tire.name}
          </div>
          <div
            style={{
              fontSize: "0.78rem",
              color: "#888",
              marginTop: "0.3rem",
              lineHeight: 1.35,
            }}
          >
            {tire.subtitle}
          </div>
        </div>

        {/* Feature tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "auto", paddingTop: "0.5rem" }}>
          {tire.tags
            .filter((t) => !["M+S", "3PMSF", "SmartWay", "ML"].includes(t))
            .slice(0, 3)
            .map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#888",
                  border: "1px solid #2c2c2e",
                  padding: "2px 6px",
                }}
              >
                {tag}
              </span>
            ))}
        </div>

        {/* Footer: cert dots + size count */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid var(--border-color)",
            paddingTop: "0.6rem",
            marginTop: "0.25rem",
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            {["M+S", "3PMSF", "SW"].map((c) => {
              const active = certBadges.includes(c);
              return (
                <span
                  key={c}
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: active ? "var(--accent-yellow)" : "#333",
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  {active && (
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent-yellow)", display: "inline-block" }} />
                  )}
                  {c}
                </span>
              );
            })}
          </div>
          <span style={{ fontSize: "0.72rem", color: "#666", letterSpacing: "0.04em" }}>
            {tire.sizes.length > 0 ? `${tire.sizes.length} size${tire.sizes.length !== 1 ? "s" : ""}` : "Spec sheet pending"}
            {range && <span style={{ color: "#444", marginLeft: 4 }}>· {range} rim</span>}
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Active filter pill ───────────────────────────────────────────────────────
function ActiveChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        padding: "4px 4px 4px 10px",
        background: "#1a1a1a",
        border: "1px solid #333",
        fontSize: "0.68rem",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "#b1b1b1",
      }}
    >
      {label}
      <button
        onClick={onRemove}
        style={{ background: "none", border: "none", cursor: "pointer", color: "#666", padding: "2px 4px", fontSize: 13, lineHeight: 1 }}
      >
        ×
      </button>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function TireFinderPage() {
  const [mode, setMode] = useState<Mode>("application");
  const [sort, setSort] = useState<SortKey>("name");
  const [filter, setFilter] = useState<FilterState>(initFilter);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const updateFilter = (patch: Partial<FilterState>) =>
    setFilter((prev) => ({ ...prev, ...patch }));

  const results = useMemo(
    () => sortTires(applyFilters(FINDER_TIRES, filter, mode), sort),
    [filter, mode, sort]
  );

  const hasAnyFilter =
    filter.search ||
    filter.segment.size ||
    filter.pos.size ||
    filter.series.size ||
    filter.cert.size ||
    filter.tags.size ||
    filter.sizeWidth ||
    filter.sizeRatio ||
    filter.sizeRim;

  // Active filter chips data
  const activeChips: { label: string; onRemove: () => void }[] = [];
  filter.segment.forEach((v) =>
    activeChips.push({ label: `App: ${v}`, onRemove: () => updateFilter({ segment: toggle(filter.segment, v) }) })
  );
  filter.pos.forEach((v) =>
    activeChips.push({ label: `Pos: ${v}`, onRemove: () => updateFilter({ pos: toggle(filter.pos, v) }) })
  );
  filter.series.forEach((v) =>
    activeChips.push({ label: `${v} Series`, onRemove: () => updateFilter({ series: toggle(filter.series, v) }) })
  );
  filter.cert.forEach((v) =>
    activeChips.push({ label: v, onRemove: () => updateFilter({ cert: toggle(filter.cert, v) }) })
  );
  filter.tags.forEach((v) =>
    activeChips.push({ label: v, onRemove: () => updateFilter({ tags: toggle(filter.tags, v) }) })
  );
  if (filter.sizeWidth) activeChips.push({ label: `W: ${filter.sizeWidth}`, onRemove: () => updateFilter({ sizeWidth: "" }) });
  if (filter.sizeRatio) activeChips.push({ label: `Ratio: ${filter.sizeRatio}`, onRemove: () => updateFilter({ sizeRatio: "" }) });
  if (filter.sizeRim) activeChips.push({ label: `Rim: ${filter.sizeRim}"`, onRemove: () => updateFilter({ sizeRim: "" }) });
  if (filter.search)
    activeChips.push({
      label: `"${filter.search}"`,
      onRemove: () => { updateFilter({ search: "" }); if (searchRef.current) searchRef.current.value = ""; },
    });

  const sidebar = (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* Application segment */}
      <FacetSection
        title="Application"
        onReset={() => updateFilter({ segment: new Set() })}
      >
        {(SEGMENTS as readonly string[]).map((seg) => {
          const count = FINDER_TIRES.filter((t) => t.segment === seg).length;
          return (
            <CheckRow
              key={seg}
              label={seg}
              count={count}
              checked={filter.segment.has(seg)}
              onClick={() => updateFilter({ segment: toggle(filter.segment, seg) })}
            />
          );
        })}
      </FacetSection>

      {/* Tire position */}
      <FacetSection
        title="Tire Position"
        onReset={() => updateFilter({ pos: new Set() })}
      >
        {POSITIONS.map((p) => {
          const count = FINDER_TIRES.filter((t) => t.pos === p).length;
          return (
            <CheckRow
              key={p}
              label={p}
              count={count}
              checked={filter.pos.has(p)}
              onClick={() => updateFilter({ pos: toggle(filter.pos, p) })}
            />
          );
        })}
      </FacetSection>

      {/* Series */}
      <FacetSection
        title="Series"
        onReset={() => updateFilter({ series: new Set() })}
      >
        {(["Premium", "Standard"] as const).map((s) => {
          const count = FINDER_TIRES.filter((t) => t.series === s).length;
          return (
            <CheckRow
              key={s}
              label={`${s} Series`}
              count={count}
              checked={filter.series.has(s)}
              onClick={() => updateFilter({ series: toggle(filter.series, s) })}
            />
          );
        })}
      </FacetSection>

      {/* Certifications */}
      <FacetSection
        title="Certifications"
        onReset={() => updateFilter({ cert: new Set() })}
      >
        {(
          [
            ["M+S", "M+S Rated"],
            ["3PMSF", "3PMSF Severe Snow"],
            ["SmartWay", "SmartWay Verified"],
          ] as [string, string][]
        ).map(([key, label]) => {
          const certKey = CERT_KEY_MAP[key];
          const count = FINDER_TIRES.filter((t) => t.sizes.some((s) => s[certKey])).length;
          return (
            <CheckRow
              key={key}
              label={label}
              count={count}
              checked={filter.cert.has(key)}
              onClick={() => updateFilter({ cert: toggle(filter.cert, key) })}
            />
          );
        })}
      </FacetSection>

      {/* Feature tags */}
      <FacetSection title="Features" onReset={() => updateFilter({ tags: new Set() })}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
          {FEATURE_TAGS.map((tag) => {
            const active = filter.tags.has(tag);
            return (
              <button
                key={tag}
                onClick={() => updateFilter({ tags: toggle(filter.tags, tag) })}
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "5px 9px",
                  border: `1px solid ${active ? "var(--accent-yellow)" : "#333"}`,
                  background: active ? "var(--accent-yellow)" : "transparent",
                  color: active ? "#000" : "#888",
                  cursor: "pointer",
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </FacetSection>

      {/* Size mode selectors */}
      {mode === "size" && (
        <FacetSection
          title="Tire Size"
          onReset={() => updateFilter({ sizeWidth: "", sizeRatio: "", sizeRim: "" })}
        >
          {(
            [
              ["sizeWidth", "Width", SIZE_WIDTHS],
              ["sizeRatio", "Ratio", SIZE_RATIOS],
              ["sizeRim", "Rim (in)", SIZE_RIMS],
            ] as [keyof FilterState, string, string[]][]
          ).map(([key, placeholder, opts]) => (
            <select
              key={key}
              value={filter[key] as string}
              onChange={(e) => updateFilter({ [key]: e.target.value })}
              style={{
                width: "100%",
                background: "#111",
                border: "1px solid #333",
                color: filter[key] ? "#fff" : "#666",
                padding: "8px 10px",
                fontSize: "0.8rem",
                marginBottom: 6,
                cursor: "pointer",
              }}
            >
              <option value="">{placeholder}</option>
              {opts.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          ))}
        </FacetSection>
      )}
    </div>
  );

  return (
    <>
      <Navbar />

      <main style={{ background: "var(--bg-dark)", minHeight: "100vh", paddingBottom: "5rem" }}>
        {/* ── Page header ── */}
        <div
          style={{
            maxWidth: 1600,
            margin: "0 auto",
            padding: "2.5rem calc(4vw + 20px) 0",
            borderBottom: "1px solid var(--border-color)",
            paddingBottom: "1.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent-yellow)",
              margin: "0 0 0.4rem",
            }}
          >
            Aeolus TBR
          </p>
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.03em",
              margin: 0,
              color: "#fff",
              lineHeight: 1,
            }}
          >
            TIRE <span style={{ color: "var(--accent-yellow)" }}>SEARCH</span>
          </h1>
        </div>

        {/* ── Search bar ── */}
        <div
          style={{
            maxWidth: 1600,
            margin: "0 auto",
            padding: "1.5rem calc(4vw + 20px) 0",
          }}
        >
          <div
            style={{
              display: "flex",
              border: "1px solid #444",
              background: "#0a0a0a",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 14px",
                borderRight: "1px solid #2c2c2e",
                color: "#555",
              }}
            >
              <MagnifyingGlass size={18} />
            </span>
            <input
              ref={searchRef}
              type="text"
              placeholder="Search by tire name, size (e.g. 295/75R22.5), or feature..."
              defaultValue={filter.search}
              onChange={(e) => updateFilter({ search: e.target.value })}
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#fff",
                padding: "14px 16px",
                fontSize: "0.95rem",
                fontFamily: "var(--font-body)",
              }}
            />
            {filter.search && (
              <button
                onClick={() => {
                  updateFilter({ search: "" });
                  if (searchRef.current) searchRef.current.value = "";
                }}
                style={{
                  background: "none",
                  border: "none",
                  borderLeft: "1px solid #2c2c2e",
                  cursor: "pointer",
                  color: "#666",
                  padding: "0 16px",
                  fontSize: "0.72rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-body)",
                }}
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Mode tabs */}
          <div style={{ display: "flex", borderBottom: "1px solid var(--border-color)", marginTop: "1rem" }}>
            {(
              [
                ["application", "BY APPLICATION"],
                ["size", "BY TIRE SIZE"],
              ] as [Mode, string][]
            ).map(([m, label]) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: mode === m ? "2px solid var(--accent-yellow)" : "2px solid transparent",
                  color: mode === m ? "#fff" : "#666",
                  cursor: "pointer",
                  padding: "10px 0",
                  marginRight: 28,
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: mode === m ? 600 : 400,
                  fontFamily: "var(--font-body)",
                  position: "relative",
                  top: 1,
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Layout: sidebar + results ── */}
        <div
          style={{
            maxWidth: 1600,
            margin: "0 auto",
            padding: "0 calc(4vw + 20px)",
            display: "grid",
            gridTemplateColumns: "260px 1fr",
            gap: "2.5rem",
            marginTop: "1.75rem",
            alignItems: "start",
          }}
          className="finder-layout"
        >
          {/* ── Sidebar (desktop) ── */}
          <aside
            className="finder-sidebar-desktop"
            style={{ position: "sticky", top: 80 }}
          >
            {sidebar}
          </aside>

          {/* ── Results column ── */}
          <div>
            {/* Results header */}
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 12,
                paddingBottom: "0.875rem",
                borderBottom: "1px solid #fff",
                marginBottom: "1rem",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                {/* Mobile filter toggle */}
                <button
                  className="finder-filter-btn"
                  onClick={() => setSidebarOpen((o) => !o)}
                  style={{
                    display: "none",
                    alignItems: "center",
                    gap: 6,
                    background: "none",
                    border: "1px solid #333",
                    color: "#b1b1b1",
                    padding: "5px 10px",
                    cursor: "pointer",
                    fontSize: "0.72rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  <FunnelSimple size={14} />
                  FILTER
                </button>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.78rem",
                    color: "#666",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  <b style={{ color: "#fff" }}>{results.length}</b> of {FINDER_TIRES.length} tires
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "#666",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  SORT
                </span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  style={{
                    background: "#111",
                    border: "1px solid #333",
                    color: "#fff",
                    padding: "6px 10px",
                    fontSize: "0.78rem",
                    fontFamily: "var(--font-body)",
                    cursor: "pointer",
                  }}
                >
                  <option value="name">Name A–Z</option>
                  <option value="series">Series</option>
                  <option value="sizes">Most Sizes</option>
                </select>
              </div>
            </div>

            {/* Active filter chips */}
            {activeChips.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "1rem" }}>
                {activeChips.map((c) => (
                  <ActiveChip key={c.label} label={c.label} onRemove={c.onRemove} />
                ))}
                <button
                  onClick={() => {
                    setFilter(initFilter());
                    if (searchRef.current) searchRef.current.value = "";
                  }}
                  style={{
                    background: "none",
                    border: "1px solid #333",
                    color: "#666",
                    cursor: "pointer",
                    padding: "4px 10px",
                    fontSize: "0.68rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Mobile sidebar panel */}
            {sidebarOpen && (
              <div
                className="finder-sidebar-mobile"
                style={{
                  background: "#0a0a0a",
                  border: "1px solid var(--border-color)",
                  padding: "1.25rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                    FILTERS
                  </span>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    style={{ background: "none", border: "none", color: "#888", cursor: "pointer" }}
                  >
                    <X size={18} />
                  </button>
                </div>
                {sidebar}
              </div>
            )}

            {/* Grid */}
            {results.length === 0 ? (
              <div
                style={{
                  padding: "4rem 0",
                  textAlign: "center",
                  color: "#555",
                }}
              >
                <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>No tires match your filters.</p>
                <button
                  onClick={() => {
                    setFilter(initFilter());
                    if (searchRef.current) searchRef.current.value = "";
                  }}
                  style={{
                    background: "none",
                    border: "1px solid #333",
                    color: "#888",
                    cursor: "pointer",
                    padding: "8px 16px",
                    fontSize: "0.75rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1px",
                  background: "var(--border-color)",
                }}
                className="finder-grid"
              >
                {results.map((tire) => (
                  <div key={tire.slug} style={{ background: "var(--bg-dark)" }}>
                    <TireCard tire={tire} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 860px) {
          .finder-layout {
            grid-template-columns: 1fr !important;
          }
          .finder-sidebar-desktop {
            display: none !important;
          }
          .finder-filter-btn {
            display: flex !important;
          }
          .finder-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 520px) {
          .finder-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
