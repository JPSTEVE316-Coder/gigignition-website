'use client'

import Link from 'next/link'
import { ArrowLeft, Zap, Globe, Shield, Users, Brain, Rocket } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-midnight relative z-10">
      <div className="grain" />
      <div className="mesh-bg" />

      <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        {/* Header */}
        <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-10 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 mb-6">
            <Rocket className="w-8 h-8 text-brand-gold" />
          </div>
          <h1 className="font-orbitron text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-brand-gold">Gig Ignition</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            We&apos;re on a mission to democratize the gig economy with AI — putting the power of entrepreneurship into the hands of the next generation.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-bg-card border border-white/[0.08] rounded-2xl p-8 lg:p-12 mb-12">
          <h2 className="font-orbitron text-2xl font-bold text-white mb-6">Our Story</h2>
          <div className="space-y-4 text-white/50 text-sm leading-relaxed">
            <p>
              Gig Ignition was born from a simple but powerful insight: the gig economy is exploding, but most people — especially Gen Z — are left to figure it out alone. No roadmap, no coaching, no structure. Just an overwhelming sea of &quot;side hustle ideas&quot; with no clear path from idea to income.
            </p>
            <p>
              Our founding team brings over <span className="text-white font-semibold">25 years of combined experience</span> across artificial intelligence, energy technology, and global enterprise — including leadership roles at Fortune 500 companies and cutting-edge work in defense AI systems. We&apos;ve built and scaled technology ventures across <span className="text-white font-semibold">India and Sub-Saharan Africa</span>, driven renewable energy innovation, and seen firsthand how technology can transform lives when it&apos;s designed to empower rather than extract.
            </p>
            <p>
              Now, we&apos;re channeling all of that experience into something deeply personal: <span className="text-neon-green font-semibold">giving every ambitious person the AI-powered tools they need to build real income streams</span> — without gatekeepers, without subscriptions, and without the guesswork.
            </p>
            <p>
              Gig Ignition isn&apos;t just another app. It&apos;s an accelerator for the hustle generation — built by people who understand both the power of AI and the reality of starting from scratch.
            </p>
          </div>
        </div>

        {/* Values */}
        <h2 className="font-orbitron text-2xl font-bold text-white mb-8 text-center">What We Stand For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {[
            {
              icon: Brain,
              title: 'AI for Everyone',
              description: 'We believe AI should be a tool that empowers individuals — not just corporations. Our AI coaching adapts to you, wherever you are.',
              color: 'text-brand-blue',
              bg: 'bg-brand-blue/10',
              border: 'border-brand-blue/20',
            },
            {
              icon: Zap,
              title: 'No Gatekeeping',
              description: 'No subscriptions. No lock-ins. Our pay-as-you-go Ignition Fuel model means you only pay when you\'re ready to ignite a new opportunity.',
              color: 'text-neon-green',
              bg: 'bg-neon-green/10',
              border: 'border-neon-green/20',
            },
            {
              icon: Globe,
              title: 'Global Mindset',
              description: 'Our team has operated across four continents. We\'re building for a global generation that thinks beyond borders.',
              color: 'text-brand-gold',
              bg: 'bg-brand-gold/10',
              border: 'border-brand-gold/20',
            },
            {
              icon: Shield,
              title: 'Trust & Transparency',
              description: 'Every hustle is vetted. Every cost is clear. We earn your trust by being upfront about what works and what it costs.',
              color: 'text-brand-blue',
              bg: 'bg-brand-blue/10',
              border: 'border-brand-blue/20',
            },
            {
              icon: Users,
              title: 'Community First',
              description: 'We\'re building more than an app — we\'re building a movement of hustlers who lift each other up and share wins.',
              color: 'text-neon-green',
              bg: 'bg-neon-green/10',
              border: 'border-neon-green/20',
            },
            {
              icon: Rocket,
              title: 'Bias Toward Action',
              description: 'Ideas are cheap. Execution is everything. Every feature we build is designed to get you from zero to earning — fast.',
              color: 'text-brand-gold',
              bg: 'bg-brand-gold/10',
              border: 'border-brand-gold/20',
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className={`${value.bg} border ${value.border} rounded-2xl p-6`}
            >
              <value.icon className={`w-8 h-8 ${value.color} mb-4`} />
              <h3 className="font-orbitron text-base font-bold text-white mb-2">{value.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-bg-card border border-white/[0.08] rounded-2xl p-8">
          <h3 className="font-orbitron text-xl font-bold text-white mb-3">Ready to Ignite Your Hustle?</h3>
          <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">
            Join thousands of ambitious hustlers already using AI to build their income streams.
          </p>
          <Link
            href="/#pricing"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue rounded-xl text-white font-semibold text-sm hover:bg-brand-blue/90 transition-colors"
          >
            <Zap className="w-4 h-4" />
            Get Started
          </Link>
        </div>
      </div>
    </main>
  )
}
