"use client"

import { useState, useEffect } from "react"
import type { UpdatePost } from "../data"
import Header from "../../components/header"
import Footer from "../../components/footer"

interface UpdatePostClientPageProps {
  post: UpdatePost
}

export default function UpdatePostClientPage({ post }: UpdatePostClientPageProps) {
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setReadingProgress(progress)
    }

    window.addEventListener("scroll", updateReadingProgress)
    return () => window.removeEventListener("scroll", updateReadingProgress)
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "feature":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "bugfix":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "improvement":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "security":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "feature":
        return "✨"
      case "bugfix":
        return "🐛"
      case "improvement":
        return "⚡"
      case "security":
        return "🔒"
      default:
        return "📝"
    }
  }

  const renderMarkdown = (content: string) => {
    return content.split("\n").map((line, index) => {
      // Headers
      if (line.startsWith("# ")) {
        return (
          <h1 key={index} className="text-3xl font-bold text-white mb-6 mt-8">
            {line.slice(2)}
          </h1>
        )
      }
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-semibold text-white mb-4 mt-6">
            {line.slice(3)}
          </h2>
        )
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-medium text-white mb-3 mt-4">
            {line.slice(4)}
          </h3>
        )
      }

      // Lists
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="text-gray-300 mb-2 ml-4">
            {line.slice(2)}
          </li>
        )
      }

      // Table rows
      if (line.includes("|") && !line.startsWith("|---")) {
        const cells = line
          .split("|")
          .map((cell) => cell.trim())
          .filter((cell) => cell)
        if (cells.length > 0) {
          return (
            <tr key={index} className="border-b border-gray-700">
              {cells.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-2 text-gray-300">
                  {cell}
                </td>
              ))}
            </tr>
          )
        }
      }

      // Empty lines
      if (line.trim() === "") {
        return <br key={index} />
      }

      // Regular paragraphs with bold text support
      const processedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')

      return (
        <p
          key={index}
          className="text-gray-300 mb-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: processedLine }}
        />
      )
    })
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black">
        {/* Reading Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
            style={{ width: `${readingProgress}%` }}
          />
        </div>

        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
              <span>/</span>
              <a href="/updates" className="hover:text-white transition-colors">
                Updates
              </a>
              <span>/</span>
              <span className="text-white">{post.title}</span>
            </div>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(post.type)}`}>
                {getTypeIcon(post.type)} {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
              </span>
              {post.version && (
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-300 border border-gray-700">
                  {post.version}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{post.title}</h1>

            <p className="text-xl text-gray-400 mb-6 leading-relaxed">{post.description}</p>

            <div className="flex items-center text-gray-500 text-sm">
              <time dateTime={post.date}>Published on {formatDate(post.date)}</time>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              {renderMarkdown(post.content)}
            </div>
          </article>

          {/* Back to Updates */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <a href="/updates" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              ← Back to all updates
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
