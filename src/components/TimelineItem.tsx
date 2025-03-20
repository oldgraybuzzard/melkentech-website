'use client';
import { memo } from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  position: 'left' | 'right';
}

const TimelineItem = memo(function TimelineItem({ year, title, description, position }: TimelineItemProps) {
  const isLeft = position === 'left';
  
  return (
    <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'} w-full mx-auto items-center group -mt-4 first:mt-0`}>
      <div className={`w-5/12 ${!isLeft && 'order-1'}`}>
        <div className="relative p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary/20 dark:border-accent/20 hover:border-primary dark:hover:border-accent">
          <div className={`absolute top-0 ${isLeft ? 'right-0' : 'left-0'} w-4 h-4 bg-white dark:bg-gray-800 transform ${isLeft ? 'translate-x-1/2' : '-translate-x-1/2'} rotate-45 border-t-2 border-r-2 border-primary/20 dark:border-accent/20`}></div>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="text-primary dark:text-accent font-bold text-xl">{year}</div>
            <div className="w-2 h-2 rounded-full bg-primary dark:bg-accent animate-pulse"></div>
          </div>
          <div className="font-bold text-lg mb-2 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">{title}</div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="w-6 h-6 bg-primary dark:bg-accent rounded-full absolute left-1/2 transform -translate-x-1/2 ring-4 ring-white dark:ring-gray-900 group-hover:ring-primary/30 dark:group-hover:ring-accent/30 transition-all duration-300"></div>
    </div>
  );
});

export default TimelineItem;