import type { Metadata, Viewport } from 'next'
import { LanguageProvider } from './contexts/LanguageContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'KJORN HOME - Exclusive Villa in Chiang Mai',
  description: 'Enter an exclusive world where contemporary design and elegance meets Thai hospitality and wonderment. KJORN HOME is the premiere vacation residence in Chiang Mai.',
  keywords: 'Chiang Mai villa, luxury accommodation, Thailand vacation rental, exclusive residence, Thai hospitality',
  authors: [{ name: 'KJORN HOME' }],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  metadataBase: new URL('https://kjornhome.com'),
  openGraph: {
    title: 'KJORN HOME - Exclusive Villa in Chiang Mai',
    description: 'Enter an exclusive world where contemporary design and elegance meets Thai hospitality and wonderment.',
    url: 'https://kjornhome.com',
    siteName: 'KJORN HOME',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero/hero1.jpg',
        width: 1200,
        height: 630,
        alt: 'KJORN HOME - Luxury Villa in Chiang Mai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KJORN HOME - Exclusive Villa in Chiang Mai',
    description: 'Enter an exclusive world where contemporary design and elegance meets Thai hospitality and wonderment.',
    images: ['/images/hero/hero1.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Glacial+Indifference:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-cinzel bg-kjorn-white text-kjorn-black antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
} 