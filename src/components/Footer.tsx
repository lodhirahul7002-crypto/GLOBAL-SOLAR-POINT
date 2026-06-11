import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Youtube, Instagram, Sun } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'How We Work', id: 'process' },
    { name: 'Estimator', id: 'calculator' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const servicesLinks = [
    { name: 'Solar Energy', id: 'services' },
    { name: 'Energy Storage', id: 'services' },
    { name: 'Wind Energy', id: 'services' },
    { name: 'EV Charging', id: 'services' }
  ];

  return (
    <footer className="bg-[#0b101c] text-gray-400 font-sans pt-16 pb-8 border-t border-slate-900 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/5 pb-10">
          
          {/* Column 1: Brand & socials */}
          <div className="space-y-4">
            <div
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-2.5 cursor-pointer group"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 shadow-sm group-hover:rotate-45 transition-transform duration-500">
                <Sun className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-tight leading-none text-white">
                  GLOBAL<span className="text-emerald-500">POINT</span>
                </span>
                <span className="font-display text-[8px] font-medium tracking-[0.35em] text-gray-500 leading-none mt-1">
                  E N E R G Y
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-4 leading-relaxed">
              Providing smart, sustainable, and clean energy solutions for a cleaner and greener tomorrow across Canadian provincial grids.
            </p>

            {/* Social handles */}
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase text-white tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase text-white tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Reach Contacts details */}
          <div className="space-y-3.5">
            <h4 className="font-display text-xs font-bold uppercase text-white tracking-widest mb-4">
              Contact Info
            </h4>
            
            <div className="flex items-start space-x-3 text-xs leading-normal">
              <MapPin className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>1200-100 King St W, Toronto, ON MSX 1A1</span>
            </div>

            <div className="flex items-center space-x-3 text-xs">
              <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span className="font-semibold text-slate-300">(647) 123-4557</span>
            </div>

            <div className="flex items-center space-x-3 text-xs">
              <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span className="text-slate-300">info@globalpointenergy.ca</span>
            </div>
          </div>

        </div>

        {/* Lower footer sub panels */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs mt-8 text-slate-500">
          <p>© {new Date().getFullYear()} GlobalPoint Energy Inc. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-emerald-500 transition-colors cursor-pointer">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-emerald-500 transition-colors cursor-pointer">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
