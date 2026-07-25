import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CONTACT_BGS = ["/contact-bg-1.jpg", "/contact-bg-2.jpg", "/contact-bg-3.jpg"];

const VP = { once: true, margin: "-80px" };
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VP,
  transition: { duration: 0.24, delay, ease: "easeOut" as const },
});

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="uppercase mb-4"
      style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--accent-yellow)" }}
    >
      {children}
    </div>
  );
}

/* ─── HERO ─────────────────────────────────────────────────── */
function Hero() {
  const [bg] = useState(() => {
    const stored = localStorage.getItem("contactBgIndex");
    const next = stored === null
      ? Math.floor(Math.random() * CONTACT_BGS.length)
      : (parseInt(stored, 10) + 1) % CONTACT_BGS.length;
    localStorage.setItem("contactBgIndex", String(next));
    return CONTACT_BGS[next];
  });

  return (
    <section
      className="hero-section flex flex-col justify-center pb-12 md:pb-16"
      style={{
        minHeight: "420px", height: "540px", marginTop: "-46px", paddingTop: "110px",
        backgroundImage: `url('${bg}')`,
        backgroundSize: "cover", backgroundPosition: "center right", backgroundRepeat: "no-repeat",
      }}
    >

      <div className="container w-full" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, delay: 0.07, ease: "easeOut" }}
        >
          <Kicker>Contact</Kicker>
          <h1
            className="mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#fff",
              maxWidth: "22ch",
            }}
          >
            Most questions have{" "}
            <span style={{ color: "var(--accent-yellow)", fontWeight: 600 }}>faster answers below.</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(0.9rem, 2vw, 1.0625rem)", maxWidth: "46ch", lineHeight: 1.65 }}>
            If one of the routes below covers it, you'll get there quicker than waiting on a reply.
            Everything else goes to a real person, sorted by what you actually need.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── BEFORE YOU REACH OUT ──────────────────────────────────── */
const SELF_SERVE = [
  {
    tag: "SPEC SHEETS",
    title: "Looking for a tire's full specs?",
    body: "Every published tire has a complete spec table — sizes, load ratings, tread depth, SmartWay/M+S flags.",
    cta: "BROWSE TIRES",
    href: "/tires",
  },
  {
    tag: "WARRANTY",
    title: "Have a warranty or casing-credit question?",
    body: "Coverage windows, no-charge thresholds, and the full per-size casing credit table are all published.",
    cta: "VIEW WARRANTY TERMS",
    href: "#",
  },
  {
    tag: "BECOME A DEALER",
    title: "Interested in carrying Aeolus?",
    body: "Territory protection, account support, and the four-step onboarding path are all laid out up front.",
    cta: "DEALER PROGRAM",
    href: "#",
  },
];

