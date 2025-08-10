"use client"

import { motion } from "framer-motion"
import { blogPosts } from "./data"
import BlogCard from "../components/blog-card"
import Header from "../components/header" // Import Header
import Footer from "../components/footer" // Import main Footer

export default function BlogListingClient() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header /> {/* Render Header */}
      {/* Header */}
      <section className="relative py-20 overflow-hidden pt-32">
        {" "}
        {/* Adjusted padding for fixed header */}
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
                Pika AI Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Insights, tips, and the latest news on AI, productivity, and technology.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Ad Placeholder - Top Banner */}
          <div className="w-full bg-gray-800/50 border border-gray-700 rounded-xl p-4 mb-12 text-center text-gray-400 text-sm h-32 flex items-center justify-center">
            <span className="sr-only">Advertisement area</span>
            <p>Your Advertisement Here (728x90)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                author={post.author}
                image={post.image}
              />
            ))}
          </div>

          {/* Ad Placeholder - Bottom Banner */}
          <div className="w-full bg-gray-800/50 border border-gray-700 rounded-xl p-4 mt-12 text-center text-gray-400 text-sm h-32 flex items-center justify-center">
            <span className="sr-only">Advertisement area</span>
            <p>Your Advertisement Here (728x90)</p>
          </div>
        </div>
      </section>
      <Footer /> {/* Render main Footer */}
    </div>
  )
}
