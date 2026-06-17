import { CaretCircleRight } from "@phosphor-icons/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div
      className="antialiased text-white"
      style={{ backgroundColor: "var(--bg-dark)", fontFamily: "var(--font-body)" }}
    >
      <Navbar />
      <Hero />
      <div className="container">
        <FeaturePillars />
        <ProductGrid />
        <EngineeringCapabilities />
      </div>
      <AboutAeolus />
      <EngineeringApproach />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section
      className="hero-section flex flex-col justify-center pb-6 md:pb-24"
      style={{
        minHeight: "520px",
        height: "720px",
        marginTop: "-46px",
        paddingTop: "110px",
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container w-full">
        <h1
          className="uppercase mb-4"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(2.5rem, 6.5vw, 8rem)",
            fontWeight: 600,
            lineHeight: 0.85,
            letterSpacing: "-0.04em",
          }}
        >
          <span className="block text-white">DRIVING</span>
          <span className="block" style={{ color: "var(--accent-yellow)" }}>THE WORLD</span>
          <span className="block text-white">TOGETHER</span>
        </h1>

        <p
          className="mb-2"
          style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)", maxWidth: "32rem" }}
        >
          Uncompromising radial truck tires for the modern global fleet.
        </p>
        <p
          className="mb-5"
          style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)", maxWidth: "32rem" }}
        >
          Built for durability. Engineered for the long haul.
        </p>
        <a href="/tires/neo-fuel-g3" className="link-accent group">
          EXPLORE OUR TIRE LINE UP
          <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}

function FeaturePillars() {
  const features = [
    {
      title: "QUALITY ENGINEERING",
      body: "Precision compounding and optimized footprint mechanics ensure even wear and radically reduced rolling resistance across diverse terrains.",
    },
    {
      title: "MAXIMUM DURABILITY",
      body: "Heavy-duty casing construction designed to withstand severe load stresses, maximizing uptime for commercial demands.",
    },
    {
      title: "ELITE RETREADABILITY",
      body: "High-integrity belts and premium bead construction guarantee multiple life cycles, delivering a superior cost-per-mile ratio.",
    },
  ];

  return (
    <section
      className="pt-[104px] pb-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16"
      style={{ borderTop: "1px solid var(--border-color)" }}
    >
      {features.map((f) => (
        <div key={f.title} className="prop-card">
          <h3
            className="uppercase mb-4"
            style={{ fontSize: "1rem", fontWeight: 600, letterSpacing: "0.02em" }}
          >
            {f.title}
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
            {f.body}
          </p>
        </div>
      ))}
    </section>
  );
}

interface ProductCardProps {
  badge: string;
  name: string;
  description: string;
  specs: { label: string; value: string }[];
}

