'use client'

import { motion } from 'framer-motion'

const features = [
  'Real-world invoicing & client communication skills',
  'Every gig vetted for teen safety',
  'Guardian Mode: See progress, not control',
  'Financial literacy built into every step',
]

export default function ParentalIntel() {
  return (
    <section id="parents" className="py-32 px-6 bg-gradient-to-b from-slate-50 to-white relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label font-orbitron">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                <path d="M16 3.13a4 4 0 010 7.75"/>
              </svg>
              PARENTAL INTEL
            </div>

            <h2 className="font-orbitron text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Not Just Money.
              <br />
              <span className="text-stratosphere">Mastery.</span>
            </h2>

            <p className="text-lg text-navy-muted leading-relaxed mb-8">
              Gig Ignition isn&apos;t just about quick cash. It&apos;s a financial literacy sandbox. We teach your teen how to invoice, how to communicate with clients, and the value of a dollar earned. Every gig is vetted for safety, and our &quot;Guardian Mode&quot; lets you see their progress without hovering.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ignition-gold to-ignition-amber flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="font-medium text-navy">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Guardian Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="guardian-mockup rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <h3 className="font-orbitron font-bold text-white text-lg">
                  👨‍👩‍👦 Guardian Dashboard
                </h3>
                <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-green-500/20 text-green-400">
                  Live
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-2xl p-5">
                  <div className="text-white/50 text-sm mb-2">Total Earned</div>
                  <div className="font-orbitron font-bold text-2xl text-ignition-gold">$347.50</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-5">
                  <div className="text-white/50 text-sm mb-2">Gigs Completed</div>
                  <div className="font-orbitron font-bold text-2xl text-white">12</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-5">
                  <div className="text-white/50 text-sm mb-2">Skills Learned</div>
                  <div className="font-orbitron font-bold text-2xl text-white">8</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-5">
                  <div className="text-white/50 text-sm mb-2">Safety Score</div>
                  <div className="font-orbitron font-bold text-2xl text-green-400">100%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
