'use client'

import { motion } from 'framer-motion'
import { Zap, CreditCard, CheckCircle, Cpu } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Instant Matching',
    description: 'No waiting. No applications. Our AI matches you in under 3 minutes based on your real skills and availability.',
  },
  {
    icon: CreditCard,
    title: 'Fast Payouts',
    description: 'Get paid within 24 hours of completing gigs. Direct to your bank or card. No invoicing headaches.',
  },
  {
    icon: CheckCircle,
    title: 'Vetted Opportunities',
    description: 'Every gig is verified. No scams. No lowballers. We filter so you can focus on earning.',
  },
  {
    icon: Cpu,
    title: 'AI Coaching',
    description: 'Stuck? Get step-by-step guidance on executing gigs, pricing your work, and scaling your income.',
  },
]

export default function Features() {
  return (
    <section id="features" className="min-h-screen flex items-center py-20 lg:py-0 px-6 lg:px-12 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#0099FF] uppercase tracking-[0.15em] mb-4">
            Built Different
          </p>
          <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Why hustlers choose us
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            We built what we wished existed when we were grinding.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5 bg-[#0D1117] border border-white/[0.08] rounded-3xl p-6 lg:p-8 hover:border-white/[0.15] hover:-translate-y-1 transition-all"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-[#161B22] border border-white/[0.08] rounded-2xl flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-[#0099FF]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-syne text-xl font-bold mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-[15px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
