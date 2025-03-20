'use client';
import { memo } from 'react';

const ValueCard = memo(function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <div className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
});

export default ValueCard; 