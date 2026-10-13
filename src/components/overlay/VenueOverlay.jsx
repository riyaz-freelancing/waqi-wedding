import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ExternalLink, X, Navigation } from 'lucide-react';
import { INVITATION_CONFIG } from '../../data/invitation';

export const VenueOverlay = () => {
  const [activeModalMap, setActiveModalMap] = useState(null); // 'dinner' | 'nikah' | null

  const nikahVenue = INVITATION_CONFIG.events[0];
  const dinnerVenue = INVITATION_CONFIG.events[1];

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 sm:px-6 select-none pointer-events-none relative z-10">
      <div className="max-w-4xl w-full mx-auto space-y-8 pointer-events-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="font-cinzel text-xs tracking-widest3 uppercase text-gold">
            Locations &amp; Directions
          </span>
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-ivory mt-1">
            The Royal Venues
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2 opacity-70">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs">✦</span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. Dinner Venue (Perfect Palace) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="glass-emerald-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between border border-gold/40 shadow-luxury-card relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3.5 py-1 rounded-full text-[11px] font-cinzel uppercase tracking-widest2 bg-navy-deep/80 text-gold border border-gold/40">
                  Dinner Venue
                </span>
                <span className="font-cinzel text-xs text-gold-light">
                  Fri, 23 Oct 2026 · 9:00 PM
                </span>
              </div>

              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-ivory tracking-wide">
                {dinnerVenue.venueName}
              </h3>
              <p className="font-jost text-sm text-gold-light mt-1 font-medium">
                {dinnerVenue.locationShort}
              </p>
              <p className="font-jost text-xs text-ivory/70 mt-2 leading-relaxed">
                {dinnerVenue.fullAddress}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-gold/20 flex gap-2.5">
              <button
                onClick={() => setActiveModalMap('dinner')}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-navy-deep/90 hover:bg-navy text-xs font-cinzel uppercase tracking-wider text-gold-light border border-gold/30 hover:border-gold transition-colors cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>View Map</span>
              </button>

              <a
                href={dinnerVenue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-gold/20 hover:bg-gold/30 text-xs font-cinzel uppercase tracking-wider text-ivory border border-gold/40 hover:border-gold transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-gold" />
                <span>Directions</span>
                <ExternalLink className="w-3 h-3 text-gold/70" />
              </a>
            </div>
          </motion.div>

          {/* 2. Nikah Venue (Masjid-e-Qutub Shahi) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="glass-navy-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between border border-gold/30 shadow-luxury-card relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3.5 py-1 rounded-full text-[11px] font-cinzel uppercase tracking-widest2 bg-navy-deep/80 text-gold border border-gold/40">
                  Nikah Venue
                </span>
                <span className="font-cinzel text-xs text-gold-light">
                  Fri, 23 Oct 2026 · 1:30 PM
                </span>
              </div>

              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-ivory tracking-wide">
                {nikahVenue.venueName}
              </h3>
              <p className="font-jost text-sm text-gold-light mt-1 font-medium">
                {nikahVenue.locationShort}
              </p>
              <p className="font-jost text-xs text-ivory/70 mt-2 leading-relaxed">
                {nikahVenue.fullAddress}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-gold/20 flex gap-2.5">
              <button
                onClick={() => setActiveModalMap('nikah')}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-navy-deep/90 hover:bg-navy text-xs font-cinzel uppercase tracking-wider text-gold-light border border-gold/30 hover:border-gold transition-colors cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>View Map</span>
              </button>

              <a
                href={nikahVenue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-gold/20 hover:bg-gold/30 text-xs font-cinzel uppercase tracking-wider text-ivory border border-gold/40 hover:border-gold transition-all"
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-deep/80 backdrop-blur-md pointer-events-auto"
            onClick={() => setActiveModalMap(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl bg-navy-card rounded-3xl border border-gold/40 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gold/20 bg-navy-card/95">
                <div>
                  <h4 className="font-cinzel text-base sm:text-lg font-bold text-ivory">
                    {activeModalMap === 'dinner' ? dinnerVenue.venueName : nikahVenue.venueName}
                  </h4>
                  <p className="font-jost text-xs text-gold-light">
                    {activeModalMap === 'dinner' ? dinnerVenue.locationShort : nikahVenue.locationShort}
                  </p>
                </div>
                <button
                  onClick={() => setActiveModalMap(null)}
                  className="p-1.5 rounded-full hover:bg-gold/20 text-gold-light hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Map Iframe */}
              <div className="w-full h-80 sm:h-96 bg-navy-deep">
                <iframe
                  title="Google Maps Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    activeModalMap === 'dinner' ? dinnerVenue.venueName + ' ' + dinnerVenue.locationShort : nikahVenue.venueName + ' ' + nikahVenue.locationShort
                  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  allowFullScreen
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-navy-deep flex justify-end">
                <a
                  href={activeModalMap === 'dinner' ? dinnerVenue.mapsUrl : nikahVenue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gold text-navy-deep font-cinzel text-xs font-bold uppercase tracking-wider hover:bg-gold-light transition-colors"
                >
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
