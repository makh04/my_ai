export interface UpdatePost {
  id: string
  title: string
  description: string
  date: string
  version?: string
  type: "feature" | "bugfix" | "improvement" | "security"
  slug: string
  content: string
}

export const updatePosts: UpdatePost[] = [
  {
    id: "2",
    title: "Run Any App + Session History",
    description: "Now you can run pretty much any app and track your session history!",
    date: "2025-09-17",
    version: "v1",
    type: "feature",
    slug: "run-any-app-session-history",
    content: `
      ## What's New: Run Any App & Track Session History

      Big news! Now you can launch almost any app directly through the system. No more hopping between screens just to start something up. Plus, we’ve added a cool feature to keep track of your session history — so you can easily pick up where you left off.

      It's pretty straightforward, but super useful for multitaskers and people who love to keep things organized.

      Features:
      - Launch pretty much any app directly from Pika AI
      - Session history, In every session pika remember previous command
      - Quick resume when switching between apps

      Hope this makes your workflow smoother! As always, let us know if you have any thoughts or suggestions.
    `,
  },
  {
    id: "1",
    title: "App Closing Bug Fix",
    description: "Fixed issue where the app wouldn’t close properly.",
    date: "2025-09-16",
    version: "v1",
    type: "bugfix",
    slug: "app-closing-bug-fix",
    content: `
      ## Bug Fix: App Closing Issue

      We know this one was a bit annoying, but we’ve fixed the issue where the app wouldn’t close properly. You should now be able to exit out of Pika without any weirdness.

      It’s a small fix, but it should make a big difference when you're done using the app and ready to move on to something else.

      Thanks for your patience on this one!
    `,
  },
];
// Make sure this function name matches what you're importing
export function getUpdatePost(slug: string): UpdatePost | undefined {
  return updatePosts.find((post) => post.slug === slug)
}

export function getAllUpdatePosts(): UpdatePost[] {
  return updatePosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getUpdatePostsByType(type: UpdatePost["type"]): UpdatePost[] {
  return updatePosts.filter((post) => post.type === type)
}
