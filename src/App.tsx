import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandManifesto } from './components/BrandManifesto';
import { CapabilitiesGrid } from './components/CapabilitiesGrid';
import { ArchitectureComparator } from './components/ArchitectureComparator';
import { CaseArchive } from './components/CaseArchive';
import { KineticTestimonials } from './components/KineticTestimonials';
import { ProcessDocket } from './components/ProcessDocket';
import { PricingPackages } from './components/PricingPackages';
import { ProjectInquiry } from './components/ProjectInquiry';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CaseStudy } from './types';

export function App() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [inquiryTargetCms, setInquiryTargetCms] = useState<string>('');
  const [inquiryTargetService, setInquiryTargetService] = useState<string>('');
  const [inquiryTargetBudget, setInquiryTargetBudget] = useState<string>('');

  const scrollToInquiry = (serviceName?: string, cmsStack?: string, budgetRange?: string) => {
    if (cmsStack) setInquiryTargetCms(cmsStack);
    if (serviceName) setInquiryTargetService(serviceName);
    if (budgetRange) setInquiryTargetBudget(budgetRange);

    const inquirySection = document.getElementById('inquiry');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#1D1D1F] text-[#1D1D1F] flex flex-col font-sans selection:bg-[#0071E3] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenInquiry={() => scrollToInquiry()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenInquiry={() => scrollToInquiry()} />

        {/* Agency Philosophy & Manifesto */}
        <BrandManifesto />

        {/* Asymmetrical Staggered Capabilities Grid (No 3-in-a-row cards) */}
        <CapabilitiesGrid onSelectService={(title) => scrollToInquiry(title)} />

        {/* Headless Decoupled vs Legacy Monolith Comparator */}
        <ArchitectureComparator />

        {/* Curated Archive & Case Monographs */}
        <CaseArchive onOpenCase={(cs) => setSelectedCase(cs)} />

        {/* The Minimalist Kinetic Stream (Smooth low-speed ticker with editable JSON) */}
        <KineticTestimonials onInquireStack={(stack) => scrollToInquiry(undefined, stack)} />

        {/* 6-Week Architectural Protocol */}
        <ProcessDocket />

        {/* Simple Packages. Clear Pricing. (Aligned strictly to Proposal) */}
        <PricingPackages
          onSelectPackage={(pkgName, budget) => scrollToInquiry(pkgName, undefined, budget)}
        />

        {/* Bespoke Project Inquiry & Commission Form */}
        <ProjectInquiry
          initialCms={inquiryTargetCms}
          initialService={inquiryTargetService}
          initialBudget={inquiryTargetBudget}
        />
      </main>

      {/* Luxury Footer with World Clocks */}
      <Footer />

      {/* Case Study Dossier Modal */}
      <CaseStudyModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
        onInquire={(client) => scrollToInquiry(`Project inspired by ${client}`)}
      />
    </div>
  );
}

export default App;
