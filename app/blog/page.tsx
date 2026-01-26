import type { Metadata } from "next"
import BlogListingClient from "./BlogListingClient"

export const metadata: Metadata = {
  title: "Pika AI Blog - Insights on AI, Productivity, and Technology",
  description:
    "Stay updated with the latest articles, tips, and insights on AI, productivity, desktop assistants, and technology from the Pika AI team.",
  keywords: "AI blog, productivity tips, AI news, desktop assistant insights, technology articles, Pika AI blog",
  alternates: {
    canonical: "https://pikavoice.com/blog/", // Canonical URL for the blog listing page
  },
}

export default function BlogListingPage() {
  return <BlogListingClient />
}
