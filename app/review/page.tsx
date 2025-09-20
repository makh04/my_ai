import type { Metadata } from "next"
import Header from "../components/header"
import Footer from "../components/footer"

export const metadata: Metadata = {
  title: "Review - Share Your Feedback | Pika AI",
  description: "Share your feedback and help us improve Pika AI. Your review matters to us.",
  keywords: "review, feedback, Pika AI, user experience, testimonial",
  openGraph: {
    title: "Review - Share Your Feedback | Pika AI",
    description: "Share your feedback and help us improve Pika AI. Your review matters to us.",
    type: "website",
  },
}

export default function ReviewPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Share Your Feedback
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Your opinion matters to us. Help us improve Pika AI by sharing your experience, suggestions, and feedback.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span>Your feedback drives our innovation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Review Form Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Review Form</h2>
                <p className="text-gray-400">
                  Please take a moment to share your thoughts about Pika AI. Your feedback helps us create a better
                  experience for everyone.
                </p>
              </div>

              {/* Google Form Embed */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdndbOSDeNFt9IziZ0Q53tW0mx92wzocnUkuU0Qd7fBn7UU_A/viewform"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full"
                  title="Pika AI Feedback Form"
                >
                  Loading…
                </iframe>
              </div>

              {/* Alternative Link */}
              <div className="text-center mt-6">
                <p className="text-gray-400 mb-4">Having trouble with the form above?</p>
                <a
                  href="https://forms.gle/yCEQwPU8LKRtq4xdA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Open Form in New Tab
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Your Feedback Matters */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Why Your Feedback Matters</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Improve Performance</h3>
                <p className="text-gray-400">Your feedback helps us optimize Pika AI's performance and accuracy.</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">New Features</h3>
                <p className="text-gray-400">Your suggestions guide our development of new and exciting features.</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Better Experience</h3>
                <p className="text-gray-400">Help us create a more intuitive and user-friendly experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
