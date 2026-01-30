'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Smartphone } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-12 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-gradient-to-br from-bg-card to-midnight border border-white/[0.08] rounded-[2rem] p-10 lg:p-14 text-center relative overflow-hidden"
      >
        {/* Background Glows */}
        <div className="absolute -top-20 left-1/4 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(43,124,212,0.2)_0%,transparent_70%)] blur-[60px] pointer-events-none" />
        <div className="absolute -bottom-20 right-1/4 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(212,160,59,0.15)_0%,transparent_70%)] blur-[60px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-neon-green/10 border border-neon-green/30 px-4 py-2 rounded-full text-sm font-semibold text-neon-green mb-6">
            <Smartphone className="w-4 h-4" />
            Free to Download
          </div>
          
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Start earning <span className="text-brand-gold">this week</span>
          </h2>
          <p className="text-lg text-white/60 mb-8 max-w-lg mx-auto font-medium">
            What if you could make $500/week with AI? Gig Ignition shows you how. Download free and launch your first side hustle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group flex items-center justify-center gap-3 bg-gradient-to-br from-brand-blue to-[#1E5FAA] text-white px-8 py-4 rounded-full font-orbitron font-semibold text-base shadow-[0_0_40px_rgba(43,124,212,0.4)] hover:shadow-[0_10px_50px_rgba(43,124,212,0.5)] hover:-translate-y-1 transition-all">
              Download for iOS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-3 bg-transparent text-white px-8 py-4 rounded-full font-orbitron font-semibold text-base border border-white/[0.15] hover:bg-white/5 hover:border-white/25 transition-all">
              Download for Android
            </button>
          </div>
          
          <p className="text-white/30 text-sm mt-6 font-medium">
            Start with 100 free Fuel credits. No credit card required.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
