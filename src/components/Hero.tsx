import React from 'react';
import { ArrowUpRight, Zap } from 'lucide-react';
import { BrandWordmark } from './BrandWordmark';
import { BrandLogo } from './BrandLogo';

interface HeroProps {
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative bg-[#1D1D1F] text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-white/10">
      {/* Background Architectural Geometry (Minimal hairline grid, strictly no AI glow slop) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: '120px 120px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Metric Bar & Circular CTA (Matching Reference 1 composition) */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Triad of Agency Specs (Inspired by Reference 1: *480, *230, *120) */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 text-left">
            <div>
              <div className="text-xl sm:text-2xl font-extrabold tracking-tight font-editorial-mono text-white">
                *100
              </div>
              <div className="text-[10px] sm:text-xs tracking-widest text-[#D9D9D9]/70 uppercase mt-0.5">
                Core Web Vitals
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold tracking-tight font-editorial-mono text-white">
                *0.18s
              </div>
              <div className="text-[10px] sm:text-xs tracking-widest text-[#D9D9D9]/70 uppercase mt-0.5">
                Global Edge TTFB
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold tracking-tight font-editorial-mono text-white">
                *100%
              </div>
              <div className="text-[10px] sm:text-xs tracking-widest text-[#D9D9D9]/70 uppercase mt-0.5">
                Headless Decoupled
              </div>
            </div>
          </div>

          {/* Luxury Circular Magnetic Button (Directly inspired by Reference 1's "GET IN TOUCH" circle) */}
          <button
            onClick={onOpenInquiry}
            className="group relative self-end md:self-auto w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-white/30 bg-white/5 hover:bg-white text-white hover:text-[#1D1D1F] flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl backdrop-blur-sm"
          >
            <span className="text-[11px] sm:text-xs font-black tracking-widest uppercase text-center leading-tight">
              Get In<br />Touch
            </span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Massive Monumental Wordmark (SVG vector conversion of official logo asset) */}
        <div className="pt-10 pb-12 sm:pt-14 sm:pb-16">
          <div className="flex items-center gap-3 mb-4">
            <BrandLogo theme="dark" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" />
            <span className="text-[11px] sm:text-xs font-editorial-mono text-[#0071E3] tracking-widest uppercase font-bold">
              EST. 2026 // OFFICIAL CMS ARCHITECTURE STUDIO
            </span>
          </div>

          <div className="py-2">
            <BrandWordmark
              theme="dark"
              className="w-full max-w-4xl h-auto"
            />
            <h1 className="sr-only">Reach Orion — Headless CMS & High Performance Architecture</h1>
          </div>

          <div className="mt-6 flex items-center justify-between text-xs sm:text-sm font-editorial-mono text-[#D9D9D9]/60 tracking-widest uppercase">
            <span>[ ARCHITECTURE STUDIO ]</span>
            <span>HEADLESS CMS SPECIALISTS</span>
            <span className="hidden sm:inline">GLOBAL COMMISSION ARCHIVE</span>
          </div>
        </div>

        {/* Editorial Split Row (Reference 1 layout: Editorial statement + agency pitch + statistics) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-8 border-t border-white/10 items-start">
          
          {/* Left Column: Bold Editorial Statement */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white">
              We Architect Decoupled Web Experiences That Grow Your Enterprise
            </h2>
            <div className="pt-2">
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0071E3] text-white hover:bg-blue-600 text-xs font-bold tracking-widest uppercase transition-all duration-200 border border-[#0071E3]"
              >
                <span>Initiate Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Narrative & Metrics */}
          <div className="lg:col-span-6 space-y-8">
            <p className="text-sm sm:text-base text-[#D9D9D9] leading-relaxed font-normal">
              A specialized digital agency delivering bespoke headless CMS architectures, high-performance web flagships, and sub-second global edge delivery. We replace brittle, monolithic templates with decoupled editorial pipelines that empower content teams and captivate audiences.
            </p>

            {/* Micro Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-editorial-mono">
                  99.8%
                </div>
                <div className="text-[11px] tracking-wider text-[#D9D9D9]/70 uppercase mt-1">
                  Uptime Resilience
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-editorial-mono">
                  6.4X
                </div>
                <div className="text-[11px] tracking-wider text-[#D9D9D9]/70 uppercase mt-1">
                  Publish Velocity
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0071E3] font-editorial-mono">
                  &lt;100ms
                </div>
                <div className="text-[11px] tracking-wider text-[#D9D9D9]/70 uppercase mt-1">
                  Interactive Latency
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Trust & Modern Stack Bar (Clean hairline badges, strictly no AI pills) */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs font-editorial-mono text-[#D9D9D9]/60">
          <div className="flex items-center gap-2 text-white font-bold">
            <Zap className="w-4 h-4 text-[#0071E3]" />
            <span>CERTIFIED ARCHITECTURES</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            <span className="hover:text-white transition-colors cursor-default">SANITY.IO PARTNER</span>
            <span className="hover:text-white transition-colors cursor-default">PAYLOAD 3.0</span>
            <span className="hover:text-white transition-colors cursor-default">CONTENTFUL ENTERPRISE</span>
            <span className="hover:text-white transition-colors cursor-default">STRAPI 5 EDGE</span>
            <span className="hover:text-white transition-colors cursor-default">NEXT.JS APP ROUTER</span>
          </div>
        </div>

      </div>
    </section>
  );
};
