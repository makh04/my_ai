import type { Metadata } from "next"
import { blogPosts } from "../data"
import BlogPostClientPage from "./BlogPostClientPage"

interface BlogPostPageProps {
  params: { slug: string }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found - Pika AI Blog",
      description: "The blog post you are looking for does not exist.",
    }
  }

  return {
    title: `${post.title}`,
    description: post.description,
    keywords: post.keywords.join(", "),
    openGraph: {
      title: `${post.title} - Pika AI Blog`,
      description: post.description,
      type: "article",
      url: `https://pikavoice.com/blog/${post.slug}`,
      images: post.image ? [{ url: `https://pikavoice.com/${post.image}` }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} - Pika AI Blog`,
      description: post.description,
      images: post.image ? [`https://pikavoice.com/${post.image}`] : [],
    },
    alternates: {
      canonical: `https://pikavoice.com/blog/${post.slug}`, // Canonical URL for individual blog posts
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return <BlogPostClientPage params={params} />
}
