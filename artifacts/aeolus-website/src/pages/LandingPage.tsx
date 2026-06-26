import { CaretCircleRight, CaretRight } from "@phosphor-icons/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VP = { once: true, margin: "-80px" };

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
      className="hero-section flex flex-col justify-center pb-16 md:pb-24"
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
            fontSize: "clamp(2.5rem, 6.5vw, 5rem)",
            fontWeight: 600,
            lineHeight: 0.85,
            letterSpacing: "-0.04em",
          }}
        >
          {["DRIVING", "THE WORLD", "TOGETHER"].map((word, i) => (
            <motion.span
              key={word}
              className="block"
              style={{ color: i === 1 ? "var(--accent-yellow)" : "#fff" }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.38, delay: 0.1 + i * 0.1, ease: "easeOut" }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="hero-subtitle mb-2"
          style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)", maxWidth: "32rem" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.34, delay: 0.42, ease: "easeOut" }}
        >
          Uncompromising radial truck tires for the modern global fleet.
        </motion.p>
        <motion.p
          className="hero-subtitle mb-5"
          style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)", maxWidth: "32rem" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.34, delay: 0.52, ease: "easeOut" }}
        >
          Built for durability. Engineered for the long haul.
        </motion.p>
        <motion.a
          href="/tires/neo-fuel-x3"
          className="link-accent group"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.34, delay: 0.64, ease: "easeOut" }}
        >
          EXPLORE OUR TIRE LINE UP
          <CaretRight size={16} className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
        </motion.a>
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
      className="py-8 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-5"
      style={{ columnGap: "var(--col-gap)", borderTop: "1px solid var(--border-color)" }}
    >
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          className="prop-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.36, delay: i * 0.1, ease: "easeOut" }}
        >
          <motion.div
            className="prop-card-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.44, delay: 0.3 + i * 0.1, ease: "easeOut" }}
          />
          <h3
            className="uppercase mb-4"
            style={{ fontSize: "1rem", fontWeight: 600, letterSpacing: "0.02em" }}
          >
            {f.title}
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
            {f.body}
          </p>
        </motion.div>
      ))}
    </section>
  );
}

interface ProductCardProps {
  badge: string;
  name: string;
  description: string;
  specs: { label: string; value: string }[];
  delay?: number;
}

function ProductCard({ badge, name, description, specs, delay = 0 }: ProductCardProps) {
  return (
    <motion.div
      className="product-card flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VP}
      transition={{ duration: 0.38, delay, ease: "easeOut" }}
    >
      <div
        className="w-full aspect-[4/3]"
        style={{ backgroundColor: "#1a1a1b" }}
      />
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div
          style={{ color: "var(--accent-yellow)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}
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
              className="flex justify-between items-center py-2 md:py-3 uppercase"
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
    </motion.div>
  );
}

function ProductGrid() {
  const products: Omit<ProductCardProps, "delay">[] = [
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ columnGap: "var(--col-gap)" }}>
        {products.map((p, i) => (
          <ProductCard key={i} {...p} delay={i * 0.13} />
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
        {panels.map((p, i) => (
          <motion.div
            key={p.title}
            className="flex flex-col"
            style={{
              backgroundColor: "#111112",
              border: "1px solid var(--border-color)",
              borderTop: "2px solid var(--accent-yellow)",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.38, delay: i * 0.11, ease: "easeOut" }}
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AboutAeolus() {
  const sectionRef = useRef(null);
  const bgInView = useInView(sectionRef, { once: true, margin: "0px" });

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
      ref={sectionRef}
      className="about-stats-section"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Truck background — animates up from below */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 70 }}
        animate={bgInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/about-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="container"
        style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "stretch", minHeight: "480px" }}
      >
        <div className="hidden md:block" style={{ flex: "0 0 45%" }} />

        <div
          className="stats-panel"
          style={{
            flex: "1 1 55%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "48px 0 48px 0",
          }}
        >
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "32px 24px",
              }}
            >
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={value}
                  initial={{ y: 30 }}
                  whileInView={{ y: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.32, delay: i * 0.07, ease: "easeOut" }}
                >
                  <motion.div
                    style={{ marginBottom: "8px", lineHeight: 1 }}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.32, delay: i * 0.07 + 0.1, ease: "easeOut" }}
                  >
                    <CaretCircleRight size={28} color="#a18a00" />
                  </motion.div>
                  <motion.div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(1.4rem, 3vw, 2.8rem)",
                      lineHeight: 1,
                      marginBottom: "6px",
                    }}
                    initial={{ opacity: 0, y: 10, color: "#F2C94C" }}
                    whileInView={{ opacity: 1, y: 0, color: "#ffffff" }}
                    viewport={VP}
                    transition={{ duration: 0.55, delay: i * 0.07 + 0.05, ease: "easeOut" }}
                  >
                    {value}
                  </motion.div>
                  <motion.div
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.88rem",
                      lineHeight: 1.45,
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.30, delay: i * 0.07 + 0.30, ease: "easeOut" }}
                  >
                    {label}
                  </motion.div>
                </motion.div>
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
    <section className="engineering-approach pb-16 md:pb-24 mt-4" style={{ backgroundColor: "var(--bg-dark)" }}>
      <div className="container">
        <motion.div
          className="relative flex flex-col justify-between"
          style={{
            backgroundColor: "#000000",
            border: "1px solid var(--border-color)",
            minHeight: "24rem",
            padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 5vw, 4rem)",
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.40, ease: "easeOut" }}
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
            {["DISCOVER OUR", "ENGINEERING APPROACH"].map((line, i) => (
              <motion.span
                key={line}
                className="block"
                style={{ color: i === 1 ? "var(--accent-yellow)" : "#fff" }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VP}
                transition={{ duration: 0.34, delay: 0.12 + i * 0.1, ease: "easeOut" }}
              >
                {line}
              </motion.span>
            ))}
          </h2>
          <motion.p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.9rem",
              lineHeight: 1.65,
              maxWidth: "20rem",
              marginTop: "1.5rem",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.34, delay: 0.28, ease: "easeOut" }}
          >
            Each tire model undergoes structured testing
            <br />to verify durability, load handling, and
            <br />consistency under real-world conditions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
