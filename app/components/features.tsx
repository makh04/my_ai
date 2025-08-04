"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Zap, Shield, Users, Palette, Play, Sparkles } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "🗣️ Voice-Activated AI Assistant",
    description:
      "Just say 'Hey Pika' to instantly activate your desktop virtual assistant — no clicking, no shortcuts, just pure hands-free productivity control.",
    keywords: "voice activated AI, desktop assistant, hands-free control",
  },
  {
    icon: Zap,
    title: "⚡ Instant App & Website Launcher",
    description:
      "Open any application or website just by speaking its name — the fastest AI assistant for desktop productivity and workflow automation.",
    keywords: "app launcher, website automation, productivity AI",
  },
  {
    icon: Users,
    title: "💬 Smart Communication Assistant",
    description:
      "Send messages, manage emails, and handle communications using voice commands — perfect for multitasking professionals and busy users.",
    keywords: "communication assistant, email management, voice messaging",
  },
  {
    icon: Brain,
    title: "🧠 Intelligent AI Responses",
    description:
      "Ask Pika AI anything — from complex calculations to general knowledge — and get instant, accurate answers from your personal AI genius.",
    keywords: "AI responses, intelligent assistant, knowledge base",
  },
  {
    icon: Shield,
    title: "🎯 Focus Mode & Productivity Booster",
    description:
      "Activate focus mode to block distracting apps, notifications, and websites — stay productive and in the zone effortlessly with AI-powered concentration.",
    keywords: "focus mode, productivity booster, distraction blocker",
  },
  {
    icon: Play,
    title: "🎬 Universal Media Controller",
    description:
      "Control YouTube, Netflix, and other streaming platforms with voice commands — pause, play, skip, or rewind from anywhere on your desktop.",
    keywords: "media controller, streaming control, voice commands",
  },
  {
    icon: Palette,
    title: "🍿 Entertainment Assistant",
    description:
      "Instantly play your favorite content, movies, or shows just by saying their name — no searching, no delays, just instant entertainment.",
    keywords: "entertainment assistant, content launcher, media automation",
  },
  {
    icon: Sparkles,
    title: "🎨 Modern AI Interface",
    description:
      "Experience a futuristic, intuitive user interface designed for the next generation of AI-powered desktop productivity tools.",
    keywords: "AI interface, modern design, user experience",
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
        {/* SEO-optimized section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Best AI Assistant Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover why Pika AI is the most advanced desktop virtual assistant for productivity, automation, and smart
            task management.
          </p>
        </motion.div>

        {/* Features Grid with SEO-optimized content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.article
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content with SEO keywords */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-3">{feature.description}</p>

              {/* Hidden keywords for SEO */}
              <div className="sr-only">{feature.keywords}</div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.article>
          ))}
        </div>

        {/* SEO-optimized bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to boost your productivity with AI?</h3>
          <p className="text-gray-300 mb-6">
            Join thousands of users who trust Pika AI as their desktop virtual assistant
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl shadow-blue-500/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Download Pika AI Desktop Assistant"
          >
            Download Free AI Assistant
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
