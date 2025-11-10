import { notFound } from "next/navigation";
import { BlogDetail } from "@/features/blog/components/BlogDetail";
import { getPostBySlug, getRelatedPosts } from "@/features/blog/data/blog";
import { generateBlogMetadata, generateArticleSchema } from "@/lib/blog-seo";
import Script from "next/script";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return generateBlogMetadata(post);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);
  const articleSchema = generateArticleSchema(post);

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <main className="relative bg-black">
        <BlogDetail post={post} relatedPosts={relatedPosts} />
      </main>
    </>
  );
}

