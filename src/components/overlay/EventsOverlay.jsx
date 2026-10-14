import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Download, ExternalLink, Clock } from 'lucide-react';
import { INVITATION_CONFIG, downloadIcsFile, getGoogleCalendarUrl } from '../../data/invitation';

export const EventsOverlay = () => {
  const { events } = INVITATION_CONFIG;

  return (
    <section className="w-full min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center py-10 px-4 sm:px-6 select-none pointer-events-none relative z-10">
      <div className="max-w-4xl w-full mx-auto space-y-6 pointer-events-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="font-cinzel text-xs tracking-widest3 uppercase text-gold">
            Sacred Auspicious Occasions
          </span>
          <h2 className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-ivory mt-1">
            Ceremonial Program
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2 opacity-70">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs">✦</span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {events.map((evt, idx) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="glass-emerald-card p-5 sm:p-7 rounded-2xl sm:rounded-3xl flex flex-col justify-between border border-gold/30 hover:border-gold/50 transition-all duration-300 shadow-luxury-card relative overflow-hidden group"
            >
              {/* Top Pill & Hijri Date */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-0.5 rounded-full text-[10px] sm:text-[11px] font-cinzel uppercase tracking-widest2 bg-navy-deep/80 text-gold border border-gold/40">
                    {evt.type}
                  </span>
                  <span className="font-cormorant italic text-xs sm:text-sm text-gold-light">
                    {evt.hijriDate}
                  </span>
                </div>

                <p className="font-cinzel text-xs tracking-widest2 text-gold/80 uppercase">
                  {evt.inShaAllah} · {evt.day}
                </p>
                <h3 className="font-cormorant text-xl sm:text-2xl font-semibold text-ivory mt-0.5">
                  {evt.dateFormatted}
                </h3>

                {/* Timing */}
                <div className="flex items-start gap-2 mt-3 p-2.5 rounded-xl bg-navy-card/60 border border-gold/20">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <p className="font-jost text-xs sm:text-sm text-ivory/90 font-medium">
                    {evt.timing}
                  </p>
                </div>

                {/* Venue */}
                <div className="flex items-start gap-2 mt-2.5 p-2.5 rounded-xl bg-navy-card/60 border border-gold/20">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-cinzel text-xs sm:text-sm text-gold-light font-semibold">
                      {evt.venueName}
                    </h4>
                    <p className="font-jost text-xs text-ivory/70 mt-0.5">
                      {evt.locationShort}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Add to Calendar & Directions */}
              <div className="pt-4 mt-4 border-t border-gold/20 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={getGoogleCalendarUrl(evt)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-navy-deep/90 hover:bg-navy text-[11px] font-cinzel uppercase tracking-wider text-gold-light border border-gold/30 hover:border-gold transition-colors text-center"
                  >
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    <span>Google Cal</span>
                  </a>

                  <button
                    onClick={() => downloadIcsFile(evt)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-navy-deep/90 hover:bg-navy text-[11px] font-cinzel uppercase tracking-wider text-gold-light border border-gold/30 hover:border-gold transition-colors text-center cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-gold" />
                    <span>Download .ics</span>
                  </button>
                </div>

                <a
                  href={evt.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-gold/15 hover:bg-gold/25 text-xs font-cinzel uppercase tracking-widest1 text-gold-light border border-gold/40 hover:border-gold transition-all duration-200"
                >
                  <MapPin className="w-4 h-4 text-gold" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gold/70" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
