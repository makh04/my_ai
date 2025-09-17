import { getAllUpdatePosts } from "./data"
import UpdatesListingClient from "./UpdatesListingClient"

export const metadata = {
  title: "Product Updates - Pika Voice Assistant",
  description: "Stay up to date with the latest features, improvements, and bug fixes for Pika Voice Assistant.",
}

export default function UpdatesPage() {
  const posts = getAllUpdatePosts()

  return <UpdatesListingClient posts={posts} />
}
