'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function SubscribePage() {
  const [loading, setLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'uddokta-paypal' | 'uddokta-stripe'>('stripe')
  const [formData, setFormData] = useState({ full_name: '', email: '' })

  const handleSubscribe = async (priceId: string) => {
    setLoading(true)
    try {
      if (paymentMethod === 'stripe') {
        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ priceId }),
        })

        const { sessionId } = await response.json()
        const stripe = await stripePromise
        await stripe!.redirectToCheckout({ sessionId })
      } else {
        const amount = priceId === 'price_basic' ? '9.99' : priceId === 'price_pro' ? '19.99' : '49.99'
        const plan = priceId === 'price_basic' ? 'basic' : priceId === 'price_pro' ? 'pro' : 'enterprise'
        const method = paymentMethod === 'uddokta-paypal' ? 'paypal' : 'stripe'

        const response = await fetch('/api/create-uddokta-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            amount,
            payment_method: method,
            plan,
          }),
        })

        const { payment_url } = await response.json()
        if (payment_url) {
          window.location.href = payment_url
        }
      }
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Subscribe to Our Service</h1>

      <div className="mb-6">
        <label className="block mb-2">Payment Method:</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value as any)}
          className="border rounded px-3 py-2"
        >
          <option value="stripe">Stripe</option>
          <option value="uddokta-paypal">PayPal (via UddoktaPay)</option>
          <option value="uddokta-stripe">Stripe (via UddoktaPay)</option>
        </select>
      </div>

      {(paymentMethod === 'uddokta-paypal' || paymentMethod === 'uddokta-stripe') && (
        <div className="mb-6">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            className="border rounded px-3 py-2 mr-4"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border rounded px-3 py-2"
          />
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Basic Plan</h2>
          <p className="text-2xl font-bold mb-4">$9.99/month</p>
          <ul className="mb-6">
            <li>Feature 1</li>
            <li>Feature 2</li>
          </ul>
          <button
            onClick={() => handleSubscribe('price_basic')}
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Subscribe'}
          </button>
        </div>
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Pro Plan</h2>
          <p className="text-2xl font-bold mb-4">$19.99/month</p>
          <ul className="mb-6">
            <li>All Basic features</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <button
            onClick={() => handleSubscribe('price_pro')}
            disabled={loading}
            className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Subscribe'}
          </button>
        </div>
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Enterprise Plan</h2>
          <p className="text-2xl font-bold mb-4">$49.99/month</p>
          <ul className="mb-6">
            <li>All Pro features</li>
            <li>Feature 5</li>
            <li>Priority support</li>
          </ul>
          <button
            onClick={() => handleSubscribe('price_enterprise')}
            disabled={loading}
            className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Subscribe'}
          </button>
        </div>
      </div>
    </div>
  )
}