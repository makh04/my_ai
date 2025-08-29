"use client" // This makes it a client component

import { usePathname } from "next/navigation"

export default function StructuredData() {
  const pathname = usePathname()
  const isHome = pathname === "/"

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
          downloadUrl: "https://pikaai.vercel.app/",
          screenshot: "https://pikaai.vercel.app/screenshot.jpg",
          softwareVersion: "1.0",
          datePublished: "2025-01-07",
          dateModified: "2025-01-28",
        }),
      }}
    />
  )
}
