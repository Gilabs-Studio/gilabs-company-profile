export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image?: string;
  readTime: string;
  Content?: any;
}

export interface BlogData {
  title: string;
  subtitle: string;
  posts: BlogPost[];
}

type MarkdownModule = {
  frontmatter: Record<string, any>;
  Content: any;
};

type BlogMeta = { title: string; subtitle: string };
type BlogMetaModule = { default: BlogMeta };

const enPostsGlob = import.meta.glob<MarkdownModule>('./en/*.md', { eager: true });
const idPostsGlob = import.meta.glob<MarkdownModule>('./id/*.md', { eager: true });
const metaGlob = import.meta.glob<BlogMetaModule>('./*/_meta.json', { eager: true });

const extractPosts = (glob: Record<string, MarkdownModule>): BlogPost[] =>
  Object.keys(glob)
    .map((k) => {
      const mod = glob[k] as any;
      return {
        ...mod.frontmatter,
        Content: mod.Content || mod.default,
      } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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

