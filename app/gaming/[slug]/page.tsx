import type { Metadata } from "next"
import { gamingPosts } from "../data"
import GamingPostClientPage from "./GamingPostClientPage"

interface GamingPostPageProps {
  params: { slug: string }
}

// Generate static params for all gaming posts
export async function generateStaticParams() {
  return gamingPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each gaming post
export async function generateMetadata({ params }: GamingPostPageProps): Promise<Metadata> {
  const post = gamingPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found - Gaming Hub",
      description: "The gaming post you are looking for does not exist.",
    }
  }

  return {
    title: `${post.title} - Gaming Hub | Pika AI`,
    description: post.description,
    keywords: post.keywords.join(", "),
    openGraph: {
      title: `${post.title} - Gaming Hub`,
      description: post.description,
      type: "article",
      url: `https://your-domain.com/gaming/${post.slug}`,
      images: post.image ? [{ url: `https://your-domain.com${post.image}` }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} - Gaming Hub`,
      description: post.description,
      images: post.image ? [`https://your-domain.com${post.image}`] : [],
    },
    alternates: {
      canonical: `https://your-domain.com/gaming/${post.slug}`,
    },
  }
}

export default function GamingPostPage({ params }: GamingPostPageProps) {
  return <GamingPostClientPage params={params} />
}
