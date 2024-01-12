import type { Metadata } from 'next';
import Providers from './providers';
import '@/styles/globals.css';
import { inter } from '@/public/fonts/fonts';
import Header from '@/components/common/Header';

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
        className={`${inter.variable} bg-background h-screen w-full text-white`}
      >
        <Providers>
          <Header />
          <main className="h-full mx-auto w-desktop">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
