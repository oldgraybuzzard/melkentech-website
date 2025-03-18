'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPost } from '@/lib/blog';
import type { BlogPost } from '@/types/blog';
import { BLOG_IMAGE_DIMENSIONS } from '@/types/blog';
import { useEffect, useState } from 'react';
import { getImageSizes, generateBlurDataUrl } from '@/lib/image-utils';

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [blurDataUrl, setBlurDataUrl] = useState<string | null>(null);

  useEffect(() => {
    async function loadPost() {
      try {
        const postData = await getBlogPost(params.slug);
        setPost(postData);
        
        if (postData?.image) {
          const blurUrl = await generateBlurDataUrl(postData.image);
          setBlurDataUrl(blurUrl);
        }
      } catch (error) {
        console.error('Error loading post:', error);
      } finally {
        setIsLoading(false);
      }
    }
    loadPost();
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen pt-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="animate-pulse space-y-4">
          <div className="h-48 w-full bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
          <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 pt-32 bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.4, // Slightly faster for better responsiveness
          ease: "easeOut",
          staggerChildren: 0.1 // Stagger child animations
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative aspect-video mb-8 rounded-xl overflow-hidden"
        >
          <Image
            src={post.image}
            alt={post.title}
            width={BLOG_IMAGE_DIMENSIONS.width}
            height={BLOG_IMAGE_DIMENSIONS.height}
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL={blurDataUrl || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE2Qjc3QT4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj7/2wBDAR0XFyAeIBwgID4gICE+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='}
            sizes={getImageSizes('content')}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm text-primary dark:text-accent font-semibold">
              {post.category}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString()}
            </span>
            {post.readingTime && (
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {post.readingTime} read
              </span>
            )}
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4">
            {post.author.image && (
              <Image
                src={post.author.image}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <span className="text-gray-700 dark:text-gray-300">
              By {post.author.name}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </article>
  );
}