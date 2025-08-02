"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Target, Heart, Globe } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Award,
      title: "Innovation",
      description: "Pushing the boundaries of voice AI technology with cutting-edge natural language processing.",
    },
    {
      icon: Target,
      title: "Efficiency",
      description: "Making every interaction faster, smoother, and more intuitive than traditional methods.",
    },
    {
      icon: Heart,
      title: "Accessibility",
      description:
        "Creating technology that works for everyone, regardless of physical abilities or technical expertise.",
    },
    {
      icon: Globe,
      title: "Privacy",
      description: "Your voice data stays secure with advanced encryption and local processing capabilities.",
    },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                About JERVIS AI
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              JERVIS AI represents the future of human-computer interaction. Born from the vision of creating a truly
              intelligent assistant that understands natural speech and responds instantly to your needs.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our mission is to eliminate the friction between thought and action in the digital world. With JERVIS,
              your voice becomes the ultimate interface to control everything around you.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">2024</div>
                <div className="text-gray-400">Launched</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-400">AI Engineers</div>
              </div>
            </div>

            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Our Values</h3>
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
