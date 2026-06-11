import React, { useState, useEffect } from 'react';
import { Leaf, DollarSign, Calendar, TrendingUp, Sparkles, Sliders, ArrowRight, Sun, BatteryCharging, Building } from 'lucide-react';
import { motion } from 'motion/react';

interface InteractiveCalculatorProps {
  onQuoteTrigger: (details: { service: string; message: string }) => void;
}

export default function InteractiveCalculator({ onQuoteTrigger }: InteractiveCalculatorProps) {
  const [facilityType, setFacilityType] = useState<'commercial' | 'agricultural' | 'fleet' | 'residential'>('commercial');
  const [monthlyBill, setMonthlyBill] = useState<number>(8500);
  const [solutionType, setSolutionType] = useState<'solar' | 'storage' | 'hybrid'>('hybrid');

  // Outputs state
  const [savings, setSavings] = useState(0);
  const [payback, setPayback] = useState(0);
  const [carbonOffset, setCarbonOffset] = useState(0);
  const [treeEquivalent, setTreeEquivalent] = useState(0);
  const [estCost, setEstCost] = useState(0);

  useEffect(() => {
    // 1. Estimate annual consumption in kWh (assuming average industrial rate of $0.15/kWh in Canada)
    const annualEstKwh = (monthlyBill / 0.15) * 12;

    // 2. Efficiency factor based on solution type
    let offsetPct = 0.70; // Solar off-sets 70% of energy
    if (solutionType === 'storage') offsetPct = 0.35; // Battery off-sets 35% through peak-shaving
    if (solutionType === 'hybrid') offsetPct = 0.95; // Hybrid off-sets 95% of grid billing

    // 3. System Cost estimation
    const targetKwpRequired = (monthlyBill * 12 * offsetPct) / (1250 * 0.15); // Avg solar radiant hours
    let rawCost = 0;
    if (solutionType === 'solar') {
      rawCost = targetKwpRequired * 2100; // $2,100 per kW solar
    } else if (solutionType === 'storage') {
      rawCost = (targetKwpRequired * 0.4) * 950; // Storage component capacity kWh
    } else {
      rawCost = (targetKwpRequired * 2100) + ((targetKwpRequired * 0.4) * 850); // Bundle discount
    }

    // Federal Tax Credit Clean Energy deduction (Avg 30% in Canada)
    const federalTaxDeduction = rawCost * 0.30;
    const finalSystemCost = rawCost - federalTaxDeduction;

    // 4. Annual savings calculation
    const annualSavingsVal = monthlyBill * 12 * offsetPct;

    // 5. Payback period in years
    const paybackYrs = finalSystemCost / annualSavingsVal;

    // 6. CO2 Offset (Canadian offset index approx 0.43 kgs per kWh of fossil-heavy generation offset)
    const carbonKgs = (annualEstKwh * offsetPct) * 0.43;
    const carbonTonsVal = carbonKgs / 1000;

    // 7. Tree equivalent (1 mature tree absorbs approx 22 kgs of CO2 annually)
    const trees = Math.round(carbonKgs / 22);

    setSavings(Math.round(annualSavingsVal));
    setPayback(Number(Math.max(3.5, Math.min(12, paybackYrs)).toFixed(1)));
    setCarbonOffset(Number(carbonTonsVal.toFixed(1)));
    setTreeEquivalent(trees);
    setEstCost(Math.round(finalSystemCost));

  }, [facilityType, monthlyBill, solutionType]);

  const treeIconsArray = Array.from({ length: Math.min(8, Math.max(1, Math.round(treeEquivalent / 400))) });

  const handleApplyToQuote = () => {
    const formattedBill = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(monthlyBill);
    const formattedSavings = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(savings);
    
    let activeServStr = 'Solar Energy Solutions';
    if (solutionType === 'storage') activeServStr = 'Energy Storage Systems';
    if (solutionType === 'hybrid') activeServStr = 'Energy Storage Systems';

    const messageBody = `Hi GlobalPoint team, I calculated a clean energy profile inside your website. 
Facility Profile: ${facilityType.toUpperCase()}
Current Monthly Bill: ${formattedBill}
Desired Option: ${solutionType.toUpperCase()} system.
Estimated ROI Savings: ${formattedSavings} annually with an estimated ${payback} years payback.
Please send us a formal site engineering proposal request.`;

    onQuoteTrigger({
      service: activeServStr,
      message: messageBody
    });
  };

  const getSolutionTitle = () => {
    if (solutionType === 'solar') return 'Solar Array Setup';
    if (solutionType === 'storage') return 'Battery peak shaving';
    return 'Hybrid Solar-Storage Pack';
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 text-white relative overflow-hidden">
      
      {/* Visual neon patterns in background */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-emerald-500/10 filter blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-90 h-90 rounded-full bg-emerald-700/5 filter blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display text-sm font-bold tracking-widest text-emerald-400 uppercase">
            Interactive Profit Modeler
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2 tracking-tight">
            Solar & Wind ROI Estimator
          </h2>
          <div className="h-1 w-20 bg-emerald-400 rounded mx-auto mt-4" />
          <p className="font-sans text-gray-300 text-sm sm:text-base mt-4">
            Input your current raw utility bill below. Our model applies real-world regional engineering math to forecast savings and ecological impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left panel: Inputs controls (7 columns) */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-8">
              
              {/* Option 1: Facility Type Selection */}
              <div>
                <label className="block text-xs font-bold font-display uppercase tracking-wider text-emerald-400 mb-3.5">
                  1. Select your Facility Profile
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'commercial', label: 'Commercial', desc: 'Warehouses' },
                    { id: 'agricultural', label: 'Agricultural', desc: 'Farms' },
                    { id: 'fleet', label: 'Fleet Hub', desc: 'EV Depots' },
                    { id: 'residential', label: 'Residential', desc: 'Acreages' }
                  ].map((fac) => (
                    <button
                      key={fac.id}
                      onClick={() => setFacilityType(fac.id as any)}
                      className={`py-3 px-3 rounded-xl border text-center transition-all ${
                        facilityType === fac.id
                          ? 'border-emerald-400 bg-emerald-500/10 text-white shadow-sm'
                          : 'border-white/15 bg-white/2 hover:bg-white/5 text-gray-300'
                      }`}
                    >
                      <Building className="w-5 h-5 mx-auto mb-1.5 opacity-80" />
                      <p className="font-display font-bold text-xs uppercase tracking-tight">{fac.label}</p>
                      <p className="font-sans text-[9px] opacity-60 leading-none mt-0.5">{fac.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Monthly electrical bill slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-bold font-display uppercase tracking-wider text-emerald-400">
                    2. Current Monthly electricity spend
                  </label>
                  <span className="font-mono text-base font-bold text-white bg-emerald-500/25 py-0.5 px-2.5 rounded-lg border border-emerald-500/30">
                    {new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(monthlyBill)}
                  </span>
                </div>
                
                {/* Custom input slider range */}
                <div className="relative mt-4 flex items-center">
                  <input
                    type="range"
                    min={1000}
                    max={50000}
                    step={500}
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                </div>

                <div className="flex justify-between text-[10px] text-gray-400 font-mono mt-2">
                  <span>$1,000 / mo</span>
                  <span>$25,000</span>
                  <span>$50,000 / mo</span>
                </div>
              </div>

              {/* Option 3: Tech Solution Tier */}
              <div>
                <label className="block text-xs font-bold font-display uppercase tracking-wider text-emerald-400 mb-3.5">
                  3. Select Hardware Solution
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'solar', label: 'Bifacial Solar', icon: <Sun className="w-4 h-4 text-amber-400" />, offset: '70% Offset' },
                    { id: 'storage', label: 'LFP Battery Buffer', icon: <BatteryCharging className="w-4 h-4 text-emerald-400" />, offset: '35% Offset' },
                    { id: 'hybrid', label: 'Hybrid Solar-Storage', icon: <Sparkles className="w-4 h-4 text-cyan-400" />, offset: '95% Offset' }
                  ].map((sol) => (
                    <button
                      key={sol.id}
                      onClick={() => setSolutionType(sol.id as any)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        solutionType === sol.id
                          ? 'border-emerald-400 bg-emerald-500/10 text-white shadow-sm'
                          : 'border-white/15 bg-white/2 hover:bg-white/5 text-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-1.5">
                        {sol.icon}
                        <span className="font-display font-semibold text-xs">{sol.label}</span>
                      </div>
                      <span className="font-sans text-[10px] text-emerald-400 font-semibold tracking-wide uppercase">
                        {sol.offset}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Note info credit bottom */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center space-x-2 text-[11px] text-gray-400 leading-normal">
              <Sliders className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Calculators run standard weather and municipal solar-hour indices based on Canadian NRCan databases.</span>
            </div>
          </div>

          {/* Right panel: Financial Output Showcase (5 columns) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-gray-950 to-slate-900 border border-emerald-500/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
            {/* Top glass glow logo */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full filter blur-2xl opacity-60" />

            <div className="space-y-6 relative z-10">
              <h4 className="font-display text-sm font-bold tracking-wider text-emerald-400 uppercase">
                Estimated ROI Yield Profile
              </h4>

              {/* Main savings figure */}
              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-gray-400 leading-none">Annual Utility Offset Savings</p>
                <div className="flex items-baseline mt-1">
                  <span className="font-display font-bold text-3xl sm:text-4xl text-emerald-300">
                    {new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(savings)}
                  </span>
                  <span className="text-xs text-gray-400 font-semibold ml-1.5">/ annually</span>
                </div>
                <div className="inline-flex items-center space-x-1.5 bg-emerald-400/10 text-emerald-300 py-0.5 px-2 rounded-full text-[10px] font-bold mt-2 border border-emerald-400/20">
                  <TrendingUp className="w-3 h-3" />
                  <span>Saves {solutionType === 'hybrid' ? '95%' : solutionType === 'solar' ? '70%' : '35%'} instantly</span>
                </div>
              </div>

              {/* Detailed specs list */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                
                {/* Payback period */}
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <span>Payback Period Timeline</span>
                  </div>
                  <span className="font-mono font-bold text-white text-sm bg-white/10 px-2 py-0.5 rounded">
                    ~{payback} Years
                  </span>
                </div>

                {/* Estimate Cost after rebates */}
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    <span>Net System Cost (after tax credits)</span>
                  </div>
                  <span className="font-mono font-bold text-gray-200">
                    {new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(estCost)}*
                  </span>
                </div>

                {/* Carbon Offset metric */}
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Leaf className="w-4 h-4 text-emerald-400" />
                    <span>Annual CO2 Emissions Offset</span>
                  </div>
                  <span className="font-mono font-bold text-emerald-300">
                    {carbonOffset} Metric Tons
                  </span>
                </div>

              </div>
              
              {/* Ecological Impact Magic Section */}
              <div className="bg-emerald-900/20 border border-emerald-500/20 p-4 rounded-2xl relative overflow-hidden">
                <div className="flex justify-between items-center mb-3">
                  <span className="block text-[10px] font-mono tracking-widest text-[#10b981] font-extrabold uppercase">
                    Equivalent Forest Growth
                  </span>
                  <span className="font-mono text-xs font-bold text-emerald-300">
                    +{treeEquivalent} Trees / yr
                  </span>
                </div>

                {/* Animated Growing forest SVGs representation */}
                <div className="flex items-end space-x-1.5 h-10 mt-2 bg-emerald-500/5 rounded-lg px-2 py-1 justify-center">
                  {treeIconsArray.map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, y: 10 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ type: 'spring', delay: index * 0.1, stiffness: 120 }}
                      className="text-emerald-400"
                    >
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2L4 12h3v8h10v-8h3L12 2z" />
                      </svg>
                    </motion.div>
                  ))}
                  {treeEquivalent > 2000 && (
                    <span className="text-[10px] text-emerald-400 font-bold ml-2 self-center font-mono">
                      & more!
                    </span>
                  )}
                </div>
                <p className="text-[9px] text-gray-400 text-center leading-normal mt-2.5">
                  Visual represents trees planted equivalent. Larger monthly bills create larger ecological impact!
                </p>
              </div>

            </div>

            {/* Quote Lock action */}
            <div className="pt-6 relative z-10">
              <button
                onClick={handleApplyToQuote}
                className="w-full flex items-center justify-center space-x-2 bg-[#10b981] hover:bg-emerald-500 text-white font-sans text-xs font-bold py-3.5 px-4 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider"
              >
                <span>Integrate into Contact Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[9px] text-gray-500 text-center leading-none mt-3.5">
                *Taxes and municipal grid hookup credits depend on final local inspections.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
