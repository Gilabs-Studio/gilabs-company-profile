import { notFound } from "next/navigation";
import { BlogDetail } from "@/features/blog/components/BlogDetail";
import { getPostBySlug, getRelatedPosts } from "@/features/blog/data/blog";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <main className="relative bg-black">
      <BlogDetail post={post} relatedPosts={relatedPosts} />
    </main>
  );
}

