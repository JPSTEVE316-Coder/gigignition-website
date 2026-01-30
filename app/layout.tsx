import type { Metadata } from 'next'
import { Orbitron, DM_Sans } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gig Ignition | Turn Downtime into Uptime',
  description: 'The AI Coach that matches you to the perfect side hustle and guides you to your first $1,000. No boss. Just you and the ignition.',
  openGraph: {
    title: 'Gig Ignition: Start Earning Today',
    description: 'The AI Coach that matches you to the perfect side hustle and guides you to your first $1,000.',
    type: 'website',
    images: [
      {
        url: '/Gigignition-Logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Gig Ignition Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gig Ignition: Start Earning Today',
    description: 'The AI Coach that matches you to the perfect side hustle and guides you to your first $1,000.',
    images: ['/Gigignition-Logo.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${dmSans.variable}`}>
      <body className="font-dm antialiased">
        {children}
      </body>
    </html>
  )
}
