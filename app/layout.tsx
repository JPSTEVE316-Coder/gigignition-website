import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gig Ignition | AI-Powered Side Hustles',
  description: 'Swipe your way to your first side hustle. AI-powered income opportunities matched to your skills. Stop scrolling. Start earning.',
  openGraph: {
    title: 'Gig Ignition | AI-Powered Side Hustles',
    description: 'Discover AI-powered income streams. Get step-by-step guidance. Launch your side hustle this week.',
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
      <body className="font-rajdhani">
        <div className="grain" />
        <div className="mesh-bg" />
        {children}
      </body>
    </html>
  )
}
