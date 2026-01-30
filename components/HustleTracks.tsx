'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

const tracks = [
  {
    badge: 'MOST POPULAR',
    badgeIcon: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    emoji: '🏷️',
    title: 'THE RESELLER',
    description: 'Flip items from your garage, thrift finds, or limited drops. Buy low, sell high, stack cash.',
    earnings: '$50 - $500/week',
  },
  {
    badge: 'HIGH GROWTH',
    badgeIcon: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    emoji: '🎨',
    title: 'THE CREATOR',
    description: 'Monetize your content skills. Design, edit, write, or create for brands and clients who pay.',
    earnings: '$100 - $1000/week',
  },
  {
    badge: 'QUICK START',
    badgeIcon: (
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    emoji: '🐕',
    title: 'THE SERVICE PRO',
    description: 'Dog walking, task running, tutoring near you. Turn your time into money in your own neighborhood.',
    earnings: '$20 - $200/week',
  },
]

function TrackCard({ track, index }: { track: typeof tracks[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)'
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="track-card relative h-[420px] rounded-3xl cursor-pointer transition-transform duration-500"
    >
      {/* Holographic border */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-stratosphere via-ignition-gold to-stratosphere rounded-[26px] opacity-0 hover:opacity-100 transition-opacity duration-400 -z-10" />
      
      <div className="track-card-inner w-full h-full rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-gradient-to-b from-stratosphere/20 to-transparent">
          <div className="inline-flex items-center gap-2 bg-ignition-gold/15 border border-ignition-gold/30 px-3 py-1.5 rounded-full text-[10px] font-bold text-ignition-gold uppercase tracking-wider">
            {track.badgeIcon}
            {track.badge}
          </div>
        </div>

        {/* Icon */}
        <div className="h-36 flex items-center justify-center text-7xl">
          {track.emoji}
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <h3 className="font-orbitron text-xl font-bold text-white mb-3">
            {track.title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-5">
            {track.description}
          </p>
          <div className="flex items-center justify-center gap-2 text-ignition-gold font-orbitron font-bold">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
            </svg>
            {track.earnings}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function HustleTracks() {
  return (
    <section id="tracks" className="py-32 px-6 bg-navy relative z-10 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-[20%] -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-stratosphere/15 blur-3xl" />
        <div className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-ignition-gold/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-ignition-gold/20 px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-6 text-ignition-gold font-orbitron">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
            </svg>
            HUSTLE TRACKS
          </div>
          <h2 className="font-orbitron text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight text-white">
            Pick Your Path to Profit
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Three proven tracks. Thousands of success stories. Which one fits your vibe?
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tracks.map((track, index) => (
            <TrackCard key={track.title} track={track} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
