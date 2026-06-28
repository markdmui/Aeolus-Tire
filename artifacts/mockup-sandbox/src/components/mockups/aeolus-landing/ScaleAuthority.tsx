import React, { useEffect, useState } from 'react';

export function ScaleAuthority() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-[#F2C94C] selection:text-black" style={{ fontFamily: '"Inter", sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
        
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeUpAnim 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes fadeUpAnim {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        
        .stat-number {
          font-variant-numeric: tabular-nums;
          letter-spacing: -0.04em;
        }
        
        .border-gradient {
          position: relative;
        }
        .border-gradient::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(180deg, rgba(242, 201, 76, 0.3) 0%, rgba(242, 201, 76, 0) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: Exclude;
          pointer-events: none;
        }

        .hero-bg {
          background-image: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 100%), url('/__mockup/images/aeolus-landing/scale-hero.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#F2C94C] rounded-sm flex items-center justify-center text-black font-black text-xl leading-none">A</div>
            <span className="text-xl font-bold tracking-tight">AEOLUS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Products</a>
            <a href="#" className="hover:text-white transition-colors">Technology</a>
            <a href="#" className="hover:text-white transition-colors">Global Network</a>
            <a href="#" className="hover:text-white transition-colors">About Us</a>
          </div>
          <button className="bg-[#F2C94C] text-black px-6 py-2.5 text-sm font-bold hover:bg-yellow-400 transition-colors uppercase tracking-wider">
            CONTACT SALES
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 hero-bg min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <p className={`text-[#F2C94C] font-bold tracking-[0.2em] uppercase mb-6 ${mounted ? 'fade-up' : 'opacity-0'}`}>
              The Authority in Commercial Mobility
            </p>
            <h1 className={`text-6xl md:text-8xl lg:text-[140px] font-black leading-none stat-number tracking-tighter mb-8 ${mounted ? 'fade-up delay-100' : 'opacity-0'}`}>
              7,000,000
            </h1>
            <p className={`text-3xl md:text-5xl font-medium text-gray-300 leading-tight mb-12 max-w-3xl ${mounted ? 'fade-up delay-200' : 'opacity-0'}`}>
              Truck & Bus Radial Tires Engineered and Produced Annually.
            </p>
            <div className={`flex flex-wrap gap-4 ${mounted ? 'fade-up delay-300' : 'opacity-0'}`}>
              <button className="bg-[#F2C94C] text-black px-8 py-4 font-bold text-lg hover:bg-white transition-colors">
                EXPLORE PRODUCTS
              </button>
              <button className="border border-white/20 bg-black/50 backdrop-blur-sm px-8 py-4 font-bold text-lg hover:bg-white/10 transition-colors">
                VIEW GLOBAL CAPACITY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-24 bg-black border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            <div className="bg-black p-8 md:p-12 flex flex-col justify-between">
              <span className="text-[#F2C94C] text-5xl md:text-7xl font-black stat-number mb-6 block">140+</span>
              <span className="text-gray-400 font-medium text-sm md:text-base uppercase tracking-wider">Countries Served Globally</span>
            </div>
            <div className="bg-black p-8 md:p-12 flex flex-col justify-between">
              <span className="text-white text-5xl md:text-7xl font-black stat-number mb-6 block">233</span>
              <span className="text-gray-400 font-medium text-sm md:text-base uppercase tracking-wider">Active Engineering Patents</span>
            </div>
            <div className="bg-black p-8 md:p-12 flex flex-col justify-between">
              <span className="text-white text-5xl md:text-7xl font-black stat-number mb-6 block">1000+</span>
              <span className="text-gray-400 font-medium text-sm md:text-base uppercase tracking-wider">Tire Specifications</span>
            </div>
            <div className="bg-black p-8 md:p-12 flex flex-col justify-between">
              <span className="text-[#F2C94C] text-5xl md:text-7xl font-black stat-number mb-6 block">15</span>
              <span className="text-gray-400 font-medium text-sm md:text-base uppercase tracking-wider">Years Top 500 Chinese Co.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Evidence */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <img src="/__mockup/images/aeolus-landing/scale-global.png" alt="Global Fleet" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                SCALE IS OUR <br/><span className="text-[#F2C94C]">EVIDENCE</span>.
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                When you produce over 7 million TBR and 800,000 OTR tires annually, quality isn't an option—it's a statistical necessity. Our unmatched manufacturing scale allows us to invest heavily in R&D, delivering premium performance at global volume.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full border border-[#F2C94C] flex items-center justify-center text-[#F2C94C] shrink-0 mt-1">✓</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">State-of-the-Art Facilities</h4>
                    <p className="text-gray-500">Fully automated production lines ensuring zero-tolerance precision.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full border border-[#F2C94C] flex items-center justify-center text-[#F2C94C] shrink-0 mt-1">✓</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Global Testing Standards</h4>
                    <p className="text-gray-500">Rigorous testing across 140+ distinct geographical climates.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square border border-white/20 p-4 border-gradient bg-black/50 backdrop-blur-md">
                <img src="/__mockup/images/aeolus-landing/scale-patents.png" alt="R&D" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#F2C94C] text-black p-8 max-w-xs shadow-2xl">
                <p className="font-black text-5xl mb-2 stat-number">800K</p>
                <p className="font-bold uppercase tracking-wider text-sm">OTR Tires Produced Annually for the world's harshest environments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Lineup - Evidence of Scale */}
      <section className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="text-[#F2C94C] font-bold tracking-[0.2em] uppercase mb-4">The Neo Series</p>
              <h2 className="text-5xl font-black">ENGINEERED FOR EXTREMES</h2>
            </div>
            <a href="#" className="text-white font-bold border-b-2 border-[#F2C94C] pb-1 hover:text-[#F2C94C] transition-colors uppercase tracking-wider">
              View All 1000+ Specs
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Neo Fuel G3", type: "Long Haul / Steer", desc: "Maximum fuel efficiency for global logistics operations." },
              { name: "Neo Allroads S", type: "Regional / All Position", desc: "Unrelenting durability for varied road conditions." },
              { name: "ASR 79", type: "Heavy Duty", desc: "High-load capacity engineered for maximum payload." }
            ].map((product, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-[#111] border border-white/5 mb-6 relative overflow-hidden flex items-center justify-center border-gradient">
                  <img src="/__mockup/images/aeolus-landing/scale-tire.png" alt={product.name} className="w-3/4 h-auto object-contain mix-blend-lighten group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>
                <h3 className="text-2xl font-black mb-2">{product.name}</h3>
                <p className="text-[#F2C94C] font-bold text-sm uppercase tracking-wider mb-3">{product.type}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden bg-[#F2C94C]">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-black mb-8">PARTNER WITH THE AUTHORITY.</h2>
          <p className="text-black/80 font-medium text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Equip your fleet with the strength of 7 million tires. Contact our global sales team today.
          </p>
          <button className="bg-black text-white px-10 py-5 font-black text-lg hover:bg-gray-900 transition-colors uppercase tracking-wider shadow-xl hover:-translate-y-1 transform duration-200">
            CONNECT WITH DISTRIBUTORS
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#F2C94C] rounded-sm flex items-center justify-center text-black font-black text-xl leading-none">A</div>
              <span className="text-xl font-bold tracking-tight text-white">AEOLUS</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-6">
              The global authority in commercial mobility, producing 7M TBR tires annually for 140+ countries.
            </p>
            <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Aeolus Tyres. All rights reserved.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Products</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-[#F2C94C] transition-colors">Neo Fuel Series</a></li>
              <li><a href="#" className="hover:text-[#F2C94C] transition-colors">Neo Allroads Series</a></li>
              <li><a href="#" className="hover:text-[#F2C94C] transition-colors">ASR & ADR Series</a></li>
              <li><a href="#" className="hover:text-[#F2C94C] transition-colors">OTR Solutions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-[#F2C94C] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#F2C94C] transition-colors">Global Network</a></li>
              <li><a href="#" className="hover:text-[#F2C94C] transition-colors">Technology & R&D</a></li>
              <li><a href="#" className="hover:text-[#F2C94C] transition-colors">Contact Sales</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
