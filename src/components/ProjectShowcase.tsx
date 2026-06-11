import React, { useState } from 'react';
import { Project } from '../types';
import { projectsData } from '../data';
import { MapPin, Zap, Calendar, Eye, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProjectShowcase() {
  const [filter, setFilter] = useState<string>('All');

  // Categories extraction
  const categories = ['All', 'Solar Energy', 'Battery Storage', 'Wind Generation'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(proj => proj.category.toLowerCase().includes(filter.split(' ')[0].toLowerCase()));

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="font-display text-sm font-bold tracking-widest text-emerald-600 uppercase">
              Proven Track Record
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0f172a] mt-2 tracking-tight">
              Our Recent Projects
            </h2>
            <div className="h-1 w-16 bg-emerald-500 rounded mt-3.5" />
            <p className="font-sans text-gray-500 text-sm mt-4">
              Delivering modular green-tech installations designed to secure high financial return rates and strict grid resilience standards.
            </p>
          </div>

          {/* Filtering Category Chips Row */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat, idx) => {
              const active = cat === filter;
              return (
                <button
                  key={idx}
                  onClick={() => setFilter(cat)}
                  className={`font-sans text-xs font-semibold py-2 px-4 rounded-full border transition-all cursor-pointer ${
                    active
                      ? 'bg-emerald-600 border-emerald-500 text-white shadow-xs'
                      : 'bg-[#f8fafc] border-gray-100 hover:border-gray-200 text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="group bg-slate-50 rounded-2xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Visual container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-90" />

                  {/* Badges Overlay */}
                  <div className="absolute top-3 left-3 bg-[#0f172a]/85 backdrop-blur-xs text-[10px] text-emerald-400 font-mono font-bold tracking-wide uppercase py-1 px-3 rounded-md">
                    {project.category}
                  </div>

                  {/* Year Tag Overlay */}
                  <div className="absolute bottom-3 right-3 flex items-center space-x-1 bg-white/90 text-gray-800 text-[10px] font-semibold py-1 px-2.5 rounded-full backdrop-blur-xs">
                    <Calendar className="w-3 h-3 text-emerald-600" />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Body details container */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    {/* Meta info header */}
                    <div className="flex items-center space-x-3.5 mb-2.5 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-1 font-semibold text-[#0f172a]">
                        <Zap className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{project.capacity}</span>
                      </div>
                    </div>

                    <h3 className="font-display text-base font-bold text-[#0f172a] leading-tight group-hover:text-emerald-700 transition-colors mb-3">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-550 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Impact Highlight panel */}
                  {project.impact && (
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 flex items-center space-x-2.5 mt-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-sans text-[11px] font-bold text-emerald-800 leading-none">
                        Certified Impact: <span className="text-[#0f172a] font-normal">{project.impact}</span>
                      </span>
                    </div>
                  )}

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
