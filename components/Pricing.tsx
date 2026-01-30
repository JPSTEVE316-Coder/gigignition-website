'use client'

import { motion } from 'framer-motion'
import { Check, X, Zap, Flame, Rocket, Sparkles } from 'lucide-react'

const fuelPackages = [
  {
    name: 'Starter Spark',
    fuel: 100,
    price: 1.99,
    perFuel: 0.020,
    icon: Zap,
    popular: false,
  },
  {
    name: 'Hustle Pack',
    fuel: 500,
    price: 7.99,
    perFuel: 0.016,
    icon: Flame,
    popular: true,
  },
  {
    name: 'Ignition Bundle',
    fuel: 1200,
    price: 14.99,
    perFuel: 0.012,
    icon: Rocket,
    popular: false,
  },
  {
    name: 'Rocket Fuel',
    fuel: 3000,
    price: 29.99,
    perFuel: 0.010,
    icon: Sparkles,
    popular: false,
  },
]

const freeFeatures = [
  'Browse & swipe hustles',
  'Track your earnings',
  'Complete missions',
  'View achievements',
  'Daily streaks',
]

const paidFeatures = [
  { action: 'Generate new AI hustle recommendations', cost: '20 Fuel' },
  { action: 'Ask the AI Hustle Coach', cost: '5 Fuel' },
]

const comparison = [
  { feature: 'Charges when you don\'t use it', them: true, us: false },
  { feature: 'Free trial then paywall', them: true, us: false },
  { feature: 'Forgotten subscriptions = wasted $', them: true, us: false },
  { feature: 'Credits expire', them: true, us: false },
  { feature: 'Core features always free', them: false, us: true },
  { feature: '$0 to start', them: false, us: true },
]

export default function Pricing() {
  return (
    <section id="pricing" className="min-h-screen flex items-center py-20 lg:py-0 px-6 lg:px-12 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-4 font-orbitron">
            Pricing
          </p>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            No subscriptions. <span className="text-neon-green">No tricks.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-medium">
            Your side hustle shouldn't cost a side hustle. Pay only when you use premium features — 
            core app is free forever.
          </p>
        </div>

        {/* Free vs Paid Split */}
        <div className="grid lg:grid-cols-2 gap-5 mb-12">
          {/* Always Free */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-bg-card border border-white/[0.08] rounded-3xl p-6 lg:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center">
                <Check className="w-6 h-6 text-neon-green" />
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-xl">Always Free</h3>
                <p className="text-sm text-white/50">No credit card required</p>
              </div>
            </div>
            <ul className="space-y-3">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-white/70">
                  <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Premium Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-bg-card border border-white/[0.08] rounded-3xl p-6 lg:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center">
                <Flame className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-xl">Pay-As-You-Go</h3>
                <p className="text-sm text-white/50">Use Ignition Fuel credits</p>
              </div>
            </div>
            <ul className="space-y-3">
              {paidFeatures.map((item) => (
                <li key={item.action} className="flex items-center justify-between gap-4 p-3 bg-midnight/50 rounded-xl border border-white/[0.05]">
                  <span className="text-white/70 font-medium text-sm">{item.action}</span>
                  <span className="font-orbitron font-bold text-brand-gold text-sm whitespace-nowrap">{item.cost}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 p-4 bg-neon-green/5 border border-neon-green/20 rounded-xl">
              <p className="text-neon-green font-semibold text-sm">
                🎁 New users get <span className="font-orbitron">100 FREE Fuel</span> — enough to generate 5 hustle sets or ask 20 coaching questions!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Fuel Packages */}
        <div className="mb-14">
          <h3 className="font-orbitron font-bold text-xl text-center mb-6">
            Fuel Packages <span className="text-white/40 font-rajdhani font-normal text-base ml-2">Credits never expire</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {fuelPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative bg-bg-card border rounded-2xl p-5 text-center transition-all hover:-translate-y-1 ${
                  pkg.popular 
                    ? 'border-brand-blue/50 shadow-[0_0_30px_rgba(43,124,212,0.15)]' 
                    : 'border-white/[0.08] hover:border-white/[0.15]'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue px-3 py-1 rounded-full text-xs font-bold font-orbitron">
                    POPULAR
                  </div>
                )}
                <pkg.icon className={`w-8 h-8 mx-auto mb-3 ${pkg.popular ? 'text-brand-blue' : 'text-white/40'}`} />
                <h4 className="font-orbitron font-bold text-sm mb-1">{pkg.name}</h4>
                <div className="font-orbitron text-3xl font-extrabold text-white mb-1">
                  {pkg.fuel.toLocaleString()}
                </div>
                <p className="text-xs text-white/40 mb-3">Fuel Units</p>
                <div className="font-orbitron text-xl font-bold text-neon-green mb-1">
                  ${pkg.price}
                </div>
                <p className="text-xs text-white/40">
                  ${pkg.perFuel.toFixed(3)}/fuel
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-bg-card to-midnight border border-white/[0.08] rounded-3xl p-6 lg:p-8 mb-10"
        >
          <h3 className="font-orbitron font-bold text-xl text-center mb-6">
            Why PAYG <span className="text-neon-green">Wins</span>
          </h3>
          
          {/* Comparison Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full min-w-[400px]">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-3 text-white/50 font-semibold text-sm"></th>
                  <th className="text-center py-3 text-neon-orange font-orbitron font-bold text-sm w-24">Them</th>
                  <th className="text-center py-3 text-neon-green font-orbitron font-bold text-sm w-24">Us</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-white/[0.05]">
                    <td className="py-3 text-white/70 text-sm font-medium">{row.feature}</td>
                    <td className="py-3 text-center">
                      {row.them ? (
                        <X className="w-5 h-5 text-neon-orange mx-auto" />
                      ) : (
                        <Check className="w-5 h-5 text-white/20 mx-auto" />
                      )}
                    </td>
                    <td className="py-3 text-center">
                      {row.us ? (
                        <Check className="w-5 h-5 text-neon-green mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-white/20 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Savings Callout */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neon-orange/5 border border-neon-orange/20 rounded-xl p-4 text-center">
              <p className="text-neon-orange font-orbitron font-bold text-sm mb-1">THEM</p>
              <p className="font-orbitron text-2xl font-extrabold text-white">$180<span className="text-white/40 text-lg">/year</span></p>
              <p className="text-xs text-white/40 mt-1">Whether you use it or not</p>
            </div>
            <div className="bg-neon-green/5 border border-neon-green/20 rounded-xl p-4 text-center">
              <p className="text-neon-green font-orbitron font-bold text-sm mb-1">US</p>
              <p className="font-orbitron text-2xl font-extrabold text-white">$15-30<span className="text-white/40 text-lg">/year</span></p>
              <p className="text-xs text-white/40 mt-1">For most active users</p>
            </div>
          </div>
          
          <p className="text-center text-white/50 text-sm mt-5 font-medium">
            You keep the difference. <span className="text-brand-gold">That's the Gig Ignition way.</span>
          </p>
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-white/40 text-sm font-medium mb-4">
            100 free Fuel. No credit card. No commitment.
          </p>
          <button className="group inline-flex items-center justify-center gap-3 bg-gradient-to-br from-brand-blue to-[#1E5FAA] text-white px-8 py-4 rounded-full font-orbitron font-semibold text-base shadow-[0_0_40px_rgba(43,124,212,0.4)] hover:shadow-[0_10px_50px_rgba(43,124,212,0.5)] hover:-translate-y-1 transition-all">
            Start Your Hustle for $0
          </button>
        </div>
      </div>
    </section>
  )
}
