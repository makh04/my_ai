"use client"

import { motion } from "framer-motion"
import { Download, Play, ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"

export default function Hero() {
  const [isDownloadClicked, setIsDownloadClicked] = useState(false)

  const handleDownloadClick = () => {
    // Track the event (if you are using Google Analytics)
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag('event', 'download_click', {
        event_category: 'Downloads',
        event_label: 'PIKA Download Button',
        value: 1,
      });
    }

    // Hide the Download PIKA button and show the other buttons
    setIsDownloadClicked(true)
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
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">Next-Generation AI Assistant</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              PIKA
            </span>
            <br />
            <span className="text-white">Your AI Companion</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Voice-activated AI assistant that controls your digital world. Launch apps, send messages, get answers, and
            stay focused — all hands-free.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Show the Download PIKA button only when not clicked */}
            {!isDownloadClicked && (
              <motion.button
                className="group bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 shadow-2xl shadow-cyan-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadClick}  // Trigger the download button click
              >
                <Download className="w-5 h-5" />
                <span>Download PIKA</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            )}

            {/* Additional Buttons that appear after clicking Download */}
            {isDownloadClicked && (
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
                <motion.button
                  className="group bg-blue-600 px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 shadow-xl shadow-blue-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://drive.google.com/file/d/1AXtqFktEW_CukGFnSFt4uxo2dD0S-9vt/view?usp=sharing', '_blank')} // Beta Download Link
                >
                  <Download className="w-5 h-5" />
                  <span>Download Beta</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>

                <motion.button
                  className="group bg-purple-600 px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 shadow-xl shadow-purple-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  <span>Pro Comming soon</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>
            )}
          </motion.div>

          {/* Watch Demo Button */}
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
            >
              <div className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-700/50 transition-colors duration-200">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span className="font-medium">Watch Demo</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
