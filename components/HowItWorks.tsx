'use client'

import { motion } from 'framer-motion'
import { Search, GraduationCap, Rocket, Trophy } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Find your hustle in minutes',
    description: 'Take a quick quiz. Swipe through AI-matched opportunities. Pick the one that fits your skills and goals.',
    icon: Search,
    color: 'brand-blue',
    glow: 'rgba(43, 124, 212, 0.3)',
  },
  {
    number: '02',
    title: 'Learn',
    subtitle: 'Step-by-step AI coaching',
    description: 'Your AI coach breaks it down into simple steps. Stuck? Just ask. Get instant help and tool recommendations.',
    icon: GraduationCap,
    color: 'neon-cyan',
    glow: 'rgba(0, 212, 255, 0.3)',
  },
  {
    number: '03',
    title: 'Launch',
    subtitle: 'Zero to first dollar, fast',
    description: 'Execute your mission. Track progress. Average time to first earnings: 12 days. Many do it in under a week.',
    icon: Rocket,
    color: 'brand-gold',
    glow: 'rgba(212, 160, 59, 0.3)',
  },
  {
    number: '04',
    title: 'Celebrate',
    subtitle: 'Share your wins',
    description: 'Hit milestones, unlock achievements, generate shareable win cards. Inspire others and build your streak.',
    icon: Trophy,
    color: 'neon-green',
    glow: 'rgba(0, 255, 136, 0.3)',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="min-h-screen flex items-center py-20 lg:py-0 px-6 lg:px-12 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-4 font-orbitron">
            How It Works
          </p>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            From <span className="text-brand-gold">"I wish"</span> to <span className="text-neon-green">"I did"</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-medium">
            No more analysis paralysis. Gig Ignition takes you from zero to earning with AI-powered guidance every step of the way.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-bg-card border border-white/[0.08] rounded-3xl p-6 overflow-hidden hover:-translate-y-2 hover:border-white/[0.15] transition-all duration-400"
              style={{ boxShadow: `0 0 0 rgba(0,0,0,0)` }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 20px 50px ${step.glow}`}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`}
            >
              {/* Top Gradient Line */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-${step.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              {/* Icon */}
              <div className={`flex items-center justify-center w-14 h-14 bg-${step.color}/10 border border-${step.color}/30 rounded-2xl mb-5`}>
                <step.icon className={`w-6 h-6 text-${step.color}`} strokeWidth={1.5} />
              </div>

              {/* Number */}
              <div className="font-orbitron text-xs font-bold text-white/30 mb-2 tracking-wider">
                STEP {step.number}
              </div>

              {/* Content */}
              <h3 className="font-orbitron text-xl font-bold mb-1 tracking-tight">
                {step.title}
              </h3>
              <p className={`text-sm font-semibold text-${step.color} mb-3`}>
                {step.subtitle}
              </p>
              <p className="text-white/50 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
