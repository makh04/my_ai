import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from '@vercel/analytics/next'; // Import the Analytics component

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PIKA AI - PIKA, Your Voice-Activated AI Assistant",
  description:
    "Revolutionary AI assistant with wake word activation, instant app launching, WhatsApp integration, and real-time answers. Control your digital world with just your voice.",
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        {/* Add the Analytics component here */}
        <Analytics />
      </body>
    </html>
  )
}
