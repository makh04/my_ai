"use client"

import { motion } from "framer-motion"
import { Youtube, Instagram } from "lucide-react"
import Link from "next/link"

export default function BlogFooter() {
  const socialLinks = [
    { icon: Youtube, label: "YouTube", href: "#" }, // Replace with actual YouTube link
    { icon: Instagram, label: "Instagram", href: "#" }, // Replace with actual Instagram link
  ]

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-4">Connect with Pika AI</h3>
          <p className="text-gray-400 mb-6 max-w-xl">
            Follow us on social media for the latest updates, tips, and news on AI and productivity.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm mb-8">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
              About
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/support" className="text-gray-400 hover:text-white transition-colors duration-200">
              Support
            </Link>
          </div>

          <p className="text-gray-400 text-sm">© 2025 Pika AI. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
