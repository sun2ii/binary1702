import { NextResponse } from 'next/server'
import { createNotionPage, title, richText } from '@/lib/notion'
import { sendSlackMessage } from '@/lib/slack'

interface IntakeData {
  name: string
  email: string
  phone: string
  business: string
  teamSize: string
  revenue: string
  biggestProblem: string
  timeline: string
}

export async function POST(request: Request) {
  try {
    const body: IntakeData = await request.json()

    // Validation
    if (!body.name || !body.email || !body.phone || !body.business ||
        !body.teamSize || !body.revenue || !body.biggestProblem || !body.timeline) {
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

    // Send to Slack if webhook is configured
    if (process.env.SLACK_WEBHOOK_URL) {
      try {
        await sendSlackMessage(process.env.SLACK_WEBHOOK_URL, {
          text: '🔧 New Operations Lead',
          attachments: [
            {
              color: '#5865F2',
              fields: [
                { title: 'Name', value: body.name, short: true },
                { title: 'Business', value: body.business, short: true },
                { title: 'Email', value: body.email, short: true },
                { title: 'Phone', value: body.phone, short: true },
                { title: 'Team Size', value: body.teamSize, short: true },
                { title: 'Revenue', value: body.revenue, short: true },
                { title: 'Timeline', value: body.timeline, short: true },
                { title: 'Biggest Problem', value: body.biggestProblem, short: false },
              ],
              footer: 'Binary 1702 Operations',
              ts: Math.floor(Date.now() / 1000),
            },
          ],
        })
        console.log('Operations lead sent to Slack:', body.name)
      } catch (slackError) {
        console.error('Slack notification failed:', slackError)
        // Continue anyway - Slack failure shouldn't block the submission
      }
    }

    // Save to Notion if database ID is configured
    if (process.env.NOTION_OPERATIONS_DB_ID) {
      try {
        const properties = {
          Name: { title: title(body.name) },
          Email: { email: body.email },
          Phone: { phone_number: body.phone },
          Business: { rich_text: richText(body.business) },
          'Team Size': { select: { name: body.teamSize } },
          Revenue: { select: { name: body.revenue } },
          'Biggest Problem': { rich_text: richText(body.biggestProblem) },
          Timeline: { select: { name: body.timeline } },
          Status: { status: { name: 'New Lead' } }
        }

        await createNotionPage(process.env.NOTION_OPERATIONS_DB_ID, properties)
        console.log('Operations lead saved to Notion:', body.name)
      } catch (notionError) {
        console.error('Notion save failed:', notionError)
        // Continue anyway - Notion failure shouldn't block if Slack succeeded
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Intake form submitted successfully'
    })

  } catch (error) {
    console.error('Operations intake form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
