import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import StructuredDataComponent from "./StructuredData" // Your client component

const inter = Inter({ subsets: ["latin"] })

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function StructuredData() {
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

  // Always add SoftwareApplication schema for the main product
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

  // Generate breadcrumb based on pathname
  const breadcrumbSchema = generateBreadcrumbSchema(pathname, baseUrl)
  if (breadcrumbSchema) {
    structuredDataArray.push(breadcrumbSchema)
  }

  return structuredDataArray
}

function generateBreadcrumbSchema(pathname: string, baseUrl: string) {
  let breadcrumbItems = []

  // Homepage (/): Just 'Home'
  if (pathname === "/") {
    breadcrumbItems = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
    ]
  }
  // Blog Page (/blog): Home > Blog
  else if (pathname === "/blog") {
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
  }
  // Gaming Page (/gaming): Home > Blog > Gaming
  else if (pathname === "/gaming") {
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
  // Individual blog posts: Home > Blog > Post Title
  else if (pathname.startsWith("/blog/")) {
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
        name: "Article",
        item: `${baseUrl}${pathname}`,
      },
    ]
  }
  // Individual gaming posts: Home > Blog > Gaming > Post Title
  else if (pathname.startsWith("/gaming/")) {
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
      {
        "@type": "ListItem",
        position: 4,
        name: "Gaming Article",
        item: `${baseUrl}${pathname}`,
      },
    ]
  }
  // Other pages like /about, /privacy, /support
  else if (pathname === "/about") {
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
        name: "About",
        item: `${baseUrl}/about`,
      },
    ]
  } else if (pathname === "/privacy") {
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
        name: "Privacy Policy",
        item: `${baseUrl}/privacy`,
      },
    ]
  } else if (pathname === "/support") {
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
        name: "Support",
        item: `${baseUrl}/support`,
      },
    ]
  }

  // Return breadcrumb schema if we have items
  if (breadcrumbItems.length > 0) {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    }
  }

  return null
}

export function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="application-name" content="Pika Voice Assistant" />
        <meta name="apple-mobile-web-app-title" content="Pika Voice Assistant" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Google site verification */}
        <meta name="google-site-verification" content="K7BD1CKn97LzZoT7Q01SJX72FVBanF4vmHChPmQnbPA" />

        {/* Google Analytics Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CLNEL3REZQ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CLNEL3REZQ');
            `,
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/faviconv2.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {/* Render StructuredData client component here */}
        <StructuredDataComponent />

        {children}

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
