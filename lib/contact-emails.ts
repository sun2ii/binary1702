import nodemailer from 'nodemailer';

/**
 * Email service for contact form submissions
 */

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });
  }
  return transporter;
}

interface ContactFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  serviceInterest: string;
  planInterest?: string;
  message: string;
  referralSource?: string;
}

/**
 * Send notification email to ben@binary1702.com
 */
export async function sendContactNotification(data: ContactFormData) {
  const transporter = getTransporter();

  const planText = data.planInterest ? `\nPlan Interest: ${data.planInterest}` : '';
  const referralText = data.referralSource ? `\nReferral Source: ${data.referralSource}` : '';

  const mailOptions = {
    from: `"Binary 1702 Website" <${process.env.GMAIL_USER}>`,
    to: 'ben@binary1702.com',
    subject: `New Lead: ${data.businessName} - ${data.serviceInterest}`,
    text: `New contact form submission:

Name: ${data.fullName}
Business: ${data.businessName}
Email: ${data.email}
Phone: ${data.phone}

Service Interest: ${data.serviceInterest}${planText}

Message:
${data.message}
${referralText}

Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PST`,

    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
            color: #2D2D2D;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: #6B8F71;
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
          }
          .content {
            background: #FAF9F7;
            padding: 30px;
            border-radius: 0 0 8px 8px;
          }
          .field {
            margin-bottom: 20px;
          }
          .label {
            font-weight: 600;
            color: #52525B;
            font-size: 14px;
            margin-bottom: 5px;
          }
          .value {
            color: #2D2D2D;
            font-size: 16px;
          }
          .message {
            background: white;
            padding: 15px;
            border-radius: 6px;
            margin-top: 10px;
            white-space: pre-wrap;
          }
          .footer {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #E4E4E7;
            font-size: 14px;
            color: #71717A;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h2 style="margin: 0;">New Lead from Website</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name</div>
            <div class="value">${data.fullName}</div>
          </div>

          <div class="field">
            <div class="label">Business</div>
            <div class="value">${data.businessName}</div>
          </div>

          <div class="field">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>

          <div class="field">
            <div class="label">Phone</div>
            <div class="value"><a href="tel:${data.phone.replace(/\D/g, '')}">${data.phone}</a></div>
          </div>

          <div class="field">
            <div class="label">Service Interest</div>
            <div class="value">${data.serviceInterest}</div>
          </div>

          ${data.planInterest ? `
          <div class="field">
            <div class="label">Plan Interest</div>
            <div class="value">${data.planInterest}</div>
          </div>
          ` : ''}

          <div class="field">
            <div class="label">Message</div>
            <div class="message">${data.message}</div>
          </div>

          ${data.referralSource ? `
          <div class="field">
            <div class="label">Referral Source</div>
            <div class="value">${data.referralSource}</div>
          </div>
          ` : ''}

          <div class="footer">
            Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PST
          </div>
        </div>
      </body>
      </html>
    `
  };

  await transporter.sendMail(mailOptions);
}

/**
 * Send confirmation email to customer
 */
export async function sendContactConfirmation(email: string, firstName: string) {
  const transporter = getTransporter();

  const mailOptions = {
    from: `"Binary 1702" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: 'Thank you for contacting Binary 1702',
    text: `Hi ${firstName},

Thank you for reaching out to Binary 1702 LLC. We received your message and will get back to you within 24 hours.

In the meantime, feel free to email us directly at ben@binary1702.com or call +1 916-595-7155.

Best regards,
Ben Basuni
Founder, Binary 1702 LLC

---
Binary 1702 LLC
Orangevale, California
ben@binary1702.com
+1 916-595-7155`,

    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
            color: #2D2D2D;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: #6B8F71;
            color: white;
            padding: 30px 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .content {
            background: #FAF9F7;
            padding: 40px 30px;
            border-radius: 0 0 8px 8px;
          }
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #E4E4E7;
            font-size: 14px;
            color: #71717A;
          }
          a {
            color: #6B8F71;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 style="margin: 0; font-size: 24px;">Binary 1702 LLC</h1>
        </div>
        <div class="content">
          <p>Hi ${firstName},</p>

          <p>Thank you for reaching out to Binary 1702 LLC. We received your message and will get back to you within 24 hours.</p>

          <p>In the meantime, feel free to email us directly at <a href="mailto:ben@binary1702.com">ben@binary1702.com</a> or call <a href="tel:+19165957155">+1 916-595-7155</a>.</p>

          <p>Best regards,<br>
          <strong>Ben Basuni</strong><br>
          Founder, Binary 1702 LLC</p>

          <div class="footer">
            <strong>Binary 1702 LLC</strong><br>
            Orangevale, California<br>
            <a href="mailto:ben@binary1702.com">ben@binary1702.com</a><br>
            <a href="tel:+19165957155">+1 916-595-7155</a>
          </div>
        </div>
      </body>
      </html>
    `
  };

  await transporter.sendMail(mailOptions);
}
