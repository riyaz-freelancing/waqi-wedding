import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon } from 'lucide-react';
import { FloralDivider } from './Ornaments';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

// Wedding Date in Hyderabad Local Time (IST, UTC +5:30)
// Friday, 23 October 2026 at 1:30 PM IST (13:30)
const WEDDING_TIMESTAMP = new Date('2026-10-23T13:30:00+05:30').getTime();

export const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = WEDDING_TIMESTAMP - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Mohammed+Waqiullah+Khan+%26+Syeda+Sara+Fatima&dates=20261023T080000Z/20261023T183000Z&details=Marriage+Ceremony+and+Reception+in+Hyderabad.+Nikah:+Masjid-e-Qutub+Shahi+(1:30+PM),+Dinner:+Perfect+Palace+(9:00+PM)&location=Hyderabad,+Telangana,+India`;

  return (
    <section id="countdown" className="relative py-20 sm:py-32 px-4 sm:px-6 bg-navy text-ivory overflow-hidden">
      {/* Background Subtle Pattern & Ambient Glow */}
      <div className="absolute inset-0 bg-midnight-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne/6 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-20">
        {/* Date Plaque Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12"
        >
          <Badge variant="champagne" className="mb-3">
            Save The Sacred Date
          </Badge>

          <div className="my-2 sm:my-3">
            <h2 className="font-serif text-[clamp(2.1rem,5vw,3.8rem)] font-normal text-ivory tracking-wide leading-tight">
              Friday, the 23rd of October 2026
            </h2>
            <div className="inline-block mt-2 sm:mt-3 px-4 sm:px-5 py-1.5 rounded-full bg-navy-subtle/80 border border-champagne/30 text-champagne-light font-serif italic text-base sm:text-xl">
              12th Jamadi ul Awwal 1448 Hijri
            </div>
          </div>

          <FloralDivider className="w-48 sm:w-56 mx-auto text-champagne/70" />
          <p className="text-xs sm:text-sm uppercase tracking-widest2 text-champagne-muted font-cinzel mt-2">
            In Sha Allah · Hyderabad, India
          </p>
        </motion.div>

        {/* Chronometer Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 my-8 max-w-3xl mx-auto">
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HOURS', value: timeLeft.hours },
            { label: 'MINUTES', value: timeLeft.minutes },
            { label: 'SECONDS', value: timeLeft.seconds },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group p-4 sm:p-7 rounded-2xl sm:rounded-3xl editorial-card text-center overflow-hidden hover:border-champagne/50 transition-all duration-300"
            >
              {/* Top Hairline Highlight */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-champagne/50 to-transparent" />

              <div className="relative">
                <span className="font-serif text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-normal text-ivory group-hover:text-champagne-light transition-colors duration-200 tracking-tight tabular-nums block min-h-[50px] xs:min-h-[60px] sm:min-h-[75px] flex items-center justify-center">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-xs sm:text-sm uppercase tracking-widest2 font-serif text-champagne font-medium mt-1 sm:mt-2 block">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timezone Note */}
        <p className="text-center text-xs sm:text-sm text-champagne-muted font-serif italic tracking-wider mt-4">
          Synchronized with Hyderabad Local Time (IST, UTC+5:30)
        </p>

        {/* Calendar Add Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center mt-8"
        >
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" className="gap-2.5">
              <CalendarIcon className="w-4 h-4 text-navy-deep" />
              <span>Add to Google Calendar</span>
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
