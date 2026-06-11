import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'How We Work', id: 'process' },
    { name: 'Estimator', id: 'calculator' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header
      id="app-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={() => handleLinkClick('home')}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            {/* Energy Spark & Circle Logo */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 shadow-sm group-hover:rotate-45 transition-transform duration-500">
              <Sun className="w-5.5 h-5.5 text-white animate-pulse" />
              <div className="absolute right-0.5 top-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight leading-none text-[#0f172a] select-none">
                GLOBAL<span className="text-[#10b981]">POINT</span>
              </span>
              <span className="font-display text-[9px] font-medium tracking-[0.35em] text-gray-500 leading-none mt-1">
                E N E R G Y
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`font-sans text-sm font-medium transition-all duration-200 relative py-1 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-emerald-600'
                    : scrolled
                    ? 'text-gray-600 hover:text-[#0f172a]'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleLinkClick('calculator')}
              className="group flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-sm font-semibold py-2 px-4.5 rounded-full shadow-sm hover:shadow transition-all duration-150 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-800 hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white/98 backdrop-blur-md border-b border-gray-100 shadow-lg overflow-hidden absolute top-full left-0 w-full"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`block w-full text-left font-sans text-base font-medium p-2.5 rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 px-2">
                <button
                  onClick={() => handleLinkClick('calculator')}
                  className="w-full justify-center flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-semibold py-3 px-5 rounded-xl shadow transition-all duration-150 cursor-pointer"
                >
                  <span>Get Solar & Wind Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
