import type { Metadata } from "next"
import PortfolioClient from "./PortfolioClient"

export const metadata: Metadata = {
  title: "Nabil Mukerrob Makhtum — Portfolio",
  description:
    "Portfolio page of Nabil Mukerrob Makhtum — a full-stack developer specializing in front-end, back-end, Python, AI, API development, server deployment, and project building. Still studying and actively creating real-world projects. Explore projects, GitHub, and Instagram.",
  keywords: [
    "Nabil Mukerrob Makhtum",
    "portfolio",
    "full-stack developer",
    "Python developer",
    "AI developer",
    "API integration",
    "server deployment",
    "frontend developer",
    "backend developer",
    "project building",
    "Bangladesh developer",
  ].join(", "),
  alternates: {
    canonical: "https://pikaai.vercel.app/portfolio",
  },
  openGraph: {
    title: "Nabil Mukerrob Makhtum — Programmer",
    description:
      "Portfolio showcasing projects in full-stack development, Python, AI, API integration, and server deployment.",
    type: "profile",
    url: "https://pikaai.vercel.app/portfolio",
  },
}

export default function PortfolioPage() {
  return <PortfolioClient />
}
