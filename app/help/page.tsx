'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Search, ChevronDown, Mail, MessageCircle, HelpCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  name: string
  icon: string
  items: FAQItem[]
}

const faqData: FAQCategory[] = [
  {
    name: 'Getting Started',
    icon: '🚀',
    items: [
      {
        question: 'What is Gig Ignition and how does it work?',
        answer:
          'Gig Ignition is a mobile-first Side Hustle Accelerator app that uses AI to help you discover, plan, and launch side hustles. Start with a quick 3-step onboarding quiz about your time, skills, and income goals. Then our HustleEngine AI matches you with personalized hustle cards in the Ignition Deck — swipe right to IGNITE a hustle and get a step-by-step Mission Center with AI coaching to guide you from idea to first dollar.',
      },
      {
        question: 'Do I need any experience to use Gig Ignition?',
        answer:
          'Not at all. Gig Ignition is designed for complete beginners. The AI Hustle Coach adapts to your skill level and walks you through every step — from setting up your first gig profile to landing your first client. Each hustle card comes with a guided Mission Center checklist, and you can tap "Ask Coach" at any step for personalized AI guidance, including voice responses.',
      },
      {
        question: 'How quickly can I start earning money?',
        answer:
          'Many of our hustle cards are designed to get you earning within your first week. Some quick-start hustles like AI freelance writing or social media management can land you your first paying gig within days. The app tracks your progress toward a "First Dollar" milestone celebration, and the AI Coach keeps you accountable with step-specific guidance.',
      },
      {
        question: 'What devices is Gig Ignition available on?',
        answer:
          'Gig Ignition is available on iOS and Android. Download it from the App Store or Google Play.',
      },
      {
        question: 'How does the onboarding work?',
        answer:
          'When you first open the app, you\'ll complete a quick 3-step quiz: (1) your time availability — whether you have 1 hour a day, weekends, or full-time, (2) your skills and superpowers — creative, tech, physical, or none, and (3) your income goals — from $50/day to $2,000+/month. Our HustleEngine AI uses your answers to match you with the most relevant side hustles from our curated database.',
      },
    ],
  },
  {
    name: 'Ignition Fuel & Pricing',
    icon: '⛽',
    items: [
      {
        question: 'How does pricing work? Is it a subscription?',
        answer:
          'Gig Ignition uses a pay-as-you-go model called "Ignition Fuel" — no subscriptions, no monthly fees. You purchase Fuel when you need it. Every new user gets 50 Fuel Units free at signup, enough to IGNITE 2 hustle cards and reshuffle your deck once. Once you see the value, you can buy more Fuel in packs.',
      },
      {
        question: 'What does Fuel cost and what are the packages?',
        answer:
          'We offer three Fuel packages: Starter (100 Fuel for $2.49 — good for 5 hustle cards or 10 reshuffles), Hustle Pack (250 Fuel for $4.49 — 12 cards or 25 reshuffles, our most popular), and Ignition Bundle (500 Fuel for $7.49 — 25 cards or 50 reshuffles, best value at just $0.015 per Fuel).',
      },
      {
        question: 'What costs Fuel and what\'s free?',
        answer:
          'IGNITING a hustle card costs 20 Fuel — this unlocks its full Mission Center with step-by-step guidance and AI coaching. Reshuffling your Ignition Deck for fresh recommendations costs 10 Fuel. Passing on a card (swiping left) is always free. And once you\'ve ignited a hustle, AI Coaching for that hustle is unlimited at no extra Fuel cost.',
      },
      {
        question: 'What is Loss Shield?',
        answer:
          'Loss Shield protects your Fuel investment. If you IGNITE a hustle and mark it as "failed" after giving it at least 7 days of effort, you\'ll receive a 50% Fuel refund (10 Fuel back). It\'s our way of reducing the anxiety of trying something new — if a hustle doesn\'t work out, you\'re not out the full cost.',
      },
      {
        question: 'How do I check my remaining Fuel?',
        answer:
          'Your Fuel balance is displayed at the top of the app dashboard. You can also go to Settings → Ignition Fuel for a detailed breakdown of your usage history and options to purchase more.',
      },
    ],
  },
  {
    name: 'Ignition Deck & Hustles',
    icon: '🃏',
    items: [
      {
        question: 'How does the Ignition Deck work?',
        answer:
          'The Ignition Deck is a Tinder-style discovery experience for side hustles. Our HustleEngine AI matches you with personalized hustle cards based on your onboarding quiz answers. Each card shows the opportunity, estimated earnings, and a virality score showing trending potential. Swipe right to IGNITE (20 Fuel) and unlock the full guided track, or swipe left to PASS for free.',
      },
      {
        question: 'How many side hustles are available?',
        answer:
          'We currently feature 40+ curated side hustles, including 20+ AI-powered opportunities specifically targeting Gen Z preferences. Categories span content creation, freelance services, e-commerce, coaching, and more. New hustles are added regularly based on market trends and user demand.',
      },
      {
        question: 'How does the AI Hustle Coach work?',
        answer:
          'The AI Hustle Coach is your personal side-hustle mentor, powered by GPT-4o-mini. It\'s context-aware — it knows exactly which hustle you\'re working on and which step you\'re at. You can ask it questions, get personalized guidance, and even listen to voice-enabled responses via text-to-speech. It automatically suggests relevant tools and resources like Fiverr, Canva, Etsy, and Stripe. Use the quick-action buttons ("What\'s next?" or "I\'m stuck!") for instant help.',
      },
      {
        question: 'What is the Mission Center?',
        answer:
          'Once you IGNITE a hustle card, it moves to your Mission Center — a step-by-step execution dashboard. You\'ll see a visual checklist of everything you need to do, with haptic feedback when you complete each step. At any point, tap "Ask Coach" for AI guidance specific to your current step. The Mission Center tracks your progress and helps you stay on course toward your first earnings.',
      },
      {
        question: 'Can I work on multiple hustles at once?',
        answer:
          'Absolutely! You can IGNITE as many hustle cards as you want (each costs 20 Fuel). However, we recommend focusing on one hustle until you\'re earning consistently before branching out. The AI Coach will help you decide when you\'re ready to diversify your income streams.',
      },
    ],
  },
  {
    name: 'Earnings & Gamification',
    icon: '🏆',
    items: [
      {
        question: 'How does the Earnings Dashboard work?',
        answer:
          'The Earnings Dashboard lets you track projected vs actual income for each hustle you\'ve ignited. See weekly breakdowns of your progress and celebrate milestones — including the coveted "First Dollar" celebration when you earn your initial income from a side hustle.',
      },
      {
        question: 'What are achievements and streaks?',
        answer:
          'Gig Ignition includes a full gamification system to keep you motivated. Build daily streaks by working on your hustles consistently, and unlock 8 unique achievements as you hit milestones. When you accomplish something big, you\'ll get an "Ignition Moment" celebration with confetti and a shareable card you can post on social media.',
      },
      {
        question: 'Can I share my progress on social media?',
        answer:
          'Yes! Gig Ignition automatically generates shareable Win Cards (optimized for Instagram Stories, TikTok, and Reels at 1080x1920). You can share your achievements, milestones, and earnings celebrations directly to social platforms. There\'s also a "Clone My Success" deep link feature that lets friends see and start the same hustle you\'re crushing.',
      },
    ],
  },
  {
    name: 'Technical Support',
    icon: '🔧',
    items: [
      {
        question: 'The app is crashing or running slowly. What should I do?',
        answer:
          'First, make sure you\'re running the latest version of the app (check your app store for updates). Try force-closing and reopening the app. If the issue persists, clear the app cache in Settings → Advanced → Clear Cache. Still having trouble? Contact us at support@gigignition.com with your device model and OS version.',
      },
      {
        question: 'I\'m not receiving notifications. How do I fix this?',
        answer:
          'Check that notifications are enabled for Gig Ignition in your device\'s system settings. In the app, go to Settings → Notifications and make sure your preferred alerts are toggled on. On Android, also check that battery optimization isn\'t preventing background notifications.',
      },
      {
        question: 'How do I reset my password?',
        answer:
          'Tap "Forgot Password" on the login screen and enter your email. You\'ll receive a reset link within a few minutes. Check your spam folder if you don\'t see it. If you still can\'t reset, email support@gigignition.com and we\'ll help you regain access.',
      },
    ],
  },
]

