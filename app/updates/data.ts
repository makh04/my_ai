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
    id: "3",
    title: "Custom Automation according to prompt-Pika AI ",
    description: "Now you can automate every possible task which can be done by keyboard and According to your wish.",
    date: "2025-09-19",
    version: "v1",
    type: "feature",
    slug: "full_custom_automation",
    content: `
      ## What's New: Make custom automation command in your wish

      Big news! Now you can make your own command Like telling pika to open chrome then type .... then press enter and much more custom commands. It is like you can give details information to Pika AI voice assistant. and there is no limit of how many step you tell to Pika.assistant

      So, basically you can perform all task that is possible to do with keyboard. You can break the process and tell him to do this-this. For example you can say "Pika do this then click this then press this then again to this then repeat this step multiple times". This is cool right ?

      Let me show you some more examples:

      Examples,

      1) Pika open chrome then type the link of instagram's reels page link then press enter then press down button for scrolling and make the time interval for every reels and scroll 60 second and after watching 20 reels turn ths tab off
      BOOM ! Now pika will let you watch 10 reels then turn the tab off

      It's pretty straightforward, but super useful for multitaskers and people who love to keep things organized. And you can make more custom task like this

      Features:
      - Automate about all the possible task
      - Save the same prompt and use it as custom automation
      - Make your own function which would make it your own personal AI Assistant

      Hope this makes your workflow smoother! As always, let us know if you have any thoughts or suggestions.
    `,
  },
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
