"use client"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { CalendarDays, User, Tag, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { gamingPosts } from "../data"
import Header from "../../components/header"
import BlogFooter from "../../components/blog-footer"
import ResponsiveAd from "../../components/responsive-ad"
import SuggestedPosts from "../../components/suggested-posts"
import CookieBanner from "../../components/cookie-banner"

interface GamingPostPageProps {
  params: { slug: string }
}

export default function GamingPostPage({ params }: GamingPostPageProps) {
  const post = gamingPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Prepare suggested posts data - using actual gaming posts data
  const suggestedPosts = gamingPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    image: p.image,
    category: p.category,
    readTime: "6 min read",
    isPopular: Math.random() > 0.6,
    isRecent: Math.random() > 0.7,
  }))

  // Generate structured data for the gaming post
  const generateStructuredData = () => {
    const baseUrl = "https://pikaai.vercel.app"
    const isHowToPost =
      post.title.toLowerCase().includes("how to") ||
      post.title.toLowerCase().includes("guide") ||
      post.content.includes("step")

    const baseSchema = {
      "@context": "https://schema.org",
      "@type": isHowToPost ? "HowTo" : "BlogPosting",
      headline: post.title,
      description: post.description,
      image: post.image ? `${baseUrl}${post.image}` : `${baseUrl}/og-image.jpg`,
      author: {
        "@type": "Person",
        name: post.author,
        url: `${baseUrl}/about`,
      },
      publisher: {
        "@type": "Organization",
        name: "Pika AI Gaming",
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/logo.png`,
        },
      },
      datePublished: post.date,
      dateModified: post.date,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${baseUrl}/gaming/${post.slug}`,
      },
      keywords: post.keywords.join(", "),
      articleSection: "Gaming",
      wordCount: post.content.replace(/<[^>]*>/g, "").split(" ").length,
      inLanguage: "en-US",
      url: `${baseUrl}/gaming/${post.slug}`,
      genre: ["Gaming", "Technology", "AI"],
      about: {
        "@type": "Thing",
        name: post.category,
      },
    }

    // Add HowTo specific properties if it's a how-to/guide post
    if (isHowToPost) {
      return {
        ...baseSchema,
        name: post.title,
        totalTime: "PT15M", // 15 minutes reading time for gaming guides
        supply: [
          {
            "@type": "HowToSupply",
            name: "Gaming computer or console",
          },
          {
            "@type": "HowToSupply",
            name: "Internet connection",
          },
        ],
        tool: [
          {
            "@type": "HowToTool",
            name: "Gaming hardware",
          },
          {
            "@type": "HowToTool",
            name: "Gaming software",
          },
        ],
        step: [
          {
            "@type": "HowToStep",
            name: "Follow the gaming guide",
            text: "Follow the comprehensive gaming instructions provided in the article",
            url: `${baseUrl}/gaming/${post.slug}#content`,
          },
        ],
      }
    }

    return baseSchema
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData()),
          }}
        />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <Header />

        {/* Header */}
        <section className="relative py-12 overflow-hidden pt-24">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/30 to-pink-900/30" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Back Button */}
              <Link
                href="/gaming"
                className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Gaming Hub</span>
              </Link>

              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  {post.category}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                    {post.title}
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-4">{post.description}</p>
                <div className="flex items-center justify-center text-gray-500 text-sm space-x-4">
                  <div className="flex items-center space-x-1">
                    <CalendarDays className="w-4 h-4" />
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Tag className="w-4 h-4" />
                    <span>{post.category}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gaming Post Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3 max-w-3xl">
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

                <motion.article
                  className="prose prose-invert max-w-none text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  id="content"
                >
                  {/* Dynamically render HTML content */}
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </motion.article>

                {/* In-content Ad */}
                <div className="my-12">
                  <ResponsiveAd size="rectangle" />
                </div>

                {/* Related Posts */}
                <div className="mt-16 p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Related Gaming Posts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {gamingPosts
                      .filter((p) => p.slug !== post.slug)
                      .slice(0, 2)
                      .map((relatedPost) => (
                        <Link
                          key={relatedPost.slug}
                          href={`/gaming/${relatedPost.slug}`}
                          className="group p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors"
                        >
                          <div className="text-sm text-purple-400 mb-2">{relatedPost.category}</div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors mb-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-gray-400 text-sm line-clamp-2">{relatedPost.description}</p>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                {/* Sidebar Ad */}
                <ResponsiveAd size="sidebar" />

                {/* Gaming Categories */}
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Gaming Categories</h3>
                  <div className="space-y-2">
                    {["AI Gaming", "Gaming Trends", "Gaming Hardware", "Esports", "Game Reviews"].map(
                      (category, index) => (
                        <div
                          key={index}
                          className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer py-1"
                        >
                          {category}
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Gaming Tools CTA */}
                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Enhance Your Gaming</h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Take your gaming to the next level with AI-powered gaming assistants and tools.
                  </p>
                  <a
                    href="/"
                    className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 w-full text-center"
                  >
                    Try Pika AI Gaming
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Suggested Posts */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SuggestedPosts
            posts={suggestedPosts}
            currentSlug={post.slug}
            basePath="/gaming"
            title="More Gaming Content"
          />
        </div>

        <BlogFooter />
        <CookieBanner />
      </div>
    </>
  )
}
