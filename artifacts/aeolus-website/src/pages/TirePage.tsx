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

const GROUPS: CategoryGroup[] = [
  {
    tires: [
      { name: "Neo Fuel S",  photo: "Neo-Fuel-S.png",  labelYellow: "NEO SERIES", labelWhite: "LONG HAUL", slug: "neo-fuel-s",      subtitle: "Steer tire for long haul use with low rolling resistance, excellent stability and long life span." },
      { name: "Neo Fuel D",  photo: "Neo-Fuel-D.png",  labelYellow: "NEO SERIES", labelWhite: "LONG HAUL", slug: "neo-fuel-d",      subtitle: "Drive tire with low rolling resistance and enhanced fuel efficiency for long-haul use." },
      { name: "Neo Fuel D2", photo: "Neo-Fuel-D2.png", labelYellow: "NEO SERIES", labelWhite: "LONG HAUL", slug: "neo-fuel-d2",     subtitle: "Drive tire for long haul use with low rolling resistance and superior fuel efficiency.", hasAlt: true },
      { name: "Neo Fuel D3", photo: "Neo-Fuel-D3.png", labelYellow: "NEO SERIES", labelWhite: "LONG HAUL", slug: "neo-fuel-d3",     subtitle: "Drive tire for long haul with wide base compound, low rolling resistance and extended mileage." },
      { name: "Neo Fuel T+", photo: "Neo-Fuel-T+.png", labelYellow: "NEO SERIES", labelWhite: "LONG HAUL", slug: "neo-fuel-t-plus", subtitle: "Trailer tire for long haul use, providing superior stability and safety at high speed." },
      { name: "Neo Fuel T2", photo: "Neo-Fuel-T2.png", labelYellow: "NEO SERIES", labelWhite: "LONG HAUL", slug: "neo-fuel-t2",     subtitle: "Trailer tire for long haul use with excellent tire life and superior fuel efficiency.", hasAlt: true },
      { name: "Neo Fuel T3", photo: "Neo-Fuel-T3.png", labelYellow: "NEO SERIES", labelWhite: "LONG HAUL", slug: "neo-fuel-t3",     subtitle: "Trailer tire for long haul use with excellent fuel efficiency and superior tire life." },
      { name: "Neo Fuel G3", photo: "Neo-Fuel-G3.png", labelYellow: "NEO SERIES", labelWhite: "LONG HAUL", slug: "neo-fuel-g3",     subtitle: "Trailer tire with excellent stability, long lifespan and superior fuel efficiency." },
    ],
  },
  {
    tires: [
      { name: "Neo Allroads S",  photo: "Neo-Allroads-S.png",  labelYellow: "NEO SERIES", labelWhite: "REGIONAL", slug: "neo-allroads-s",      subtitle: "Steer tire for regional use with improved fuel economy, excellent wet performance and retreadability." },
      { name: "Neo Allroads S+", photo: "Neo-Allroads-S+.png", labelYellow: "NEO SERIES", labelWhite: "REGIONAL", slug: "neo-allroads-s-plus", subtitle: "Steer tire for regional use with enhanced wet performance and excellent retreadability." },
      { name: "Neo Allroads D",  photo: "Neo-Allroads-D.png",  labelYellow: "NEO SERIES", labelWhite: "REGIONAL", slug: "neo-allroads-d",      subtitle: "Drive tire for regional use with enhanced traction on wet roads and improved fuel economy." },
      { name: "Neo Allroads D+", photo: "Neo-Allroads-D+.png", labelYellow: "NEO SERIES", labelWhite: "REGIONAL", slug: "neo-allroads-d-plus", subtitle: "Drive tire for regional use with excellent handling and improved resistance to irregular wear." },
      { name: "Neo Allroads T2", photo: "Neo-Allroads-T2.png", labelYellow: "NEO SERIES", labelWhite: "REGIONAL", slug: "neo-allroads-t2",     subtitle: "Trailer tire for regional use, superior stability and resistance to irregular wear." },
      { name: "ASR79",           photo: "ASR79.png",           labelYellow: "SAILOR",     labelWhite: "REGIONAL", slug: "asr79",               subtitle: "Steer tire for regional use with superior wet performance, long tire life and high retreadability." },
      { name: "ASR79ii",         photo: "ASR79ii.png",         labelYellow: "SAILOR",     labelWhite: "REGIONAL", slug: "asr79ii",             subtitle: "Steer tire for regional use with low rolling resistance, improved casing life and excellent handling." },
      { name: "ADR78",           photo: "ADR78.png",           labelYellow: "SAILOR",     labelWhite: "REGIONAL", slug: "adr78",               subtitle: "Drive tire for regional use with improved fuel economy, excellent traction and long tire life.", hasAlt: true },
    ],
  },
  {
    tires: [
      { name: "Neo Construct D", photo: "Neo-Construct-D.png",       labelYellow: "NEO SERIES", labelWhite: "ON/OFF ROAD", slug: "neo-construct-d", subtitle: "Drive tire for on/off road use with excellent traction, reinforced casing and long life." },
      { name: "Neo Construct G", photo: "Aeolus-Neo-Construct-G.png", labelYellow: "NEO SERIES", labelWhite: "ON/OFF ROAD", slug: "neo-construct-g", subtitle: "All-position tire for on/off road use with excellent traction and cut-resistant compound." },
      { name: "Neo Winter S",    photo: "Neo-Winter-S.png",           labelYellow: "NEO SERIES", labelWhite: "WINTER",     slug: "neo-winter-s",   subtitle: "Steer tire for winter use with 3PMS designation, excellent traction and improved wet performance." },
      { name: "Neo Allseason D", photo: "Neo-Allseason-D.png",        labelYellow: "NEO SERIES", labelWhite: "WINTER",     slug: "neo-allseason-d", subtitle: "Drive tire for winter and urban use with 3PMS, low-temperature compound, excellent traction." },
      { name: "Sailor AGB23",    photo: "AGB23.png",                  labelYellow: "SAILOR",     labelWhite: "URBAN",      slug: "sailor-agb23",   subtitle: "All-position bus tire with excellent handling, stability and superior ride comfort." },
      { name: "Neo Urban G",     photo: "Neo-Urban-G.png",            labelYellow: "NEO SERIES", labelWhite: "URBAN",      slug: "neo-urban-g",    subtitle: "Bus tire for urban use with excellent stability, handling and superior ride comfort." },
    ],
  },
  {
    tires: [
      { name: "ASL06", photo: "ASL06.png", labelYellow: "", labelWhite: "STANDARD LONG HAUL", slug: "asl06", subtitle: "Steer tire for long haul use with improved fuel economy and excellent handling." },
      { name: "ADL58", photo: "ADL58.png", labelYellow: "", labelWhite: "STANDARD LONG HAUL", slug: "adl58", subtitle: "Drive tire for long haul use with improved fuel economy and excellent tire life." },
      { name: "ATL08", photo: "ATL08.png", labelYellow: "", labelWhite: "STANDARD LONG HAUL", slug: "atl08", subtitle: "Trailer tire for long haul use with excellent stability and superior tire life." },
      { name: "ASR30", photo: "ASR30.png", labelYellow: "", labelWhite: "STANDARD REGIONAL",  slug: "asr30", subtitle: "Steer/trailer tire for regional use with excellent handling and superior tire life." },
      { name: "ASR35", photo: "ASR35.png", labelYellow: "", labelWhite: "STANDARD REGIONAL",  slug: "asr35", subtitle: "Steer tire for regional use with excellent handling and improved tire life." },
    ],
  },
  {
    tires: [
      { name: "ASR69", photo: "ASR69.png", labelYellow: "", labelWhite: "STANDARD REGIONAL", slug: "asr69", subtitle: "Steer tire for regional use, low heat, improved casing life, excellent handling." },
      { name: "ADR24", photo: "ADR24.png", labelYellow: "", labelWhite: "STANDARD REGIONAL", slug: "adr24", subtitle: "Drive tire for regional use with M+S pattern, good traction and higher load capacity." },
      { name: "ADR26", photo: "ADR26.png", labelYellow: "", labelWhite: "STANDARD REGIONAL", slug: "adr26", subtitle: "Drive tire for regional applications, providing high traction and safety in slippery conditions." },
      { name: "ADR35", photo: "ADR35.png", labelYellow: "", labelWhite: "STANDARD REGIONAL", slug: "adr35", subtitle: "Drive tire for urban regional use with excellent traction and improved handling." },
      { name: "ADR55", photo: "ADR55.png", labelYellow: "", labelWhite: "STANDARD REGIONAL", slug: "adr55", subtitle: "Drive tire for regional use with excellent traction and improved fuel economy." },
    ],
  },
  {
    tires: [
      { name: "ADR69", photo: "ADR69.png", labelYellow: "", labelWhite: "STANDARD REGIONAL",  slug: "adr69", subtitle: "Drive tire for regional use with excellent traction and improved fuel economy." },
      { name: "ADR57", photo: "ADR57.png", labelYellow: "", labelWhite: "STANDARD REGIONAL",  slug: "adr57", subtitle: "Drive tire for regional use with improved slippery traction, low heat and high-speed performance." },
      { name: "AGR26", photo: "AGR26.png", labelYellow: "", labelWhite: "STANDARD REGIONAL",  slug: "agr26", subtitle: "All-position tire for regional use with excellent traction and resistance to irregular wear." },
      { name: "ADC52", photo: "ADC52.png", labelYellow: "", labelWhite: "STANDARD ON/OFF",    slug: "adc52", subtitle: "Drive tire for on/off road use with reinforced casing and cut-resistant compound." },
      { name: "ADC53", photo: "ADC53.png", labelYellow: "", labelWhite: "STANDARD ON/OFF",    slug: "adc53", subtitle: "Drive tire for on/off road use with large tread blocks and excellent traction." },
    ],
  },
  {
    tires: [
      { name: "ADC54", photo: "ADC54.png", labelYellow: "", labelWhite: "STANDARD ON/OFF",    slug: "adc54", subtitle: "Heavy-duty drive tire for on/off road use with reinforced casing and anti-cut compound." },
      { name: "AGC08", photo: "AGC08.png", labelYellow: "", labelWhite: "STANDARD ON/OFF",    slug: "agc08", subtitle: "Trailer tire for on/off road use with excellent stability and resistance to irregular wear." },
      { name: "AGC53", photo: "AGC53.png", labelYellow: "", labelWhite: "STANDARD ON/OFF",    slug: "agc53", subtitle: "All-position tire for on/off road use with excellent traction and cut-resistant compound." },
      { name: "AGM10", photo: "AGM10.png", labelYellow: "", labelWhite: "STANDARD OFF ROAD",  slug: "agm10", subtitle: "OTR tire for off road use with excellent traction, stability and resistance to cuts." },
      { name: "AGM84", photo: "AGM84.png", labelYellow: "", labelWhite: "STANDARD OFF ROAD",  slug: "agm84", subtitle: "OTR tire for off road use with excellent load capacity and resistance to cuts." },
    ],
  },
  {
    tires: [
      { name: "ADW80", photo: "ADW80.png", labelYellow: "", labelWhite: "STANDARD WINTER", slug: "adw80", subtitle: "Drive tire for winter use with M+S pattern, excellent traction and improved fuel economy." },
      { name: "ADW81", photo: "ADW81.png", labelYellow: "", labelWhite: "STANDARD WINTER", slug: "adw81", subtitle: "Drive tire for winter use with 3PMS pattern, excellent traction in snow." },
      { name: "ADW82", photo: "ADW82.png", labelYellow: "", labelWhite: "STANDARD WINTER", slug: "adw82", subtitle: "Drive tire for winter use with 3PMS designation and excellent cold-weather traction." },
    ],
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
              fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
              fontWeight: 700,
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
        gridTemplateColumns: "repeat(5, 1fr)",
        border: "1px solid rgba(255,255,255,0.07)",
        backgroundColor: "rgba(255,255,255,0.07)",
        gap: "1px",
      }}
    >
      {group.tires.map((tire, ti) => (
        <TireCard key={tire.slug} tire={tire} delay={ti * 0.04} />
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
          <div style={{ padding: "0.7rem 0.8rem 0.4rem" }}>
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
              aspectRatio: "1 / 1",
              backgroundColor: "#0d0d0d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <img
              src={PHOTO(tire.photo)}
              alt={tire.name}
              loading="lazy"
              style={{
                width: "88%",
                height: "88%",
                objectFit: "contain",
                display: "block",
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
