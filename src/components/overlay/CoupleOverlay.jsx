import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../../data/invitation';
import { CornerOrnament } from '../Ornaments';

export const CoupleOverlay = () => {
  const { groom, bride } = INVITATION_CONFIG;

  return (
    <section className="w-full min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center py-10 px-4 sm:px-6 select-none relative z-10 gap-5 sm:gap-6">
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <span className="font-cinzel text-xs tracking-widest3 uppercase text-gold">
          The Blessed Union
        </span>
        <h2 className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-ivory mt-1">
          Groom &amp; Bride
        </h2>
        <div className="flex items-center justify-center gap-3 mt-2.5 opacity-80">
          <div className="h-[1px] w-14 bg-gradient-to-r from-transparent via-gold to-gold" />
          <span className="text-gold text-xs">❖</span>
          <div className="h-[1px] w-14 bg-gradient-to-l from-transparent via-gold to-gold" />
        </div>
      </motion.div>

      {/* Profile Details Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.9 }}
        className="max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 pointer-events-auto"
      >
        {/* Groom Profile */}
        <div className="relative">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/15 via-gold/20 to-blue-600/15 rounded-2xl blur-xl opacity-60 pointer-events-none" />
          <div className="glass-navy-card p-6 sm:p-8 rounded-2xl text-center relative overflow-hidden">
            <CornerOrnament position="top-left" className="absolute top-2 left-2 w-6 h-6 text-gold/70" />
            <CornerOrnament position="top-right" className="absolute top-2 right-2 w-6 h-6 text-gold/70" />
            <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 w-6 h-6 text-gold/70" />
            <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 w-6 h-6 text-gold/70" />

            <div className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_10px_#F3D053]" />

            <span className="inline-block px-3 py-1 rounded-full text-[10px] tracking-widest2 uppercase font-cinzel text-gold-light bg-navy-deep/90 border border-gold/40 mb-3 shadow-sm">
              Groom
            </span>
            <h3 className="font-script text-4xl sm:text-5xl font-normal text-ivory tracking-wide drop-shadow-[0_4px_16px_rgba(255,255,255,0.2)]">
              {groom.fullName}
            </h3>
            <p className="font-cinzel text-xs tracking-widest1 text-gold mt-1 font-medium">
              {groom.degrees}
            </p>
          </div>
        </div>

        {/* Bride Profile */}
        <div className="relative">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/15 via-gold/20 to-blue-600/15 rounded-2xl blur-xl opacity-60 pointer-events-none" />
          <div className="glass-navy-card p-6 sm:p-8 rounded-2xl text-center relative overflow-hidden">
            <CornerOrnament position="top-left" className="absolute top-2 left-2 w-6 h-6 text-gold/70" />
            <CornerOrnament position="top-right" className="absolute top-2 right-2 w-6 h-6 text-gold/70" />
            <CornerOrnament position="bottom-left" className="absolute bottom-2 left-2 w-6 h-6 text-gold/70" />
            <CornerOrnament position="bottom-right" className="absolute bottom-2 right-2 w-6 h-6 text-gold/70" />

            <div className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_10px_#F3D053]" />

            <span className="inline-block px-3 py-1 rounded-full text-[10px] tracking-widest2 uppercase font-cinzel text-gold-light bg-navy-deep/90 border border-gold/40 mb-3 shadow-sm">
              Bride
            </span>
            <h3 className="font-script text-4xl sm:text-5xl font-normal text-ivory tracking-wide drop-shadow-[0_4px_16px_rgba(255,255,255,0.2)]">
              {bride.fullName}
            </h3>
            <p className="font-cinzel text-xs tracking-widest1 text-gold mt-1 font-medium">
              {bride.degrees}
            </p>
            <p className="font-cormorant text-xs sm:text-sm text-ivory/85 mt-2.5 italic leading-relaxed">
              {bride.lineage}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
