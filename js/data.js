/* ==========================================================================
   REACH ORION - CASE STUDIES & PORTFOLIO DATA
   Detailed, realistic B2B SaaS & Headless CMS Agency Case Studies
   ========================================================================== */

const CASE_STUDIES = [
  {
    id: "synthex",
    title: "Synthex Cloud Platform",
    client: "Synthex Analytics, Inc.",
    category: "saas",
    categoryLabel: "B2B SaaS Platform",
    heroImage: "assets/images/case-synthex.jpg",
    metricBadge: "+148% Demo Conversions",
    summary: "Re-architecting an enterprise AI analytics platform marketing site and product docs from a bloated legacy monolith to Next.js + Sanity CMS.",
    challenge: "Synthex was burning high customer acquisition costs due to sluggish 4.8s initial page load times, poor mobile UX, and a rigid codebase that required full software engineering sprints for marketing content updates.",
    solution: "Reach Orion engineered an ultra-fast headless architecture using Next.js 14 and Sanity CMS. We built a modular atomic design system, an interactive product demo sandbox, and optimized edge caching on Vercel.",
    metrics: [
      { label: "LCP Load Speed", value: "0.38s", before: "4.8s" },
      { label: "Demo Signups", value: "+148%", before: "Baseline" },
      { label: "Lighthouse Score", value: "100/100", before: "42/100" }
    ],
    techStack: ["Next.js", "Sanity CMS", "TypeScript", "Tailwind Design Tokens", "Vercel Edge"],
    quote: {
      text: "Reach Orion redefined our web presence. Our demo request velocity surged 148% within 60 days, and our marketing team can now ship new launch pages in hours rather than weeks.",
      author: "Elena Rostova",
      role: "VP of Growth & Marketing, Synthex Cloud"
    },
    liveUrl: "https://synthex-preview.reachorion.internal"
  },
  {
    id: "veloce",
    title: "Veloce Global Payments",
    client: "Veloce Financial Technologies",
    category: "fintech",
    categoryLabel: "FinTech & Payments",
    heroImage: "assets/images/case-veloce.jpg",
    metricBadge: "0.34s LCP / +210% Pipeline",
    summary: "High-performance fintech portal, interactive developer API documentation, and frictionless enterprise sales onboarding flow.",
    challenge: "Enterprise buyers and developers experienced friction navigating complex compliance, multi-currency processing rates, and developer SDK docs, resulting in high drop-off before contract sales calls.",
    solution: "We designed a minimalist, ultra-responsive web portal with an interactive fee & currency calculator, embedded code snippet switchers for SDKs, and a high-converting multi-step enterprise inquiry funnel.",
    metrics: [
      { label: "Pipeline Velocity", value: "+210%", before: "Baseline" },
      { label: "API Docs Time-to-Hello-World", value: "3.2 min", before: "14.5 min" },
      { label: "Core Web Vitals", value: "99.8%", before: "58.2%" }
    ],
    techStack: ["Astro", "Contentful CMS", "TypeScript", "Algolia Search", "Stripe API"],
    quote: {
      text: "The architectural rigor Reach Orion brought to our payment gateway site was unmatched. It feels as instantaneous as an Apple interface.",
      author: "Marcus Vance",
      role: "Chief Technology Officer, Veloce Payments"
    },
    liveUrl: "https://veloce-preview.reachorion.internal"
  },
  {
    id: "arcadia",
    title: "Arcadia Systems Headless CMS",
    client: "Arcadia Enterprise Data",
    category: "headless",
    categoryLabel: "Headless CMS Rebuild",
    heroImage: "assets/images/case-arcadia.jpg",
    metricBadge: "15-Min Content Releases",
    summary: "Multi-region enterprise content migration from legacy WordPress to Sanity Headless CMS with custom visual page builders and i18n support.",
    challenge: "Managing marketing pages across 8 regional territories took 2 weeks per release cycle. Security patches and database locking plagued the old architecture.",
    solution: "Reach Orion implemented a centralized headless Sanity studio with live visual preview, automated asset optimization pipelines, and lightning-fast edge delivery across global POPs.",
    metrics: [
      { label: "Publish Cycle Time", value: "15 mins", before: "14 days" },
      { label: "Organic Search Lift", value: "+84%", before: "Baseline" },
      { label: "Hosting Server Cost", value: "-68%", before: "$4,200/mo" }
    ],
    techStack: ["Sanity Studio", "Next.js", "GraphQL", "Cloudflare Workers", "Tailwind"],
    quote: {
      text: "Our international editors gained true superpowers. The content workflow is butter-smooth and our organic inbound traffic doubled.",
      author: "Sarah Lindqvist",
      role: "Global Head of Brand Communications, Arcadia"
    },
    liveUrl: "https://arcadia-preview.reachorion.internal"
  },
  {
    id: "novalogic",
    title: "Novalogic Security Design System",
    client: "Novalogic Cyber Defense",
    category: "design-system",
    categoryLabel: "Design System & Tokens",
    heroImage: "assets/images/case-novalogic.jpg",
    metricBadge: "40+ Product Surfaces Aligned",
    summary: "Comprehensive multi-brand design system, React component library, and accessible documentation portal for a Series-C cybersecurity vendor.",
    challenge: "Disjointed UI inconsistency across 6 disparate acquisition portals, conflicting brand standards, and high frontend developer duplication waste.",
    solution: "Built the unified 'Aether' design token architecture, 50+ WCAG AAA compliant web components, automated Storybook documentation, and production design guidelines.",
    metrics: [
      { label: "Dev Sprint Velocity", value: "+3.2x", before: "1.0x" },
      { label: "Accessibility Benchmark", value: "100% WCAG", before: "Failed" },
      { label: "Brand Consistency", value: "Unified", before: "Fragmented" }
    ],
    techStack: ["React", "TypeScript", "Storybook", "Figma Tokens", "Vanilla CSS"],
    quote: {
      text: "Reach Orion unified our fragmented company under one singular, pristine design language. The component library saved us at least 9 months of engineering time.",
      author: "David Thorne",
      role: "VP of Product Design, Novalogic"
    },
    liveUrl: "https://novalogic-preview.reachorion.internal"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { CASE_STUDIES };
}
