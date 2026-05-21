import { NextResponse } from 'next/server'
import { createNotionPage, title, richText } from '@/lib/notion'

interface IntakeData {
  name: string
  email: string
  phone: string
  business: string
  website?: string
  biggestProblem: string
  timeline: string
}

export async function POST(request: Request) {
  try {
    const body: IntakeData = await request.json()

    // Validation
    if (!body.name || !body.email || !body.phone || !body.business || !body.biggestProblem || !body.timeline) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Save to Notion database
    const properties = {
      Name: { title: title(body.name) },
      Email: { email: body.email },
      Phone: { phone_number: body.phone },
      Business: { rich_text: richText(body.business) },
      Website: body.website ? { url: body.website } : { url: null },
      'Biggest Problem': { rich_text: richText(body.biggestProblem) },
      Timeline: { select: { name: body.timeline } },
      Status: { status: { name: 'New Lead' } }
    }

    await createNotionPage(process.env.NOTION_LETIP_DB_ID!, properties)

    console.log('LeTip lead saved to Notion:', body.name)

    return NextResponse.json({
      success: true,
      message: 'Intake form submitted successfully'
    })

  } catch (error) {
    console.error('Intake form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
