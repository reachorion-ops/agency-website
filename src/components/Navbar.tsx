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
      {/* Floating Precision Capsule Header */}
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        
        {/* Desktop Navigation Capsule */}
        <div
          className={`pointer-events-auto hidden md:inline-flex items-center gap-7 lg:gap-8 px-7 py-2.5 rounded-full border transition-all duration-300 select-none relative ${
            scrolled
              ? 'bg-[#1D1D1F]/85 backdrop-blur-2xl backdrop-saturate-[180%] backdrop-brightness-[1.18] backdrop-contrast-[105%] border-white/15 shadow-xl shadow-black/20'
              : 'bg-[#1D1D1F]/70 backdrop-blur-2xl backdrop-saturate-[180%] backdrop-brightness-[1.18] backdrop-contrast-[105%] border-white/10 shadow-lg shadow-black/15'
          }`}
        >
          {/* 1. Official SVG Brand Wordmark */}
          <a
            href="#"
            className="inline-flex items-center text-white group whitespace-nowrap"
            aria-label="Reach Orion Home"
          >
            <BrandWordmark
              theme="light"
              className="h-5 lg:h-5.5 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* 2. Nav Items */}
          <div className="flex items-center gap-2 lg:gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] lg:text-xs font-semibold tracking-widest text-neutral-200 hover:text-white transition-all duration-200 uppercase whitespace-nowrap px-3 py-1.5 rounded-full hover:bg-white/[0.07] relative group"
              >
                {link.label}
                <span className="absolute bottom-0.5 left-3 right-3 h-[1.5px] bg-[#0071E3] scale-x-0 transition-transform duration-200 group-hover:scale-x-100 rounded-full" />
              </a>
            ))}
          </div>

          {/* 3. CTA Button */}
          <button
            onClick={onOpenInquiry}
            className="group/btn inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-[#F5F5F7] text-[#1D1D1F] text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Navigation Capsule (< 768px) */}
        <div
          className={`pointer-events-auto md:hidden w-full max-w-sm flex items-center justify-between px-5 py-2.5 rounded-full border transition-all duration-300 relative select-none ${
            scrolled
              ? 'bg-[#1D1D1F]/85 backdrop-blur-2xl backdrop-saturate-[180%] backdrop-brightness-[1.18] backdrop-contrast-[105%] border-white/15 shadow-xl shadow-black/20'
              : 'bg-[#1D1D1F]/70 backdrop-blur-2xl backdrop-saturate-[180%] backdrop-brightness-[1.18] backdrop-contrast-[105%] border-white/10 shadow-lg shadow-black/15'
          }`}
        >
          <a href="#" className="flex items-center" aria-label="Reach Orion Home">
            <BrandWordmark theme="light" className="h-4.5 w-auto" />
          </a>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenInquiry}
              className="px-3 py-1 rounded-full bg-white text-[#1D1D1F] text-[11px] font-bold tracking-wider uppercase shadow-sm active:scale-95 transition-transform"
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

      {/* Mobile Drawer Backdrop & Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="md:hidden fixed inset-x-4 top-20 z-50 bg-[#1D1D1F]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <BrandWordmark theme="light" className="h-4.5 w-auto" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-white hover:text-[#0071E3] rounded-full hover:bg-white/10"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-3 py-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold tracking-widest text-white hover:text-[#0071E3] transition-colors py-1.5 uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#packages"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold tracking-widest text-[#0071E3] hover:text-blue-400 transition-colors py-1.5 uppercase"
              >
                PACKAGES & PRICING
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#0071E3] text-white text-xs font-bold tracking-widest uppercase mt-2 hover:bg-blue-600 transition-colors shadow-md active:scale-95"
            >
              <span>Book Discovery Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </>
      )}
    </>
  );
};
