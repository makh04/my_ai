"use client"
import Header from "./components/header"
import Hero from "./components/hero"
import Features from "./components/features"
import About from "./components/about"
import Footer from "./components/footer"
import DownloadButton from "./components/download-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
      </main>
      <Footer />
      <DownloadButton />
    </div>
  )
}
