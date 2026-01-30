'use client'

import { motion } from 'framer-motion'
import { Layers, MessageCircle, Trophy, Flame, Share2, Shield } from 'lucide-react'

const features = [
  {
    icon: Layers,
    title: 'Swipe to Discover',
    description: 'Tinder-style interface. Swipe right to ignite a hustle, left to pass. No overwhelming lists—just quick, curated decisions.',
    color: 'brand-blue',
  },
  {
    icon: MessageCircle,
    title: 'AI Hustle Coach',
    description: 'Your personal coach that speaks to you, motivates you, and inspires action. Get instant answers, encouragement, and guidance tailored to your progress.',
    color: 'neon-cyan',
  },
  {
    icon: Trophy,
    title: 'Missions & Progress',
    description: 'Every hustle breaks into bite-sized steps. Tap to complete, track your progress bar, get that dopamine hit.',
    color: 'brand-gold',
  },
  {
    icon: Flame,
    title: 'Streaks & Achievements',
    description: 'Daily streaks, 8 unlockable badges, gamified milestones. First Dollar, Week Warrior, Hustle King—collect them all.',
    color: 'neon-orange',
  },
  {
    icon: Share2,
    title: 'Viral Win Cards',
    description: 'Hit a milestone? Auto-generate shareable cards for TikTok & Stories. "Clone My Success" links drive organic growth.',
    color: 'neon-purple',
  },
  {
    icon: Shield,
    title: 'Loss Shield',
    description: 'Hustle didn\'t work out? Get 50% of your Fuel credits back if marked "Failed" after 7 days. We\'re invested in your success.',
    color: 'neon-green',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 lg:py-20 px-6 lg:px-12 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-3 font-orbitron">
            App Features
          </p>
          <h2 className="font-orbitron text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Built for <span className="text-neon-green">Gen Z</span> hustlers
          </h2>
          <p className="text-base text-white/60 max-w-2xl mx-auto font-medium">
            Mobile-first. Familiar UX patterns. No long-form content walls. Just swipe, learn, earn, repeat.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-bg-card border border-white/[0.08] rounded-2xl p-5 hover:border-white/[0.15] hover:-translate-y-1 transition-all"
            >
              <div className={`w-10 h-10 rounded-xl bg-${feature.color}/10 border border-${feature.color}/30 flex items-center justify-center mb-4`}>
                <feature.icon className={`w-4 h-4 text-${feature.color}`} strokeWidth={1.5} />
              </div>
              <h3 className="font-orbitron text-base font-bold mb-1.5 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
