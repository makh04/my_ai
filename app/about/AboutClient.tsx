"use client"

import { motion } from "framer-motion"
import { Code, Globe, Zap, Users, Rocket, Star, Shield, Lock, Eye } from 'lucide-react'
import Link from "next/link"

export default function AboutClient() {
  const features = [
    {
      icon: Code,
      title: "Google Gemini AI Integration",
      description: "Smart responses powered by Google's most advanced AI technology for intelligent desktop assistance",
      keywords: "Google Gemini API, AI integration, smart responses",
    },
    {
      icon: Zap,
      title: "Voice & Text Commands",
      description: "Seamless operation through both voice recognition and text interfaces for maximum productivity",
      keywords: "voice commands, text interface, voice recognition",
    },
    {
      icon: Users,
      title: "Secure Google Login",
      description: "Personalized experience with secure Google OAuth2 authentication for desktop assistant users",
      keywords: "Google OAuth2, secure login, personalized assistant",
    },
    {
      icon: Star,
      title: "Modern Cyber-Style UI",
      description: "Sleek PyQt5 GUI with futuristic design elements optimized for desktop productivity",
      keywords: "PyQt5 interface, modern UI, desktop design",
    },
    {
      icon: Rocket,
      title: "System & App Control",
      description: "Launch, close, and manage applications with voice commands for ultimate desktop automation",
      keywords: "system control, app management, desktop automation",
    },
    {
      icon: Globe,
      title: "Web Automation",
      description: "Search websites, browse content, and stream media effortlessly with AI-powered web control",
      keywords: "web automation, browser control, media streaming",
    },
  ]

  const commands = [
    {
      category: "System Control Commands",
      examples: ['"Open Chrome browser"', '"Close current window"', '"Shutdown computer"'],
      keywords: "system commands, computer control, desktop management",
    },
    {
      category: "Web & Media Control",
      examples: ['"Search anime Jujutsu Kaisen"', '"Open Facebook website"', '"Play YouTube video"'],
      keywords: "web search, media control, browser automation",
    },
    {
      category: "Productivity Tools",
      examples: ['"Set 25 minute timer"', '"Take screenshot now"', '"Create reminder"'],
      keywords: "productivity commands, timer, screenshot, reminders",
    },
    {
      category: "Smart Reminders",
      examples: ['"Remind me to study at 8pm"', '"Open my music playlist"', '"Schedule meeting"'],
      keywords: "smart reminders, scheduling, task management",
    },
    {
      category: "Information Queries",
      examples: ['"What\'s the current time?"', '"Who is your founder?"', '"Weather today"'],
      keywords: "information queries, AI responses, knowledge base",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO-optimized Hero Section */}
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
                About Pika AI Desktop Assistant
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A revolutionary Python-based AI virtual assistant integrating Google Gemini API for smart responses,
              voice/text control, and personalized desktop productivity experience.
            </p>
            <Link
              href="/portfolio"
              className="inline-block mt-4 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View My Portfolio
            </Link>
            <div className="sr-only">
              Pika AI desktop virtual assistant, AI assistant for Windows, productivity software, voice-activated
              assistant, desktop automation tool, AI-powered productivity, smart assistant software
            </div>
          </motion.div>
        </div>
      </section>

      {/* Developer Section with SEO content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Meet the AI Assistant Developer
                </span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  <strong className="text-white">Nabil Mukerrob Makhtum</strong> - A passionate young software
                  developer and AI enthusiast from Bangladesh 🇧🇩, creator of the revolutionary Pika AI desktop virtual
                  assistant.
                </p>
                <p>
                  Built with AI and advanced voice automation features, Pika AI represents the culmination of
                  innovative thinking and technical expertise in desktop AI assistant development.
                </p>
                <p>
                  Powered by Google Authentication and designed with a cool User interface, this project
                  showcases the future of AI-powered personal productivity assistants for desktop users.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">Student</div>
                  <div className="text-gray-400">Qualification</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-400 mb-2">🇧🇩</div>
                  <div className="text-gray-400">Bangladesh</div>
                </div>
              </div>

              {/* Hidden SEO content */}
              <div className="sr-only">
                Nabil Mukerrob Makhtum, young AI developer, Bangladesh software developer, teenage programmer, AI
                assistant creator, desktop software developer, Python developer Bangladesh
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Technical Stack & AI Technology</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">System Usage</span>
                    <span className="text-cyan-400 font-semibold">70 Mb On Average</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Builded for</span>
                    <span className="text-purple-400 font-semibold">Windows</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Used scope in Google</span>
                    <span className="text-purple-400 font-semibold">User name and Google Calender</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Authentication</span>
                    <span className="text-green-400 font-semibold">Google OAuth2</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Key Features
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                <div className="sr-only">{feature.keywords}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Commands */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Sample Commands
              </span>
            </h2>
            <p className="text-xl text-gray-300">Here are some examples of what you can ask Pika AI to do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commands.map((command, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">{command.category}</h3>
                <div className="space-y-2">
                  {command.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="bg-gray-900/50 rounded-lg p-3">
                      <code className="text-cyan-400 text-sm">{example}</code>
                    </div>
                  ))}
                </div>
                <div className="sr-only">{command.keywords}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Features */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Coming Soon
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['"Read my file <file_name>"', '"Join Google Meet"', '"Analyze this PDF"'].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <code className="text-purple-400 text-lg">{feature}</code>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Security & Privacy
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Google OAuth2</h3>
                <p className="text-gray-400">Secure login authentication</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <Lock className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Local Storage</h3>
                <p className="text-gray-400">Data stored locally by default</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <Eye className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">No Ads</h3>
                <p className="text-gray-400">No telemetry or advertising</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
