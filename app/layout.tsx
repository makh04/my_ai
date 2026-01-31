import React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import StructuredData from "./StructuredData" // Your client component

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Pika Voice Assistant — Your Personal AI",
  description:
    "Download Pika Voice Assistant, your personal AI-powered desktop assistant designed to help with task management, emails, and workflow automation. Boost your productivity today!",
  keywords: [
    "Pika Voice Assistant",
    "AI assistant",
    "virtual assistant",
    "desktop assistant",
    "productivity AI",
    "Pika assistant download",
    "AI assistant for desktop",
    "desktop assistant software",
    "best AI assistant for PC",
    "pika virtual assistant",
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
  ].join(", "),
  authors: [{ name: "Nabil Mukerrob Makhtum" }],
  creator: "Nabil Mukerrob Makhtum",
  publisher: "Pika Voice Assistant",
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
    url: "https://pikavoice.com/",
    title: "Pika Voice Assistant — Your Personal AI",
    description:
      "Download Pika Voice Assistant, your personal AI-powered desktop assistant designed to help with task management, emails, and workflow automation. Boost your productivity today!",
    siteName: "Pika Voice Assistant",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pika Voice Assistant — Your Personal AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pika Voice Assistant — Your Personal AI",
    description:
      "Download Pika Voice Assistant, your personal AI-powered desktop assistant designed to help with task management, emails, and etc",
    images: ["/og-image.jpg"],
    creator: "@PikaAI",
  },
  alternates: {
    canonical: "https://pikavoice.com/",
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
        {/* Additional SEO Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="application-name" content="Pika Voice Assistant" />
        <meta name="apple-mobile-web-app-title" content="Pika Voice Assistant" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Google site verification */}
        <meta
          name="google-site-verification"
          content="K7BD1CKn97LzZoT7Q01SJX72FVBanF4vmHChPmQnbPA"
        />

        {/* ✅ Google AdSense verification */}
         <meta name="google-adsense-account" content="ca-pub-1946417185597901" />

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
      {/*Ezoic Ads Script */}

         <script data-cfasync="false" src="https://cmp.gatekeeperconsent.com/min.js"></script>
         <script data-cfasync="false" src="https://the.gatekeeperconsent.com/cmp.min.js"></script>
        
        <script async src="//www.ezojs.com/ezoic/sa.min.js"></script>
        <script>
          window.ezstandalone = window.ezstandalone || {};
          ezstandalone.cmd = ezstandalone.cmd || [];
        </script>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/faviconv3.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          {/* ✅ Chatling Chatbot Embed */}
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.chtlConfig = { chatbotId: "4652319962" };
      `,
    }}
  />
  <script
    async
    data-id="4652319962"
    id="chtl-script"
    type="text/javascript"
    src="https://chatling.ai/js/embed.js"
  />
      </head>
      <body className={inter.className}>
        {/* Render StructuredData client component here */}
        <StructuredData />

        {children}

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
