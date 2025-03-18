interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  position: 'left' | 'right';
}

export default function TimelineItem({ year, title, description, position }: TimelineItemProps) {
  const isLeft = position === 'left';
  
  return (
    <div className="relative">
      {/* Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full"></div>
      
      {/* Content */}
      <div className={`flex items-center ${isLeft ? 'flex-row-reverse' : ''} justify-center`}>
        <div className={`w-5/12 ${isLeft ? 'text-right' : 'text-left'}`}>
          <div className={`bg-white p-6 rounded-xl shadow-sm ${isLeft ? 'ml-auto mr-8' : 'mr-auto ml-8'}`}>
            <span className="text-accent font-bold text-xl mb-2 block">{year}</span>
            <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}