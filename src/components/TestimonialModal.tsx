import React from 'react';
import { X, Quote, ShieldCheck, CheckCircle2, ArrowUpRight, MapPin, Calendar, Layers } from 'lucide-react';
import { Testimonial } from '../types';
import { BrandLogo } from './BrandLogo';

interface TestimonialModalProps {
  testimonial: Testimonial | null;
  onClose: () => void;
  onInquireSimilar: (stack: string) => void;
}

export const TestimonialModal: React.FC<TestimonialModalProps> = ({
  testimonial,
  onClose,
  onInquireSimilar,
}) => {
  if (!testimonial) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#FFFFFF] text-[#1D1D1F] border border-[#D9D9D9] shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-[#D9D9D9]">
          <div className="flex items-center gap-2 text-xs font-bold font-editorial-mono text-[#0071E3] uppercase">
            <BrandLogo theme="dark" className="w-4 h-4 shrink-0" />
            <ShieldCheck className="w-4 h-4 text-[#0F766E]" />
            <span>VERIFIED COMMISSION ARCHIVE // {testimonial.id.toUpperCase()}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-100 text-[#1D1D1F] transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Client Metadata Header */}
        <div className="mt-6 flex items-start gap-4">
          <div className="w-12 h-12 rounded-none bg-[#1D1D1F] text-white flex items-center justify-center font-bold text-sm tracking-wider font-editorial-mono">
            {testimonial.avatarInitials}
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1D1D1F]">
              {testimonial.author}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-medium">
              {testimonial.role} — <span className="text-[#1D1D1F] font-bold">{testimonial.company}</span>
            </p>
            <div className="flex items-center gap-3 mt-1.5 text-xs text-neutral-500 font-editorial-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {testimonial.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {testimonial.date}
              </span>
            </div>
          </div>
        </div>

        {/* Full Unabridged Quote */}
        <div className="mt-8 relative p-6 bg-[#F5F5F7] border border-[#D9D9D9]">
          <Quote className="w-8 h-8 text-neutral-300 absolute -top-4 -left-2" />
          <blockquote className="text-base sm:text-lg font-serif italic text-[#1D1D1F] leading-relaxed relative z-10">
            "{testimonial.quote}"
          </blockquote>
        </div>

        {/* Technical Architecture Dossier */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 border border-[#D9D9D9] bg-white">
            <span className="text-[10px] font-bold tracking-widest uppercase font-editorial-mono text-neutral-500">
              IMPLEMENTED CMS STACK
            </span>
            <div className="text-sm font-bold text-[#1D1D1F] mt-1 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#0071E3]" />
              <span>{testimonial.cmsStack}</span>
            </div>
          </div>

          <div className="p-4 border border-[#D9D9D9] bg-white">
            <span className="text-[10px] font-bold tracking-widest uppercase font-editorial-mono text-neutral-500">
              MEASURED BUSINESS RESULT
            </span>
            <div className="text-sm font-bold text-[#0F766E] mt-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
              <span>{testimonial.keyMetric}</span>
            </div>
          </div>
        </div>

        {/* Industry Sector Tag */}
        <div className="mt-4 flex items-center justify-between text-xs font-editorial-mono text-neutral-500 pt-4 border-t border-[#D9D9D9]">
          <span>INDUSTRY: {testimonial.industry.toUpperCase()}</span>
          <span className="text-[#0071E3]">DECOUPLED VERIFICATION ✓</span>
        </div>

        {/* Action Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#D9D9D9]">
          <span className="text-xs text-neutral-500 font-editorial-mono">
            Require similar headless architecture?
          </span>
          <button
            onClick={() => {
              onClose();
              onInquireSimilar(testimonial.cmsStack);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1D1D1F] hover:bg-[#0071E3] text-white text-xs font-bold tracking-widest uppercase transition-colors"
          >
            <span>Inquire This Stack</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
