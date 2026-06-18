import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Trip Sutra | Discover the Real India',
  description: 'Experience authentic culture, heritage, food, festivals, and local life with affordable travel packages designed for international travelers.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} bg-beige text-gray-900 antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
