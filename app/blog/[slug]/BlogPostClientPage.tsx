"use client"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { CalendarDays, User } from "lucide-react"
import Image from "next/image"
import Head from "next/head"
import { blogPosts } from "../data"
import Header from "../../components/header"
import BlogFooter from "../../components/blog-footer"
import SuggestedPosts from "../../components/suggested-posts"
import CookieBanner from "../../components/cookie-banner"

interface BlogPostPageProps {
  params: { slug: string }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Prepare suggested posts data - using actual blog posts data
  const suggestedPosts = blogPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    image: p.image,
    category: "AI & Tech",
    readTime: "5 min read",
    isPopular: Math.random() > 0.7,
    isRecent: Math.random() > 0.8,
  }))

  // Generate structured data for the blog post
  const generateStructuredData = () => {
    const baseUrl = "https://pikaai.vercel.app"
    const isHowToPost = post.title.toLowerCase().includes("how to") || post.content.includes("step")

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
        name: "Pika AI Blog",
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/logo.png`,
        },
      },
      datePublished: post.date,
      dateModified: post.date,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${baseUrl}/blog/${post.slug}`,
      },
      keywords: post.keywords.join(", "),
      articleSection: "Technology",
      wordCount: post.content.replace(/<[^>]*>/g, "").split(" ").length,
      inLanguage: "en-US",
      url: `${baseUrl}/blog/${post.slug}`,
    }

    // Add HowTo specific properties if it's a how-to post
    if (isHowToPost) {
      return {
        ...baseSchema,
        name: post.title,
        totalTime: "PT10M",
        supply: [
          {
            "@type": "HowToSupply",
            name: "Computer or mobile device",
          },
          {
            "@type": "HowToSupply",
            name: "Internet connection",
          },
        ],
        tool: [
          {
            "@type": "HowToTool",
            name: "Web browser",
          },
        ],
        step: [
          {
            "@type": "HowToStep",
            name: "Read the article",
            text: "Follow the step-by-step instructions provided in the article",
            url: `${baseUrl}/blog/${post.slug}#content`,
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
                  <time dateTime={post.date}>{post.date}</time>
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

            {/* Ad Placeholder - Sidebar/Inline */}
            <div className="mt-12 p-6 bg-gray-800/50 border border-gray-700 rounded-xl text-center text-gray-400 text-sm">
              <span className="sr-only">Advertisement area</span>
              <p>Relevant Ad Content Here (e.g., 300x250)</p>
            </div>
          </div>
        </section>

        {/* Suggested Posts */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SuggestedPosts
            posts={suggestedPosts}
            currentSlug={post.slug}
            basePath="/blog"
            title="More AI & Tech Articles"
          />
        </div>

        <BlogFooter />
        <CookieBanner />
      </div>
    </>
  )
}
