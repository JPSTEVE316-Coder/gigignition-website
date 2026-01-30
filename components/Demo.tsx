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
    <section id="demo" className="py-20 lg:py-28 px-6 lg:px-12 relative z-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(43,124,212,0.08)_0%,transparent_60%)]" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,255,136,0.05)_0%,transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-4 font-orbitron">
              See It In Action
            </p>
            <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              From zero to <span className="gradient-text">first dollar</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-medium">
              Watch how easy it is to discover your perfect AI-powered side hustle, 
              get step-by-step guidance, and start earning - all from your phone.
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Marketing Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* Value Statement */}
            <div className="mb-10">
              <h3 className="font-orbitron text-2xl lg:text-3xl font-bold mb-4">
                Your hustle journey <br />
                <span className="text-brand-gold">starts with a swipe</span>
              </h3>
              <p className="text-white/60 leading-relaxed mb-6">
                No more endless scrolling through YouTube tutorials. No more analysis paralysis. 
                Gig Ignition matches you with AI-powered income streams based on your skills and goals, 
                then guides you every step of the way.
              </p>
              <p className="text-white/60 leading-relaxed">
                Our users go from <span className="text-neon-green font-semibold">idea to income in 12 days on average</span>. 
                Some hit their first dollar in under a week.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-bg-card/50 border border-white/[0.06] rounded-xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-white/50">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Proof Snippet */}
            <div className="flex items-center gap-4 p-4 bg-neon-green/5 border border-neon-green/20 rounded-xl">
              <Sparkles className="w-6 h-6 text-neon-green flex-shrink-0" />
              <p className="text-sm text-white/70">
                <span className="text-neon-green font-bold">10,000+ hustlers</span> have already discovered their path. 
                Average time to first earnings: <span className="text-neon-green font-bold">12 days</span>.
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
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[500px] bg-[radial-gradient(ellipse,rgba(43,124,212,0.3)_0%,transparent_70%)] blur-[60px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[400px] bg-[radial-gradient(ellipse,rgba(212,160,59,0.2)_0%,transparent_70%)] blur-[40px]" />
              
              {/* iPhone Frame */}
              <div className="relative z-10">
                {/* Phone Outer Frame */}
                <div className="relative bg-[#1a1a1a] rounded-[50px] p-[12px] shadow-[0_0_80px_rgba(0,0,0,0.5),0_0_120px_rgba(43,124,212,0.2)]">
                  {/* Phone Inner Bezel */}
                  <div className="relative bg-black rounded-[40px] overflow-hidden">
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[32px] bg-black rounded-full z-20" />
                    
                    {/* Video Container */}
                    <div className="relative w-[280px] h-[606px] bg-midnight overflow-hidden">
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
                          <div className="w-20 h-20 rounded-full bg-brand-blue/90 flex items-center justify-center shadow-[0_0_40px_rgba(43,124,212,0.5)] hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-white ml-1" fill="white" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/30 rounded-full" />
                  </div>
                </div>
                
                {/* Side Buttons */}
                <div className="absolute left-[-2px] top-[120px] w-[3px] h-[30px] bg-[#2a2a2a] rounded-l-md" />
                <div className="absolute left-[-2px] top-[170px] w-[3px] h-[55px] bg-[#2a2a2a] rounded-l-md" />
                <div className="absolute left-[-2px] top-[235px] w-[3px] h-[55px] bg-[#2a2a2a] rounded-l-md" />
                <div className="absolute right-[-2px] top-[170px] w-[3px] h-[80px] bg-[#2a2a2a] rounded-r-md" />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-neon-green text-midnight px-3 py-1.5 rounded-full font-orbitron font-bold text-xs shadow-[0_0_20px_rgba(0,255,136,0.4)]"
              >
                LIVE DEMO
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-2 -left-4 bg-bg-card border border-white/10 px-3 py-2 rounded-xl shadow-lg"
              >
                <p className="text-[10px] text-white/50 uppercase tracking-wider mb-0.5">Avg. Earnings</p>
                <p className="font-orbitron font-bold text-neon-green text-sm">$500/week</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-white/40 text-sm mb-4">Ready to find your hustle?</p>
          <a 
            href="#pricing"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-br from-brand-blue to-[#1E5FAA] text-white px-8 py-4 rounded-full font-orbitron font-semibold text-base shadow-[0_0_40px_rgba(43,124,212,0.4)] hover:shadow-[0_10px_50px_rgba(43,124,212,0.5)] hover:-translate-y-1 transition-all"
          >
            Get Started Free
          </a>
        </motion.div>
      </div>
    </section>
  )
}
