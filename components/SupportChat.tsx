'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  ArrowRight,
  Mail,
  Loader2,
  ChevronDown,
} from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const STARTERS = [
  { label: 'How does Fuel pricing work?', icon: '⛽' },
  { label: "I'm new — how do I get started?", icon: '🚀' },
  { label: 'What hustles can I try?', icon: '🃏' },
  { label: 'How does the AI Coach help me?', icon: '🤖' },
]

const GREETING =
  "Hey! 👋 I'm Iggy, your Gig Ignition support buddy. I know the app inside out — ask me anything about hustles, Fuel, the AI Coach, or how to get started. What can I help you with?"

export default function SupportChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showScrollBtn, setShowScrollBtn] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const hasGreeted = useRef(false)

  const scrollToBottom = useCallback((behavior: ScrollBehavior = 'smooth') => {
    messagesEndRef.current?.scrollIntoView({ behavior })
  }, [])

  // Listen for external open events (e.g. "Chat with Iggy" button)
  useEffect(() => {
    const handler = () => setIsOpen(true)
    window.addEventListener('open-support-chat', handler)
    return () => window.removeEventListener('open-support-chat', handler)
  }, [])

  // Add greeting on first open
  useEffect(() => {
    if (isOpen && !hasGreeted.current) {
      hasGreeted.current = true
      setMessages([
        {
          id: 'greeting',
          role: 'assistant',
          content: GREETING,
          timestamp: new Date(),
        },
      ])
    }
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen])

  // Auto-scroll on new messages
  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  // Track scroll position for "scroll to bottom" button
  useEffect(() => {
    const container = messagesContainerRef.current
    if (!container) return
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container
      setShowScrollBtn(scrollHeight - scrollTop - clientHeight > 100)
    }
    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text.trim(),
      timestamp: new Date(),
    }

    const updated = [...messages, userMsg]
    setMessages(updated)
    setInput('')
    setIsLoading(true)

    try {
      const apiMessages = updated
        .filter((m) => m.id !== 'greeting')
        .map((m) => ({ role: m.role, content: m.content }))

      // Include greeting as first assistant message for context
      const payload = [
        { role: 'assistant' as const, content: GREETING },
        ...apiMessages,
      ]

      const res = await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: payload }),
      })

      const data = await res.json()

      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content:
            data.reply ||
            "I'm having trouble right now. Please try again or email support@gigignition.com!",
          timestamp: new Date(),
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          role: 'assistant',
          content:
            "Oops — something went wrong on my end. Try again in a sec, or reach out at support@gigignition.com and we'll take care of you!",
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  const handleEscalate = () => {
    const conversationSummary = messages
      .map((m) => `${m.role === 'user' ? 'Me' : 'Iggy'}: ${m.content}`)
      .join('\n\n')

    const subject = encodeURIComponent('Help Center Support Request')
    const body = encodeURIComponent(
      `Hi Gig Ignition team,\n\nI was chatting with Iggy and need some additional help.\n\n--- Chat History ---\n${conversationSummary}\n\n--- My Question ---\n[Please describe what you need help with]\n`
    )
    window.open(`mailto:support@gigignition.com?subject=${subject}&body=${body}`, '_blank')
  }

  // Only show starters when just the greeting is present
  const showStarters = messages.length <= 1

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 group transition-all duration-300 ${
          isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
        }`}
        aria-label="Open support chat"
      >
        <div className="relative">
          <div className="w-14 h-14 rounded-full bg-brand-blue flex items-center justify-center shadow-lg shadow-brand-blue/30 group-hover:shadow-brand-blue/50 transition-shadow">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-neon-green animate-pulse" />
        </div>
      </button>

      {/* Chat panel */}
      <div
        className={`fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="w-screen h-screen sm:w-[420px] sm:h-[600px] sm:max-h-[80vh] bg-midnight sm:rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08] bg-bg-card/80 backdrop-blur-sm sm:rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-neon-cyan flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-neon-green border-2 border-bg-card" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Iggy</h3>
                <p className="text-neon-green text-xs font-medium">Online — typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4 text-white/60" />
            </button>
          </div>

          {/* Messages area */}
          <div
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto px-5 py-4 space-y-4 scroll-smooth"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-brand-blue text-white rounded-br-md'
                      : 'bg-bg-elevated text-white/80 rounded-bl-md border border-white/[0.06]'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-bg-elevated rounded-2xl rounded-bl-md px-4 py-3 border border-white/[0.06]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-brand-blue/60 animate-bounce [animation-delay:0ms]" />
                    <div className="w-2 h-2 rounded-full bg-brand-blue/60 animate-bounce [animation-delay:150ms]" />
                    <div className="w-2 h-2 rounded-full bg-brand-blue/60 animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Scroll to bottom */}
          {showScrollBtn && (
            <div className="absolute bottom-[140px] left-1/2 -translate-x-1/2">
              <button
                onClick={() => scrollToBottom()}
                className="w-8 h-8 rounded-full bg-bg-elevated border border-white/[0.1] flex items-center justify-center shadow-lg hover:bg-white/[0.1] transition-colors"
              >
                <ChevronDown className="w-4 h-4 text-white/60" />
              </button>
            </div>
          )}

          {/* Conversation starters */}
          {showStarters && (
            <div className="px-5 pb-2">
              <div className="grid grid-cols-2 gap-2">
                {STARTERS.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => sendMessage(s.label)}
                    className="text-left px-3 py-2.5 bg-bg-card border border-white/[0.08] rounded-xl text-xs text-white/60 hover:text-white hover:border-brand-blue/30 transition-all group"
                  >
                    <span className="block text-base mb-1">{s.icon}</span>
                    <span className="group-hover:text-white transition-colors">{s.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Escalation bar */}
          {messages.length > 3 && (
            <div className="px-5 pb-2">
              <button
                onClick={handleEscalate}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs text-white/40 hover:text-white/70 hover:bg-white/[0.03] transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                Need more help? Email our team with this conversation
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          )}

          {/* Input */}
          <div className="px-4 py-3 border-t border-white/[0.08] bg-bg-card/50">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Iggy anything..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 bg-bg-elevated border border-white/[0.08] rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-brand-blue/50 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-11 h-11 flex-shrink-0 rounded-xl bg-brand-blue flex items-center justify-center hover:bg-brand-blue/90 transition-colors disabled:opacity-30 disabled:hover:bg-brand-blue"
                aria-label="Send message"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 text-white animate-spin" />
                ) : (
                  <Send className="w-4 h-4 text-white" />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
