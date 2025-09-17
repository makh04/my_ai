import Link from "next/link"
import type { UpdatePost } from "../updates/data"
import { Calendar, Tag } from "lucide-react"

interface UpdateCardProps {
  post: UpdatePost
}

export default function UpdateCard({ post }: UpdateCardProps) {
  const getTypeColor = (type: UpdatePost["type"]) => {
    switch (type) {
      case "feature":
        return "bg-green-500"
      case "bugfix":
        return "bg-red-500"
      case "improvement":
        return "bg-blue-500"
      case "security":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const getTypeIcon = (type: UpdatePost["type"]) => {
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <Link href={`/updates/${post.slug}`}>
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:bg-gray-800/50 transition-all duration-300 hover:border-gray-700 group">
        <div className="flex items-center justify-between mb-3">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white ${getTypeColor(post.type)}`}
          >
            <span className="mr-1">{getTypeIcon(post.type)}</span>
            {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
          </span>
          {post.version && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300">
              <Tag className="w-3 h-3 mr-1" />
              {post.version}
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-300 mb-4 line-clamp-2">{post.description}</p>

        <div className="flex items-center text-gray-400 text-sm">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{formatDate(post.date)}</span>
        </div>
      </div>
    </Link>
  )
}
