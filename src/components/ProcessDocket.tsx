import React from 'react';
import { PROCESS_STAGES } from '../data/agencyData';
import { CheckCircle2 } from 'lucide-react';

export const ProcessDocket: React.FC = () => {
  return (
    <section id="methodology" className="bg-[#1D1D1F] text-white min-h-screen flex flex-col justify-center py-20 md:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Section Header */}
        <div className="pb-10 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold tracking-widest text-[#0071E3] font-editorial-mono uppercase mb-2">
              // 04 APPROACH & TIMELINE
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95]">
              From brief to launch in four clear phases.
            </h2>
          </div>
          <div className="text-xs font-editorial-mono text-[#D9D9D9]/70 max-w-sm">
            A TIMELINE YOU CAN PLAN AROUND. SCOPED IN FOCUSED SPRINTS WITH WEEKLY DEMOS AND ZERO VENDOR LOCK-IN.
          </div>
        </div>

        {/* Value Pills Bar (Direct from Proposal Page 3) */}
        <div className="py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-editorial-mono text-neutral-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
            <span>Scoped in focused sprints</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0071E3]" />
            <span>Weekly demos and a shared board</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
            <span>Clean handover, no lock-in</span>
          </div>
        </div>

        {/* Process Timeline Docket (Clean, compact balanced rows) */}
        <div className="divide-y divide-white/10 border-b border-white/10">
          {PROCESS_STAGES.map((stage) => (
            <div
              key={stage.number}
              className="py-7 group hover:bg-white/[0.02] transition-colors grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
            >
              {/* Stage Index & Timeline */}
              <div className="md:col-span-3 flex items-start gap-4">
                <span className="text-2xl sm:text-3xl font-black text-white/30 group-hover:text-[#0071E3] transition-colors font-editorial-mono">
                  {stage.number}
                </span>
                <div>
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase font-editorial-mono bg-white/5 border border-white/10 text-[#0F766E]">
                    {stage.duration}
                  </span>
                </div>
              </div>

              {/* Phase Title & Narrative */}
              <div className="md:col-span-6 space-y-1.5">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white group-hover:text-white transition-colors">
                  {stage.phase}
                </h3>
                <p className="text-xs sm:text-sm text-[#D9D9D9] leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {/* Key Deliverable */}
              <div className="md:col-span-3 md:text-right flex flex-col md:items-end justify-between self-stretch">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase font-editorial-mono text-neutral-400">
                    OUTPUT:
                  </span>
                  <div className="text-xs font-bold text-white font-editorial-mono mt-0.5">
                    {stage.deliverable}
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-[#0F766E] font-editorial-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>PHASE GATE PASSED</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Package Delivery Durations (Direct from Proposal Page 5) */}
        <div className="mt-8 p-4 bg-white/5 border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-editorial-mono">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-[#0F766E]/20 text-[#0F766E] font-bold border border-[#0F766E]/40 text-[10px] uppercase">
              ESSENTIAL
            </span>
            <span className="text-white font-bold">1–2 WEEKS</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-[#0071E3]/20 text-[#0071E3] font-bold border border-[#0071E3]/40 text-[10px] uppercase">
              PRIOR (RECOMMENDED)
            </span>
            <span className="text-white font-bold">2–3 WEEKS</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-white/10 text-neutral-300 font-bold border border-white/20 text-[10px] uppercase">
              CUSTOM
            </span>
            <span className="text-white font-bold">SCOPED AFTER DISCOVERY</span>
          </div>
        </div>

      </div>
    </section>
  );
};
