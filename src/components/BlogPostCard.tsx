import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { BlogPost } from '@/types/blog';
import { BLOG_IMAGE_DIMENSIONS } from '@/types/blog';

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

const BlogPostCard = memo(function BlogPostCard({ post, index }: BlogPostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative aspect-video">
        <Image
          src={post.image}
          alt={post.title}
          width={BLOG_IMAGE_DIMENSIONS.thumbnailWidth}
          height={BLOG_IMAGE_DIMENSIONS.thumbnailHeight}
          className="object-cover"
          placeholder="blur"
          blurDataURL={post.imageBlur}
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <span className="text-sm text-accent font-semibold">
          {post.category}
        </span>
        <h2 className="text-xl font-bold mt-2 mb-4 text-gray-100">
          {post.title}
        </h2>
        <p className="text-gray-300 mb-4">
          {post.excerpt}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">
            {new Date(post.date).toLocaleDateString()}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="text-accent hover:text-accent/80 font-semibold"
          >
            Read More →
          </Link>
        </div>
      </div>
    </motion.article>
  );
});

export default BlogPostCard;
