import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "wouter";
import { Notebook, FilePdf, ShieldCheck, Image } from "@phosphor-icons/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TireTechExplorer from "../components/TireTechExplorer";
import { getTireBySlug, TireData } from "../data/tires";
import NotFound from "./not-found";

// ─── Position SVG map ────────────────────────────────────────────────────────
const POS_SVG: Record<string, string> = {
  "Drive":        "/pos-drive-tire.svg",
  "Steer":        "/pos-steer-tire.svg",
  "Trailer":      "/pos-trailer-tire.svg",
  "All Position": "/pos-allposition-tire.svg",
  "OTR":          "/pos-otr-tire.svg",
  "Bus":          "/pos-bus-tire.svg",
};

// ─── Layout constants ────────────────────────────────────────────────────────
const FEATURE_SECTION_BG =
  "linear-gradient(to bottom, transparent 0%, #000000 220px, #000000 55%, transparent 100%)";
const TRUCK_BG_POSITION  = "center calc(60% + 190px)";
const TRUCK_MIN_HEIGHT   = 540;
const TRUCK_MARGIN_BOTTOM = -180;
const SPECS_TABLE_BG     = "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.75) 200px)";
const DOWNLOAD_BTN_PT    = "calc(3rem + 30px)";

// ─── Table cell styles (module-level, reused by SpecsSection) ────────────────
const thStyle: React.CSSProperties = {
  padding: "0.9rem calc(0.55rem - 4px)",
  textAlign: "left",
  color: "#cccccc",
  fontWeight: 600,
  fontSize: "0.7rem",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  verticalAlign: "top",
  whiteSpace: "nowrap",
};

const subThStyle: React.CSSProperties = {
  padding: "0rem calc(0.55rem - 4px) 0.7rem",
  textAlign: "left",
  color: "#888888",
  fontWeight: 500,
  fontSize: "0.78rem",
  letterSpacing: "0.04em",
  verticalAlign: "bottom",
  whiteSpace: "nowrap",
};

const tdStyle: React.CSSProperties = {
  padding: "0.85rem calc(0.55rem - 4px)",
  color: "#cccccc",
  letterSpacing: "0.02em",
  verticalAlign: "middle",
  whiteSpace: "nowrap",
};

