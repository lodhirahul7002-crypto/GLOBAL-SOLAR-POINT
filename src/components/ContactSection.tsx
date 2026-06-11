import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Database, Trash2, ShieldAlert, Sparkles, User, FileText, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactMessage } from '../types';

interface ContactSectionProps {
  prefilledService: string;
  prefilledMessage: string;
}

export default function ContactSection({ prefilledService, prefilledMessage }: ContactSectionProps) {
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [selectedService, setSelectedService] = useState('Solar Energy Solutions');
  const [message, setMessage] = useState('');

  // UI state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [allMessages, setAllMessages] = useState<ContactMessage[]>([]);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [activeAnalysisMsgId, setActiveAnalysisMsgId] = useState<string | null>(null);

  // Sync pre-fills from Calculator
  useEffect(() => {
    if (prefilledService) {
      setSelectedService(prefilledService);
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledMessage) {
      setMessage(prefilledMessage);
    }
  }, [prefilledMessage]);

  // Load submissions from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('globalpoint_messages');
      if (stored) {
        setAllMessages(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert('Please fill out Name, Email and Message.');
      return;
    }

    const newMessage: ContactMessage = {
      id: `msg_${Math.random().toString(36).substr(2, 9)}`,
      name,
      email,
      phone: phone || 'N/A',
      company: company || 'N/A',
      service: selectedService,
      message,
      date: new Date().toLocaleString('en-CA')
    };

    const updatedList = [newMessage, ...allMessages];
    setAllMessages(updatedList);
    localStorage.setItem('globalpoint_messages', JSON.stringify(updatedList));

    setIsSubmitted(true);

    // Reset input states
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setMessage('');
  };

  const handleDeleteMessage = (id: string) => {
    const filtered = allMessages.filter(m => m.id !== id);
    setAllMessages(filtered);
    localStorage.setItem('globalpoint_messages', JSON.stringify(filtered));
    if (activeAnalysisMsgId === id) {
      setActiveAnalysisMsgId(null);
    }
  };

  const getRuleBasedAnalysis = (msg: ContactMessage) => {
    // Parse values from message content text if parsed via ROI calculator
    let billVal = 8500;
    let savedVal = 62000;
    let typeVal = 'Hybrid';

    if (msg.message.includes('Current Monthly Bill:')) {
      const billMatch = msg.message.match(/Monthly Bill:\s*\$?([\d,]+)/);
      if (billMatch && billMatch[1]) {
        billVal = parseInt(billMatch[1].replace(/,/g, ''), 10);
      }
    }
    if (msg.message.includes('ROI Savings:')) {
      const savingsMatch = msg.message.match(/ROI Savings:\s*\$?([\d,]+)/);
      if (savingsMatch && savingsMatch[1]) {
        savedVal = parseInt(savingsMatch[1].replace(/,/g, ''), 10);
      }
    }
    if (msg.message.includes('Desired Option:')) {
      const typeMatch = msg.message.match(/Desired Option:\s*(\w+)/);
      if (typeMatch && typeMatch[1]) {
        typeVal = typeMatch[1];
      }
    }

    const estimatedInvestment = billVal * 25; // Simple estimate
    const taxDeduction = estimatedInvestment * 0.3; // 30% Clean Tax Write-off
    const truePayback = (estimatedInvestment - taxDeduction) / (billVal * 12 * 0.7);

    return {
      bill: billVal,
      savings: savedVal,
      type: typeVal,
      investment: estimatedInvestment,
      taxDeduction,
      payback: Number(Math.max(3.5, Math.min(10, truePayback)).toFixed(1)),
      co2Offset: Number(((billVal * 12 / 0.15) * 0.75 * 0.43 / 1000).toFixed(1)),
      recommendedModules: Math.round(billVal * 0.8),
      installerLevel: 'Red Seal Master Electrician Grade 1'
    };
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative border-t border-gray-100">
      
      {/* Visual map pin background accent */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-emerald-100/10 mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display text-sm font-bold tracking-widest text-emerald-600 uppercase">
            Let's Collaborate
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0f172a] mt-2 tracking-tight">
            Initiate Your Site Proposal
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded mx-auto mt-4" />
          <p className="font-sans text-gray-500 text-sm sm:text-base mt-4">
            Connect with our certified commercial electricians and energy estimators to schedule a fully customized rooftop feasibility analysis.
          </p>
        </div>

        {/* Content Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Panel: Corporate Info Cards (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contacts */}
            <div className="bg-[#0f172a] text-white rounded-3xl p-6 sm:p-8 space-y-7 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full filter blur-xl" />
              
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-emerald-400">
                  GlobalPoint HQ
                </h3>
                <p className="font-sans text-xs text-slate-300 mt-1 leading-normal">
                  Turnkey solar, wind microgrids, and battery commercial developers.
                </p>
              </div>

              <div className="space-y-4">
                
                {/* Physical Location */}
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-display text-xs font-bold uppercase text-slate-400 tracking-wider">Corporate Headquarters</p>
                    <p className="font-sans text-sm mt-0.5 leading-snug">
                      1200-100 King St W,<br />
                      Toronto, ON MSX 1A1
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start space-x-3.5">
                  <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-display text-xs font-bold uppercase text-slate-400 tracking-wider">National Estimations Desk</p>
                    <p className="font-sans text-sm mt-0.5 font-semibold">
                      (647) 123-4557
                    </p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start space-x-3.5">
                  <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-display text-xs font-bold uppercase text-slate-400 tracking-wider">Direct Media & Bids</p>
                    <p className="font-sans text-sm mt-0.5 font-semibold">
                      info@globalpointenergy.ca
                    </p>
                  </div>
                </div>

              </div>

              {/* Verified Badge */}
              <div className="pt-4 border-t border-white/10 flex items-center space-x-2 text-xs text-slate-400 leading-normal">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Operating hours: Mon-Fri 8:00 AM - 6:00 PM EST</span>
              </div>
            </div>

            {/* Geographical Coverage indicator */}
            <div className="bg-white rounded-2xl border border-gray-150 p-5 shadow-xs">
              <h4 className="font-display text-xs font-bold text-gray-800 uppercase tracking-widest mb-2">
                Operational Jurisdictions
              </h4>
              <p className="font-sans text-xs text-gray-500 leading-relaxed mb-3">
                Our red-seal installation crews operate directly across Ontario, Alberta, Saskatchewan, and British Columbia.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Ontario', 'Alberta', 'British Columbia', 'Saskatchewan'].map((prov, i) => (
                  <span key={i} className="font-mono text-[9px] font-bold bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {prov}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Panel: Proposals Contact Form (7 columns) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-display font-bold text-gray-700 tracking-wider bg-white px-1 leading-none mb-2">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full font-sans text-sm bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Email address */}
                    <div>
                      <label className="block text-xs font-display font-bold text-gray-700 tracking-wider bg-white px-1 leading-none mb-2">
                        ELECTRICAL EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.ca"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full font-sans text-sm bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone string */}
                    <div>
                      <label className="block text-xs font-display font-bold text-gray-700 tracking-wider bg-white px-1 leading-none mb-2">
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        placeholder="(416) 555-0123"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full font-sans text-sm bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-display font-bold text-gray-700 tracking-wider bg-white px-1 leading-none mb-2">
                        CORPORATION
                      </label>
                      <input
                        type="text"
                        placeholder="Apex Logistics Ltd"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full font-sans text-sm bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Core Services Selected */}
                  <div>
                    <label className="block text-xs font-display font-bold text-gray-700 tracking-wider bg-white px-1 leading-none mb-2">
                      DESIRED TECHNICAL FOCUS
                    </label>
                    <div className="relative">
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full font-sans text-sm bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white appearance-none cursor-pointer transition-colors"
                      >
                        <option>Solar Energy Solutions</option>
                        <option>Energy Storage Systems</option>
                        <option>Wind Energy Solutions</option>
                        <option>EV Charging Stations</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Project Specs */}
                  <div>
                    <label className="block text-xs font-display font-bold text-gray-700 tracking-wider bg-white px-1 leading-none mb-2">
                      SPECIFICATION DETAILS *
                    </label>
                    <textarea
                      required
                      placeholder="Please details your facility rooftop size, warehouse utility spend, or wind microgrid integration requirements."
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full font-sans text-sm bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-sm font-semibold py-3.5 px-6 rounded-xl shadow-md transition-transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span>Transmit Site Proposal Request</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-xs border border-emerald-100">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#0f172a] mb-2">
                    Proposal Successfully Logged!
                  </h3>
                  <p className="font-sans text-gray-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you. Your industrial feasibility request has been stored locally. A red-seal estimator will contact your engineers for review.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#0f172a] hover:bg-[#1e293b] text-white font-sans text-xs font-bold py-2.5 px-5 rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* ADMIN PORTAL AND ANALYST DRAWER */}
        <div className="mt-16 max-w-4xl mx-auto border border-dashed border-gray-200 bg-white p-5 rounded-2xl shadow-2xs">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2.5">
              <Database className="w-4 h-4 text-emerald-600" />
              <div>
                <p className="font-display text-xs font-bold text-gray-800 leading-none">Submissions Logger & Expert Analyst Panel</p>
                <p className="text-[10px] text-gray-400 mt-1 leading-none">Simulate corporate internal CRM queues securely.</p>
              </div>
            </div>
            <button
              onClick={() => setIsAdminOpen(!isAdminOpen)}
              className="font-sans text-xs font-semibold py-1.5 px-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 cursor-pointer transition-colors"
            >
              {isAdminOpen ? 'Minimize portal' : `Decompress entries (${allMessages.length})`}
            </button>
          </div>

          <AnimatePresence>
            {isAdminOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                {allMessages.length === 0 ? (
                  <p className="text-xs text-center text-gray-400 font-sans py-8">
                    No active proposals submitted. Use the form above or the Calculator to populate submissions locally!
                  </p>
                ) : (
                  <div className="pt-6 space-y-4">
                    {allMessages.map((msg) => {
                      const analysisActive = activeAnalysisMsgId === msg.id;
                      const analysisData = analysisActive ? getRuleBasedAnalysis(msg) : null;

                      return (
                        <div key={msg.id} className="bg-slate-50 border border-gray-100 p-4.5 rounded-xl">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="font-mono text-[9px] font-bold bg-[#0f172a] text-white px-2 py-0.5 rounded">
                                  {msg.service}
                                </span>
                                <span className="text-[10px] text-gray-400">{msg.date}</span>
                              </div>
                              <h5 className="font-display text-xs font-bold text-gray-850 mt-2 flex items-center space-x-1">
                                <User className="w-3.5 h-3.5 text-gray-400" />
                                <span>{msg.name} ({msg.company})</span>
                              </h5>
                              <p className="text-[10px] font-mono text-gray-500">{msg.email} | {msg.phone}</p>
                            </div>

                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => setActiveAnalysisMsgId(analysisActive ? null : msg.id)}
                                className={`font-sans text-[10px] font-bold py-1 px-2.5 rounded-md flex items-center space-x-1 cursor-pointer transition-colors ${
                                  analysisActive
                                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                                    : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-150'
                                }`}
                              >
                                <Sparkles className="w-3 h-3" />
                                <span>{analysisActive ? 'Collapse report' : 'Run feasibility analysis'}</span>
                              </button>
                              <button
                                onClick={() => handleDeleteMessage(msg.id)}
                                className="p-1 px-1.5 bg-red-50 hover:bg-red-100 text-red-600 border border-red-150 rounded-md cursor-pointer transition-colors"
                                title="Delete Log Entry"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          {/* Message specification text block */}
                          <div className="mt-3.5 bg-white border border-gray-200/60 rounded-lg p-3 text-xs font-sans text-gray-600 max-h-32 overflow-y-auto leading-relaxed whitespace-pre-wrap">
                            {msg.message}
                          </div>

                          {/* Rule-Based Energy Analyst expert panel */}
                          {analysisActive && analysisData && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.98, y: 5 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              className="mt-4 border border-emerald-400/20 bg-emerald-50/20 p-4.5 rounded-xl text-xs font-mono text-gray-700"
                            >
                              <div className="flex items-center space-x-1.5 text-emerald-700 font-extrabold mb-3">
                                <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                                <span>GLOBALPOINT FEASIBILITY SUMMARY ANALYST</span>
                              </div>

                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4 border-b border-gray-100 pb-4">
                                <div>
                                  <span className="text-[10px] text-gray-400 uppercase font-sans">Monthly electric spending</span>
                                  <p className="font-mono font-bold text-gray-800 text-xs mt-0.5">${analysisData.bill.toLocaleString()}</p>
                                </div>
                                <div>
                                  <span className="text-[10px] text-gray-400 uppercase font-sans">Estimated investment size</span>
                                  <p className="font-mono font-bold text-gray-800 text-xs mt-0.5">${analysisData.investment.toLocaleString()}</p>
                                </div>
                                <div>
                                  <span className="text-[10px] text-gray-400 uppercase font-sans">Clean tech tax credit offset</span>
                                  <p className="font-mono font-bold text-emerald-600 text-xs mt-0.5">-${analysisData.taxDeduction.toLocaleString()}</p>
                                </div>
                                <div>
                                  <span className="text-[10px] text-gray-400 uppercase font-sans">Annual savings projection</span>
                                  <p className="font-mono font-bold text-emerald-600 text-xs mt-0.5">+${analysisData.savings.toLocaleString()}</p>
                                </div>
                              </div>

                              <div className="space-y-1.5 text-slate-700 text-[11px] leading-relaxed">
                                <li>&gt; Payback Period Calculation: <span className="font-bold text-slate-900">~{analysisData.payback} Years</span></li>
                                <li>&gt; Carbon offset capability: <span className="font-semibold text-emerald-600">{analysisData.co2Offset} CO2 Metric Tons Saved annually</span></li>
                                <li>&gt; Equipment allocation recommendation: Recommended system requires <span className="font-bold text-slate-900">{analysisData.recommendedModules} Bifacial Panels</span></li>
                                <li>&gt; Engineering Assignment: Qualified Red-seal personnel: <span className="text-emerald-700 font-bold">{analysisData.installerLevel}</span></li>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
