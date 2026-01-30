'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Smartphone } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-12 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-gradient-to-br from-bg-card to-midnight border border-white/[0.08] rounded-[1.5rem] p-8 lg:p-10 text-center relative overflow-hidden"
      >
        {/* Background Glows */}
        <div className="absolute -top-20 left-1/4 w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(43,124,212,0.2)_0%,transparent_70%)] blur-[50px] pointer-events-none" />
        <div className="absolute -bottom-20 right-1/4 w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(212,160,59,0.15)_0%,transparent_70%)] blur-[50px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-neon-green/10 border border-neon-green/30 px-3 py-1.5 rounded-full text-xs font-semibold text-neon-green mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            Free to Download
          </div>
          
          <h2 className="font-orbitron text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Start earning <span className="text-brand-gold">this week</span>
          </h2>
          <p className="text-base text-white/60 mb-6 max-w-md mx-auto font-medium">
            What if you could make $500/week with AI? Gig Ignition shows you how. Download free and launch your first side hustle.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="group flex items-center justify-center gap-2 bg-gradient-to-br from-brand-blue to-[#1E5FAA] text-white px-6 py-3 rounded-full font-orbitron font-semibold text-sm shadow-[0_0_30px_rgba(43,124,212,0.4)] hover:shadow-[0_10px_40px_rgba(43,124,212,0.5)] hover:-translate-y-1 transition-all">
              Download for iOS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-transparent text-white/50 px-6 py-3 rounded-full font-orbitron font-semibold text-sm border border-white/[0.1] cursor-not-allowed">
              Android Coming Soon
            </button>
          </div>
          
          <p className="text-white/30 text-xs mt-4 font-medium">
            Start with 50 free Fuel. No credit card required.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
