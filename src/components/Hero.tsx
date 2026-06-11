import React, { useState, useEffect } from 'react';
import { CheckCircle2, Play, ArrowRight, X, Sun, BatteryCharging, ShieldCheck, DollarSign, Activity, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // States for the clean power flow simulator inside the modal
  const [solarPower, setSolarPower] = useState(85);
  const [windPower, setWindPower] = useState(45);
  const [batteryState, setBatteryState] = useState(62);
  const [gridLoad, setGridLoad] = useState(110);

  useEffect(() => {
    if (!isVideoOpen) return;
    const interval = setInterval(() => {
      // Simulate real-time dynamic flulations
      setSolarPower(prev => Math.min(100, Math.max(20, Math.round(prev + (Math.random() - 0.5) * 8))));
      setWindPower(prev => Math.min(100, Math.max(10, Math.round(prev + (Math.random() - 0.5) * 12))));
      setGridLoad(prev => Math.min(200, Math.max(50, Math.round(prev + (Math.random() - 0.5) * 10))));

      setBatteryState(prev => {
        const generation = (solarPower + windPower) * 0.5;
        const loadDemand = gridLoad * 0.4;
        const netFlow = generation - loadDemand;
        const change = netFlow > 0 ? 1 : -1;
        return Math.min(100, Math.max(5, Math.round(prev + change * (Math.abs(netFlow) * 0.05))));
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [isVideoOpen, solarPower, windPower, gridLoad]);

  const highlights = [
    'Reliable & Efficient Systems',
    'Sustainable Commercial Solar',
    'Cost-Effective Peak Shaving',
    'Future Ready Smart Microgrids'
  ];

  const quickFeatures = [
    {
      icon: 'Sun',
      title: 'SUSTAINABLE SOLUTIONS',
      desc: 'Environmentally responsible, low-carbon custom energy systems tailored to scale.',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: 'Zap',
      title: 'CUTTING EDGE TECHNOLOGY',
      desc: 'Smart power hardware, cloud systems, and solid-state battery containment cages.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: 'ShieldCheck',
      title: 'RELIABLE PARTNER',
      desc: 'Red-seal credentialed crews with robust warranties and lifetime active maintenance schedules.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: 'DollarSign',
      title: 'COST EFFECTIVE',
      desc: 'Dramatically reduce utility peak charges and secure immediate government clean energy credits.',
      color: 'from-emerald-600 to-emerald-400'
    }
  ];

  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#ffffff]">
      {/* Decorative clean circular accent */}
      <div className="absolute -top-40 -right-40 w-120 h-120 rounded-full bg-emerald-50/50 mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute top-1/2 -left-30 w-90 h-90 rounded-full bg-[#e0f2fe] mix-blend-multiply filter blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero text panel (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-1.5 self-start bg-emerald-50 border border-emerald-200 py-1 px-3.5 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-sans text-xs font-semibold tracking-wider uppercase text-emerald-800">
                Innovating Energy Storage
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0f172a] leading-[1.08] mb-6"
            >
              SMART ENERGY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 relative inline-block">
                CLEAN FUTURE
                <div className="absolute bottom-1 left-0 w-full h-1 bg-emerald-200/50 rounded" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-lg text-gray-600 leading-relaxed mb-8 max-w-xl"
            >
              GlobalPoint Energy delivers innovative, sustainable energy solutions for businesses and communities. We design, engineer, install and manage microgrids, solar arrays, and high-tech utility battery banks.
            </motion.p>

            {/* Check highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-9"
            >
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="font-sans text-sm font-semibold text-gray-700">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-3"
            >
              <button
                onClick={() => onScrollTo('services')}
                className="group flex items-center justify-center space-x-2 bg-[#0f172a] hover:bg-[#1e293b] text-white hover:text-emerald-300 font-sans font-semibold py-3.5 px-6.5 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="group flex items-center justify-center space-x-2.5 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 hover:border-emerald-300 font-sans font-semibold py-3.5 px-6.5 rounded-full shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center text-emerald-600 transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Clean Power Live-Demo</span>
              </button>
            </motion.div>
          </div>

          {/* Hero visual graphic panel (5 cols on desktop) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full rounded-3xl bg-slate-200 border border-slate-300 shadow-2xl overflow-hidden aspect-[4/3] group max-w-lg mx-auto"
            >
              {/* Fallback gorgeous graphic backdrop representing battery containers and solar arrays */}
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800"
                alt="GlobalPoint Clean Energy Farm"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/30 to-transparent" />

              {/* Badges superimposed */}
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end backdrop-blur-md bg-slate-950/45 p-4 rounded-2xl border border-white/10">
                <div className="text-white">
                  <p className="font-display text-xs tracking-wider uppercase opacity-85 text-emerald-400 font-semibold">Active Interconnection</p>
                  <p className="font-sans text-lg font-bold leading-none mt-1">Smart Storage Tier 1</p>
                </div>
                <div className="bg-emerald-500 text-white font-sans text-xs px-2.5 py-1 rounded-full font-bold flex items-center space-x-1">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Dynamic stats pill overlay */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur border border-emerald-100 px-3.5 py-2 rounded-xl shadow-lg flex items-center space-x-2.5">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <div>
                  <p className="text-[10px] text-gray-500 font-bold tracking-wider uppercase leading-none">Yield efficiency</p>
                  <p className="font-mono text-sm font-semibold text-gray-800 leading-none mt-1">98.4% ACTIVE</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quick Features Row */}
        <div className="mt-20 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickFeatures.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-all group hover:border-emerald-100"
              >
                <div className={`w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 transition-colors group-hover:bg-emerald-600 group-hover:text-white`}>
                  {item.icon === 'Sun' && <Sun className="w-6 h-6" />}
                  {item.icon === 'Zap' && <Zap className="w-6 h-6" />}
                  {item.icon === 'ShieldCheck' && <ShieldCheck className="w-6 h-6" />}
                  {item.icon === 'DollarSign' && <DollarSign className="w-6 h-6" />}
                </div>
                <h4 className="font-display text-sm font-bold text-gray-800 tracking-wider uppercase mb-2">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Clean Energy simulator Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoOpen(false)}
              className="absolute inset-0 bg-[#0f172acd]/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-gray-100 z-10"
            >
              {/* Header */}
              <div className="bg-[#0f172a] text-white py-4 px-6 flex justify-between items-center border-b border-gray-800">
                <div className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-emerald-400" />
                  <span className="font-display font-bold text-base uppercase tracking-wider">
                    Smart Grid Microgrid Simulation
                  </span>
                </div>
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 bg-gray-50">
                <p className="text-sm text-gray-600 mb-6 text-center">
                  This live IoT simulation demonstrates how GlobalPoint's software algorithms balances generation, peak shaving battery state, and grid demands in real-time.
                </p>

                {/* Dashboard layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Energy Sources panel */}
                  <div className="bg-white p-5 rounded-xl border border-gray-200">
                    <h5 className="font-display text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center space-x-1">
                      <Sun className="w-3.5 h-3.5 text-amber-500" />
                      <span>Input Energy Yields</span>
                    </h5>

                    {/* Solar row */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center text-xs font-semibold text-gray-700 mb-1.5">
                        <span>Photovoltaic Solar Arrays</span>
                        <span className="font-mono">{solarPower} kW</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          animate={{ width: `${solarPower}%` }}
                          transition={{ duration: 0.5 }}
                          className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                        />
                      </div>
                    </div>

                    {/* Wind row */}
                    <div>
                      <div className="flex justify-between items-center text-xs font-semibold text-gray-700 mb-1.5">
                        <span>Wind Aerodynamic Turbine</span>
                        <span className="font-mono">{windPower} kW</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          animate={{ width: `${windPower}%` }}
                          transition={{ duration: 0.5 }}
                          className="h-full bg-gradient-to-r from-teal-400 to-teal-500 rounded-full"
                        />
                      </div>
                    </div>

                    {/* Aggregate supply */}
                    <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-xs font-bold text-gray-500 uppercase">Combined Yield</span>
                      <span className="text-base font-mono font-bold text-emerald-600">
                        {solarPower + windPower} kW
                      </span>
                    </div>
                  </div>

                  {/* Battery & Grid Demand status */}
                  <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col justify-between">
                    <div>
                      <h5 className="font-display text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center space-x-1.5">
                        <BatteryCharging className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Battery Storage State (SoC)</span>
                      </h5>

                      {/* SoC visual dial bar */}
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="relative w-16 h-16 rounded-full border-4 border-emerald-100 overflow-hidden flex items-center justify-center font-mono text-sm font-bold text-gray-800 bg-emerald-50/20">
                          {batteryState}%
                          <div
                            style={{ height: `${batteryState}%` }}
                            className="absolute bottom-0 left-0 w-full bg-emerald-500/10 transition-all duration-1000"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between text-xs mb-1 font-semibold text-gray-700">
                            <span>Lithium LFP Buffer</span>
                            <span className="text-emerald-600 font-bold">In Operation</span>
                          </div>
                          <p className="text-[10px] text-gray-400 leading-normal">
                            Shaving active peak rates, power stored safely.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Grid load power line */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center text-xs font-semibold text-gray-700 mb-1.5">
                        <span>Grid-Intertie Client Load</span>
                        <span className="font-mono text-red-500 font-bold">{gridLoad} kW</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          animate={{ width: `${Math.min(100, (gridLoad / 200) * 100)}%` }}
                          transition={{ duration: 0.5 }}
                          className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Automation flow description feedback */}
                <div className="mt-6 bg-slate-900 text-slate-100 p-4.5 rounded-xl border border-slate-800 font-mono text-xs">
                  <div className="flex items-center space-x-2 text-emerald-400 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold">SYSTEM CONTROL: ACTIVE BALANCING</span>
                  </div>
                  <ul className="space-y-1 text-slate-300">
                    <li>&gt; PV Gen Status: <span className="text-amber-400">{solarPower} kW</span> input active.</li>
                    <li>&gt; Wind Turbine Speed: <span className="text-teal-400">{windPower} kW</span> rotational output.</li>
                    <li>&gt; Internal SoC: {batteryState}% charged. Buffer reserve is <span className="text-emerald-400">Stable</span>.</li>
                    <li>&gt; Local Demand Load: {gridLoad} kW.</li>
                    <li className="text-emerald-400 font-bold">
                      &gt; STATUS: {((solarPower + windPower) - gridLoad) >= 0 
                        ? "SUPPLY SURPLUS - Excess energy is charging Battery Storage." 
                        : " arbitrage mode active - batterydischarging to shaving demand charges."}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Close footer button */}
              <div className="bg-gray-100 py-3.5 px-6 flex justify-end">
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-bold tracking-widest uppercase py-2.5 px-5 rounded-lg transition-colors cursor-pointer"
                >
                  Close Monitor
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
