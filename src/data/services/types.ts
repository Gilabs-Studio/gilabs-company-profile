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
}

export interface ServiceProblem {
  pain: string;
  solution: string;
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

export interface ServicePageData {
  slug: string;
  category: "website" | "software" | "enterprise";
  eyebrow: string;
  title: string;
  subtitle: string;
  heroIllustration: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  primaryCtaText: string;
  secondaryCtaText: string;
  problemsTitle: string;
  problemsSubtitle: string;
  problems: ServiceProblem[];
  featuresTitle: string;
  featuresSubtitle: string;
  features: ServiceFeature[];
  packagesTitle: string;
  packagesSubtitle: string;
  packages: ServicePackage[];
  techStackTitle: string;
  techStackSubtitle: string;
  techStack: TechStackItem[];
  faqTitle: string;
  faqSubtitle: string;
  faqs: ServiceFAQ[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
}
