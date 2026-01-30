import { NextResponse } from 'next/server'
import { getAllPosts, getAllCategories } from '@/lib/blog'

export async function GET() {
  const posts = getAllPosts().map(({ content, ...meta }) => meta)
  const categories = getAllCategories()
  return NextResponse.json({ posts, categories })
}
