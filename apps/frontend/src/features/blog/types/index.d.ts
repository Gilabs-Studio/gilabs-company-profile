export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  category: string;
  tags?: string[];
  image?: string;
  imageAlt?: string;
  readTime?: number;
}

export interface BlogPageData {
  hero: {
    headline: string;
    subtext: string;
  };
  posts: BlogPost[];
}

