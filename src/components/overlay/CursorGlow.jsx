import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Luxury Golden Cursor Glow Trail for Desktop Screens
 */
export const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setIsFinePointer(isFine);

    if (!isFine) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isFinePointer) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.15 }}
    >
      <div className="w-8 h-8 rounded-full bg-gold/15 blur-sm border border-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
    </motion.div>
  );
};
