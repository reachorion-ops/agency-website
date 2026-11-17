import { ServiceCapability, CaseStudy, ArchitectureComparison, PricingPackage } from '../types';

export const AGENCY_SPECS = {
  name: "Reach Orion",
  legal: "Reach Orion Agency Ltd.",
  foundedYear: "2026",
  status: "OPEN / ACCEPTING NEW PROJECTS",
  focus: "Bespoke Headless CMS & High-Performance Web Architectures",
  mission: "We engineer lightning-fast digital flagship experiences by decoupling content management from modern frontend rendering. No bloat. No monolithic lag.",
  contactEmail: "reachorion.official@gmail.com",
  inquiriesEmail: "reachorion.official@gmail.com",
  web: "reachorion.net",
  location: "New York • Zurich • London",
  delivery: "Global / India and International clients / INR and USD billing",
  metrics: [
    { label: "CORE WEB VITALS", value: "90+", note: "Lighthouse target score" },
    { label: "LARGEST PAINT (LCP)", value: "<0.9s", note: "LCP performance target" },
    { label: "TTFB RESPONSE", value: "<400ms", note: "Edge network delivery" },
    { label: "HOSTING UPTIME", value: "99.9%", note: "High availability guarantee" },
  ]
};

export const SERVICES_CAPABILITIES: ServiceCapability[] = [
  {
    id: "headless-architecture",
    code: "01 // ARCHITECTURE",
    title: "Headless CMS Engineering",
    tagline: "Unshackle content operations from monolithic templates with bespoke decoupled pipelines.",
    cmsPlatforms: ["Sanity.io", "Payload CMS 3.0", "Contentful Enterprise", "Strapi 5"],
    deliverables: [
      "Custom structured schema modeling tailored to editorial teams",
      "Real-time visual previews across multi-device viewports",
      "Omnichannel content syndication (Web, Mobile, Kiosk, API)",
      "Zero-downtime database migration from legacy platforms"
    ],
    editorialImpact: "Average 82% reduction in editorial publish latency.",
    theme: "dark",
    layoutSpan: "wide"
  },
  {
    id: "luxury-frontend",
    code: "02 // CRAFTSMANSHIP",
    title: "Editorial Frontend Flagships",
    tagline: "Apple and luxury-grade interactive web experiences crafted with mathematical precision.",
    cmsPlatforms: ["React", "Next.js App Router", "Tailwind CSS", "Framer Motion"],
    deliverables: [
      "Micro-interactions & fluid 60fps kinetic motion design",
      "Swiss typographical hierarchy with responsive viewport scaling",
      "Accessible WCAG AAA compliance built-in from day one",
      "Custom luxury e-commerce & portfolio interaction models"
    ],
    editorialImpact: "Aesthetic distinction that elevates brand valuation.",
    theme: "light",
    layoutSpan: "narrow"
  },
  {
    id: "performance-optimization",
    code: "03 // PERFORMANCE",
    title: "Sub-Second Global Edge Delivery",
    tagline: "Architected for global prestige brands where every 100 milliseconds directly impacts conversion.",
    cmsPlatforms: ["Cloudflare Workers", "Vercel Edge", "AWS CloudFront", "Fastly"],
    deliverables: [
      "Sub-150ms First Contentful Paint across 45+ worldwide regions",
      "Dynamic Incremental Static Regeneration (ISR) on content updates",
      "Automated WebP/AVIF asset pipelines with responsive art direction",
      "Stale-While-Revalidate edge caching strategies"
    ],
    editorialImpact: "Flawless resilience during high-stakes editorial drops.",
    theme: "dark",
    layoutSpan: "narrow"
  },
  {
    id: "migration-audit",
    code: "04 // TRANSFORMATION",
    title: "Monolith to Headless Migration",
    tagline: "Surgically liberate your legacy WordPress, Drupal, or monolithic stack into a headless ecosystem.",
    cmsPlatforms: ["Automated Scrapers", "GraphQL / REST Adapters", "Payload Importers", "Sanity CLI"],
    deliverables: [
      "100% preservation of historical SEO URLs and structured meta graph",
      "Content deduplication and relational schema restructuring",
      "Custom authoring interfaces customized to editorial workflows",
      "Comprehensive staff training and architectural handover dockets"
    ],
    editorialImpact: "Zero drop in organic search rankings during transition.",
    theme: "light",
    layoutSpan: "wide"
  }
];

