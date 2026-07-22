import { useState, useEffect, useRef } from "react";
import { Link, useRoute } from "wouter";
import { List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

const DEMO = "/tires/neo-fuel-x3";

const TIRE_DROPDOWN = {
  left: [
    {
      category: "NEO SERIES LONG HAUL",
      tires: [
        { label: "Neo Fuel S", href: DEMO },
        { label: "Neo Fuel D", href: DEMO },
        { label: "Neo Fuel D2", href: DEMO },
        { label: "Neo Fuel D3", href: DEMO },
        { label: "Neo Fuel T+", href: DEMO },
        { label: "Neo Fuel T2", href: DEMO },
        { label: "Neo Fuel T3", href: DEMO },
        { label: "Neo Fuel G3", href: DEMO },
      ],
    },
    {
      category: "NEO/SAILOR SERIES REGIONAL",
      tires: [
        { label: "Neo Allroads S", href: DEMO },
        { label: "Neo Allroads S+", href: DEMO },
        { label: "Neo Allroads D", href: DEMO },
        { label: "Neo Allroads D+", href: DEMO },
        { label: "Neo Allroads T2", href: DEMO },
        { label: "Sailor ASR79", href: DEMO },
        { label: "Sailor ASR79II", href: DEMO },
        { label: "Sailor ADR78/ADR78 ii", href: DEMO },
      ],
    },
    {
      category: "NEO SERIES ON/OFF ROAD",
      tires: [
        { label: "Neo Construct D", href: DEMO },
        { label: "Neo Construct G", href: DEMO },
      ],
    },
    {
      category: "NEO SERIES WINTER",
      tires: [
        { label: "Neo Winter S", href: DEMO },
        { label: "Neo Allseason D", href: DEMO },
      ],
    },
    {
      category: "NEO SERIES URBAN",
      tires: [
        { label: "Neo Urban G", href: DEMO },
      ],
    },
  ],
  right: [
    {
      category: "STANDARD SERIES LONG HAUL",
      tires: [
        { label: "ASL06", href: DEMO },
        { label: "ADL58", href: DEMO },
        { label: "ATL08", href: DEMO },
      ],
    },
    {
      category: "STANDARD SERIES REGIONAL",
      tires: [
        { label: "ASR30", href: DEMO },
        { label: "ASR35", href: DEMO },
        { label: "ASR69", href: DEMO },
        { label: "ADR24", href: DEMO },
        { label: "ADR26", href: DEMO },
        { label: "ADR35", href: DEMO },
        { label: "ADR55", href: DEMO },
        { label: "ADR69", href: DEMO },
        { label: "ADR57", href: DEMO },
        { label: "AGR26", href: DEMO },
      ],
    },
    {
      category: "STANDARD SERIES ON/OFF ROAD",
      tires: [
        { label: "ADC52", href: DEMO },
        { label: "ADC53", href: DEMO },
        { label: "ADC54", href: DEMO },
        { label: "AGC08", href: DEMO },
        { label: "AGM10", href: DEMO },
        { label: "AGM84", href: DEMO },
      ],
    },
    {
      category: "STANDARD SERIES WINTER",
      tires: [
        { label: "ADW80", href: DEMO },
        { label: "ADW81", href: DEMO },
        { label: "ADW82", href: DEMO },
      ],
    },
  ],
};

function CategoryHeader({ text }: { text: string }) {
  const parts = text.split(/(NEO SERIES|NEO)/);
  return (
    <>
      {parts.map((part, i) =>
        part === "NEO SERIES" || part === "NEO" ? (
          <span key={i} style={{ color: "var(--accent-yellow)" }}>{part}</span>
        ) : (
          part
        )
      )}
    </>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tiresOpen, setTiresOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openTires = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setTiresOpen(true);
  };
  const closeTires = () => {
    closeTimer.current = setTimeout(() => setTiresOpen(false), 120);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <div
      className="sticky top-0 z-50"
      style={{
        transition: "background-color 0.3s ease",
        backgroundColor: scrolled || menuOpen ? "rgba(0,0,0,0.7)" : "transparent",
      }}
    >
      <nav
        className="flex justify-between items-center"
        style={{
          backgroundColor: "transparent",
          padding: "10px calc(4vw + 20px)",
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.38, ease: "easeOut" }}
        >
          <Link href="/" aria-label="Aeolus" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <img src="/aeolus-logo.png" alt="Aeolus" className="h-[26px] w-auto nav-logo" />
          </Link>
        </motion.div>

        {/* Desktop nav — position:relative so dropdown anchors to this container's right edge */}
        <div
          className="hidden md:flex items-center gap-12"
          style={{ position: "relative" }}
          onMouseLeave={closeTires}
        >
          <NavLinks onTiresEnter={openTires} />
          <a href="/tire-finder.html" className="btn-primary" style={{ display: "inline-block" }}>
            SEARCH
          </a>

          {/* Dropdown panel — right:0 aligns with SEARCH button's right edge */}
          <AnimatePresence>
            {tiresOpen && (
              <motion.div
                onMouseEnter={openTires}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  right: 0,
                  backgroundColor: "#000000",
                  border: "1px solid #2c2c2e",
                  padding: "1.5rem 1.75rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0 2.5rem",
                  minWidth: "540px",
                  zIndex: 200,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
                }}
              >
                <div>
                  {TIRE_DROPDOWN.left.map((section, si) => (
                    <div key={section.category} style={{ marginBottom: "0.9rem" }}>
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0, ease: "easeOut" }}
                        style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.3rem", fontFamily: "var(--font-body)" }}
                      >
                        <CategoryHeader text={section.category} />
                      </motion.div>
                      {section.tires.map((tire, ti) =>
                        tire.href === "#" ? (
                          <motion.a
                            key={tire.label} href="#" className="dropdown-tire-link"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: (si * 4 + ti) * 0.015, ease: "easeOut" }}
                          >{tire.label}</motion.a>
                        ) : (
                          <motion.div
                            key={tire.label}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: (si * 4 + ti) * 0.015, ease: "easeOut" }}
                          >
                            <Link href={tire.href} className="dropdown-tire-link">{tire.label}</Link>
                          </motion.div>
                        )
                      )}
                    </div>
                  ))}
                </div>
                <div>
                  {TIRE_DROPDOWN.right.map((section, si) => (
                    <div key={section.category} style={{ marginBottom: "0.9rem" }}>
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0, ease: "easeOut" }}
                        style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.3rem", fontFamily: "var(--font-body)" }}
                      >
                        <CategoryHeader text={section.category} />
                      </motion.div>
                      {section.tires.map((tire, ti) => (
                        <motion.a
                          key={tire.label} href={tire.href} className="dropdown-tire-link"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: (si * 4 + ti) * 0.015 + 0.05, ease: "easeOut" }}
                        >{tire.label}</motion.a>
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center"
          style={{ color: "white", background: "none", border: "none", cursor: "pointer", padding: "4px" }}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={26} /> : <List size={26} />}
        </button>
      </nav>

      {/* Border line */}
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 calc(4vw + 20px)" }}>
        <div style={{ height: "1px", backgroundColor: "#666666" }} />
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: "rgba(0,0,0,0.95)",
            padding: "2rem calc(4vw + 20px) 2.5rem",
          }}
        >
          <MobileNavLinks onClose={() => setMenuOpen(false)} />
          <a
            href="/tire-finder.html"
            className="btn-primary"
            style={{ display: "inline-block", marginTop: "1.5rem" }}
            onClick={() => setMenuOpen(false)}
          >
            SEARCH
          </a>
        </div>
      )}
    </div>
  );
}

