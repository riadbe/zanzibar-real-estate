import '../styles/globals.css';
import '../styles/globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Zanzibar Real Estate - Premier Site Immobilier',
  description: 'Découvrez les plus belles propriétés à Zanzibar avec paiements en crypto-monnaie',
  keywords: ['immobilier', 'Zanzibar', 'propriétés', 'crypto', 'bitcoin', 'ethereum'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gray-50">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
