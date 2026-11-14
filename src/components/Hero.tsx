import React from 'react';
import { ArrowUpRight, Zap } from 'lucide-react';
import { HeroMetricsOdometer } from './RollingOdometer';

interface HeroProps {
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative bg-[#1D1D1F] text-white min-h-screen flex flex-col justify-center pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden border-b border-white/10">
      {/* Background Architectural Geometry (Minimal hairline grid, strictly no AI glow slop) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: '120px 120px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Top Metric Bar & Circular CTA (Matching Reference 1 composition) */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Triad of Agency Specs (Synchronized Master Odometer Roll) */}
          <HeroMetricsOdometer />

          {/* Luxury Circular Magnetic Button with Moving Dotted Orbit & Precision Astronomical Reticle */}
          <div className="relative self-end md:self-auto flex items-center justify-center group">
            
            {/* 1. Outer Astronomical Cardinal Compass Ring (Faint stationary ring with N, S, E, W ticks) */}
            <div className="absolute -inset-3.5 sm:-inset-4 pointer-events-none flex items-center justify-center">
              <svg
                viewBox="0 0 152 152"
                className="w-full h-full text-white/10 group-hover:text-white/20 transition-colors duration-500"
              >
                {/* Outer guide track */}
                <circle cx="76" cy="76" r="72" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 12" />
                {/* Cardinal ticks */}
                <line x1="76" y1="0" x2="76" y2="5" stroke="currentColor" strokeWidth="1.5" />
                <line x1="76" y1="147" x2="76" y2="152" stroke="currentColor" strokeWidth="1.5" />
                <line x1="0" y1="76" x2="5" y2="76" stroke="currentColor" strokeWidth="1.5" />
                <line x1="147" y1="76" x2="152" y2="76" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>

            {/* 2. Interactive Circular Button with Moving Dotted Orbit */}
            <button
              onClick={onOpenInquiry}
              className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white/5 hover:bg-white text-white hover:text-[#1D1D1F] flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl backdrop-blur-md z-10"
              aria-label="Get In Touch — Initiate Consultation"
            >
              {/* Moving Dotted Border Ring (Continuous 360° GPU rotation with blue orbital beacon) */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <svg
                  viewBox="0 0 120 120"
                  className="w-full h-full animate-spin-slow group-hover:[animation-duration:7s] transition-all"
                  style={{ willChange: 'transform' }}
                >
                  {/* Stationary subtle hairline track */}
                  <circle
                    cx="60"
                    cy="60"
                    r="58"
                    fill="none"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="1"
                  />
                  {/* The Moving Dotted Orbit Ring (36 crisp micro-dots evenly distributed every 10°) */}
                  <circle
                    cx="60"
                    cy="60"
                    r="58"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="0 10.12"
                    className="text-white/40 group-hover:text-[#0071E3] transition-colors duration-300"
                  />
                  {/* Luminous Orbital Satellite Beacon */}
                  <circle
                    cx="60"
                    cy="2"
                    r="2.5"
                    fill="#0071E3"
                    className="group-hover:scale-125 transition-transform origin-[60px_2px]"
                  />
                  <circle
                    cx="60"
                    cy="2"
                    r="5"
                    fill="#0071E3"
                    opacity="0.35"
                    className="animate-pulse"
                  />
                </svg>
              </div>

              {/* Center Typography & Arrow */}
              <span className="text-[11px] sm:text-xs font-black tracking-widest uppercase text-center leading-tight transition-colors duration-300">
                Get In<br />Touch
              </span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Massive Monumental Headline (Preserved Plus Jakarta Sans font with 0.8px letter spacing) */}
        <div className="pt-10 pb-12 sm:pt-14 sm:pb-16">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-black tracking-[0.8px] uppercase leading-[0.88] select-none break-words text-white">
            Reach Orion
          </h1>
          <div className="mt-4 flex items-center justify-between text-xs sm:text-sm font-editorial-mono text-[#D9D9D9]/60 tracking-widest uppercase">
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
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs font-editorial-mono text-[#D9D9D9]/60">
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
