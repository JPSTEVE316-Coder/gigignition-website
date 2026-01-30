'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? 'nav-scrolled' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Gigignition-Logo.jpg"
            alt="Gig Ignition"
            width={44}
            height={44}
            className="rounded-xl"
          />
          <span className="font-orbitron font-bold text-xl text-navy">
            GIG IGNITION
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link
            href="#how-it-works"
            className="text-navy font-medium hover:text-stratosphere transition-colors relative group"
          >
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stratosphere transition-all group-hover:w-full" />
          </Link>
          <Link
            href="#tracks"
            className="text-navy font-medium hover:text-stratosphere transition-colors relative group"
          >
            Hustle Tracks
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stratosphere transition-all group-hover:w-full" />
          </Link>
          <Link
            href="#safety"
            className="text-navy font-medium hover:text-stratosphere transition-colors relative group"
          >
            Safety
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stratosphere transition-all group-hover:w-full" />
          </Link>
          <Link
            href="#parents"
            className="text-navy font-medium hover:text-stratosphere transition-colors relative group"
          >
            For Parents
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stratosphere transition-all group-hover:w-full" />
          </Link>
          <Link
            href="#"
            className="bg-stratosphere text-white px-6 py-3 rounded-full font-orbitron font-semibold text-sm tracking-wide hover:shadow-lg hover:shadow-stratosphere/30 hover:-translate-y-0.5 transition-all"
          >
            LAUNCH APP
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
