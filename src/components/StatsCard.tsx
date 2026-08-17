'use client';
import { memo } from 'react';

type StatsCardProps = {
  value: string;
  label: string;
  valueClassName?: string;
};

const StatsCard = memo(function StatsCard({ value, label, valueClassName }: StatsCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md border border-white/10" />
      <div className="relative p-6">
        <h2 className={`${valueClassName ?? 'text-5xl'} font-bold text-white mb-2 drop-shadow-lg leading-tight`}>
          {value}
        </h2>
        <p className="text-white/90 font-medium">{label}</p>
      </div>
    </div>
  );
});

export default StatsCard; 