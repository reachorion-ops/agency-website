import React from 'react';
import { BrandLogo } from './BrandLogo';

export const BrandManifesto: React.FC = () => {
  return (
    <section className="bg-[#FFFFFF] text-[#1D1D1F] py-20 md:py-28 border-b border-[#D9D9D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#D9D9D9]">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#0071E3] font-editorial-mono uppercase">
              // 00 MANIFESTO & PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase mt-2">
              The Monolith Is Dead.
            </h2>
          </div>
          <p className="text-sm font-editorial-mono text-neutral-500 max-w-sm tracking-wide">
            RIGID MONOLITHIC CMS PLATFORMS WERE BUILT FOR 2012. WE ENGINEER DIGITAL ARCHITECTURES FOR 2026 AND BEYOND.
          </p>
        </div>

        {/* 2-Column Asymmetrical Editorial Prose */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] leading-snug">
              Why luxury brands and enterprise operators refuse monolithic platforms.
            </h3>
            <div className="h-[2px] w-16 bg-[#1D1D1F]" />
            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              Legacy monolithic platforms lock your content, design, and hosting into a singular, fragile database. Every redesign breaks formatting; every plugin update threatens downtime; every editorial change requires developer intervention.
            </p>
            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              At <span className="inline-flex items-center gap-1.5 text-[#1D1D1F] font-bold"><BrandLogo theme="light" className="w-4 h-4 shrink-0" />Reach Orion</span>, we decouple your content engine from your frontend interface. Your editors work in bespoke, intuitive workspaces (Sanity, Payload, Contentful), while your visitors experience sub-second, Apple-grade rendering built with React and edge networks.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#D9D9D9] border border-[#D9D9D9]">
            
            <div className="bg-[#FFFFFF] p-8 space-y-4 hover:bg-[#F5F5F7] transition-colors">
              <span className="text-xs font-bold font-editorial-mono text-[#0071E3]">[ 01 ] SPEED</span>
              <h4 className="text-lg font-bold text-[#1D1D1F]">Sub-Second Edge Rendering</h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Pages are pre-rendered at 300+ edge locations worldwide. Your audience in Tokyo experiences the same instantaneous sub-100ms response as someone in New York.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-8 space-y-4 hover:bg-[#F5F5F7] transition-colors">
              <span className="text-xs font-bold font-editorial-mono text-[#0F766E]">[ 02 ] SOVEREIGNTY</span>
              <h4 className="text-lg font-bold text-[#1D1D1F]">Editorial Independence</h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Empower your marketing and editorial teams with structured schemas, live real-time visual previews, and strict governance without touching code.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-8 space-y-4 hover:bg-[#F5F5F7] transition-colors">
              <span className="text-xs font-bold font-editorial-mono text-[#1D1D1F]">[ 03 ] SECURITY</span>
              <h4 className="text-lg font-bold text-[#1D1D1F]">Impenetrable Attack Surface</h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                With no publicly exposed database or administrative logins on your production frontend, SQL injection and brute-force vulnerabilities cease to exist.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-8 space-y-4 hover:bg-[#F5F5F7] transition-colors">
              <span className="text-xs font-bold font-editorial-mono text-[#0071E3]">[ 04 ] LONGEVITY</span>
              <h4 className="text-lg font-bold text-[#1D1D1F]">Future-Proof Adaptability</h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Redesign your frontend in three years without migrating a single article, product, or image asset. Your structured content remains eternal.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
