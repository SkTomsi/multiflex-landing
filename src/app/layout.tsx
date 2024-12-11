import { Manrope } from 'next/font/google';
import '~/styles/globals.css';

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
    'multiflex, multiflex.com, multiflex.co, multiflexmodular, interior, design, cnc, interior design',
  ],
  metadataBase: new URL('https://multiflex-landing.vercel.app/'),
  openGraph: {
    images: '/og.png',
    type: 'website',
    url: 'https://multiflex-landing.vercel.app/',
    siteName: 'Multiflex',
  },
  twitter: {
    images: 'https://multiflex-landing.vercel.app/og.png',
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
      </body>
    </html>
  );
}
