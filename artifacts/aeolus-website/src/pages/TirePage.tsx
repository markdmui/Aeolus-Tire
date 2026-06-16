import { useState } from "react";
import { Link } from "wouter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Category = "ALL" | "LONG HAUL" | "REGIONAL" | "MIXED SERVICE" | "OTR";

interface Tire {
  model: string;
  badge: string;
  category: Category;
  position: string;
  description: string;
  specs: { label: string; value: string }[];
  slug?: string;
}

const TIRES: Tire[] = [
  {
    model: "NEO FUEL G3",
    badge: "BEST SELLER",
    category: "LONG HAUL",
    position: "STEER",
    description: "Premium long-haul steer tire engineered for maximum fuel efficiency and even wear over high-mileage routes.",
    specs: [
      { label: "Pattern", value: "3D Sipe & Block" },
      { label: "Tread Profile", value: "Wide" },
      { label: "Compound", value: "Low RRC" },
      { label: "Load Index", value: "148/145L" },
    ],
    slug: "neo-fuel-g3",
  },
  {
    model: "NEO FUEL S3",
    badge: "NEW",
    category: "LONG HAUL",
    position: "DRIVE",
    description: "Drive-axle companion to the D3 line. Deep lug design maintains traction while controlling heat buildup on extended runs.",
    specs: [
      { label: "Pattern", value: "Deep Lug" },
      { label: "Tread Profile", value: "Wide" },
      { label: "Compound", value: "Low RRC" },
      { label: "Load Index", value: "149/146L" },
    ],
  },
  {
    model: "NEO FUEL T3",
    badge: "BEST SELLER",
    category: "LONG HAUL",
    position: "TRAILER",
    description: "Trailer axle tire with stabilized shoulder blocks for reduced irregular wear and longer retread life.",
    specs: [
      { label: "Pattern", value: "Rib" },
      { label: "Tread Profile", value: "Standard" },
      { label: "Compound", value: "Low RRC" },
      { label: "Load Index", value: "148/145M" },
    ],
  },
  {
    model: "HN257",
    badge: "",
    category: "LONG HAUL",
    position: "STEER",
    description: "High-mileage steer tire with optimized contact patch geometry for consistent handling across highway conditions.",
    specs: [
      { label: "Pattern", value: "4-Rib" },
      { label: "Tread Profile", value: "Wide" },
      { label: "Compound", value: "Standard" },
      { label: "Load Index", value: "146/143L" },
    ],
  },
  {
    model: "HN268",
    badge: "BEST SELLER",
    category: "REGIONAL",
    position: "STEER",
    description: "Regional steer tire built for mixed highway and urban delivery routes, with reinforced sidewalls for curb impact resistance.",
    specs: [
      { label: "Pattern", value: "3-Rib" },
      { label: "Tread Profile", value: "Standard" },
      { label: "Compound", value: "Standard" },
      { label: "Load Index", value: "144/142L" },
    ],
  },
  {
    model: "HN208",
    badge: "",
    category: "REGIONAL",
    position: "DRIVE",
    description: "Regional drive tire with aggressive shoulder lug for reliable traction in start-stop urban and suburban operations.",
    specs: [
      { label: "Pattern", value: "Lug & Rib" },
      { label: "Tread Profile", value: "Standard" },
      { label: "Compound", value: "Standard" },
      { label: "Load Index", value: "146/143L" },
    ],
  },
  {
    model: "HN228",
    badge: "NEW",
    category: "MIXED SERVICE",
    position: "DRIVE",
    description: "Versatile all-position tire suited for fleets operating across highway, regional, and light off-road service without tire changes.",
    specs: [
      { label: "Pattern", value: "All-Terrain Rib" },
      { label: "Tread Profile", value: "Wide" },
      { label: "Compound", value: "HD Grade" },
      { label: "Load Index", value: "146/143K" },
    ],
  },
  {
    model: "HN807",
    badge: "",
    category: "MIXED SERVICE",
    position: "STEER/DRIVE",
    description: "Heavy-duty all-position tire for demanding mixed-surface applications including construction sites and unpaved access roads.",
    specs: [
      { label: "Pattern", value: "Block & Lug" },
      { label: "Tread Profile", value: "Deep" },
      { label: "Compound", value: "HD Grade" },
      { label: "Load Index", value: "148/145K" },
    ],
  },
  {
    model: "RL401",
    badge: "NEW",
    category: "OTR",
    position: "ALL POSITION",
    description: "Off-the-road radial designed for mining haul trucks and quarry operations, with extra-thick sidewalls and puncture-resistant belts.",
    specs: [
      { label: "Pattern", value: "E-3/L-3 Block" },
      { label: "Tread Profile", value: "Deep Cut" },
      { label: "Compound", value: "Cut Resistant" },
      { label: "Load Index", value: "175F" },
    ],
  },
  {
    model: "GH718",
    badge: "",
    category: "OTR",
    position: "ALL POSITION",
    description: "Grader and heavy equipment tire for infrastructure and earthmoving fleets. Designed for maximum load capacity on rough terrain.",
    specs: [
      { label: "Pattern", value: "G-2/L-2 Traction" },
      { label: "Tread Profile", value: "Wide Lug" },
      { label: "Compound", value: "HD Cut Resistant" },
      { label: "Load Index", value: "172F" },
    ],
  },
];

