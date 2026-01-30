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
          'Gig Ignition is an AI-powered app that helps you discover, learn, and launch side hustles. When you open the app, you\'ll see hustle cards you can swipe through — like a dating app, but for income streams. Swipe right on hustles that interest you, and the app gives you a personalized roadmap with step-by-step guidance, AI coaching, and tools to get started earning.',
      },
      {
        question: 'Do I need any experience to use Gig Ignition?',
        answer:
          'Not at all. Gig Ignition is designed for complete beginners. The AI coach adapts to your skill level and walks you through everything from setting up your first gig profile to landing your first client. Each hustle track includes beginner-friendly tutorials, templates, and scripts you can use right away.',
      },
      {
        question: 'How quickly can I start earning money?',
        answer:
          'Many of our hustle tracks are designed to generate income within your first week. Some quick-start hustles like AI freelance writing or social media management can land you your first paying gig within days. The timeline depends on the hustle you choose and how much time you invest, but the app is built to minimize your time-to-first-dollar.',
      },
      {
        question: 'What devices is Gig Ignition available on?',
        answer:
          'Gig Ignition is available on iOS and Android. Download it from the App Store or Google Play. You can also access your dashboard and training materials via our web app at app.gigignition.com.',
      },
    ],
  },
  {
    name: 'Account & Billing',
    icon: '💳',
    items: [
      {
        question: 'What are the different pricing plans?',
        answer:
          'We offer three tiers: Free Spark (limited to 3 hustle tracks with basic AI coaching), Pro Flame at $9/month (unlimited hustles, full AI coach, templates, and community access), and Elite Inferno at $29/month (everything in Pro plus 1-on-1 AI strategy sessions, premium templates, Loss Shield protection, and priority support).',
      },
      {
        question: 'Can I cancel my subscription at any time?',
        answer:
          'Yes — no contracts, no cancellation fees. You can cancel directly from your account settings at any time. Your access continues until the end of your current billing period. We also offer a 7-day free trial on Pro and Elite plans so you can try before you commit.',
      },
      {
        question: 'How do I change my plan or update payment info?',
        answer:
          'Go to Settings → Subscription in the app. From there you can upgrade, downgrade, or update your payment method. Changes take effect at the start of your next billing cycle. If you upgrade mid-cycle, you\'ll get immediate access to the new features with a prorated charge.',
      },
    ],
  },
  {
    name: 'AI Hustles',
    icon: '🤖',
    items: [
      {
        question: 'How does the swipe-to-discover feature work?',
        answer:
          'Think of it like a dating app for side hustles. The AI analyzes your skills, interests, available time, and income goals to surface the most relevant hustle opportunities. Swipe right to save a hustle to your dashboard, swipe left to skip. The more you swipe, the smarter the recommendations get.',
      },
      {
        question: 'What types of AI hustles are available?',
        answer:
          'We currently feature 50+ hustle tracks across categories like Content Creation (writing, video, design), Services (chatbot setup, voice-overs, consulting), E-commerce (product descriptions, store optimization), and Education (tutoring, course creation). New tracks are added every month based on market trends.',
      },
      {
        question: 'How does the AI Coach help me?',
        answer:
          'The AI Coach is your personal side-hustle mentor. It reviews your progress, suggests next steps, helps you write client proposals, critiques your work, and answers questions 24/7. Think of it as having a knowledgeable friend who\'s always available to brainstorm, troubleshoot, and keep you accountable.',
      },
      {
        question: 'Can I work on multiple hustles at once?',
        answer:
          'Yes! Pro and Elite users can pursue unlimited hustle tracks simultaneously. However, we recommend focusing on one hustle until you\'re earning consistently before branching out. The AI Coach will help you decide when you\'re ready to diversify.',
      },
    ],
  },
  {
    name: 'Fuel & Credits',
    icon: '⛽',
    items: [
      {
        question: 'What are Fuel Credits?',
        answer:
          'Fuel Credits are the in-app currency that powers advanced AI features. They\'re used for things like AI Coach conversations, advanced template generation, market research reports, and premium tool access. Free users get 50 credits/month, Pro gets 500, and Elite gets unlimited.',
      },
      {
        question: 'Can I buy additional Fuel Credits?',
        answer:
          'Yes. If you run out of credits before your monthly refresh, you can purchase top-up packs: 100 credits for $3, 500 credits for $12, or 1,000 credits for $20. Credits never expire, so unused purchased credits roll over.',
      },
      {
        question: 'What is Loss Shield and how does it work?',
        answer:
          'Loss Shield is an Elite-tier feature that protects your investment. If you follow a hustle track\'s recommended steps and don\'t earn at least the cost of your subscription within 60 days, we\'ll credit your next two months free. It\'s our way of putting skin in the game alongside you.',
      },
      {
        question: 'How do I check my remaining Fuel Credits?',
        answer:
          'Your credit balance is displayed at the top of the app dashboard. You can also go to Settings → Fuel Credits for a detailed breakdown of usage history, upcoming refresh date, and options to purchase more.',
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
