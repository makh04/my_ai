"use client"

import { motion } from "framer-motion"
import { gamingPosts } from "./data"
import GamingCard from "../components/gaming-card"
import Header from "../components/header"
import Footer from "../components/footer"
import ResponsiveAd from "../components/responsive-ad"

export default function GamingListingClient() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Header */}
      <section className="relative py-20 overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/30 to-pink-900/30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Gaming Hub
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your ultimate destination for gaming news, reviews, guides, and the latest trends in the gaming world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gaming Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Banner Ad */}
          <ResponsiveAd size="leaderboard" className="mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {gamingPosts.map((post) => (
                  <GamingCard
                    key={post.slug}
                    slug={post.slug}
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    author={post.author}
                    category={post.category}
                    image={post.image}
                  />
                ))}
              </div>

              {/* Rectangle Ad between posts */}
              <div className="my-12">
                <ResponsiveAd size="rectangle" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Sidebar Ad */}
              <ResponsiveAd size="sidebar" />

              {/* Popular Categories */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Popular Categories</h3>
                <div className="space-y-3">
                  {["AI Gaming", "Gaming Trends", "Gaming Hardware", "Esports", "Game Reviews", "Gaming Guides"].map(
                    (category, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer"
                      >
                        <span className="text-gray-300">{category}</span>
                        <span className="text-purple-400 text-sm">{Math.floor(Math.random() * 20) + 5} posts</span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Gaming Tools */}
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Gaming Tools</h3>
                <p className="text-gray-300 mb-4">
                  Enhance your gaming experience with AI-powered tools and assistants.
                </p>
                <a
                  href="/"
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300"
                >
                  Try Pika AI Gaming
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Banner Ad */}
          <ResponsiveAd size="banner" className="mt-12" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
