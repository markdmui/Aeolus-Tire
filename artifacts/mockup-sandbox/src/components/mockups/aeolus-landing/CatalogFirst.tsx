import React, { useState } from 'react';
import { Search, SlidersHorizontal, ChevronDown, Check, ArrowRight, Truck, MapPin, Award, Factory } from 'lucide-react';
import './_group.css';

// Types
type TireCategory = 'All' | 'Long Haul' | 'Regional' | 'On/Off Road' | 'Urban';
type TirePosition = 'All' | 'Steer' | 'Drive' | 'Trailer';

interface Tire {
  name: string;
  category: string;
  position: string;
  loadIndex: string;
  speedSymbol: string;
  depth: string;
  image: string;
}

// Data
const TIRES: Tire[] = [
  { name: 'Neo Fuel S', category: 'Long Haul', position: 'Steer', loadIndex: '154/150', speedSymbol: 'L', depth: '14.5mm', image: '/__mockup/images/aeolus-landing/tire-steer.png' },
  { name: 'Neo Fuel D', category: 'Long Haul', position: 'Drive', loadIndex: '152/148', speedSymbol: 'M', depth: '20.0mm', image: '/__mockup/images/aeolus-landing/tire-drive.png' },
  { name: 'Neo Fuel T2', category: 'Long Haul', position: 'Trailer', loadIndex: '160/158', speedSymbol: 'K', depth: '13.0mm', image: '/__mockup/images/aeolus-landing/tire-trailer.png' },
  { name: 'Neo Allroads S', category: 'Regional', position: 'Steer', loadIndex: '156/150', speedSymbol: 'L', depth: '15.5mm', image: '/__mockup/images/aeolus-landing/tire-steer.png' },
  { name: 'Neo Allroads D', category: 'Regional', position: 'Drive', loadIndex: '152/148', speedSymbol: 'M', depth: '21.0mm', image: '/__mockup/images/aeolus-landing/tire-drive.png' },
  { name: 'ASR 79', category: 'On/Off Road', position: 'Steer', loadIndex: '156/150', speedSymbol: 'K', depth: '16.0mm', image: '/__mockup/images/aeolus-landing/tire-steer.png' },
  { name: 'ADR 78', category: 'On/Off Road', position: 'Drive', loadIndex: '156/150', speedSymbol: 'K', depth: '22.5mm', image: '/__mockup/images/aeolus-landing/tire-drive.png' },
  { name: 'ATL 08', category: 'Urban', position: 'All', loadIndex: '152/148', speedSymbol: 'J', depth: '17.0mm', image: '/__mockup/images/aeolus-landing/tire-steer.png' },
];

