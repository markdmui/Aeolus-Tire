import { useState, useEffect, useCallback } from "react";
import { Notebook, FilePdf, ShieldCheck, Image } from "@phosphor-icons/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import tireImg from "@assets/Neo-Fuel-G3_1782150885408.png";
import feature1 from "@assets/Neo-Fuel-G3-f1_1782151740029.jpg";
import feature2 from "@assets/Neo-Fuel-G3-f2_1782151740029.jpg";
import feature3 from "@assets/Neo-Fuel-G3-f3_1782151740030.jpg";
import bgTruck from "@assets/bg-long-haul-1_1782050028374.jpg";
import heroBg from "@assets/hero-bg-1_1782050148933.jpg";

const TIRE_NAME = "Neo Fuel G3";
const TIRE_SLUG = TIRE_NAME.replace(/\s+/g, "-"); // → "Neo-Fuel-G3"

const BULLET_POINTS = [
  "4 longitudinal grooves on the tread providing excellent guiding performance.",
  "Optimized ground pressure distribution to ensure product life.",
  "SATT construction for better endurance, effectively securing tire life.",
  "Low rolling resistance formula in tread to maximize fuel efficiency.",
];

const FEATURES = [
  {
    title: "OPTIMIZED Z-SHAPED GROOVE DESIGN",
    body: "Z-shaped straight grooves with optimized geometry and higher pattern saturation ensure even wear and higher mileage, delivering long-lasting tread life and consistent performance on long-haul routes.",
    image: feature1,
  },
  {
    title: "CLOSED SHOULDER STRUCTURE",
    body: "A reinforced closed shoulder design enhances heat dissipation and traction while maintaining even wear performance—improving handling stability and extending tire durability.",
    image: feature2,
  },
  {
    title: "ADVANCED 3D SIPE TECHNOLOGY",
    body: "New 3D sipe solutions in the central and shoulder tread blocks enable better block movement, enhancing snow grip and traction while providing regular wear, lower rolling resistance, reduced noise, and improved control in both dry and wet conditions.",
    image: feature3,
  },
];

const SPEC_ROWS = [
  {
    size: "295/75R22.5", ply: "16", rimW: "9.00", secW: "11.7",
    odIn: "39.9",  odMm: "1014",  td32: "15", tdMm: "18.9",
    mlSlbs: "6600",  mlSpsi: "120", mlSkg: "3000", mlSkpa: "830",
    mlDlbs: "5995",  mlDpsi: "120", mlDkg: "2725", mlDkpa: "830",
    liss: "146/143M", smartway: false, ms: true, "3PMSF": false,
  },
  {
    size: "11R22.5",    ply: "16", rimW: "8.25", secW: "11.1",
    odIn: "41.4",  odMm: "1051",  td32: "15", tdMm: "18.9",
    mlSlbs: "6614",  mlSpsi: "120", mlSkg: "3000", mlSkpa: "830",
    mlDlbs: "6008",  mlDpsi: "120", mlDkg: "2725", mlDkpa: "830",
    liss: "146/143M", smartway: true, ms: true, "3PMSF": false,
  },
  {
    size: "11R24.5",    ply: "16", rimW: "8.25", secW: "11.4",
    odIn: "43.0",  odMm: "1093",  td32: "15", tdMm: "18.9",
    mlSlbs: "7165",  mlSpsi: "120", mlSkg: "3250", mlSkpa: "830",
    mlDlbs: "6614",  mlDpsi: "120", mlDkg: "3000", mlDkpa: "830",
    liss: "149/146M", smartway: true, ms: true, "3PMSF": false,
  },
];

export default function TireProductPage() {
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const close = useCallback(() => setActiveImg(null), []);

  useEffect(() => {
    if (!activeImg) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeImg, close]);

  return (
    <div
      className="antialiased text-white"
      style={{ backgroundColor: "var(--bg-dark)", fontFamily: "var(--font-body)" }}
    >
      <Navbar />
      <HeroSection onOpen={setActiveImg} />
      <FeatureSection onOpen={setActiveImg} />
      <SpecsSection />
      <Footer />
      {activeImg && <Lightbox src={activeImg} onClose={close} />}
    </div>
  );
}

