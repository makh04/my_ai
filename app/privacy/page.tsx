"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, Database, UserCheck, Globe, Monitor, Megaphone, Link as LinkIcon, Mail } from "lucide-react"
import Header from "../components/header"

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Google OAuth2 authentication data (name, email, profile picture)",
        "Voice commands and text inputs for processing (Only the first command)",
        "System usage patterns and preferences",
        "App launch history and user routines",
        "Local device information for optimization",
        "Website visit information including IP address, browser type, and pages visited",
        "Cookies and similar tracking technologies for analytics and advertising",
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
        "Fix bugs based on your responses",
        "Analyze website traffic and user behavior for performance improvements",
        "Serve relevant advertisements through third-party ad networks like Ezoic",
      ],
    },
    {
      icon: Shield,
      title: "Data Storage & Security",
      content: [
        "Local data storage by default - your data stays on your device",
        "Google OAuth2 for secure authentication",
        "Encrypted connections for all API communications",
        "No ads or telemetry tracking without consent",
        "Optional cloud sync with explicit user consent",
        "We take reasonable steps to protect your data against unauthorized access",
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
        "Information may be shared with advertising partners to serve personalized ads",
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
        "Opt-out of personalized advertising through Ezoic and other networks",
        "Unsubscribe from newsletters and marketing communications",
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
        "We use your Google Calendar to schedule events on your commands; no events are deleted",
      ],
    },
    {
      icon: Monitor,
      title: "Analytics and Cookies",
      content: [
        "We use cookies and similar technologies to enhance user experience",
        "Third-party analytics services may collect information about site usage",
        "Cookies are also used to serve personalized advertisements",
        "You can disable cookies through your browser settings, but some features may not function properly",
      ],
    },
    {
      icon: Megaphone,
      title: "Advertising Partners",
      content: [
        "We work with third-party ad networks such as Ezoic to display ads",
        "These partners may collect information about your visits to deliver relevant ads",
        "We do not share personally identifiable information without consent",
        "Ads are displayed in a way that does not interfere with app downloads or core functionality",
      ],
    },
    {
      icon: LinkIcon,
      title: "Links to Other Websites",
      content: [
        "Our site may contain links to third-party websites",
        "We are not responsible for the privacy practices or content of external sites",
        "We encourage you to review the privacy policies of any third-party websites you visit",
      ],
    },
    {
      icon: Mail,
      title: "Communication & Newsletters",
      content: [
        "If you subscribe to our newsletter, we will collect your email address",
        "Your email is used only to send updates, promotions, or news",
        "You may unsubscribe at any time using the link in the newsletter",
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
            <div className="text-sm text-gray-400">Last updated: January 2026</div>
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
