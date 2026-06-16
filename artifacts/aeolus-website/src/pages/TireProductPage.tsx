import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import tireImg from "@assets/neo-fuel-g3-tire-lg_1781632744767.png";
import feature1 from "@assets/neo-fuel-g3-f1_1781632744768.jpg";
import feature2 from "@assets/neo-fuel-g3-f2_1781632744768.jpg";
import feature3 from "@assets/neo-fuel-g3-f3_1781632744768.jpg";
import bgTruck from "@assets/bg-long-haul-1_1781632744768.jpg";

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
  return (
    <div
      className="antialiased text-white"
      style={{ backgroundColor: "var(--bg-dark)", fontFamily: "var(--font-body)" }}
    >
      <div className="container">
        <Navbar />
      </div>

      <HeroSection />
      <FeatureSection />
      <SpecsSection />

      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section style={{ backgroundColor: "#0d0d0e" }}>
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          minHeight: "520px",
          gap: "3rem",
        }}
      >
        {/* Left — text content */}
        <div style={{ padding: "72px 0 64px" }}>
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
            className="uppercase"
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
              color: "rgba(255,255,255,0.55)",
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

        {/* Right — tire image */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem 0",
          }}
        >
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
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.7))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  return (
    <section
      style={{
        backgroundColor: "#0d0d0e",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "calc(3rem - 10px)",
        }}
      >
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            style={{
              borderTop: "1px solid #cccccc",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Text content */}
            <div style={{ padding: "2.5rem 0 2rem" }}>
              <h3
                className="uppercase"
                style={{
                  color: "var(--accent-yellow)",
                  fontSize: "0.72rem",
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
                style={{
                  width: "100%",
                  display: "block",
                  aspectRatio: "16 / 9",
                  objectFit: "cover",
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
      {/* Truck background with heading */}
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${bgTruck})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          minHeight: "340px",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        {/* Dark gradient overlay — heavier at bottom */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.82) 100%)",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingBottom: "3.5rem" }}>
          <h2
            className="uppercase"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
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
          borderTop: "1px solid var(--border-color)",
        }}
      >
        <div className="container" style={{ overflowX: "auto", paddingTop: "0", paddingBottom: "0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.78rem" }}>
            <thead>
              {/* Row 1 – main column labels */}
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
              {/* Row 2 – unit sub-labels */}
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
                  style={{
                    borderBottom: i < SPEC_ROWS.length - 1 ? "1px solid var(--border-color)" : "none",
                    transition: "background-color 0.15s ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLTableRowElement).style.backgroundColor = "#111112"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLTableRowElement).style.backgroundColor = "transparent"; }}
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
  color: "var(--text-muted)",
  fontWeight: 600,
  fontSize: "0.7rem",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  verticalAlign: "bottom",
  whiteSpace: "nowrap",
};

const subThStyle: React.CSSProperties = {
  padding: "0.3rem 0.55rem 0.7rem",
  textAlign: "left",
  color: "#555",
  fontWeight: 500,
  fontSize: "0.68rem",
  letterSpacing: "0.04em",
  verticalAlign: "bottom",
  whiteSpace: "nowrap",
};

const tdStyle: React.CSSProperties = {
  padding: "0.85rem 0.55rem",
  color: "var(--text-muted)",
  letterSpacing: "0.02em",
  verticalAlign: "middle",
  whiteSpace: "nowrap",
};
