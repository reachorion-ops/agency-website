import React, { useState } from 'react';
import { ArrowUpRight, Play, Pause, FileCode } from 'lucide-react';
import testimonialsData from '../data/testimonials.json';
import { Testimonial } from '../types';
import { TestimonialModal } from './TestimonialModal';

interface KineticTestimonialsProps {
  onInquireStack: (stackName: string) => void;
}

export const KineticTestimonials: React.FC<KineticTestimonialsProps> = ({ onInquireStack }) => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showEditInfo, setShowEditInfo] = useState(false);

  // Cast JSON data to typed array
  const testimonials: Testimonial[] = testimonialsData as Testimonial[];

  // Duplicate for smooth seamless loop
  const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="bg-[#FFFFFF] text-[#1D1D1F] min-h-screen flex flex-col justify-center py-20 md:py-24 border-b border-[#D9D9D9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-[#D9D9D9]">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold tracking-widest text-[#0071E3] font-editorial-mono uppercase">
                // 04 CLIENT ENDORSEMENTS & VERIFIED IMPACT
              </span>
              <button
                onClick={() => setShowEditInfo(!showEditInfo)}
                className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-editorial-mono bg-[#F5F5F7] border border-[#D9D9D9] text-neutral-600 hover:text-[#1D1D1F] hover:border-neutral-400 transition-colors"
                title="View edit instructions"
              >
                <FileCode className="w-3 h-3 text-[#0F766E]" />
                <span>testimonials.json</span>
              </button>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase mt-2">
              Voices of // Leadership & Craft
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-editorial-mono bg-[#F5F5F7] border border-[#D9D9D9] hover:bg-neutral-200 transition-colors"
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-[#0071E3]" />
                  <span>RESUME STREAM</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-neutral-600" />
                  <span>PAUSE STREAM</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Easily Editable Info Drawer */}
        {showEditInfo && (
          <div className="mt-4 p-4 bg-[#F5F5F7] border border-[#D9D9D9] text-xs font-editorial-mono text-neutral-700 animate-in fade-in duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[#0F766E] font-bold">CONFIG DISCLOSURE:</span> Testimonials are decoupled into{' '}
              <code className="bg-white px-1.5 py-0.5 border border-[#D9D9D9] text-[#1D1D1F] font-bold">
                src/data/testimonials.json
              </code>
              . Add, modify, or remove quotes in seconds without touching layout code.
            </div>
            <button
              onClick={() => setShowEditInfo(false)}
              className="text-[#0071E3] hover:underline self-start sm:self-auto"
            >
              Dismiss
            </button>
          </div>
        )}

      </div>

      {/* The Minimalist Kinetic Stream */}
      <div className="mt-10 relative w-full overflow-hidden py-4">
        
        {/* Edge Vignettes */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className={`animate-kinetic-stream flex gap-6 ${isPaused ? '[animation-play-state:paused]' : ''}`}
        >
          {loopedTestimonials.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              onClick={() => setSelectedTestimonial(item)}
              className="w-[360px] sm:w-[420px] shrink-0 bg-[#FFFFFF] border border-[#D9D9D9] p-7 hover:border-[#1D1D1F] hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#D9D9D9] text-xs font-editorial-mono">
                  <span className="px-2 py-0.5 bg-[#F5F5F7] border border-[#D9D9D9] text-neutral-700 font-medium">
                    {item.cmsStack}
                  </span>
                  <span className="text-[#0F766E] font-bold">
                    {item.keyMetric}
                  </span>
                </div>

                <p className="mt-4 text-sm font-serif italic text-[#1D1D1F] leading-relaxed line-clamp-3">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#D9D9D9] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-none bg-[#1D1D1F] text-white flex items-center justify-center font-bold text-xs font-editorial-mono">
                    {item.avatarInitials}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-tight text-[#1D1D1F]">
                      {item.author}
                    </div>
                    <div className="text-[10px] text-neutral-500 font-medium">
                      {item.company} • {item.location}
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 text-[11px] font-bold tracking-widest uppercase text-[#0071E3] group-hover:translate-x-1 transition-transform">
                  <span>Dossier</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Verified Metrics Strip (Provides consistent vertical balance to section) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-[#F5F5F7] border border-[#D9D9D9] text-xs font-editorial-mono text-neutral-700">
          <div>
            <span className="text-neutral-400 block text-[10px]">CLIENT RETENTION</span>
            <strong className="text-base text-[#1D1D1F] font-bold">100% Retained</strong>
          </div>
          <div>
            <span className="text-neutral-400 block text-[10px]">MIGRATION DOWNTIME</span>
            <strong className="text-base text-[#0F766E] font-bold">0.00 Seconds</strong>
          </div>
          <div>
            <span className="text-neutral-400 block text-[10px]">AVERAGE LCP GAIN</span>
            <strong className="text-base text-[#0071E3] font-bold">+310% Faster</strong>
          </div>
          <div>
            <span className="text-neutral-400 block text-[10px]">DATA INTEGRITY</span>
            <strong className="text-base text-[#1D1D1F] font-bold">100% Verified</strong>
          </div>
        </div>
      </div>

      {/* Interactive Inspection Modal */}
      <TestimonialModal
        testimonial={selectedTestimonial}
        onClose={() => setSelectedTestimonial(null)}
        onInquireSimilar={onInquireStack}
      />
    </section>
  );
};
