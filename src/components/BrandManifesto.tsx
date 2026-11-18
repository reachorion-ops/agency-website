import React from 'react';

export const BrandManifesto: React.FC = () => {
  return (
    <section className="bg-[#FFFFFF] text-[#1D1D1F] min-h-screen flex flex-col justify-center py-20 md:py-24 border-b border-[#D9D9D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#D9D9D9]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold tracking-widest text-[#0071E3] font-editorial-mono uppercase">
                // 01 INTRODUCTION & PHILOSOPHY
              </span>
              <span className="inline-block px-2 py-0.5 text-[10px] font-bold font-editorial-mono uppercase bg-[#1D1D1F] text-white">
                GLOBAL DELIVERY • INR & USD
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase mt-2">
              We architect decoupled web experiences that scale with you.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-editorial-mono text-neutral-700 max-w-sm tracking-wide">
            INDIA AND INTERNATIONAL CLIENTS / INR AND USD BILLING. FAST TO LAUNCH, SIMPLE TO MANAGE AND READY TO SCALE.
          </p>
        </div>

        {/* 2-Column Asymmetrical Editorial Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] leading-snug">
              Why high-growth teams and founders choose decoupled CMS architecture.
            </h3>
            <div className="h-[2px] w-16 bg-[#0071E3]" />
            <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
              Legacy monolithic platforms lock your content, design, and hosting into a singular, brittle template. Every redesign breaks formatting, every plugin update threatens security, and every editorial edit requires engineer intervention.
            </p>
            <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
              <strong className="font-bold text-[#1D1D1F]">Reach Orion</strong> is an IT development studio delivering headless CMS platforms, websites and SaaS MVPs. We replace brittle monolithic templates with clean, decoupled architecture: fast to launch, simple for your team to manage and ready to scale.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#D9D9D9] border border-[#D9D9D9]">
            
            <div className="bg-[#FFFFFF] p-7 space-y-3 hover:bg-[#F5F5F7] transition-colors">
              <span className="text-xs font-bold font-editorial-mono text-[#0071E3]">[ 01 ] WEBSITES</span>
              <h4 className="text-base font-bold text-[#1D1D1F]">Fast, SEO + AIO-Ready</h4>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Engineered for maximum conversion with AI Optimization (AIO), semantic schemas, and sub-second rendering across global devices.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-7 space-y-3 hover:bg-[#F5F5F7] transition-colors">
              <span className="text-xs font-bold font-editorial-mono text-[#0F766E]">[ 02 ] SAAS MVPS</span>
              <h4 className="text-base font-bold text-[#1D1D1F]">Idea to Paying Users in Weeks</h4>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Agile sprints with weekly demos. Modular, secure, tested code on a staging link so your product team validates early and iterates fast.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-7 space-y-3 hover:bg-[#F5F5F7] transition-colors">
              <span className="text-xs font-bold font-editorial-mono text-[#1D1D1F]">[ 03 ] CMS PLATFORMS</span>
              <h4 className="text-base font-bold text-[#1D1D1F]">Headless or Custom Publishing</h4>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Intuitive workspaces (Sanity, Payload, Contentful) tailored so non-technical marketing and editorial teams publish with total ease.
              </p>
            </div>

            <div className="bg-[#FFFFFF] p-7 space-y-3 hover:bg-[#F5F5F7] transition-colors">
              <span className="text-xs font-bold font-editorial-mono text-[#0071E3]">[ 04 ] GUARANTEES</span>
              <h4 className="text-base font-bold text-[#1D1D1F]">Production Uptime & Speed</h4>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Targeting 90+ Lighthouse, &lt;0.9s LCP, &lt;400ms TTFB response, and 99.9% hosting uptime. Full IP ownership on payment.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
