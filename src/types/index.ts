export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  cmsStack: string;
  keyMetric: string;
  date: string;
  industry: string;
  avatarInitials: string;
  rating: number;
}

export interface ServiceCapability {
  id: string;
  code: string;
  title: string;
  tagline: string;
  cmsPlatforms: string[];
  deliverables: string[];
  editorialImpact: string;
  theme: 'dark' | 'light';
  layoutSpan: 'wide' | 'narrow';
}

export interface CaseStudyView {
  id: string;
  label: string;
  image: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  index: string;
  client: string;
  discipline: string;
  scope: string;
  cmsEngine: string;
  metrics: { label: string; value: string }[];
  image: string;
  aspect: string;
  accent: string;
  liveDomain?: string;
  hasInteractive3D?: boolean;
  interactiveDemoUrl?: string;
  badge?: string;
  views?: CaseStudyView[];
  narrative?: string;
  architecturalHighlights?: string[];
}

export interface ArchitectureComparison {
  feature: string;
  reachOrionWay: string;
  legacyMonolith: string;
  highlight: string;
}

export interface ProjectInquiryData {
  name: string;
  email: string;
  company: string;
  budgetRange: string;
  preferredCms: string[];
  timeline: string;
  brief: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  subtitle?: string;
  price: string;
  timeline: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
}