function AccordionItem({ item, isOpen, toggle }: { item: FAQItem; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border border-white/[0.08] rounded-xl overflow-hidden">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="text-white font-medium text-sm pr-4">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-white/40 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-white/50 text-sm leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function HelpPage() {
  const [search, setSearch] = useState('')
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggle = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const filteredData = search
    ? faqData
        .map((cat) => ({
          ...cat,
          items: cat.items.filter(
            (item) =>
              item.question.toLowerCase().includes(search.toLowerCase()) ||
              item.answer.toLowerCase().includes(search.toLowerCase())
          ),
        }))
        .filter((cat) => cat.items.length > 0)
    : faqData

  return (
    <main className="min-h-screen bg-midnight relative z-10">
      <div className="grain" />
      <div className="mesh-bg" />

      <div className="max-w-3xl mx-auto px-6 py-16 relative z-10">
        {/* Header */}
        <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-10 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 mb-6">
            <HelpCircle className="w-8 h-8 text-brand-blue" />
          </div>
          <h1 className="font-orbitron text-4xl lg:text-5xl font-bold text-white mb-3">
            Help <span className="text-brand-blue">Center</span>
          </h1>
          <p className="text-white/50 text-lg max-w-lg mx-auto font-medium">
            Find answers to common questions about Gig Ignition.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
          <input
            type="text"
            placeholder="Search for answers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-bg-card border border-white/[0.08] rounded-2xl text-white placeholder:text-white/30 text-base focus:outline-none focus:border-brand-blue/50 transition-colors"
          />
        </div>

        {/* FAQ Categories */}
        <div className="space-y-10">
          {filteredData.map((category) => (
            <div key={category.name}>
              <h2 className="font-orbitron text-lg font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                {category.name}
              </h2>
              <div className="space-y-2">
                {category.items.map((item, idx) => {
                  const key = `${category.name}-${idx}`
                  return (
                    <AccordionItem
                      key={key}
                      item={item}
                      isOpen={openItems.has(key)}
                      toggle={() => toggle(key)}
                    />
                  )
                })}
              </div>
            </div>
          ))}

          {filteredData.length === 0 && (
            <div className="text-center py-16 text-white/30">
              <p className="text-lg">No results found.</p>
              <p className="text-sm mt-2">Try a different search term or browse the categories above.</p>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="mt-16 p-8 bg-bg-card border border-white/[0.08] rounded-2xl text-center">
          <MessageCircle className="w-10 h-10 text-neon-green mx-auto mb-4" />
          <h3 className="font-orbitron text-xl font-bold text-white mb-2">Still need help?</h3>
          <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">
            Can&apos;t find what you&apos;re looking for? Our support team is here to help you succeed.
          </p>
          <a
            href="mailto:support@gigignition.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue rounded-xl text-white font-semibold text-sm hover:bg-brand-blue/90 transition-colors"
          >
            <Mail className="w-4 h-4" />
            support@gigignition.com
          </a>
        </div>
      </div>
    </main>
  )
}