// ─── Page ────────────────────────────────────────────────────────────────────
export default function TireProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const tire = getTireBySlug(slug ?? "");

  const [activeImg, setActiveImg] = useState<string | null>(null);
  const close = useCallback(() => setActiveImg(null), []);

  useEffect(() => {
    if (!activeImg) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeImg, close]);

  if (!tire) return <NotFound />;

  return (
    <div
      className="antialiased text-white"
      style={{ backgroundColor: "var(--bg-dark)", fontFamily: "var(--font-body)" }}
    >
      <Navbar />
      <div style={{ position: "relative" }}>
        <HeroSection tire={tire} onOpen={setActiveImg} />
        <div style={{ position: "relative", zIndex: 1, marginTop: "-20px" }}>
          <FeatureSection tire={tire} onOpen={setActiveImg} />
        </div>
        <div style={{ position: "relative", marginTop: "0" }}>
          <SpecsSection tire={tire} />
        </div>
      </div>
      <TireTechExplorer imageSrc={tire.cutawayImage} />
      <Footer />
      <AnimatePresence>
        {activeImg && (
          <Lightbox
            key="lightbox"
            src={activeImg}
            onClose={close}
            category={tire.segment}
            tireName={tire.name}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection({ tire, onOpen }: { tire: TireData; onOpen: (src: string) => void }) {
  const [truckHovered, setTruckHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tireHovered, setTireHovered] = useState(false);
  const [tireMouse, setTireMouse] = useState({ x: 0, y: 0 });

  const words = tire.name.toUpperCase().split(" ");
  const lastName = words.pop()!;
  const firstName = words.join(" ");

  return (
    <section
      className="tire-product-hero"
      style={{
        position: "relative",
        marginTop: "-46px",
        backgroundImage: `url(${tire.heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000000",
      }}
    >
      <div
        className="container grid grid-cols-1 md:grid-cols-2 items-center gap-0 md:gap-12"
        style={{ minHeight: "520px" }}
      >
        {/* Text content */}
        <div className="tire-hero-text md:pb-8">
          {/* Segment badge */}
          <motion.div
            className="tire-hero-badge"
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.34, delay: 0.1, ease: "easeOut" }}
            style={{
              display: "inline-block",
              border: "1px solid var(--accent-yellow)",
              color: "var(--accent-yellow)",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "4px 10px",
            }}
          >
            {tire.segment}
          </motion.div>

          {/* Title */}
          <motion.h1
            className="tire-product-h1 tire-hero-title uppercase"
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.38, delay: 0.2, ease: "easeOut" }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "#fff" }}>{firstName} </span>
            <span style={{ color: "var(--accent-yellow)" }}>{lastName}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="tire-hero-subtitle"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36, delay: 0.35, ease: "easeOut" }}
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "0.95rem",
              lineHeight: 1.65,
              maxWidth: "32rem",
            }}
          >
            {tire.subtitle}
          </motion.p>

          {/* Divider */}
          <motion.div
            className="tire-hero-divider"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.29, delay: 0.5, ease: "easeOut" }}
            style={{ width: "2.5rem", height: "2px", backgroundColor: "var(--accent-yellow)" }}
          />

          {/* Bullet points */}
          <ul className="tire-hero-bullets" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" }}>
            {tire.bullets.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.31, delay: 0.58 + i * 0.14, ease: "easeOut" }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  fontSize: "0.88rem",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-yellow)",
                    marginTop: "7px",
                    flexShrink: 0,
                  }}
                />
                {point}
              </motion.li>
            ))}
          </ul>

          {/* Position / application icon */}
          <div
            style={{ position: "relative", display: "inline-block" }}
            onMouseEnter={() => setTruckHovered(true)}
            onMouseLeave={() => setTruckHovered(false)}
            onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
          >
            <motion.img
              src={POS_SVG[tire.position]}
              alt={`${tire.position} tire position`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.38, delay: 1.0, ease: "easeOut" }}
              style={{ height: "auto", display: "block" }}
              className={`tire-hero-truck${tire.position === "OTR" ? " tire-hero-truck--otr" : ""}`}
            />
            <AnimatePresence>
              {truckHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  style={{
                    position: "fixed",
                    top: mousePos.y - 10,
                    left: mousePos.x + 10,
                    background: "#000",
                    border: "1px solid #555",
                    color: "#fff",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    padding: "7px 12px",
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                    zIndex: 9999,
                  }}
                >
                  {tire.position} Tire
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Tire image */}
        <motion.div
          className="flex items-center justify-center pb-10 md:py-8"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.43, delay: 0.1, ease: "easeOut" }}
        >
          <div
            style={{ position: "relative", display: "inline-block", width: "100%", maxWidth: "520px" }}
            onMouseEnter={() => setTireHovered(true)}
            onMouseLeave={() => setTireHovered(false)}
            onMouseMove={(e) => setTireMouse({ x: e.clientX, y: e.clientY })}
          >
            <div
              className="tire-hero-img-wrap"
              style={{ width: "100%", overflow: "hidden", aspectRatio: "1 / 0.83" }}
            >
              <img
                src={tire.tireImage}
                alt={`Aeolus ${tire.name}`}
                onClick={() => onOpen(tire.tireImage)}
                style={{ width: "100%", height: "auto", display: "block", cursor: "zoom-in" }}
              />
            </div>
            <AnimatePresence>
              {tireHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  style={{
                    position: "fixed",
                    top: tireMouse.y - 10,
                    left: tireMouse.x + 10,
                    background: "#000",
                    border: "1px solid #555",
                    color: "#fff",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    padding: "7px 12px",
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                    zIndex: 9999,
                  }}
                >
                  View Tire
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
function FeatureSection({ tire, onOpen }: { tire: TireData; onOpen: (src: string) => void }) {
  return (
    <section
      className="md:pt-[100px]"
      style={{ background: FEATURE_SECTION_BG }}
    >
      <div
        className="container grid grid-cols-1 md:grid-cols-3"
        style={{ gap: "var(--col-gap)", gridTemplateRows: "auto auto auto" }}
      >
        {tire.features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3, delay: i * 0.18 }}
            style={{
              position: "relative",
              display: "grid",
              gridTemplateRows: "subgrid",
              gridRow: "span 3",
              alignContent: "start",
            }}
          >
            {/* Top rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.44, delay: i * 0.18, ease: "easeOut" }}
              style={{ position: "absolute", top: 0, left: 0, height: "1px", backgroundColor: "#cccccc", width: "100%", originX: 0 }}
            />

            {/* Title */}
            <motion.h3
              className="uppercase md:pt-10"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.36, delay: i * 0.18 + 0.1, ease: "easeOut" }}
              style={{
                color: "var(--accent-yellow)",
                fontSize: "1.05rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                lineHeight: 1.4,
                paddingTop: "1.75rem",
                marginBottom: 0,
              }}
            >
              {f.title}
            </motion.h3>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.36, delay: i * 0.18 + 0.22, ease: "easeOut" }}
              style={{
                color: "#cccccc",
                fontSize: "0.86rem",
                lineHeight: 1.45,
                paddingTop: "1rem",
                paddingBottom: "1.5rem",
              }}
              className="md:pb-8"
            >
              {f.body}
            </motion.p>

            {/* Feature image */}
            <motion.img
              src={f.image}
              alt={f.title}
              onClick={() => onOpen(f.image)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.40, delay: i * 0.18 + 0.18, ease: "easeOut" }}
              style={{
                width: "100%",
                display: "block",
                aspectRatio: "16 / 9",
                objectFit: "cover",
                cursor: "zoom-in",
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Specs (truck bg + download buttons + spec table) ────────────────────────
function SpecsSection({ tire }: { tire: TireData }) {
  const showSmartway = tire.specRows.some((r) => r.smartway);
  const showMs       = tire.specRows.some((r) => r.ms);
  const showPmsf     = tire.specRows.some((r) => r["3PMSF"]);
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);

  const subHdrColor = (col: number) =>
    hoveredCol === col ? "var(--accent-yellow)" : "var(--text-muted)";
  const col = (n: number) => ({ onMouseEnter: () => setHoveredCol(n) });

  const downloadItems = [
    { icon: <Notebook size={22} weight="light" />, label: "Product Catalog", href: tire.downloads.catalog },
    { icon: <FilePdf size={22} weight="light" />,  label: "Product Sheet",   href: tire.downloads.productSheet },
    { icon: <ShieldCheck size={22} weight="light" />, label: "Warranty",     href: tire.downloads.warranty },
    { icon: <Image size={22} weight="light" />,    label: "Tire Photo",      href: tire.downloads.tirePhoto, download: true },
  ];

  const btnBase: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.9rem",
    background: "rgba(10,10,10,0.5)",
    borderTop: "1px solid rgba(255,255,255,0.2)",
    borderRight: "1px solid rgba(255,255,255,0.2)",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
    borderLeft: "5px solid var(--accent-yellow)",
    color: "#888888",
    fontSize: "0.8rem",
    fontFamily: "var(--font-body)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    padding: "0.6rem 1.4rem 0.6rem 1rem",
    cursor: "pointer",
    minWidth: "220px",
    textAlign: "left",
    backdropFilter: "blur(4px)",
    transition: "background 0.15s ease, border-color 0.15s ease",
    textDecoration: "none",
  };

  const onEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.background = "rgba(242,201,76,0.6)";
    el.style.color = "#ffffff";
    el.style.borderLeft = "5px solid #ffffff";
    const sp = el.querySelector("span") as HTMLElement | null;
    if (sp) sp.style.color = "#ffffff";
  };
  const onLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.background = "rgba(10,10,10,0.5)";
    el.style.color = "#888888";
    el.style.borderLeft = "5px solid var(--accent-yellow)";
    const sp = el.querySelector("span") as HTMLElement | null;
    if (sp) sp.style.color = "var(--accent-yellow)";
  };

  return (
    <section style={{ backgroundColor: "transparent", paddingTop: "0" }}>
      {/* Truck background */}
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${tire.bgTruck})`,
          backgroundSize: "cover",
          backgroundPosition: TRUCK_BG_POSITION,
          backgroundRepeat: "no-repeat",
          minHeight: `${TRUCK_MIN_HEIGHT}px`,
          marginBottom: `${TRUCK_MARGIN_BOTTOM}px`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Download buttons */}
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: DOWNLOAD_BTN_PT }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: "fit-content" }}>
            {downloadItems.map(({ icon, label, href, download }, i) => (
              <motion.a
                key={label}
                href={href}
                {...(download ? { download: href.split("/").pop() } : { target: "_blank", rel: "noopener noreferrer" })}
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.31, delay: i * 0.15, ease: "easeOut" }}
                style={btnBase}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                <span style={{ color: "var(--accent-yellow)", display: "flex", alignItems: "center" }}>{icon}</span>
                {label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Specs table */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
        style={{ background: SPECS_TABLE_BG, position: "relative", zIndex: 1 }}
      >
        <div className="container" style={{ paddingTop: "110px", paddingBottom: "0" }}>
          <motion.h2
            className="uppercase"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.38, ease: "easeOut" }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              color: "#cccccc",
              marginBottom: "36px",
            }}
          >
            TECHNICAL SPECS
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ height: "1px", backgroundColor: "rgba(242, 201, 76, 0.6)", marginBottom: "0" }}
          />
        </div>

        <div className="container" style={{ overflowX: "auto", paddingTop: "0", paddingBottom: "0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.86rem" }}>
            <thead>
              <tr>
                <th rowSpan={2} style={thStyle}>Size</th>
                <th rowSpan={2} style={thStyle}>Ply</th>
                <th style={thStyle}>Rim<br />Width</th>
                <th style={thStyle}>Section<br />Width</th>
                <th colSpan={2} style={{ ...thStyle, textAlign: "left" }}>Overall<br />Diameter</th>
                <th colSpan={2} style={{ ...thStyle, textAlign: "left" }}>Tread<br />Depth</th>
                <th colSpan={4} style={{ ...thStyle, textAlign: "left" }}>Max. Load<br />(Single)</th>
                <th colSpan={4} style={{ ...thStyle, textAlign: "left" }}>Max. Load<br />(Dual)</th>
                <th rowSpan={2} style={thStyle}>LI/SS</th>
                {showSmartway && <th rowSpan={2} style={{ ...thStyle, textAlign: "center" }}>Smartway</th>}
                {showMs       && <th rowSpan={2} style={{ ...thStyle, textAlign: "center" }}>M+S</th>}
                {showPmsf     && <th rowSpan={2} style={{ ...thStyle, textAlign: "center" }}>3PMSF</th>}
              </tr>
              <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                <th style={{ ...subThStyle, color: subHdrColor(2),  transition: "color 0.15s ease" }}>in</th>
                <th style={{ ...subThStyle, color: subHdrColor(3),  transition: "color 0.15s ease" }}>in</th>
                <th style={{ ...subThStyle, color: subHdrColor(4),  transition: "color 0.15s ease" }}>in</th>
                <th style={{ ...subThStyle, color: subHdrColor(5),  transition: "color 0.15s ease" }}>mm</th>
                <th style={{ ...subThStyle, color: subHdrColor(6),  transition: "color 0.15s ease" }}>mm</th>
                <th style={{ ...subThStyle, color: subHdrColor(7),  transition: "color 0.15s ease" }}>32nds</th>
                <th style={{ ...subThStyle, color: subHdrColor(8),  transition: "color 0.15s ease" }}>lbs</th>
                <th style={{ ...subThStyle, color: subHdrColor(9),  transition: "color 0.15s ease" }}>psi</th>
                <th style={{ ...subThStyle, color: subHdrColor(10), transition: "color 0.15s ease" }}>kg</th>
                <th style={{ ...subThStyle, color: subHdrColor(11), transition: "color 0.15s ease" }}>kPa</th>
                <th style={{ ...subThStyle, color: subHdrColor(12), transition: "color 0.15s ease" }}>lbs</th>
                <th style={{ ...subThStyle, color: subHdrColor(13), transition: "color 0.15s ease" }}>psi</th>
                <th style={{ ...subThStyle, color: subHdrColor(14), transition: "color 0.15s ease" }}>kg</th>
                <th style={{ ...subThStyle, color: subHdrColor(15), transition: "color 0.15s ease" }}>kPa</th>
              </tr>
            </thead>
            <tbody onMouseLeave={() => setHoveredCol(null)}>
              {tire.specRows.map((row, i) => (
                <tr
                  key={row.size}
                  className="spec-row"
                  style={{
                    borderBottom: i < tire.specRows.length - 1 ? "1px solid var(--border-color)" : "none",
                    transition: "background-color 0.15s ease",
                  }}
                >
                  <td style={tdStyle} onMouseEnter={() => setHoveredCol(null)}>{row.size}</td>
                  <td style={tdStyle} onMouseEnter={() => setHoveredCol(null)}>{row.ply}</td>
                  <td style={tdStyle} {...col(2)}>{row.rimW}</td>
                  <td style={tdStyle} {...col(3)}>{row.secW}</td>
                  <td style={tdStyle} {...col(4)}>{row.odIn}</td>
                  <td style={tdStyle} {...col(5)}>{row.odMm}</td>
                  <td style={tdStyle} {...col(6)}>{row.td32}</td>
                  <td style={tdStyle} {...col(7)}>{row.tdMm}</td>
                  <td style={tdStyle} {...col(8)}>{row.mlSlbs}</td>
                  <td style={tdStyle} {...col(9)}>{row.mlSpsi}</td>
                  <td style={tdStyle} {...col(10)}>{row.mlSkg}</td>
                  <td style={tdStyle} {...col(11)}>{row.mlSkpa}</td>
                  <td style={tdStyle} {...col(12)}>{row.mlDlbs}</td>
                  <td style={tdStyle} {...col(13)}>{row.mlDpsi}</td>
                  <td style={tdStyle} {...col(14)}>{row.mlDkg}</td>
                  <td style={tdStyle} {...col(15)}>{row.mlDkpa}</td>
                  <td style={tdStyle} onMouseEnter={() => setHoveredCol(null)}>{row.liss}</td>
                  {showSmartway && (
                    <td style={{ ...tdStyle, textAlign: "center" }} onMouseEnter={() => setHoveredCol(null)}>
                      {row.smartway
                        ? <span style={{ color: "var(--accent-yellow)", fontWeight: 700 }}>✓</span>
                        : <span style={{ color: "var(--border-color)" }}>—</span>}
                    </td>
                  )}
                  {showMs && (
                    <td style={{ ...tdStyle, textAlign: "center" }} onMouseEnter={() => setHoveredCol(null)}>
                      {row.ms
                        ? <span style={{ color: "var(--accent-yellow)", fontWeight: 700 }}>✓</span>
                        : <span style={{ color: "var(--border-color)" }}>—</span>}
                    </td>
                  )}
                  {showPmsf && (
                    <td style={{ ...tdStyle, textAlign: "center" }} onMouseEnter={() => setHoveredCol(null)}>
                      {row["3PMSF"]
                        ? <span style={{ color: "var(--accent-yellow)", fontWeight: 700 }}>✓</span>
                        : <span style={{ color: "var(--border-color)" }}>—</span>}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({ src, onClose, category, tireName }: {
  src: string;
  onClose: () => void;
  category: string;
  tireName: string;
}) {
  const words = tireName.split(" ");
  const last = words.pop()!;
  const rest = words.join(" ");

  return (
    <motion.div
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "rgba(0,0,0,0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        cursor: "zoom-out",
      }}
    >
      <div
        style={{ position: "absolute", top: "1.25rem", left: "1.5rem" }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3, delay: 0.22, ease: "easeOut" }}
          style={{
            display: "inline-block",
            border: "1px solid var(--accent-yellow)",
            color: "var(--accent-yellow)",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "4px 10px",
            marginBottom: "0.6rem",
          }}
        >
          {category}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "2.4rem",
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "#fff" }}>{rest} </span>
          <span style={{ color: "var(--accent-yellow)" }}>{last}</span>
        </motion.div>
      </div>

      <motion.button
        onClick={onClose}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 40 }}
        transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "1.25rem",
          right: "1.5rem",
          background: "none",
          border: "none",
          color: "#fff",
          cursor: "pointer",
          opacity: 0.7,
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          fontSize: "0.8rem",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          fontFamily: "var(--font-body)",
        }}
        aria-label="Close image"
      >
        <span style={{ fontSize: "1.6rem", lineHeight: 1 }}>×</span>
        Close Image
      </motion.button>

      <motion.img
        src={src}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
        style={{
          maxWidth: "100%",
          maxHeight: "90vh",
          objectFit: "contain",
          cursor: "default",
          boxShadow: "0 0 80px rgba(0,0,0,0.8)",
        }}
      />
    </motion.div>
  );
}
