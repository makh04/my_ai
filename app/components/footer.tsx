"use client"

import { motion } from "framer-motion"
import { Code2, Youtube, Instagram, Star } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const socialLinks = [
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/x_makhtum_x/" },
  ]

  const footerLinks = {
    Product: ["Features", "Pricing", "Documentation", "API"],
    Company: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
    ],
    Support: [
      { name: "Help Center", href: "/support" },
      { name: "Contact", href: "/support" },
    ],
    Legal: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Security", href: "/privacy" },
      { name: "Cookies", href: "#" },
    ],
  }

  return (
    <footer id="more" className="relative bg-gray-900 border-t border-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                className="flex items-center space-x-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  PIKA AI
                </span>
              </motion.div>

              <motion.p
                className="text-gray-400 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                The most advanced voice-activated AI assistant. Control your digital world with just your voice —
                faster, smarter, and more intuitive than ever before.
              </motion.p>

              {/* Social Links */}
              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (categoryIndex + 3) }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Review CTA Section */}
        <motion.div
          className="py-12 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Love Pika AI? Share Your Experience!</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Your feedback helps us improve and grow. Take a moment to share your thoughts and help other users
              discover Pika AI.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              whileHover={{ scale: 1.02 }}
            >
              <Link
                href="/review"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white font-bold rounded-lg hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Star className="w-5 h-5 mr-2 fill-current" />
                Leave a Review
                <Star className="w-5 h-5 ml-2 fill-current" />
              </Link>
              <div className="flex items-center space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-gray-400 ml-2">Join our satisfied users</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="py-12 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Experience PIKA AI</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Ready to revolutionize how you interact with technology? Download PIKA AI and discover the power of
              voice-controlled computing.
            </p>

            <motion.a
              href="/about"
              className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>

            <motion.button
              className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 mt-4 ml-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 PIKA AI. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="terms" className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <a href="terms" className="text-gray-400 hover:text-white transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
