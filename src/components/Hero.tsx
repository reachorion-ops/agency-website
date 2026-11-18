import React from 'react';
import { ArrowUpRight, Zap } from 'lucide-react';
import { HeroMetricsOdometer } from './RollingOdometer';
import { RocketCtaButton } from './RocketCtaButton';

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

          {/* Interactive Rocket Launch Circular CTA (Directly inspired by Reference) */}
          <RocketCtaButton onClick={onOpenInquiry} />
        </div>

        {/* Massive Monumental Headline (Preserved Plus Jakarta Sans font with 0.8px letter spacing) */}
        <div className="pt-10 pb-12 sm:pt-14 sm:pb-16">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-black tracking-[0.8px] uppercase leading-[0.88] break-words text-white">
            Reach Orion
            <span className="sr-only"> — Next-Gen Headless CMS Platforms, Digital Architecture & SaaS MVP Studio</span>
          </h1>
          <div className="mt-4 flex items-center justify-between text-xs sm:text-sm font-editorial-mono text-[#D9D9D9]/70 tracking-widest uppercase">
            <span>[ IT DEVELOPMENT STUDIO ]</span>
            <span>HEADLESS CMS • WEBSITES • SAAS MVPS</span>
            <span className="hidden sm:inline">GLOBAL DELIVERY • INR & USD</span>
          </div>
        </div>

        {/* Editorial Split Row (Reference 1 layout: Editorial statement + agency pitch + statistics) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-8 border-t border-white/10 items-start">
          
          {/* Left Column: Bold Editorial Statement */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-2.5 py-0.5 text-[10px] font-bold font-editorial-mono uppercase tracking-widest bg-[#0071E3]/20 border border-[#0071E3]/40 text-[#0071E3]">
              CMS DEVELOPMENT PROPOSAL // 2026
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
              A Headless CMS that grows as fast as you do.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 font-medium">
              Custom CMS platforms, websites and SaaS MVPs, engineered for teams in India and worldwide.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 bg-[#0071E3] text-white hover:bg-blue-600 text-xs font-bold tracking-widest uppercase transition-all duration-200 border border-[#0071E3] active:scale-95 shadow-sm"
              >
                <span>Book A Discovery Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="#packages"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 bg-transparent text-white hover:bg-white/10 text-xs font-bold tracking-widest uppercase transition-all duration-200 border border-white/20 active:scale-95"
              >
                <span>View Packages</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Narrative & Metrics */}
          <div className="lg:col-span-6 space-y-8">
            <p className="text-sm sm:text-base text-[#D9D9D9] leading-relaxed font-normal">
              Reach Orion is an IT development studio delivering headless CMS platforms, websites and SaaS MVPs. We replace brittle monolithic templates with clean, decoupled architecture: fast to launch, simple for your team to manage and ready to scale.
            </p>

            {/* Micro Stats Row (Proposal Targets) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-editorial-mono">
                  90+
                </div>
                <div className="text-[10px] tracking-wider text-[#D9D9D9]/70 uppercase mt-1">
                  Lighthouse Score
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-editorial-mono">
                  &lt;0.9s
                </div>
                <div className="text-[10px] tracking-wider text-[#D9D9D9]/70 uppercase mt-1">
                  Largest Paint (LCP)
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0071E3] font-editorial-mono">
                  &lt;400ms
                </div>
                <div className="text-[10px] tracking-wider text-[#D9D9D9]/70 uppercase mt-1">
                  TTFB Response
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F766E] font-editorial-mono">
                  99.9%
                </div>
                <div className="text-[10px] tracking-wider text-[#D9D9D9]/70 uppercase mt-1">
                  Hosting Uptime
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
