import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

const prices = {
  price_basic: 'price_1234567890', // Replace with actual price IDs from Stripe
  price_pro: 'price_0987654321',
  price_enterprise: 'price_1122334455',
}

export async function POST(request: NextRequest) {
  try {
    const { priceId } = await request.json()

    if (!prices[priceId as keyof typeof prices]) {
      return NextResponse.json({ error: 'Invalid price ID' }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: prices[priceId as keyof typeof prices],
          quantity: 1,
        },
      ],
      success_url: `${request.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/subscribe`,
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}