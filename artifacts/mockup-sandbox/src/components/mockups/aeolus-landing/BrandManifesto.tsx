import React, { useEffect, useRef } from 'react';
import './_group.css';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';

export function BrandManifesto() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-[#F2C94C] selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 mix-blend-difference flex justify-between items-center">
        <div className="text-2xl font-display font-bold tracking-tighter uppercase tracking-[0.2em]">AEOLUS</div>
        <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase font-medium">
          <a href="#" className="hover:text-yellow-brand transition-colors">Philosophy</a>
          <a href="#" className="hover:text-yellow-brand transition-colors">Engineering</a>
          <a href="#" className="hover:text-yellow-brand transition-colors">TBR Range</a>
          <a href="#" className="hover:text-yellow-brand transition-colors">Global</a>
        </div>
        <button className="text-sm font-medium tracking-widest uppercase border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all">
          Contact Sales
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-end pb-24 px-8 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10" />
          <img 
            src="/__mockup/images/aeolus-landing/manifesto-hero.png" 
            alt="Hero Truck" 
            className="w-full h-full object-cover animate-slow-pan opacity-60"
          />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="reveal opacity-0 translate-y-10 flex flex-col gap-6">
            <span className="text-yellow-brand tracking-[0.3em] text-sm uppercase font-bold">The Premium Standard in TBR</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold uppercase leading-[0.85] tracking-tight">
              The World <br />
              <span className="text-stroke">Moves On</span> <br />
              Aeolus.
            </h1>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-32 md:py-48 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">
          <div className="md:col-span-4 reveal opacity-0 translate-y-10">
            <div className="w-12 h-1 bg-yellow-brand mb-8" />
            <h2 className="text-3xl font-display uppercase tracking-wider">Beyond<br />Rubber<br />& Steel.</h2>
          </div>
          <div className="md:col-span-8 reveal delay-200 opacity-0 translate-y-10">
            <p className="text-2xl md:text-4xl leading-tight font-light text-gray-300">
              We don't just manufacture tires. We engineer endurance. 
              For 15 consecutive years, we've stood among the top 500 enterprises, 
              relentlessly pushing the boundaries of commercial transport mobility.
              <br /><br />
              When the load is heavy and the distance is vast, compromise is not an option.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Parallax */}
      <section className="py-24 px-8 md:px-16 lg:px-24 border-y border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 divide-x divide-white/5">
          <div className="reveal opacity-0 translate-y-10 flex flex-col">
            <span className="text-5xl md:text-7xl font-display font-bold text-yellow-brand mb-4">7M</span>
            <span className="text-sm tracking-widest text-gray-500 uppercase">TBR Tires Annually</span>
          </div>
          <div className="reveal delay-100 opacity-0 translate-y-10 flex flex-col pl-8">
            <span className="text-5xl md:text-7xl font-display font-bold mb-4">140+</span>
            <span className="text-sm tracking-widest text-gray-500 uppercase">Countries Served</span>
          </div>
          <div className="reveal delay-200 opacity-0 translate-y-10 flex flex-col pl-8">
            <span className="text-5xl md:text-7xl font-display font-bold mb-4">233</span>
            <span className="text-sm tracking-widest text-gray-500 uppercase">Active Patents</span>
          </div>
          <div className="reveal delay-300 opacity-0 translate-y-10 flex flex-col pl-8">
            <span className="text-5xl md:text-7xl font-display font-bold mb-4">1K+</span>
            <span className="text-sm tracking-widest text-gray-500 uppercase">Specifications</span>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="relative py-32 md:py-48 px-8 md:px-16 lg:px-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/aeolus-landing/manifesto-factory.png" 
            alt="Factory" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative aspect-[3/4] overflow-hidden reveal opacity-0 translate-y-10">
              <img 
                src="/__mockup/images/aeolus-landing/manifesto-tire.png" 
                alt="Tire Close Up" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-white/10 m-4" />
            </div>
            
            <div className="order-1 lg:order-2 flex flex-col gap-12">
              <div className="reveal opacity-0 translate-y-10">
                <div className="inline-flex items-center gap-4 text-yellow-brand text-xs tracking-[0.2em] uppercase font-bold mb-6">
                  <Zap size={16} />
                  <span>Precision Engineered</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight leading-[0.9] mb-8">
                  Relentless <br /> Innovation.
                </h2>
                <p className="text-xl text-gray-400 font-light leading-relaxed">
                  Our R&D division doesn't iterate; it invents. With 233 active patents and a rigorous testing protocol, every Aeolus tire is a product of uncompromising engineering.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="reveal delay-100 opacity-0 translate-y-10 border border-white/10 p-8 bg-black/50 backdrop-blur-sm">
                  <Globe className="text-yellow-brand mb-6" size={32} />
                  <h3 className="text-lg font-bold uppercase tracking-wider mb-3">Global Intelligence</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Sourcing the finest raw materials and integrating global transport data to optimize compound formulas.</p>
                </div>
                <div className="reveal delay-200 opacity-0 translate-y-10 border border-white/10 p-8 bg-black/50 backdrop-blur-sm">
                  <Shield className="text-yellow-brand mb-6" size={32} />
                  <h3 className="text-lg font-bold uppercase tracking-wider mb-3">Maximum Uptime</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Engineered for reduced rolling resistance and extended tread life to minimize fleet operational costs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Emergence */}
      <section className="py-32 px-8 md:px-16 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 reveal opacity-0 translate-y-10">
            <div>
              <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tight">The Lineup</h2>
              <div className="w-24 h-1 bg-yellow-brand mt-8" />
            </div>
            <a href="#" className="hidden md:flex items-center gap-3 text-sm tracking-widest uppercase hover:text-yellow-brand transition-colors mt-8 md:mt-0">
              View All Specifications <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Neo Fuel G3', category: 'Long Haul / Steer', desc: 'Maximum fuel efficiency with advanced silica compounding.' },
              { name: 'ASR 79', category: 'Regional / All Position', desc: 'Exceptional mileage and even wear for regional transport.' },
              { name: 'Neo Allroads D', category: 'Mixed Service / Drive', desc: 'Superior traction and durability in demanding conditions.' }
            ].map((product, idx) => (
              <div key={idx} className={`reveal delay-${(idx + 1) * 100} opacity-0 translate-y-10 group cursor-pointer`}>
                <div className="aspect-[4/5] bg-black border border-white/10 mb-6 relative overflow-hidden flex items-center justify-center p-12">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <div className="text-stroke text-8xl font-display absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-40 transition-opacity">TBR</div>
                  <div className="relative z-20 w-full h-full border border-white/5 flex items-center justify-center bg-[#111] group-hover:bg-[#151515] transition-colors">
                    {/* Placeholder for real tire image */}
                    <div className="text-gray-600 font-display uppercase tracking-widest text-xs">Tire Render</div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-yellow-brand text-xs tracking-widest uppercase font-bold">{product.category}</span>
                  <h3 className="text-2xl font-display uppercase tracking-wide">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <a href="#" className="flex md:hidden items-center gap-3 text-sm tracking-widest uppercase hover:text-yellow-brand transition-colors mt-16">
            View All Specifications <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="relative py-48 px-8 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/aeolus-landing/manifesto-global.png" 
            alt="Global Ports" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center reveal opacity-0 translate-y-10">
          <h2 className="text-5xl md:text-8xl font-display uppercase tracking-tight leading-none mb-12">
            Equip Your <br /> Fleet.
          </h2>
          <p className="text-xl text-gray-300 font-light mb-12 max-w-2xl">
            Join the world's leading logistics operations. Contact our B2B team for specification sheets, performance data, and fleet pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-yellow-brand text-black px-12 py-5 uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors">
              Contact Sales
            </button>
            <button className="border border-white/20 bg-black/50 backdrop-blur-md px-12 py-5 uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-black transition-colors">
              Download Catalog
            </button>
          </div>
        </div>
      </section>
      
      <footer className="py-8 px-8 md:px-16 lg:px-24 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-widest">
        <div>© {new Date().getFullYear()} Aeolus Tyre Co., Ltd.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Legal</a>
        </div>
      </footer>
    </div>
  );
}
