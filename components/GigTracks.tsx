'use client'

import { motion } from 'framer-motion'
import { Zap, Palette, Code, TrendingUp } from 'lucide-react'

const categories = [
  {
    icon: Zap,
    label: 'Easy Start',
    color: 'neon-green',
    hustles: [
      { name: 'ChatGPT Prompt Selling', earnings: '$300-2K/mo', time: '1-2 days' },
      { name: 'AI Voice-Over Services', earnings: '$500-3K/mo', time: '2-3 days' },
      { name: 'AI Resume Writing', earnings: '$2K-6K/mo', time: '2-3 days' },
    ]
  },
  {
    icon: Palette,
    label: 'Creative + AI',
    color: 'neon-purple',
    hustles: [
      { name: 'AI Video Editing', earnings: '$2K-8K/mo', time: '1 week' },
      { name: 'Faceless YouTube', earnings: '$1K-20K/mo', time: '1-2 weeks' },
      { name: 'AI Product Photos', earnings: '$2K-6K/mo', time: '1 week' },
    ]
  },
  {
    icon: Code,
    label: 'Tech + AI',
    color: 'neon-cyan',
    hustles: [
      { name: 'AI Chatbot Builder', earnings: '$2K-10K/mo', time: '1-2 weeks' },
      { name: 'AI Automation Consultant', earnings: '$5K-15K/mo', time: '2-3 weeks' },
      { name: 'AI SEO Content Writer', earnings: '$3K-10K/mo', time: '1 week' },
    ]
  },
  {
    icon: TrendingUp,
    label: 'Scalable',
    color: 'brand-gold',
    hustles: [
      { name: 'AI Social Media Manager', earnings: '$2K-8K/mo', time: '1 week' },
      { name: 'AI-Curated Newsletter', earnings: '$500-5K/mo', time: '1 week' },
      { name: 'AI Course Creation', earnings: '$1K-10K/mo', time: '2-3 weeks' },
    ]
  },
]

export default function GigTracks() {
  return (
    <section id="hustles" className="py-16 lg:py-20 px-6 lg:px-12 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-3 font-orbitron">
            20+ AI Hustles
          </p>
          <h2 className="font-orbitron text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Income streams that <span className="gradient-text">did not exist</span> 2 years ago
          </h2>
          <p className="text-base text-white/60 max-w-2xl mx-auto font-medium">
            Leverage ChatGPT, Midjourney, ElevenLabs, and more. These AI-powered hustles let you earn 10x faster than traditional gigs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-bg-card border border-white/[0.08] rounded-2xl p-5 hover:border-white/[0.15] transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className={`w-9 h-9 rounded-lg bg-${category.color}/10 border border-${category.color}/30 flex items-center justify-center`}>
                  <category.icon className={`w-4 h-4 text-${category.color}`} strokeWidth={1.5} />
                </div>
                <span className={`font-orbitron font-bold text-${category.color} text-xs tracking-wide`}>
                  {category.label}
                </span>
              </div>

              {/* Hustles List */}
              <div className="space-y-2">
                {category.hustles.map((hustle, index) => (
                  <div
                    key={hustle.name}
                    className="flex items-center justify-between p-3 bg-midnight/50 rounded-xl border border-white/[0.05] hover:border-white/[0.1] transition-colors"
                  >
                    <div>
                      <h4 className="font-semibold text-white text-xs mb-0.5">{hustle.name}</h4>
                      <p className="text-[10px] text-white/40">Launch in {hustle.time}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-orbitron font-bold text-neon-green text-xs">{hustle.earnings}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-6">
          <p className="text-white/40 text-xs font-medium">
            + 12 more hustles in the app including AI Dating Profiles, AI Music Production, AI Translation & more
          </p>
        </div>
      </div>
    </section>
  )
}
