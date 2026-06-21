import { useState, useEffect, useRef } from "react";
import { Link, useRoute } from "wouter";
import { List, X } from "@phosphor-icons/react";

const TIRE_DROPDOWN = {
  left: [
    {
      category: "NEO SERIES LONG HAUL",
      tires: [
        { label: "Neo Fuel S", href: "#" },
        { label: "NEO FUEL D", href: "#" },
        { label: "NEO FUEL D2", href: "#" },
        { label: "NEO FUEL D3", href: "#" },
        { label: "Neo Fuel T+", href: "#" },
        { label: "Neo Fuel T2", href: "#" },
        { label: "Neo Fuel T3", href: "#" },
        { label: "Neo Fuel G3", href: "/tires/neo-fuel-g3" },
      ],
    },
    {
      category: "NEO/SAILOR SERIES REGIONAL",
      tires: [
        { label: "Neo Allroads S", href: "#" },
        { label: "Neo Allroads S+", href: "#" },
        { label: "Neo Allroads D", href: "#" },
        { label: "Neo Allroads D+", href: "#" },
        { label: "Neo Allroads T2", href: "#" },
        { label: "Sailor ASR79", href: "#" },
        { label: "Sailor ASR79II", href: "#" },
        { label: "Sailor ADR78/ADR78 ii", href: "#" },
      ],
    },
    {
      category: "NEO SERIES ON/OFF ROAD",
      tires: [
        { label: "Neo Construct D", href: "#" },
        { label: "Neo Construct G", href: "#" },
      ],
    },
    {
      category: "NEO SERIES WINTER",
      tires: [
        { label: "Neo Winter S", href: "#" },
        { label: "Neo Allseason D", href: "#" },
      ],
    },
    {
      category: "NEO SERIES URBAN",
      tires: [
        { label: "Sailor AGB23", href: "#" },
        { label: "Neo Urban G", href: "#" },
      ],
    },
  ],
  right: [
    {
      category: "STANDARD SERIES LONG HAUL",
      tires: [
        { label: "ASL06", href: "#" },
        { label: "ADL58", href: "#" },
        { label: "ATL08", href: "#" },
      ],
    },
    {
      category: "STANDARD SERIES REGIONAL",
      tires: [
        { label: "ASR30", href: "#" },
        { label: "ASR35", href: "#" },
        { label: "ASR69", href: "#" },
        { label: "ADR24", href: "#" },
        { label: "ADR26", href: "#" },
        { label: "ADR35", href: "#" },
        { label: "ADR55", href: "#" },
        { label: "ADR69", href: "#" },
        { label: "ADR57", href: "#" },
        { label: "AGR26", href: "#" },
      ],
    },
    {
      category: "STANDARD SERIES ON/OFF ROAD",
      tires: [
        { label: "ADC52", href: "#" },
        { label: "ADC53", href: "#" },
        { label: "ADC54", href: "#" },
        { label: "AGC08", href: "#" },
        { label: "AGC53", href: "#" },
        { label: "AGM10", href: "#" },
        { label: "AGM84", href: "#" },
      ],
    },
    {
      category: "STANDARD SERIES WINTER",
      tires: [
        { label: "ADW80", href: "#" },
        { label: "ADW81", href: "#" },
        { label: "ADW82", href: "#" },
      ],
    },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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
        <Link href="/" aria-label="Aeolus" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <img src="/aeolus-logo.png" alt="Aeolus" className="h-[26px] w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-12">
          <NavLinks />
          <Link href="#" className="btn-primary" style={{ display: "inline-block" }}>
            SEARCH
          </Link>
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
          <Link
            href="#"
            className="btn-primary"
            style={{ display: "inline-block", marginTop: "1.5rem" }}
            onClick={() => setMenuOpen(false)}
          >
            SEARCH
          </Link>
        </div>
      )}
    </div>
  );
}

function TiresDropdown() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <li style={{ position: "relative" }} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <a href="#" className="nav-link" style={{ cursor: "default" }}>
        TIRES
      </a>

      {open && (
        <div
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
          {/* Left column */}
          <div>
            {TIRE_DROPDOWN.left.map((section) => (
              <div key={section.category} style={{ marginBottom: "1.1rem" }}>
                <div
                  style={{
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "0.3rem",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {section.category}
                </div>
                {section.tires.map((tire) =>
                  tire.href === "#" ? (
                    <a key={tire.label} href="#" className="dropdown-tire-link">
                      {tire.label}
                    </a>
                  ) : (
                    <Link key={tire.label} href={tire.href} className="dropdown-tire-link">
                      {tire.label}
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>

          {/* Right column */}
          <div>
            {TIRE_DROPDOWN.right.map((section) => (
              <div key={section.category} style={{ marginBottom: "1.1rem" }}>
                <div
                  style={{
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "0.3rem",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {section.category}
                </div>
                {section.tires.map((tire) => (
                  <a key={tire.label} href={tire.href} className="dropdown-tire-link">
                    {tire.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
}

function NavLinks() {
  return (
    <ul className="flex items-center gap-10">
      <li><NavLink label="HOME" href="/" /></li>
      <TiresDropdown />
      <li><NavLink label="ABOUT" href="#" /></li>
      <li><NavLink label="MEDIA" href="#" /></li>
      <li><NavLink label="CONTACT" href="#" /></li>
    </ul>
  );
}

function MobileNavLinks({ onClose }: { onClose: () => void }) {
  const links = [
    { label: "HOME", href: "/" },
    { label: "TIRES", href: "#" },
    { label: "ABOUT", href: "#" },
    { label: "MEDIA", href: "#" },
    { label: "CONTACT", href: "#" },
  ];

  return (
    <ul className="flex flex-col gap-0">
      {links.map(({ label, href }) => (
        <li key={label} style={{ borderBottom: "1px solid #222" }}>
          <NavLink label={label} href={href} mobile onClose={onClose} />
        </li>
      ))}
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
    padding: "0.85rem 0",
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
