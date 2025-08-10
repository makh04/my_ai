"use client"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { CalendarDays, User } from "lucide-react"
import Image from "next/image"
import { blogPosts } from "../data"
import Header from "../../components/header" // Import Header
import BlogFooter from "../../components/blog-footer" // Import BlogFooter

interface BlogPostPageProps {
  params: { slug: string }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

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
                {post.title}
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">{post.description}</p>
            <div className="flex items-center justify-center text-gray-500 text-sm space-x-4">
              <div className="flex items-center space-x-1">
                <CalendarDays className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Blog Post Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {post.image && (
            <motion.div
              className="relative w-full h-64 md:h-96 mb-12 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="object-center"
              />
            </motion.div>
          )}

          <motion.div
            className="prose prose-invert max-w-none text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Dynamically render HTML content */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </motion.div>

          {/* Ad Placeholder - Sidebar/Inline */}
          <div className="mt-12 p-6 bg-gray-800/50 border border-gray-700 rounded-xl text-center text-gray-400 text-sm">
            <span className="sr-only">Advertisement area</span>
            <p>Relevant Ad Content Here (e.g., 300x250)</p>
          </div>
        </div>
      </section>
      <BlogFooter /> {/* Render BlogFooter */}
    </div>
  )
}
