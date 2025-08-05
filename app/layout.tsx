import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from '@vercel/analytics/next'; // Import the Vercel Analytics component

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pika AI - Free Desktop Virtual Assistant",
  description:
    "Download Pika AI, a powerful desktop virtual assistant designed to help with task management, emails, and workflow automation. Boost your productivity with AI today!",
  keywords: [
    "Pika AI",
    "AI assistant",
    "virtual assistant",
    "desktop assistant",
    "productivity AI",
    "Pika assistant download",
    "AI for productivity",
    "virtual assistant download",
    "AI assistant for desktop",
    "smart assistant software",
    "AI personal assistant",
    "desktop assistant software",
    "best AI assistant for PC",
    "virtual assistant for computer",
    "free AI assistant software",
    "AI assistant for Windows",
    "AI-powered assistant",
    "digital assistant for desktop",
    "productivity AI assistant",
    "artificial intelligence tools",
    "AI technology for productivity",
    "intelligent assistant for desktop",
    "Pika ai by makhtum",
    "virtual assistant technology",
    "smart productivity tools AI",
  ].join(", "),
  authors: [{ name: "Nabil Mukerrob Makhtum" }],
  creator: "Nabil Mukerrob Makhtum",
  publisher: "Pika AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pikaai.vercel.app",
    title: "Pika AI - Free Desktop Virtual Assistant",
    description:
      "Download Pika AI, a powerful desktop virtual assistant designed to help with task management, emails, and workflow automation. Boost your productivity with AI today!",
    siteName: "Pika AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pika AI - Desktop Virtual Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pika AI - Free Desktop Virtual Assistant,
    description:
      "Download Pika AI, a powerful desktop virtual assistant designed to help with task management, emails, and workflow automation. Boost your productivity with AI today!",
    images: ["/og-image.jpg"],
    creator: "@PikaAI",
  },
  alternates: {
    canonical: "https://pikaai.vercel.app/",
  },
  category: "Technology",
  classification: "AI Assistant Software",
  verification: {
    google: "K7BD1CKn97LzZoT7Q01SJX72FVBanF4vmHChPmQnbPA",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    "google-site-verification": "K7BD1CKn97LzZoT7Q01SJX72FVBanF4vmHChPmQnbPA",
    "msvalidate.01": "your-bing-verification-code",
    "yandex-verification": "your-yandex-verification-code",
  },
}

export default function RootLayout({
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
        <meta name="application-name" content="Pika AI" />
        <meta name="apple-mobile-web-app-title" content="Pika AI" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Google site verification */}
        <meta name="google-site-verification" content="K7BD1CKn97LzZoT7Q01SJX72FVBanF4vmHChPmQnbPA" />

        {/* Google Analytics Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CLNEL3REZQ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CLNEL3REZQ');
            `,
          }}
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Pika AI",
              description: "Free desktop virtual assistant ",
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
                name: "Pika AI",
              },
              downloadUrl: "https://pikaai.vercel.app/",
              screenshot: "https://pikaai.vercel.app/.screenshot.jpg",
              softwareVersion: "1.0",
              datePublished: "2025-01-07",
              dateModified: "2025-01-08",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1250",
              },
            }),
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
