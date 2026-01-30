'use client'

import { motion } from 'framer-motion'
import { Check, X, Zap, Flame, Rocket, Shield, HelpCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const fuelPackages = [
  {
    name: 'Starter',
    fuel: 100,
    price: 2.49,
    perFuel: 0.025,
    cards: 5,
    reshuffles: 10,
    color: 'neon-cyan',
    colorHex: '#00D4FF',
    popular: false,
    badge: null,
  },
  {
    name: 'Hustle Pack',
    fuel: 250,
    price: 4.49,
    perFuel: 0.018,
    cards: 12,
    reshuffles: 25,
    color: 'neon-orange',
    colorHex: '#FF6B35',
    popular: true,
    badge: 'POPULAR',
  },
  {
    name: 'Ignition Bundle',
    fuel: 500,
    price: 7.49,
    perFuel: 0.015,
    cards: 25,
    reshuffles: 50,
    color: 'neon-green',
    colorHex: '#00FF88',
    popular: false,
    badge: 'BEST VALUE',
  },
]

const fuelActions = [
  { action: 'IGNITE a Hustle Card', cost: '20 Fuel', note: '+ Unlimited AI coaching for that hustle', paid: true },
  { action: 'Reshuffle Deck', cost: '10 Fuel', note: 'Fresh AI-matched recommendations', paid: true },
  { action: 'PASS a Card', cost: 'FREE', note: 'Skip hustles at no cost', paid: false },
  { action: 'Track Earnings', cost: 'FREE', note: 'Always free', paid: false },
  { action: 'Complete Missions', cost: 'FREE', note: 'Always free', paid: false },
  { action: 'View Achievements', cost: 'FREE', note: 'Always free', paid: false },
]

const comparison = [
  { feature: 'Monthly fee', them: '$9.99 - $29.99', us: '$0' },
  { feature: 'Charges when idle', them: true, us: false },
  { feature: 'Free trial then paywall', them: true, us: false },
  { feature: 'Coaching included', them: 'Often extra', us: 'Unlimited per hustle' },
  { feature: 'Credits expire', them: 'Usually', us: 'Never' },
  { feature: 'Cancel to stop charges', them: 'Required', us: 'Nothing to cancel' },
]

const faqs = [
  {
    q: 'What is Ignition Fuel?',
    a: 'Fuel is our credit system. You spend Fuel to unlock hustle cards and reshuffle your deck. Unlike subscriptions, you only pay when you actually use the app.',
  },
  {
    q: 'Does Fuel expire?',
    a: 'Never. Buy Fuel when convenient, use it whenever you want.',
  },
  {
    q: 'Is coaching really unlimited?',
    a: 'Yes! Once you ignite a hustle card, you get unlimited access to our AI Hustle Coach for that specific hustle. Ask as many questions as you want — no extra cost.',
  },
  {
    q: "What's the Loss Shield?",
    a: 'If a hustle doesn\'t work out after 7+ days of trying, mark it as "Failed" and we\'ll refund 50% of the Fuel you spent. We believe in your journey.',
  },
]

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section id="pricing" className="py-20 lg:py-28 px-6 lg:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-4 font-orbitron">
            Pricing
          </p>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            No subscriptions. <span className="text-neon-green">No tricks.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-medium">
            Your side hustle shouldn't cost a side hustle. Pay only when you ignite — core features free forever.
          </p>
        </div>

        {/* Free Fuel Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-brand-blue/20 via-neon-green/10 to-brand-gold/20 border border-brand-blue/30 rounded-2xl p-6 mb-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.1)_0%,transparent_70%)]" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-neon-green/20 border border-neon-green/40 px-4 py-2 rounded-full text-neon-green font-bold text-sm mb-3">
              <Zap className="w-4 h-4" />
              FREE TO START
            </div>
            <h3 className="font-orbitron text-2xl lg:text-3xl font-bold mb-2">
              Get <span className="text-neon-green">50 Free Fuel</span> at Sign-Up
            </h3>
            <p className="text-white/60 font-medium">
              Enough to IGNITE 2 hustle cards + 1 reshuffle. Experience the full value before you buy.
            </p>
          </div>
        </motion.div>

        {/* How Fuel Works */}
        <div className="mb-14">
          <h3 className="font-orbitron font-bold text-xl text-center mb-6">
            How Fuel Works
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {fuelActions.map((item, index) => (
              <motion.div
                key={item.action}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`flex items-center justify-between gap-4 p-4 rounded-xl border ${
                  item.paid 
                    ? 'bg-bg-card border-white/[0.08]' 
                    : 'bg-neon-green/5 border-neon-green/20'
                }`}
              >
                <div className="flex-1">
                  <p className="font-semibold text-white text-sm">{item.action}</p>
                  <p className="text-xs text-white/40">{item.note}</p>
                </div>
                <span className={`font-orbitron font-bold text-sm whitespace-nowrap ${
                  item.paid ? 'text-brand-gold' : 'text-neon-green'
                }`}>
                  {item.cost}
                </span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-neon-cyan text-sm font-semibold mt-4">
            ✨ Coaching is UNLIMITED once you ignite a card — no per-question fees!
          </p>
        </div>

        {/* Fuel Packages */}
        <div className="mb-14">
          <h3 className="font-orbitron font-bold text-xl text-center mb-6">
            Fuel Packages
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {fuelPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-bg-card border rounded-2xl p-6 transition-all hover:-translate-y-1 ${
                  pkg.badge === 'BEST VALUE'
                    ? 'border-neon-green/50 shadow-[0_0_30px_rgba(0,255,136,0.15)]' 
                    : pkg.popular
                    ? 'border-neon-orange/50 shadow-[0_0_30px_rgba(255,107,53,0.15)]'
                    : 'border-white/[0.08] hover:border-white/[0.15]'
                }`}
              >
                {pkg.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold font-orbitron ${
                    pkg.badge === 'BEST VALUE' 
                      ? 'bg-neon-green text-midnight' 
                      : 'bg-neon-orange text-midnight'
                  }`}>
                    {pkg.badge}
                  </div>
                )}
                
                <div className="text-center mb-5">
                  <Rocket className={`w-8 h-8 mx-auto mb-3 text-${pkg.color}`} />
                  <h4 className="font-orbitron font-bold text-lg mb-1">{pkg.name}</h4>
                  <div className="font-orbitron text-4xl font-extrabold text-white mb-1">
                    {pkg.fuel}
                  </div>
                  <p className="text-xs text-white/40">Fuel Units</p>
                </div>

                <div className="space-y-2 mb-5 text-sm">
                  <div className="flex justify-between text-white/60">
                    <span>Hustle Cards</span>
                    <span className="font-semibold text-white">{pkg.cards}</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Reshuffles</span>
                    <span className="font-semibold text-white">{pkg.reshuffles}</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Per Fuel</span>
                    <span className="font-semibold text-white">${pkg.perFuel.toFixed(3)}</span>
                  </div>
                </div>

                <div className="text-center">
                  <div className={`font-orbitron text-2xl font-bold text-${pkg.color} mb-2`}>
                    ${pkg.price}
                  </div>
                  <button className={`w-full py-3 rounded-xl font-orbitron font-semibold text-sm transition-all ${
                    pkg.badge === 'BEST VALUE'
                      ? 'bg-neon-green text-midnight hover:bg-neon-green/90'
                      : pkg.popular
                      ? 'bg-neon-orange text-midnight hover:bg-neon-orange/90'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}>
                    Get {pkg.name}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-white/40 text-sm mt-4">
            One-time purchase • No subscription • Fuel never expires
          </p>
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-bg-card border border-white/[0.08] rounded-2xl p-5 lg:p-8 mb-10"
        >
          <h3 className="font-orbitron font-bold text-xl text-center mb-6">
            Why PAYG <span className="text-neon-green">Wins</span>
          </h3>
          
          {/* Mobile-friendly comparison cards */}
          <div className="space-y-3 mb-8">
            {comparison.map((row, i) => (
              <div key={i} className="bg-midnight/50 rounded-xl p-4 border border-white/[0.05]">
                <p className="text-white/80 font-semibold text-sm mb-3">{row.feature}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-2 rounded-lg bg-neon-orange/10 border border-neon-orange/20">
                    <p className="text-[10px] text-neon-orange/60 uppercase tracking-wider mb-1">Them</p>
                    {typeof row.them === 'boolean' ? (
                      row.them ? <X className="w-5 h-5 text-neon-orange mx-auto" /> : <Check className="w-5 h-5 text-white/30 mx-auto" />
                    ) : (
                      <span className="text-neon-orange text-xs font-semibold">{row.them}</span>
                    )}
                  </div>
                  <div className="text-center p-2 rounded-lg bg-neon-green/10 border border-neon-green/20">
                    <p className="text-[10px] text-neon-green/60 uppercase tracking-wider mb-1">Us</p>
                    {typeof row.us === 'boolean' ? (
                      row.us ? <Check className="w-5 h-5 text-neon-green mx-auto" /> : <X className="w-5 h-5 text-white/30 mx-auto" />
                    ) : (
                      <span className="text-neon-green text-xs font-semibold">{row.us}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Annual Savings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-midnight/50 border border-white/[0.05] rounded-xl p-4">
              <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">Casual User (2 cards/mo)</p>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-neon-orange/60 line-through text-sm">$179.88/yr</p>
                  <p className="text-[10px] text-white/40">Subscription apps</p>
                </div>
                <div className="text-2xl text-white/30">→</div>
                <div className="text-right">
                  <p className="font-orbitron text-2xl font-bold text-neon-green">~$12/yr</p>
                  <p className="text-[10px] text-white/40">Gig Ignition</p>
                </div>
              </div>
            </div>
            <div className="bg-midnight/50 border border-white/[0.05] rounded-xl p-4">
              <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">Active User (4 cards/mo)</p>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-neon-orange/60 line-through text-sm">$179.88/yr</p>
                  <p className="text-[10px] text-white/40">Subscription apps</p>
                </div>
                <div className="text-2xl text-white/30">→</div>
                <div className="text-right">
                  <p className="font-orbitron text-2xl font-bold text-neon-green">~$30/yr</p>
                  <p className="text-[10px] text-white/40">Gig Ignition</p>
                </div>
              </div>
            </div>
          </div>
          </div>

          <p className="text-center text-white/50 text-sm font-medium">
            Even power users save <span className="text-neon-green font-bold">80%+</span> vs subscriptions. You keep the difference.
          </p>
        </motion.div>

        {/* Loss Shield */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-neon-purple/10 border border-neon-purple/30 rounded-2xl p-5 mb-10 flex gap-4 items-start"
        >
          <Shield className="w-8 h-8 text-neon-purple flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-orbitron font-bold text-neon-purple mb-1">Loss Shield Protection</h4>
            <p className="text-white/60 text-sm">
              If you mark a hustle as "Failed" after working on it for 7+ days, we automatically refund 
              <span className="text-neon-purple font-semibold"> 50% of the Fuel</span> you spent on that card. We invest in your learning.
            </p>
          </div>
        </motion.div>

        {/* FAQ */}
        <div className="mb-10">
          <h3 className="font-orbitron font-bold text-xl text-center mb-6">
            Questions?
          </h3>
          <div className="space-y-3 max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-bg-card border border-white/[0.08] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-semibold text-white text-sm">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-white/40 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4">
                    <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-white/40 text-sm font-medium mb-4">
            50 free Fuel. No credit card. Zero commitment.
          </p>
          <button className="group inline-flex items-center justify-center gap-3 bg-gradient-to-br from-brand-blue to-[#1E5FAA] text-white px-8 py-4 rounded-full font-orbitron font-semibold text-base shadow-[0_0_40px_rgba(43,124,212,0.4)] hover:shadow-[0_10px_50px_rgba(43,124,212,0.5)] hover:-translate-y-1 transition-all">
            Download Free — Get 50 Fuel Instantly
          </button>
        </div>
      </div>
    </section>
  )
}
