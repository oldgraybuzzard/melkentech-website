'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import BlogSkeleton from '@/components/BlogSkeleton';
import BlogPostCard from '@/components/BlogPostCard';
import type { BlogPost } from '@/types/blog';
import { getBlogPosts } from '@/lib/blog';

export default function Blog() {
  const router = useRouter();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPosts = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const posts = await getBlogPosts();
      setBlogPosts(posts);
      
      // Prefetch the first few blog posts
      posts.slice(0, 3).forEach(post => {
        router.prefetch(`/blog/${post.slug}`);
      });
    } catch (err) {
      console.error('Error loading posts:', err);
      setError(err instanceof Error ? err.message : 'Failed to load blog posts');
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <main className="min-h-screen bg-neutral dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Blog
        </h1>
        
        {isLoading ? (
          <BlogSkeleton />
        ) : error ? (
          <div className="text-center py-12">
            <div className="mb-4 text-red-600 dark:text-red-400">
              {error}
            </div>
            <button
              onClick={() => loadPosts()}
              className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : blogPosts.length === 0 ? (
          <div className="text-center py-12 text-gray-600 dark:text-gray-400">
            No blog posts found.
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
              Latest Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <BlogPostCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
