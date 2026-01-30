'use client'

import { motion } from 'framer-motion'

const tickerItems = [
  { initials: 'JM', text: 'James just earned', amount: '$340', context: 'flipping vintage gear' },
  { initials: 'SK', text: 'Sofia completed a', amount: '$150', context: 'design gig' },
  { initials: 'AR', text: 'Alex made', amount: '$85', context: 'running deliveries' },
  { initials: 'TL', text: 'Taylor sold sneakers for', amount: '$420', context: 'profit' },
  { initials: 'MK', text: 'Marcus finished editing —', amount: '$275', context: 'paid' },
  { initials: 'RJ', text: 'Rachel completed', amount: '$200', context: 'in tasks today' },
]

const stats = [
  { value: '$12M', suffix: '+', label: 'Paid to hustlers' },
  { value: '50K', suffix: '+', label: 'Active users' },
  { value: '89', suffix: '%', label: 'Match success rate' },
  { value: '24', suffix: 'hr', label: 'Avg. payout time' },
]

export default function SocialProof() {
  return (
    <section className="py-20 lg:py-28 relative z-10 overflow-hidden">
      {/* Ticker */}
      <div className="ticker-mask mb-16">
        <div className="flex animate-ticker">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center gap-3 bg-[#0D1117] border border-white/[0.08] px-5 py-3 rounded-full mr-4 whitespace-nowrap"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0099FF] to-[#0066CC] flex items-center justify-center font-bold text-sm">
                {item.initials}
              </div>
              <span className="text-sm text-white/60">
                {item.text} <span className="text-[#F5A623] font-bold">{item.amount}</span> {item.context}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0D1117] border border-white/[0.08] rounded-2xl p-6 lg:p-8 text-center hover:border-white/[0.15] hover:-translate-y-1 transition-all"
            >
              <div className="font-syne text-3xl lg:text-4xl font-extrabold tracking-tight mb-2">
                <span className="gradient-text">{stat.value}</span>
                <span className="gradient-text">{stat.suffix}</span>
              </div>
              <div className="text-sm text-white/40 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
