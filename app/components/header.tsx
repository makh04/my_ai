"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Detect scroll to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll to section on click
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }


  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
            <img src="/logo.png" alt="PIKA AI Logo" className="h-8 w-auto" />
          </motion.div>

{/* Desktop Navigation */}
<nav className="hidden md:flex items-center space-x-8">
  {["About", "Gaming", "More", "Blog", "Updates"].map((item) => {
    const [showDropdown, setShowDropdown] = useState(false);
    let dropdownTimeout: NodeJS.Timeout;

    if (item === "More") {
      return (
        <div
          key={item}
          className="relative"
          onMouseEnter={() => {
            clearTimeout(dropdownTimeout);
            setShowDropdown(true);
          }}
          onMouseLeave={() => {
            dropdownTimeout = setTimeout(() => setShowDropdown(false), 300); // adjust delay here
          }}
        >
          {/* Main "More" button */}
          <motion.button
            className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More
          </motion.button>

          {/* Dropdown menu */}
          {showDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 top-full mt-2 bg-gray-900/90 border border-gray-700 backdrop-blur-lg
                         rounded-lg px-4 py-3 shadow-lg z-50 space-y-2"
            >
              <button
                onClick={() => (window.location.href = "/support")}
                className="block text-left w-full text-gray-300 hover:text-white transition-colors"
              >
                Support
              </button>

              <button
                onClick={() => (window.location.href = "/portfolio")}
                className="block text-left w-full text-gray-300 hover:text-white transition-colors"
              >
                Portfolio
              </button>
            </motion.div>
          )}
        </div>
      );
    }

    // Normal navigation items
    return (
      <motion.button
        key={item}
        onClick={() => {
          if (item === "About") window.location.href = "/about";
          else if (item === "Gaming") window.location.href = "/gaming";
          else if (item === "Blog") window.location.href = "/blog";
          else if (item === "Updates") window.location.href = "/updates";
        }}
        className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {item}
      </motion.button>
    );
  })}

  {/* Download Now button */}
  <motion.button
    onClick={() => (window.location.href = "/")}
    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-lg font-medium transition-all duration-200"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Download Now
  </motion.button>
</nav>




          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4 border-t border-gray-800">
            {["About", "Gaming", "More", "Blog"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (item === "About") {
                    window.location.href = "/about"
                  } else if (item === "Gaming") {
                    window.location.href = "/gaming"
                  } else if (item === "More") {
                    window.location.href = "/support"
                  } else if (item === "Blog") {
                    window.location.href = "/blog"
                  } else {
                    scrollToSection(item.toLowerCase())
                  }
                }}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => (window.location.href = "/")}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-lg font-medium transition-all duration-200"
            >
              Download Now
            </button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}