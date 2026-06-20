import { Link } from "wouter";

export default function Footer() {
  return (
    <footer
      className="py-16"
      style={{ backgroundColor: "var(--bg-dark)" }}
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="mb-4">
              <Link href="/">
                <img src="/aeolus-logo.png" alt="Aeolus" className="w-auto" style={{ height: "22px", maxWidth: "none" }} />
              </Link>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>
              Engineered for the long haul. Premium radial truck tires delivering uncompromising
              quality and retreadability.
            </p>
          </div>
          <div>
            <h4
              className="uppercase mb-5"
              style={{ fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.05em" }}
            >
              Tire Categories
            </h4>
            <FooterLinks items={[
              { label: "Premium TBR", href: "/tires" },
              { label: "Standard TBR", href: "/tires" },
              { label: "OTR", href: "/tires" },
              { label: "Catalog", href: "/tires" },
            ]} />
          </div>
          <div>
            <h4
              className="uppercase mb-5"
              style={{ fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.05em" }}
            >
              Company
            </h4>
            <FooterLinks items={[
              { label: "Tires", href: "/tires" },
              { label: "About", href: "#" },
              { label: "Media", href: "#" },
              { label: "Contact", href: "#" },
              { label: "Search", href: "/tires" },
            ]} />
          </div>
          <div>
            <h4
              className="uppercase mb-5"
              style={{ fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.05em" }}
            >
              Connect with Us
            </h4>
            <FooterLinks items={[
              { label: "X", href: "#" },
              { label: "LinkedIn", href: "#" },
              { label: "Facebook", href: "#" },
            ]} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="footer-links-list space-y-1">
      {items.map(({ label, href }) => (
        <li key={label}>
          {href === "#" ? (
            <a href="#" className="footer-link" style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
              {label}
            </a>
          ) : (
            <Link href={href} className="footer-link" style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
              {label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
