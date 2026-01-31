'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Twitter, Instagram, Youtube } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'How It Works', href: '/#how' },
    { label: 'AI Hustles', href: '/#hustles' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Download', href: '/#features' },
  ],
  Resources: [
    { label: 'Hustle Blog', href: '/blog' },
    { label: 'Help Center', href: '/help' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="px-6 lg:px-12 pt-16 pb-8 border-t border-white/[0.08] relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Gig Ignition" width={40} height={40} className="h-10 w-auto" />
              <span className="brand-name text-lg text-white">Gig Ignition</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-[280px] font-medium">
              AI-Powered Side Hustles. Swipe to discover, learn to launch, start earning this week.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-orbitron font-semibold text-xs uppercase tracking-wider mb-5 text-white/80">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/40 text-sm hover:text-white transition-colors font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/[0.08] gap-4">
          <p className="text-white/30 text-sm font-medium">
            © 2026 <span className="brand-name text-brand-gold">Gig Ignition</span>. All rights reserved.
          </p>
          <div className="flex gap-3">
            {[Twitter, Instagram, Youtube].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-bg-elevated border border-white/[0.08] rounded-xl text-white/50 hover:text-white hover:border-white/[0.15] transition-all"
              >
                <Icon className="w-[18px] h-[18px]" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
