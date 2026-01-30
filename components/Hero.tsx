'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-16 px-6 relative z-10 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-stratosphere/10 border border-stratosphere/20 px-4 py-2 rounded-full text-sm font-semibold text-stratosphere mb-6"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            Don&apos;t just save money. Make it.
          </motion.div>

          <h1 className="font-orbitron text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Turn Downtime
            <br />
            into{' '}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-ignition-gold"
              style={{ textShadow: '0 0 40px rgba(255, 215, 0, 0.4)' }}
            >
              Uptime.
            </motion.span>
          </h1>

          <p className="text-xl text-navy-muted leading-relaxed mb-10 max-w-xl">
            The AI Coach that matches you to the perfect side hustle and guides you to your first $1,000. No boss. Just you and the ignition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#" className="btn-primary font-orbitron">
              LAUNCH APP
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="#" className="btn-secondary font-orbitron text-navy">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              FIND MY GIG
            </Link>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="relative flex justify-center items-center lg:order-last order-first"
        >
          <div className="relative w-[400px] h-[500px]">
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-stratosphere/20 animate-pulse-glow" />
            
            {/* Exhaust Trail */}
            <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 w-20 h-[200px] exhaust-trail animate-exhaust" />
            
            {/* Logo */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <Image
                src="/Gigignition-Logo.jpg"
                alt="Gig Ignition Rocket"
                width={220}
                height={220}
                className="rounded-[40px] shadow-2xl shadow-stratosphere/30"
                priority
              />
            </motion.div>

            {/* Floating Coins */}
            {[
              { top: '70%', left: '20%', delay: 0 },
              { top: '75%', left: '75%', delay: 0.5 },
              { top: '60%', left: '15%', delay: 1 },
              { top: '65%', left: '80%', delay: 1.5 },
            ].map((coin, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: coin.delay,
                  ease: 'easeInOut',
                }}
                className="absolute w-6 h-6 rounded-full coin flex items-center justify-center text-xs font-bold text-black/30"
                style={{ top: coin.top, left: coin.left }}
              >
                $
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
