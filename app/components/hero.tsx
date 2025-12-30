"use client"

import { motion } from "framer-motion"
import { Download, Play, ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
  }
}

export default function Hero() {
  const [isDownloadClicked, setIsDownloadClicked] = useState(false)
  const [showDownloadSteps, setShowDownloadSteps] = useState(false)

  const handleDownloadClick = () => {
    // Track download button click in Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "download_download", {
        event_category: "Downloads",
        event_label: "Pika AI Download Button - Hero",
        value: 1,
      })
    }
    setIsDownloadClicked(true)
  }

  const handleBetaDownload = () => {
    // Track beta download in Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "download_beta", {
        event_category: "Downloads",
        event_label: "Pika AI Beta Download",
        value: 1,
      })
    }

    // Open download link
    const downloadWindow = window.open(
      "https://www.dropbox.com/scl/fi/oojgcum9dz7xc16ucr8gh/pika_0.1.0_x64-setup.exe?rlkey=052ysy585kz9s16gsg5da90o4&st=uo1k3hjg&dl=1",
      "_blank",
    )

    // Show download steps after confirming download started
    if (downloadWindow) {
      setTimeout(() => {
        setShowDownloadSteps(true)
      }, 1000) // Small delay to ensure download started
    }
  }

  const handleProDownload = () => {
    // Track pro download in Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "download_pro", {
        event_category: "Downloads",
        event_label: "Pika AI Pro Download",
        value: 1,
      })
    }

    // Open download link
    const downloadWindow = window.open(
      "https://www.dropbox.com/scl/fi/oojgcum9dz7xc16ucr8gh/pika_0.1.0_x64-setup.exe?rlkey=052ysy585kz9s16gsg5da90o4&st=uo1k3hjg&dl=1",
      "_blank",
    )

    // Show download steps after confirming download started
    if (downloadWindow) {
      setTimeout(() => {
        setShowDownloadSteps(true)
      }, 1000) // Small delay to ensure download started
    }
  }

  const handleDemoClick = () => {
    // Track demo video click in Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "demo_click", {
        event_category: "Engagement",
        event_label: "Watch Demo Button",
        value: 1,
      })
    }

    // Open YouTube video in new tab
    window.open("https://youtu.be/SKWbYVP0pF4", "_blank")
  }


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/30 to-purple-900/30" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* SEO-optimized badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">Free Desktop AI Assistant for Productivity</span>
          </motion.div>

          {/* SEO-optimized main heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pika AI
            </span>
            <br />
            <span className="text-white">Virtual Assistant</span>
          </motion.h1>

          {/* SEO-optimized subtitle with keywords */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Download the best AI assistant for desktop productivity. Voice-activated smart assistant software that
            controls your digital world, manages tasks, and automates workflows — all hands-free.
          </motion.p>

          {/* CTA Buttons with Analytics tracking */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {!isDownloadClicked && (
              <motion.button
                className="group bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 shadow-2xl shadow-cyan-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadClick}
                aria-label="Download Pika AI Desktop Assistant"
              >
                <Download className="w-5 h-5" />
                <span>Download Pika AI Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            )}

            {isDownloadClicked && !showDownloadSteps && (
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
                <motion.button
                  className="group bg-blue-600 px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 shadow-xl shadow-blue-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBetaDownload}
                  aria-label="Download Pika AI Beta Version"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Beta</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>

                <motion.button
                  className="group bg-purple-600 px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 shadow-xl shadow-purple-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleProDownload}
                  aria-label="Download Pika AI Pro Version"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Pro</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>
            )}

{showDownloadSteps && (
  <motion.div
    className="mt-12 max-w-2xl mx-auto"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center">
      <h3 className="text-2xl font-bold text-white mb-4">
        🎉 Thanks for Downloading Pika AI!
      </h3>

      <p className="text-gray-300 text-base mb-4">
        Say <span className="text-white font-semibold">“Hey pika”</span> or type your command to begin using your AI assistant.
      </p>

      <p className="text-gray-400 text-sm">
        ⏳ Please wait at least <span className="text-white font-semibold">30 seconds</span> after installation to allow Pika to fully initialize and stabilize.
      </p>

      <div className="mt-6">
        <button
          onClick={() => setShowDownloadSteps(false)}
          className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
        >
          Hide Message
        </button>
      </div>
    </div>
  </motion.div>
)}

          </motion.div>

          {/* Watch Demo Button with Analytics */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDemoClick}
              aria-label="Watch Pika AI Demo Video"
            >
              <div className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-700/50 transition-colors duration-200">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span className="font-medium">Watch AI Assistant Demo</span>
            </motion.button>
          </motion.div>

          {/* SEO-optimized stats section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: "300+", label: "Downloads", description: "Users trust Pika AI" },
              { number: "30+", label: "AI Features", description: "Productivity tools" },
              { number: "99.9%", label: "Uptime", description: "Reliable assistant" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-semibold">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
