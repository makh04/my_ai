import { notFound } from "next/navigation"
import { getUpdatePost, getAllUpdatePosts } from "../data"
import UpdatePostClientPage from "./UpdatePostClientPage"

interface UpdatePostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllUpdatePosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: UpdatePostPageProps) {
  const { slug } = await params
  const post = getUpdatePost(slug)

  if (!post) {
    return {
      title: "Update Not Found",
    }
  }

  return {
    title: `${post.title} - Pika Voice Assistant Updates`,
    description: post.description,
    openGraph: {
      title: `${post.title} - Pika Voice Assistant Updates`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  }
}

export default async function UpdatePostPage({ params }: UpdatePostPageProps) {
  const { slug } = await params
  const post = getUpdatePost(slug)

  if (!post) {
    notFound()
  }

  return <UpdatePostClientPage post={post} />
}
