'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 pt-20 pb-8 relative z-10 overflow-hidden">
      {/* Background Launch Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central glow behind rocket */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(43,124,212,0.15)_0%,transparent_60%)]" />
        {/* Gold exhaust glow */}
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[400px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(212,160,59,0.2)_0%,transparent_60%)]" />
        {/* Launch trail lines */}
        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[2px] h-[400px] bg-gradient-to-b from-brand-gold/40 via-brand-gold/10 to-transparent" />
        <div className="absolute top-[55%] left-[calc(50%-30px)] w-[1px] h-[300px] bg-gradient-to-b from-brand-gold/20 to-transparent" />
        <div className="absolute top-[55%] left-[calc(50%+30px)] w-[1px] h-[300px] bg-gradient-to-b from-brand-gold/20 to-transparent" />
      </div>

      {/* Main Content - Centered Layout */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/30 px-4 py-2 rounded-full text-sm font-semibold text-brand-blue mb-8"
        >
          <Sparkles className="w-4 h-4" />
          AI-Powered Side Hustles
        </motion.div>

        {/* Logo - Large & Inspiring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          {/* Animated glow rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] lg:w-[340px] lg:h-[340px]">
            <div className="absolute inset-0 rounded-full border border-brand-blue/20 animate-ping [animation-duration:3s]" />
            <div className="absolute inset-4 rounded-full border border-brand-blue/30 animate-ping [animation-duration:3s] [animation-delay:0.5s]" />
            <div className="absolute inset-8 rounded-full border border-brand-gold/20 animate-ping [animation-duration:3s] [animation-delay:1s]" />
          </div>
          
          {/* Outer glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-[radial-gradient(circle,rgba(43,124,212,0.3)_0%,transparent_70%)] blur-[40px] animate-breathe" />
          
          {/* Inner gold glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[150px] h-[200px] lg:w-[200px] lg:h-[280px] bg-[radial-gradient(ellipse_at_bottom,rgba(212,160,59,0.4)_0%,transparent_70%)] blur-[30px] animate-breathe [animation-delay:0.5s]" />
          
          {/* Logo */}
          <Image 
            src="/logo.png" 
            alt="Gig Ignition" 
            width={320} 
            height={320}
            className="relative z-10 w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] mx-auto animate-float drop-shadow-[0_0_60px_rgba(43,124,212,0.5)]"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-orbitron text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6"
        >
          Stop scrolling.
          <br />
          <span className="gradient-text">Start earning.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg lg:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto font-medium"
        >
          Swipe to discover AI-powered income streams matched to your skills. 
          Get step-by-step guidance from your AI coach. Launch your first side hustle this week.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button className="group flex items-center justify-center gap-3 bg-gradient-to-br from-brand-blue to-[#1E5FAA] text-white px-8 py-4 rounded-full font-orbitron font-semibold text-base shadow-[0_0_50px_rgba(43,124,212,0.5)] hover:shadow-[0_0_70px_rgba(43,124,212,0.6)] hover:-translate-y-1 transition-all">
            Download Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a 
            href="#demo"
            className="flex items-center justify-center gap-3 bg-white/5 text-white px-8 py-4 rounded-full font-orbitron font-semibold text-base border border-white/[0.15] hover:bg-white/10 hover:border-white/25 transition-all backdrop-blur-sm"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 lg:gap-16"
        >
          <div className="flex flex-col items-center gap-1">
            <div className="font-orbitron text-3xl lg:text-4xl font-bold">
              <span className="text-neon-green">30+</span>
            </div>
            <div className="text-sm text-white/40 font-semibold">AI Hustles</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="font-orbitron text-3xl lg:text-4xl font-bold">
              <span className="text-brand-gold">&lt;12</span> <span className="text-white/60 text-xl">days</span>
            </div>
            <div className="text-sm text-white/40 font-semibold">Avg. to First $</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="font-orbitron text-3xl lg:text-4xl font-bold">
              $<span className="text-neon-cyan">500+</span><span className="text-white/60 text-xl">/wk</span>
            </div>
            <div className="text-sm text-white/40 font-semibold">Side Hustles</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-white/30 animate-bounce" />
      </motion.div>
    </section>
  )
}
