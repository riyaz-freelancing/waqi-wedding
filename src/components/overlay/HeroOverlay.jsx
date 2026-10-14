import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../../data/invitation';
import { CornerOrnament } from '../Ornaments';

export const HeroOverlay = ({ isGateOpen, onOpenGate }) => {
  const { bismillah, propheticDua } = INVITATION_CONFIG;

  return (
    <section className="w-full min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center py-10 px-4 sm:px-6 text-center select-none pointer-events-none relative z-10 gap-5 sm:gap-6">
      {/* 1. Top Header: Bismillah */}
      <motion.div
        initial={{ opacity: 0, y: -15, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.0, delay: 0.2 }}
        className="max-w-xl mx-auto pt-2"
      >
        <span
          className="font-amiri text-3xl xs:text-4xl sm:text-5xl gold-foil-calligraphy font-normal tracking-wide drop-shadow-[0_4px_18px_rgba(243,208,83,0.5)] block mb-1.5"
          dir="rtl"
        >
          {bismillah.arabic}
        </span>
        <p className="font-cormorant italic text-xs sm:text-sm text-gold-light/90 tracking-widest uppercase">
          {bismillah.english}
        </p>

        {/* Ornate Khatim Divider */}
        <div className="flex items-center justify-center gap-3 mt-3 opacity-80">
          <div className="h-[1px] w-14 bg-gradient-to-r from-transparent via-gold to-gold" />
          <span className="text-gold text-xs">❖</span>
          <div className="h-[1px] w-14 bg-gradient-to-l from-transparent via-gold to-gold" />
        </div>
      </motion.div>

      {/* 2. Sacred Marriage Blessing Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35 }}
        className="max-w-xl w-full mx-auto pointer-events-auto relative"
      >
        {/* Luminous Sapphire Ambient Aura behind the card */}
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-gold/25 to-blue-600/20 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

        <div className="glass-navy-card p-6 sm:p-9 rounded-2xl sm:rounded-3xl border border-gold/50 shadow-luxury-card relative overflow-hidden text-center">
          {/* Corner Filigrees */}
          <CornerOrnament position="top-left" className="absolute top-2 left-2 w-7 h-7 text-gold/75" />
          <CornerOrnament position="top-right" className="absolute top-2 right-2 w-7 h-7 text-gold/75" />
          <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 w-7 h-7 text-gold/75" />
          <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 w-7 h-7 text-gold/75" />

          {/* Gilded Top Light Accent Line */}
          <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_12px_#F3D053]" />

          {/* Section Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-[10px] sm:text-[11px] font-cinzel uppercase tracking-widest2 text-gold-light bg-navy-deep/90 border border-gold/40 shadow-sm mb-3">
            <span className="text-gold text-[9px]">✦</span>
            Sacred Marriage Blessing
            <span className="text-gold text-[9px]">✦</span>
          </span>

          {/* Prophetic Dua Calligraphy in Molten Gold */}
          <div
            className="font-amiri text-2xl xs:text-3xl sm:text-4xl gold-foil-calligraphy font-normal leading-[1.9] my-2 drop-shadow-[0_4px_22px_rgba(243,208,83,0.5)]"
            dir="rtl"
            lang="ar"
          >
            {propheticDua.arabic}
          </div>

          {/* Transliteration */}
          <p className="font-cormorant italic text-xs sm:text-sm text-gold-light/95 mt-2 tracking-wide font-normal">
            {propheticDua.transliteration}
          </p>

          {/* English Translation */}
          <p className="font-cormorant text-xs sm:text-sm md:text-base text-ivory font-medium mt-2 leading-relaxed">
            “{propheticDua.translation.replace(/[“”"]/g, '')}”
          </p>

          {/* Source attribution */}
          <div className="mt-4 pt-3 border-t border-gold/25 flex items-center justify-center gap-2.5">
            <span className="text-gold text-xs">✦</span>
            <span className="font-cinzel text-[10px] uppercase tracking-widest2 text-gold-light/80 font-medium">
              {propheticDua.source}
            </span>
            <span className="text-gold text-xs">✦</span>
          </div>

          {isGateOpen && (
            <div className="mt-3.5">
              <span className="inline-block px-4 py-1 rounded-full bg-navy-card/90 border border-gold/40 text-xs font-cormorant italic text-gold-light shadow-sm">
                “{INVITATION_CONFIG.quranVerse.english}”
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};
