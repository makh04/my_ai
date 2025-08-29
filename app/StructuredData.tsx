// In StructuredData.tsx

"use client" // This makes it a client component

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function StructuredData() { // default export
  const pathname = usePathname()

  useEffect(() => {
    // Remove any existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]')
    existingScripts.forEach((script) => {
      if (
        script.textContent?.includes('"@type":"SoftwareApplication"') ||
        script.textContent?.includes('"@type":"BreadcrumbList"')
      ) {
        script.remove()
      }
    })

    // Generate structured data based on current path
    const structuredData = generateStructuredData(pathname)

    // Add new structured data
    structuredData.forEach((data) => {
      const script = document.createElement("script")
      script.type = "application/ld+json"
      script.textContent = JSON.stringify(data)
      document.head.appendChild(script)
    })
  }, [pathname])

  return null
}

function generateStructuredData(pathname: string) {
  const baseUrl = "https://pikaai.vercel.app"
  const structuredDataArray = []

  const softwareApplicationSchema = {
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
      sameAs: "https://www.instagram.com/x_makhtum_x/",
    },
    publisher: {
      "@type": "Organization",
      name: "Pika Voice Assistant",
    },
    downloadUrl: `${baseUrl}/`,
    screenshot: `${baseUrl}/screenshot.jpg`,
    softwareVersion: "1.0",
    datePublished: "2025-01-07",
    dateModified: "2025-01-08",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
    },
  }

  structuredDataArray.push(softwareApplicationSchema)

  const breadcrumbSchema = generateBreadcrumbSchema(pathname, baseUrl)
  if (breadcrumbSchema) {
    structuredDataArray.push(breadcrumbSchema)
  }

  return structuredDataArray
}

function generateBreadcrumbSchema(pathname: string, baseUrl: string) {
  let breadcrumbItems = []

  if (pathname === "/") {
    breadcrumbItems = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
    ]
  } else if (pathname === "/blog") {
    breadcrumbItems = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
    ]
  } else if (pathname === "/gaming") {
    breadcrumbItems = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Gaming",
        item: `${baseUrl}/gaming`,
      },
    ]
  }

  if (breadcrumbItems.length > 0) {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    }
  }

  return null
}
