'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-24 pb-12 lg:py-0 relative z-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#161B22] border border-white/[0.08] px-4 py-2 rounded-full text-sm font-medium text-white/60 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            50,000+ active hustlers
          </div>

          {/* Headline */}
          <h1 className="font-syne text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
            Your side hustle,
            <br />
            <span className="gradient-text">engineered.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-white/60 leading-relaxed mb-8 max-w-xl">
            AI-powered gig matching that actually works. Get matched to opportunities 
            that fit your skills, schedule, and income goals. No gatekeeping. Just results.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button className="group flex items-center justify-center gap-3 bg-gradient-to-br from-[#0099FF] to-[#0066CC] text-white px-8 py-4 rounded-full font-semibold text-base shadow-[0_0_40px_rgba(0,153,255,0.4)] hover:shadow-[0_10px_50px_rgba(0,153,255,0.5)] hover:-translate-y-1 transition-all">
              Start Earning
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-3 bg-transparent text-white px-8 py-4 rounded-full font-semibold text-base border border-white/[0.08] hover:bg-[#161B22] hover:border-white/[0.15] transition-all">
              <Play className="w-5 h-5" />
              See How It Works
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 lg:gap-12">
            <div className="flex flex-col gap-1">
              <div className="font-syne text-2xl lg:text-3xl font-bold">
                $<span className="text-[#F5A623]">2.4M</span>
              </div>
              <div className="text-sm text-white/40 font-medium">Paid out this month</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-syne text-2xl lg:text-3xl font-bold">
                4.9<span className="text-[#F5A623]">★</span>
              </div>
              <div className="text-sm text-white/40 font-medium">App Store rating</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-syne text-2xl lg:text-3xl font-bold">
                <span className="text-[#F5A623]">3</span>min
              </div>
              <div className="text-sm text-white/40 font-medium">Avg. time to first gig</div>
            </div>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center order-first lg:order-last"
        >
          <div className="relative w-[300px] h-[380px] lg:w-[400px] lg:h-[480px]">
            {/* Outer Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[380px] h-[300px] lg:h-[380px] rounded-full bg-[radial-gradient(circle,rgba(0,153,255,0.4)_0%,transparent_70%)] blur-[40px] animate-breathe" />
            
            {/* Inner Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] lg:w-[250px] h-[200px] lg:h-[250px] rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.4)_0%,transparent_70%)] blur-[30px] animate-breathe [animation-delay:0.5s]" />
            
            {/* Orbit */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] lg:w-[340px] h-[260px] lg:h-[340px] border border-dashed border-white/[0.08] rounded-full animate-spin-slow">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-[#0099FF] rounded-full shadow-[0_0_20px_rgba(0,153,255,0.4)]" />
              <div className="absolute -bottom-1.5 left-1/2 w-3 h-3 bg-[#0099FF] rounded-full shadow-[0_0_20px_rgba(0,153,255,0.4)]" />
              <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-[#0099FF] rounded-full shadow-[0_0_20px_rgba(0,153,255,0.4)]" />
            </div>
            
            {/* Logo */}
            <Image 
              src="/logo.png" 
              alt="Gig Ignition" 
              width={280} 
              height={280}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] lg:w-[240px] h-auto z-10 animate-float drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