const CATEGORIES: Category[] = ["ALL", "LONG HAUL", "REGIONAL", "MIXED SERVICE", "OTR"];

export default function TirePage() {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");

  const filtered = activeCategory === "ALL"
    ? TIRES
    : TIRES.filter((t) => t.category === activeCategory);

  return (
    <div
      className="antialiased text-white"
      style={{ backgroundColor: "var(--bg-dark)", fontFamily: "var(--font-body)" }}
    >
      <div className="container">
        <Navbar />
      </div>

      {/* Page Header */}
      <section
        style={{
          borderBottom: "1px solid var(--border-color)",
          paddingTop: "72px",
          paddingBottom: "56px",
          backgroundColor: "#0d0d0e",
        }}
      >
        <div className="container">
          <p
            className="uppercase mb-3"
            style={{ color: "var(--accent-yellow)", fontSize: "0.8rem", letterSpacing: "0.12em", fontWeight: 600 }}
          >
            Truck &amp; Bus Radial
          </p>
          <h1
            className="uppercase"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              fontWeight: 600,
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              marginBottom: "1.25rem",
            }}
          >
            <span className="block text-white">TIRE</span>
            <span className="block" style={{ color: "var(--accent-yellow)" }}>LINEUP</span>
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1rem",
              maxWidth: "36rem",
              lineHeight: 1.65,
            }}
          >
            Engineered for every axle position and application — from long-haul highway to off-road
            extraction. Select a category to narrow your search.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section
        style={{
          borderBottom: "1px solid var(--border-color)",
          backgroundColor: "var(--bg-dark)",
          position: "sticky",
          top: "49px",
          zIndex: 40,
        }}
      >
        <div className="container">
          <div className="flex items-center gap-0" style={{ overflowX: "auto" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "1rem 1.5rem",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  background: "none",
                  border: "none",
                  borderBottom: activeCategory === cat
                    ? "2px solid var(--accent-yellow)"
                    : "2px solid transparent",
                  color: activeCategory === cat ? "var(--accent-yellow)" : "var(--text-muted)",
                  cursor: "pointer",
                  transition: "color 0.2s ease, border-color 0.2s ease",
                  fontFamily: "var(--font-body)",
                  whiteSpace: "nowrap",
                }}
              >
                {cat}
                {cat !== "ALL" && (
                  <span
                    style={{
                      marginLeft: "8px",
                      fontSize: "0.68rem",
                      opacity: 0.6,
                    }}
                  >
                    ({TIRES.filter((t) => t.category === cat).length})
                  </span>
                )}
              </button>
            ))}
            <div style={{ marginLeft: "auto", padding: "0.9rem 0" }}>
              <span style={{ color: "var(--text-muted)", fontSize: "0.78rem", letterSpacing: "0.04em" }}>
                {filtered.length} {filtered.length === 1 ? "TIRE" : "TIRES"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tire Grid */}
      <section className="py-16">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
          >
            {filtered.map((tire) => (
              <TireCard key={tire.model} tire={tire} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function TireCard({ tire }: { tire: Tire }) {
  return (
    <div className="product-card flex flex-col">
      {/* Image placeholder */}
      <div
        className="w-full"
        style={{
          backgroundColor: "#111112",
          aspectRatio: "4 / 3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid var(--border-color)",
          position: "relative",
        }}
      >
        {/* Category tag */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            fontSize: "0.65rem",
            letterSpacing: "0.08em",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "3px 8px",
            border: "1px solid var(--border-color)",
          }}
        >
          {tire.category}
        </div>
        {/* Tire image area — placeholder until real images are added */}
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            border: "4px solid var(--border-color)",
            opacity: 0.2,
          }}
        />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1 relative">
        {tire.badge && (
          <div
            style={{
              position: "absolute",
              top: "2rem",
              right: "2rem",
              color: "var(--accent-yellow)",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {tire.badge}
          </div>
        )}

        <div
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.08em",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            marginBottom: "0.4rem",
          }}
        >
          {tire.position}
        </div>

        <h3
          className="uppercase"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.35rem",
            fontWeight: 600,
            letterSpacing: "0.02em",
            marginBottom: "0.5rem",
          }}
        >
          {tire.model}
        </h3>

        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.88rem",
            lineHeight: 1.55,
            marginBottom: "1.5rem",
            flex: 1,
          }}
        >
          {tire.description}
        </p>

        <ul style={{ borderTop: "1px solid var(--border-color)" }}>
          {tire.specs.map((s) => (
            <li
              key={s.label}
              className="flex justify-between items-center py-3 uppercase"
              style={{
                borderBottom: "1px solid var(--border-color)",
                fontSize: "0.78rem",
                color: "var(--text-muted)",
                letterSpacing: "0.05em",
              }}
            >
              <span>{s.label}</span>
              <span style={{ fontWeight: 600, color: "#fff" }}>{s.value}</span>
            </li>
          ))}
        </ul>

        {tire.slug ? (
          <Link
            href={`/tires/${tire.slug}`}
            className="btn-primary mt-6"
            style={{ width: "100%", textAlign: "center", display: "block" }}
          >
            View Specs
          </Link>
        ) : (
          <button
            className="btn-primary mt-6"
            style={{ width: "100%", textAlign: "center" }}
            disabled
          >
            Coming Soon
          </button>
        )}
      </div>
    </div>
  );
}
