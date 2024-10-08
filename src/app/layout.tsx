import { Manrope } from 'next/font/google';
import '~/styles/globals.css';

import Footer from '~/components/shared/footer';
import Header from '~/components/shared/Header';
import LenisScroll from '~/providers/LenisScroll';

export const metadata = {
  title: 'Multiflex',
  description: 'Generated by create-t3-app',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
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
          <Footer />
        </div>
      </body>
    </html>
  );
}
