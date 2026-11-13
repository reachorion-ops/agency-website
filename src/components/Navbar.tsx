import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';
import { AGENCY_SPECS } from '../data/agencyData';

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
      {/* Floating Precision Capsule Header (Uniform Mathematical Gapping) */}
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        
        {/* Desktop Navigation Capsule: Perfectly Consistent Gapping Throughout */}
        <div
          className={`pointer-events-auto hidden md:inline-flex items-center gap-7 px-7 py-2.5 rounded-full border transition-all duration-300 shadow-2xl select-none ${
            scrolled
              ? 'bg-[#1D1D1F]/90 backdrop-blur-xl border-white/20 shadow-black/60'
              : 'bg-[#1D1D1F]/80 backdrop-blur-md border-white/15'
          }`}
        >
          {/* 1. Brand Monogram + Wordmark */}
          <a
            href="#"
            className="inline-flex items-center gap-2.5 text-white group whitespace-nowrap"
          >
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#1D1D1F] font-black text-[11px] tracking-tight transition-transform group-hover:scale-105 shadow-sm">
              RO
            </div>
            <span className="font-extrabold tracking-tight text-xs lg:text-sm uppercase transition-colors group-hover:text-[#0071E3] whitespace-nowrap">
              Reach Orion
            </span>
          </a>

          {/* 2. Nav Items with the exact same gap (gap-7) between every link */}
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] lg:text-xs font-semibold tracking-widest text-neutral-300 hover:text-white transition-colors uppercase whitespace-nowrap relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0071E3] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}

          {/* 3. Studio Availability Beacon (exact gap-7 spacing) */}
          <div className="hidden xl:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-editorial-mono text-[#F5F5F7] whitespace-nowrap">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0F766E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0F766E]"></span>
            </span>
            <span className="tracking-wider uppercase text-neutral-300">
              Q1/Q2 COMMISSIONS
            </span>
          </div>

          {/* 4. CTA Button (exact gap-7 spacing, compact rounded pill) */}
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-[#F5F5F7] text-[#1D1D1F] text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow active:scale-95 whitespace-nowrap"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Navigation Capsule (< 768px) */}
        <div
          className={`pointer-events-auto md:hidden w-full max-w-sm flex items-center justify-between px-5 py-2.5 rounded-full border transition-all duration-300 shadow-xl ${
            scrolled
              ? 'bg-[#1D1D1F]/90 backdrop-blur-xl border-white/20'
              : 'bg-[#1D1D1F]/80 backdrop-blur-md border-white/15'
          }`}
        >
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#1D1D1F] font-black text-[11px]">
              RO
            </div>
            <span className="text-white font-extrabold text-xs tracking-tight uppercase">
              Reach Orion
            </span>
          </a>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenInquiry}
              className="px-3 py-1 rounded-full bg-white text-[#1D1D1F] text-[11px] font-bold tracking-wider uppercase"
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
        <div className="md:hidden fixed inset-x-4 top-20 z-50 bg-[#1D1D1F]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-editorial-mono text-[#0F766E]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0F766E] animate-pulse"></span>
              <span>ACCEPTING COMMISSIONS</span>
            </span>
            <span className="text-neutral-400">EST. {AGENCY_SPECS.foundedYear}</span>
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
