import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const headerApi = request.headers.get('RT-UDDOKTAPAY-API-KEY')
    if (headerApi !== process.env.UDDOKTAPAY_API_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const rawData = await request.text()
    const data = JSON.parse(rawData)

    // Process the webhook data
    console.log('UddoktaPay Webhook:', data)

    // Handle subscription activation, etc.
    if (data.status === 'COMPLETED') {
      // Activate subscription for user
      // data.metadata.user_id, etc.
    }

    return NextResponse.json({ message: 'Webhook processed' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}