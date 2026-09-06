export interface ServicePackage {
  name: string;
  price: string;
  period?: string;
  description: string;
  isPopular?: boolean;
  badge?: string;
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
  subtitle?: string;
  icon?: string;
  href?: string;
  ctaText?: string;
}

export interface ServiceSolution {
  number?: string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  alt?: string;
  badge?: string;
  points: string[];
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

export interface ServiceAudienceItem {
  title: string;
  description: string;
  icon?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  stage?: string;
}

export interface ErpCrmModuleItem {
  title: string;
  description: string;
  icon?: string;
}

export interface ErpCrmModuleGroup {
  badge: string;
  title: string;
  modules: ErpCrmModuleItem[];
}

export interface ErpCrmModulesData {
  erpGroup: ErpCrmModuleGroup;
  crmGroup: ErpCrmModuleGroup;
  bridgeTitle: string;
  bridgeDescription: string;
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
  solutionsEyebrow?: string;
  solutionsTitle?: string;
  solutionsSubtitle?: string;
  solutions?: ServiceSolution[];
  featuresEyebrow?: string;
  featuresTitle: string;
  featuresSubtitle: string;
  features: ServiceFeature[];
  erpCrmModules?: ErpCrmModulesData;
  audienceEyebrow?: string;
  audienceTitle?: string;
  audienceSubtitle?: string;
  audiences?: ServiceAudienceItem[];
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
  packagesTitle?: string;
  packagesSubtitle?: string;
  packages?: ServicePackage[];
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
  ctaSecondaryButton?: string;
}