function NavLinks({ onTiresEnter }: { onTiresEnter: () => void }) {
  return (
    <ul className="flex items-center gap-10">
      <li><NavLink label="HOME" href="/" /></li>
      <li onMouseEnter={onTiresEnter}>
        <a href="/tires" className="nav-link">TIRES</a>
      </li>
      <li><NavLink label="ABOUT" href="#" /></li>
      <li><NavLink label="MEDIA" href="#" /></li>
      <li><NavLink label="CONTACT" href="#" /></li>
    </ul>
  );
}

function MobileNavLinks({ onClose }: { onClose: () => void }) {
  const [tiresOpen, setTiresOpen] = useState(false);

  const rowStyle: React.CSSProperties = { borderBottom: "1px solid #222" };

  return (
    <ul className="flex flex-col gap-0">
      <li style={rowStyle}>
        <NavLink label="HOME" href="/" mobile onClose={onClose} />
      </li>

      {/* TIRES accordion row */}
      <li style={rowStyle}>
        <button
          onClick={() => setTiresOpen((o) => !o)}
          style={{
            display: "block",
            width: "100%",
            textAlign: "left",
            background: tiresOpen ? "#1e1e1e" : "none",
            border: "none",
            cursor: "pointer",
            padding: "0.6rem 0 0.6rem 10px",
            margin: 0,
            fontSize: "1rem",
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: tiresOpen ? "#FFD700" : "#ffffff",
          }}
        >
          TIRES
        </button>

        {tiresOpen && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0 1.25rem",
              padding: "1rem 10px 1.5rem",
              backgroundColor: "#111",
            }}
          >
            {/* Left column */}
            <div>
              {TIRE_DROPDOWN.left.map((section) => (
                <div key={section.category} style={{ marginBottom: "0.9rem" }}>
                  <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.3rem", fontFamily: "var(--font-body)" }}>
                    <CategoryHeader text={section.category} />
                  </div>
                  {section.tires.map((tire) =>
                    tire.href === "#" ? (
                      <a key={tire.label} href="#" className="dropdown-tire-link">{tire.label}</a>
                    ) : (
                      <Link key={tire.label} href={tire.href} className="dropdown-tire-link" onClick={onClose}>{tire.label}</Link>
                    )
                  )}
                </div>
              ))}
            </div>

            {/* Right column */}
            <div>
              {TIRE_DROPDOWN.right.map((section) => (
                <div key={section.category} style={{ marginBottom: "0.9rem" }}>
                  <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.3rem", fontFamily: "var(--font-body)" }}>
                    <CategoryHeader text={section.category} />
                  </div>
                  {section.tires.map((tire) => (
                    <a key={tire.label} href={tire.href} className="dropdown-tire-link">{tire.label}</a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </li>

      <li style={rowStyle}>
        <NavLink label="ABOUT" href="#" mobile onClose={onClose} />
      </li>
      <li style={rowStyle}>
        <NavLink label="MEDIA" href="#" mobile onClose={onClose} />
      </li>
      <li style={rowStyle}>
        <NavLink label="CONTACT" href="#" mobile onClose={onClose} />
      </li>
    </ul>
  );
}

function NavLink({
  label,
  href,
  mobile = false,
  onClose,
}: {
  label: string;
  href: string;
  mobile?: boolean;
  onClose?: () => void;
}) {
  const [isActive] = useRoute(href === "/" ? "/" : href + "*");
  const mobileStyle: React.CSSProperties = {
    display: "block",
    padding: "0.6rem 0 0.6rem 10px",
    margin: "0",
    fontSize: "1rem",
    letterSpacing: "0.08em",
  };

  if (href === "#") {
    return (
      <a href="#" className="nav-link" style={mobile ? mobileStyle : undefined} onClick={onClose}>
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="nav-link"
      style={{
        ...(mobile ? mobileStyle : undefined),
        ...(isActive ? { color: "var(--accent-yellow)" } : undefined),
      }}
      onClick={onClose}
    >
      {label}
    </Link>
  );
}