function HeroSection({ onOpen }: { onOpen: (src: string) => void }) {
  return (
    <section
      className="tire-product-hero"
      style={{
        marginTop: "-46px",
        backgroundImage: `url(${heroBg})`,
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
        <div style={{ paddingTop: "118px", paddingBottom: "2rem" }} className="md:pb-16">
          {/* Badge */}
          <div
            style={{
              display: "inline-block",
              border: "1px solid var(--accent-yellow)",
              color: "var(--accent-yellow)",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "4px 10px",
              marginBottom: "1.5rem",
            }}
          >
            Premium Long Haul
          </div>

          {/* Title */}
          <h1
            className="tire-product-h1 uppercase"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}
          >
            <span style={{ color: "#fff" }}>NEO FUEL </span>
            <span style={{ color: "var(--accent-yellow)" }}>G3</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "0.95rem",
              lineHeight: 1.65,
              maxWidth: "32rem",
              marginBottom: "2rem",
            }}
          >
            Engineered for long-distance journeys ensuring high-speed stability,
            fuel efficiency, and endurance mile after mile.
          </p>

          {/* Divider */}
          <div
            style={{ width: "2.5rem", height: "2px", backgroundColor: "var(--accent-yellow)", marginBottom: "1.75rem" }}
          />

          {/* Bullet points */}
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
            {BULLET_POINTS.map((point) => (
              <li
                key={point}
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
              </li>
            ))}
          </ul>
        </div>

        {/* Tire image — cropped via overflow:hidden + aspectRatio */}
        <div className="flex items-center justify-center pb-10 md:py-8">
          <div
            style={{
              width: "100%",
              maxWidth: "520px",
              overflow: "hidden",
              aspectRatio: "1 / 0.83",
            }}
          >
            <img
              src={tireImg}
              alt="Aeolus Neo Fuel G3"
              onClick={() => onOpen(tireImg)}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                cursor: "zoom-in",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureSection({ onOpen }: { onOpen: (src: string) => void }) {
  return (
    <section
      className="md:pt-[100px]"
      style={{
        backgroundColor: "#000000",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <div
        className="container grid grid-cols-1 md:grid-cols-3"
        style={{ gap: "var(--col-gap)", gridTemplateRows: "auto auto auto" }}
      >
        {FEATURES.map((f) => (
          <div
            key={f.title}
            style={{
              borderTop: "1px solid #cccccc",
              display: "grid",
              gridTemplateRows: "subgrid",
              gridRow: "span 3",
              alignContent: "start",
            }}
          >
            {/* Title */}
            <h3
              className="uppercase md:pt-10"
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
            </h3>

            {/* Body */}
            <p
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
            </p>

            {/* Feature image */}
            <img
              src={f.image}
              alt={f.title}
              style={{
                width: "100%",
                display: "block",
                aspectRatio: "16 / 9",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function SpecsSection() {
  const showSmartway = SPEC_ROWS.some((r) => r.smartway);
  const showMs       = SPEC_ROWS.some((r) => r.ms);
  const showPmsf     = SPEC_ROWS.some((r) => r["3PMSF"]);
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);
  // Sub-header row covers col indices 2–15; sub-header index = col - 2
  const subHdrColor = (col: number) =>
    hoveredCol === col ? "var(--accent-yellow)" : "var(--text-muted)";
  const col = (n: number) => ({ onMouseEnter: () => setHoveredCol(n) });

  return (
    <section style={{ backgroundColor: "var(--bg-dark)" }}>
      {/* Truck background with download buttons + heading */}
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${bgTruck})`,
          backgroundSize: "cover",
          backgroundPosition: "center calc(60% + 60px)",
          minHeight: "480px",
          marginBottom: "-40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(10,10,10,0.05) 0%, rgba(10,10,10,0.55) 100%)",
          }}
        />

        {/* Download buttons */}
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "3rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: "fit-content" }}>
            {[
              { icon: <Notebook size={22} weight="light" />, label: "Product Catalog", href: "/Aeolus-TBR-catalog.pdf" },
              { icon: <FilePdf size={22} weight="light" />, label: "Product Sheet", href: `/${TIRE_SLUG}.pdf` },
              { icon: <ShieldCheck size={22} weight="light" />, label: "Warranty", href: "/Aeolus-TBR-Warranty.pdf" },
              { icon: <Image size={22} weight="light" />, label: "Tire Photo", href: tireImg, download: `${TIRE_SLUG}.png` },
            ].map(({ icon, label, href, download }) => {
              const sharedStyle: React.CSSProperties = {
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
                el.style.background = "rgba(242,201,76,0.12)";
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
              const inner = (
                <span style={{ color: "var(--accent-yellow)", display: "flex", alignItems: "center" }}>{icon}</span>
              );
              return href ? (
                <a key={label} href={href}
                  {...(download ? { download } : { target: "_blank", rel: "noopener noreferrer" })}
                  style={sharedStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                  {inner}{label}
                </a>
              ) : (
                <button key={label} style={sharedStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                  {inner}{label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Heading at bottom */}
        <div className="container" style={{ position: "relative", zIndex: 1, paddingBottom: "3.5rem" }}>
          <h2
            className="uppercase"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              color: "#fff",
            }}
          >
            TECHNICAL SPECS
          </h2>
        </div>
      </div>

      {/* Specs table */}
      <div
        style={{
          backgroundColor: "#000000",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="container" style={{ overflowX: "auto", paddingTop: "20px", paddingBottom: "0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.86rem" }}>
            <thead>
              <tr>
                <th rowSpan={2} style={thStyle}>Size</th>
                <th rowSpan={2} style={thStyle}>Ply</th>
                <th style={thStyle}>Rim<br/>Width</th>
                <th style={thStyle}>Section<br/>Width</th>
                <th colSpan={2} style={{ ...thStyle, textAlign: "left" }}>Overall<br/>Diameter</th>
                <th colSpan={2} style={{ ...thStyle, textAlign: "left" }}>Tread<br/>Depth</th>
                <th colSpan={4} style={{ ...thStyle, textAlign: "left" }}>Max. Load<br/>(Single)</th>
                <th colSpan={4} style={{ ...thStyle, textAlign: "left" }}>Max. Load<br/>(Dual)</th>
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
              {SPEC_ROWS.map((row, i) => (
                <tr
                  key={row.size}
                  className="spec-row"
                  style={{
                    borderBottom: i < SPEC_ROWS.length - 1 ? "1px solid var(--border-color)" : "none",
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
                  {showSmartway && <td style={{ ...tdStyle, textAlign: "center" }} onMouseEnter={() => setHoveredCol(null)}>
                    {row.smartway ? <span style={{ color: "var(--accent-yellow)", fontWeight: 700 }}>✓</span> : <span style={{ color: "var(--border-color)" }}>—</span>}
                  </td>}
                  {showMs && <td style={{ ...tdStyle, textAlign: "center" }} onMouseEnter={() => setHoveredCol(null)}>
                    {row.ms ? <span style={{ color: "var(--accent-yellow)", fontWeight: 700 }}>✓</span> : <span style={{ color: "var(--border-color)" }}>—</span>}
                  </td>}
                  {showPmsf && <td style={{ ...tdStyle, textAlign: "center" }} onMouseEnter={() => setHoveredCol(null)}>
                    {row["3PMSF"] ? <span style={{ color: "var(--accent-yellow)", fontWeight: 700 }}>✓</span> : <span style={{ color: "var(--border-color)" }}>—</span>}
                  </td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

const thStyle: React.CSSProperties = {
  padding: "0.9rem 0.55rem",
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
  padding: "0rem 0.55rem 0.7rem",
  textAlign: "left",
  color: "#888888",
  fontWeight: 500,
  fontSize: "0.78rem",
  letterSpacing: "0.04em",
  verticalAlign: "bottom",
  whiteSpace: "nowrap",
};

const tdStyle: React.CSSProperties = {
  padding: "0.85rem 0.55rem",
  color: "#cccccc",
  letterSpacing: "0.02em",
  verticalAlign: "middle",
  whiteSpace: "nowrap",
};

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
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
      <button
        onClick={onClose}
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
      </button>
      <img
        src={src}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "100%",
          maxHeight: "90vh",
          objectFit: "contain",
          cursor: "default",
          boxShadow: "0 0 80px rgba(0,0,0,0.8)",
        }}
      />
    </div>
  );
}
