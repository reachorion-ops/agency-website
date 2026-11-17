import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Lock, Sparkles, Info } from 'lucide-react';
import { CaseStudy } from '../types';
import { BrandLogo } from './BrandLogo';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onInquire: (client: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onInquire,
}) => {
  const [activeViewId, setActiveViewId] = useState<string>('hero');
  const [isLive3DMode, setIsLive3DMode] = useState<boolean>(Boolean(caseStudy?.hasInteractive3D));

  // Reset view state when a new case study is opened: default to Live 3D if available
  useEffect(() => {
    if (caseStudy) {
      setActiveViewId(caseStudy.views?.[0]?.id || 'hero');
      setIsLive3DMode(Boolean(caseStudy.hasInteractive3D));
    }
  }, [caseStudy]);

  if (!caseStudy) return null;

  const activeView = caseStudy.views?.find((v) => v.id === activeViewId) || caseStudy.views?.[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#1D1D1F] text-white border border-white/20 shadow-2xl p-5 sm:p-8 md:p-10 max-h-[94vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10">
          <div className="flex items-center gap-2.5 text-xs font-bold font-editorial-mono text-[#0071E3] uppercase">
            <BrandLogo theme="light" className="w-4 h-4 shrink-0" />
            <span>{caseStudy.index}</span>
            <span className="text-white/40">•</span>
            <span className="text-white">{caseStudy.cmsEngine}</span>
            {caseStudy.badge && (
              <>
                <span className="text-white/40">•</span>
                <span className="text-[#0F766E] font-bold">{caseStudy.badge}</span>
              </>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Case Title & Scope (No external domains shown) */}
        <div className="mt-6">
          <span className="text-xs font-editorial-mono text-[#0F766E] uppercase font-bold tracking-wider">
            {caseStudy.discipline}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-1">
            {caseStudy.client}
          </h2>
          <p className="text-xs sm:text-sm text-[#D9D9D9] mt-2 max-w-2xl leading-relaxed">
            {caseStudy.scope}
          </p>
        </div>

        {/* Multi-Section View Switcher Tabs: Live 3D is first & default */}
        {((caseStudy.views && caseStudy.views.length > 1) || caseStudy.hasInteractive3D) && (
          <div className="mt-6 flex flex-wrap items-center gap-2 border-b border-white/10 pb-3">
            {caseStudy.hasInteractive3D && caseStudy.interactiveDemoUrl && (
              <button
                onClick={() => setIsLive3DMode(true)}
                className={`px-3.5 py-1.5 text-xs font-editorial-mono font-bold uppercase transition-all flex items-center gap-1.5 ${
                  isLive3DMode
                    ? 'bg-[#CCFF00] text-black shadow-lg font-black'
                    : 'bg-[#CCFF00]/15 text-[#CCFF00] border border-[#CCFF00]/40 hover:bg-[#CCFF00]/30'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>✦ Live 3D WebGL Canvas</span>
              </button>
            )}

            {caseStudy.views?.map((v) => (
              <button
                key={v.id}
                onClick={() => {
                  setIsLive3DMode(false);
                  setActiveViewId(v.id);
                }}
                className={`px-3 py-1.5 text-xs font-editorial-mono font-bold uppercase transition-all ${
                  !isLive3DMode && activeView?.id === v.id
                    ? 'bg-white text-[#1D1D1F] shadow-sm'
                    : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        )}

        {/* Viewport Frame: Live 3D Mode vs High-Res Screenshot */}
        {isLive3DMode && caseStudy.interactiveDemoUrl ? (
          <div className="mt-4 relative aspect-[16/10] w-full overflow-hidden border border-[#CCFF00]/40 bg-black shadow-2xl">
            <iframe
              src={caseStudy.interactiveDemoUrl}
              title={`${caseStudy.client} Live 3D Experience`}
              className="w-full h-full border-0"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-3 py-1.5 text-[10px] font-editorial-mono text-[#CCFF00] border border-[#CCFF00]/40 flex items-center gap-2 select-none pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
              <span>INTERACTIVE WEBGL CANVAS • DRAG TO ROTATE 3D VORTEX</span>
            </div>
          </div>
        ) : (
          <div className="mt-4 border border-white/10 bg-black/60 overflow-hidden shadow-2xl">
            {/* Dark-Glass Browser Chrome (No project domains exposed) */}
            <div className="bg-[#18181A]/95 border-b border-white/10 px-3.5 py-2 flex items-center justify-between text-[11px] font-editorial-mono select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 inline-block" />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/50 border border-white/10 text-neutral-400 text-[10px]">
                <Lock className="w-2.5 h-2.5 text-[#0F766E]" />
                <span className="text-neutral-300 font-medium tracking-wider uppercase">
                  CONFIDENTIAL ARCHIVE // {caseStudy.index}
                </span>
              </div>
              <div className="text-[10px] text-neutral-500 font-bold uppercase hidden sm:block">
                {activeView?.id.toUpperCase()}
              </div>
            </div>

            {/* Viewport Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
              <img
                src={activeView?.image || caseStudy.image}
                alt={activeView?.label || caseStudy.client}
                className="w-full h-full object-cover object-top contrast-110"
              />
            </div>

            {/* View Caption */}
            {activeView?.description && (
              <div className="px-4 py-3 bg-[#18181A] border-t border-white/10 text-xs font-editorial-mono text-neutral-300 flex items-center gap-2.5">
                <Info className="w-4 h-4 text-[#0071E3] shrink-0" />
                <span>{activeView.description}</span>
              </div>
            )}
          </div>
        )}

        {/* Metrics Grid */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {caseStudy.metrics.map((m, idx) => (
            <div key={idx} className="p-4 bg-[#242426] border border-white/10">
              <div className="text-xl sm:text-2xl font-black font-editorial-mono text-white">
                {m.value}
              </div>
              <div className="text-[10px] tracking-widest text-[#D9D9D9]/70 uppercase font-editorial-mono mt-1">
                {m.label}
              </div>
            </div>
          ))}
          <div className="p-4 bg-[#242426] border border-white/10">
            <div className="text-xl sm:text-2xl font-black font-editorial-mono text-[#0071E3]">
              100%
            </div>
            <div className="text-[10px] tracking-widest text-[#D9D9D9]/70 uppercase font-editorial-mono mt-1">
              EDGE HIT RATIO
            </div>
          </div>
        </div>

        {/* Architectural Narrative & Highlights */}
        <div className="mt-8 space-y-4 text-xs sm:text-sm text-[#D9D9D9] leading-relaxed border-t border-white/10 pt-6">
          <h3 className="text-xs font-bold font-editorial-mono text-white uppercase tracking-wider">
            ARCHITECTURAL HIGHLIGHTS & DELIVERABLES:
          </h3>
          <p className="leading-relaxed">
            {caseStudy.narrative ||
              'The project team decommissioned a legacy multi-plugin monolithic setup in favor of a clean, typed headless schema. Front-facing rendering is entirely decoupled using React and Next.js, cached across 300+ edge POPs.'}
          </p>
          
          {caseStudy.architecturalHighlights && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs font-editorial-mono text-white">
              {caseStudy.architecturalHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-editorial-mono text-[#D9D9D9]/70">
            Commissioned & Engineered by Reach Orion Agency
          </span>
          <button
            onClick={() => {
              onClose();
              onInquire(caseStudy.client);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1D1D1F] hover:bg-[#0071E3] hover:text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-md active:scale-95"
          >
            <span>Commission Similar Build</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
