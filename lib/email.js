import nodemailer from 'nodemailer';

/**
 * Email service using Nodemailer with Gmail SMTP
 */

let transporter = null;

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

/**
 * Send verification email
 */
export async function sendVerificationEmail({ to, name, verificationUrl }) {
  const transporter = getTransporter();

  const mailOptions = {
    from: `"Binary 1702" <${process.env.GMAIL_USER}>`,
    to,
    subject: 'Your Digital Business Card is Ready',
    text: `Hi ${name},

Click the link below to view your QR code:

${verificationUrl}

This link expires in 15 minutes.

If you didn't request this, ignore this email.

---
Binary 1702`,
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
          .container {
            background: #FAF9F7;
            padding: 40px;
            border-radius: 8px;
          }
          h1 {
            color: #2D2D2D;
            font-size: 24px;
            margin-bottom: 20px;
          }
          p {
            margin-bottom: 20px;
            color: #2D2D2D;
          }
          .button {
            display: inline-block;
            background: #6B8F71;
            color: #FAF9F7;
            padding: 14px 28px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 500;
            margin: 20px 0;
          }
          .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            font-size: 14px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Preparing your digital business card</h1>
          <p>Hi ${name},</p>
          <p>Click the button below to view your QR code:</p>
          <a href="${verificationUrl}" class="button">View My QR Code</a>
          <p>Or copy and paste this link into your browser:</p>
          <p style="word-break: break-all; color: #666; font-size: 14px;">${verificationUrl}</p>
          <div class="footer">
            <p>This link expires in 15 minutes.</p>
            <p>If you didn't request this, please ignore this email.</p>
            <p>— Binary 1702</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email send error:', error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
}
