'use client'

import { motion } from 'framer-motion'

const tickerItems = [
  { initials: 'JM', text: 'James hit', amount: '$500', context: 'first week with AI voiceovers' },
  { initials: 'SK', text: 'Sofia earned', amount: '$2,100', context: 'selling ChatGPT prompts' },
  { initials: 'AR', text: 'Alex launched', amount: '$340/wk', context: 'AI resume service' },
  { initials: 'TL', text: 'Taylor made', amount: '$1,200', context: 'from faceless YouTube' },
  { initials: 'MK', text: 'Marcus hit', amount: '$800', context: 'AI video editing' },
  { initials: 'RJ', text: 'Rachel earned', amount: '$650', context: 'AI social media management' },
]

const stats = [
  { value: '20', suffix: '+', label: 'AI-Powered Hustles', color: 'brand-blue' },
  { value: '12', suffix: ' days', label: 'Avg. to First Dollar', color: 'brand-gold' },
  { value: '$500', suffix: '/wk', label: 'Average Earnings', color: 'neon-green' },
  { value: '10K', suffix: '+', label: 'Active Hustlers', color: 'neon-cyan' },
]

export default function SocialProof() {
  return (
    <section className="py-20 lg:py-24 relative z-10 overflow-hidden">
      {/* Ticker */}
      <div className="ticker-mask mb-14">
        <div className="flex animate-ticker">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center gap-3 bg-bg-card border border-white/[0.08] px-5 py-3 rounded-full mr-4 whitespace-nowrap"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-blue to-[#1E5FAA] flex items-center justify-center font-bold text-sm">
                {item.initials}
              </div>
              <span className="text-sm text-white/60 font-medium">
                {item.text} <span className="text-neon-green font-bold">{item.amount}</span> {item.context}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg-card border border-white/[0.08] rounded-2xl p-6 text-center hover:border-white/[0.15] hover:-translate-y-1 transition-all"
            >
              <div className="font-orbitron text-3xl lg:text-4xl font-extrabold tracking-tight mb-2">
                <span className={`text-${stat.color}`}>{stat.value}</span>
                <span className={`text-${stat.color}`}>{stat.suffix}</span>
              </div>
              <div className="text-xs text-white/40 font-semibold uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
