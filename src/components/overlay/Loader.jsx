import React from 'react';
import { useProgress } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Royal Gold Crescent Suspense Loader with Live Percentage
 */
export const Loader = ({ isLoaded = false }) => {
  const { progress, active } = useProgress();
  const displayProgress = Math.min(100, Math.round(progress));

  return (
    <AnimatePresence>
      {(!isLoaded || active) && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#040406] text-[#FFFDF9] select-none"
        >
          {/* Subtle 24K Gold Radial Glow */}
          <div className="absolute inset-0 bg-radial-gradient from-gold/15 via-transparent to-transparent pointer-events-none" />

          {/* Golden Crescent Spinner */}
          <div className="relative w-28 h-28 flex items-center justify-center mb-6">
            {/* Spinning Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-gold/30 border-dashed"
            />

            {/* Glowing Islamic Crescent */}
            <svg
              viewBox="0 0 100 100"
              className="w-20 h-20 text-gold drop-shadow-[0_0_15px_rgba(243,208,83,0.6)] animate-pulse"
              fill="none"
            >
              <defs>
                <linearGradient id="loaderGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFDF9" />
                  <stop offset="50%" stopColor="#F3D053" />
                  <stop offset="100%" stopColor="#876822" />
                </linearGradient>
              </defs>
              <path
                d="M 60 20 A 30 30 0 1 0 60 80 A 24 24 0 1 1 60 20 Z"
                fill="url(#loaderGold)"
              />
              <polygon
                points="68,38 70,43 75,43 71,46 73,51 68,48 64,51 66,46 62,43 67,43"
                fill="#FFFDF9"
              />
            </svg>
          </div>

          {/* Royal Bismillah preview */}
          <p className="font-amiri text-lg text-gold/90 mb-1" dir="rtl">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>

          <h2 className="font-cinzel tracking-widest2 text-xs uppercase text-gold-light/80 mb-4">
            Marriage Ceremony
          </h2>

          {/* Progress Bar & Percentage */}
          <div className="w-48 h-1 bg-navy-card rounded-full overflow-hidden border border-gold/20 mb-2">
            <motion.div
              className="h-full bg-gradient-to-r from-gold via-gold-light to-gold"
              initial={{ width: 0 }}
              animate={{ width: `${displayProgress}%` }}
              transition={{ ease: 'easeOut', duration: 0.2 }}
            />
          </div>

          <span className="font-cinzel text-xs text-gold/80 tracking-widest1">
            {displayProgress}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
