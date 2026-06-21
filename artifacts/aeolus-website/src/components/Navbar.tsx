import { useState, useEffect } from "react";
import { Link, useRoute } from "wouter";
import { List, X } from "@phosphor-icons/react";

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
          <Link href="/tires" className="btn-primary" style={{ display: "inline-block" }}>
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
            href="/tires"
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

function NavLinks() {
  const links = [
    { label: "HOME", href: "/" },
    { label: "TIRES", href: "/tires" },
    { label: "ABOUT", href: "#" },
    { label: "MEDIA", href: "#" },
    { label: "CONTACT", href: "#" },
  ];

  return (
    <ul className="flex items-center gap-10">
      {links.map(({ label, href }) => (
        <li key={label}>
          <NavLink label={label} href={href} />
        </li>
      ))}
    </ul>
  );
}

function MobileNavLinks({ onClose }: { onClose: () => void }) {
  const links = [
    { label: "HOME", href: "/" },
    { label: "TIRES", href: "/tires" },
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
