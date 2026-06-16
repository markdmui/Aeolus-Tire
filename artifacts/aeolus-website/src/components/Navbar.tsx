import { Link, useRoute } from "wouter";

export default function Navbar() {
  return (
    <nav
      className="flex justify-between items-center sticky top-0 z-50"
      style={{
        backgroundColor: "var(--bg-dark)",
        borderBottom: "1px solid var(--border-color)",
        padding: "10px 0",
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
