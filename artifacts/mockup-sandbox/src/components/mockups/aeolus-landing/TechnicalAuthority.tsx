import React, { useState } from 'react';
import './_group.css';

export function TechnicalAuthority() {
  const [activeTab, setActiveTab] = useState<'steer' | 'drive' | 'trailer'>('steer');

  return (
    <div className="technical-authority-wrapper min-h-screen relative overflow-hidden flex flex-col font-sans">
      
      {/* Navigation */}
      <nav className="border-b border-white/10 sticky top-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 text-white font-bold text-xl tracking-tight">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/000000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#F2C94C"/>
              <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="#F2C94C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            AEOLUS <span className="text-white/50 font-normal">TBR</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-white/70">
            <a href="#" className="text-white hover:text-[#F2C94C] transition-colors">SPECIFICATIONS</a>
            <a href="#" className="hover:text-[#F2C94C] transition-colors">TECHNOLOGY</a>
            <a href="#" className="hover:text-[#F2C94C] transition-colors">PERFORMANCE DATA</a>
            <a href="#" className="hover:text-[#F2C94C] transition-colors">CERTIFICATIONS</a>
          </div>
          <button className="bg-[#F2C94C] text-black px-6 py-2.5 text-sm font-bold hover:bg-[#d4b041] transition-colors">
            ACCESS CATALOG
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center tech-grid pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/aeolus-landing/technical-hero-bg.png" 
            alt="Technical Cutaway" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity animate-slow-pan"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 border border-[#F2C94C]/30 bg-[#F2C94C]/10 px-3 py-1 text-[#F2C94C] text-xs font-mono mb-6 uppercase tracking-widest">
              <span className="w-2 h-2 bg-[#F2C94C] animate-pulse-dot block"></span>
              Engineering Specification v4.2
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              PRECISION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2C94C] to-[#d4b041]">ENGINEERED.</span><br />
              FLEET PROVEN.
            </h1>
            <p className="text-lg text-white/60 mb-10 max-w-xl font-light leading-relaxed">
              Industrial-grade TBR solutions engineered for maximum tread life, structural durability, and predictable cost-per-mile performance across 1000+ specialized specifications.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#F2C94C] text-black px-8 py-4 font-bold tracking-wide hover:bg-white transition-colors flex items-center gap-3">
                VIEW TECH SPECS
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button className="border border-white/20 text-white px-8 py-4 font-bold tracking-wide hover:bg-white/10 transition-colors">
                DOWNLOAD DATA SHEET
              </button>
            </div>
          </div>

          <div className="relative h-[600px] hidden lg:block animate-fade-up delay-200">
            {/* Abstract technical visualization overlaying the background image */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-md h-full flex flex-col justify-center gap-16">
              
              <div className="flex items-center justify-end group">
                <div className="text-right mr-16">
                  <div className="text-[#F2C94C] font-mono text-xs mb-1">A01</div>
                  <div className="font-bold text-lg mb-1">Four-Belt Casing Architecture</div>
                  <div className="text-white/50 text-sm max-w-[200px]">High-tensile steel cord construction prevents casing expansion.</div>
                </div>
                <div className="w-32 h-[1px] bg-[#F2C94C]/50 relative group-hover:bg-[#F2C94C] transition-colors">
                  <div className="absolute -left-1 -top-1 w-2 h-2 bg-[#F2C94C] rotate-45"></div>
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-[#F2C94C] rounded-full group-hover:scale-150 transition-transform"></div>
                </div>
              </div>

              <div className="flex items-center justify-end group">
                <div className="text-right mr-16">
                  <div className="text-[#F2C94C] font-mono text-xs mb-1">A02</div>
                  <div className="font-bold text-lg mb-1">Optimized Bead Geometry</div>
                  <div className="text-white/50 text-sm max-w-[200px]">Reinforced bead wire package reduces fatigue and simplifies retreading.</div>
                </div>
                <div className="w-48 h-[1px] bg-[#F2C94C]/50 relative group-hover:bg-[#F2C94C] transition-colors">
                  <div className="absolute -left-1 -top-1 w-2 h-2 bg-[#F2C94C] rotate-45"></div>
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-[#F2C94C] rounded-full group-hover:scale-150 transition-transform"></div>
                </div>
              </div>

              <div className="flex items-center justify-end group">
                <div className="text-right mr-16">
                  <div className="text-[#F2C94C] font-mono text-xs mb-1">A03</div>
                  <div className="font-bold text-lg mb-1">Silica-Rich Compound</div>
                  <div className="text-white/50 text-sm max-w-[200px]">Nano-silica integration lowers rolling resistance by 12%.</div>
                </div>
                <div className="w-24 h-[1px] bg-[#F2C94C]/50 relative group-hover:bg-[#F2C94C] transition-colors">
                  <div className="absolute -left-1 -top-1 w-2 h-2 bg-[#F2C94C] rotate-45"></div>
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-[#F2C94C] rounded-full group-hover:scale-150 transition-transform"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Global Data Strip */}
      <section className="border-y border-white/10 bg-black/50 backdrop-blur-sm relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl font-bold text-white mb-2">7M+</div>
            <div className="text-[#F2C94C] text-xs font-mono uppercase tracking-wider mb-2">Units / Year</div>
            <div className="text-white/50 text-sm">TBR production capacity fulfilling global commercial demand.</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">1,000+</div>
            <div className="text-[#F2C94C] text-xs font-mono uppercase tracking-wider mb-2">Specifications</div>
            <div className="text-white/50 text-sm">Comprehensive portfolio covering every axle and application.</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">233</div>
            <div className="text-[#F2C94C] text-xs font-mono uppercase tracking-wider mb-2">Patents</div>
            <div className="text-white/50 text-sm">Proprietary compound and structural engineering innovations.</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">Top 500</div>
            <div className="text-[#F2C94C] text-xs font-mono uppercase tracking-wider mb-2">15 Consecutive Years</div>
            <div className="text-white/50 text-sm">Recognized manufacturing excellence and corporate stability.</div>
          </div>
        </div>
      </section>

      {/* Technical Portfolio Matrix */}
      <section className="py-24 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SPECIFICATION MATRIX</h2>
            <p className="text-white/60 max-w-2xl">Select the optimal tread pattern and structural rating for your operational requirements. Filter by application below.</p>
          </div>
          <div className="flex bg-white/5 p-1 border border-white/10 w-max">
            <button 
              className={`px-6 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'steer' ? 'bg-[#F2C94C] text-black' : 'text-white/60 hover:text-white'}`}
              onClick={() => setActiveTab('steer')}
            >
              Steer / All
            </button>
            <button 
              className={`px-6 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'drive' ? 'bg-[#F2C94C] text-black' : 'text-white/60 hover:text-white'}`}
              onClick={() => setActiveTab('drive')}
            >
              Drive
            </button>
            <button 
              className={`px-6 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'trailer' ? 'bg-[#F2C94C] text-black' : 'text-white/60 hover:text-white'}`}
              onClick={() => setActiveTab('trailer')}
            >
              Trailer
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="tech-border bg-white/5 p-6 group hover:border-[#F2C94C]/50 transition-colors relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-4 font-mono text-white/20 text-4xl font-bold pointer-events-none group-hover:text-[#F2C94C]/10 transition-colors">01</div>
            
            <div className="flex justify-between items-start mb-8 z-10">
              <div>
                <div className="text-[#F2C94C] text-xs font-mono mb-2 uppercase">Long Haul</div>
                <h3 className="text-2xl font-bold">Neo Fuel S</h3>
              </div>
            </div>

            <div className="w-full aspect-[4/3] bg-black/50 mb-8 flex items-center justify-center border border-white/5 relative z-10">
              <img src="/__mockup/images/aeolus-landing/neo-fuel-g3.png" alt="Neo Fuel S" className="h-full object-contain mix-blend-lighten" />
            </div>

            <div className="space-y-4 mb-8 z-10 flex-grow">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/50 text-sm">Tread Depth</span>
                <span className="font-mono font-medium">14.5 mm</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/50 text-sm">Load Index</span>
                <span className="font-mono font-medium">152/148</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/50 text-sm">Speed Symbol</span>
                <span className="font-mono font-medium">M (130 km/h)</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/50 text-sm">M+S / 3PMSF</span>
                <span className="font-mono font-medium text-[#F2C94C]">Certified</span>
              </div>
            </div>

            <button className="w-full border border-white/20 py-3 text-sm font-bold hover:bg-white hover:text-black transition-colors z-10">
              VIEW FULL SPEC
            </button>
          </div>

          {/* Card 2 */}
          <div className="tech-border bg-white/5 p-6 group hover:border-[#F2C94C]/50 transition-colors relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-4 font-mono text-white/20 text-4xl font-bold pointer-events-none group-hover:text-[#F2C94C]/10 transition-colors">02</div>
            
            <div className="flex justify-between items-start mb-8 z-10">
              <div>
                <div className="text-[#F2C94C] text-xs font-mono mb-2 uppercase">Regional / Drive</div>
                <h3 className="text-2xl font-bold">Neo Allroads D</h3>
              </div>
            </div>

            <div className="w-full aspect-[4/3] bg-black/50 mb-8 flex items-center justify-center border border-white/5 relative z-10">
              <img src="/__mockup/images/aeolus-landing/neo-fuel-g3.png" alt="Neo Allroads D" className="h-full object-contain mix-blend-lighten" />
            </div>

            <div className="space-y-4 mb-8 z-10 flex-grow">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/50 text-sm">Tread Depth</span>
                <span className="font-mono font-medium">20.0 mm</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/50 text-sm">Load Index</span>
                <span className="font-mono font-medium">156/150</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/50 text-sm">Speed Symbol</span>
                <span className="font-mono font-medium">L (120 km/h)</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/50 text-sm">Block Design</span>
                <span className="font-mono font-medium text-[#F2C94C]">High-Traction</span>
              </div>
            </div>

            <button className="w-full border border-white/20 py-3 text-sm font-bold hover:bg-white hover:text-black transition-colors z-10">
              VIEW FULL SPEC
            </button>
          </div>

          {/* Card 3 */}
          <div className="tech-border bg-white/5 p-6 group hover:border-[#F2C94C]/50 transition-colors relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-4 font-mono text-white/20 text-4xl font-bold pointer-events-none group-hover:text-[#F2C94C]/10 transition-colors">03</div>
            
            <div className="flex justify-between items-start mb-8 z-10">
              <div>
                <div className="text-[#F2C94C] text-xs font-mono mb-2 uppercase">Mixed Service</div>
                <h3 className="text-2xl font-bold">ASR 79</h3>
              </div>
            </div>

            <div className="w-full aspect-[4/3] bg-black/50 mb-8 flex items-center justify-center border border-white/5 relative z-10">
              <img src="/__mockup/images/aeolus-landing/neo-fuel-g3.png" alt="ASR 79" className="h-full object-contain mix-blend-lighten" />
            </div>

            <div className="space-y-4 mb-8 z-10 flex-grow">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/50 text-sm">Tread Depth</span>
                <span className="font-mono font-medium">17.5 mm</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/50 text-sm">Load Index</span>
                <span className="font-mono font-medium">160/156</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/50 text-sm">Speed Symbol</span>
                <span className="font-mono font-medium">K (110 km/h)</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/50 text-sm">Casing</span>
                <span className="font-mono font-medium text-[#F2C94C]">Reinforced</span>
              </div>
            </div>

            <button className="w-full border border-white/20 py-3 text-sm font-bold hover:bg-white hover:text-black transition-colors z-10">
              VIEW FULL SPEC
            </button>
          </div>

        </div>
      </section>

      {/* Engineering Deep Dive */}
      <section className="py-24 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-black border border-white/10 relative overflow-hidden group">
                  <img src="/__mockup/images/aeolus-landing/tire-tread-detail.png" alt="Tread Details" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <div className="text-[#F2C94C] font-mono text-xs mb-1">FIG 1.</div>
                    <div className="font-bold text-sm">3D Sipe Geometry</div>
                  </div>
                </div>
                <div className="aspect-square bg-black border border-white/10 relative overflow-hidden group">
                  <img src="/__mockup/images/aeolus-landing/testing-facility.png" alt="Testing Facility" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <div className="text-[#F2C94C] font-mono text-xs mb-1">FIG 2.</div>
                    <div className="font-bold text-sm">Stress Analysis Lab</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">COMPOUND & CASING INTELLIGENCE</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Aeolus engineers focus on maximizing the tire lifecycle through advanced materials science. Our proprietary mixing technology ensures uniform carbon black and silica distribution, directly reducing internal heat generation and mechanical wear.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-[#F2C94C] flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F2C94C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Armor-Ply Technology</h4>
                    <p className="text-white/50 text-sm">A specialized protective ply guards the working belts against penetration and corrosion, dramatically improving retreadability rates.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-[#F2C94C] flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F2C94C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Optimized Footprint</h4>
                    <p className="text-white/50 text-sm">FEA-designed contact patches distribute load evenly across the tread face, preventing irregular wear in high-torque applications.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-[#F2C94C] flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F2C94C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="6.5"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Cool-Running Base</h4>
                    <p className="text-white/50 text-sm">A low-hysteresis base compound dissipates heat from the tread blocks before it reaches the casing structure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 max-w-7xl mx-auto px-6 w-full">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">NEO FUEL SERIES COMPARISON</h2>
          <p className="text-white/60">Technical evaluation of primary Long Haul specifications.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left data-table border-collapse">
            <thead>
              <tr className="border-b-2 border-white/20">
                <th className="py-4 px-4 font-mono text-xs text-[#F2C94C] uppercase tracking-wider">Pattern</th>
                <th className="py-4 px-4 font-mono text-xs text-[#F2C94C] uppercase tracking-wider">Application</th>
                <th className="py-4 px-4 font-mono text-xs text-[#F2C94C] uppercase tracking-wider">Tread Depth</th>
                <th className="py-4 px-4 font-mono text-xs text-[#F2C94C] uppercase tracking-wider">Fuel Efficiency Rating</th>
                <th className="py-4 px-4 font-mono text-xs text-[#F2C94C] uppercase tracking-wider">Wet Grip</th>
                <th className="py-4 px-4 font-mono text-xs text-[#F2C94C] uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="py-4 px-4 font-bold">Neo Fuel S</td>
                <td className="py-4 px-4 text-white/70">Steer / All Position</td>
                <td className="py-4 px-4 font-mono">14.5 mm</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 text-center bg-green-600 text-white font-bold text-xs py-0.5">B</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 text-center bg-blue-600 text-white font-bold text-xs py-0.5">B</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-right">
                  <a href="#" className="text-[#F2C94C] hover:underline font-bold text-xs uppercase">Specs →</a>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold">Neo Fuel D</td>
                <td className="py-4 px-4 text-white/70">Drive</td>
                <td className="py-4 px-4 font-mono">20.5 mm</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 text-center bg-green-600 text-white font-bold text-xs py-0.5">B</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 text-center bg-blue-600 text-white font-bold text-xs py-0.5">C</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-right">
                  <a href="#" className="text-[#F2C94C] hover:underline font-bold text-xs uppercase">Specs →</a>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold">Neo Fuel T+</td>
                <td className="py-4 px-4 text-white/70">Trailer</td>
                <td className="py-4 px-4 font-mono">12.0 mm</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 text-center bg-green-500 text-white font-bold text-xs py-0.5">A</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 text-center bg-blue-600 text-white font-bold text-xs py-0.5">C</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-right">
                  <a href="#" className="text-[#F2C94C] hover:underline font-bold text-xs uppercase">Specs →</a>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold">Neo Fuel G3</td>
                <td className="py-4 px-4 text-white/70">Steer / Regional</td>
                <td className="py-4 px-4 font-mono">15.0 mm</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 text-center bg-green-600 text-white font-bold text-xs py-0.5">B</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 text-center bg-blue-500 text-white font-bold text-xs py-0.5">A</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-right">
                  <a href="#" className="text-[#F2C94C] hover:underline font-bold text-xs uppercase">Specs →</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-[#F2C94C] text-black py-20 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">ACCESS FULL TECHNICAL DOCUMENTATION.</h2>
            <p className="text-black/70 mb-8 max-w-md font-medium">
              Download complete databooks, warranty terms, and retread guidelines for the entire Aeolus TBR portfolio.
            </p>
            <div className="flex gap-4">
              <button className="bg-black text-white px-8 py-4 font-bold tracking-wide hover:bg-black/80 transition-colors">
                DOWNLOAD DATABOOK (PDF)
              </button>
            </div>
          </div>
          <div className="flex justify-end">
             <div className="w-full max-w-sm bg-black p-8 text-white">
                <h3 className="font-bold text-xl mb-4">ENGINEERING SUPPORT</h3>
                <p className="text-white/60 text-sm mb-6">Connect with our technical field engineers for fleet evaluation and specification matching.</p>
                <form className="space-y-4">
                  <input type="email" placeholder="Business Email" className="w-full bg-white/5 border border-white/20 px-4 py-3 text-sm outline-none focus:border-[#F2C94C] transition-colors" />
                  <button type="button" className="w-full bg-[#F2C94C] text-black font-bold py-3 text-sm hover:bg-white transition-colors">
                    REQUEST CONSULTATION
                  </button>
                </form>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
