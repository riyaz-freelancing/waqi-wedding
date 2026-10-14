import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../../data/invitation';

export const FamilyOverlay = () => {
  const { blessings, guardianship, host } = INVITATION_CONFIG.honors;

  return (
    <section className="w-full flex flex-col items-center justify-center py-8 sm:py-12 px-4 sm:px-6 select-none pointer-events-none relative z-10">
      <div className="max-w-2xl w-full mx-auto space-y-4 sm:space-y-5 pointer-events-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 sm:mb-5"
        >
          <span className="font-cinzel text-xs tracking-widest3 uppercase text-gold">
            Elders &amp; Lineage
          </span>
          <h2 className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-ivory mt-1">
            With the Blessings of Our Respected Parents
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2 opacity-70">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs">✦</span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* 1. Blessings Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass-emerald-card p-5 sm:p-7 rounded-2xl sm:rounded-3xl text-center relative overflow-hidden"
        >
          <p className="font-cinzel text-xs tracking-widest2 text-gold-light uppercase mb-1.5">
            {blessings.title}
          </p>
          <h3 className="font-cormorant text-xl sm:text-2xl md:text-3xl font-semibold text-ivory">
            {blessings.names}
          </h3>
          <p className="font-cormorant italic text-sm sm:text-base text-gold mt-1">
            {blessings.distinction}
          </p>
        </motion.div>

        {/* 2. Guardianship Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="glass-navy-card p-4 sm:p-5 rounded-2xl text-center"
        >
          <p className="font-cinzel text-[11px] tracking-widest2 text-gold-light uppercase mb-1">
            {guardianship.title}
          </p>
          <h4 className="font-cinzel text-base sm:text-lg font-medium tracking-wide text-ivory">
            {guardianship.name}
          </h4>
        </motion.div>

        {/* 3. Host Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-emerald-card p-5 sm:p-7 rounded-2xl sm:rounded-3xl text-center"
        >
          <p className="font-cormorant italic text-sm text-gold-light mb-1">
            {host.salutation}
          </p>
          <h3 className="font-cormorant text-2xl sm:text-3xl md:text-4xl font-semibold text-ivory">
            {host.name}
          </h3>
          <p className="font-cormorant italic text-xs sm:text-sm text-gold mt-1">
            {host.title}
          </p>
          <p className="font-cinzel text-xs tracking-widest1 uppercase text-ivory/80 mt-3 pt-2.5 border-t border-gold/20">
            {host.invitationPhrase}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
