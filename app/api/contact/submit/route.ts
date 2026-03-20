import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { contactFormSchema } from '@/lib/validation';
import { sendContactNotification, sendContactConfirmation } from '@/lib/contact-emails';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate form data
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationResult.error.format() },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Insert into database
    const result = await sql`
      INSERT INTO contact_leads (
        full_name,
        business_name,
        email,
        phone,
        service_interest,
        plan_interest,
        message,
        referral_source,
        status
      )
      VALUES (
        ${data.fullName},
        ${data.businessName},
        ${data.email},
        ${data.phone},
        ${data.serviceInterest},
        ${data.planInterest || null},
        ${data.message},
        ${data.referralSource || null},
        'new'
      )
      RETURNING id, created_at
    `;

    const lead = result.rows[0];

    // Send notification emails (don't fail if emails fail)
    try {
      await Promise.all([
        sendContactNotification(data),
        sendContactConfirmation(data.email, data.fullName.split(' ')[0])
      ]);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if emails fail - lead is already saved
    }

    return NextResponse.json({
      success: true,
      leadId: lead.id,
      message: 'Thank you for contacting us. We\'ll be in touch within 24 hours.'
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
