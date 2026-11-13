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
    <section id="capabilities" className="bg-[#1D1D1F] text-white py-24 md:py-32 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header (Echoing Reference 1's "HOW CAN // WE HELP YOU") */}
        <div className="pb-16 border-b border-white/10">
          <div className="text-xs font-bold tracking-widest text-[#0071E3] font-editorial-mono uppercase mb-3">
            // 01 CORE CAPABILITIES & DISCIPLINES
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase leading-[0.95]">
            How Can // <br className="hidden sm:inline" />We Engineer For You
          </h2>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-editorial-mono text-[#D9D9D9]/70">
            <span>MODERN CMS ARCHITECTURE • DECOUPLED STACKS • SUB-SECOND VELOCITY</span>
            <span>CLICK TO INSPECT TECHNICAL DELIVERABLES [+]</span>
          </div>
        </div>

        {/* Asymmetrical Staggered Modular Grid (Inspired by Reference 1 Bluemint Studio) */}
        {/* Strictly avoiding standard 3-in-a-row cards: using an intentional offset 2-row staggered composition */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* BLOCK 01: Headless Architecture (Dark Module, Left Span 7) */}
          <div className="md:col-span-7 bg-[#242426] border border-white/10 p-8 sm:p-10 flex flex-col justify-between min-h-[380px] hover:border-white/30 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-bold font-editorial-mono text-[#0071E3]">
                  {SERVICES_CAPABILITIES[0].code}
                </span>
                <button
                  onClick={() => toggleExpand(SERVICES_CAPABILITIES[0].id)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
                  aria-label="Expand service details"
                >
                  {activeExpanded === SERVICES_CAPABILITIES[0].id ? (
                    <Minus className="w-5 h-5 text-[#0071E3]" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </button>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mt-6">
                {SERVICES_CAPABILITIES[0].title}
              </h3>
              <p className="text-sm text-[#D9D9D9] mt-3 leading-relaxed">
                {SERVICES_CAPABILITIES[0].tagline}
              </p>

              {/* Supported Platforms */}
              <div className="mt-6 flex flex-wrap gap-2">
                {SERVICES_CAPABILITIES[0].cmsPlatforms.map((platform) => (
                  <span
                    key={platform}
                    className="px-2.5 py-1 text-[11px] font-editorial-mono bg-white/5 border border-white/10 text-neutral-300"
                  >
                    {platform}
                  </span>
                ))}
              </div>

              {/* Expandable Deliverables */}
              {activeExpanded === SERVICES_CAPABILITIES[0].id && (
                <div className="mt-6 pt-6 border-t border-white/10 space-y-3 animate-in fade-in duration-200">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white/50 font-editorial-mono">
                    TECHNICAL DELIVERABLES:
                  </span>
                  {SERVICES_CAPABILITIES[0].deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#D9D9D9]">
                      <span className="text-[#0071E3] font-editorial-mono">+</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-editorial-mono text-[#0F766E]">
                {SERVICES_CAPABILITIES[0].editorialImpact}
              </span>
              <button
                onClick={() => onSelectService(SERVICES_CAPABILITIES[0].title)}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#0071E3] transition-colors"
              >
                <span>Select Architecture</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* BLOCK 02: High-Fashion Frontend Flagships (White Contrast Module, Right Span 5, Offset) */}
          <div className="md:col-span-5 bg-white text-[#1D1D1F] border border-white p-8 sm:p-10 flex flex-col justify-between min-h-[420px] shadow-2xl transition-all duration-300">
            <div>
              <div className="flex items-center justify-between border-b border-[#D9D9D9] pb-4">
                <span className="text-xs font-bold font-editorial-mono text-[#0071E3]">
                  {SERVICES_CAPABILITIES[1].code}
                </span>
                <button
                  onClick={() => toggleExpand(SERVICES_CAPABILITIES[1].id)}
                  className="p-1.5 rounded-full hover:bg-neutral-100 text-[#1D1D1F] transition-colors"
                  aria-label="Expand service details"
                >
                  {activeExpanded === SERVICES_CAPABILITIES[1].id ? (
                    <Minus className="w-5 h-5 text-[#0071E3]" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </button>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#1D1D1F] mt-6">
                {SERVICES_CAPABILITIES[1].title}
              </h3>
              <p className="text-sm text-neutral-700 mt-3 leading-relaxed">
                {SERVICES_CAPABILITIES[1].tagline}
              </p>

              {/* Supported Platforms */}
              <div className="mt-6 flex flex-wrap gap-2">
                {SERVICES_CAPABILITIES[1].cmsPlatforms.map((platform) => (
                  <span
                    key={platform}
                    className="px-2.5 py-1 text-[11px] font-editorial-mono bg-[#F5F5F7] border border-[#D9D9D9] text-[#1D1D1F]"
                  >
                    {platform}
                  </span>
                ))}
              </div>

              {/* Expandable Deliverables */}
              {activeExpanded === SERVICES_CAPABILITIES[1].id && (
                <div className="mt-6 pt-6 border-t border-[#D9D9D9] space-y-3 animate-in fade-in duration-200">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500 font-editorial-mono">
                    DESIGN SPECIFICATIONS:
                  </span>
                  {SERVICES_CAPABILITIES[1].deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-800">
                      <span className="text-[#0071E3] font-editorial-mono">+</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-[#D9D9D9] flex items-center justify-between">
              <span className="text-xs font-editorial-mono text-[#0F766E] font-medium">
                {SERVICES_CAPABILITIES[1].editorialImpact}
              </span>
              <button
                onClick={() => onSelectService(SERVICES_CAPABILITIES[1].title)}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1D1D1F] hover:text-[#0071E3] transition-colors"
              >
                <span>Select Frontend</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* BLOCK 03: Global Edge Delivery (Light Contrast Module, Left Span 5) */}
          <div className="md:col-span-5 bg-[#F5F5F7] text-[#1D1D1F] border border-[#D9D9D9] p-8 sm:p-10 flex flex-col justify-between min-h-[380px] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between border-b border-[#D9D9D9] pb-4">
                <span className="text-xs font-bold font-editorial-mono text-[#0071E3]">
                  {SERVICES_CAPABILITIES[2].code}
                </span>
                <button
                  onClick={() => toggleExpand(SERVICES_CAPABILITIES[2].id)}
                  className="p-1.5 rounded-full hover:bg-neutral-200 text-[#1D1D1F] transition-colors"
                  aria-label="Expand service details"
                >
                  {activeExpanded === SERVICES_CAPABILITIES[2].id ? (
                    <Minus className="w-5 h-5 text-[#0071E3]" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </button>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#1D1D1F] mt-6">
                {SERVICES_CAPABILITIES[2].title}
              </h3>
              <p className="text-sm text-neutral-700 mt-3 leading-relaxed">
                {SERVICES_CAPABILITIES[2].tagline}
              </p>

              {/* Supported Platforms */}
              <div className="mt-6 flex flex-wrap gap-2">
                {SERVICES_CAPABILITIES[2].cmsPlatforms.map((platform) => (
                  <span
                    key={platform}
                    className="px-2.5 py-1 text-[11px] font-editorial-mono bg-white border border-[#D9D9D9] text-[#1D1D1F]"
                  >
                    {platform}
                  </span>
                ))}
              </div>

              {/* Expandable Deliverables */}
              {activeExpanded === SERVICES_CAPABILITIES[2].id && (
                <div className="mt-6 pt-6 border-t border-[#D9D9D9] space-y-3 animate-in fade-in duration-200">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500 font-editorial-mono">
                    EDGE PERFORMANCE SPECS:
                  </span>
                  {SERVICES_CAPABILITIES[2].deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-800">
                      <span className="text-[#0071E3] font-editorial-mono">+</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-[#D9D9D9] flex items-center justify-between">
              <span className="text-xs font-editorial-mono text-[#0F766E] font-medium">
                {SERVICES_CAPABILITIES[2].editorialImpact}
              </span>
              <button
                onClick={() => onSelectService(SERVICES_CAPABILITIES[2].title)}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1D1D1F] hover:text-[#0071E3] transition-colors"
              >
                <span>Select Edge</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* BLOCK 04: Monolith-to-Headless Migration (Dark Module, Right Span 7) */}
          <div className="md:col-span-7 bg-[#242426] border border-white/10 p-8 sm:p-10 flex flex-col justify-between min-h-[380px] hover:border-white/30 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-bold font-editorial-mono text-[#0071E3]">
                  {SERVICES_CAPABILITIES[3].code}
                </span>
                <button
                  onClick={() => toggleExpand(SERVICES_CAPABILITIES[3].id)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
                  aria-label="Expand service details"
                >
                  {activeExpanded === SERVICES_CAPABILITIES[3].id ? (
                    <Minus className="w-5 h-5 text-[#0071E3]" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </button>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mt-6">
                {SERVICES_CAPABILITIES[3].title}
              </h3>
              <p className="text-sm text-[#D9D9D9] mt-3 leading-relaxed">
                {SERVICES_CAPABILITIES[3].tagline}
              </p>

              {/* Supported Platforms */}
              <div className="mt-6 flex flex-wrap gap-2">
                {SERVICES_CAPABILITIES[3].cmsPlatforms.map((platform) => (
                  <span
                    key={platform}
                    className="px-2.5 py-1 text-[11px] font-editorial-mono bg-white/5 border border-white/10 text-neutral-300"
                  >
                    {platform}
                  </span>
                ))}
              </div>

              {/* Expandable Deliverables */}
              {activeExpanded === SERVICES_CAPABILITIES[3].id && (
                <div className="mt-6 pt-6 border-t border-white/10 space-y-3 animate-in fade-in duration-200">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white/50 font-editorial-mono">
                    MIGRATION INTEGRITY SPECS:
                  </span>
                  {SERVICES_CAPABILITIES[3].deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#D9D9D9]">
                      <span className="text-[#0071E3] font-editorial-mono">+</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-editorial-mono text-[#0F766E]">
                {SERVICES_CAPABILITIES[3].editorialImpact}
              </span>
              <button
                onClick={() => onSelectService(SERVICES_CAPABILITIES[3].title)}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#0071E3] transition-colors"
              >
                <span>Select Migration</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
