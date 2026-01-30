'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-12 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-[#0D1117] border border-white/[0.08] rounded-[2rem] p-10 lg:p-16 text-center relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,153,255,0.3)_0%,transparent_70%)] blur-[60px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10">
          <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Ready to start earning?
          </h2>
          <p className="text-lg text-white/60 mb-8 max-w-lg mx-auto">
            Join 50,000+ people who stopped waiting for opportunities and started creating their own income.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group flex items-center justify-center gap-3 bg-gradient-to-br from-[#0099FF] to-[#0066CC] text-white px-8 py-4 rounded-full font-semibold text-base shadow-[0_0_40px_rgba(0,153,255,0.4)] hover:shadow-[0_10px_50px_rgba(0,153,255,0.5)] hover:-translate-y-1 transition-all">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-3 bg-transparent text-white px-8 py-4 rounded-full font-semibold text-base border border-white/[0.08] hover:bg-[#161B22] hover:border-white/[0.15] transition-all">
              Download App
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
