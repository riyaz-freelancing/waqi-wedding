import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, Calendar, Clock, MapPin, Heart } from 'lucide-react';

export const NavigationDock = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Intro', shortLabel: 'Intro', icon: Compass, href: '#' },
    { id: 'invitation', label: 'Invitation', shortLabel: 'Invite', icon: Calendar, href: '#invitation' },
    { id: 'countdown', label: 'Countdown', shortLabel: 'Time', icon: Clock, href: '#countdown' },
    { id: 'events', label: 'Events', shortLabel: 'Events', icon: MapPin, href: '#events' },
    { id: 'duas', label: 'Duas', shortLabel: 'Duas', icon: Heart, href: '#duas' },
  ];

  // Auto-detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['duas', 'events', 'countdown', 'invitation', 'hero'];
      const scrollPos = window.scrollY + 220;

      for (const sectionId of sections) {
        if (sectionId === 'hero') {
          if (window.scrollY < 380) {
            setActiveSection('hero');
            break;
          }
        } else {
          const el = document.getElementById(sectionId);
          if (el && el.offsetTop <= scrollPos) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setActiveSection(targetId);
    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav 
      aria-label="Wedding sections navigation"
      className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-40 max-w-[94vw] sm:max-w-fit pointer-events-auto"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full bg-navy-card/95 border border-champagne/35 shadow-luxury-card backdrop-blur-xl"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-serif transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne cursor-pointer ${
                isActive
                  ? 'bg-champagne text-navy-deep font-semibold shadow-sm'
                  : 'text-champagne-muted hover:text-ivory hover:bg-navy-subtle/80'
              }`}
              title={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-navy-deep' : 'text-champagne'}`} />
              <span className="hidden md:inline-block text-xs sm:text-[13px] tracking-wide font-medium font-serif">
                {item.label}
              </span>
              <span className="inline-block md:hidden text-[11px] tracking-wide font-medium font-serif">
                {item.shortLabel}
              </span>
            </a>
          );
        })}
      </motion.div>
    </nav>
  );
};
