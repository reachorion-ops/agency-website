import React from 'react';
import { CASE_STUDIES } from '../data/agencyData';
import { CaseStudy } from '../types';

interface CaseArchiveProps {
  onOpenCase: (caseStudy: CaseStudy) => void;
}

export const CaseArchive: React.FC<CaseArchiveProps> = ({ onOpenCase }) => {
  return (
    <section id="archive" className="bg-[#1D1D1F] text-white min-h-screen flex flex-col justify-center py-20 md:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Section Header */}
        <div className="pb-10 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold tracking-widest text-[#0071E3] font-editorial-mono uppercase mb-2">
              // 03 SELECTED COMMISSIONS
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95]">
              Look Here // Our Case Archive
            </h2>
          </div>
          <div className="text-xs font-editorial-mono text-[#D9D9D9]/70 max-w-xs text-left md:text-right">
            CURATED PRODUCTION ARCHITECTURES COMMISSIONED BY GLOBAL LEADERS IN LUXURY & COMMERCE.
          </div>
        </div>

        {/* Editorial Frame Layout (Balanced Height) */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Primary Featured Case (Large Frame, Span 7) */}
          <div
            className="lg:col-span-7 group cursor-pointer border border-white/10 bg-[#242426] p-6 hover:border-white/40 transition-all duration-300"
            onClick={() => onOpenCase(CASE_STUDIES[0])}
          >
            {/* Header Meta */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-editorial-mono">
              <span className="text-[#0071E3] font-bold">{CASE_STUDIES[0].index}</span>
              <span className="text-neutral-400">{CASE_STUDIES[0].cmsEngine}</span>
            </div>

            {/* High-Fashion Monograph Image */}
            <div className="relative mt-4 aspect-[16/9] overflow-hidden bg-black/40 border border-white/10">
              <img
                src={CASE_STUDIES[0].image}
                alt={CASE_STUDIES[0].client}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-editorial-mono text-white uppercase border border-white/20">
                VIEW COMMISSION ↗
              </div>
            </div>

            {/* Content & Metrics */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="text-[11px] font-editorial-mono text-neutral-400 uppercase">
                  {CASE_STUDIES[0].discipline}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white mt-0.5 group-hover:text-[#0071E3] transition-colors">
                  {CASE_STUDIES[0].client}
                </h3>
                <p className="text-xs text-[#D9D9D9] mt-0.5">
                  {CASE_STUDIES[0].scope}
                </p>
              </div>

              {/* Quantified Metrics Box */}
              <div className="flex items-center gap-3 border border-white/10 bg-white/5 p-2.5">
                {CASE_STUDIES[0].metrics.map((m, idx) => (
                  <div key={idx} className="text-right">
                    <div className="text-base font-black text-white font-editorial-mono leading-none">
                      {m.value}
                    </div>
                    <div className="text-[8px] tracking-widest text-neutral-400 font-editorial-mono uppercase mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Staggered Companion Columns (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Case 02: Richter & Kraft */}
            <div
              className="group cursor-pointer border border-white/10 bg-[#242426] p-5 hover:border-white/40 transition-all duration-300"
              onClick={() => onOpenCase(CASE_STUDIES[1])}
            >
              <div className="flex items-center justify-between pb-2.5 border-b border-white/10 text-xs font-editorial-mono">
                <span className="text-[#0071E3] font-bold">{CASE_STUDIES[1].index}</span>
                <span className="text-neutral-400">{CASE_STUDIES[1].cmsEngine}</span>
              </div>

              <div className="relative mt-3 aspect-[21/9] overflow-hidden bg-black/40 border border-white/10">
                <img
                  src={CASE_STUDIES[1].image}
                  alt={CASE_STUDIES[1].client}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              <div className="mt-3 flex items-end justify-between gap-3">
                <div>
                  <span className="text-[10px] font-editorial-mono text-neutral-400 uppercase">
                    {CASE_STUDIES[1].discipline}
                  </span>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-white mt-0.5 group-hover:text-[#0071E3] transition-colors">
                    {CASE_STUDIES[1].client}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-sm font-extrabold text-[#0071E3] font-editorial-mono">
                    {CASE_STUDIES[1].metrics[0].value}
                  </div>
                  <div className="text-[8px] tracking-widest text-neutral-400 font-editorial-mono uppercase">
                    {CASE_STUDIES[1].metrics[0].label}
                  </div>
                </div>
              </div>
            </div>

            {/* Case 03: Aura Kinematics */}
            <div
              className="group cursor-pointer border border-white/10 bg-[#242426] p-5 hover:border-white/40 transition-all duration-300"
              onClick={() => onOpenCase(CASE_STUDIES[2])}
            >
              <div className="flex items-center justify-between pb-2.5 border-b border-white/10 text-xs font-editorial-mono">
                <span className="text-[#0071E3] font-bold">{CASE_STUDIES[2].index}</span>
                <span className="text-neutral-400">{CASE_STUDIES[2].cmsEngine}</span>
              </div>

              <div className="relative mt-3 aspect-[21/9] overflow-hidden bg-black/40 border border-white/10">
                <img
                  src={CASE_STUDIES[2].image}
                  alt={CASE_STUDIES[2].client}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              <div className="mt-3 flex items-end justify-between gap-3">
                <div>
                  <span className="text-[10px] font-editorial-mono text-neutral-400 uppercase">
                    {CASE_STUDIES[2].discipline}
                  </span>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-white mt-0.5 group-hover:text-[#0071E3] transition-colors">
                    {CASE_STUDIES[2].client}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-sm font-extrabold text-[#0F766E] font-editorial-mono">
                    {CASE_STUDIES[2].metrics[0].value}
                  </div>
                  <div className="text-[8px] tracking-widest text-neutral-400 font-editorial-mono uppercase">
                    {CASE_STUDIES[2].metrics[0].label}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
