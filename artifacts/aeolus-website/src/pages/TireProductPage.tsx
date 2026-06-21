import { useState, useEffect, useCallback } from "react";
import { Notebook, FilePdf, ShieldCheck, Image } from "@phosphor-icons/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import tireImg from "@assets/neo-fuel-g3-tire-lg_1781632744767.png";
import feature1 from "@assets/neo-fuel-g3-f1_1781632744768.jpg";
import feature2 from "@assets/neo-fuel-g3-f2_1781632744768.jpg";
import feature3 from "@assets/neo-fuel-g3-f3_1781632744768.jpg";
import bgTruck from "@assets/bg-long-haul-1_1781632744768.jpg";
import heroBg from "@assets/hero-bg-1_1781992713488.jpg";

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
    size: "11R22.5",    ply: "16", rimW: "8.25", secW: "11.1",
    odIn: "41.4",  odMm: "1051.0", tdMm: "18.9", td32: "15",
    mlSlbs: "6614", mlSpsi: "120", mlDlbs: "6008", mlDpsi: "120",
    liss: "146/143M", liss2: "148/145K", smartway: true, ms: true,
  },
  {
    size: "11R24.5",    ply: "16", rimW: "8.25", secW: "11.4",
    odIn: "43.0",  odMm: "1092.7", tdMm: "18.9", td32: "15",
    mlSlbs: "7165", mlSpsi: "120", mlDlbs: "6614", mlDpsi: "120",
    liss: "149/146M", liss2: "—", smartway: true, ms: true,
  },
  {
    size: "295/75R22.5", ply: "16", rimW: "9.00", secW: "11.7",
    odIn: "39.9",  odMm: "1014.6", tdMm: "18.9", td32: "15",
    mlSlbs: "6614", mlSpsi: "120", mlDlbs: "6008", mlDpsi: "120",
    liss: "146/143M", liss2: "—", smartway: true, ms: true,
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
        backgroundColor: "#0d0d0e",
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
              aspectRatio: "1 / 0.78",
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
        backgroundColor: "#0d0d0e",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <div
        className="container grid grid-cols-1 md:grid-cols-3"
        style={{ gap: "var(--col-gap)" }}
      >
        {FEATURES.map((f) => (
          <div
            key={f.title}
            style={{
              borderTop: "1px solid #cccccc",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Text content */}
            <div style={{ padding: "1.75rem 0 1.5rem" }} className="md:pt-10 md:pb-8">
              <h3
                className="uppercase"
                style={{
                  color: "var(--accent-yellow)",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  marginBottom: "1rem",
                  lineHeight: 1.4,
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  color: "#cccccc",
                  fontSize: "0.86rem",
                  lineHeight: 1.45,
                }}
              >
                {f.body}
              </p>
            </div>

            {/* Feature image */}
            <div style={{ marginTop: "auto" }}>
              <img
                src={f.image}
                alt={f.title}
                onClick={() => onOpen(f.image)}
                style={{
                  width: "100%",
                  display: "block",
                  aspectRatio: "16 / 9",
                  objectFit: "cover",
                  cursor: "zoom-in",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SpecsSection() {
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
              { icon: <Notebook size={22} weight="light" />, label: "Product Catalog" },
              { icon: <FilePdf size={22} weight="light" />, label: "Product Sheet" },
              { icon: <ShieldCheck size={22} weight="light" />, label: "Warranty" },
              { icon: <Image size={22} weight="light" />, label: "Tire Photo" },
            ].map(({ icon, label }) => (
              <button
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.9rem",
                  background: "rgba(10,10,10,0.5)",
                  borderTop: "1px solid rgba(255,255,255,0.2)",
                  borderRight: "1px solid rgba(255,255,255,0.2)",
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                  borderLeft: "5px solid var(--accent-yellow)",
                  color: "#cccccc",
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
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(242,201,76,0.12)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(10,10,10,0.5)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#cccccc";
                }}
              >
                <span style={{ color: "var(--accent-yellow)", display: "flex", alignItems: "center" }}>{icon}</span>
                {label}
              </button>
            ))}
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
          backgroundColor: "#0a0a0a",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="container" style={{ overflowX: "auto", paddingTop: "0", paddingBottom: "0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.86rem" }}>
            <thead>
              <tr>
                <th rowSpan={2} style={thStyle}>Size</th>
                <th rowSpan={2} style={thStyle}>Ply</th>
                <th style={thStyle}>Rim<br/>Width</th>
                <th style={thStyle}>Section<br/>Width</th>
                <th colSpan={2} style={{ ...thStyle, textAlign: "left" }}>Overall<br/>Diameter</th>
                <th colSpan={2} style={{ ...thStyle, textAlign: "left" }}>Tread<br/>Depth</th>
                <th colSpan={2} style={{ ...thStyle, textAlign: "left" }}>Max. Load<br/>(Single)</th>
                <th colSpan={2} style={{ ...thStyle, textAlign: "left" }}>Max. Load<br/>(Dual)</th>
                <th rowSpan={2} style={thStyle}>LI/SS</th>
                <th rowSpan={2} style={thStyle}>Second<br/>LI/SS</th>
                <th rowSpan={2} style={thStyle}>Smartway</th>
                <th rowSpan={2} style={thStyle}>M+S</th>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                <th style={subThStyle}>in</th>
                <th style={subThStyle}>in</th>
                <th style={subThStyle}>in</th>
                <th style={subThStyle}>mm</th>
                <th style={subThStyle}>mm</th>
                <th style={subThStyle}>32nds</th>
                <th style={subThStyle}>lbs</th>
                <th style={subThStyle}>psi</th>
                <th style={subThStyle}>lbs</th>
                <th style={subThStyle}>psi</th>
              </tr>
            </thead>
            <tbody>
              {SPEC_ROWS.map((row, i) => (
                <tr
                  key={row.size}
                  className="spec-row"
                  style={{
                    borderBottom: i < SPEC_ROWS.length - 1 ? "1px solid var(--border-color)" : "none",
                    transition: "background-color 0.15s ease",
                  }}
                >
                  <td style={tdStyle}><span style={{ color: "#fff", fontWeight: 600 }}>{row.size}</span></td>
                  <td style={tdStyle}>{row.ply}</td>
                  <td style={tdStyle}>{row.rimW}</td>
                  <td style={tdStyle}>{row.secW}</td>
                  <td style={tdStyle}>{row.odIn}</td>
                  <td style={tdStyle}>{row.odMm}</td>
                  <td style={tdStyle}>{row.td32}</td>
                  <td style={tdStyle}>{row.tdMm}</td>
                  <td style={tdStyle}>{row.mlSlbs}</td>
                  <td style={tdStyle}>{row.mlSpsi}</td>
                  <td style={tdStyle}>{row.mlDlbs}</td>
                  <td style={tdStyle}>{row.mlDpsi}</td>
                  <td style={tdStyle}>{row.liss}</td>
                  <td style={tdStyle}>{row.liss2}</td>
                  <td style={tdStyle}>
                    {row.smartway ? <span style={{ color: "var(--accent-yellow)", fontWeight: 700 }}>✓</span> : <span style={{ color: "var(--border-color)" }}>—</span>}
                  </td>
                  <td style={tdStyle}>
                    {row.ms ? <span style={{ color: "var(--accent-yellow)", fontWeight: 700 }}>✓</span> : <span style={{ color: "var(--border-color)" }}>—</span>}
                  </td>
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
