'use client'
import { useEffect, useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import type { BlogPost, BlogCategory } from '@/types/blog'
import { BLOG_CATEGORIES, CATEGORY_IMAGES, BLOG_IMAGE_DIMENSIONS } from '@/types/blog'
import Image from 'next/image'

export default function NewPost() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState<{
    title: string;
    content: string;
    excerpt: string;
    slug: string;
    date: string;
    image: string;
    category: BlogCategory;
    tags: string[];
    author: {
      name: string;
      image: string;
    };
  }>({
    title: '',
    content: '',
    excerpt: '',
    slug: '',
    date: new Date().toISOString().split('T')[0],
    image: '/images/blog/default.jpg',
    category: BLOG_CATEGORIES[0],
    tags: [],
    author: {
      name: 'Admin',
      image: '/images/default-author.jpg'
    }
  })
  const [error, setError] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/admin/login')
    }
  }, [user, loading, router])

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

  // Handle category change and update image automatically
  function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newCategory = e.target.value as BlogCategory
    setFormData(prev => ({
      ...prev,
      category: newCategory,
      image: CATEGORY_IMAGES[newCategory]
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setIsSaving(true)

    try {
      const postData = {
        title: formData.title,
        content: formData.content,
        excerpt: formData.excerpt,
        slug: formData.slug,
        date: formData.date,
        image: formData.image,
        category: formData.category,
        tags: formData.tags,
        author: formData.author
      }

      const { data, error } = await supabase
        .from('blog_posts')
        .insert([postData])
        .select()

      if (error) throw error
      router.push('/admin/posts')
    } catch (error) {
      console.error('Error saving post:', error)
      setError(error instanceof Error ? error.message : 'Failed to save post')
    } finally {
      setIsSaving(false)
    }
  }

  if (loading || !user) return null

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 pt-32">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          New Post
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={handleTitleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Slug
            </label>
            <input
              type="text"
              id="slug"
              value={formData.slug}
              onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              value={formData.excerpt}
              onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Content
            </label>
            <textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
              rows={10}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Image
            </label>
            <div className="mt-1 flex items-center gap-4">
              <input
                type="text"
                value={formData.image}
                onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                className="block w-full rounded-md border-gray-300 shadow-sm 
                  focus:border-primary focus:ring-primary sm:text-sm 
                  dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                required
              />
              <div className="h-20 w-32 relative overflow-hidden rounded">
                <Image 
                  src={formData.image} 
                  alt="Preview"
                  width={BLOG_IMAGE_DIMENSIONS.thumbnailWidth}
                  height={BLOG_IMAGE_DIMENSIONS.thumbnailHeight}
                  className="object-cover"
                />
              </div>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Using default image for {formData.category}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Category
            </label>
            <select
              value={formData.category}
              onChange={handleCategoryChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                focus:border-primary focus:ring-primary sm:text-sm 
                dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              required
            >
              {BLOG_CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.push('/admin/posts')}
              className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="bg-primary dark:bg-accent text-white px-4 py-2 rounded-md hover:bg-primary-dark dark:hover:bg-accent/90 disabled:opacity-50"
            >
              {isSaving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}