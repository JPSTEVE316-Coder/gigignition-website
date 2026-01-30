'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'The Match',
    description: 'Stop doom-scrolling. Our AI scans your skills and location to find 3 gigs you can start today. No resume needed.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-ignition-gold">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        <path d="M10 7v4l3 2"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'The Coach',
    description: 'Stuck? Your AI co-pilot breaks the gig down into micro-steps. "Take photo." "List item." "Send invoice." "Get paid."',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-ignition-gold">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'The Bag',
    description: 'Track your earnings in real-time. Watch your "Fuel Gauge" (bank balance) go up. Celebrate every milestone.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-ignition-gold">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
  },
]

export default function IgnitionEngine() {
  return (
    <section id="how-it-works" className="py-32 px-6 bg-gradient-to-b from-slate-50 to-white relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="section-label font-orbitron">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            THE IGNITION ENGINE
          </div>
          <h2 className="font-orbitron text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            From Zero to Earning in 3 Steps
          </h2>
          <p className="text-lg text-navy-muted max-w-2xl mx-auto">
            Stop overthinking. Start earning. Our AI handles the hard part so you can focus on the bag.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-glass relative overflow-hidden group"
            >
              {/* Top border animation */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-stratosphere to-ignition-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-400" />
              
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-stratosphere to-stratosphere-dark text-white font-orbitron font-extrabold text-xl mb-6 shadow-lg shadow-stratosphere/30">
                {step.number}
              </div>
              
              <h3 className="font-orbitron text-2xl font-bold mb-3 text-navy">
                {step.title}
              </h3>
              
              <p className="text-navy-muted leading-relaxed">
                {step.description}
              </p>
              
              <div className="mt-6 pt-6 border-t border-slate-100">
                {step.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
