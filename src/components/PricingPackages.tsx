import React from 'react';
import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react';
import { PRICING_PACKAGES, PACKAGE_INCLUSIONS, PRICING_FOOTNOTE, WHY_CHOOSE_ORION } from '../data/agencyData';

interface PricingPackagesProps {
  onSelectPackage: (packageName: string, budgetRange: string) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="bg-[#FFFFFF] text-[#1D1D1F] min-h-screen flex flex-col justify-center py-20 md:py-24 border-b border-[#D9D9D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#D9D9D9]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold tracking-widest text-[#0071E3] font-editorial-mono uppercase">
                // 05 INVESTMENT & PACKAGES
              </span>
              <span className="inline-block px-2 py-0.5 text-[10px] font-bold font-editorial-mono uppercase bg-[#1D1D1F] text-white">
                INR & USD BILLING
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[0.95]">
              Simple packages. Clear pricing.
            </h2>
          </div>
          <div className="text-xs font-editorial-mono text-neutral-600 max-w-md">
            CUSTOM CMS PLATFORMS, WEBSITES AND SAAS MVPS, ENGINEERED FOR TEAMS IN INDIA AND WORLDWIDE.
          </div>
        </div>

        {/* 3 Package Cards Grid (Strictly mirroring Page 6 of Proposal) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PRICING_PACKAGES.map((pkg) => {
            const isHighlighted = pkg.highlighted;

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between p-7 sm:p-8 transition-all duration-200 border ${
                  isHighlighted
                    ? 'bg-[#1D1D1F] text-white border-[#1D1D1F] shadow-xl ring-1 ring-[#0071E3]/20'
                    : 'bg-[#FFFFFF] text-[#1D1D1F] border-[#D9D9D9] hover:border-neutral-400 shadow-sm'
                }`}
              >
                {/* Top Package Identification & Recommended Badge */}
                <div>
                  <div className="flex items-center justify-between min-h-[28px] mb-4">
                    <span
                      className={`text-xs font-extrabold font-editorial-mono tracking-widest uppercase ${
                        isHighlighted ? 'text-white' : 'text-[#0F766E]'
                      }`}
                    >
                      {pkg.name}
                    </span>
                    {pkg.badge && (
                      <span className="px-2.5 py-0.5 rounded-none bg-[#0071E3] text-white text-[10px] font-bold tracking-wider uppercase font-editorial-mono">
                        {pkg.badge}
                      </span>
                    )}
                    {pkg.subtitle && !pkg.badge && (
                      <span
                        className={`text-[10px] font-semibold tracking-wider uppercase font-editorial-mono ${
                          isHighlighted ? 'text-neutral-400' : 'text-neutral-500'
                        }`}
                      >
                        {pkg.subtitle}
                      </span>
                    )}
                  </div>

                  {/* Price Figures */}
                  <div className="pb-6 border-b border-inherit/20">
                    <div
                      className={`text-4xl sm:text-5xl font-black tracking-tight ${
                        isHighlighted ? 'text-white' : 'text-[#1D1D1F]'
                      }`}
                    >
                      {pkg.price}
                    </div>
                    <div
                      className={`text-xs font-editorial-mono mt-2 ${
                        isHighlighted ? 'text-neutral-400' : 'text-neutral-600'
                      }`}
                    >
                      {pkg.timeline}
                    </div>
                  </div>

                  {/* Deliverables & Scope Checklist */}
                  <ul className="py-6 space-y-3.5 text-xs sm:text-sm">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] shrink-0 mt-1.5" />
                        <span
                          className={isHighlighted ? 'text-neutral-200' : 'text-neutral-700'}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-6 border-t border-inherit/20">
                  <button
                    onClick={() => {
                      const budgetLabel =
                        pkg.id === 'essential'
                          ? 'Essential (From $600 / ₹50k)'
                          : pkg.id === 'prior'
                          ? 'Prior (From $1,500 / ₹1.25L)'
                          : 'Custom Quote (Flexible)';
                      onSelectPackage(pkg.name, budgetLabel);
                    }}
                    className={`w-full py-3.5 px-6 font-editorial-mono text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 ${
                      isHighlighted
                        ? 'bg-[#0071E3] hover:bg-blue-600 text-white shadow-md'
                        : 'bg-transparent text-[#1D1D1F] border border-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote / Commercial Terms (Strictly Page 6 Footnote) */}
        <div className="mt-8 p-4 bg-[#F5F5F7] border border-[#D9D9D9] text-[11px] font-editorial-mono text-neutral-600 leading-relaxed flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <div>
            <span>{PRICING_FOOTNOTE.taxNote}</span>
            <span className="mx-2 hidden md:inline text-neutral-400">/</span>
            <span className="text-[#1D1D1F] font-bold">{PRICING_FOOTNOTE.billingTerms}</span>
          </div>
          <div className="text-neutral-500 font-bold">
            {PRICING_FOOTNOTE.acronymNote}
          </div>
        </div>

        {/* Included in Every Package (Strictly Page 7 of Proposal) */}
        <div className="mt-8 pt-8 border-t border-[#D9D9D9]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#D9D9D9]">
            <div className="shrink-0 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#0F766E]" />
              <span className="text-xs font-bold tracking-widest font-editorial-mono uppercase text-[#1D1D1F]">
                INCLUDED IN EVERY PACKAGE:
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {PACKAGE_INCLUSIONS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0071E3] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold font-editorial-mono text-[#1D1D1F]">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-neutral-500 mt-0.5 leading-snug">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Teams Choose Reach Orion (Strictly Page 7 of Proposal) */}
        <div className="mt-12">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#0071E3] font-editorial-mono uppercase">
                // 06 CORE PRINCIPLES
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1D1D1F] mt-1">
                Why teams choose Reach Orion.
              </h3>
            </div>
            <div className="text-xs font-editorial-mono text-neutral-500">
              PRAGMATIC EXECUTION • GLOBAL STANDARDS • PROVEN VELOCITY
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D9D9D9] border border-[#D9D9D9]">
            {WHY_CHOOSE_ORION.map((reason) => (
              <div key={reason.id} className="bg-[#FFFFFF] p-6 space-y-2 hover:bg-[#F5F5F7] transition-colors">
                <span className="text-xs font-bold font-editorial-mono text-[#0071E3]">
                  [ {reason.id} ]
                </span>
                <h4 className="text-sm font-bold text-[#1D1D1F]">
                  {reason.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

