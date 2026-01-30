'use client'

import { motion } from 'framer-motion'

const wins = [
  { initials: 'AJ', text: 'Alex just made', amount: '$50', action: 'walking dogs', time: '2 min ago' },
  { initials: 'SM', text: 'Sarah sold a vintage jacket for', amount: '$120', action: '', time: '5 min ago' },
  { initials: 'JK', text: 'Jordan earned', amount: '$85', action: 'editing videos', time: '12 min ago' },
  { initials: 'TP', text: 'Taylor flipped sneakers for', amount: '$200', action: 'profit', time: '18 min ago' },
  { initials: 'MR', text: 'Maya earned', amount: '$45', action: 'tutoring math', time: '25 min ago' },
  { initials: 'CL', text: 'Chris made', amount: '$75', action: 'beta testing apps', time: '32 min ago' },
]

const safetyBadges = [
  {
    title: 'VERIFIED GIGS',
    description: 'Every opportunity is vetted and safe for teens.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-stratosphere">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
  },
  {
    title: 'LOCATION CHECKS',
    description: 'Smart safety zones keep your teen protected.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-stratosphere">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
  {
    title: 'DATA ENCRYPTED',
    description: 'Bank-level security protects all information.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-stratosphere">
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
    ),
  },
  {
    title: 'GUARDIAN MODE',
    description: 'Parents can view progress without hovering.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-stratosphere">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
      </svg>
    ),
  },
]

export default function SocialProof() {
  return (
    <section id="safety" className="py-24 px-6 bg-white relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-6 text-white font-orbitron"
            style={{ background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)' }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
              <path d="M22 4L12 14.01l-3-3"/>
            </svg>
            LIVE WINS
          </div>
          <h2 className="font-orbitron text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            Real Hustlers. Real Earnings.
          </h2>
          <p className="text-lg text-navy-muted max-w-2xl mx-auto">
            Join thousands of Gen Z&apos;ers already stacking their first bags.
          </p>
        </motion.div>
      </div>

      {/* Wins Ticker */}
      <div className="mb-20 overflow-hidden">
        <div className="flex animate-ticker">
          {/* Duplicate wins for seamless loop */}
          {[...wins, ...wins].map((win, index) => (
            <div key={index} className="win-item">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-stratosphere to-stratosphere-light flex items-center justify-center text-white font-bold text-sm">
                {win.initials}
              </div>
              <div>
                <div className="text-sm text-navy">
                  {win.text} <span className="text-stratosphere font-bold">{win.amount}</span> {win.action}
                </div>
                <div className="text-xs text-navy-muted">{win.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Safety Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyBadges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="safety-badge"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-stratosphere/10 to-stratosphere/20 flex items-center justify-center">
                {badge.icon}
              </div>
              <h4 className="font-orbitron font-bold text-sm text-navy mb-2">
                {badge.title}
              </h4>
              <p className="text-sm text-navy-muted">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
