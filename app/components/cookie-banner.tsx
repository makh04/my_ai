"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie, X, Info } from "lucide-react"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 2000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 p-4"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4 flex-1">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">We use cookies to enhance your experience</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    We use cookies and similar technologies to improve your browsing experience, analyze site traffic,
                    and provide personalized content. This helps us optimize our gaming content and AI assistant
                    features.
                  </p>

                  {showDetails && (
                    <motion.div
                      className="bg-gray-800/50 rounded-lg p-4 mb-4 text-sm"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="font-semibold text-white mb-2">What we collect:</h4>
                      <ul className="text-gray-300 space-y-1 list-disc list-inside">
                        <li>Analytics data to understand how you use our site</li>
                        <li>Preferences for personalized gaming content</li>
                        <li>Performance data to optimize our AI assistant</li>
                        <li>Basic usage statistics for improving user experience</li>
                      </ul>
                      <p className="text-gray-400 mt-2 text-xs">
                        We do not sell your personal data. Read our{" "}
                        <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
                          Privacy Policy
                        </a>{" "}
                        for more details.
                      </p>
                    </motion.div>
                  )}

                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="flex space-x-3">
                      <button
                        onClick={acceptCookies}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300"
                      >
                        Accept All
                      </button>
                      <button
                        onClick={declineCookies}
                        className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300"
                      >
                        Decline
                      </button>
                    </div>

                    <button
                      onClick={() => setShowDetails(!showDetails)}
                      className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <Info className="w-4 h-4" />
                      <span>{showDetails ? "Hide" : "Show"} Details</span>
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors ml-4"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
