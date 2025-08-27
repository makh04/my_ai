import type { Metadata } from "next"
import GamingListingClient from "./GamingListingClient"

export const metadata: Metadata = {
  title: "Gaming Hub - Latest Gaming News, Reviews, and Guides | Pika AI",
  description:
    "Discover the latest gaming trends, reviews, hardware guides, and AI gaming tools. Your ultimate destination for gaming content and gaming assistant technology.",
  keywords:
    "gaming blog, gaming news, gaming reviews, gaming guides, AI gaming, gaming hardware, esports, gaming trends, gaming setup, gaming assistant",
  alternates: {
    canonical: "https://your-domain.com/gaming",
  },
}

export default function GamingListingPage() {
  return <GamingListingClient />
}
