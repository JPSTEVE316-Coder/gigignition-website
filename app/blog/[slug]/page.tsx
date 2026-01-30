import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag, User, Calendar } from 'lucide-react'
import { getAllPosts, getPostBySlug, markdownToHtml } from '@/lib/blog'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Gig Ignition Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const htmlContent = await markdownToHtml(post.content)

  return (
    <main className="min-h-screen bg-midnight relative z-10">
      <div className="grain" />
      <div className="mesh-bg" />

      <article className="max-w-3xl mx-auto px-6 py-16 relative z-10">
        {/* Back link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-10 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
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

        {/* Title */}
        <h1 className="font-orbitron text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Author & Date */}
        <div className="flex items-center gap-4 mb-10 pb-8 border-b border-white/[0.08]">
          <span className="inline-flex items-center gap-1.5 text-sm text-white/50">
            <User className="w-4 h-4" />
            {post.author}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-white/50">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
        </div>

        {/* Content */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-orbitron prose-headings:text-white
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-white/60 prose-p:leading-relaxed prose-p:font-medium
            prose-strong:text-white
            prose-li:text-white/60 prose-li:font-medium
            prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline
            prose-ul:my-4 prose-ol:my-4"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* Bottom nav */}
        <div className="mt-16 pt-8 border-t border-white/[0.08]">
          <Link href="/blog" className="inline-flex items-center gap-2 text-brand-blue hover:text-white transition-colors text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
        </div>
      </article>
    </main>
  )
}
