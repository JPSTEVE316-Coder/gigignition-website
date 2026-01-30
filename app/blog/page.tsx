'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Search, Clock, Tag } from 'lucide-react'

interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  category: string
  readTime: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<PostMeta[]>([])
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    fetch('/api/blog')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts)
        setCategories(data.categories)
      })
  }, [])

  const filtered = posts.filter((post) => {
    const matchesSearch =
      search === '' ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    return matchesSearch && matchesCategory
  })

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

        <h1 className="font-orbitron text-4xl lg:text-5xl font-bold text-white mb-3">
          Hustle <span className="text-neon-green">Blog</span>
        </h1>
        <p className="text-white/50 text-lg mb-10 max-w-xl font-medium">
          Tactics, strategies, and real talk about building AI-powered income streams.
        </p>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-bg-card border border-white/[0.08] rounded-xl text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-brand-blue/50 transition-colors"
            />
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {['All', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-brand-blue text-white'
                  : 'bg-bg-elevated text-white/40 hover:text-white border border-white/[0.08]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <div className="grid gap-6">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-bg-card border border-white/[0.08] rounded-2xl p-6 lg:p-8 hover:border-brand-blue/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neon-green">
                  <Tag className="w-3 h-3" />
                  {post.category}
                </span>
                <span className="text-white/20">·</span>
                <span className="inline-flex items-center gap-1.5 text-xs text-white/40">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <h2 className="font-orbitron text-xl lg:text-2xl font-bold text-white group-hover:text-brand-blue transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-white/30 text-xs">{post.author} · {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span className="text-brand-blue text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more →
                </span>
              </div>
            </Link>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-16 text-white/30">
              <p className="text-lg">No articles found.</p>
              <p className="text-sm mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
