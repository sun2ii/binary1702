'use client';

import QRCode from 'react-qr-code';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

const generateVCard = () => {
  return [
    'BEGIN:VCARD',
    'VERSION:4.0',
    'FN:Ben Basuni',
    'N:Basuni;Ben;;;',
    'ORG:Binary 1702 LLC',
    'TITLE:Principal',
    'TEL;TYPE=work,voice:+19165957155',
    'EMAIL:ben@binary1702.com',
    'URL:https://binary1702.com',
    'TZ:America/Los_Angeles',
    'PHOTO;MEDIATYPE=image/jpeg:https://binary1702.com/profile-pic.jpg',
    'END:VCARD',
  ].join('\n');
};

export default function ContactPage() {
  const vcardString = generateVCard();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            Contact Information
          </h1>
          <p className="text-[var(--muted)]">
            Scan to add Binary 1702 to your contacts
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 py-8">
          {/* QR Code */}
          <div className="bg-white p-6 rounded-sm">
            <QRCode
              value={vcardString}
              size={256}
              level="H"
            />
          </div>

          {/* Contact Details */}
          <div className="text-center space-y-1">
            <p className="font-semibold">Ben Basuni</p>
            <p className="text-[var(--muted)]">Binary 1702 LLC</p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-[var(--accent)] hover:underline"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link
            href="/"
            className="text-sm text-[var(--muted)] hover:text-[var(--fg)]"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
