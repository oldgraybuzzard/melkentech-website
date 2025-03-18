'use client'
import { useEffect, useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import type { BlogPost } from '@/types/blog'

export default function EditPost({ params }: { params: { id: string } }) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    slug: '',
    date: new Date().toISOString().split('T')[0],
  })
  const [error, setError] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/admin/login')
    }
  }, [user, loading, router])

  useEffect(() => {
    if (params.id !== 'new') {
      fetchPost()
    }
  }, [params.id])

  async function fetchPost() {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', params.id)
        .single()

      if (error) throw error
      if (data) {
        setPost(data)
        setFormData({
          title: data.title,
          content: data.content,
          excerpt: data.excerpt || '',
          slug: data.slug,
          date: data.date,
        })
      }
    } catch (error) {
      console.error('Error fetching post:', error)
      setError('Failed to fetch post')
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setIsSaving(true)

    try {
      if (params.id === 'new') {
        const { data, error } = await supabase
          .from('blog_posts')
          .insert([{
            ...formData,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }])
          .select()

        if (error) throw error
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .update({
            ...formData,
            updated_at: new Date().toISOString()
          })
          .eq('id', params.id)

        if (error) throw error
      }
      router.push('/admin/posts')
    } catch (error) {
      console.error('Error saving post:', error)
      setError(error instanceof Error ? error.message : 'Failed to save post')
    } finally {
      setIsSaving(false)
    }
  }

  function generateSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newTitle = e.target.value
    setFormData(prev => ({
      ...prev,
      title: newTitle,
      slug: generateSlug(newTitle)
    }))
  }

  if (loading || !user) return null

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {params.id === 'new' ? 'New Post' : 'Edit Post'}
        </h1>

        {error && (
          <div className="mb-4 bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-200 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Title
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full border border-gray-300 dark:border-gray-600 
                rounded-md shadow-sm py-2 px-3 
                bg-white dark:bg-gray-800 
                text-gray-900 dark:text-white 
                focus:outline-none focus:ring-primary dark:focus:ring-accent 
                focus:border-primary dark:focus:border-accent"
              value={formData.title}
              onChange={handleTitleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Slug
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full border border-gray-300 dark:border-gray-600 
                rounded-md shadow-sm py-2 px-3 
                bg-white dark:bg-gray-800 
                text-gray-900 dark:text-white 
                focus:outline-none focus:ring-primary dark:focus:ring-accent 
                focus:border-primary dark:focus:border-accent"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Date
            </label>
            <input
              type="date"
              required
              className="mt-1 block w-full border border-gray-300 dark:border-gray-600 
                rounded-md shadow-sm py-2 px-3 
                bg-white dark:bg-gray-800 
                text-gray-900 dark:text-white 
                focus:outline-none focus:ring-primary dark:focus:ring-accent 
                focus:border-primary dark:focus:border-accent"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Excerpt
            </label>
            <textarea
              className="mt-1 block w-full border border-gray-300 dark:border-gray-600 
                rounded-md shadow-sm py-2 px-3 
                bg-white dark:bg-gray-800 
                text-gray-900 dark:text-white 
                focus:outline-none focus:ring-primary dark:focus:ring-accent 
                focus:border-primary dark:focus:border-accent"
              rows={3}
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Content
            </label>
            <textarea
              required
              className="mt-1 block w-full border border-gray-300 dark:border-gray-600 
                rounded-md shadow-sm py-2 px-3 
                bg-white dark:bg-gray-800 
                text-gray-900 dark:text-white 
                focus:outline-none focus:ring-primary dark:focus:ring-accent 
                focus:border-primary dark:focus:border-accent"
              rows={10}
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.push('/admin/posts')}
              className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 
                px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="bg-primary dark:bg-accent text-white dark:text-primary-dark 
                px-4 py-2 rounded-md hover:bg-primary-dark dark:hover:bg-accent/90 
                disabled:opacity-50"
            >
              {isSaving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}