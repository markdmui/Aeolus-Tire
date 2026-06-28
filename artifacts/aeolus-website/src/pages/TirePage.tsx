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
  if (u.startsWith("NEO ")) return ["NEO", u.slice(4)];
  const s = u.lastIndexOf(" ");
  if (s > 0) return [u.slice(0, s), u.slice(s + 1)];
  const m = u.match(/^([A-Z]+)(\d.*)$/);
  return m ? [m[1], m[2]] : [u, ""];
}

const GROUPS: CategoryGroup[] = [
  {
    tires: [
      // — Premium Long Haul —
      { name: "Neo Fuel S",       photo: "Neo-Fuel-S.png",              labelYellow: "PREMIUM",  labelWhite: "LONG HAUL",   slug: "neo-fuel-s",        subtitle: "Long haul steer tire engineered for fuel efficiency, stability, and even wear." },
      { name: "Neo Fuel D",       photo: "Neo-Fuel-D.png",              labelYellow: "PREMIUM",  labelWhite: "LONG HAUL",   slug: "neo-fuel-d",        subtitle: "Long haul drive tire with low rolling resistance and superior durability." },
      { name: "Neo Fuel D2",      photo: "Neo-Fuel-D2.png",             labelYellow: "PREMIUM",  labelWhite: "LONG HAUL",   slug: "neo-fuel-d2",       subtitle: "Drive tire optimized for long haul routes with an enhanced tread compound.",  hasAlt: true },
      { name: "Neo Fuel D3",      photo: "Neo-Fuel-D3.png",             labelYellow: "PREMIUM",  labelWhite: "LONG HAUL",   slug: "neo-fuel-d3",       subtitle: "Third-generation long haul drive tire for maximum mileage and fuel savings." },
      { name: "Neo Fuel G3",      photo: "Neo-Fuel-G3.png",             labelYellow: "PREMIUM",  labelWhite: "LONG HAUL",   slug: "neo-fuel-g3",       subtitle: "All-position tire for regional and mixed service operations." },
      { name: "Neo Fuel T2",      photo: "Neo-Fuel-T2.png",             labelYellow: "PREMIUM",  labelWhite: "LONG HAUL",   slug: "neo-fuel-t2",       subtitle: "Long haul trailer tire for low rolling resistance and high-speed stability." },
      { name: "Neo Fuel T3",      photo: "Neo-Fuel-T3.png",             labelYellow: "PREMIUM",  labelWhite: "LONG HAUL",   slug: "neo-fuel-t3",       subtitle: "Trailer tire engineered for demanding long haul applications." },
      { name: "Neo Fuel T+",      photo: "Neo-Fuel-T+.png",             labelYellow: "PREMIUM",  labelWhite: "LONG HAUL",   slug: "neo-fuel-tplus",    subtitle: "Premium long haul trailer tire for heavy loads and extended service life." },
      // — Premium Regional —
      { name: "Neo Allroads S",   photo: "Neo-Allroads-S.png",          labelYellow: "PREMIUM",  labelWhite: "REGIONAL",    slug: "neo-allroads-s",    subtitle: "All-roads steer tire for reliable performance on mixed terrain." },
      { name: "Neo Allroads S+",  photo: "Neo-Allroads-S+.png",         labelYellow: "PREMIUM",  labelWhite: "REGIONAL",    slug: "neo-allroads-splus",subtitle: "Enhanced all-roads steer tire with superior wet grip and handling." },
      { name: "Neo Allroads D",   photo: "Neo-Allroads-D.png",          labelYellow: "PREMIUM",  labelWhite: "REGIONAL",    slug: "neo-allroads-d",    subtitle: "All-roads drive tire for regional and mixed service applications." },
      { name: "Neo Allroads D+",  photo: "Neo-Allroads-D+.png",         labelYellow: "PREMIUM",  labelWhite: "REGIONAL",    slug: "neo-allroads-dplus",subtitle: "Premium all-roads drive tire with advanced traction on all surfaces." },
      { name: "Neo Allroads T2",  photo: "Neo-Allroads-T2.png",         labelYellow: "PREMIUM",  labelWhite: "REGIONAL",    slug: "neo-allroads-t2",   subtitle: "All-roads trailer tire for versatile regional operation.",               hasAlt: true },
      { name: "ASR79",            photo: "ASR79.png",                   labelYellow: "PREMIUM",  labelWhite: "REGIONAL",    slug: "asr79",             subtitle: "Premium regional steer tire for demanding mixed service.",               hasAlt: true },
      { name: "ADR78",            photo: "ADR78.png",                   labelYellow: "PREMIUM",  labelWhite: "REGIONAL",    slug: "adr78",             subtitle: "Versatile drive tire for regional and mixed service operations.",          hasAlt: true },
      // — Premium On/Off Road —
      { name: "Neo Construct D",  photo: "Neo-Construct-D.png",         labelYellow: "PREMIUM",  labelWhite: "ON/OFF ROAD", slug: "neo-construct-d",   subtitle: "Construction drive tire built for off-road durability and traction." },
      { name: "Neo Construct G",  photo: "Aeolus-Neo-Construct-G.png",  labelYellow: "PREMIUM",  labelWhite: "ON/OFF ROAD", slug: "neo-construct-g",   subtitle: "All-position construction tire for heavy-duty off-road applications." },
      // — Premium Winter —
      { name: "Neo Winter S",     photo: "Neo-Winter-S.png",            labelYellow: "PREMIUM",  labelWhite: "WINTER",      slug: "neo-winter-s",      subtitle: "Winter steer tire with 3PMSF rating for severe snow conditions." },
      { name: "Neo Allseason D",  photo: "Neo-Allseason-D.png",         labelYellow: "PREMIUM",  labelWhite: "WINTER",      slug: "neo-allseason-d",   subtitle: "All-season drive tire for year-round performance in any weather." },
      // — Urban —
      { name: "AGB23",            photo: "AGB23.png",                   labelYellow: "",         labelWhite: "URBAN",       slug: "agb23",             subtitle: "All-position bus tire for urban transit and coach applications." },
      { name: "Neo Urban G",      photo: "Neo-Urban-G.png",             labelYellow: "PREMIUM",  labelWhite: "URBAN",       slug: "neo-urban-g",       subtitle: "All-position urban tire for city transit and short-haul delivery." },
      // — Standard Long Haul —
      { name: "ASL06",            photo: "ASL06.png",                   labelYellow: "STANDARD", labelWhite: "LONG HAUL",   slug: "asl06",             subtitle: "Long haul steer tire for fuel efficiency and high-speed stability." },
      { name: "ADL58",            photo: "ADL58.png",                   labelYellow: "STANDARD", labelWhite: "LONG HAUL",   slug: "adl58",             subtitle: "Long haul drive tire for high mileage and consistent performance." },
      { name: "ATL08",            photo: "ATL08.png",                   labelYellow: "STANDARD", labelWhite: "LONG HAUL",   slug: "atl08",             subtitle: "Long haul trailer tire with low rolling resistance and stability." },
      // — Standard Regional —
      { name: "ASR30",            photo: "ASR30.png",                   labelYellow: "STANDARD", labelWhite: "REGIONAL",    slug: "asr30",             subtitle: "Regional steer tire for reliable performance on mixed service routes." },
      { name: "ASR35",            photo: "ASR35.png",                   labelYellow: "STANDARD", labelWhite: "REGIONAL",    slug: "asr35",             subtitle: "Steer tire with superior wet grip for regional applications." },
      { name: "ASR69",            photo: "ASR69.png",                   labelYellow: "STANDARD", labelWhite: "REGIONAL",    slug: "asr69",             subtitle: "High-mileage regional steer tire for consistent performance." },
      { name: "ADR24",            photo: "ADR24.png",                   labelYellow: "STANDARD", labelWhite: "REGIONAL",    slug: "adr24",             subtitle: "Regional drive tire for mixed service roads with reliable traction." },
      { name: "ADR26",            photo: "ADR26.png",                   labelYellow: "STANDARD", labelWhite: "REGIONAL",    slug: "adr26",             subtitle: "Drive tire for regional routes with enhanced wear and durability." },
      { name: "ADR35",            photo: "ADR35.png",                   labelYellow: "STANDARD", labelWhite: "REGIONAL",    slug: "adr35",             subtitle: "Drive tire for regional and urban mixed service applications." },
      { name: "ADR55",            photo: "ADR55.png",                   labelYellow: "STANDARD", labelWhite: "REGIONAL",    slug: "adr55",             subtitle: "Heavy-duty regional drive tire for demanding mixed terrain." },
      { name: "ADR69",            photo: "ADR69.png",                   labelYellow: "STANDARD", labelWhite: "REGIONAL",    slug: "adr69",             subtitle: "High-capacity regional drive tire for long service life." },
      { name: "ADR57",            photo: "ADR57.png",                   labelYellow: "STANDARD", labelWhite: "REGIONAL",    slug: "adr57",             subtitle: "Drive tire for mixed regional routes with superior fuel efficiency." },
      { name: "AGR26",            photo: "AGR26.png",                   labelYellow: "STANDARD", labelWhite: "REGIONAL",    slug: "agr26",             subtitle: "All-position regional tire for versatile mixed service." },
      // — Standard On/Off Road —
      { name: "ADC52",            photo: "ADC52.png",                   labelYellow: "STANDARD", labelWhite: "ON/OFF",      slug: "adc52",             subtitle: "Construction drive tire for mixed on/off-road applications." },
      { name: "ADC53",            photo: "ADC53.png",                   labelYellow: "STANDARD", labelWhite: "ON/OFF",      slug: "adc53",             subtitle: "Heavy-duty construction drive tire for tough terrain." },
      { name: "ADC54",            photo: "ADC54.png",                   labelYellow: "STANDARD", labelWhite: "ON/OFF",      slug: "adc54",             subtitle: "All-terrain construction drive tire for demanding job sites." },
      { name: "AGC08",            photo: "AGC08.png",                   labelYellow: "STANDARD", labelWhite: "ON/OFF",      slug: "agc08",             subtitle: "All-position construction tire for heavy-duty mixed terrain." },
      { name: "AGC53",            photo: "AGC53.png",                   labelYellow: "STANDARD", labelWhite: "ON/OFF",      slug: "agc53",             subtitle: "Heavy-duty all-position tire for construction applications." },
      // — Standard Off Road —
      { name: "AGM10",            photo: "AGM10.png",                   labelYellow: "STANDARD", labelWhite: "OFF ROAD",    slug: "agm10",             subtitle: "All-position tire for demanding mixed service operations." },
      { name: "AGM84",            photo: "AGM84.png",                   labelYellow: "STANDARD", labelWhite: "OFF ROAD",    slug: "agm84",             subtitle: "All-position tire engineered for mixed regional and urban routes." },
      // — Standard Winter —
      { name: "ADW80",            photo: "ADW80.png",                   labelYellow: "STANDARD", labelWhite: "WINTER",      slug: "adw80",             subtitle: "Wide-base drive tire for long haul operations with fuel savings." },
      { name: "ADW81",            photo: "ADW81.png",                   labelYellow: "STANDARD", labelWhite: "WINTER",      slug: "adw81",             subtitle: "Wide-base tire with superior load capacity and wear resistance." },
      { name: "ADW82",            photo: "ADW82.png",                   labelYellow: "STANDARD", labelWhite: "WINTER",      slug: "adw82",             subtitle: "Premium wide-base drive tire for maximum fuel efficiency." },
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
      className="lineup-grid"
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
      style={{ backgroundColor: "transparent" }}
      className="lineup-card"
    >
      <Link href="/tires/neo-fuel-x3" style={{ display: "block", textDecoration: "none", color: "inherit", height: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <div
            style={{
              width: "100%",
              aspectRatio: "4 / 3",
              backgroundColor: "transparent",
              overflow: "hidden",
              flexShrink: 0,
              position: "relative",
              marginBottom: "4px",
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
                transform: "scale(1.906) translateY(2.5%) translateX(12.5%)",
                transformOrigin: "top center",
                transition: "transform 0.22s ease",
              }}
              className="lineup-card-img"
            />
          </div>

          <div className="lineup-card-name-row" style={{ padding: "8px 0.8rem 8px" }}>
            <p
              className="uppercase lineup-card-name"
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

          <div className="lineup-card-info" style={{ padding: "0 0.8rem 0.85rem", flex: 1 }}>
            <p
              className="uppercase"
              style={{
                fontSize: "clamp(0.58rem, 0.95vw, 0.68rem)",
                letterSpacing: "0.07em",
                lineHeight: 1.3,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {[tire.labelYellow, tire.labelWhite].filter(Boolean).join(" ")}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
