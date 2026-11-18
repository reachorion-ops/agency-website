import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { AGENCY_SPECS } from '../data/agencyData';
import { BrandLogo } from './BrandLogo';
import wordmarkLightSvg from '../assets/wordmark-light.svg';

export const Footer: React.FC = () => {
  const [times, setTimes] = useState({
    zurich: '',
    london: '',
    newYork: '',
    tokyo: '',
  });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimes({
        zurich: now.toLocaleTimeString('en-US', { timeZone: 'Europe/Zurich', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
        london: now.toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
        newYork: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
        tokyo: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
      });
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1D1D1F] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* World Time Hubs (Luxury agency hallmark) */}
        <div className="pb-12 border-b border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 font-editorial-mono text-xs">
          <div>
            <div className="text-neutral-300">ZURICH [ CET ]</div>
            <div className="text-sm font-bold text-white mt-1">{times.zurich || '--:--:--'}</div>
          </div>
          <div>
            <div className="text-neutral-300">LONDON [ GMT ]</div>
            <div className="text-sm font-bold text-white mt-1">{times.london || '--:--:--'}</div>
          </div>
          <div>
            <div className="text-neutral-300">NEW YORK [ EST ]</div>
            <div className="text-sm font-bold text-white mt-1">{times.newYork || '--:--:--'}</div>
          </div>
          <div>
            <div className="text-neutral-300">TOKYO [ JST ]</div>
            <div className="text-sm font-bold text-white mt-1">{times.tokyo || '--:--:--'}</div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-start border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <img
              src={wordmarkLightSvg}
              alt="Reach Orion Wordmark"
              width={841}
              height={129}
              decoding="async"
              className="h-7 sm:h-8 w-auto mb-2"
            />
            <p className="text-xs sm:text-sm text-[#D9D9D9] max-w-sm leading-relaxed">
              {AGENCY_SPECS.mission}
            </p>
            <div className="pt-2 text-xs font-editorial-mono text-[#0F766E] flex items-center gap-2">
              <BrandLogo theme="light" className="w-4 h-4 shrink-0" />
              <span>EST. {AGENCY_SPECS.foundedYear} • ZERO MONOLITHIC LOCK-IN</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3 text-xs font-editorial-mono">
            <span className="text-neutral-300 font-bold tracking-widest uppercase block mb-4">
              INDEX
            </span>
            <div><a href="#capabilities" className="hover:text-[#0071E3] transition-colors">CAPABILITIES</a></div>
            <div><a href="#architecture" className="hover:text-[#0071E3] transition-colors">DECOUPLED ARCHITECTURE</a></div>
            <div><a href="#archive" className="hover:text-[#0071E3] transition-colors">SELECTED COMMISSIONS</a></div>
            <div><a href="#testimonials" className="hover:text-[#0071E3] transition-colors">VERIFIED TESTIMONIALS</a></div>
            <div><a href="#methodology" className="hover:text-[#0071E3] transition-colors">FOUR-PHASE TIMELINE</a></div>
            <div><a href="#packages" className="hover:text-[#0071E3] transition-colors">PACKAGES & PRICING</a></div>
            <div><a href="#inquiry" className="hover:text-[#0071E3] transition-colors">DISCOVERY & INQUIRY</a></div>
          </div>

          {/* Technology Standards */}
          <div className="md:col-span-4 space-y-3 text-xs font-editorial-mono">
            <span className="text-neutral-300 font-bold tracking-widest uppercase block mb-4">
              ARCHITECTURAL ECOSYSTEM
            </span>
            <div className="text-neutral-300">SANITY.IO • PAYLOAD CMS 3.0</div>
            <div className="text-neutral-300">CONTENTFUL ENTERPRISE • STRAPI 5</div>
            <div className="text-neutral-300">NEXT.JS APP ROUTER • REACT 18</div>
            <div className="text-neutral-300">CLOUDFLARE WORKERS • VERCEL EDGE</div>
            <div className="text-neutral-300">TAILWIND CSS • FRAMER MOTION</div>
          </div>

        </div>

        {/* Massive Editorial Footer Wordmark */}
        <div className="pt-12 pb-8 overflow-hidden select-none flex justify-center">
          <img
            src={wordmarkLightSvg}
            alt="Reach Orion Wordmark"
            width={841}
            height={129}
            loading="lazy"
            decoding="async"
            className="w-full max-w-4xl h-auto"
          />
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] font-editorial-mono text-neutral-300">
          <div>
            © {AGENCY_SPECS.foundedYear} {AGENCY_SPECS.legal}. ALL RIGHTS RESERVED.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
