import React from 'react';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
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
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#1D1D1F] text-white border border-white/20 shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-bold font-editorial-mono text-[#0071E3] uppercase">
            <BrandLogo theme="dark" className="w-4 h-4 shrink-0" />
            <span>{caseStudy.index}</span>
            <span className="text-white/40">•</span>
            <span className="text-white">{caseStudy.cmsEngine}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Case Title */}
        <div className="mt-6">
          <span className="text-xs font-editorial-mono text-[#0F766E] uppercase font-bold tracking-wider">
            {caseStudy.discipline}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
            {caseStudy.client}
          </h2>
          <p className="text-sm text-[#D9D9D9] mt-2">
            {caseStudy.scope}
          </p>
        </div>

        {/* High-res Image Preview */}
        <div className="mt-6 aspect-[16/9] overflow-hidden border border-white/10 bg-black/50">
          <img
            src={caseStudy.image}
            alt={caseStudy.client}
            className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Metrics Grid */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {caseStudy.metrics.map((m, idx) => (
            <div key={idx} className="p-4 bg-[#242426] border border-white/10">
              <div className="text-2xl font-black font-editorial-mono text-white">
                {m.value}
              </div>
              <div className="text-[10px] tracking-widest text-[#D9D9D9]/70 uppercase font-editorial-mono mt-1">
                {m.label}
              </div>
            </div>
          ))}
          <div className="p-4 bg-[#242426] border border-white/10 col-span-2 sm:col-span-1">
            <div className="text-2xl font-black font-editorial-mono text-[#0071E3]">
              100%
            </div>
            <div className="text-[10px] tracking-widest text-[#D9D9D9]/70 uppercase font-editorial-mono mt-1">
              EDGE CACHE RATIO
            </div>
          </div>
        </div>

        {/* Architectural Narrative */}
        <div className="mt-8 space-y-4 text-xs sm:text-sm text-[#D9D9D9] leading-relaxed border-t border-white/10 pt-6">
          <h3 className="text-xs font-bold font-editorial-mono text-white uppercase tracking-wider">
            ARCHITECTURAL HIGHLIGHTS:
          </h3>
          <p>
            The project team decommissioned a legacy multi-plugin monolithic setup in favor of a clean, typed headless schema. Front-facing rendering is entirely decoupled using React and Next.js, cached across 300+ edge POPs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs font-editorial-mono text-white">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E]" />
              <span>Real-time Draft Previews</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E]" />
              <span>Automated AVIF/WebP Compression</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E]" />
              <span>Zero-Downtime Incremental Static Builds</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E]" />
              <span>Granular Role-Based Permissions</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-editorial-mono text-[#D9D9D9]/70">
            Engineered by Reach Orion Agency
          </span>
          <button
            onClick={() => {
              onClose();
              onInquire(caseStudy.client);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1D1D1F] hover:bg-[#0071E3] hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
          >
            <span>Commission Similar Build</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
