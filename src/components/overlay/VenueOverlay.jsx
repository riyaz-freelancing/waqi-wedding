import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ExternalLink, X, Navigation } from 'lucide-react';
import { INVITATION_CONFIG } from '../../data/invitation';

export const VenueOverlay = () => {
  const [activeModalMap, setActiveModalMap] = useState(null); // 'dinner' | 'nikah' | null

  const nikahVenue = INVITATION_CONFIG.events[0];
  const dinnerVenue = INVITATION_CONFIG.events[1];

  return (
    <section className="w-full flex flex-col items-center justify-center py-8 sm:py-12 px-4 sm:px-6 select-none pointer-events-none relative z-10">
      <div className="max-w-4xl w-full mx-auto space-y-6 pointer-events-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="font-cinzel text-xs tracking-widest3 uppercase text-gold">
            Locations &amp; Directions
          </span>
          <h2 className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-ivory mt-1">
            The Royal Venues
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2 opacity-70">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs">✦</span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* 1. Dinner Venue (Perfect Palace) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="glass-emerald-card p-5 sm:p-7 rounded-2xl sm:rounded-3xl flex flex-col justify-between border border-gold/40 shadow-luxury-card relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="px-3 py-0.5 rounded-full text-[10px] sm:text-[11px] font-cinzel uppercase tracking-widest2 bg-navy-deep/80 text-gold border border-gold/40">
                  Dinner Venue
                </span>
                <span className="font-cinzel text-xs text-gold-light">
                  Fri, 23 Oct 2026 · 9:00 PM
                </span>
              </div>

              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-ivory tracking-wide">
                {dinnerVenue.venueName}
              </h3>
              <p className="font-jost text-xs sm:text-sm text-gold-light mt-0.5 font-medium">
                {dinnerVenue.locationShort}
              </p>
              <p className="font-jost text-xs text-ivory/70 mt-1.5 leading-relaxed">
                {dinnerVenue.fullAddress}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-gold/20 flex gap-2">
              <button
                onClick={() => setActiveModalMap('dinner')}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-navy-deep/90 hover:bg-navy text-xs font-cinzel uppercase tracking-wider text-gold-light border border-gold/30 hover:border-gold transition-colors cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>View Map</span>
              </button>

              <a
                href={dinnerVenue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gold/20 hover:bg-gold/30 text-xs font-cinzel uppercase tracking-wider text-ivory border border-gold/40 hover:border-gold transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-gold" />
                <span>Directions</span>
                <ExternalLink className="w-3 h-3 text-gold/70" />
              </a>
            </div>
          </motion.div>

          {/* 2. Nikah Venue (Masjid-e-Qutub Shahi) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-navy-card p-5 sm:p-7 rounded-2xl sm:rounded-3xl flex flex-col justify-between border border-gold/30 shadow-luxury-card relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="px-3 py-0.5 rounded-full text-[10px] sm:text-[11px] font-cinzel uppercase tracking-widest2 bg-navy-deep/80 text-gold border border-gold/40">
                  Nikah Venue
                </span>
                <span className="font-cinzel text-xs text-gold-light">
                  Fri, 23 Oct 2026 · 1:30 PM
                </span>
              </div>

              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-ivory tracking-wide">
                {nikahVenue.venueName}
              </h3>
              <p className="font-jost text-xs sm:text-sm text-gold-light mt-0.5 font-medium">
                {nikahVenue.locationShort}
              </p>
              <p className="font-jost text-xs text-ivory/70 mt-1.5 leading-relaxed">
                {nikahVenue.fullAddress}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-gold/20 flex gap-2">
              <button
                onClick={() => setActiveModalMap('nikah')}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-navy-deep/90 hover:bg-navy text-xs font-cinzel uppercase tracking-wider text-gold-light border border-gold/30 hover:border-gold transition-colors cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>View Map</span>
              </button>

              <a
                href={nikahVenue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gold/20 hover:bg-gold/30 text-xs font-cinzel uppercase tracking-wider text-ivory border border-gold/40 hover:border-gold transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-gold" />
                <span>Directions</span>
                <ExternalLink className="w-3 h-3 text-gold/70" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Google Maps Embed Modal */}
      <AnimatePresence>
        {activeModalMap && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-navy-deep rounded-2xl border border-gold/40 shadow-2xl overflow-hidden p-4 sm:p-6"
            >
              <div className="flex items-center justify-between pb-3 border-b border-gold/20">
                <h4 className="font-cinzel text-base text-gold font-bold">
                  {activeModalMap === 'dinner' ? dinnerVenue.venueName : nikahVenue.venueName}
                </h4>
                <button
                  onClick={() => setActiveModalMap(null)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-ivory cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden mt-3 border border-gold/20">
                <iframe
                  title="Venue Map"
                  src={
                    activeModalMap === 'dinner'
                      ? 'https://maps.google.com/maps?q=Perfect+Palace+Attapur+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed'
                      : 'https://maps.google.com/maps?q=Masjid-e-Qutub+Shahi+Murad+Nagar+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed'
                  }
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
