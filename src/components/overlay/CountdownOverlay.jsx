import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { INVITATION_CONFIG } from '../../data/invitation';

export const CountdownOverlay = () => {
  const nikahDate = new Date(INVITATION_CONFIG.events[0].isoDateTime);
  const dinnerDate = new Date(INVITATION_CONFIG.events[1].isoDateTime);

  const [activeTarget, setActiveTarget] = useState('nikah'); // 'nikah' | 'dinner'
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      let target = activeTarget === 'nikah' ? nikahDate : dinnerDate;

      // If active target has passed, switch to dinner or complete
      if (now > nikahDate && activeTarget === 'nikah' && now < dinnerDate) {
        setActiveTarget('dinner');
        target = dinnerDate;
      }

      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [activeTarget]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 sm:px-6 select-none pointer-events-none relative z-10">
      <div className="max-w-2xl w-full mx-auto space-y-8 pointer-events-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-cinzel text-xs tracking-widest3 uppercase text-gold">
            Counting Down The Moments
          </span>
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-ivory mt-1">
            Friday, 23rd October 2026
          </h2>

          {/* Toggle buttons between Nikah & Dinner */}
          <div className="inline-flex p-1 rounded-full bg-navy-card/80 border border-gold/30 mt-4 backdrop-blur-md">
            <button
              onClick={() => setActiveTarget('nikah')}
              className={`px-4 py-1.5 rounded-full text-xs font-cinzel tracking-wider uppercase transition-all duration-300 ${
                activeTarget === 'nikah'
                  ? 'bg-gold text-navy-deep font-bold shadow-gold-subtle'
                  : 'text-gold-light hover:text-white'
              }`}
            >
              Nikah (1:30 PM)
            </button>
            <button
              onClick={() => setActiveTarget('dinner')}
              className={`px-4 py-1.5 rounded-full text-xs font-cinzel tracking-wider uppercase transition-all duration-300 ${
                activeTarget === 'dinner'
                  ? 'bg-gold text-navy-deep font-bold shadow-gold-subtle'
                  : 'text-gold-light hover:text-white'
              }`}
            >
              Dinner (9:00 PM)
            </button>
          </div>
        </motion.div>

        {/* 3D Flip Card Countdown Container */}
        {timeLeft.isCompleted ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-emerald-card p-8 rounded-3xl"
          >
            <span className="font-amiri text-2xl text-gold block mb-2" dir="rtl">
              الْحَمْدُ لِلَّهِ
            </span>
            <h3 className="font-cormorant text-2xl sm:text-3xl text-ivory font-semibold">
              Alhamdulillah, the celebration has begun!
            </h3>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-xl mx-auto"
          >
            {units.map((unit, idx) => (
              <div
                key={unit.label}
                className="relative flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl glass-emerald-card border border-gold/30 shadow-luxury-card group"
              >
                {/* Subtle Top Highlight */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />

                <span className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold text-ivory drop-shadow-sm tabular-nums">
                  {String(unit.value).padStart(2, '0')}
                </span>

                <span className="font-cinzel text-[9px] sm:text-[11px] uppercase tracking-widest2 text-gold mt-1">
                  {unit.label}
                </span>
              </div>
            ))}
          </motion.div>
        )}

        {/* Quranic Subtext */}
        <p className="font-cormorant italic text-xs sm:text-sm text-gold-light/80 max-w-md mx-auto">
          Counting down to In Sha Allah uniting two blessed souls under the divine grace of Allah.
        </p>
      </div>
    </section>
  );
};
