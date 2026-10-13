import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../../data/invitation';

export const DuaOverlay = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 sm:px-6 select-none pointer-events-none relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2 }}
        className="max-w-2xl w-full mx-auto text-center pointer-events-auto"
      >
        <div className="glass-emerald-card p-8 sm:p-12 rounded-3xl border border-gold/40 shadow-luxury-card relative overflow-hidden">
          {/* Subtle Top Light Accent */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent" />

          {/* Section Badge */}
          <span className="inline-block px-4 py-1 rounded-full text-[10px] sm:text-[11px] font-cinzel uppercase tracking-widest2 text-gold-light bg-navy-deep/80 border border-gold/30 mb-6">
            Divine Covenant of Love
          </span>

          {/* Quranic Verse Calligraphy in Amiri */}
          <div
            className="font-amiri text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-gold font-normal leading-[1.9] my-4 drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]"
            dir="rtl"
            lang="ar"
          >
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </div>

          {/* Short Reflection */}
          <p className="font-cormorant italic text-sm sm:text-base text-gold-light/90 mt-4 tracking-wide">
            Wa min Aayatihee an khalaqa lakum min anfusikum azwaajan litaskunooo ilaihaa wa ja'ala bainakum mawaddatanw wa rahmah
          </p>

          {/* English Translation */}
          <p className="font-cormorant text-base sm:text-xl text-ivory font-medium mt-3 leading-relaxed">
            “And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them; and He placed between you love and compassion.”
          </p>

          {/* Source attribution */}
          <div className="mt-6 pt-4 border-t border-gold/20 flex items-center justify-center gap-2">
            <span className="text-gold text-xs">✦</span>
            <span className="font-cinzel text-[10px] uppercase tracking-widest2 text-gold-light/70">
              The Holy Qur'an · Surah Ar-Rum 30:21
            </span>
            <span className="text-gold text-xs">✦</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
