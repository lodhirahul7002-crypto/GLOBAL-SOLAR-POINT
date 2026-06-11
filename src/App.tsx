/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import InteractiveCalculator from './components/InteractiveCalculator';
import ProjectShowcase from './components/ProjectShowcase';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PartnersSection from './components/PartnersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledMessage, setPrefilledMessage] = useState('');

  // Handle active section highlighting on window scrolls
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'process', 'calculator', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 180; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleQuoteTrigger = (details: { service: string; message: string }) => {
    setPrefilledService(details.service);
    setPrefilledMessage(details.message);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-white text-gray-850 selection:bg-emerald-500 selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Sleek, Sticky Top Navigation */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Sections flow */}
      <main>
        
        {/* Hero Landing */}
        <Hero onScrollTo={handleNavigate} />

        {/* Corporate Identity About Us */}
        <AboutSection />

        {/* Services Showcase Carousel */}
        <ServicesSection onScrollToCalculator={() => handleNavigate('calculator')} />

        {/* How We Work steps connection */}
        <ProcessSection />

        {/* High performance ROI Modeler and Tree Grower */}
        <InteractiveCalculator onQuoteTrigger={handleQuoteTrigger} />

        {/* Dynamic completed installations catalog */}
        <ProjectShowcase />

        {/* Numbers highlights banner */}
        <StatsSection />

        {/* Client reviews ratings */}
        <TestimonialsSection />

        {/* Brand certified partners logos */}
        <PartnersSection />

        {/* Proposals custom CRM contacts form */}
        <ContactSection
          prefilledService={prefilledService}
          prefilledMessage={prefilledMessage}
        />

      </main>

      {/* Clean footer links directory */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}

