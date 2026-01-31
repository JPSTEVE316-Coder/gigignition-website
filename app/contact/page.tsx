'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Mail, MapPin, Send, Newspaper, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:support@gigignition.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailtoLink
    setSubmitted(true)
  }

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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neon-green/10 border border-neon-green/20 mb-6">
            <MessageSquare className="w-8 h-8 text-neon-green" />
          </div>
          <h1 className="font-orbitron text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="text-neon-green">Touch</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Have a question, partnership idea, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="bg-bg-card border border-white/[0.08] rounded-2xl p-6">
              <Mail className="w-6 h-6 text-brand-blue mb-3" />
              <h3 className="font-orbitron text-sm font-bold text-white mb-2">General Inquiries</h3>
              <a href="mailto:support@gigignition.com" className="text-brand-blue text-sm hover:underline">
                support@gigignition.com
              </a>
            </div>

            <div className="bg-bg-card border border-white/[0.08] rounded-2xl p-6">
              <Newspaper className="w-6 h-6 text-brand-gold mb-3" />
              <h3 className="font-orbitron text-sm font-bold text-white mb-2">Media &amp; Press</h3>
              <a href="mailto:press@gigignition.com" className="text-brand-gold text-sm hover:underline">
                press@gigignition.com
              </a>
            </div>

            <div className="bg-bg-card border border-white/[0.08] rounded-2xl p-6">
              <MapPin className="w-6 h-6 text-neon-green mb-3" />
              <h3 className="font-orbitron text-sm font-bold text-white mb-2">Office</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                5215 N. O&apos;Connor Blvd<br />
                Suite 1200<br />
                Irving, Texas 75039
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-bg-card border border-white/[0.08] rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">✉️</div>
                  <h3 className="font-orbitron text-xl font-bold text-white mb-2">Opening Your Email Client</h3>
                  <p className="text-white/50 text-sm mb-6">
                    Your default email client should open with your message pre-filled. If it didn&apos;t open, you can email us directly at{' '}
                    <a href="mailto:support@gigignition.com" className="text-brand-blue hover:underline">support@gigignition.com</a>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-brand-blue text-sm font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-orbitron text-lg font-bold text-white mb-2">Send a Message</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-bg-elevated border border-white/[0.08] rounded-xl text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-brand-blue/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-bg-elevated border border-white/[0.08] rounded-xl text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-brand-blue/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 bg-bg-elevated border border-white/[0.08] rounded-xl text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-brand-blue/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more..."
                      className="w-full px-4 py-3 bg-bg-elevated border border-white/[0.08] rounded-xl text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-brand-blue/50 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue rounded-xl text-white font-semibold text-sm hover:bg-brand-blue/90 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
