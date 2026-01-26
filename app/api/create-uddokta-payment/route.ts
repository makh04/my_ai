import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { full_name, email, amount, payment_method, plan } = await request.json()

    const payload = {
      full_name,
      email,
      amount: parseFloat(amount).toFixed(2),
      metadata: {
        plan,
        type: 'subscription',
      },
      redirect_url: `${request.nextUrl.origin}/success`,
      cancel_url: `${request.nextUrl.origin}/subscribe`,
      webhook_url: `${request.nextUrl.origin}/api/webhook/uddokta`,
      payment_method, // e.g., 'paypal', 'stripe'
    }

    const response = await fetch(process.env.UDDOKTAPAY_BASE_URL!, {
      method: 'POST',
      headers: {
        'RT-UDDOKTAPAY-API-KEY': process.env.UDDOKTAPAY_API_KEY!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()

    if (data.invoice_id) {
      return NextResponse.json({ payment_url: data.payment_url, invoice_id: data.invoice_id })
    } else {
      return NextResponse.json({ error: 'Failed to create payment' }, { status: 400 })
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}