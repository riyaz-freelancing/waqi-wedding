import React from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../../data/invitation';

/**
 * Floating Navigation Dock with Gold Scroll Progress Bar & Scene Indicator Dots
 */
export const NavigationDock = ({
  scrollProgress = 0,
  activeSceneIndex = 0,
  onSelectScene,
}) => {
  const { scenes } = INVITATION_CONFIG;

  return (
    <>
      {/* Top Gold Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-navy-deep/60 pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-gold via-gold-light to-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]"
          style={{ width: `${Math.min(100, scrollProgress * 100)}%` }}
        />
      </div>

      {/* Floating Scene Dots (Right on Desktop, Bottom Center on Mobile) */}
      <nav
        aria-label="Scene navigation"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:right-5 md:top-1/2 md:-translate-y-1/2 z-40 flex md:flex-col items-center gap-2 p-1.5 sm:p-2 rounded-full bg-navy-card/90 border border-gold/30 backdrop-blur-md shadow-luxury-card"
      >
        {scenes.map((scene, idx) => {
          const isActive = activeSceneIndex === idx;

          return (
            <button
              key={scene.id}
              onClick={() => onSelectScene(idx)}
              className="group relative flex items-center justify-center p-1 cursor-pointer focus:outline-none"
              aria-label={`Jump to ${scene.label}`}
              title={scene.label}
            >
              {/* Tooltip on Desktop hover */}
              <span className="hidden md:block absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-navy-deep/95 border border-gold/30 text-[10px] font-cinzel uppercase tracking-wider text-gold-light opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
                {scene.shortLabel}
              </span>

              {/* Dot */}
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-5 sm:w-6 h-2 bg-gradient-to-r from-gold to-gold-light shadow-gold-subtle rounded-full'
                    : 'w-2 h-2 bg-gold/40 hover:bg-gold/80'
                }`}
              />
            </button>
          );
        })}
      </nav>
    </>
  );
};
