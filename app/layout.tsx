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
  title: "Trip Sutra | Budget Friendly India Travel Packages",
  description: "Explore India with affordable travel packages, cultural experiences, local guides, and unforgettable journeys.",
  openGraph: {
    title: "Trip Sutra | Budget Friendly India Travel Packages",
    description: "Explore India with affordable travel packages and cultural experiences.",
    url: "https://trip-sutra-navy.vercel.app",
    siteName: "Trayjourney",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
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
