"use client"

import { useState } from "react"
import type { UpdatePost } from "./data"
import UpdateCard from "../components/update-card"
import Header from "../components/header"
import Footer from "../components/footer"

interface UpdatesListingClientProps {
  posts: UpdatePost[]
}

export default function UpdatesListingClient({ posts }: UpdatesListingClientProps) {
  const [selectedType, setSelectedType] = useState<string>("all")

  const filteredPosts = selectedType === "all" ? posts : posts.filter((post) => post.type === selectedType)

  const getTypeCount = (type: string) => {
    return posts.filter((post) => post.type === type).length
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

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-gray-900 to-black py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Product Updates</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Stay up to date with the latest features, improvements, and bug fixes for Pika Voice Assistant.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Stats Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800 text-center">
              <div className="text-2xl font-bold text-white">{posts.length}</div>
              <div className="text-sm text-gray-400">Total Updates</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800 text-center">
              <div className="text-2xl font-bold text-green-400">{getTypeCount("feature")}</div>
              <div className="text-sm text-gray-400">✨ Features</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800 text-center">
              <div className="text-2xl font-bold text-red-400">{getTypeCount("bugfix")}</div>
              <div className="text-sm text-gray-400">🐛 Bug Fixes</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800 text-center">
              <div className="text-2xl font-bold text-blue-400">{getTypeCount("improvement")}</div>
              <div className="text-sm text-gray-400">⚡ Improvements</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800 text-center">
              <div className="text-2xl font-bold text-yellow-400">{getTypeCount("security")}</div>
              <div className="text-sm text-gray-400">🔒 Security</div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            <button
              onClick={() => setSelectedType("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedType === "all" ? "bg-white text-black" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              All Updates ({posts.length})
            </button>
            <button
              onClick={() => setSelectedType("feature")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedType === "feature" ? "bg-green-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {getTypeIcon("feature")} Features ({getTypeCount("feature")})
            </button>
            <button
              onClick={() => setSelectedType("bugfix")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedType === "bugfix" ? "bg-red-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {getTypeIcon("bugfix")} Bug Fixes ({getTypeCount("bugfix")})
            </button>
            <button
              onClick={() => setSelectedType("improvement")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedType === "improvement"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {getTypeIcon("improvement")} Improvements ({getTypeCount("improvement")})
            </button>
            <button
              onClick={() => setSelectedType("security")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedType === "security" ? "bg-yellow-500 text-black" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {getTypeIcon("security")} Security ({getTypeCount("security")})
            </button>
          </div>

          {/* Updates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <UpdateCard key={post.id} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg">No updates found for the selected filter.</div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
