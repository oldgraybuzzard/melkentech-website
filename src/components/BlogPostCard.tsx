'use client';

import Link from 'next/link';
import Image from 'next/image';
import { memo, useMemo } from 'react';
import { getImageSizes, getBlurDataUrl, shouldPrioritize } from '@/lib/image-utils';
import type { BlogPost } from '@/types/blog';

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

const BlogPostCard = memo(function BlogPostCard({ post, index }: BlogPostCardProps) {
  const imageSizes = useMemo(() => getImageSizes('thumbnail'), []);
  const blurDataUrl = useMemo(() => getBlurDataUrl(), []);
  const shouldPrioritizeImage = useMemo(() => shouldPrioritize(index, 'thumbnail'), [index]);

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="relative aspect-video">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes={imageSizes}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={shouldPrioritizeImage}
            placeholder="blur"
            blurDataURL={blurDataUrl}
            quality={90}
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-primary dark:text-accent">{post.category}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{post.readingTime} min read</span>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{post.excerpt}</p>
        </div>
      </article>
    </Link>
  );
});

export default BlogPostCard;
