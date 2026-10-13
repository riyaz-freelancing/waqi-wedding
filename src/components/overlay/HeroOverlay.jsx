import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { INVITATION_CONFIG } from '../../data/invitation';

export const HeroOverlay = ({ isGateOpen, onOpenGate }) => {
  const { bismillah, propheticDua } = INVITATION_CONFIG;

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-between py-10 px-4 sm:px-6 text-center select-none pointer-events-none relative z-10">
      {/* 1. Top Header: Bismillah */}
      <motion.div
        initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="max-w-xl mx-auto pt-4 sm:pt-6"
      >
        <span
          className="font-amiri text-2xl xs:text-3xl sm:text-4xl text-gold font-normal tracking-wide drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)] block mb-2"
          dir="rtl"
        >
          {bismillah.arabic}
        </span>
        <p className="font-cormorant italic text-xs sm:text-sm text-ivory/80 tracking-wide">
          {bismillah.english}
        </p>

        {/* Small Khatim Emblem */}
        <div className="flex items-center justify-center gap-2 mt-3 opacity-70">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-gold text-xs">✦</span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold" />
        </div>
      </motion.div>

      {/* 2. Moved to Top (Second Image Place): Sacred Marriage Blessing Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.4 }}
        className="max-w-xl w-full mx-auto my-4 pointer-events-auto"
      >
        <div className="glass-emerald-card p-6 sm:p-8 rounded-3xl border border-gold/40 shadow-luxury-card relative overflow-hidden text-center">
          {/* Subtle Top Light Accent */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent" />

          {/* Section Badge */}
          <span className="inline-block px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-cinzel uppercase tracking-widest2 text-gold-light bg-navy-deep/80 border border-gold/30 mb-4">
            Sacred Marriage Blessing
          </span>

          {/* Prophetic Dua Calligraphy in Amiri */}
          <div
            className="font-amiri text-2xl xs:text-3xl sm:text-4xl text-gold font-normal leading-[1.9] my-2 drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]"
            dir="rtl"
            lang="ar"
          >
            {propheticDua.arabic}
          </div>

          {/* Transliteration */}
          <p className="font-cormorant italic text-xs sm:text-sm text-gold-light/90 mt-2 tracking-wide">
            {propheticDua.transliteration}
          </p>

          {/* English Translation */}
          <p className="font-cormorant text-sm sm:text-base text-ivory font-medium mt-2 leading-relaxed">
            {propheticDua.translation}
          </p>

          {/* Source attribution */}
          <div className="mt-4 pt-3 border-t border-gold/20 flex items-center justify-center gap-2">
            <span className="text-gold text-xs">✦</span>
            <span className="font-cinzel text-[9px] uppercase tracking-widest2 text-gold-light/70">
              {propheticDua.source}
            </span>
            <span className="text-gold text-xs">✦</span>
          </div>

          {/* Gate Enter Button inside the card for seamless flow */}
          {!isGateOpen ? (
            <div className="mt-5 pt-3">
              <motion.button
                onClick={onOpenGate}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gold hover:bg-gold-light text-navy-deep font-cinzel text-xs font-bold uppercase tracking-widest2 shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2.5 mx-auto cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-navy-deep" />
                <span>Tap to Open Royal Gate</span>
              </motion.button>
            </div>
          ) : (
            <div className="mt-4">
              <span className="inline-block px-4 py-1 rounded-full bg-navy-card/80 border border-gold/30 text-xs font-cormorant italic text-gold-light">
                “{INVITATION_CONFIG.quranVerse.english}”
              </span>
            </div>
          )}
        </div>
      </motion.div>

      {/* 3. Bottom: Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 1 }}
        className="pb-4 flex flex-col items-center gap-1.5"
      >
        <span className="font-cinzel text-[10px] sm:text-[11px] tracking-widest3 text-gold/80 uppercase">
          {isGateOpen ? 'Scroll to Journey' : 'Tap Gate to Enter'}
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-gold/70" />
        </motion.div>
      </motion.div>
    </section>
  );
};
