import React, { useState } from 'react';
import { Sun, Battery, Wind, Zap, CheckCircle2, ArrowRight, Award, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData } from '../data';
import { Service } from '../types';

interface ServicesSectionProps {
  onScrollToCalculator: () => void;
}

export default function ServicesSection({ onScrollToCalculator }: ServicesSectionProps) {
  const [selectedId, setSelectedId] = useState<string>('solar');

  const selectedService = servicesData.find(s => s.id === selectedId) || servicesData[0];

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Sun': return <Sun className="w-5 h-5" />;
      case 'Battery': return <Battery className="w-5 h-5" />;
      case 'Wind': return <Wind className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      default: return <Sun className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display text-sm font-bold tracking-widest text-emerald-600 uppercase">
            Our Core Competencies
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0f172a] mt-2 tracking-tight">
            Comprehensive Net-Zero Energy Solutions
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded mx-auto mt-4" />
          <p className="font-sans text-gray-500 text-sm sm:text-base mt-4">
            We provide red-seal turnkey commercial installations designed to insulate your operations from rising fuel utility tariffs and sudden power outages.
          </p>
        </div>

        {/* Tab & Showcase Inner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Vertical Tab Selection Column */}
          <div className="lg:col-span-4 space-y-3">
            {servicesData.map((service) => {
              const isActive = service.id === selectedId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedId(service.id)}
                  className={`w-full flex items-center p-4.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-50/60 border-emerald-500 shadow-sm'
                      : 'bg-[#f8fafc]/50 border-gray-100 hover:border-gray-200 hover:bg-[#f1f5f9]/40'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-4 transition-colors ${
                    isActive ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {getIconComponent(service.icon)}
                  </div>
                  <div>
                    <h3 className={`font-display text-sm font-bold tracking-tight ${
                      isActive ? 'text-emerald-900' : 'text-gray-800'
                    }`}>
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-400 mt-0.5 max-w-[240px] truncate">
                      {service.description}
                    </p>
                  </div>
                  {isActive && (
                    <div className="ml-auto">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Selected Service details */}
          <div className="lg:col-span-8 bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-8 relative min-h-[500px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Images and visual indicators */}
                <div className="flex flex-col">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-gray-200 shadow-sm mb-4">
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-emerald-600/90 text-white text-[10px] uppercase font-bold tracking-wider py-1 px-3.5 rounded-full backdrop-blur-xs">
                      Red Seal Installed
                    </div>
                  </div>

                  {/* Trust indicator mini panel */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-start space-x-3 mt-1 shadow-2xs">
                    <Award className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display text-xs font-bold text-gray-850">Regulatory Certification</h4>
                      <p className="font-sans text-[11px] text-gray-500 mt-0.5 leading-normal">
                        Meets the absolute highest standards conforming to Canadian Electrical Safety Authorities codes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technical textual info */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#0f172a] mb-2 leading-tight">
                      {selectedService.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      {selectedService.detailedDesc}
                    </p>

                    {/* Features checklist */}
                    <div className="mb-6">
                      <h4 className="font-display text-xs font-bold tracking-wider text-gray-400 uppercase mb-3">
                        Technical Highlights
                      </h4>
                      <div className="space-y-2">
                        {selectedService.features.map((feature, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="font-sans text-xs text-gray-750 font-medium leading-tight">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits checklist */}
                    <div>
                      <h4 className="font-display text-xs font-bold tracking-wider text-gray-400 uppercase mb-3">
                        Business Benefits
                      </h4>
                      <div className="space-y-2">
                        {selectedService.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                            <span className="font-sans text-xs text-gray-600 leading-tight">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Call to actions bottom trigger */}
                  <div className="mt-8 pt-5 border-t border-gray-100 flex items-center">
                    <button
                      onClick={onScrollToCalculator}
                      className="group flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-sans text-sm font-bold transition-colors cursor-pointer"
                    >
                      <span>Tailor in Real-Time ROI Estimator</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