export const ARCHITECTURE_COMPARISONS: ArchitectureComparison[] = [
  {
    feature: "Architecture Topology",
    reachOrionWay: "Decoupled Headless (API-driven modern frontend + clean CMS backend)",
    legacyMonolith: "Tightly coupled monolith (WordPress/Drupal/Magento templates)",
    highlight: "100% independence between design and database"
  },
  {
    feature: "Global Page Load Speed",
    reachOrionWay: "Sub-200ms TTFB worldwide via edge network static generation",
    legacyMonolith: "1,800ms - 3,500ms server database rendering lag",
    highlight: "12x faster initial viewport rendering"
  },
  {
    feature: "Security & Attack Surface",
    reachOrionWay: "Zero exposed database or admin endpoints. Read-only static edge builds.",
    legacyMonolith: "Vulnerable wp-admin, PHP exploits, plugin supply chain vulnerabilities.",
    highlight: "Military-grade static security posture"
  },
  {
    feature: "Editorial Workflow",
    reachOrionWay: "Granular live preview, typed components, zero accidental site breaks",
    legacyMonolith: "Rigid WYSIWYG editors prone to breaking layouts and broken shortcodes",
    highlight: "Publishing confidence without technical anxiety"
  },
  {
    feature: "Future-Proof Scaling",
    reachOrionWay: "Swap frontends, add native iOS apps, or adopt new frameworks anytime",
    legacyMonolith: "Complete tear-down and expensive replatforming every 3-4 years",
    highlight: "Your content database remains eternal"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-vaneau",
    index: "01 / ARCHIVE",
    client: "Maison Vaneau",
    discipline: "Haute Couture & Fine Jewelry",
    scope: "Sanity Headless Flagship + Next.js Edge",
    cmsEngine: "Sanity Studio v3",
    metrics: [
      { label: "GLOBAL TTFB", value: "72ms" },
      { label: "CHECKOUT SPEED", value: "+340%" }
    ],
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
    aspect: "tall",
    accent: "#1D1D1F"
  },
  {
    id: "case-richter",
    index: "02 / ARCHIVE",
    client: "Richter & Kraft",
    discipline: "Contemporary Architecture Studio",
    scope: "Payload 3.0 Decoupled Digital Monograph",
    cmsEngine: "Payload CMS",
    metrics: [
      { label: "ASSET RENDERING", value: "0.18s" },
      { label: "CONVERSION", value: "+54%" }
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    aspect: "wide",
    accent: "#0071E3"
  },
  {
    id: "case-aura",
    index: "03 / ARCHIVE",
    client: "Aura Kinematics",
    discipline: "High-Fidelity Audio Engineering",
    scope: "Contentful Enterprise + Kinetic Web Experience",
    cmsEngine: "Contentful",
    metrics: [
      { label: "CORE WEB VITALS", value: "100%" },
      { label: "MOBILE BOUNCE", value: "-46%" }
    ],
    image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=1200&auto=format&fit=crop",
    aspect: "square",
    accent: "#0F766E"
  }
];

export const PROCESS_STAGES = [
  {
    number: "01",
    phase: "SCHEMA ARCHITECTURE & CONTENT AUDIT",
    duration: "Week 01",
    description: "We deconstruct your content taxonomy into atomic, reusable entities. We eliminate monolithic sprawl and establish strict typed schemas in Sanity, Payload, or Contentful.",
    deliverable: "Schema Blueprint & Interactive Content Graph"
  },
  {
    number: "02",
    phase: "HIGH-FASHION DESIGN & MICRO-MOTION",
    duration: "Week 02 — 03",
    description: "We craft an editorial design language inspired by luxury Swiss and Milanese editorial design. Mathematical typography scales, bespoke layout rhythm, and subtle tactile haptics.",
    deliverable: "Design System Tokens & 60fps Prototype"
  },
  {
    number: "03",
    phase: "HEADLESS INTEGRATION & EDGE HARNESS",
    duration: "Week 04 — 05",
    description: "Building the high-performance React/Next.js frontend. Wiring real-time preview webhooks, automated asset transformations, and edge ISR invalidation pipelines.",
    deliverable: "Staging Sandbox & Authoring Studio"
  },
  {
    number: "04",
    phase: "GLOBAL EDGE DEPLOYMENT & 100/100 AUDIT",
    duration: "Week 06",
    description: "Zero-downtime cutover. Comprehensive Lighthouse Core Web Vitals profiling across all global geographic edge nodes, SEO canonical verification, and team training.",
    deliverable: "Live Production Flagship + Handover Dossier"
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "essential",
    name: "ESSENTIAL",
    subtitle: "LANDING PAGE / CMS MVP",
    price: "From $600",
    timeline: "≈ ₹50,000 / 1–2 weeks",
    features: [
      "5 pages, landing page or CMS MVP",
      "Proven CMS with custom theme",
      "Responsive build, SEO + AIO basics",
      "Analytics and basic security",
      "1 revision round, 14-day support"
    ],
    ctaText: "CHOOSE ESSENTIAL",
    highlighted: false
  },
  {
    id: "prior",
    name: "PRIOR",
    badge: "RECOMMENDED",
    price: "From $1,500",
    timeline: "≈ ₹1,25,000 / 2–3 weeks",
    features: [
      "14 pages and templates",
      "Headless or custom CMS build",
      "Roles and editorial workflow",
      "Up to 2 API integrations",
      "Speed, SEO + AIO optimization",
      "2 revision rounds, 30-day support"
    ],
    ctaText: "CHOOSE PRIOR",
    highlighted: true
  },
  {
    id: "custom",
    name: "CUSTOM",
    price: "Custom quote",
    timeline: "Scoped after discovery / flexible",
    features: [
      "Multi-site or multi-language",
      "SaaS-grade dashboards and APIs",
      "SSO, compliance and SLAs",
      "Dedicated team and MVP roadmap",
      "Free discovery workshop"
    ],
    ctaText: "REQUEST A QUOTE",
    highlighted: false
  }
];

export const PACKAGE_INCLUSIONS = [
  {
    title: "Full source-code ownership",
    desc: "100% IP transfer on payment, zero vendor lock-in."
  },
  {
    title: "Staging environment",
    desc: "Modular, secure, tested code on a live staging link you can preview."
  },
  {
    title: "Documentation and training",
    desc: "Bespoke editorial handover videos, schema docs, and team walk-throughs."
  },
  {
    title: "IP transfer on payment",
    desc: "All design assets, code repos, and CMS rights belong strictly to you."
  }
];

export const WHY_CHOOSE_ORION = [
  {
    id: "01",
    title: "Business-first engineering",
    desc: "Every feature maps to a goal you can measure."
  },
  {
    id: "02",
    title: "Sprint-Based Execution",
    desc: "Short sprints with a working demo every week."
  },
  {
    id: "03",
    title: "Transparent communication",
    desc: "Weekly demos and one point of contact."
  },
  {
    id: "04",
    title: "Global-ready collaboration",
    desc: "Overlap hours, INR / USD billing, NDAs."
  },
  {
    id: "05",
    title: "Secure by default",
    desc: "Hardened builds, backups and monitoring."
  },
  {
    id: "06",
    title: "Handover that sticks",
    desc: "Docs, training and an optional care plan."
  }
];

export const PRICING_FOOTNOTE = {
  taxNote: "INDICATIVE STARTING PRICES, EXCL. APPLICABLE TAXES (CURRENTLY GST-EXEMPT UNDER MSME THRESHOLD)",
  billingTerms: "BILLING 40% KICKOFF, 40% STAGING, 20% LAUNCH",
  acronymNote: "AIO = AI OPTIMIZATION"
};

