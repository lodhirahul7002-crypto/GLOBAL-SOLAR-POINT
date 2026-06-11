import React from 'react';
import { partnersData } from '../data';
import { Cpu, Server, BatteryCharging, Zap } from 'lucide-react';

export default function PartnersSection() {
  const getLogoComponent = (logoType: string) => {
    switch (logoType) {
      case 'CanadianSolar':
        return (
          <div className="flex items-center space-x-1.5 font-display text-gray-800">
            <span className="font-bold text-base tracking-tight text-amber-500">Canadian</span>
            <span className="font-light text-slate-600 text-sm">Solar</span>
          </div>
        );
      case 'Tesla':
        return (
          <div className="flex items-center space-x-1.5 font-display text-red-650 tracking-widest uppercase">
            <span className="font-extrabold text-sm text-[red]">T E S L A</span>
            <span className="font-light text-[10px] text-gray-500">ENERGY</span>
          </div>
        );
      case 'Enphase':
        return (
          <div className="flex items-center space-x-1 font-mono text-orange-500 font-extrabold text-sm tracking-tight">
            <span>[ ENPHASE ]</span>
          </div>
        );
      case 'Schneider':
        return (
          <div className="flex items-center space-x-1 font-sans text-emerald-600 text-sm">
            <span className="font-bold">Schneider</span>
            <span className="font-light text-slate-700">Electric</span>
          </div>
        );
      default:
        return <span className="font-bold">Partner</span>;
    }
  };

  return (
    <section className="py-12 bg-slate-50 border-t border-gray-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <p className="text-center font-display text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
          Authorized Integration Partnerships
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center max-w-4xl mx-auto text-center">
          {partnersData.map((part, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200/50 rounded-2xl p-4 flex flex-col items-center justify-center h-20 shadow-2xs hover:border-emerald-200 transition-colors"
              title={part.description}
            >
              {getLogoComponent(part.logoType)}
              <span className="text-[8px] text-gray-400 font-sans mt-1.5 leading-none px-2 text-center select-none">
                {part.name} Authorized
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
