"use client"

import { motion } from "framer-motion"

interface ResponsiveAdProps {
  size: "banner" | "rectangle" | "leaderboard" | "sidebar"
  className?: string
}

export default function ResponsiveAd({ size, className = "" }: ResponsiveAdProps) {
  const getAdDimensions = () => {
    switch (size) {
      case "banner":
        return "h-24 md:h-32" // 320x100 mobile, 728x90 desktop
      case "rectangle":
        return "h-64 md:h-80" // 300x250 mobile, 336x280 desktop
      case "leaderboard":
        return "h-24 md:h-32" // 320x50 mobile, 728x90 desktop
      case "sidebar":
        return "h-96 md:h-[600px]" // 300x600
      default:
        return "h-32"
    }
  }

  const getAdText = () => {
    switch (size) {
      case "banner":
        return "Advertisement (728x90)"
      case "rectangle":
        return "Advertisement (300x250)"
      case "leaderboard":
        return "Advertisement (728x90)"
      case "sidebar":
        return "Advertisement (300x600)"
      default:
        return "Advertisement"
    }
  }

  return (
    <motion.div
      className={`w-full bg-gradient-to-r from-gray-800/30 to-gray-700/30 border border-gray-600/30 rounded-xl flex items-center justify-center text-center text-gray-400 text-sm backdrop-blur-sm ${getAdDimensions()} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="space-y-2">
        <div className="text-xs text-gray-500">SPONSORED</div>
        <div className="font-medium">{getAdText()}</div>
        <div className="text-xs text-gray-500">Your Gaming Ad Here</div>
      </div>
    </motion.div>
  )
}
