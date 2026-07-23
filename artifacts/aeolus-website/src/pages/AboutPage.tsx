import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VP = { once: true, margin: "-80px" };

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VP,
  transition: { duration: 0.26, delay, ease: "easeOut" as const },
});

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="uppercase mb-4"
      style={{
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "0.1em",
        color: "var(--accent-yellow)",
      }}
    >
      {children}
    </div>
  );
}

function SectionHeading({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h2
      className="mb-6"
      style={{
        fontSize: "clamp(1.55rem, 3vw, 2rem)",
        fontWeight: 400,
        lineHeight: 1.15,
        letterSpacing: "-0.01em",
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

function BodyText({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ color: "var(--text-muted)", fontSize: "0.9375rem", lineHeight: 1.65, marginBottom: "1rem", ...style }}>
      {children}
    </p>
  );
}

function ImgPlaceholder({ caption, style }: { caption?: string; style?: React.CSSProperties }) {
  return (
    <div>
      <div
        style={{
          backgroundColor: "transparent", /* #1a1a1b — restore to bring back placeholder color */
          width: "100%",
          minHeight: "320px",
          ...style,
        }}
      />
      {caption && (
        <p style={{ fontSize: "0.8rem", color: "#666", marginTop: "0.6rem", lineHeight: 1.45 }}>{caption}</p>
      )}
    </div>
  );
}

/* ─── HERO ─────────────────────────────────────────────────── */
function Hero() {
  const stats = [
    { num: "1965", cap: "Dedicated to tire manufacturing for six decades" },
    { num: "150+", cap: "Countries with an Aeolus presence through local distributors" },
    { num: "3", cap: "Canadian warehouses: Montreal, Toronto, and Edmonton" },
    { num: "4", cap: "Provinces with dedicated sales coverage" },
  ];
  return (
    <section
      className="hero-section about-hero flex flex-col justify-center pb-16 md:pb-24"
      style={{
        minHeight: "520px",
        height: "760px",
        marginTop: "-46px",
        paddingTop: "110px",
        backgroundImage: "url('/about-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container w-full" style={{ position: "relative", zIndex: 1 }}>
        <motion.div {...fade(0)}>
          <Kicker>Why Aeolus Canada</Kicker>
        </motion.div>
        <motion.h1
          className="mb-6"
          style={{
            fontSize: "clamp(1.76rem, 3.99vw, 2.75rem)",
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            maxWidth: "22ch",
            color: "#fff",
          }}
          {...fade(0.06)}
        >
          Global tire manufacturing strength. Local Canadian support.
        </motion.h1>
        <motion.p
          style={{
            fontSize: "1.0625rem",
            color: "var(--text-muted)",
            lineHeight: 1.6,
            maxWidth: "52ch",
            marginBottom: "3rem",
          }}
          {...fade(0.12)}
        >
          Aeolus Tire (Canada) Inc. was established on January 1, 2024, to bring Aeolus' global tire manufacturing
          expertise, product quality, and commercial tire capabilities closer to the Canadian market.
        </motion.p>

        <div
          style={{
            borderTop: "1px solid #3a3a3a",
            paddingTop: "2rem",
            display: "flex",
            gap: "3.5rem",
            flexWrap: "wrap",
          }}
        >
          {stats.map(({ num, cap }, i) => (
            <motion.div key={num} {...fade(0.16 + i * 0.06)}>
              <div
                style={{
                  fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: "#fff",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {num}
              </div>
              <div style={{ fontSize: "0.78rem", color: "#888", maxWidth: "22ch", lineHeight: 1.45 }}>{cap}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHY AEOLUS CANADA ──────────────────────────────────────── */
function WhyAeolusCanada() {
  return (
    <section style={{ backgroundColor: "#333", borderTop: "1px solid var(--border-color)" }}>
      <div className="container">
        <div className="flex flex-col md:flex-row" style={{ minHeight: "440px", gap: "3rem", alignItems: "stretch" }}>
          <motion.div
            {...fade(0)}
            className="flex flex-col justify-center"
            style={{ flex: "0 0 60%" }}
          >
            <Kicker>Why Aeolus Canada</Kicker>
            <SectionHeading style={{ color: "#fff" }}>Built in Oakville. Backed by a global network.</SectionHeading>
            <BodyText>
              Based in Oakville, Ontario, Aeolus Canada is building a dedicated team of sales, marketing, and logistics
              professionals focused on responsive service, reliable product availability, and long-term dealer support.
            </BodyText>
            <BodyText>
              With sales representatives currently located in Ontario, Quebec, British Columbia, and Alberta, Aeolus
              Canada continues to expand its national presence across key commercial tire markets. Our logistics team
              manages container movement across global supply chains and supports local warehouse operations in Montreal,
              Toronto, and Edmonton, helping improve product accessibility and distribution efficiency for dealers across
              Canada.
            </BodyText>
            <BodyText>
              As part of the global Aeolus network, Aeolus Canada combines decades of tire manufacturing experience with
              local market knowledge. Our experienced sales team works with our Canadian dealer network to support
              commercial tire customers across TBR and OTR applications, including long haul, regional haul,
              construction, quarry, mining, industrial, and mixed-service operations.
            </BodyText>
          </motion.div>
          <motion.div
            {...fade(0.1)}
            style={{ flex: "0 0 40%", minHeight: "320px", overflow: "hidden", borderRadius: "4px" }}
          >
            <img
              src="/about-1.jpg"
              alt="Aeolus tire close-up"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top left", display: "block" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT AEOLUS ───────────────────────────────────────────── */
function AboutAeolus() {
  return (
    <section style={{ position: "relative", backgroundColor: "#0a0a0a", overflow: "hidden" }}>
      {/* Full-bleed background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/about-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Gradient overlay — fades image out left→right so text is readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 38%, rgba(10,10,10,0.20) 72%, rgba(10,10,10,0.04) 100%)",
        }}
      />

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "92px" }}>
        <motion.div {...fade(0)} style={{ maxWidth: "500px" }}>
          <Kicker>About Aeolus</Kicker>
          <SectionHeading style={{ color: "#f2f2f2" }}>Six decades of tire manufacturing.</SectionHeading>
          <BodyText>
            Aeolus has been dedicated to tire manufacturing since 1965. Founded as Henan Tire Factory, Aeolus has
            grown into a global tire manufacturer with strong expertise in OTR and TBR tire segments.
          </BodyText>
          <BodyText>
            Over the years, Aeolus has expanded its international presence, developed advanced tire technologies, and
            built partnerships with major equipment manufacturers around the world. In the early 2000s, Aeolus entered
            a new stage of growth, working with local distributors to grow our presence in more than 150 countries,
            and was listed on the Shanghai Stock Exchange.
          </BodyText>
          <BodyText>
            Today, Aeolus continues to focus on tire innovation, manufacturing quality, and sustainable development,
            supporting global customers through reliable products, advanced engineering, and strong supply capabilities.
          </BodyText>
        </motion.div>

        {/* Yellow rule — separates content from the image tail below */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            borderTop: "2px solid var(--accent-yellow)",
            marginTop: "94px",
          }}
        />
      </div>

      {/* Tail — truck image visible below the rule, History section overlaps this */}
      <div style={{ height: "260px", position: "relative", zIndex: 1 }} />
    </section>
  );
}

/* ─── HISTORY TIMELINE ───────────────────────────────────────── */
const MILESTONES = [
  { label: "Founded", year: "1965", text: "The Henan Tire Factory is founded, beginning six decades of continuous tire manufacturing." },
  { label: "First in China", year: "1987", text: "Produces China's first bias giant OTR tire, the 36.00-51." },
  { label: "Tubeless Giant", year: "1998", text: "Produces China's first bias giant OTR tubeless tire, the 36.00-51." },
  { label: "Public Listing", year: "2003", text: "Renamed Aeolus Tyre Co., Ltd. and listed on the Shanghai Stock Exchange." },
  { label: "Radial OTR", year: "2007", text: "Aeolus radial OTR tires launch to the market." },
  { label: "Capacity", year: "2011", text: "Annual radial OTR production capacity reaches 240,000 pieces." },
  { label: "OEM Partnership", year: "2012", text: "Cooperation begins with SANY." },
  { label: "OEM Supply", year: "2013", text: "Agreement signed with Volvo, supplying tires to its factory in Sweden." },
  { label: "Technology License", year: "2016", text: "Technology license contract signed with Pirelli for the industrial segment. The 46/90R57 enters the market." },
  { label: "OEM Partnership", year: "2021", text: "Cooperation begins with Develon." },
  { label: "Capacity", year: "2023", text: "Annual radial OTR production capacity reaches 320,000 pieces.", current: true },
];

function History() {
  return (
    <section className="py-20" style={{ backgroundColor: "transparent", position: "relative", zIndex: 2, marginTop: "-220px" }}>
      <div className="container">
        <motion.div {...fade(0)}>
          <Kicker>Our History</Kicker>
          <SectionHeading style={{ color: "#fff" }}>A long history of tire manufacturing innovation.</SectionHeading>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9375rem", lineHeight: 1.6, maxWidth: "60ch", marginBottom: "3rem" }}>
            Aeolus has a long history of tire manufacturing innovation, technical development, and global growth. Key
            milestones include:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1px", backgroundColor: "var(--border-color)", border: "1px solid var(--border-color)" }}>
          {MILESTONES.map(({ label, year, text, current }, i) => (
            <motion.div
              key={`${year}-${label}`}
              className="history-card"
              style={{
                padding: "2rem 2rem 1.75rem",
                backgroundColor: "#000000",
                borderTop: "2px solid transparent",
              }}
              {...fade(i * 0.04)}
            >
              <div
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                  color: "var(--accent-yellow)",
                  marginBottom: "0.25rem",
                }}
              >
                {label}
              </div>
              <div
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2rem)",
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: "#fff",
                  marginBottom: "0.75rem",
                }}
              >
                {year}
              </div>
              <p style={{ color: "#b8b8b8", fontSize: "0.9rem", lineHeight: 1.6 }}>{text}</p>
            </motion.div>
          ))}
          <div style={{ backgroundColor: "var(--bg-dark)" }} />
        </div>
      </div>
    </section>
  );
}

/* ─── OUR TECHNOLOGY ─────────────────────────────────────────── */
function OurTechnology() {
  return (
    <section className="py-20" style={{ backgroundColor: "#111112", borderTop: "1px solid var(--border-color)" }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16" style={{ alignItems: "start" }}>
          <motion.div {...fade(0)}>
            <Kicker>Our Technology</Kicker>
            <SectionHeading style={{ color: "#fff" }}>Built for demanding commercial applications.</SectionHeading>
            <BodyText>
              Aeolus tires are developed with a focus on durability, performance, and reliability in demanding commercial
              applications.
            </BodyText>
            <BodyText>
              Through advanced manufacturing technology, robust materials, optimized tread designs, and high-quality
              compounds, Aeolus delivers tire solutions built to support long service life, dependable performance, and
              consistent product quality across a wide range of operating conditions.
            </BodyText>
            <BodyText>
              Aeolus also continues to advance sustainable manufacturing practices, supporting the development of
              high-performance tire products with greater responsibility toward the environment.
            </BodyText>
          </motion.div>
          <motion.div {...fade(0.1)}>
            <ImgPlaceholder />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── CANADIAN NETWORK ───────────────────────────────────────── */
const WAREHOUSES = [
  { name: "Montreal", desc: "Warehouse operations supporting product availability and efficient distribution." },
  { name: "Toronto", desc: "Warehouse operations supporting product availability and efficient distribution." },
  { name: "Edmonton", desc: "Warehouse operations supporting product availability and efficient distribution." },
];
const PROVINCES = ["Ontario", "Quebec", "British Columbia", "Alberta"];

function CanadianNetwork() {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--bg-dark)", borderTop: "1px solid var(--border-color)" }}>
      <div className="container">
        <motion.div {...fade(0)}>
          <Kicker>Our Canadian Network</Kicker>
          <SectionHeading style={{ color: "#fff" }}>Global capability. Canadian coverage.</SectionHeading>
          <BodyText style={{ maxWidth: "68ch" }}>
            Aeolus Canada connects global tire manufacturing capability with a growing Canadian distribution and dealer
            support network.
          </BodyText>
          <BodyText style={{ maxWidth: "68ch" }}>
            With warehouse operations in Montreal, Toronto, and Edmonton, Aeolus Canada is working to improve product
            accessibility, delivery efficiency, and customer support across key Canadian markets. Combined with sales
            coverage in Ontario, Quebec, British Columbia, and Alberta, our network helps us better support commercial
            tire dealers and the fleet, construction, mining, and industrial customers they serve.
          </BodyText>
          <BodyText style={{ maxWidth: "68ch", marginBottom: "2.5rem" }}>
            As our presence in Canada continues to grow, Aeolus Canada remains focused on expanding national coverage,
            strengthening dealer support, and building long-term relationships across the Canadian commercial tire market.
          </BodyText>
        </motion.div>

        {/* Warehouse cells */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            border: "1px solid var(--border-color)",
            borderTop: "3px solid var(--accent-yellow)",
          }}
          {...fade(0.08)}
        >
          {WAREHOUSES.map(({ name, desc }, i) => (
            <div
              key={name}
              style={{
                padding: "2.25rem 1.5rem",
                borderLeft: i === 0 ? "none" : "1px solid var(--border-color)",
              }}
            >
              <div
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--accent-yellow)",
                  marginBottom: "0.5rem",
                }}
              >
                Warehouse
              </div>
              <div style={{ fontSize: "1.6rem", fontWeight: 400, color: "#fff", marginBottom: "0.4rem" }}>{name}</div>
              <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Province cells */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{
            border: "1px solid var(--border-color)",
            borderTop: "none",
            marginTop: 0,
          }}
          {...fade(0.14)}
        >
          {PROVINCES.map((prov, i) => (
            <div
              key={prov}
              style={{
                padding: "2rem 1.5rem",
                borderLeft: i === 0 ? "none" : "1px solid var(--border-color)",
              }}
            >
              <div
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "#666",
                  marginBottom: "0.25rem",
                }}
              >
                Sales Coverage
              </div>
              <div style={{ fontSize: "1.4rem", color: "#fff" }}>{prov}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── WHY CHOOSE ─────────────────────────────────────────────── */
const REASONS = [
  {
    num: "01",
    title: "Global Manufacturing Experience",
    body: "Backed by decades of tire manufacturing, technology development, and international market experience, Aeolus brings proven production capability to the Canadian commercial tire market.",
  },
  {
    num: "02",
    title: "Local Canadian Support",
    body: "Our Canadian team provides dedicated sales, marketing, logistics, and customer support, with sales coverage in Ontario, Quebec, British Columbia, and Alberta.",
  },
  {
    num: "03",
    title: "Reliable Logistics and Warehousing",
    body: "Warehouse operations in Montreal, Toronto, and Edmonton help support product availability and efficient distribution for dealers across Canada.",
  },
  {
    num: "04",
    title: "Commercial Tire Expertise",
    body: "Aeolus offers TBR and OTR tire solutions for demanding commercial applications, including long haul, regional haul, construction, quarry, mining, industrial, and mixed-service operations.",
  },
  {
    num: "05",
    title: "Application-Focused Product Development",
    body: "Our tire technology is supported by ongoing development in materials, casing design, tread patterns, and manufacturing processes to meet the needs of real operating conditions.",
  },
  {
    num: "06",
    title: "Dealer-Focused Service",
    body: "As a B2B commercial tire brand, Aeolus Canada is committed to supporting dealers with responsive communication, practical product information, and long-term partnership support.",
  },
];

function WhyChoose() {
  return (
    <section className="py-20" style={{ backgroundColor: "#111112", borderTop: "1px solid var(--border-color)" }}>
      <div className="container">
        <motion.div {...fade(0)} className="mb-10">
          <Kicker>Why Choose Aeolus Canada</Kicker>
          <SectionHeading style={{ color: "#fff" }}>6 reasons dealers work with us.</SectionHeading>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {REASONS.map(({ num, title, body }, i) => (
            <motion.div
              key={num}
              className="choose-card"
              style={{
                border: "1px solid var(--border-color)",
                backgroundColor: "#111112",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "#fff")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-color)")}
              {...fade(i * 0.06)}
            >
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.25rem",
                  fontWeight: 300,
                  letterSpacing: "0.04em",
                  color: "var(--accent-yellow)",
                  marginBottom: "0.75rem",
                }}
              >
                {num}
              </div>
              <h3
                style={{
                  fontSize: "1.0625rem",
                  fontWeight: 400,
                  color: "#fff",
                  marginBottom: "0.75rem",
                  lineHeight: 1.3,
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <div
      className="antialiased text-white"
      style={{ backgroundColor: "var(--bg-dark)", fontFamily: "var(--font-body)" }}
    >
      <Navbar />
      <Hero />
      <WhyAeolusCanada />
      <AboutAeolus />
      <History />
      <OurTechnology />
      <CanadianNetwork />
      <WhyChoose />
      <Footer />
    </div>
  );
}
