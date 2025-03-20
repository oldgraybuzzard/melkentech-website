'use client';
import { memo } from 'react';

const StatsCard = memo(function StatsCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md border border-white/10" />
      <div className="relative p-6">
        <h2 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">{value}</h2>
        <p className="text-white/90 font-medium">{label}</p>
      </div>
    </div>
  );
});

export default StatsCard; 