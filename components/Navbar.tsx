'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#how', label: 'How It Works' },
  { href: '#hustles', label: 'AI Hustles' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#features', label: 'Features' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] px-6 lg:px-12 py-5 transition-all duration-400 ${
      scrolled || mobileOpen ? 'bg-midnight/90 backdrop-blur-xl border-b border-white/[0.08]' : ''
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Gig Ignition" width={42} height={42} className="h-[42px] w-auto" />
          <span className="brand-name text-xl text-white">Gig Ignition</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-white/60 hover:text-white text-sm font-semibold tracking-wide transition-colors">
              {link.label}
            </Link>
          ))}
          <Link 
            href="#" 
            className="bg-gradient-to-br from-brand-blue to-[#1E5FAA] text-white px-6 py-3 rounded-full font-orbitron font-semibold text-sm shadow-[0_0_30px_rgba(43,124,212,0.4)] hover:shadow-[0_0_40px_rgba(43,124,212,0.5)] hover:-translate-y-0.5 transition-all"
          >
            Download Free
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 pb-6 border-t border-white/[0.08]">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/60 hover:text-white text-base font-semibold tracking-wide transition-colors px-2 py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#"
              onClick={() => setMobileOpen(false)}
              className="bg-gradient-to-br from-brand-blue to-[#1E5FAA] text-white px-6 py-3 rounded-full font-orbitron font-semibold text-sm text-center shadow-[0_0_30px_rgba(43,124,212,0.4)] mt-2"
            >
              Download Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
