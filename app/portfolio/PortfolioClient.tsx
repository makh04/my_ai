"use client"

import { motion } from "framer-motion"
import { Github, Instagram, ExternalLink } from 'lucide-react'
import Link from "next/link"
import { portfolioProjects, socialLinks } from "./data"

export default function PortfolioClient() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/20 to-purple-900/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Hey! I'm Nabil Mukerrob Makhtum
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A passionate full-stack developer who loves building things from the ground up. I work on both front-end
              and back-end, and I'm especially into Python, AI automation, API integrations, server deployment, and
              building stores or full project systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="space-y-6 text-gray-300">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <p className="text-lg leading-relaxed mb-4">
                  I'm still studying, but I'm already deep into real projects and always experimenting with something
                  new. I believe in learning by doing, and every project I work on teaches me something valuable about
                  web development, AI, and system design.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Skills</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>✨ Python & Full-Stack Development</li>
                    <li>🤖 AI & Machine Learning</li>
                    <li>🔌 API Integration</li>
                    <li>🚀 Server Deployment</li>
                    <li>🏪 Store & Project Building</li>
                    <li>💻 Frontend & Backend</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">What I Do</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>🎯 Build real-world applications</li>
                    <li>🧠 Integrate AI into projects</li>
                    <li>⚙️ Automate workflows</li>
                    <li>📱 Create responsive designs</li>
                    <li>🔐 Secure authentication systems</li>
                    <li>📊 Database optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                My Projects
              </span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-gray-300 text-lg">
                Here are some of the projects I've worked on. I keep updating this list, so feel free to check back
                later!
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {portfolioProjects.map((project, index) => (
                <motion.a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 hover:border-gray-600 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">{project.url}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      {/* Find Me Online Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Find Me Online
              </span>
            </h2>

            <div className="flex justify-center items-center gap-8">
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-300">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">GitHub</span>
              </motion.a>

              <motion.a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:from-pink-500 group-hover:to-rose-500 transition-all duration-300">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Instagram</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to About Section */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
          >
            ← Back to About
          </Link>
        </div>
      </section>
    </div>
  )
}
