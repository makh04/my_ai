"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CalendarDays, User } from "lucide-react"
import Image from "next/image"

interface BlogCardProps {
  slug: string
  title: string
  description: string
  date: string
  author: string
  image?: string
}

export default function BlogCard({ slug, title, description, date, author, image }: BlogCardProps) {
  return (
    <motion.article
      className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {image && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed mb-4 line-clamp-3">{description}</p>
      <div className="flex items-center text-gray-500 text-sm space-x-4">
        <div className="flex items-center space-x-1">
          <CalendarDays className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center space-x-1">
          <User className="w-4 h-4" />
          <span>{author}</span>
        </div>
      </div>
      <Link href={`/blog/${slug}`} className="absolute inset-0 z-10" aria-label={`Read more about ${title}`}>
        <span className="sr-only">Read more about {title}</span>
      </Link>
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.article>
  )
}
