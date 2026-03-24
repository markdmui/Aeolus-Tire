export default function LandingPage() {
  return (
    <div className="font-sans antialiased bg-black text-white">
      <Navbar />
      <Hero />
      <FeaturePillars />
      <ProductGrid />
      <EngineeringCapabilities />
      <EngineeringApproach />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="bg-black border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-8 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center" aria-label="Aeolus">
          <AeolusLogo />
        </a>
        <div className="flex items-center gap-8">
          <NavLinks />
          <button className="bg-[#E8C200] text-black text-xs font-bold tracking-widest uppercase px-5 py-2 hover:bg-[#ffd700] transition-colors">
            SEARCH
          </button>
        </div>
      </div>
    </nav>
  );
}

function AeolusLogo() {
  return (
    <svg
      viewBox="0 0 110 28"
      className="h-6 w-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AEOLUS"
    >
      <text
        x="0"
        y="22"
        fontFamily="'Arial Black', 'Arial', sans-serif"
        fontWeight="900"
        fontSize="22"
        fill="#E8C200"
        letterSpacing="3"
      >
        AE
      </text>
      <circle cx="50" cy="14" r="8" stroke="#E8C200" strokeWidth="2" fill="none" />
      <circle cx="50" cy="14" r="3" fill="#E8C200" />
      <text
        x="63"
        y="22"
        fontFamily="'Arial Black', 'Arial', sans-serif"
        fontWeight="900"
        fontSize="22"
        fill="#E8C200"
        letterSpacing="3"
      >
        LUS
      </text>
    </svg>
  );
}

function NavLinks() {
  const links = ["HOME", "TIRES", "ABOUT", "MEDIA", "CONTACT"];
  return (
    <ul className="flex items-center gap-7">
      {links.map((link) => (
        <li key={link}>
          <a
            href="#"
            className="text-xs font-semibold tracking-widest text-white/80 hover:text-white transition-colors"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Hero() {
  return (
    <section className="bg-black min-h-screen flex flex-col justify-end px-8 pb-24 pt-16">
      <div className="max-w-[1400px] mx-auto w-full">
        <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-black leading-[0.9] tracking-tight uppercase mb-8">
          <span className="block text-white">DRIVING</span>
          <span className="block text-[#E8C200]">THE WORLD</span>
          <span className="block text-white">TOGETHER</span>
        </h1>
        <p className="text-zinc-300 text-base leading-relaxed max-w-md mb-3">
          Uncompromising radial truck tires for the modern global fleet.
        </p>
        <p className="text-zinc-300 text-base leading-relaxed max-w-md mb-12">
          Built for durability. Engineered for the long haul.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-3 text-white text-xs font-bold tracking-widest uppercase border-b border-white/40 pb-1 hover:border-white transition-colors group"
        >
          EXPLORE OUR TIRE LINE UP
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  );
}

function FeaturePillars() {
  const features = [
    {
      title: "QUALITY ENGINEERING",
      body: "Precision compounding and optimized footprint mechanics ensure even wear and radically reduced rolling resistance across diverse terrains.",
    },
    {
      title: "MAXIMUM DURABILITY",
      body: "Heavy-duty casing construction designed to withstand severe load stresses, maximizing uptime for commercial demands.",
    },
    {
      title: "ELITE RETREADABILITY",
      body: "High-integrity belts and premium bead construction guarantee multiple life cycles, delivering a superior cost-per-mile ratio.",
    },
  ];

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-3 gap-0 divide-x divide-zinc-200">
          {features.map((f) => (
            <div key={f.title} className="px-12 first:pl-0 last:pr-0">
              <h3 className="text-black text-sm font-black tracking-widest uppercase mb-3">
                {f.title}
              </h3>
              <div className="w-8 h-0.5 bg-[#E8C200] mb-5" />
              <p className="text-zinc-600 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PRODUCT_FEATURES = [
  "3D Sipe & Block Pattern Design",
  "Wider Tread Profile",
  "Low Rolling Resistance Compound",
  "Optimized for Efficiency",
];

function ProductCard() {
  return (
    <div className="bg-zinc-900 flex flex-col">
      <div className="w-full bg-zinc-800 aspect-[4/3]" />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-end mb-3">
          <span className="text-[#E8C200] text-[10px] font-black tracking-widest uppercase">
            BEST SELLER
          </span>
        </div>
        <h3 className="text-white text-xl font-black uppercase tracking-wide mb-2">
          NEO FUEL D3
        </h3>
        <p className="text-zinc-400 text-sm mb-6">
          Long-haul efficiency with dependable traction.
        </p>
        <ul className="flex flex-col gap-0 mt-auto">
          {PRODUCT_FEATURES.map((feat, i) => (
            <li key={feat}>
              {i > 0 && <div className="border-t border-zinc-700 my-3" />}
              <span className="text-zinc-300 text-xs tracking-wide">{feat}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProductGrid() {
  return (
    <section className="bg-black py-20 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-3 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
}

function EngineeringCapabilities() {
  const panels = [
    {
      title: "ENGINEERING & DESIGN CONTROL",
      body: "Products are developed with clear structural logic, application requirements, and performance objectives — not trial-and-error sourcing.",
    },
    {
      title: "RAW MATERIAL SOURCING",
      body: "Long-term supplier partnerships/relationships allow for stable processes, controlled materials, and repeatable quality over time.",
    },
  ];

  return (
    <section className="bg-black py-0 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 gap-6">
          {panels.map((p) => (
            <div key={p.title} className="bg-zinc-900 flex flex-col">
              <div className="p-10 flex-1">
                <h3 className="text-white text-sm font-black tracking-widest uppercase mb-4">
                  {p.title}
                </h3>
                <div className="w-8 h-0.5 bg-[#E8C200] mb-5" />
                <p className="text-zinc-400 text-sm leading-relaxed">{p.body}</p>
              </div>
              <div className="w-full bg-zinc-800 h-48" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngineeringApproach() {
  return (
    <section className="mt-20">
      <div className="bg-[#E8C200] py-12 px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tight leading-tight">
            <span className="block text-white">DISCOVER OUR</span>
            <span className="block text-black">ENGINEERING APPROACH</span>
          </h2>
        </div>
      </div>
      <div className="bg-black px-8 pb-0">
        <div className="max-w-[1400px] mx-auto">
          <div className="w-full bg-zinc-900 h-72" />
        </div>
      </div>
      <div className="bg-black px-8 pb-20 pt-10">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
            Each tire model undergoes structured testing to verify durability, load handling, and
            consistency under real-world conditions.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-16 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-4 gap-12">
          <div>
            <div className="text-[#E8C200] font-black text-lg tracking-widest uppercase mb-4">
              AEOLUS
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Engineered for the long haul. Premium radial truck tires delivering uncompromising
              quality and retreadability.
            </p>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-5">
              Tire Categories
            </h4>
            <ul className="space-y-3">
              {["Premium TBR", "Standard TBR", "OTR", "Catalog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-500 text-xs hover:text-zinc-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {["Tires", "About", "Media", "Contact", "Search"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-500 text-xs hover:text-zinc-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-5">
              Connect with Us
            </h4>
            <ul className="space-y-3">
              {["X", "LinkedIn", "Facebook"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-500 text-xs hover:text-zinc-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
