export interface ServicePackage {
  name: string;
  price: string;
  period?: string;
  description: string;
  isPopular?: boolean;
  features: string[];
}

export interface ServiceFeature {
  title: string;
  description: string;
  number?: string;
  image?: string;
  alt?: string;
  badge?: string;
  points?: string[];
}

export interface ServiceProblem {
  pain: string;
  solution: string;
  metric?: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface TechStackItem {
  name: string;
  category: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServicePageData {
  slug: string;
  category: "website" | "software" | "enterprise";
  eyebrow: string;
  title: string;
  subtitle: string;
  heroIllustration: string;
  heroImageAlt?: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  primaryCtaText: string;
  secondaryCtaText: string;
  problemsEyebrow?: string;
  problemsTitle: string;
  problemsSubtitle: string;
  problems: ServiceProblem[];
  featuresEyebrow?: string;
  featuresTitle: string;
  featuresSubtitle: string;
  features: ServiceFeature[];
  processEyebrow?: string;
  processTitle?: string;
  processSubtitle?: string;
  processSteps?: ProcessStep[];
  portfolioEyebrow?: string;
  portfolioTitle?: string;
  portfolioDescription?: string;
  portfolioViewMore?: string;
  portfolioViewProject?: string;
  portfolioTechnologies?: string;
  portfolioMoreTech?: string;
  pricingEyebrow?: string;
  pricingSelectPlanText?: string;
  pricingPopularBadgeText?: string;
  packagesTitle: string;
  packagesSubtitle: string;
  packages: ServicePackage[];
  techStackTitle: string;
  techStackSubtitle: string;
  techStack: TechStackItem[];
  faqEyebrow?: string;
  faqTitle: string;
  faqSubtitle: string;
  faqs: ServiceFAQ[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
}