function ProductCard({ badge, name, description, specs }: ProductCardProps) {
  return (
    <div className="product-card flex flex-col">
      <div
        className="w-full aspect-[4/3]"
        style={{ backgroundColor: "#1a1a1b" }}
      />
      <div className="p-6 md:p-8 flex flex-col flex-1 relative">
        <div
          className="absolute top-6 right-6 md:top-8 md:right-8"
          style={{ color: "var(--accent-yellow)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
        >
          {badge}
        </div>
        <h3
          className="uppercase mb-2"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.4rem", fontWeight: 600, letterSpacing: "0.02em" }}
        >
          {name}
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.25rem" }}>
          {description}
        </p>
        <ul className="mt-6" style={{ borderTop: "1px solid var(--border-color)" }}>
          {specs.map((s) => (
            <li
              key={s.label}
              className="flex justify-between items-center py-3 uppercase"
              style={{
                borderBottom: "1px solid var(--border-color)",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                letterSpacing: "0.05em",
              }}
            >
              <span>{s.label}</span>
              <span className="font-semibold text-white">{s.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProductGrid() {
  const products: ProductCardProps[] = [
    {
      badge: "BEST SELLER",
      name: "NEO FUEL D3",
      description: "Long-haul efficiency with dependable traction.",
      specs: [
        { label: "Pattern", value: "3D Sipe & Block" },
        { label: "Tread Profile", value: "Wide" },
        { label: "Compound", value: "Low RRC" },
        { label: "Application", value: "Long Haul" },
      ],
    },
    {
      badge: "BEST SELLER",
      name: "NEO FUEL D3",
      description: "Long-haul efficiency with dependable traction.",
      specs: [
        { label: "Pattern", value: "3D Sipe & Block" },
        { label: "Tread Profile", value: "Wide" },
        { label: "Compound", value: "Low RRC" },
        { label: "Application", value: "Long Haul" },
      ],
    },
    {
      badge: "BEST SELLER",
      name: "NEO FUEL D3",
      description: "Long-haul efficiency with dependable traction.",
      specs: [
        { label: "Pattern", value: "3D Sipe & Block" },
        { label: "Tread Profile", value: "Wide" },
        { label: "Compound", value: "Low RRC" },
        { label: "Application", value: "Long Haul" },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20" style={{ borderTop: "1px solid var(--border-color)" }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}

function EngineeringCapabilities() {
  const panels = [
    {
      title: "ENGINEERING & DESIGN CONTROL",
      body: "Products are developed with clear structural logic, application requirements, and performance objectives — not trial-and-error sourcing.",
    },
    {
      title: "RAW MATERIAL SOURCING",
      body: "Long-term supplier partnerships allow for stable processes, controlled materials, and repeatable quality over time.",
    },
  ];

  return (
    <section className="pb-16 md:pb-20" style={{ borderTop: "1px solid var(--border-color)" }}>
      <div className="pt-16 md:pt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        {panels.map((p) => (
          <div
            key={p.title}
            className="flex flex-col"
            style={{
              backgroundColor: "#111112",
              border: "1px solid var(--border-color)",
              borderTop: "2px solid var(--accent-yellow)",
            }}
          >
            <div className="p-8 md:p-10 flex-1">
              <h3
                className="uppercase mb-4"
                style={{ fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.02em" }}
              >
                {p.title}
              </h3>
              <div
                className="mb-5"
                style={{ width: "2rem", height: "2px", backgroundColor: "var(--accent-yellow)" }}
              />
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                {p.body}
              </p>
            </div>
            <div className="w-full" style={{ backgroundColor: "#1a1a1b", height: "12rem" }} />
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutAeolus() {
  const stats = [
    { value: "1000+", label: "Specifications and varieties of tires" },
    { value: "500",   label: "China's top 500 companies 15 consecutive years" },
    { value: "800K",  label: "Annual production of OTR tires" },
    { value: "7M",    label: "Annual production of Truck & Bus tires" },
    { value: "140+",  label: "Best selling in global regions and countries" },
    { value: "233",   label: "Patents" },
  ];

  return (
    <section
      style={{
        backgroundImage: "url('/about-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Mobile: full-width stats panel with dark overlay */}
      {/* Desktop: left half empty (shows truck), right half holds stats */}
      <div
        className="container"
        style={{ display: "flex", alignItems: "stretch", minHeight: "480px" }}
      >
        {/* Left spacer — desktop only, lets the truck photo show through */}
        <div className="hidden md:block" style={{ flex: "0 0 45%" }} />

        {/* Stats panel */}
        <div
          style={{
            flex: "1 1 55%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "48px 0 48px 0",
          }}
        >
          {/* On mobile add a semi-transparent backdrop so text is readable over the image */}
          <div
            className="md:bg-transparent rounded-sm"
            style={{
              backgroundColor: "rgba(0,0,0,0.65)",
              padding: "2rem 1.5rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "32px 24px",
              }}
            >
              {stats.map(({ value, label }) => (
                <div key={value}>
                  <div style={{ marginBottom: "8px", lineHeight: 1 }}>
                    <CaretCircleRight size={28} color="#a18a00" />
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(1.4rem, 3vw, 2.8rem)",
                      color: "#ffffff",
                      lineHeight: 1,
                      marginBottom: "6px",
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.78rem",
                      lineHeight: 1.45,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EngineeringApproach() {
  return (
    <section className="pb-16 md:pb-24 mt-4" style={{ backgroundColor: "var(--bg-dark)" }}>
      <div className="container">
        <div
          className="relative flex flex-col justify-between"
          style={{
            backgroundColor: "#0d0d0e",
            border: "1px solid var(--border-color)",
            minHeight: "24rem",
            padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 5vw, 4rem)",
          }}
        >
          <h2
            className="uppercase"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            <span className="block text-white">DISCOVER OUR</span>
            <span className="block" style={{ color: "var(--accent-yellow)" }}>ENGINEERING APPROACH</span>
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.9rem",
              lineHeight: 1.65,
              maxWidth: "20rem",
              marginTop: "1.5rem",
            }}
          >
            Each tire model undergoes structured testing
            <br />to verify durability, load handling, and
            <br />consistency under real-world conditions.
          </p>
        </div>
      </div>
    </section>
  );
}
