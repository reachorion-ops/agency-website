import React from 'react';
import { Lock, Sparkles, ArrowUpRight, Layers } from 'lucide-react';
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
              // 03 SELECTED COMMISSIONS & FLAGSHIPS
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95]">
              Look Here // Our Case Archive
            </h2>
          </div>
          <div className="text-xs font-editorial-mono text-[#D9D9D9]/70 max-w-sm text-left md:text-right">
            PRODUCTION HEADLESS ARCHITECTURES COMMISSIONED BY LEADERS IN LUXURY, REAL ESTATE & COMMERCE.
          </div>
        </div>

        {/* Editorial Frame Layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Primary Featured Case 01: The Aranya Promenade (Span 7) */}
          <div
            className="lg:col-span-7 group cursor-pointer border border-white/10 bg-[#242426] p-5 sm:p-6 hover:border-white/40 transition-all duration-300 rounded-none relative overflow-hidden"
            onClick={() => onOpenCase(CASE_STUDIES[0])}
          >
            {/* Top Meta Bar */}
            <div className="flex items-center justify-between pb-3.5 border-b border-white/10 text-xs font-editorial-mono">
              <div className="flex items-center gap-2">
                <span className="text-[#CCFF00] font-black">{CASE_STUDIES[0].index}</span>
                <span className="text-neutral-500">•</span>
                <span className="text-white font-medium">{CASE_STUDIES[0].cmsEngine}</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] text-[10px] font-bold tracking-wider uppercase">
                <Sparkles className="w-3 h-3 animate-pulse" />
                <span>INTERACTIVE 3D WEBGL</span>
              </div>
            </div>

            {/* Dark-Glass Browser Mockup Frame */}
            <div className="relative mt-4 border border-white/15 bg-black/60 overflow-hidden shadow-2xl">
              
              {/* Browser Window Chrome */}
              <div className="bg-[#18181A]/95 border-b border-white/10 px-3.5 py-2 flex items-center justify-between text-[11px] font-editorial-mono select-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/50 border border-white/10 text-neutral-400 text-[10px]">
                  <Lock className="w-2.5 h-2.5 text-[#0F766E]" />
                  <span className="truncate max-w-[140px] sm:max-w-[200px] text-neutral-300 font-medium tracking-wider uppercase">
                    CONFIDENTIAL ARCHIVE // COMM-01
                  </span>
                </div>
                <div className="text-[10px] text-neutral-500 font-bold uppercase hidden sm:block">
                  EDGE: BLR-01
                </div>
              </div>

              {/* Viewport Image Preview & Liquid Glass Layer */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                <img
                  src={CASE_STUDIES[0].image}
                  alt={CASE_STUDIES[0].client}
                  className="w-full h-full object-cover object-top contrast-110 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                  loading="lazy"
                />

                {/* Liquid Glass Shimmer Sweep */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                {/* Floating Quick Action Pill */}
                <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/85 backdrop-blur-md border border-[#CCFF00]/50 text-[#CCFF00] text-[11px] font-bold font-editorial-mono uppercase tracking-wider shadow-lg group-hover:bg-[#CCFF00] group-hover:text-black transition-colors">
                    <span>Explore 3D Canvas</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Ambient Corner Badge */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-editorial-mono text-white/90 uppercase border border-white/15">
                  1.8M SQ.FT SANCTUARY
                </div>
              </div>
            </div>

            {/* Content & Metrics Footer */}
            <div className="mt-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-[11px] font-editorial-mono text-[#0F766E] uppercase font-bold tracking-wider">
                  {CASE_STUDIES[0].discipline}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mt-1 group-hover:text-[#CCFF00] transition-colors">
                  {CASE_STUDIES[0].client}
                </h3>
                <p className="text-xs text-[#D9D9D9] mt-1 max-w-md leading-relaxed">
                  {CASE_STUDIES[0].scope}
                </p>
              </div>

              {/* Quantified Metrics Box */}
              <div className="flex items-center gap-3 border border-white/10 bg-white/5 p-3 shrink-0">
                {CASE_STUDIES[0].metrics.map((m, idx) => (
                  <div key={idx} className="text-right">
                    <div className="text-base font-black text-white font-editorial-mono leading-none">
                      {m.value}
                    </div>
                    <div className="text-[8px] tracking-widest text-neutral-400 font-editorial-mono uppercase mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Companion Columns (Span 5): Case 02 & Case 03 */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Case 02: QUARTER (Worli Sea Face) */}
            <div
              className="group cursor-pointer border border-white/10 bg-[#242426] p-5 hover:border-white/40 transition-all duration-300"
              onClick={() => onOpenCase(CASE_STUDIES[1])}
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-editorial-mono">
                <div className="flex items-center gap-2">
                  <span className="text-[#0071E3] font-black">{CASE_STUDIES[1].index}</span>
                  <span className="text-neutral-500">•</span>
                  <span className="text-white font-medium">{CASE_STUDIES[1].cmsEngine}</span>
                </div>
                <span className="text-[10px] font-editorial-mono text-neutral-400 uppercase tracking-widest">
                  MUMBAI
                </span>
              </div>

              {/* Dark-Glass Browser Mockup Frame */}
              <div className="relative mt-3.5 border border-white/15 bg-black/60 overflow-hidden shadow-xl">
                <div className="bg-[#18181A]/95 border-b border-white/10 px-3 py-1.5 flex items-center justify-between text-[10px] font-editorial-mono select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF5F56]/80 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/80 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-[#27C93F]/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/50 border border-white/10 text-neutral-400 text-[9px]">
                    <Lock className="w-2 h-2 text-[#0F766E]" />
                    <span className="truncate max-w-[150px] text-neutral-300 font-medium tracking-wider uppercase">
                      CONFIDENTIAL ARCHIVE // COMM-02
                    </span>
                  </div>
                  <span className="text-[9px] text-[#0071E3] font-bold uppercase">
                    MAHARERA ✓
                  </span>
                </div>

                <div className="relative aspect-[16/9] overflow-hidden bg-black/40">
                  <img
                    src={CASE_STUDIES[1].image}
                    alt={CASE_STUDIES[1].client}
                    className="w-full h-full object-cover object-top contrast-110 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                  <div className="absolute bottom-2.5 right-2.5 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-black/85 backdrop-blur-md border border-[#0071E3]/50 text-white text-[10px] font-bold font-editorial-mono uppercase tracking-wider group-hover:bg-[#0071E3] transition-colors">
                      <span>Dossier</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-3.5 flex items-end justify-between gap-3">
                <div>
                  <span className="text-[10px] font-editorial-mono text-[#0071E3] uppercase font-bold tracking-wider">
                    {CASE_STUDIES[1].discipline}
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white mt-0.5 group-hover:text-[#0071E3] transition-colors">
                    {CASE_STUDIES[1].client}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Worli Sea Face Waterfront Sky Residences
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-base font-extrabold text-[#0071E3] font-editorial-mono leading-none">
                    {CASE_STUDIES[1].metrics[0].value}
                  </div>
                  <div className="text-[8px] tracking-widest text-neutral-400 font-editorial-mono uppercase mt-1">
                    {CASE_STUDIES[1].metrics[0].label}
                  </div>
                </div>
              </div>
            </div>

            {/* Case 03: The Rotunda Royale */}
            <div
              className="group cursor-pointer border border-white/10 bg-[#242426] p-5 hover:border-white/40 transition-all duration-300"
              onClick={() => onOpenCase(CASE_STUDIES[2])}
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-editorial-mono">
                <div className="flex items-center gap-2">
                  <span className="text-[#DC2626] font-black">{CASE_STUDIES[2].index}</span>
                  <span className="text-neutral-500">•</span>
                  <span className="text-white font-medium">{CASE_STUDIES[2].cmsEngine}</span>
                </div>
                <span className="text-[10px] font-editorial-mono text-neutral-400 uppercase tracking-widest">
                  CAD ENGINE
                </span>
              </div>

              {/* Dark-Glass Browser Mockup Frame */}
              <div className="relative mt-3.5 border border-white/15 bg-black/60 overflow-hidden shadow-xl">
                <div className="bg-[#18181A]/95 border-b border-white/10 px-3 py-1.5 flex items-center justify-between text-[10px] font-editorial-mono select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF5F56]/80 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/80 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-[#27C93F]/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/50 border border-white/10 text-neutral-400 text-[9px]">
                    <Lock className="w-2 h-2 text-[#0F766E]" />
                    <span className="truncate max-w-[150px] text-neutral-300 font-medium tracking-wider uppercase">
                      CONFIDENTIAL ARCHIVE // COMM-03
                    </span>
                  </div>
                  <span className="text-[9px] text-[#DC2626] font-bold uppercase">
                    SECTOR 01
                  </span>
                </div>

                <div className="relative aspect-[16/9] overflow-hidden bg-black/40">
                  <img
                    src={CASE_STUDIES[2].image}
                    alt={CASE_STUDIES[2].client}
                    className="w-full h-full object-cover object-top contrast-110 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                  <div className="absolute bottom-2.5 right-2.5 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-black/85 backdrop-blur-md border border-[#DC2626]/50 text-white text-[10px] font-bold font-editorial-mono uppercase tracking-wider group-hover:bg-[#DC2626] transition-colors">
                      <span>Dossier</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-3.5 flex items-end justify-between gap-3">
                <div>
                  <span className="text-[10px] font-editorial-mono text-[#DC2626] uppercase font-bold tracking-wider">
                    {CASE_STUDIES[2].discipline}
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white mt-0.5 group-hover:text-[#DC2626] transition-colors">
                    {CASE_STUDIES[2].client}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Pritzker Masterplan & Vector CAD Blueprint
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-base font-extrabold text-[#DC2626] font-editorial-mono leading-none">
                    {CASE_STUDIES[2].metrics[0].value}
                  </div>
                  <div className="text-[8px] tracking-widest text-neutral-400 font-editorial-mono uppercase mt-1">
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
