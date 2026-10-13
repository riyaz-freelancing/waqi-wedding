import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../../data/invitation';

export const TitleOverlay = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-between py-16 px-4 sm:px-6 text-center select-none pointer-events-none relative z-10">
      {/* Top Framing Announcement */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 1.0 }}
        className="max-w-lg mx-auto pt-4"
      >
        <span className="font-cormorant text-sm sm:text-base text-gold-light/90 block mb-2 tracking-wide">
          Solicit your gracious presence on the auspicious occasion
          <span className="block font-cormorant text-xs sm:text-sm text-gold-light/75">of the</span>
        </span>

        {/* Ornate Black Pill Frame with White Text matching card photo */}
        <div className="inline-flex items-center gap-3 px-7 sm:px-9 py-2 rounded-full bg-black/95 border border-gold/60 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <span className="text-gold text-xs">❖</span>
          <h1 className="font-cinzel text-base sm:text-xl md:text-2xl tracking-widest2 uppercase text-white font-semibold">
            Marriage Ceremony
          </h1>
          <span className="text-gold text-xs">❖</span>
        </div>

        <span className="font-cormorant italic text-sm sm:text-base text-gold-light/90 block mt-2.5">
          of our son
        </span>
      </motion.div>

      {/* Center is kept spacious for the 3D Rotating Mandala & 3D Gold Names */}
      <div className="h-40 sm:h-56" />

      {/* Bottom Subtitle / Date Announcement matching card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="pb-6 max-w-md mx-auto"
      >
        <p className="font-cinzel text-xs sm:text-sm uppercase tracking-widest2 text-gold">
          In Sha Allah · On Friday, the 23rd of October 2026
        </p>
        <p className="font-cormorant italic text-xs sm:text-sm text-gold-light/80 mt-1">
          (12th Jamadi ul Awwal 1448 Hijri)
        </p>
      </motion.div>
    </section>
  );
};
