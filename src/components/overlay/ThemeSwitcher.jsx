import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, Sparkles } from 'lucide-react';

export const THEME_OPTIONS = [
  {
    id: 'emerald',
    name: 'Royal Emerald',
    subtitle: 'Islamic Heritage & Gold',
    badge: 'Classic',
    primaryColor: '#061D16',
    cardColor: '#092B21',
    accentColor: '#D4AF37',
  },
  {
    id: 'navy',
    name: 'Midnight Sapphire',
    subtitle: 'Royal Navy & Gold',
    primaryColor: '#071326',
    cardColor: '#0A1C38',
    accentColor: '#D4AF37',
  },
  {
    id: 'maroon',
    name: 'Velvet Maroon',
    subtitle: 'Imperial Wine & Gold',
    primaryColor: '#1C060E',
    cardColor: '#2B0A16',
    accentColor: '#D4AF37',
  },
  {
    id: 'noir',
    name: 'Obsidian Noir',
    subtitle: 'Classic Black & Gold',
    primaryColor: '#08080A',
    cardColor: '#111116',
    accentColor: '#D4AF37',
  },
];

export const ThemeSwitcher = ({ currentTheme = 'emerald', onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeOption = THEME_OPTIONS.find((t) => t.id === currentTheme) || THEME_OPTIONS[0];

  return (
    <div className="fixed top-4 left-4 z-40 pointer-events-auto">
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-card/90 hover:bg-navy-card border border-gold/40 shadow-luxury-card backdrop-blur-md cursor-pointer transition-all duration-300 group"
        aria-label="Change Color Theme"
        title="Change Wedding Color Theme"
      >
        <span
          className="w-3.5 h-3.5 rounded-full border border-gold/70 shadow-sm transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: activeOption.primaryColor, boxShadow: `0 0 8px ${activeOption.accentColor}80` }}
        />
        <Palette className="w-3.5 h-3.5 text-gold group-hover:rotate-12 transition-transform duration-300" />
        <span className="font-cinzel text-[11px] uppercase tracking-wider text-ivory/90 group-hover:text-gold-light">
          {activeOption.name}
        </span>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop click dismiss */}
            <div
              className="fixed inset-0 z-30 bg-black/20"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-2 w-64 p-3 rounded-2xl bg-navy-card/95 border border-gold/40 shadow-2xl backdrop-blur-xl z-40 text-left"
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-gold/20">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                  <span className="font-cinzel text-[11px] uppercase tracking-wider text-gold font-bold">
                    Select Wedding Theme
                  </span>
                </div>
                <span className="text-[10px] font-cormorant italic text-ivory/60">
                  Live Preview
                </span>
              </div>

              <div className="space-y-1.5">
                {THEME_OPTIONS.map((theme) => {
                  const isSelected = theme.id === currentTheme;

                  return (
                    <button
                      key={theme.id}
                      onClick={() => {
                        onThemeChange(theme.id);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-2 rounded-xl transition-all duration-200 cursor-pointer text-left ${
                        isSelected
                          ? 'bg-gold/15 border border-gold/60 text-gold-light'
                          : 'hover:bg-white/5 border border-transparent text-ivory/80'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {/* Dual swatch preview */}
                        <div className="relative w-6 h-6 rounded-full overflow-hidden border border-gold/50 flex-shrink-0">
                          <div
                            className="absolute inset-0"
                            style={{ backgroundColor: theme.primaryColor }}
                          />
                          <div
                            className="absolute bottom-0 right-0 w-3 h-3 rounded-tl-full"
                            style={{ backgroundColor: theme.accentColor }}
                          />
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-cinzel text-xs font-semibold tracking-wide">
                              {theme.name}
                            </span>
                            {theme.badge && (
                              <span className="px-1.5 py-0.2 rounded-full text-[9px] font-cinzel text-gold bg-gold/20 border border-gold/30">
                                {theme.badge}
                              </span>
                            )}
                          </div>
                          <span className="block text-[10px] font-cormorant italic text-ivory/60">
                            {theme.subtitle}
                          </span>
                        </div>
                      </div>

                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
