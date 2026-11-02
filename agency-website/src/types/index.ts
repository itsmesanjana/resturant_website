export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'FinTech' | 'AI & SaaS' | 'E-Commerce' | 'Web3';
  tagline: string;
  image: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  challenge: string;
  solution: string;
  techStack: string[];
  demoUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: string[];
  deliveryTime: string;
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  companyName: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  brief: string;
}
