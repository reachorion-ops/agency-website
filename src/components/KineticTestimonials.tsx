import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import testimonialsData from '../data/testimonials.json';
import { Testimonial } from '../types';
import { TestimonialModal } from './TestimonialModal';
import { StarRating } from './StarRating';

interface KineticTestimonialsProps {
  onInquireStack: (stackName: string) => void;
}

export const KineticTestimonials: React.FC<KineticTestimonialsProps> = ({ onInquireStack }) => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

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
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase mt-2">
              Voices of // Leadership & Craft
              <span className="sr-only"> — Client Reviews and Verified Technical Impact</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-editorial-mono text-neutral-700">
            <span className="inline-block w-2 h-2 rounded-full bg-[#0F766E] animate-pulse" />
            <span>AUTHENTIC CLIENT DOSSIERS • 4.7 AVG RATING</span>
          </div>
        </div>

      </div>

      {/* The Minimalist Kinetic Stream */}
      <div className="mt-10 relative w-full overflow-hidden py-4 group/stream">
        
        {/* Edge Vignettes (Subtle on mobile so cards stay fully readable) */}
        <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="animate-kinetic-stream flex gap-4 sm:gap-6 hover:[animation-play-state:paused]"
        >
          {loopedTestimonials.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              onClick={() => setSelectedTestimonial(item)}
              className="w-[285px] sm:w-[380px] md:w-[420px] shrink-0 bg-[#FFFFFF] border border-[#D9D9D9] p-5 sm:p-7 hover:border-[#1D1D1F] hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
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

                <div className="mt-3 flex items-center justify-between">
                  <StarRating rating={item.rating} showScore size="sm" />
                  <span className="text-[10px] font-editorial-mono text-neutral-700 uppercase font-bold">
                    Verified Commission
                  </span>
                </div>

                <p className="mt-3 text-sm font-serif italic text-[#1D1D1F] leading-relaxed line-clamp-3">
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
                    <div className="text-[10px] text-neutral-700 font-medium">
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
            <span className="text-neutral-700 font-bold block text-[10px]">CLIENT FEEDBACK SCORE</span>
            <strong className="text-base text-[#1D1D1F] font-bold">4.7 / 5.0 Average</strong>
          </div>
          <div>
            <span className="text-neutral-700 font-bold block text-[10px]">MIGRATION DOWNTIME</span>
            <strong className="text-base text-[#0F766E] font-bold">0.00 Seconds</strong>
          </div>
          <div>
            <span className="text-neutral-700 font-bold block text-[10px]">AVERAGE LCP GAIN</span>
            <strong className="text-base text-[#0071E3] font-bold">+310% Faster</strong>
          </div>
          <div>
            <span className="text-neutral-700 font-bold block text-[10px]">HEADLESS COMPLIANCE</span>
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
