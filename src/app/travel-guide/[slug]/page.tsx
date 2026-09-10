import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/data/blog";
import { getToursByDestination } from "@/data/tours";
import { BlogDetailView } from "@/components/blog/BlogDetailView";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title.en,
    description: post.excerpt.en,
    openGraph: { images: [post.image] },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedTours = post.relatedDestinationSlug
    ? getToursByDestination(post.relatedDestinationSlug)
    : [];
  const morePosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return <BlogDetailView post={post} relatedTours={relatedTours} morePosts={morePosts} />;
}
