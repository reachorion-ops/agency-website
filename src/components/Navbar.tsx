import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { BrandWordmark } from './BrandWordmark';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        
        {/* Desktop Navigation Capsule */}
        <div
          className={`pointer-events-auto hidden md:inline-flex items-center gap-8 px-7 py-2.5 rounded-full border transition-all duration-300 select-none relative ${
            scrolled
              ? 'bg-[#1D1D1F]/45 bg-gradient-to-b from-white/[0.16] via-white/[0.04] to-black/[0.22] backdrop-blur-2xl backdrop-saturate-[190%] border-white/25 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.45),inset_0_-1px_1px_0_rgba(0,0,0,0.35),0_20px_48px_-10px_rgba(0,0,0,0.45)]'
              : 'bg-[#1D1D1F]/30 bg-gradient-to-b from-white/[0.14] via-white/[0.03] to-black/[0.15] backdrop-blur-2xl backdrop-saturate-[190%] border-white/20 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.4),inset_0_-1px_1px_0_rgba(0,0,0,0.25),0_16px_36px_-8px_rgba(0,0,0,0.35)]'
          }`}
        >
          {/* Specular Refraction Lip (Curved glass surface tension reflection) */}
          <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

          {/* 1. Official SVG Brand Wordmark */}
          <a
            href="#"
            className="inline-flex items-center text-white group whitespace-nowrap"
            aria-label="Reach Orion Home"
          >
            <BrandWordmark
              theme="light"
              className="h-5 lg:h-5.5 w-auto transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* 2. Nav Items with the exact same gap (gap-8) between every link */}
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] lg:text-xs font-semibold tracking-widest text-neutral-200 hover:text-white transition-colors uppercase whitespace-nowrap relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0071E3] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}

          {/* 3. CTA Button (Direct gap-8 spacing, clean rounded pill) */}
          <button
            onClick={onOpenInquiry}
            className="group/btn inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-[#F5F5F7] text-[#1D1D1F] text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] active:scale-95 whitespace-nowrap"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Navigation Capsule (< 768px) */}
        <div
          className={`pointer-events-auto md:hidden w-full max-w-sm flex items-center justify-between px-5 py-2.5 rounded-full border transition-all duration-300 relative select-none ${
            scrolled
              ? 'bg-[#1D1D1F]/45 bg-gradient-to-b from-white/[0.16] via-white/[0.04] to-black/[0.22] backdrop-blur-2xl backdrop-saturate-[190%] border-white/25 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.45),0_16px_36px_-8px_rgba(0,0,0,0.35)]'
              : 'bg-[#1D1D1F]/30 bg-gradient-to-b from-white/[0.14] via-white/[0.03] to-black/[0.15] backdrop-blur-2xl backdrop-saturate-[190%] border-white/20 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.4),0_12px_28px_-6px_rgba(0,0,0,0.3)]'
          }`}
        >
          {/* Specular Refraction Lip */}
          <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

          <a href="#" className="flex items-center" aria-label="Reach Orion Home">
            <BrandWordmark theme="light" className="h-4.5 w-auto" />
          </a>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenInquiry}
              className="px-3 py-1 rounded-full bg-white text-[#1D1D1F] text-[11px] font-bold tracking-wider uppercase shadow-[0_2px_6px_rgba(0,0,0,0.12)] active:scale-95 transition-transform"
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
