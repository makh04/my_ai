"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { TrendingUp, Clock } from "lucide-react"
import Image from "next/image"

interface SuggestedPost {
  slug: string
  title: string
  description: string
  image?: string
  category: string
  readTime: string
  isPopular?: boolean
  isRecent?: boolean
}

interface SuggestedPostsProps {
  posts: SuggestedPost[]
  currentSlug?: string
  basePath: string // "/blog" or "/gaming"
  title?: string
}

export default function SuggestedPosts({
  posts,
  currentSlug,
  basePath,
  title = "Suggested Posts",
}: SuggestedPostsProps) {
  // Filter out current post and get top 3 suggestions
  const suggestedPosts = posts.filter((post) => post.slug !== currentSlug).slice(0, 3)

  if (suggestedPosts.length === 0) return null

  return (
    <motion.section
      className="mt-16 p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {suggestedPosts.map((post, index) => (
          <motion.article
            key={post.slug}
            className="group relative bg-gray-800/40 backdrop-blur-sm border border-gray-600/30 rounded-xl overflow-hidden hover:bg-gray-800/60 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <Link href={`${basePath}/${post.slug}`} className="block">
              {/* Popular/Recent Badge */}
              {(post.isPopular || post.isRecent) && (
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      post.isPopular
                        ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                        : "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                    }`}
                  >
                    {post.isPopular ? "🔥 Popular" : "✨ New"}
                  </span>
                </div>
              )}

              {/* Image */}
              {post.image && (
                <div className="relative w-full h-40 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              )}

              {/* Content */}
              <div className="p-4">
                {/* Category and Read Time */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-gray-400">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h4>

                {/* Description */}
                <p className="text-gray-400 text-sm line-clamp-2 mb-3">{post.description}</p>

                {/* Read More Link */}
                <div className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                  Read More →
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.article>
        ))}
      </div>

      {/* View All Link */}
      <div className="text-center mt-8">
        <Link
          href={basePath}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 border border-blue-500/30 px-6 py-3 rounded-xl font-semibold text-blue-400 hover:text-blue-300 transition-all duration-300"
        >
          <span>View All Posts</span>
          <TrendingUp className="w-4 h-4" />
        </Link>
      </div>
    </motion.section>
  )
}
