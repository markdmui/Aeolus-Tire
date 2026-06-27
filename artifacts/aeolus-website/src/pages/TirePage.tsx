import { Link } from "wouter";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
const PHOTO = (f: string) => `${BASE}/tires/Tire-Photos/${f}`;
const VP = { once: true, margin: "-40px" };

interface TireEntry {
  name: string;
  photo: string;
  labelYellow: string;
  labelWhite: string;
  subtitle: string;
  slug: string;
  hasAlt?: boolean;
}

interface CategoryGroup {
  tires: TireEntry[];
}

function splitName(name: string): [string, string] {
  const u = name.toUpperCase();
  const s = u.lastIndexOf(" ");
  if (s > 0) return [u.slice(0, s), u.slice(s + 1)];
  const m = u.match(/^([A-Z]+)(\d.*)$/);
  return m ? [m[1], m[2]] : [u, ""];
}

const TEMPLATE: TireEntry = { name: "Neo Fuel S", photo: "Neo-Fuel-S.png", labelYellow: "NEO SERIES", labelWhite: "LONG HAUL", slug: "neo-fuel-x3", subtitle: "Steer tire for long haul use with low rolling resistance, excellent stability and long life span." };

const GROUPS: CategoryGroup[] = [
  {
    tires: [TEMPLATE, TEMPLATE, TEMPLATE, TEMPLATE, TEMPLATE, TEMPLATE],
  },
];

export default function TirePage() {
  return (
    <div
      className="antialiased"
      style={{ backgroundColor: "#000", color: "#fff", fontFamily: "var(--font-body)" }}
    >
      <Navbar />

      <section style={{ paddingTop: "calc(49px + 4rem)", paddingBottom: "3rem" }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="uppercase"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
            }}
          >
            <span style={{ color: "var(--accent-yellow)" }}>TIRE</span>
            {" "}LINEUP
          </motion.h1>
        </div>
      </section>

      <section style={{ paddingBottom: "5rem" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {GROUPS.map((group, gi) => (
            <GroupSection key={gi} group={group} groupIndex={gi} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function GroupSection({ group, groupIndex }: { group: CategoryGroup; groupIndex: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VP}
      transition={{ duration: 0.22, ease: "easeOut" }}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        border: "none",
        backgroundColor: "transparent",
        gap: "1px",
      }}
    >
      {group.tires.map((tire, ti) => (
        <TireCard key={`${tire.slug}-${ti}`} tire={tire} delay={ti * 0.04} />
      ))}
    </motion.div>
  );
}

function TireCard({ tire, delay }: { tire: TireEntry; delay: number }) {
  const [prefix, suffix] = splitName(tire.name);
  const isStandard = !tire.labelYellow;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={VP}
      transition={{ duration: 0.20, delay, ease: "easeOut" }}
      style={{ backgroundColor: "#080808" }}
      className="lineup-card"
    >
      <Link href={`/tires/${tire.slug}`} style={{ display: "block", textDecoration: "none", color: "inherit", height: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <div style={{ padding: "16px 0.8rem 1px" }}>
            <p
              className="uppercase"
              style={{
                fontSize: "clamp(0.78rem, 1.2vw, 0.92rem)",
                fontWeight: 700,
                letterSpacing: "0.02em",
                lineHeight: 1.15,
                color: "#fff",
              }}
            >
              <span style={{ color: "var(--accent-yellow)" }}>{prefix}</span>
              {suffix && <>{" "}<span style={{ color: "#fff" }}>{suffix}</span></>}
            </p>
          </div>

          <div
            style={{
              width: "100%",
              aspectRatio: "4 / 3",
              backgroundColor: "transparent",
              overflow: "hidden",
              flexShrink: 0,
              position: "relative",
            }}
          >
            <img
              src={PHOTO(tire.photo)}
              alt={tire.name}
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                transform: "scale(1.815) translateY(-2%) translateX(10%)",
                transformOrigin: "top center",
                transition: "transform 0.22s ease",
              }}
              className="lineup-card-img"
            />
          </div>

          <div style={{ padding: "0.6rem 0.8rem 0.85rem", flex: 1 }}>
            <p
              className="uppercase"
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.09em",
                marginBottom: "0.35rem",
                lineHeight: 1.3,
              }}
            >
              {tire.labelYellow && (
                <span style={{ color: "var(--accent-yellow)" }}>{tire.labelYellow} </span>
              )}
              <span style={{ color: isStandard ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.75)" }}>
                {tire.labelWhite}
              </span>
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.73rem",
                lineHeight: 1.45,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical" as const,
                overflow: "hidden",
              }}
            >
              {tire.subtitle}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
