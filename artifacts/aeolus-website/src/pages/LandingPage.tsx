export default function LandingPage() {
  return (
    <div
      className="antialiased text-white"
      style={{ backgroundColor: "var(--bg-dark)", fontFamily: "var(--font-body)" }}
    >
      <div className="container">
        <Navbar />
      </div>
      <Hero />
      <div className="container">
        <FeaturePillars />
        <ProductGrid />
        <EngineeringCapabilities />
      </div>
      <EngineeringApproach />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav
      className="flex justify-between items-center sticky top-0 z-50"
      style={{
        backgroundColor: "var(--bg-dark)",
        borderBottom: "1px solid var(--border-color)",
        padding: "10px 0",
      }}
    >
      <a href="#" aria-label="Aeolus" className="flex items-center">
        <AeolusLogo />
      </a>
      <div className="flex items-center gap-12">
        <NavLinks />
        <button className="btn-primary">SEARCH</button>
      </div>
    </nav>
  );
}

function AeolusLogo() {
  return (
    <img
      src="/aeolus-logo.png"
      alt="Aeolus"
      className="h-[26px] w-auto"
    />
  );
}

function NavLinks() {
  const links = ["HOME", "TIRES", "ABOUT", "MEDIA", "CONTACT"];
  return (
    <ul className="flex items-center gap-10">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="nav-link">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Hero() {
  return (
    <section className="hero-section flex flex-col justify-center pb-24 pt-16" style={{ height: "720px" }}>
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
          style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "32rem" }}
        >
          Uncompromising radial truck tires for the modern global fleet.
        </p>
        <p
          className="mb-5"
          style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "32rem" }}
        >
          Built for durability. Engineered for the long haul.
        </p>
        <a href="#" className="link-accent group">
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
      className="py-20 grid grid-cols-3 gap-16"
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
      <div className="p-8 flex flex-col flex-1 relative">
        <div
          className="absolute top-8 right-8"
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
    <section className="py-20" style={{ borderTop: "1px solid var(--border-color)" }}>
      <div className="grid grid-cols-3 gap-6">
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
    <section className="pb-20" style={{ borderTop: "1px solid var(--border-color)" }}>
      <div className="pt-20 grid grid-cols-2 gap-6">
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
            <div className="p-10 flex-1">
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

function EngineeringApproach() {
  return (
    <section className="pb-24 mt-4" style={{ backgroundColor: "var(--bg-dark)" }}>
      <div className="container">
      <div
        className="relative flex flex-col justify-between"
        style={{
          backgroundColor: "#0d0d0e",
          border: "1px solid var(--border-color)",
          minHeight: "36rem",
          padding: "3.5rem 4rem",
        }}
      >
        <h2
          className="uppercase"
          style={{
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
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

function Footer() {
  return (
    <footer
      className="py-16"
      style={{ backgroundColor: "var(--bg-dark)", borderTop: "1px solid var(--border-color)" }}
    >
      <div className="container">
      <div className="grid grid-cols-4 gap-12">
        <div>
          <div className="mb-4">
            <img src="/aeolus-logo.png" alt="Aeolus" className="h-[22px] w-auto" />
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>
            Engineered for the long haul. Premium radial truck tires delivering uncompromising
            quality and retreadability.
          </p>
        </div>
        <div>
          <h4
            className="uppercase mb-5"
            style={{ fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.05em" }}
          >
            Tire Categories
          </h4>
          <FooterLinks items={["Premium TBR", "Standard TBR", "OTR", "Catalog"]} />
        </div>
        <div>
          <h4
            className="uppercase mb-5"
            style={{ fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.05em" }}
          >
            Company
          </h4>
          <FooterLinks items={["Tires", "About", "Media", "Contact", "Search"]} />
        </div>
        <div>
          <h4
            className="uppercase mb-5"
            style={{ fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.05em" }}
          >
            Connect with Us
          </h4>
          <FooterLinks items={["X", "LinkedIn", "Facebook"]} />
        </div>
      </div>
      </div>
    </footer>
  );
}

function FooterLinks({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item}>
          <a
            href="#"
            className="footer-link"
            style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}
