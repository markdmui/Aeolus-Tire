import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CATALOG_TIRES, TireData } from "../data/tires";
import { usePageMeta } from "../lib/seo";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

type TireEntry = TireData;

function splitName(name: string): [string, string] {
  const u = name.toUpperCase();
  if (u.startsWith("NEO ")) return ["NEO", u.slice(4)];
  const s = u.lastIndexOf(" ");
  if (s > 0) return [u.slice(0, s), u.slice(s + 1)];
  const m = u.match(/^([A-Z]+)(\d.*)$/);
  return m ? [m[1], m[2]] : [u, ""];
}

const FILTERS = ["Neo Series", "Standard", "Long Haul", "Regional", "On/Off Road", "Winter", "Urban"] as const;
type Filter = typeof FILTERS[number];

function matchesFilter(tire: TireEntry, filter: Filter | null): boolean {
  if (!filter) return true;
  switch (filter) {
    case "Neo Series":  return tire.name.toLowerCase().startsWith("neo");
    case "Standard":    return tire.seriesLabel === "STANDARD";
    case "Long Haul":   return tire.categoryLabel === "LONG HAUL";
    case "Regional":    return tire.categoryLabel === "REGIONAL";
    case "On/Off Road": return tire.categoryLabel.includes("OFF ROAD") || tire.categoryLabel.includes("ON/OFF");
    case "Winter":      return tire.categoryLabel === "WINTER";
    case "Urban":       return tire.categoryLabel === "URBAN";
  }
}

// The tire grid is the catalog, in wireframe order — see src/data/tires.ts.
const GROUPS: { tires: TireEntry[] }[] = [{ tires: CATALOG_TIRES }];

export default function TirePage() {
  usePageMeta({
    title: "Truck Tire Lineup — TBR & OTR Tire Catalog",
    description:
      "Browse the full Aeolus truck tire lineup — premium and standard TBR radial tires for long haul, regional, on/off road, winter, and urban fleets.",
  });

  const [activeFilter, setActiveFilter] = useState<Filter | null>(null);

  const isFiltered = activeFilter !== null;

  return (
    <div
      className="antialiased"
      style={{ backgroundColor: "#000", color: "#fff", fontFamily: "var(--font-body)" }}
    >
      <Navbar />

      <section style={{ paddingTop: "calc(49px + 4rem)", paddingBottom: "2rem" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="uppercase"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "var(--accent-yellow)" }}>TIRE</span>
            {" "}LINEUP
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.15, ease: "easeOut" }}
            style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", flex: 1 }}
          >
            {/* All Tires â€” disabled (no hover) when active */}
            <button
              onClick={isFiltered ? () => setActiveFilter(null) : undefined}
              className={isFiltered ? "filter-btn" : undefined}
              style={{
                border: `1px solid ${!isFiltered ? "rgba(242,201,76,0.8)" : "rgba(68,68,68,0.8)"}`,
                color: !isFiltered ? "var(--accent-yellow)" : "rgba(255,255,255,0.65)",
                background: "transparent",
                padding: "calc(0.3rem + 2px) calc(0.75rem + 2px)",
                fontSize: "0.76rem",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                cursor: !isFiltered ? "default" : "pointer",
                fontFamily: "var(--font-body)",
                fontWeight: !isFiltered ? 600 : 400,
                pointerEvents: !isFiltered ? "none" : "auto",
                transition: "border-color 0.15s ease, color 0.15s ease",
              }}
            >
              All Tires
            </button>

            {/* Category filters â€” always interactive */}
            {FILTERS.map(f => {
              const active = activeFilter === f;
              return (
                <button
                  key={f}
                  onClick={active ? undefined : () => setActiveFilter(f)}
                  className={active ? undefined : "filter-btn"}
                  style={{
                    border: `1px solid ${active ? "rgba(242,201,76,0.8)" : "rgba(68,68,68,0.8)"}`,
                    color: active ? "var(--accent-yellow)" : "rgba(255,255,255,0.65)",
                    background: "transparent",
                    padding: "calc(0.3rem + 2px) calc(0.75rem + 2px)",
                    fontSize: "0.76rem",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    cursor: active ? "default" : "pointer",
                    fontFamily: "var(--font-body)",
                    fontWeight: active ? 600 : 400,
                    pointerEvents: active ? "none" : "auto",
                    transition: "border-color 0.15s ease, color 0.15s ease",
                  }}
                >
                  {f}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section style={{ paddingBottom: "5rem" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {GROUPS.map((group, gi) => (
            <GroupSection key={gi} group={group} activeFilter={activeFilter} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function GroupSection({ group, activeFilter }: { group: { tires: TireEntry[] }; activeFilter: Filter | null }) {
  const visible = group.tires.filter(t => matchesFilter(t, activeFilter));
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="lineup-grid"
    >
      <AnimatePresence mode="popLayout">
        {visible.map((tire, ti) => (
          <TireCard key={tire.slug} tire={tire} delay={ti * 0.02} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

function TireCard({ tire, delay }: { tire: TireEntry; delay: number }) {
  const [prefix, suffix] = splitName(tire.name);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
      transition={{ duration: 0.20, delay, ease: "easeOut" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ backgroundColor: hovered ? "#1e1e1e" : "transparent", position: "relative" }}
      className="lineup-card"
    >
      <Link href={`/tires/${tire.slug}`} style={{ display: "block", textDecoration: "none", color: "inherit", height: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <div
            style={{
              width: "100%",
              aspectRatio: "4 / 3",
              backgroundColor: "transparent",
              overflow: "hidden",
              flexShrink: 0,
              position: "relative",
              marginBottom: "4px",
            }}
          >
            <img
              src={`${BASE}${tire.tireImage}`}
              alt={tire.name}
              loading="lazy"
              width={1800}
              height={2400}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                transform: "scale(1.906) translateY(2.5%) translateX(12.5%)",
                transformOrigin: "top center",
              }}
              className="lineup-card-img"
              decoding="async"
            />
          </div>

          <div className="lineup-card-name-row" style={{ padding: "8px 0.8rem 8px" }}>
            <p
              className="uppercase lineup-card-name"
              style={{
                fontSize: "clamp(0.78rem, 1.2vw, 0.92rem)",
                fontWeight: 700,
                letterSpacing: "0.02em",
                lineHeight: 1.15,
                color: "#fff",
              }}
            >
              <span style={{ color: "var(--accent-yellow)" }}>{prefix}</span>
              {suffix && <>{" "}<span style={{ color: "#fff" }}>{suffix}</span></>}
            </p>
          </div>

          <div className="lineup-card-info" style={{ padding: "0 0.8rem 0.85rem", flex: 1 }}>
            <p
              className="uppercase"
              style={{
                fontSize: "clamp(0.58rem, 0.95vw, 0.68rem)",
                letterSpacing: "0.07em",
                lineHeight: 1.3,
                color: hovered ? "#fff" : "rgba(255,255,255,0.6)",
                transition: "color 0.18s ease",
              }}
            >
              {[tire.seriesLabel, tire.categoryLabel].filter(Boolean).join(" ")}
            </p>
          </div>
        </div>
      </Link>

      {/* Animated yellow bottom border */}
      <motion.div
        initial={{ width: 50, opacity: 0 }}
        animate={hovered ? { width: "100%", opacity: 1 } : { width: 50, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 3,
          background: "var(--accent-yellow)",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
}
