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
    id: "websites-platforms",
    code: "01 // WEBSITES & PLATFORMS",
    title: "Websites & Editorial Platforms",
    tagline: "Fast, SEO + AIO-ready and built to convert with clean, modern component architectures.",
    cmsPlatforms: ["Sanity.io", "Payload CMS 3.0", "Next.js App Router", "React 18"],
    deliverables: [
      "Responsive, accessible interfaces built on a reusable component library",
      "Dynamic visual live preview and structured schema modeling",
      "Core Web Vitals tuning (<0.9s LCP, <400ms TTFB response)",
      "SEO + AIO (AI Optimization) structured data and global CDN"
    ],
    editorialImpact: "Instantaneous publishing velocity with zero monolithic lag.",
    theme: "dark",
    layoutSpan: "wide"
  },
  {
    id: "saas-mvps",
    code: "02 // PRODUCT ENGINEERING",
    title: "SaaS MVPs & App Frontends",
    tagline: "From validated idea to first paying users in weeks with agile sprint execution.",
    cmsPlatforms: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase / Payload"],
    deliverables: [
      "Rapid sprint-based delivery with weekly working demos",
      "SaaS-grade dashboards, user authentication, and billing flows",
      "Third-party API integrations (CRM, payments, email, analytics)",
      "Clean, modular codebase with 100% full IP ownership"
    ],
    editorialImpact: "Fast-track your product to market without architectural debt.",
    theme: "light",
    layoutSpan: "narrow"
  },
  {
    id: "cms-architecture",
    code: "03 // ARCHITECTURE & APIS",
    title: "Headless CMS & Integrations",
    tagline: "Headless, traditional or hybrid. Content modelling, roles and bespoke editorial workflows.",
    cmsPlatforms: ["Sanity.io", "Payload 3.0", "Contentful Enterprise", "Strapi 5"],
    deliverables: [
      "Custom content modeling tailored to your team's publishing needs",
      "CRM, payments, analytics, search, and custom third-party APIs",
      "Role-based access control, security hardening, and backups",
      "Omnichannel content syndication across web, mobile, and APIs"
    ],
    editorialImpact: "Your team publishes with ease and confidence every time.",
    theme: "dark",
    layoutSpan: "narrow"
  },
  {
    id: "migration-support",
    code: "04 // MIGRATION & SUPPORT",
    title: "Migration, Hardening & Support",
    tagline: "Replace brittle monolithic templates with clean, decoupled architecture: fast and future-proof.",
    cmsPlatforms: ["WordPress Importers", "Automated Scrapers", "GraphQL / REST Adapters", "Cloudflare"],
    deliverables: [
      "Zero-downtime database and asset migration from legacy CMS",
      "100% preservation of SEO ranking URLs and structured meta graph",
      "GDPR-ready data handling, access controls, and uptime monitoring",
      "Team training, video walkthroughs, and proactive maintenance"
    ],
    editorialImpact: "Clean handover with zero vendor lock-in and guaranteed uptime.",
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
    phase: "DISCOVER",
    duration: "Day 01–02",
    description: "Workshops on goals, audience, content model and integrations. We map the editorial workflow before any code.",
    deliverable: "Requirements and Sitemap"
  },
  {
    number: "02",
    phase: "DESIGN",
    duration: "Day 03–05",
    description: "UX flows, a reusable UI system and a clickable prototype, validated and refined directly with your team.",
    deliverable: "Approved Clickable Prototype"
  },
  {
    number: "03",
    phase: "DEVELOP",
    duration: "Day 06–12",
    description: "Agile sprints with weekly demos. Modular, secure, tested code on a live staging link you can preview.",
    deliverable: "Working CMS on Staging"
  },
  {
    number: "04",
    phase: "LAUNCH & GROW",
    duration: "Day 13–15",
    description: "Content migration, QA, go-live cutover, team training videos and ongoing maintenance support.",
    deliverable: "Live Site & Complete Handover"
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

