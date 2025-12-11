import { supabase } from './supabase'
import type { BlogPost } from '@/types/blog'

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min`;
}

function generateExcerpt(content: string): string {
  // Remove HTML tags
  const plainText = content.replace(/<[^>]+>/g, '');
  // Get first 200 characters
  const excerpt = plainText.slice(0, 200).trim();
  // Add ellipsis if content was truncated
  return plainText.length > 200 ? `${excerpt}...` : excerpt;
}

const CACHE_TIME = 5 * 60 * 1000; // 5 minutes
let blogPostsCache: { data: BlogPost[]; timestamp: number } | null = null;

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Check cache first
  if (blogPostsCache && Date.now() - blogPostsCache.timestamp < CACHE_TIME) {
    return blogPostsCache.data;
  }

  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      // Removed the status check since the column doesn't exist
      .order('date', { ascending: false })
      .limit(9);

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(`Failed to fetch blog posts: ${error.message}`);
    }

    if (!data) {
      return [];
    }

    const processedPosts = data.map(post => {
      const typedPost = post as {
        id: string;
        title: string;
        slug: string;
        content: string;
        date: string;
        author: { name: string; image?: string };
        category: string;
        image: string;
        tags: string[];
      };
      
      return {
        ...typedPost,
        readingTime: calculateReadingTime(typedPost.content),
        excerpt: generateExcerpt(typedPost.content),
      };
    }) as BlogPost[];

    // Update cache
    blogPostsCache = {
      data: processedPosts,
      timestamp: Date.now()
    };

    return processedPosts;
  } catch (error) {
    console.error('Error in getBlogPosts:', error);
    throw error;
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // First check if it's in the cached list
  if (blogPostsCache?.data) {
    const cachedPost = blogPostsCache.data.find(post => post.slug === slug);
    if (cachedPost) return cachedPost;
  }

  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching blog post:', error)
    return null
  }

  return data as BlogPost
}

export async function getRelatedPosts(): Promise<BlogPost[]> {
  try {
    // TODO: Implement actual related posts logic
    return [];
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}
