import { NextResponse } from 'next/server'
import { createNotionPage, title, richText } from '@/lib/notion'
import { sendSlackMessage } from '@/lib/slack'

interface ContactData {
  name: string
  business: string
  email: string
  website?: string
  help: string
  notWorking: string
  tools?: string
  timeline?: string
  budget?: string
}

export async function POST(request: Request) {
  try {
    const body: ContactData = await request.json()

    if (!body.name || !body.business || !body.email || !body.help || !body.notWorking) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    let delivered = false

    if (process.env.SLACK_WEBHOOK_URL) {
      try {
        await sendSlackMessage(process.env.SLACK_WEBHOOK_URL, {
          text: '📬 New Contact Form Lead',
          attachments: [
            {
              color: '#7C3AED',
              fields: [
                { title: 'Name', value: body.name, short: true },
                { title: 'Business', value: body.business, short: true },
                { title: 'Email', value: body.email, short: true },
                { title: 'Website', value: body.website || '—', short: true },
                { title: 'Help With', value: body.help, short: true },
                { title: 'Timeline', value: body.timeline || '—', short: true },
                { title: 'Budget', value: body.budget || '—', short: true },
                { title: 'Current Tools', value: body.tools || '—', short: true },
                { title: 'Not Working', value: body.notWorking, short: false },
              ],
              footer: 'Binary 1702 Contact',
              ts: Math.floor(Date.now() / 1000),
            },
          ],
        })
        delivered = true
      } catch (slackError) {
        console.error('Slack notification failed:', slackError)
      }
    }

    // Optional Notion CRM save — create a database with these properties and
    // set NOTION_CONTACT_DB_ID to enable.
    if (process.env.NOTION_CONTACT_DB_ID) {
      try {
        await createNotionPage(process.env.NOTION_CONTACT_DB_ID, {
          Name: { title: title(body.name) },
          Business: { rich_text: richText(body.business) },
          Email: { email: body.email },
          Website: { rich_text: richText(body.website || '') },
          'Help With': { select: { name: body.help } },
          'Not Working': { rich_text: richText(body.notWorking) },
          Tools: { rich_text: richText(body.tools || '') },
          Timeline: body.timeline ? { select: { name: body.timeline } } : undefined,
          Budget: body.budget ? { select: { name: body.budget } } : undefined,
          Status: { status: { name: 'New Lead' } },
        })
        delivered = true
      } catch (notionError) {
        console.error('Notion save failed:', notionError)
      }
    }

    if (!delivered) {
      console.error('Contact lead received but no delivery channel is configured:', body)
      return NextResponse.json(
        { error: 'Message could not be delivered right now' },
        { status: 503 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
