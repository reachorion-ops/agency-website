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

