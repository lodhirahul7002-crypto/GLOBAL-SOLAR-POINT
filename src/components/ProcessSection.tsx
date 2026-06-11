import React, { useState } from 'react';
import { MessageSquare, FileText, Settings, CheckCircle, ArrowRight, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { processSteps } from '../data';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<string>('01');

  const selectedStep = processSteps.find(s => s.number === activeStep) || processSteps[0];

  const getIcon = (iconName: string, active: boolean) => {
    const cls = `w-6 h-6 ${active ? 'text-whiteScale' : 'text-emerald-600'}`;
    switch (iconName) {
      case 'MessageSquareIcon':
        return <MessageSquare className={cls} />;
      case 'FileTextIcon':
        return <FileText className={cls} />;
      case 'SettingsIcon':
        return <Settings className={cls} />;
      case 'CheckCircleIcon':
        return <CheckCircle className={cls} />;
      default:
        return <MessageSquare className={cls} />;
    }
  };

  return (
    <section id="process" className="py-20 bg-slate-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display text-sm font-bold tracking-widest text-emerald-600 uppercase">
            Execution Standards
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0f172a] mt-2 tracking-tight">
            Our Streamlined Process
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded mx-auto mt-4" />
          <p className="font-sans text-gray-500 text-sm sm:text-base mt-4">
            From initial site profiling and civil structural modeling to system startup and decades of active efficiency sweeping.
          </p>
        </div>

        {/* Process Steps Connection Line Diagram (Desktop) */}
        <div className="relative mb-14 max-w-5xl mx-auto">
          {/* Subtle horizontal connecting line in background */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step) => {
              const isActive = step.number === activeStep;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(step.number)}
                  className="flex flex-col items-center text-center focus:outline-none cursor-pointer group"
                >
                  {/* Step Circle with micro animation */}
                  <div className={`relative w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                    isActive
                      ? 'bg-emerald-600 border-emerald-500 text-white shadow-md scale-110'
                      : 'bg-white border-gray-200 hover:border-[#10b981] text-gray-700 shadow-2xs'
                  }`}>
                    {getIcon(step.icon, isActive)}
                    
                    {/* Floating mini number */}
                    <span className="absolute -bottom-2 -right-1 bg-slate-900 text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                      {step.number}
                    </span>
                  </div>

                  <h3 className={`font-display text-sm font-bold mt-5 tracking-tight group-hover:text-emerald-700 transition-colors ${
                    isActive ? 'text-emerald-600' : 'text-gray-800'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-400 mt-1 max-w-[180px] hidden sm:block">
                    {step.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Description Draw Container */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStep.number}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-md p-6 sm:p-8 grid grid-cols-1 md:grid-cols-5 gap-6 items-center"
            >
              {/* Giant number accent left */}
              <div className="md:col-span-1 hidden md:flex flex-col items-center justify-center border-r border-gray-100 pr-6 h-full select-none">
                <span className="font-display text-5xl font-black text-emerald-100">
                  {selectedStep.number}
                </span>
                <span className="font-mono text-[10px] text-gray-400 font-semibold tracking-widest mt-1 uppercase">
                  PHASE
                </span>
              </div>

              {/* Main text right */}
              <div className="md:col-span-4">
                <div className="flex items-center space-x-2.5 mb-2 md:hidden">
                  <span className="bg-emerald-50 text-emerald-700 font-mono text-xs font-bold px-2 py-0.5 rounded-full">
                    PHASE {selectedStep.number}
                  </span>
                </div>
                
                <h4 className="font-display text-lg font-bold text-[#0f172a] mb-3">
                  {selectedStep.title} Requirements & Execution
                </h4>
                
                <p className="font-sans text-xs sm:text-sm text-gray-650 leading-relaxed mb-4">
                  {selectedStep.details}
                </p>

                <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-800 font-sans text-xs font-semibold py-1.5 px-3 rounded-lg">
                  <HelpCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Deliverables: System calculations, code inter-tie certs, active ROI projections</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
