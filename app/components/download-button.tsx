"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { useState, useEffect } from "react"

export default function DownloadButton() {
    
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section
      setIsVisible(window.scrollY > window.innerHeight * 0.5)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleButtonClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleBetaDownload = () => {
    const event = new CustomEvent("beta_download1")
    window.dispatchEvent(event)
    window.location.href = 'https://www.dropbox.com/scl/fi/y628im25arm738mrnbvmf/Pika-AI.exe?rlkey=72vwtulqvp3ccgfdbi9caqru4&st=nk46ys17&dl=1'
  }

  const handleProDownload = () => {
    const event = new CustomEvent("pro_download1")
    window.dispatchEvent(event)
    window.location.href = 'https://www.dropbox.com/scl/fi/y628im25arm738mrnbvmf/Pika-AI.exe?rlkey=72vwtulqvp3ccgfdbi9caqru4&st=nk46ys17&dl=1'
  }

  if (!isVisible) return null

  return (
    <>
      {/* Main Download Button */}
      <motion.div
        className="fixed bottom-20 right-6 z-50"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          className="group bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700 p-4 rounded-full shadow-2xl shadow-cyan-500/25 text-white font-semibold transition-all duration-300"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Download PIKA AI"
          onClick={handleButtonClick}
        >
          <Download className="w-6 h-6 group-hover:animate-bounce" />
        </motion.button>

        {/* Tooltip */}
        <motion.div
          className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          Download PIKA AI
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
        </motion.div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-80 sm:w-96"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-center mb-4">Choose your download</h2>
            <div className="flex flex-col gap-4">
              <button
                className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white py-3 px-6 rounded-full hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700 transition-all duration-300"
                onClick={handleBetaDownload}
              >
                Download Beta
              </button>
              <button
                className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white py-3 px-6 rounded-full hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700 transition-all duration-300"
                onClick={handleProDownload}
              >
                Download Pro
              </button>
            </div>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleCloseModal}
            >
              <span className="font-bold text-xl">&times;</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
