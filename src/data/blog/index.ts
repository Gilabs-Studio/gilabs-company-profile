export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image?: string;
  readTime: string;
}

export interface BlogData {
  title: string;
  subtitle: string;
  posts: BlogPost[];
}

const enPostsGlob = import.meta.glob('./en/*.json', { eager: true });
const idPostsGlob = import.meta.glob('./id/*.json', { eager: true });
const metaGlob = import.meta.glob('./*/_meta.json', { eager: true });

const extractPosts = (glob: Record<string, any>) => 
  Object.keys(glob)
    .filter(k => !k.includes('_meta.json'))
    .map(k => (glob[k].default || glob[k]) as BlogPost);

const getMeta = (locale: string) => {
  const meta = metaGlob[`./${locale}/_meta.json`];
  return meta?.default || meta || { title: 'Blog', subtitle: 'Insights' };
};

export const blogData: Record<string, BlogData> = {
  en: {
    ...getMeta('en'),
    posts: extractPosts(enPostsGlob)
  },
  id: {
    ...getMeta('id'),
    posts: extractPosts(idPostsGlob)
  },
};

