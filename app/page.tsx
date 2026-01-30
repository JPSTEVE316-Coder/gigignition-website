'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import GigTracks from '@/components/GigTracks'
import SocialProof from '@/components/SocialProof'
import Pricing from '@/components/Pricing'
import Features from '@/components/Features'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="relative z-10">
      {/* Cursor Glow */}
      <div 
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-0 transition-opacity duration-300"
        style={{
          left: mousePos.x - 300,
          top: mousePos.y - 300,
          background: 'radial-gradient(circle, rgba(0, 153, 255, 0.08) 0%, transparent 70%)',
        }}
      />
      
      <Navbar />
      <Hero />
      <HowItWorks />
      <GigTracks />
      <SocialProof />
      <Pricing />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}
