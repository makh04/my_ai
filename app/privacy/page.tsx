"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, Database, UserCheck, Globe } from "lucide-react"
import Header from "../components/header"

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Google OAuth2 authentication data (name, email, profile picture)",
        "Voice commands and text inputs for processing(Only The First command)",
        "System usage patterns and preferences",
        "App launch history and user routines",
        "Local device information for optimization",
      ],
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "Provide personalized AI assistant responses",
        "Remember your preferences and routines",
        "Improve voice recognition accuracy",
        "Enable system automation and app control",
        "Deliver relevant search results and recommendations",
        "Fix the bugs from yours response",
      ],
    },
    {
      icon: Shield,
      title: "Data Storage & Security",
      content: [
        "Local data storage by default - your data stays on your device",
        "Google OAuth2 for secure authentication",
        "Encrypted connections for all API communications",
        "No ads or telemetry tracking",
        "Optional cloud sync with explicit user consent",
      ],
    },
    {
      icon: Eye,
      title: "Data Sharing",
      content: [
        "We do NOT sell your personal data to third parties",
        "Google Gemini API processes commands for AI responses only",
        "Voice data is processed locally when possible",
        "Anonymous usage statistics may be collected for improvements",
        "No data sharing without explicit user consent",
      ],
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        "Access and download your stored data",
        "Delete your account and all associated data",
        "Opt-out of cloud synchronization",
        "Control voice data retention settings",
        "Request data portability",
      ],
    },
    {
      icon: Globe,
      title: "Third-Party Services",
      content: [
        "Google Gemini API for AI responses",
        "Google OAuth2 for authentication",
        "YouTube API for media control",
        "Web search engines for information retrieval",
        "All integrations follow strict privacy standards",
      ],
    },
  ]

  return (

     <div className="min-h-screen bg-black text-white">
      <Header />
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/30 to-purple-900/30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your privacy is our priority. Learn how PIKA AI protects and handles your data.
            </p>
            <div className="text-sm text-gray-400">Last updated: January 2025</div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Questions About Privacy?</h2>
            <p className="text-gray-300 mb-8">
              If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to
              contact us.
            </p>
            <motion.a
              href="/support"
              className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
