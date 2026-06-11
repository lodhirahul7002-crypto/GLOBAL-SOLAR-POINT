import React from 'react';
import { ShieldCheck, Leaf, Globe, Sparkles, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutSection() {
  const points = [
    {
      title: 'Sustainable & Clean Energy',
      desc: 'Harnessing purely natural resources to run emission-free power systems for heavy industrial hubs.',
      icon: <Leaf className="w-5 h-5 text-emerald-500" />
    },
    {
      title: 'Innovation & Technology',
      desc: 'Deploying solid-state hardware, smart hybrid microinverters, and dynamic IoT cloud metrics panels.',
      icon: <Sparkles className="w-5 h-5 text-emerald-500" />
    },
    {
      title: 'Community & Environment',
      desc: 'Re-distributing local microgrids output back to local community cooperatives and remote rural lines.',
      icon: <Globe className="w-5 h-5 text-emerald-500" />
    },
    {
      title: 'Trusted & Reliable Partner',
      desc: 'Red-seal certifications, fully insured physical liability bonds, and lifetime proactive checkup schedules.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#f8fafc]/50 relative border-b border-gray-100">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-emerald-50/30 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel: Core text copy and Green point bullets (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-display text-sm font-bold tracking-widest text-emerald-600 uppercase">
              ABOUT US
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0f172a] tracking-tight leading-[1.12]">
              Powering a Better Tomorrow
            </h2>
            <div className="h-1 w-20 bg-emerald-500 rounded mt-3" />

            <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
              GlobalPoint Energy is committed to creating a sustainable future through innovative and reliable energy solutions. We partner with businesses, communities, and organizations to reduce carbon footprints and build a cleaner planet.
            </p>

            {/* Bullets grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {points.map((pt, i) => (
                <div key={i} className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50/80 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                    {pt.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#0f172a] tracking-tight leading-normal">
                      {pt.title}
                    </h4>
                    <p className="font-sans text-xs text-gray-500 leading-normal mt-0.5">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel: visual badge card (5 columns) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] w-full max-w-sm border border-gray-250 bg-slate-300">
              
              {/* High-res beautiful Unsplash solar skyline image */}
              <img
                src="https://images.unsplash.com/photo-1548613053-220ef358109a?auto=format&fit=crop&q=80&w=800"
                alt="GlobalPoint installation excellency"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Years badge plaque */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl border border-emerald-500/20 p-5.5 shadow-md">
                <div className="flex items-center space-x-4">
                  <span className="font-display text-4xl font-extrabold text-emerald-600 leading-none">
                    10+
                  </span>
                  <div>
                    <h4 className="font-display text-xs font-extrabold text-gray-850 tracking-wider uppercase leading-none">
                      Years of Excellence
                    </h4>
                    <p className="font-sans text-[10px] text-gray-500 leading-normal mt-1.5">
                      Constructing clean energy layouts with Red Seal certifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
