'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] px-6 lg:px-12 py-5 transition-all duration-400 ${
      scrolled ? 'bg-midnight/90 backdrop-blur-xl border-b border-white/[0.08]' : ''
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Gig Ignition" width={42} height={42} className="h-[42px] w-auto" />
          <span className="font-orbitron font-bold text-xl text-white tracking-tight">Gig Ignition</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          <Link href="#how" className="text-white/60 hover:text-white text-sm font-semibold tracking-wide transition-colors">
            How It Works
          </Link>
          <Link href="#hustles" className="text-white/60 hover:text-white text-sm font-semibold tracking-wide transition-colors">
            AI Hustles
          </Link>
          <Link href="#features" className="text-white/60 hover:text-white text-sm font-semibold tracking-wide transition-colors">
            Features
          </Link>
          <Link 
            href="#" 
            className="bg-gradient-to-br from-brand-blue to-[#1E5FAA] text-white px-6 py-3 rounded-full font-orbitron font-semibold text-sm shadow-[0_0_30px_rgba(43,124,212,0.4)] hover:shadow-[0_0_40px_rgba(43,124,212,0.5)] hover:-translate-y-0.5 transition-all"
          >
            Download Free
          </Link>
        </div>
      </div>
    </nav>
  )
}
