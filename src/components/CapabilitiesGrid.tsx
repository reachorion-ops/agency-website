import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { SERVICES_CAPABILITIES } from '../data/agencyData';

interface CapabilitiesGridProps {
  onSelectService: (serviceTitle: string) => void;
}

export const CapabilitiesGrid: React.FC<CapabilitiesGridProps> = ({ onSelectService }) => {
  const [activeExpanded, setActiveExpanded] = useState<string | null>(SERVICES_CAPABILITIES[0].id);

  const toggleExpand = (id: string) => {
    setActiveExpanded(activeExpanded === id ? null : id);
  };

  return (
    <section id="capabilities" className="bg-[#1D1D1F] text-white min-h-screen flex flex-col justify-center py-20 md:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Section Header */}
        <div className="pb-10 border-b border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold tracking-widest text-[#0071E3] font-editorial-mono uppercase mb-2">
              // 02 SCOPE OF SERVICES & CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95]">
              Everything your CMS needs, under one roof.
            </h2>
          </div>
          <div className="text-xs font-editorial-mono text-[#D9D9D9]/70 text-left sm:text-right">
            HEADLESS • TRADITIONAL • HYBRID • WEBSITES • SAAS MVPS • SEO + AIO
          </div>
        </div>

        {/* Asymmetrical Staggered Modular Grid (Unified, controlled height) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

          {/* BLOCK 01: Headless Architecture (Dark Module, Span 7) */}
          <div className="md:col-span-7 bg-[#242426] border border-white/10 p-6 sm:p-8 flex flex-col justify-between min-h-[300px] hover:border-white/30 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold font-editorial-mono text-[#0071E3]">
                  {SERVICES_CAPABILITIES[0].code}
                </span>
                <button
                  onClick={() => toggleExpand(SERVICES_CAPABILITIES[0].id)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
                  aria-label="Expand service details"
                >
                  {activeExpanded === SERVICES_CAPABILITIES[0].id ? (
                    <Minus className="w-4 h-4 text-[#0071E3]" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </button>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white mt-4">
                {SERVICES_CAPABILITIES[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#D9D9D9] mt-2 leading-relaxed">
                {SERVICES_CAPABILITIES[0].tagline}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {SERVICES_CAPABILITIES[0].cmsPlatforms.map((platform) => (
                  <span
                    key={platform}
                    className="px-2 py-0.5 text-[10px] font-editorial-mono bg-white/5 border border-white/10 text-neutral-300"
                  >
                    {platform}
                  </span>
                ))}
              </div>

              {activeExpanded === SERVICES_CAPABILITIES[0].id && (
                <div className="mt-4 pt-4 border-t border-white/10 space-y-2 animate-in fade-in duration-200">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white/50 font-editorial-mono">
                    TECHNICAL DELIVERABLES:
                  </span>
                  {SERVICES_CAPABILITIES[0].deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#D9D9D9]">
                      <span className="text-[#0071E3] font-editorial-mono">+</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <span className="text-xs font-editorial-mono text-[#0F766E] font-medium">
                {SERVICES_CAPABILITIES[0].editorialImpact}
              </span>
              <button
                onClick={() => onSelectService(SERVICES_CAPABILITIES[0].title)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#0071E3] text-[#1D1D1F] hover:text-white border border-white hover:border-[#0071E3] text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-sm group/btn shrink-0"
              >
                <span>Select Architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* BLOCK 02: Editorial Frontend Flagships (White Contrast Module, Span 5) */}
          <div className="md:col-span-5 bg-white text-[#1D1D1F] border border-white p-6 sm:p-8 flex flex-col justify-between min-h-[300px] shadow-2xl transition-all duration-300">
            <div>
              <div className="flex items-center justify-between border-b border-[#D9D9D9] pb-3">
                <span className="text-xs font-bold font-editorial-mono text-[#0071E3]">
                  {SERVICES_CAPABILITIES[1].code}
                </span>
                <button
                  onClick={() => toggleExpand(SERVICES_CAPABILITIES[1].id)}
                  className="p-1.5 rounded-full hover:bg-neutral-100 text-[#1D1D1F] transition-colors"
                  aria-label="Expand service details"
                >
                  {activeExpanded === SERVICES_CAPABILITIES[1].id ? (
                    <Minus className="w-4 h-4 text-[#0071E3]" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </button>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#1D1D1F] mt-4">
                {SERVICES_CAPABILITIES[1].title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 mt-2 leading-relaxed">
                {SERVICES_CAPABILITIES[1].tagline}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {SERVICES_CAPABILITIES[1].cmsPlatforms.map((platform) => (
                  <span
                    key={platform}
                    className="px-2 py-0.5 text-[10px] font-editorial-mono bg-[#F5F5F7] border border-[#D9D9D9] text-[#1D1D1F]"
                  >
                    {platform}
                  </span>
                ))}
              </div>

              {activeExpanded === SERVICES_CAPABILITIES[1].id && (
                <div className="mt-4 pt-4 border-t border-[#D9D9D9] space-y-2 animate-in fade-in duration-200">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500 font-editorial-mono">
                    DESIGN SPECIFICATIONS:
                  </span>
                  {SERVICES_CAPABILITIES[1].deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-800">
                      <span className="text-[#0071E3] font-editorial-mono">+</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#D9D9D9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <span className="text-xs font-editorial-mono text-[#0F766E] font-medium">
                {SERVICES_CAPABILITIES[1].editorialImpact}
              </span>
              <button
                onClick={() => onSelectService(SERVICES_CAPABILITIES[1].title)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1D1D1F] hover:bg-[#0071E3] text-white border border-[#1D1D1F] hover:border-[#0071E3] text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-sm group/btn shrink-0"
              >
                <span>Select Frontend</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* BLOCK 03: Global Edge Delivery (Light Module, Span 5) */}
          <div className="md:col-span-5 bg-[#F5F5F7] text-[#1D1D1F] border border-[#D9D9D9] p-6 sm:p-8 flex flex-col justify-between min-h-[300px] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between border-b border-[#D9D9D9] pb-3">
                <span className="text-xs font-bold font-editorial-mono text-[#0071E3]">
                  {SERVICES_CAPABILITIES[2].code}
                </span>
                <button
                  onClick={() => toggleExpand(SERVICES_CAPABILITIES[2].id)}
                  className="p-1.5 rounded-full hover:bg-neutral-200 text-[#1D1D1F] transition-colors"
                  aria-label="Expand service details"
                >
                  {activeExpanded === SERVICES_CAPABILITIES[2].id ? (
                    <Minus className="w-4 h-4 text-[#0071E3]" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </button>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#1D1D1F] mt-4">
                {SERVICES_CAPABILITIES[2].title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 mt-2 leading-relaxed">
                {SERVICES_CAPABILITIES[2].tagline}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {SERVICES_CAPABILITIES[2].cmsPlatforms.map((platform) => (
                  <span
                    key={platform}
                    className="px-2 py-0.5 text-[10px] font-editorial-mono bg-white border border-[#D9D9D9] text-[#1D1D1F]"
                  >
                    {platform}
                  </span>
                ))}
              </div>

              {activeExpanded === SERVICES_CAPABILITIES[2].id && (
                <div className="mt-4 pt-4 border-t border-[#D9D9D9] space-y-2 animate-in fade-in duration-200">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500 font-editorial-mono">
                    EDGE PERFORMANCE SPECS:
                  </span>
                  {SERVICES_CAPABILITIES[2].deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-800">
                      <span className="text-[#0071E3] font-editorial-mono">+</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#D9D9D9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <span className="text-xs font-editorial-mono text-[#0F766E] font-medium">
                {SERVICES_CAPABILITIES[2].editorialImpact}
              </span>
              <button
                onClick={() => onSelectService(SERVICES_CAPABILITIES[2].title)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1D1D1F] hover:bg-[#0071E3] text-white border border-[#1D1D1F] hover:border-[#0071E3] text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-sm group/btn shrink-0"
              >
                <span>Select Edge</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* BLOCK 04: Monolith Migration (Dark Module, Span 7) */}
          <div className="md:col-span-7 bg-[#242426] border border-white/10 p-6 sm:p-8 flex flex-col justify-between min-h-[300px] hover:border-white/30 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold font-editorial-mono text-[#0071E3]">
                  {SERVICES_CAPABILITIES[3].code}
                </span>
                <button
                  onClick={() => toggleExpand(SERVICES_CAPABILITIES[3].id)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
                  aria-label="Expand service details"
                >
                  {activeExpanded === SERVICES_CAPABILITIES[3].id ? (
                    <Minus className="w-4 h-4 text-[#0071E3]" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </button>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white mt-4">
                {SERVICES_CAPABILITIES[3].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#D9D9D9] mt-2 leading-relaxed">
                {SERVICES_CAPABILITIES[3].tagline}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {SERVICES_CAPABILITIES[3].cmsPlatforms.map((platform) => (
                  <span
                    key={platform}
                    className="px-2 py-0.5 text-[10px] font-editorial-mono bg-white/5 border border-white/10 text-neutral-300"
                  >
                    {platform}
                  </span>
                ))}
              </div>

              {activeExpanded === SERVICES_CAPABILITIES[3].id && (
                <div className="mt-4 pt-4 border-t border-white/10 space-y-2 animate-in fade-in duration-200">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white/50 font-editorial-mono">
                    MIGRATION INTEGRITY SPECS:
                  </span>
                  {SERVICES_CAPABILITIES[3].deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#D9D9D9]">
                      <span className="text-[#0071E3] font-editorial-mono">+</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <span className="text-xs font-editorial-mono text-[#0F766E] font-medium">
                {SERVICES_CAPABILITIES[3].editorialImpact}
              </span>
              <button
                onClick={() => onSelectService(SERVICES_CAPABILITIES[3].title)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#0071E3] text-[#1D1D1F] hover:text-white border border-white hover:border-[#0071E3] text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-sm group/btn shrink-0"
              >
                <span>Select Migration</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Core Technology Stack Bar (Direct from Proposal Page 4) */}
        <div className="mt-8 p-4 bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-editorial-mono text-xs">
          <div className="flex items-center gap-2 text-[#0071E3] font-bold">
            <span className="px-2 py-0.5 bg-[#0071E3] text-white text-[10px] uppercase font-bold tracking-wider">
              STACK
            </span>
            <span className="text-white/80">PRODUCTION ENGINES</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[#D9D9D9]/80 text-[11px] uppercase tracking-wider">
            <span>SANITY.IO</span>
            <span>•</span>
            <span>PAYLOAD 3.0</span>
            <span>•</span>
            <span>CONTENTFUL</span>
            <span>•</span>
            <span>STRAPI 5</span>
            <span>•</span>
            <span>NEXT.JS APP ROUTER</span>
            <span>•</span>
            <span>REACT 18</span>
          </div>
        </div>

      </div>
    </section>
  );
};
