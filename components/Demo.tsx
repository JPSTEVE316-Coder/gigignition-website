'use client'

import { motion } from 'framer-motion'
import { Play, Zap, Clock, TrendingUp, Sparkles } from 'lucide-react'
import { useState, useRef } from 'react'

const highlights = [
  {
    icon: Zap,
    title: 'Swipe to Discover',
    description: 'Tinder-style interface finds your perfect hustle in seconds',
  },
  {
    icon: Clock,
    title: 'Launch in Days',
    description: 'Step-by-step missions get you earning fast',
  },
  {
    icon: TrendingUp,
    title: 'AI-Powered Coaching',
    description: 'Unlimited guidance for every hustle you ignite',
  },
]

export default function Demo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  return (
    <section id="demo" className="py-16 lg:py-20 px-6 lg:px-12 relative z-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(43,124,212,0.08)_0%,transparent_60%)]" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,255,136,0.05)_0%,transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-3 font-orbitron">
              See It In Action
            </p>
            <h2 className="font-orbitron text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
              From zero to <span className="gradient-text">first dollar</span>
            </h2>
            <p className="text-base text-white/60 max-w-2xl mx-auto font-medium">
              Watch how easy it is to discover your perfect AI-powered side hustle and start earning.
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Marketing Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* Value Statement */}
            <div className="mb-6">
              <h3 className="font-orbitron text-xl lg:text-2xl font-bold mb-3">
                Your hustle journey <span className="text-brand-gold">starts with a swipe</span>
              </h3>
              <p className="text-white/60 leading-relaxed text-sm lg:text-base">
                No more endless scrolling through YouTube tutorials. No more analysis paralysis. 
                Gig Ignition matches you with AI-powered income streams based on your skills and goals.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3 mb-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 bg-bg-card/50 border border-white/[0.06] rounded-xl"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-0.5">{item.title}</h4>
                    <p className="text-xs text-white/50">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Proof Snippet */}
            <div className="flex items-center gap-3 p-3 bg-neon-green/5 border border-neon-green/20 rounded-xl">
              <Sparkles className="w-5 h-5 text-neon-green flex-shrink-0" />
              <p className="text-xs text-white/70">
                <span className="text-neon-green font-bold">10,000+ hustlers</span> discovered their path. 
                Avg. time to first $: <span className="text-neon-green font-bold">12 days</span>.
              </p>
            </div>
          </motion.div>

          {/* Right: iPhone Mockup with Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow Effects */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[400px] bg-[radial-gradient(ellipse,rgba(43,124,212,0.3)_0%,transparent_70%)] blur-[50px]" />
              
              {/* iPhone Frame */}
              <div className="relative z-10">
                {/* Phone Outer Frame */}
                <div className="relative bg-[#1a1a1a] rounded-[44px] p-[10px] shadow-[0_0_60px_rgba(0,0,0,0.5),0_0_100px_rgba(43,124,212,0.15)]">
                  {/* Phone Inner Bezel */}
                  <div className="relative bg-black rounded-[36px] overflow-hidden">
                    {/* Dynamic Island */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-20" />
                    
                    {/* Video Container - Smaller for desktop fit */}
                    <div className="relative w-[240px] h-[520px] lg:w-[260px] lg:h-[562px] bg-midnight overflow-hidden">
                      <video
                        ref={videoRef}
                        src="/demo.mp4"
                        className="w-full h-full object-cover"
                        playsInline
                        loop
                        muted
                        onClick={handleVideoClick}
                      />
                      
                      {/* Play Button Overlay */}
                      {!isPlaying && (
                        <div 
                          className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-opacity hover:bg-black/30"
                          onClick={handlePlayClick}
                        >
                          <div className="w-16 h-16 rounded-full bg-brand-blue/90 flex items-center justify-center shadow-[0_0_30px_rgba(43,124,212,0.5)] hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 text-white ml-1" fill="white" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Home Indicator */}
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white/30 rounded-full" />
                  </div>
                </div>
                
                {/* Side Buttons */}
                <div className="absolute left-[-2px] top-[100px] w-[3px] h-[25px] bg-[#2a2a2a] rounded-l-md" />
                <div className="absolute left-[-2px] top-[140px] w-[3px] h-[45px] bg-[#2a2a2a] rounded-l-md" />
                <div className="absolute left-[-2px] top-[195px] w-[3px] h-[45px] bg-[#2a2a2a] rounded-l-md" />
                <div className="absolute right-[-2px] top-[140px] w-[3px] h-[65px] bg-[#2a2a2a] rounded-r-md" />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 bg-neon-green text-midnight px-2.5 py-1 rounded-full font-orbitron font-bold text-[10px] shadow-[0_0_15px_rgba(0,255,136,0.4)]"
              >
                LIVE DEMO
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
