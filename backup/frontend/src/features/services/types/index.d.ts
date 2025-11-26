export interface ServiceSection {
  id: string;
  heading: string;
  body: string;
  microTagline: string;
}

export interface ServicePageData {
  hero: {
    headline: string;
    subtext: string;
  };
  sections: ServiceSection[];
  cta: {
    heading: string;
    subtext: string;
    primaryButton: {
      label: string;
      href: string;
    };
    secondaryButton: {
      label: string;
      href: string;
    };
  };
}

