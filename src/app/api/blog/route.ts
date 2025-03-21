import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies()
    
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value ?? ''
          },
          set(name: string, value: string, options: { domain?: string; path?: string; maxAge?: number; httpOnly?: boolean }) {
            cookieStore.set(name, value, options)
          },
          remove(name: string, options: { path?: string; domain?: string }) {
            cookieStore.delete({ name, ...options })
          }
        },
      }
    )

    // Check session
    const { data: { session } } = await supabase.auth.getSession()
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized - Please log in' },
        { status: 401 }
      )
    }

    const { title, content, category, image } = await request.json()

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Use the same supabase instance for the insert
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([
        {
          title,
          slug,
          content,
          category,
          image,
          date: new Date().toISOString(),
          author: {
            name: session.user.user_metadata?.full_name || 'Admin',
            image: session.user.user_metadata?.avatar_url || '/images/authors/admin.jpg'
          },
          user_id: session.user.id
        }
      ])
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to create blog post' },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}
