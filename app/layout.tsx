import type { Metadata } from 'next';
import Providers from './providers';
import '@/styles/globals.css';
import { inter } from '@/public/fonts/fonts';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Code Mentor',
  description: 'Site to practice coding test',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-white dark:bg-backgroundDark h-full min-h-screen w-full dark:text-white text-black`}
      >
        <Providers>
          <Header />
          <main className="h-full mx-auto my-16 w-desktop">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
