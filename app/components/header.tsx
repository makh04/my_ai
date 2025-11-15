"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showGamingPopup, setShowGamingPopup] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-white font-semibold text-lg">Pika</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>

            {/* Blog with Gaming Popup */}
            <div
              className="relative"
              onMouseEnter={() => setShowGamingPopup(true)}
              onMouseLeave={() => setShowGamingPopup(false)}
            >
              <Link
                href="/blog"
                className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
              >
                <span>Blog</span>
                <ChevronDown className="w-4 h-4" />
              </Link>

              <AnimatePresence>
                {showGamingPopup && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl min-w-[200px] py-2"
                  >
                    <Link
                      href="/blog"
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                    >
                      All Blog Posts
                    </Link>
                    <Link
                      href="/gaming"
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                    >
                      🎮 Gaming
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/updates" className="text-gray-300 hover:text-white transition-colors">
              Updates
            </Link>
            <div className="relative">
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
              >
                <span>About</span>
                <ChevronDown className="w-4 h-4" />
              </Link>
              <AnimatePresence>
                {showGamingPopup && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl min-w-[200px] py-2"
                  >
                    <Link
                      href="/about"
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                    >
                      About
                    </Link>
                    <Link
                      href="/portfolio"
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                    >
                      Portfolio
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/support" className="text-gray-300 hover:text-white transition-colors">
              Support
            </Link>
            <Link href="/review" className="text-gray-300 hover:text-white transition-colors">
              Review
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/gaming"
                className="text-gray-300 hover:text-white transition-colors pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                🎮 Gaming
              </Link>
              <Link
                href="/updates"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Updates
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/support"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
              <Link
                href="/review"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Review
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
