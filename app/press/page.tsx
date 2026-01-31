'use client'

import Link from 'next/link'
import { ArrowLeft, Newspaper, Mail, ExternalLink, Quote } from 'lucide-react'

export default function PressPage() {
  return (
    <main className="min-h-screen bg-midnight relative z-10">
      <div className="grain" />
      <div className="mesh-bg" />

      <div className="max-w-4xl mx-auto px-6 py-16 relative z-10">
        {/* Header */}
        <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-10 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 mb-6">
            <Newspaper className="w-8 h-8 text-brand-blue" />
          </div>
          <h1 className="font-orbitron text-4xl lg:text-5xl font-bold text-white mb-4">
            Press &amp; <span className="text-brand-blue">Media</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            The latest news, announcements, and media resources from Gig Ignition.
          </p>
        </div>

        {/* Media Contact */}
        <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-orbitron text-sm font-bold text-brand-blue uppercase tracking-wider mb-1">Media Inquiries</h3>
            <p className="text-white/50 text-sm">For press inquiries, interviews, and media resources.</p>
          </div>
          <a
            href="mailto:press@gigignition.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue rounded-xl text-white font-semibold text-sm hover:bg-brand-blue/90 transition-colors flex-shrink-0"
          >
            <Mail className="w-4 h-4" />
            press@gigignition.com
          </a>
        </div>

        {/* Press Release */}
        <div className="bg-bg-card border border-white/[0.08] rounded-2xl p-8 lg:p-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neon-green/10 border border-neon-green/20 rounded-full text-neon-green text-xs font-semibold uppercase tracking-wider mb-6">
            <Newspaper className="w-3 h-3" />
            Press Release
          </div>

          {/* Title */}
          <h2 className="font-orbitron text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
            Gig Ignition Launches Revolutionary Pay-As-You-Go Platform to Democratize the Gig Economy with AI
          </h2>
          <p className="text-white/40 text-sm mb-8">
            Irving, Texas — January 8, 2026
          </p>

          {/* Body */}
          <div className="space-y-5 text-white/60 text-sm leading-relaxed">
            <p>
              <strong className="text-white">Gig Ignition</strong>, a next-generation side hustle accelerator, today announced the launch of its AI-powered mobile platform designed to help Gen Z and young professionals discover, plan, and launch profitable side hustles — without the burden of monthly subscriptions or upfront commitments.
            </p>

            <p>
              The platform introduces <strong className="text-white">Ignition Fuel</strong>, an industry-first pay-as-you-go (PAYG) model that eliminates the subscription fatigue plaguing today&apos;s app economy. Users purchase Fuel only when they&apos;re ready to explore new opportunities, starting at just $2.49 for 100 Fuel Units. Every new user receives 50 free Fuel Units at signup — enough to ignite two hustle tracks and begin earning immediately.
            </p>

            {/* Quote */}
            <div className="my-8 pl-6 border-l-2 border-brand-gold/50">
              <Quote className="w-6 h-6 text-brand-gold/40 mb-3" />
              <p className="text-white/80 text-base italic leading-relaxed mb-3">
                &quot;The gig economy shouldn&apos;t have a cover charge. We built Gig Ignition because we believe everyone deserves a shot at financial independence — and AI is the great equalizer. Our platform doesn&apos;t just list side hustles; it coaches you step-by-step from idea to first dollar.&quot;
              </p>
              <p className="text-brand-gold text-sm font-semibold">— Founder &amp; CEO, Gig Ignition</p>
            </div>

            <p>
              At the heart of Gig Ignition is the <strong className="text-white">HustleEngine AI</strong>, a proprietary matching system that analyzes users&apos; skills, availability, and income goals to deliver personalized hustle recommendations through an intuitive, swipe-based discovery interface called the <strong className="text-white">Ignition Deck</strong>. The platform currently features <strong className="text-white">40+ curated side hustles</strong>, including over 20 AI-powered opportunities specifically designed for digital-native Gen Z users.
            </p>

            <p>
              Once a user &quot;ignites&quot; a hustle, they unlock a comprehensive <strong className="text-white">Mission Center</strong> — a guided execution dashboard with step-by-step checklists, an AI Hustle Coach powered by advanced language models, and progress tracking toward key milestones including the platform&apos;s signature &quot;First Dollar&quot; celebration.
            </p>

            {/* Second Quote */}
            <div className="my-8 pl-6 border-l-2 border-brand-blue/50">
              <Quote className="w-6 h-6 text-brand-blue/40 mb-3" />
              <p className="text-white/80 text-base italic leading-relaxed mb-3">
                &quot;We&apos;ve seen the subscription model create barriers for the very people who need these tools the most. With Ignition Fuel, you invest only in the hustles you&apos;re serious about. And with our Loss Shield feature, even a failed attempt gives you a 50% Fuel refund. We&apos;ve removed the anxiety of trying something new.&quot;
              </p>
              <p className="text-brand-blue text-sm font-semibold">— Founder &amp; CEO, Gig Ignition</p>
            </div>

            <p>
              Key platform features include:
            </p>

            <ul className="space-y-2 ml-4">
              {[
                'AI-Powered Hustle Matching — Personalized side hustle recommendations based on skills, time, and goals',
                'Ignition Fuel PAYG Model — No subscriptions, pay only when you\'re ready to ignite new opportunities',
                '40+ Curated Side Hustles — Vetted, actionable opportunities spanning content creation, freelancing, e-commerce, and more',
                'AI Hustle Coach — 24/7 context-aware coaching with voice-enabled guidance at every step',
                'Loss Shield Protection — 50% Fuel refund on hustles that don\'t work out after genuine effort',
                'Gamification & Social Sharing — Streaks, achievements, and shareable Win Cards for social platforms',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-neon-green mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              Gig Ignition is available for download on iOS and Android. The platform is headquartered in Irving, Texas, with a distributed team spanning expertise in artificial intelligence, mobile technology, and financial services innovation.
            </p>

            <div className="mt-10 pt-8 border-t border-white/[0.08]">
              <h4 className="font-orbitron text-sm font-bold text-white uppercase tracking-wider mb-3">About Gig Ignition</h4>
              <p className="text-white/50 text-sm leading-relaxed">
                Gig Ignition is an AI-powered side hustle accelerator that helps the next generation discover, plan, and launch profitable income streams. Through its innovative pay-as-you-go Ignition Fuel model, personalized AI coaching, and curated hustle marketplace, Gig Ignition is removing barriers to entrepreneurship for millions of aspiring hustlers worldwide. Learn more at <Link href="/" className="text-brand-blue hover:underline">gigignition.com</Link>.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/[0.08]">
              <h4 className="font-orbitron text-sm font-bold text-white uppercase tracking-wider mb-3">Media Contact</h4>
              <p className="text-white/50 text-sm">
                Gig Ignition Communications<br />
                <a href="mailto:press@gigignition.com" className="text-brand-blue hover:underline">press@gigignition.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
