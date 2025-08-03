"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Zap, Shield, Users, Palette, Play, Sparkles } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "🗣️ Wake Word Activation",
    description:
      "Just say 'Hey PIKA' or give a name according to your preference to instantly activate your assistant — no clicking, no shortcuts, just pure hands-free control.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "⚡ Instant App & Website Launcher",
    description: "Open any app or website just by speaking its name — way faster than any manual method.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "💬 WhatsApp Voice Command Integration",
    description: "Send messages or open chats using your voice — perfect for multitasking or hands-free messaging.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Brain,
    title: "🧠 Answer Anything in Real-Time",
    description:
      "Ask JERVIS anything — from math problems to random facts — and get instant answers, just like having your own personal AI genius.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "🎯 Focus Mode with Distraction Blocker",
    description:
      "Activate focus mode to block out apps, notifications, and distractions — stay in the zone effortlessly.",
    gradient: "from-red-500 to-rose-500",
  },
  {
    icon: Play,
    title: "🎬 Universal Video Controller",
    description:
      "Control YouTube, Netflix, and other videos with your voice — pause, play, skip, or rewind from anywhere.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Palette,
    title: "🍿 One-Command Anime Episode Launcher",
    description: "Instantly play your favorite anime episodes just by saying their name — no searching, no delays.",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    icon: Sparkles,
    title: "🎨 Cool UI for Users",
    description: "Experience a futuristic, intuitive interface designed for the next generation of AI interaction.",
    gradient: "from-cyan-500 to-blue-500",
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Top 8 Killer Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            JERVIS AI brings you the most advanced voice-controlled features to revolutionize how you interact with
            technology.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl shadow-blue-500/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
