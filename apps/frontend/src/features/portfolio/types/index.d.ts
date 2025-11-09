export type PortfolioCategory =
  | "web-mobile-apps"
  | "company-websites"
  | "business-systems"
  | "saas-products";

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: PortfolioCategory;
  image: string;
  imageAlt?: string;
  tags?: string[];
  link?: string;
  year?: number;
}

export interface PortfolioCategoryData {
  id: PortfolioCategory;
  number: string;
  title: string;
  description: string;
  items: PortfolioItem[];
}

export interface PortfolioPageData {
  hero: {
    headline: string;
    subtext: string;
  };
  categories: PortfolioCategoryData[];
}

