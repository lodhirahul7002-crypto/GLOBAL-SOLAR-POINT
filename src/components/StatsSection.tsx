import React from 'react';
import { statItems } from '../data';
import { Award, CheckCircle2, Heart, ShieldAlert } from 'lucide-react';

export default function StatsSection() {
  const getIcon = (label: string) => {
    switch (label) {
      case 'Projects Completed': return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case 'Happy Clients': return <Heart className="w-5 h-5 text-emerald-400" />;
      case 'Years of Experience': return <Award className="w-5 h-5 text-emerald-400" />;
      default: return <ShieldAlert className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white relative overflow-hidden border-y border-emerald-800/10">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.06),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/8 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-300">
                    {item.value}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    {getIcon(item.label)}
                  </div>
                </div>
                
                <h4 className="font-display text-sm font-bold tracking-wide uppercase text-white mb-2 leading-tight">
                  {item.label}
                </h4>
                <p className="font-sans text-xs text-gray-350 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
