import type { Metadata } from "next"
import AboutClient from "./AboutClient"

// SEO metadata for About page
export const metadata: Metadata = {
  title: "About Pika AI - Desktop Virtual Assistant by Nabil Mukerrob Makhtum",
  description:
    "Learn about Pika AI, the revolutionary desktop virtual assistant created by 17-year-old developer Nabil Mukerrob Makhtum from Bangladesh. Powered by Google Gemini API.",
  keywords:
    "Pika AI developer, Nabil Mukerrob Makhtum, AI assistant creator, desktop assistant developer, Bangladesh developer, Google Gemini API",
}

export default function About() {
  return <AboutClient />
}
