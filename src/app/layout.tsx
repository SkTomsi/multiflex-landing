import { Manrope } from 'next/font/google';
import '~/styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import Footer from '~/components/shared/footer';
import Header from '~/components/shared/Header';
import { Toaster } from '~/components/ui/toaster';
import LenisScroll from '~/providers/LenisScroll';

export const metadata: Metadata = {
  title: 'Multiflex | A Tradition of Innovation',
  description:
    'We are a tightly-run family enterprise for premium modular furniture, founded by brothers Ashok and Anand Quadros.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  keywords: [
    'multiflex, multiflex.com, multiflex.co, multiflexmodular, interior, design, cnc, interior design, turnkey projects, turnkey, projects, modular, furniture, modular furniture, office, home, hospitality, commercial, residential, office furniture, home furniture, hospitality furniture, commercial furniture, residential furniture, office interior, home interior, hospitality interior, commercial interior, residential interior, office design, home design, hospitality design, commercial design, residential design',
  ],
  metadataBase: new URL('https://multiflexmodular.com//'),
  openGraph: {
    images: '/og.png',
    type: 'website',
    url: 'https://multiflexmodular.com/',
    siteName: 'Multiflex',
  },
  twitter: {
    images: 'https://multiflexmodular.com//og.png',
    card: 'summary_large_image',
  },
};

const manrope = Manrope({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.className}`}>
      <body className="min-w-screen min-h-screen antialiased">
        <div className="flex h-full w-full flex-col">
          <Header />
          <main className="flex-grow">
            <LenisScroll>{children}</LenisScroll>
          </main>
          <Toaster />
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
