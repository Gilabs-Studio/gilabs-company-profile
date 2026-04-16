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

type BlogPostModule = { default: BlogPost };
type BlogMeta = { title: string; subtitle: string };
type BlogMetaModule = { default: BlogMeta };

const enPostsGlob = import.meta.glob<BlogPostModule>('./en/*.json', { eager: true });
const idPostsGlob = import.meta.glob<BlogPostModule>('./id/*.json', { eager: true });
const metaGlob = import.meta.glob<BlogMetaModule>('./*/_meta.json', { eager: true });

const extractPosts = (glob: Record<string, BlogPostModule>) =>
  Object.keys(glob)
    .filter(k => !k.includes('_meta.json'))
    .map((k) => glob[k].default);

const getMeta = (locale: string): BlogMeta => {
  const meta = metaGlob[`./${locale}/_meta.json`];
  return meta?.default ?? { title: 'Blog', subtitle: 'Insights' };
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

