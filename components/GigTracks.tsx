'use client'

import { motion } from 'framer-motion'

const tracks = [
  {
    emoji: '🏷️',
    badge: 'High Demand',
    badgeColor: 'gold',
    title: 'The Reseller',
    description: 'Flip thrift finds, garage items, or limited drops. Our AI spots underpriced inventory in your area.',
    earning: '$200 – $2,000/mo',
  },
  {
    emoji: '🎨',
    badge: 'Fast Growth',
    badgeColor: 'blue',
    title: 'The Creator',
    description: 'Design, edit, write, create. Get matched with brands and clients who pay for your skills.',
    earning: '$500 – $5,000/mo',
  },
  {
    emoji: '⚡',
    badge: 'Quick Start',
    badgeColor: 'green',
    title: 'The Tasker',
    description: 'Deliveries, errands, moving help. Turn your time and wheels into immediate cash flow.',
    earning: '$100 – $1,500/mo',
  },
]

const badgeColors = {
  gold: 'bg-[#F5A623]/15 border-[#F5A623]/30 text-[#F5A623]',
  blue: 'bg-[#0099FF]/15 border-[#0099FF]/30 text-[#0099FF]',
  green: 'bg-green-500/15 border-green-500/30 text-green-500',
}

export default function GigTracks() {
  return (
    <section id="tracks" className="min-h-screen flex items-center py-20 lg:py-0 px-6 lg:px-12 relative z-10 bg-gradient-to-b from-transparent via-[#0D1117]/50 to-transparent">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#0099FF] uppercase tracking-[0.15em] mb-4">
            Gig Tracks
          </p>
          <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Find your lane
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Different skills, different paths. All leading to real income.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl overflow-hidden bg-[#06080C] border border-white/[0.08] cursor-pointer hover:-translate-y-3 hover:scale-[1.02] hover:border-white/[0.15] transition-all duration-500"
            >
              {/* Visual */}
              <div className="h-44 bg-[#161B22] flex items-center justify-center text-6xl">
                {track.emoji}
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 p-6">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider border mb-4 ${badgeColors[track.badgeColor as keyof typeof badgeColors]}`}>
                  {track.badge}
                </span>
                <h3 className="font-syne text-2xl font-bold mb-2 tracking-tight">
                  {track.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  {track.description}
                </p>
                <div className="flex items-center gap-2 font-syne font-bold text-lg text-[#F5A623]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  {track.earning}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
