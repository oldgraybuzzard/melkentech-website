import { memo } from 'react';

const BlogSkeleton = memo(function BlogSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-300 dark:bg-gray-600" />
            <div className="p-6">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4 mb-4" />
              <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-4" />
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default BlogSkeleton;
