"use client"

import { motion } from "framer-motion"
import Header from "../components/header"

export default function TermsOfService() {
  return (

      <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-20">
            <Header />
        <section className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-gray-400 text-sm">Last updated: August 2025</p>
          </motion.div>

        <motion.div
          className="text-gray-300 space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <section>
            <h2 className="text-2xl font-bold mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Pika AI Assistant, you agree to be legally bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">2. Services Provided</h2>
            <p>
              Pika AI Assistant offers an AI-powered virtual assistant service that includes voice commands, text inputs, app automation, and search functionality. The service integrates with third-party APIs like Google Gemini and YouTube API to deliver AI responses and media control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">3. User Account and Authentication</h2>
            <p>
              You may be required to sign in using Google OAuth2 for authentication purposes. You agree to provide accurate and current information during the sign-up process. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">4. User Data and Privacy</h2>
            <p>
              We collect and process certain user information, including but not limited to:
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Google OAuth2 authentication data (name, email, profile picture)</li>
              <li>Voice commands and text inputs(Only First command)</li>
              <li>System usage patterns and preferences</li>
              <li>App launch history</li>
            </ul>
            <p className="mt-2">
              Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">5. User Responsibilities</h2>
            <p>
              You agree to use Pika AI Assistant only for lawful purposes and in accordance with these Terms. You must not:
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Use the service for any illegal, harmful, or abusive activities</li>
              <li>Attempt to interfere with the security or functionality of the app or website</li>
              <li>Upload or transmit any viruses, malware, or harmful code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">6. Intellectual Property</h2>
            <p>
              All content, trademarks, logos, and software associated with Pika AI Assistant are the property of Pika AI Team or its licensors. You agree not to copy, modify, distribute, or create derivative works without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">7. Third-Party Services</h2>
            <p>
              Our app uses third-party APIs such as Google Gemini API and YouTube API and also Google Calender API. We Use google calender API to create and schedule new events based on your needs and we create the new events on primary Calender. Use of these services is subject to their respective terms and privacy policies. We do not control and are not responsible for these third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">8. Disclaimer of Warranties</h2>
            <p>
              Pika AI Assistant is provided “as is” without warranties of any kind. We do not guarantee the accuracy, reliability, or availability of the service. Use at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Pika AI Team is not liable for any direct, indirect, incidental, or consequential damages resulting from your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">10. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the service at any time without notice for violations of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">11. Changes to Terms</h2>
            <p>
              We may update these Terms of Service from time to time. Continued use of the service after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">12. Contact Information</h2>
            <p>
              If you have any questions or concerns about these Terms, please contact us at <a href="/support" className="text-cyan-400 underline">our support page</a>.
            </p>
          </section>
        </motion.div>
      </section>
    </div>
  )
}
