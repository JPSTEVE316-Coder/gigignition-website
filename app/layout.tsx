import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gig Ignition | Your Side Hustle, Engineered',
  description: 'AI-powered gig matching that actually works. Get matched to opportunities that fit your skills, schedule, and income goals. No gatekeeping. Just results.',
  openGraph: {
    title: 'Gig Ignition: Your Side Hustle, Engineered',
    description: 'AI-powered gig matching. Real money. Zero gatekeeping. Join 50,000+ hustlers already earning.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="grain" />
        <div className="mesh-bg" />
        {children}
      </body>
    </html>
  )
}
