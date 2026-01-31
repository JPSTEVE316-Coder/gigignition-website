'use client'

import Link from 'next/link'
import { ArrowLeft, Briefcase, MapPin, Clock, Send, Star, ArrowRight } from 'lucide-react'

const openRoles = [
  {
    title: 'Growth Marketing Lead',
    department: 'Marketing',
    location: 'Remote (US)',
    type: 'Full-time',
    description: 'Drive user acquisition and engagement through creative, data-driven campaigns targeting Gen Z. Own the funnel from awareness to activation across social, content, and paid channels.',
  },
  {
    title: 'Community Manager',
    department: 'Community',
    location: 'Remote (US)',
    type: 'Full-time',
    description: 'Build and nurture our community of hustlers. Create engagement programs, moderate discussions, amplify user success stories, and be the voice of our users internally.',
  },
]

export default function CareersPage() {
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
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neon-green/10 border border-neon-green/20 mb-6">
            <Briefcase className="w-8 h-8 text-neon-green" />
          </div>
          <h1 className="font-orbitron text-4xl lg:text-5xl font-bold text-white mb-4">
            Join the <span className="text-neon-green">Mission</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Help us democratize the gig economy with AI. We&apos;re building something that matters — and we want exceptional people on the team.
          </p>
        </div>

        {/* Hiring Status Banner */}
        <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-2xl p-6 mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="w-5 h-5 text-brand-gold" />
            <span className="font-orbitron text-sm font-bold text-brand-gold uppercase tracking-wider">Talent Pipeline</span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed max-w-xl mx-auto">
            We&apos;re not actively hiring right now, but we&apos;re always looking for exceptional talent. If you&apos;re passionate about AI, the gig economy, and empowering people — we want to hear from you.
          </p>
        </div>

        {/* Why Join */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {[
            { emoji: '🚀', title: 'Early Stage Impact', desc: 'Join early and shape the product, culture, and direction from the ground up.' },
            { emoji: '🌍', title: 'Remote First', desc: 'Work from anywhere. We believe great talent isn\'t confined to a zip code.' },
            { emoji: '⚡', title: 'Mission-Driven', desc: 'We\'re building something that genuinely helps people earn and thrive.' },
          ].map((perk, idx) => (
            <div key={idx} className="bg-bg-card border border-white/[0.08] rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">{perk.emoji}</div>
              <h3 className="font-orbitron text-sm font-bold text-white mb-2">{perk.title}</h3>
              <p className="text-white/40 text-sm">{perk.desc}</p>
            </div>
          ))}
        </div>

        {/* Open Roles */}
        <h2 className="font-orbitron text-2xl font-bold text-white mb-6">Future Roles</h2>
        <p className="text-white/50 text-sm mb-8 max-w-xl">
          These are roles we anticipate opening as we grow. Express your interest below and we&apos;ll reach out when the time is right.
        </p>

        <div className="space-y-4 mb-16">
          {openRoles.map((role, idx) => (
            <div
              key={idx}
              className="bg-bg-card border border-white/[0.08] rounded-2xl p-6 lg:p-8 hover:border-white/[0.15] transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-orbitron text-lg font-bold text-white mb-2">{role.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs text-brand-blue font-semibold">
                      <Briefcase className="w-3 h-3" />
                      {role.department}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-white/40">
                      <MapPin className="w-3 h-3" />
                      {role.location}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-white/40">
                      <Clock className="w-3 h-3" />
                      {role.type}
                    </span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">{role.description}</p>
                </div>
                <a
                  href={`mailto:careers@gigignition.com?subject=Interest: ${role.title}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.05] border border-white/[0.1] rounded-xl text-white/60 font-semibold text-sm hover:text-white hover:border-white/[0.2] transition-colors flex-shrink-0"
                >
                  Express Interest
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* General Application */}
        <div className="bg-bg-card border border-white/[0.08] rounded-2xl p-8 text-center">
          <Send className="w-10 h-10 text-brand-blue mx-auto mb-4" />
          <h3 className="font-orbitron text-xl font-bold text-white mb-2">Don&apos;t See Your Role?</h3>
          <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">
            We&apos;re always open to hearing from talented people. Send us your resume and tell us how you&apos;d make an impact.
          </p>
          <a
            href="mailto:careers@gigignition.com?subject=General Application — Gig Ignition"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue rounded-xl text-white font-semibold text-sm hover:bg-brand-blue/90 transition-colors"
          >
            <Send className="w-4 h-4" />
            Send Your Application
          </a>
        </div>
      </div>
    </main>
  )
}
