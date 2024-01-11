import { Inter, Fira_Code } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true
});

export const fontMono = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  preload: true
});