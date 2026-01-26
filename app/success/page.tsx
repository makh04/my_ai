'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')

  useEffect(() => {
    if (sessionId) {
      // Here you can verify the session with Stripe if needed
      setStatus('success')
    } else {
      setStatus('error')
    }
  }, [sessionId])

  if (status === 'loading') {
    return <div className="container mx-auto px-4 py-8 text-center">Loading...</div>
  }

  if (status === 'error') {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Payment Failed</h1>
        <p>Please try again or contact support.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold text-green-500 mb-4">Payment Successful!</h1>
      <p className="text-lg mb-4">Thank you for subscribing to our service.</p>
      <p>Your subscription is now active.</p>
    </div>
  )
}