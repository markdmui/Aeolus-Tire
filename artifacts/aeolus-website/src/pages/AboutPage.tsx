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
        minHeight: "680px",
        marginTop: "-46px",
        paddingTop: "110px",
        backgroundImage: "url('/about-bg-01.jpg')",
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
          className="stats-row"
          style={{
            borderTop: "1px solid #3a3a3a",
            paddingTop: "2rem",
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
        <div
          className="flex flex-col md:flex-row"
          style={{ minHeight: "440px", gap: "3rem", alignItems: "stretch" }}
        >
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
            style={{
              flex: "0 0 40%",
              minHeight: "320px",
              overflow: "hidden",
            }}
          >
            <img
              src="/about-1.jpg"
              alt="Aeolus tire close-up"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top left",
                display: "block",
              }}
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
    <section
      className="py-20"
      style={{
        borderTop: "1px solid var(--border-color)",
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0) 100%), url('/about-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <motion.div {...fade(0)} style={{ maxWidth: "50ch" }}>
          <Kicker>About Aeolus</Kicker>
          <SectionHeading style={{ color: "#fff" }}>Six decades of tire manufacturing.</SectionHeading>
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
      <Footer />
    </div>
  );
}
