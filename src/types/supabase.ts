export type Database = {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          content: string;
          excerpt: string;
          image: string;
          category: string;
          date: string;
          author: {
            name: string;
            image?: string;
          };
          tags: string[];
          readingTime?: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          content: string;
          excerpt: string;
          image: string;
          category: string;
          date: string;
          author: {
            name: string;
            image?: string;
          };
          tags: string[];
          readingTime?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          content?: string;
          excerpt?: string;
          image?: string;
          category?: string;
          date?: string;
          author?: {
            name: string;
            image?: string;
          };
          tags?: string[];
          readingTime?: string;
        };
      };
    };
  };
}; 