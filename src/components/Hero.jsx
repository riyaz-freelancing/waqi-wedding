import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { BismillahCalligraphy, FloralDivider, CornerOrnament, RoyalCrest } from './Ornaments';

export const Hero = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 600], [0, 80]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0.4]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-24 sm:py-28 overflow-hidden bg-midnight-pattern">
      {/* Subtle Ambient Vignette Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne/8 rounded-full blur-[150px] pointer-events-none" />

      {/* Architectural Delicate Gold Border Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-3 xs:inset-4 sm:inset-7 md:inset-10 pointer-events-none z-10 border border-champagne/25 rounded-[2rem] sm:rounded-[2.5rem] shadow-luxury-card"
      >
        {/* Fine Inner Hairline Border */}
        <div className="absolute inset-2 sm:inset-3 border border-champagne/15 rounded-[1.6rem] sm:rounded-[2rem]" />

        {/* 4 Corner Traditional Filigrees */}
        <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4">
          <CornerOrnament position="top-left" className="w-7 h-7 sm:w-10 sm:h-10 text-champagne/70" />
        </div>
        <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4">
          <CornerOrnament position="top-right" className="w-7 h-7 sm:w-10 sm:h-10 text-champagne/70" />
        </div>
        <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4">
          <CornerOrnament position="bottom-left" className="w-7 h-7 sm:w-10 sm:h-10 text-champagne/70" />
        </div>
        <div className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4">
          <CornerOrnament position="bottom-right" className="w-7 h-7 sm:w-10 sm:h-10 text-champagne/70" />
        </div>
      </motion.div>

      {/* Parallax Main Content Container */}
      <motion.div
        style={{ y: yParallax, opacity: opacityParallax }}
        className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center justify-center my-auto px-4 sm:px-6"
      >
        {/* Royal Crest Monogram */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
          className="mb-3"
        >
          <RoyalCrest className="w-20 h-20 sm:w-24 sm:h-24" />
        </motion.div>

        {/* 1. Bismillah Arabic Typography */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
          className="mb-2 sm:mb-3"
        >
          <BismillahCalligraphy />
        </motion.div>

        {/* Subtle Symmetrical Floral Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-xs"
        >
          <FloralDivider className="w-40 sm:w-56 my-2 text-champagne/70" />
        </motion.div>

        {/* 2. Blessing Intro Line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-xs sm:text-sm uppercase tracking-widest2 text-champagne-muted font-cinzel font-medium mt-1 mb-2"
        >
          With the blessings of our families
        </motion.p>

        {/* 3. The Couple's Regal Names in Cormorant Garamond */}
        <div className="my-2 sm:my-4 flex flex-col items-center">
          {/* Groom's Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-cormorant font-normal text-ivory tracking-wide leading-tight text-[clamp(2.4rem,6.5vw,5.2rem)] drop-shadow-sm"
          >
            Mohammed Waqiullah Khan
          </motion.h1>

          {/* Elegant Ampersand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="my-1 sm:my-2"
          >
            <span className="font-cormorant italic text-3xl xs:text-4xl sm:text-5xl text-champagne select-none inline-block">
              &amp;
            </span>
          </motion.div>

          {/* Bride's Name */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-cormorant font-normal text-ivory tracking-wide leading-tight text-[clamp(2.4rem,6.5vw,5.2rem)] drop-shadow-sm"
          >
            Syeda Sara Fatima
          </motion.h2>
        </div>

        {/* 4. Wedding Date and Location Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mt-3 sm:mt-5 text-sm sm:text-base font-serif"
        >
          <div className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-navy-card/80 border border-champagne/30 text-champagne-light shadow-sm backdrop-blur-md">
            <Calendar className="w-3.5 h-3.5 text-champagne" />
            <span className="font-serif tracking-wide text-sm sm:text-base">Friday, the 23rd of October 2026</span>
          </div>

          <div className="h-3 w-[1px] bg-champagne/30 hidden sm:block" />

          <div className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-navy-card/80 border border-champagne/30 text-champagne-light shadow-sm backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-champagne" />
            <span className="font-serif tracking-wide text-sm sm:text-base">Hyderabad, India</span>
          </div>
        </motion.div>
      </motion.div>

      {/* 5. Minimal Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-widest2 font-cinzel text-champagne-muted/80 mb-2 font-medium">
          Scroll To Celebrate
        </span>
        <div className="w-4 h-7 rounded-full border border-champagne/40 flex items-start justify-center p-1">
          <motion.div
            animate={{ height: ['4px', '10px', '4px'], y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 bg-champagne rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
