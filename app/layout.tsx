import type { Metadata } from 'next';
import Providers from './providers';
import '@/styles/globals.css';
import { inter } from '@/public/fonts/fonts';

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
          <main className="w-desktop h-full mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
