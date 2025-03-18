export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: {
    name: string;
    image?: string;
  };
  category: string;
  image: string;
  imageBlur?: string;
  tags: string[];
  readingTime?: string;
}
// Define standard blog image dimensions
export const BLOG_IMAGE_DIMENSIONS = {
  width: 800,
  height: 400,
  thumbnailWidth: 400,
  thumbnailHeight: 200
} as const;

export const BLOG_CATEGORIES = [
  'Technical Documentation',
  'Government Contracting',
  'Software Development',
  'Cybersecurity',
  'Project Management',
  'Industry News'
] as const;

export type BlogCategory = typeof BLOG_CATEGORIES[number];

export const CATEGORY_IMAGES: Record<BlogCategory, string> = {
  'Technical Documentation': '/images/blog/technical-docs-800x400.jpg',
  'Government Contracting': '/images/blog/government-800x400.jpg',
  'Software Development': '/images/blog/software-dev-800x400.jpg',
  'Cybersecurity': '/images/blog/cybersecurity-800x400.jpg',
  'Project Management': '/images/blog/project-management-800x400.jpg',
  'Industry News': '/images/blog/industry-news-800x400.jpg'
};