export function CatalogFirst() {
  const [activeCategory, setActiveCategory] = useState<TireCategory>('All');
  const [activePosition, setActivePosition] = useState<TirePosition>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTires = TIRES.filter(tire => {
    if (activeCategory !== 'All' && tire.category !== activeCategory) return false;
    if (activePosition !== 'All' && tire.position !== activePosition && tire.position !== 'All Position') return false;
    if (searchQuery && !tire.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#F2C94C] selection:text-black">
      {/* Utility Navbar */}
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="text-[#F2C94C]">AEOLUS</span> TBR
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/60">
              <a href="#" className="text-white hover:text-[#F2C94C] transition-colors">Catalog</a>
              <a href="#" className="hover:text-white transition-colors">Technology</a>
              <a href="#" className="hover:text-white transition-colors">Network</a>
              <a href="#" className="hover:text-white transition-colors">Company</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-white/80 hover:text-white transition-colors hidden md:block">
              Dealer Portal
            </button>
            <button className="bg-[#F2C94C] text-black px-5 py-2 text-sm font-bold hover:bg-[#F2C94C]/90 transition-colors">
              Find a Dealer
            </button>
          </div>
        </div>
      </nav>

      {/* Minimal Hero */}
      <header className="relative pt-24 pb-12 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/__mockup/images/aeolus-landing/hero-catalog.png" 
            alt="Truck on highway" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
        
        <div className="max-w-[1440px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 max-w-3xl">
            Engineered for the <span className="text-[#F2C94C]">long haul.</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mb-8">
            Access our complete catalog of 1000+ premium TBR specifications. 
            Find exactly what your fleet needs.
          </p>
        </div>
      </header>

      {/* Catalog Section */}
      <section className="max-w-[1440px] mx-auto px-6 py-12">
        {/* Controls Toolbar */}
        <div className="bg-[#111] border border-white/10 rounded-none p-4 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex w-full md:w-auto flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input 
              type="text" 
              placeholder="Search by pattern, e.g. Neo Fuel S"
              className="w-full bg-black border border-white/20 text-white pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#F2C94C] transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto catalog-scrollbar pb-2 md:pb-0">
            <button className="flex items-center gap-2 px-4 py-2 bg-black border border-white/20 text-sm font-medium hover:border-white/40 whitespace-nowrap">
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
            
            <div className="h-6 w-px bg-white/20 mx-2 hidden md:block"></div>
            
            <div className="flex gap-1 bg-black p-1 border border-white/10">
              {(['All', 'Long Haul', 'Regional', 'On/Off Road'] as TireCategory[]).map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === cat 
                      ? 'bg-[#222] text-white border border-white/10' 
                      : 'text-white/50 hover:text-white border border-transparent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTires.map((tire, idx) => (
            <div key={idx} className="group bg-[#0a0a0a] border border-white/10 hover:border-[#F2C94C]/50 transition-colors flex flex-col relative overflow-hidden">
              <div className="absolute top-3 right-3 flex flex-col gap-1 z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 px-2 py-0.5 backdrop-blur-md">
                  {tire.category}
                </span>
              </div>
              
              <div className="p-8 pb-4 flex justify-center bg-gradient-to-b from-[#111] to-[#050505]">
                <img 
                  src={tire.image} 
                  alt={tire.name} 
                  className="h-48 w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-5 border-t border-white/5 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-1">{tire.name}</h3>
                <p className="text-sm text-[#F2C94C] font-medium mb-4">{tire.position} Position</p>
                
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm mt-auto">
                  <div>
                    <div className="text-white/40 text-[10px] uppercase tracking-wider mb-0.5">Load Index</div>
                    <div className="font-mono text-white/90">{tire.loadIndex}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-[10px] uppercase tracking-wider mb-0.5">Speed</div>
                    <div className="font-mono text-white/90">{tire.speedSymbol}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-[10px] uppercase tracking-wider mb-0.5">Tread Depth</div>
                    <div className="font-mono text-white/90">{tire.depth}</div>
                  </div>
                </div>
                
                <button className="mt-6 w-full py-2.5 border border-white/20 text-sm font-bold hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
                  View Specs <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section (Utilitarian) */}
      <section className="border-t border-white/10 bg-[#050505] py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex flex-col pt-4 md:pt-0 md:px-6">
              <div className="text-[#F2C94C] mb-3"><Factory className="w-6 h-6" /></div>
              <div className="text-3xl font-bold font-mono tracking-tight mb-1">7M+</div>
              <div className="text-sm text-white/50 uppercase tracking-wide">TBR Produced Yearly</div>
            </div>
            <div className="flex flex-col pt-4 md:pt-0 md:px-6">
              <div className="text-[#F2C94C] mb-3"><MapPin className="w-6 h-6" /></div>
              <div className="text-3xl font-bold font-mono tracking-tight mb-1">140+</div>
              <div className="text-sm text-white/50 uppercase tracking-wide">Countries Served</div>
            </div>
            <div className="flex flex-col pt-4 md:pt-0 md:px-6">
              <div className="text-[#F2C94C] mb-3"><Truck className="w-6 h-6" /></div>
              <div className="text-3xl font-bold font-mono tracking-tight mb-1">1000+</div>
              <div className="text-sm text-white/50 uppercase tracking-wide">Tire Specifications</div>
            </div>
            <div className="flex flex-col pt-4 md:pt-0 md:px-6">
              <div className="text-[#F2C94C] mb-3"><Award className="w-6 h-6" /></div>
              <div className="text-3xl font-bold font-mono tracking-tight mb-1">Top 500</div>
              <div className="text-sm text-white/50 uppercase tracking-wide">Chinese Company</div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold tracking-tight text-white/50">
            AEOLUS TBR
          </div>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Warranty</a>
          </div>
        </div>
      </footer>
    </div>
  );
}