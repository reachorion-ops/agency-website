import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { AGENCY_SPECS } from '../data/agencyData';
import { BrandLogo } from './BrandLogo';

interface ProjectInquiryProps {
  initialCms?: string;
  initialService?: string;
  initialBudget?: string;
}

export const ProjectInquiry: React.FC<ProjectInquiryProps> = ({
  initialCms = '',
  initialService = '',
  initialBudget = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    cmsPreference: initialCms || 'Sanity.io',
    budgetRange: initialBudget || 'Prior (From $1,500 / ₹1.25L)',
    timeline: '1–3 weeks',
    brief: initialService ? `Inquiring about ${initialService} architecture.` : '',
  });

  useEffect(() => {
    if (initialCms) {
      setFormData((prev) => ({ ...prev, cmsPreference: initialCms }));
    }
  }, [initialCms]);

  useEffect(() => {
    if (initialBudget) {
      setFormData((prev) => ({ ...prev, budgetRange: initialBudget }));
    }
  }, [initialBudget]);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        brief: `Inquiring about ${initialService} package / architecture.`,
      }));
    }
  }, [initialService]);

  const [submitted, setSubmitted] = useState(false);
  const [dossierRef, setDossierRef] = useState('');

  const cmsOptions = [
    'Sanity.io',
    'Payload CMS 3.0',
    'Contentful Enterprise',
    'Strapi 5',
    'Open to Studio Recommendation',
  ];

  const budgetOptions = [
    'Essential (From $600 / ₹50k)',
    'Prior (From $1,500 / ₹1.25L)',
    'Custom Quote (Flexible)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `RO-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
    setDossierRef(refCode);
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="bg-[#FFFFFF] text-[#1D1D1F] min-h-screen flex flex-col justify-center py-20 md:py-24 border-b border-[#D9D9D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-[#D9D9D9]">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#0071E3] font-editorial-mono uppercase">
              // 06 COMMISSION INITIATION
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase mt-2">
              Start A Commission
            </h2>
          </div>
          <div className="text-xs font-editorial-mono text-neutral-500 max-w-sm">
            WE ACCEPT A MAXIMUM OF FOUR CLIENT COMMISSIONS PER QUARTER TO ENSURE UNCOMPROMISING ARCHITECTURAL EXCELLENCE.
          </div>
        </div>

        {/* Content Layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Agency Advisory & Direct Line */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 bg-[#F5F5F7] border border-[#D9D9D9] space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold font-editorial-mono text-[#0F766E] uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  <span>EXECUTIVE CONCIERGE PROTOCOL</span>
                </div>
                <BrandLogo theme="dark" className="w-5 h-5 shrink-0" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#1D1D1F]">
                Direct Principal Access
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Every project at Reach Orion is personally led by a Principal Architectural Engineer. No mid-level account managers. No junior handoffs.
              </p>

              <div className="pt-3 border-t border-[#D9D9D9] space-y-2.5 text-xs font-editorial-mono">
                <div>
                  <span className="text-neutral-400">DIRECT INQUIRIES:</span>
                  <div className="text-[#1D1D1F] font-bold mt-0.5">{AGENCY_SPECS.inquiriesEmail}</div>
                </div>
                <div>
                  <span className="text-neutral-400">GLOBAL HUBS:</span>
                  <div className="text-[#1D1D1F] font-bold mt-0.5">{AGENCY_SPECS.location}</div>
                </div>
                <div>
                  <span className="text-neutral-400">RESPONSE SLA:</span>
                  <div className="text-[#0071E3] font-bold mt-0.5">&lt; 12 Hours Guaranteed</div>
                </div>
              </div>
            </div>

            {/* Architectural Guarantee Badge */}
            <div className="p-5 border border-[#D9D9D9] flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#0071E3] shrink-0 mt-0.5" />
              <div className="text-xs text-neutral-600 leading-relaxed">
                <strong className="text-[#1D1D1F] font-bold uppercase block mb-0.5">
                  The 100/100 Core Web Vitals Warranty
                </strong>
                We guarantee your production build satisfies Google Core Web Vitals across all global nodes upon launch, or we refine at studio expense.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-white border border-[#D9D9D9] p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="py-10 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-14 h-14 mx-auto bg-[#0F766E] text-white flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-widest text-[#0F766E] font-editorial-mono uppercase">
                    COMMISSION DOSSIER TRANSMITTED
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1D1D1F]">
                    Inquiry Logged: {dossierRef}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto">
                    Thank you, <strong className="text-[#1D1D1F]">{formData.name}</strong>. Our Principal Architectural Partner will review your brief for <strong className="text-[#1D1D1F]">{formData.organization || 'your organization'}</strong> and deliver a customized technical proposal within 12 hours.
                  </p>
                </div>

                <div className="p-3 bg-[#F5F5F7] border border-[#D9D9D9] text-xs font-editorial-mono max-w-sm mx-auto text-left space-y-1">
                  <div><strong>SELECTED CMS:</strong> {formData.cmsPreference}</div>
                  <div><strong>TARGET BUDGET:</strong> {formData.budgetRange}</div>
                  <div><strong>STATUS:</strong> PENDING PRINCIPAL REVIEW</div>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-[#1D1D1F] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#0071E3] transition-colors"
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* CMS Selection Matrix */}
                <div className="space-y-2">
                  <label className="text-xs font-black tracking-wider uppercase font-editorial-mono text-[#1D1D1F] flex items-center justify-between">
                    <span>01 // Select Preferred CMS Architecture</span>
                    <span className="text-neutral-400 font-normal text-[10px]">(Or ask for advice)</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cmsOptions.map((cms) => (
                      <button
                        type="button"
                        key={cms}
                        onClick={() => setFormData({ ...formData, cmsPreference: cms })}
                        className={`p-2.5 text-left text-xs font-editorial-mono transition-all border ${
                          formData.cmsPreference === cms
                            ? 'bg-[#1D1D1F] text-white border-[#1D1D1F] font-bold shadow-sm'
                            : 'bg-[#F5F5F7] text-neutral-700 border-[#D9D9D9] hover:border-neutral-400'
                        }`}
                      >
                        {cms}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Target Budget & Package Tiers */}
                <div className="space-y-2">
                  <label className="text-xs font-black tracking-wider uppercase font-editorial-mono text-[#1D1D1F] flex items-center justify-between">
                    <span>02 // Select Package / Investment Target</span>
                    <span className="text-neutral-400 font-normal text-[10px]">(INR / USD accepted)</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {budgetOptions.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budgetRange: b })}
                        className={`p-2.5 text-center text-xs font-editorial-mono transition-all border ${
                          formData.budgetRange === b
                            ? 'bg-[#0071E3] text-white border-[#0071E3] font-bold shadow-sm'
                            : 'bg-[#F5F5F7] text-neutral-700 border-[#D9D9D9] hover:border-neutral-400'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Identity Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold tracking-wider uppercase font-editorial-mono text-neutral-600">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jean-Luc Moreau"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-2.5 bg-[#F5F5F7] border border-[#D9D9D9] text-[#1D1D1F] text-xs focus:outline-none focus:border-[#0071E3] focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold tracking-wider uppercase font-editorial-mono text-neutral-600">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. j.moreau@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-2.5 bg-[#F5F5F7] border border-[#D9D9D9] text-[#1D1D1F] text-xs focus:outline-none focus:border-[#0071E3] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold tracking-wider uppercase font-editorial-mono text-neutral-600">
                    Organization / Brand Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Atelier Vaneau Paris"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full p-2.5 bg-[#F5F5F7] border border-[#D9D9D9] text-[#1D1D1F] text-xs focus:outline-none focus:border-[#0071E3] focus:bg-white transition-colors"
                  />
                </div>

                {/* Project Brief */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold tracking-wider uppercase font-editorial-mono text-neutral-600">
                    Project Scope & Objectives
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your current CMS stack, challenges, and target launch timeline..."
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    className="w-full p-2.5 bg-[#F5F5F7] border border-[#D9D9D9] text-[#1D1D1F] text-xs focus:outline-none focus:border-[#0071E3] focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-[10px] text-neutral-500 font-editorial-mono">
                    ✦ STRICT CONFIDENTIALITY & NDA PROTECTED
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1D1D1F] hover:bg-[#0071E3] text-white text-xs font-bold tracking-widest uppercase transition-colors"
                  >
                    <span>Transmit Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
