# Binary 1702 QR Profile Service

Simple QR code generator with email verification.

## Flow

1. User fills form (name, email, phone, website, linkedin, github)
2. Click submit → sends confirmation email
3. User clicks link in email → profile verified
4. Profile page shows QR code (vCard format)

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Create `.env.local`
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with:
- Your Postgres connection string
- Gmail credentials (app password from https://myaccount.google.com/apppasswords)

### 3. Run database migration
```bash
psql "your-postgres-url" < schema.sql
```

Or copy/paste `schema.sql` into your database SQL editor.

### 4. Run dev server
```bash
npm run dev
```

Visit http://localhost:3000

## Files

```
/app
  /api
    /profiles/submit     # Create profile + send email
    /profiles/verify     # Verify email token
    /profiles/[slug]     # Get profile data
    /qr/[slug]           # Generate QR PNG
  /submit                # Form page
  /verify                # Verification results
  /profile/[slug]        # Profile display
  page.tsx               # Homepage

/lib
  db.js                  # Database queries (Postgres)
  vcard.js               # vCard string generation
  email.js               # Nodemailer (Gmail SMTP)
  validation.js          # Zod schemas
```

## Database

Your Postgres connection:
```
postgresql://neondb_owner:npg_fZQn4Am6OTRr@ep-royal-resonance-ahracspn-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

Tables:
- `profiles` - User contact info + verification status
- `verification_tokens` - Email verification tokens (15min expiry)

## Deploy

Push to GitHub → Import in Vercel → Add env vars → Deploy
