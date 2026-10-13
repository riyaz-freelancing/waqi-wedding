import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export const RoyalEnvelopeIntro = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    // Champagne Gold & Ivory Confetti Shower
    confetti({
      particleCount: 70,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#D8BB70', '#EADBB3', '#A98A45', '#F5F0E6', '#F8F4EB'],
    });

    setIsOpen(true);
    if (onOpen) onOpen();
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, filter: 'blur(8px)' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-deep overflow-y-auto"
        >
          {/* Subtle Ambient Vignette */}
          <div className="absolute inset-0 bg-midnight-pattern opacity-60 pointer-events-none" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-champagne/10 blur-[130px] pointer-events-none" />

          {/* Luxury Wedding Stationery Invitation Card */}
          <motion.div
            initial={{ y: 24, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full max-w-lg bg-navy-card/95 rounded-3xl border border-champagne/30 shadow-luxury-card p-6 xs:p-8 sm:p-11 text-center text-ivory overflow-hidden backdrop-blur-2xl my-auto"
          >
            {/* Top Hairline Champagne Accent */}
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-champagne to-transparent" />

            {/* Delicate Corner Details */}
            <div className="absolute top-3 left-3 w-5 h-5 sm:w-7 sm:h-7 border-t border-l border-champagne/40 rounded-tl-md" />
            <div className="absolute top-3 right-3 w-5 h-5 sm:w-7 sm:h-7 border-t border-r border-champagne/40 rounded-tr-md" />
            <div className="absolute bottom-3 left-3 w-5 h-5 sm:w-7 sm:h-7 border-b border-l border-champagne/40 rounded-bl-md" />
            <div className="absolute bottom-3 right-3 w-5 h-5 sm:w-7 sm:h-7 border-b border-r border-champagne/40 rounded-br-md" />

            {/* Header Badge & Bismillah */}
            <div className="mb-2">
              <Badge variant="champagne" className="text-[10px] tracking-widest2">
                Royal Wedding Invitation
              </Badge>
            </div>

            <p className="font-arabic text-xl xs:text-2xl sm:text-3xl text-champagne select-none mb-1 leading-relaxed">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <p className="text-[10px] xs:text-[11px] uppercase tracking-widest2 font-cinzel text-champagne-muted mb-4 sm:mb-5">
              You Are Cordially Invited
            </p>

            {/* Wax Seal Emblem Button */}
            <div className="my-3 sm:my-5 flex justify-center">
              <motion.button
                onClick={handleOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="group relative cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-4 focus-visible:ring-offset-navy rounded-full"
                aria-label="Open Wedding Invitation"
              >
                <div className="wax-seal-luxury w-24 h-24 xs:w-28 xs:h-28 rounded-full flex flex-col items-center justify-center p-2.5 relative transition-transform duration-500 group-hover:rotate-3">
                  <span className="text-[8px] xs:text-[9px] uppercase tracking-widest2 text-champagne-muted font-cinzel">
                    ROYAL UNION
                  </span>
                  <span className="font-cormorant text-2xl xs:text-3xl font-medium text-ivory tracking-wider my-0.5">
                    W &amp; S
                  </span>
                  <span className="text-[8px] xs:text-[9px] tracking-widest1 text-champagne-muted font-cinzel">
                    23 · 10 · 2026
                  </span>
                </div>
              </motion.button>
            </div>

            {/* Couple's Regal Names */}
            <div className="my-3 sm:my-4">
              <h1 className="font-cormorant text-2xl xs:text-3xl sm:text-4xl font-normal text-ivory tracking-wide leading-snug">
                Mohammed Waqiullah Khan
              </h1>
              <p className="font-serif italic text-2xl xs:text-3xl text-champagne my-0.5 select-none">
                With
              </p>
              <h2 className="font-cormorant text-2xl xs:text-3xl sm:text-4xl font-normal text-ivory tracking-wide leading-snug">
                Syeda Sara Fatima
              </h2>
            </div>

            <p className="text-[11px] xs:text-xs uppercase tracking-widest2 text-champagne-muted font-cinzel mt-1 mb-5">
              Hyderabad, India
            </p>

            {/* Action Button */}
            <Button
              onClick={handleOpen}
              size="lg"
              variant="default"
              className="w-full sm:w-auto gap-2.5 shadow-champagne-subtle text-xs"
            >
              <Sparkles className="w-4 h-4 text-navy-deep" />
              <span>Open Wedding Invitation</span>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
