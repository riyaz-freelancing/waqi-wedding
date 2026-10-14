import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../../data/invitation';
import { CornerOrnament } from '../Ornaments';

export const TitleOverlay = () => {
  const { groom, bride, honors } = INVITATION_CONFIG;
  const occasion = honors?.host?.occasion || 'Marriage Ceremony';

  return (
    <section className="w-full min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center py-10 px-4 sm:px-6 text-center select-none relative z-10 gap-4 sm:gap-6">
      {/* 1. Top Framing Announcement */}
      <motion.div
        initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto"
      >
        <span className="font-cormorant text-xs sm:text-sm md:text-base text-gold-light/95 block mb-2 tracking-widest uppercase">
          Solicit your gracious presence on the auspicious occasion of the
        </span>

        {/* Ornate Royal Frame with 24K Gold border */}
        <div className="inline-flex items-center gap-3 px-6 sm:px-8 py-2 rounded-full bg-navy-card/95 border border-gold/60 shadow-[0_4px_25px_rgba(243,208,83,0.2)] backdrop-blur-md my-1.5">
          <span className="text-gold text-xs">❖</span>
          <h1 className="font-cinzel text-sm sm:text-lg md:text-xl tracking-widest2 uppercase text-white font-bold">
            {occasion}
          </h1>
          <span className="text-gold text-xs">❖</span>
        </div>

        <span className="font-cormorant italic text-xs sm:text-sm text-gold-light/90 block mt-2">
          of our son
        </span>
      </motion.div>

      {/* 2. Couple Names (Royal Sapphire Plaque with 24K Gold Frame) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="max-w-xl w-full mx-auto my-3 sm:my-5 pointer-events-auto relative"
      >
        {/* Luminous Sapphire Ambient Aura */}
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-gold/25 to-blue-600/20 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

        <div className="glass-navy-card py-6 px-6 sm:px-9 rounded-2xl sm:rounded-3xl border border-gold/50 shadow-luxury-card text-center relative overflow-hidden">
          {/* Corner Filigrees */}
          <CornerOrnament position="top-left" className="absolute top-2 left-2 w-7 h-7 text-gold/75" />
          <CornerOrnament position="top-right" className="absolute top-2 right-2 w-7 h-7 text-gold/75" />
          <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 w-7 h-7 text-gold/75" />
          <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 w-7 h-7 text-gold/75" />

          {/* Top Gold Shimmer Line */}
          <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_12px_#F3D053]" />

          {/* Groom */}
          <div>
            <h2 className="font-script text-4xl xs:text-5xl sm:text-6xl md:text-[3.5rem] font-normal text-ivory tracking-wide leading-tight drop-shadow-[0_4px_16px_rgba(255,255,255,0.2)]">
              {groom.fullName}
            </h2>
            <p className="font-cinzel text-[11px] sm:text-xs text-gold tracking-widest1 mt-1 font-medium">
              {groom.degrees}
            </p>
          </div>

          {/* Romantic Divider */}
          <div className="flex items-center justify-center gap-3 my-2.5 opacity-90">
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent via-gold to-gold" />
            <span className="font-script text-2xl sm:text-3xl text-gold-light lowercase">with</span>
            <div className="h-[1px] w-14 bg-gradient-to-l from-transparent via-gold to-gold" />
          </div>

          {/* Bride */}
          <div>
            <h2 className="font-script text-4xl xs:text-5xl sm:text-6xl md:text-[3.5rem] font-normal text-ivory tracking-wide leading-tight drop-shadow-[0_4px_16px_rgba(255,255,255,0.2)]">
              {bride.fullName}
            </h2>
            <p className="font-cinzel text-[11px] sm:text-xs text-gold tracking-widest1 mt-1 font-medium">
              {bride.degrees}
            </p>
            <p className="font-cormorant italic text-xs sm:text-sm text-ivory/85 mt-2 max-w-md mx-auto leading-relaxed">
              {bride.lineage}
            </p>
          </div>
        </div>
      </motion.div>

      {/* 3. Date & Location Announcement */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="max-w-md mx-auto"
      >
        <p className="font-cinzel text-xs sm:text-sm uppercase tracking-widest2 text-gold font-bold">
          In Sha Allah · Hyderabad, India
        </p>
        <p className="font-cormorant italic text-xs sm:text-sm text-gold-light/90 mt-1">
          Friday, the 23rd of October 2026 · (12th Jamadi ul Awwal 1448 Hijri)
        </p>
      </motion.div>
    </section>
  );
};
