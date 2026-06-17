import { useEffect, useState } from "react";
import { Link, useRoute } from "wouter";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50" style={{ transition: "background-color 0.3s ease", backgroundColor: scrolled ? "rgba(0,0,0,0.7)" : "transparent" }}>
      <nav
        className="flex justify-between items-center"
        style={{
          backgroundColor: "transparent",
          borderBottom: "1px solid #CCCCCC",
          padding: "10px calc(4vw + 20px)",
          maxWidth: "1600px",
          margin: "0 auto",
          transition: "border-color 0.3s ease",
        }}
      >
        <Link href="/" aria-label="Aeolus" className="flex items-center">
          <img src="/aeolus-logo.png" alt="Aeolus" className="h-[26px] w-auto" />
        </Link>
        <div className="flex items-center gap-12">
          <NavLinks />
          <Link href="/tires" className="btn-primary" style={{ display: "inline-block" }}>
            SEARCH
          </Link>
        </div>
      </nav>
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

function NavLink({ label, href }: { label: string; href: string }) {
  const [isActive] = useRoute(href === "/" ? "/" : href + "*");

  if (href === "#") {
    return (
      <a href="#" className="nav-link">
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="nav-link"
      style={isActive ? { color: "var(--accent-yellow)" } : undefined}
    >
      {label}
    </Link>
  );
}
