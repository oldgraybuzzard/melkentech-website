import type { Metadata } from 'next';
import { getBlogPost } from '@/lib/blog';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Melken TechWork Blog',
    };
  }

  return {
    title: `${post.title} | Melken TechWork Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral pt-32">
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
}