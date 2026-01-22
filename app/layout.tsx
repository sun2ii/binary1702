import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Binary 1702 - QR Profile Service',
  description: 'Generate scannable QR codes with your contact information',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
