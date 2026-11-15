import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { BrandWordmark } from './BrandWordmark';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, active: false }));
  };

  const navLinks = [
    { label: 'CAPABILITIES', href: '#capabilities' },
    { label: 'ARCHITECTURE', href: '#architecture' },
    { label: 'ARCHIVE', href: '#archive' },
    { label: 'TESTIMONIALS', href: '#testimonials' },
    { label: 'PROCESS', href: '#methodology' },
  ];

  return (
    <>
      {/* Floating Precision Capsule Header (Uniform Mathematical Gapping, No Q1/Q2 pill) */}
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        
        {/* Desktop Navigation Capsule (Liquid Glass Surface) */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`pointer-events-auto hidden md:inline-flex items-center gap-7 lg:gap-8 px-7 py-2.5 rounded-full border transition-all duration-300 select-none relative overflow-hidden ${
            scrolled
              ? 'bg-gradient-to-b from-white/[0.16] via-[#1D1D1F]/35 to-[#1D1D1F]/55 backdrop-blur-2xl backdrop-saturate-[200%] backdrop-contrast-[105%] border-white/25 shadow-[inset_0_1.5px_1.5px_0_rgba(255,255,255,0.5),inset_0_-1px_1px_0_rgba(0,0,0,0.35),0_20px_50px_-10px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.08)]'
              : 'bg-gradient-to-b from-white/[0.13] via-[#1D1D1F]/25 to-[#1D1D1F]/40 backdrop-blur-2xl backdrop-saturate-[200%] backdrop-contrast-[105%] border-white/20 shadow-[inset_0_1.5px_1.5px_0_rgba(255,255,255,0.45),inset_0_-1px_1px_0_rgba(0,0,0,0.25),0_16px_40px_-8px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.06)]'
          }`}
        >
          {/* 1. Curved Liquid Meniscus (Top light refraction) */}
          <div className="absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />
          
          {/* 2. Ambient Fluid Dispersion / Caustic Bounce (Bottom glass curve) */}
          <div className="absolute inset-x-12 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

          {/* 3. Interactive Liquid Specular Glare (Follows cursor smoothly across glass) */}
          <div
            className="absolute pointer-events-none rounded-full transition-opacity duration-300 ease-out"
            style={{
              left: mousePos.x,
              top: mousePos.y,
              width: '260px',
              height: '140px',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.24) 0%, rgba(0,113,227,0.12) 40%, transparent 70%)',
              opacity: mousePos.active ? 1 : 0,
              mixBlendMode: 'screen',
            }}
          />

          {/* 1. Official SVG Brand Wordmark */}
          <a
            href="#"
            className="inline-flex items-center text-white group whitespace-nowrap relative z-10"
            aria-label="Reach Orion Home"
          >
            <BrandWordmark
              theme="light"
              className="h-5 lg:h-5.5 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* 2. Nav Items with Liquid Hover Glass Puddles */}
          <div className="flex items-center gap-1 relative z-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] lg:text-xs font-semibold tracking-widest text-neutral-200 hover:text-white transition-all duration-200 uppercase whitespace-nowrap px-3 py-1.5 rounded-full hover:bg-white/[0.08] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] relative group"
              >
                {link.label}
                <span className="absolute bottom-0.5 left-3 right-3 h-[1.5px] bg-[#0071E3] scale-x-0 transition-transform duration-200 group-hover:scale-x-100 rounded-full" />
              </a>
            ))}
          </div>

          {/* 3. CTA Button (Direct gap-8 spacing, clean rounded pill) */}
          <button
            onClick={onOpenInquiry}
            className="group/btn relative z-10 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-[#F5F5F7] text-[#1D1D1F] text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-[0_2px_10px_rgba(0,0,0,0.15),inset_0_1px_1.5px_rgba(255,255,255,1),inset_0_-1px_1px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.22),inset_0_1px_1.5px_rgba(255,255,255,1)] active:scale-95 whitespace-nowrap"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Navigation Capsule (< 768px) */}
        <div
          className={`pointer-events-auto md:hidden w-full max-w-sm flex items-center justify-between px-5 py-2.5 rounded-full border transition-all duration-300 relative overflow-hidden select-none ${
            scrolled
              ? 'bg-gradient-to-b from-white/[0.16] via-[#1D1D1F]/35 to-[#1D1D1F]/55 backdrop-blur-2xl backdrop-saturate-[200%] backdrop-contrast-[105%] border-white/25 shadow-[inset_0_1.5px_1.5px_0_rgba(255,255,255,0.5),inset_0_-1px_1px_0_rgba(0,0,0,0.35),0_16px_36px_-8px_rgba(0,0,0,0.4)]'
              : 'bg-gradient-to-b from-white/[0.13] via-[#1D1D1F]/25 to-[#1D1D1F]/40 backdrop-blur-2xl backdrop-saturate-[200%] backdrop-contrast-[105%] border-white/20 shadow-[inset_0_1.5px_1.5px_0_rgba(255,255,255,0.45),inset_0_-1px_1px_0_rgba(0,0,0,0.25),0_12px_28px_-6px_rgba(0,0,0,0.3)]'
          }`}
        >
          {/* Meniscus Lip */}
          <div className="absolute inset-x-6 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />

          <a href="#" className="flex items-center relative z-10" aria-label="Reach Orion Home">
            <BrandWordmark theme="light" className="h-4.5 w-auto" />
          </a>

          <div className="flex items-center gap-2.5 relative z-10">
            <button
              onClick={onOpenInquiry}
              className="px-3 py-1 rounded-full bg-white text-[#1D1D1F] text-[11px] font-bold tracking-wider uppercase shadow-[0_2px_8px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.9)] active:scale-95 transition-transform"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-white hover:text-[#0071E3] transition-colors rounded-full"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 bg-[#1D1D1F]/70 bg-gradient-to-b from-white/[0.12] via-white/[0.02] to-black/30 backdrop-blur-2xl backdrop-saturate-[190%] border border-white/20 rounded-2xl p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_25px_50px_-12px_rgba(0,0,0,0.6)] flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <BrandWordmark theme="light" className="h-4.5 w-auto" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 text-white hover:text-[#0071E3]"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold tracking-widest text-white hover:text-[#0071E3] transition-colors py-1 uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#0071E3] text-white text-xs font-bold tracking-widest uppercase mt-2 hover:bg-blue-600 transition-colors"
          >
            <span>Start A Commission</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
};
