export interface SeoProblemItem {
  pain: string;
  solution: string;
  metric?: string;
}

export interface SeoSolutionItem {
  title: string;
  description: string;
  highlights?: string[];
}

export interface SeoFeatureItem {
  title: string;
  description: string;
}

export interface SeoFaqItem {
  question: string;
  answer: string;
}

export interface SeoLandingPageData {
  slug: string;
  canonicalUrl: string;
  alternateUrls?: {
    id: string;
    en: string;
  };
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  supportingKeywords: string[];
  allKeywords: string[];

  // Clean Hero (strictly Title + Subtitle only, no badge/pill/eye)
  heroTitle: string;
  heroSubtitle: string;
  heroIllustration: string;
  heroImageAlt: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;

  // Problem Section
  problemsTitle: string;
  problemsSubtitle: string;
  problems: SeoProblemItem[];

  // Solutions Section
  solutionsTitle: string;
  solutionsSubtitle: string;
  solutions: SeoSolutionItem[];

  // Features Section (Numbered cleanly 01..06)
  featuresTitle: string;
  featuresSubtitle: string;
  features: SeoFeatureItem[];

  // FAQ Section
  faqTitle: string;
  faqSubtitle: string;
  faqs: SeoFaqItem[];

  // Final CTA
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButtonText: string;
}
