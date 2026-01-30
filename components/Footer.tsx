'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Twitter, Instagram, Linkedin } from 'lucide-react'

const footerLinks = {
  Product: ['How It Works', 'Gig Tracks', 'Pricing', 'Download'],
  Resources: ['The Playbook', 'Success Stories', 'Help Center', 'Community'],
  Company: ['About', 'Careers', 'Press', 'Contact'],
}

export default function Footer() {
  return (
    <footer className="px-6 lg:px-12 pt-16 pb-8 border-t border-white/[0.08] relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Image src="/logo.png" alt="Gig Ignition" width={48} height={48} className="h-12 w-auto mb-4" />
            <p className="text-white/40 text-sm leading-relaxed max-w-[280px]">
              AI-powered gig matching for the modern hustler. Stop scrolling. Start earning.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm mb-5 text-white">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-white/40 text-sm hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/[0.08] gap-4">
          <p className="text-white/40 text-sm">
            © 2026 <span className="text-[#F5A623] font-semibold">Gig Ignition</span>. Fuel your future.
          </p>
          <div className="flex gap-3">
            {[Twitter, Instagram, Linkedin].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-[#161B22] border border-white/[0.08] rounded-xl text-white/60 hover:text-white hover:border-white/[0.15] transition-all"
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
