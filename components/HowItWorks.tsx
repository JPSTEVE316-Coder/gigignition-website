'use client'

import { motion } from 'framer-motion'
import { Clock, Search, DollarSign } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Tell Us Your Vibe',
    description: 'Skills, availability, how much you want to earn. Takes 2 minutes. Our AI builds your hustle profile.',
    icon: Clock,
  },
  {
    number: '02',
    title: 'Get Matched Instantly',
    description: 'Our algorithm scans thousands of opportunities. You get 3 curated matches, ranked by earning potential.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Execute & Get Paid',
    description: 'Complete the gig, submit your work, get paid directly. No middlemen. No waiting weeks for checks.',
    icon: DollarSign,
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="min-h-screen flex items-center py-20 lg:py-0 px-6 lg:px-12 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#0099FF] uppercase tracking-[0.15em] mb-4">
            How It Works
          </p>
          <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Three steps to your first check
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Skip the applications. Skip the interviews. Our AI matches you instantly with gigs that pay.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[#0D1117] border border-white/[0.08] rounded-3xl p-8 overflow-hidden hover:-translate-y-2 hover:border-white/[0.15] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-400"
            >
              {/* Top Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0099FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Number */}
              <div className="flex items-center justify-center w-12 h-12 bg-[#161B22] border border-white/[0.08] rounded-2xl font-syne font-bold text-lg text-[#0099FF] mb-6">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="font-syne text-xl font-bold mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-[15px]">
                {step.description}
              </p>

              {/* Background Icon */}
              <step.icon className="absolute bottom-6 right-6 w-16 h-16 text-[#0099FF] opacity-[0.08]" strokeWidth={1} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
