"use client" // This makes it a client component

import { usePathname } from "next/navigation"

export default function StructuredData() {
  const pathname = usePathname()

  // Only render the schema on the homepage (`/`)
  const isHome = pathname === "/"

  // If it's not the homepage, don't render the schema
  if (!isHome) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Pika Voice Assistant",
          description: "Free personal AI-powered desktop assistant for productivity and automation",
          applicationCategory: "ProductivityApplication",
          operatingSystem: "Windows",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          author: {
            "@type": "Person",
            name: "Nabil Mukerrob Makhtum",
            nationality: "Bangladeshi",
            age: "17",
          },
          publisher: {
            "@type": "Organization",
            name: "Pika Voice Assistant",
          },
          downloadUrl: "https://pikaai.vercel.app/", // Direct link to app download
          screenshot: "https://pikaai.vercel.app/pika-ai-interface.png", // Screenshot of the app
          softwareVersion: "1.1", // App version
          datePublished: "2024-01-01", // Published date
          dateModified: "2025-01-15", // Modified date
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8", // App rating
            ratingCount: "1250", // Number of ratings
          },
        }),
      }}
    />
  )
}
