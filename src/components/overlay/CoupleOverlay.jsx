import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { INVITATION_CONFIG } from '../../data/invitation';

export const CoupleOverlay = () => {
  const { groom, bride } = INVITATION_CONFIG;

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-between py-16 px-4 sm:px-6 select-none pointer-events-none relative z-10">
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-4"
      >
        <span className="font-cinzel text-xs tracking-widest3 uppercase text-gold">
          The Blessed Union
        </span>
        <h2 className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-ivory mt-1">
          Groom &amp; Bride
        </h2>
      </motion.div>

      {/* Middle is kept open for the 3D Floating Arch Frames with W & S Monograms */}
      <div className="h-64 sm:h-80" />

      {/* Bottom Profile Details Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.9 }}
        className="max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pointer-events-auto pb-6"
      >
        {/* Groom Profile */}
        <div className="glass-emerald-card p-6 sm:p-7 rounded-2xl text-center relative overflow-hidden">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] tracking-widest2 uppercase font-cinzel text-gold bg-navy-deep/80 border border-gold/30 mb-2">
            Groom
          </span>
          <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-ivory">
            {groom.fullName}
          </h3>
          <p className="font-cinzel text-xs tracking-widest1 text-gold-light mt-1">
            {groom.degrees}
          </p>
        </div>

        {/* Bride Profile */}
        <div className="glass-emerald-card p-6 sm:p-7 rounded-2xl text-center relative overflow-hidden">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] tracking-widest2 uppercase font-cinzel text-gold bg-navy-deep/80 border border-gold/30 mb-2">
            Bride
          </span>
          <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-ivory">
            {bride.fullName}
          </h3>
          <p className="font-cinzel text-xs tracking-widest1 text-gold-light mt-1">
            {bride.degrees}
          </p>
          <p className="font-cormorant text-xs sm:text-sm text-ivory/80 mt-2 italic leading-relaxed">
            {bride.lineage}
          </p>
        </div>
      </motion.div>
    </section>
  );
};