function BeforeYouReachOut() {
  return (
    <section className="py-20" style={{ borderTop: "1px solid var(--border-color)" }}>
      <div className="container">
        <motion.div {...fade(0)} className="mb-10">
          <Kicker>Before You Reach Out</Kicker>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: "#fff",
              maxWidth: "48ch",
            }}
          >
            things people usually email us about — already answered.
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "1px", backgroundColor: "var(--border-color)", border: "1px solid var(--border-color)" }}
        >
          {SELF_SERVE.map(({ tag, title, body, cta, href }, i) => (
            <motion.div
              key={tag}
              {...fade(i * 0.08)}
              style={{
                backgroundColor: "var(--bg-dark)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-yellow)" }}>
                {tag}
              </div>
              <h3 style={{ fontSize: "1.0625rem", fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>{title}</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6, flex: 1 }}>{body}</p>
              <a href={href} className="link-accent" style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}>
                {cta} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT METHODS ───────────────────────────────────────── */
const METHODS = [
  {
    tag: "GENERAL & SALES",
    title: "Sales & Product Inquiries",
    body: "New orders, product questions, and anything not covered above.",
    email: "sales@aeolustire-na.com",
    phone: "+1 (888) 888-8888",
  },
  {
    tag: "DEALER & PARTNER",
    title: "Dealer & Partner Team",
    body: "Territory questions, existing account support, and onboarding.",
    email: "dealers@aeolustire-na.com",
    phone: "+1 (888) 888-0001",
  },
  {
    tag: "WARRANTY CLAIMS",
    title: "Warranty & Casing Claims",
    body: "Filing a claim or checking the status of a casing inspection.",
    email: "warranty@aeolustire-na.com",
    phone: "+1 (888) 888-0002",
  },
  {
    tag: "MEDIA & PRESS",
    title: "Media & Press",
    body: "Interview requests, press materials, and corporate communications.",
    email: "press@aeolustire-na.com",
    phone: "+1 (888) 888-0003",
  },
];

function ContactMethods() {
  return (
    <section className="py-20" style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid var(--border-color)" }}>
      <div className="container">
        <motion.div {...fade(0)} className="mb-10">
          <Kicker>Contact Methods</Kicker>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: "#fff",
              marginBottom: "0.75rem",
            }}
          >
            Everything else, sorted to the right desk.
          </h2>
          <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", lineHeight: 1.6, maxWidth: "56ch" }}>
            Each of these gets a faster, more specific answer than one general inbox would.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-4"
          style={{ gap: "1px", backgroundColor: "var(--border-color)", border: "1px solid var(--border-color)" }}
        >
          {METHODS.map(({ tag, title, body, email, phone }, i) => (
            <motion.div
              key={tag}
              {...fade(i * 0.06)}
              style={{
                backgroundColor: "#0a0a0a",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-yellow)", marginBottom: "0.5rem" }}>
                {tag}
              </div>
              <h3 style={{ fontSize: "1.0625rem", fontWeight: 600, color: "#fff", lineHeight: 1.3, marginBottom: "0.5rem" }}>{title}</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.55, flex: 1 }}>{body}</p>
              <div style={{ marginTop: "1.25rem", display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                <a href={`mailto:${email}`} style={{ fontSize: "0.875rem", color: "#fff", textDecoration: "none" }}>{email}</a>
                <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{phone}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SEND A MESSAGE ────────────────────────────────────────── */
const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "transparent",
  border: "1px solid var(--border-color)",
  padding: "0.875rem 1rem",
  fontSize: "0.875rem",
  color: "#fff",
  outline: "none",
  borderRadius: 0,
  fontFamily: "inherit",
};
const labelStyle: React.CSSProperties = {
  fontSize: "0.68rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: "0.5rem",
  display: "block",
};

function SendMessage() {
  return (
    <section className="py-20" style={{ borderTop: "1px solid var(--border-color)" }}>
      <div className="container">
        <motion.div {...fade(0)} className="mb-10">
          <Kicker>Send a Message</Kicker>
        </motion.div>

        <motion.div
          {...fade(0.08)}
          style={{ border: "1px solid var(--border-color)", padding: "2.5rem", maxWidth: "820px" }}
        >
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#fff", marginBottom: "0.4rem" }}>General Inquiry</h3>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.6 }}>
            This is a mockup of the contact form, shown to demonstrate the page structure — not a live form.
          </p>

          <form onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1rem", marginBottom: "1rem" }}>
              <div><label style={labelStyle}>Name</label><input type="text" style={inputStyle} /></div>
              <div><label style={labelStyle}>Company</label><input type="text" style={inputStyle} /></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1rem", marginBottom: "1rem" }}>
              <div><label style={labelStyle}>Email</label><input type="email" style={inputStyle} /></div>
              <div><label style={labelStyle}>Phone</label><input type="tel" style={inputStyle} /></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1rem", marginBottom: "1rem" }}>
              <div><label style={labelStyle}>I'm getting in touch about</label><input type="text" style={inputStyle} /></div>
              <div><label style={labelStyle}>Region</label><input type="text" style={inputStyle} /></div>
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={labelStyle}>Message</label>
              <textarea rows={5} style={{ ...inputStyle, resize: "vertical" as const }} />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "var(--accent-yellow)",
                color: "#000",
                border: "none",
                padding: "0.875rem 2rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              SEND MESSAGE →
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <div
      className="antialiased text-white"
      style={{ backgroundColor: "var(--bg-dark)", fontFamily: "var(--font-body)" }}
    >
      <Navbar />
      <Hero />
      <BeforeYouReachOut />
      <ContactMethods />
      <SendMessage />
      <Footer />
    </div>
  );
}
