import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation, Clock, Calendar, Check, Copy, Building, Landmark } from 'lucide-react';
import { FloralDivider, CornerOrnament } from './Ornaments';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const EVENTS = [
  {
    id: 'nikah',
    badge: 'SACRED NIKAH CEREMONY',
    title: 'The Nikah Ceremony',
    arabicTitle: 'عَقْد النِّكَاح المُبَارَك',
    date: 'Friday, the 23rd of October 2026',
    time: 'After Juma · Namaz-e-Juma 1:30 pm',
    venue: 'MASJID-E-QUTUB SHAHI',
    subVenue: '(Choti Masjid)',
    address: 'Murad Nagar, Hyderabad.',
    mapsQuery: 'Masjid-e-Qutub Shahi Choti Masjid Murad Nagar Hyderabad',
    note: 'The solemnization of the marriage ceremony following Friday congregational prayers.',
    icon: Landmark,
  },
  {
    id: 'dinner',
    badge: 'DINNER RECEPTION',
    title: 'The Wedding Dinner',
    arabicTitle: 'وَلِيمَة الـعُرْس المَيْمُونَة',
    date: 'Friday, the 23rd of October 2026',
    time: 'After Isha (9:00 pm)',
    venue: 'PERFECT PALACE',
    subVenue: 'Pillar No. 89',
    address: 'Attapur Road, Ring Road, Hyderabad.',
    mapsQuery: 'Perfect Palace Pillar No 89 Attapur Road Ring Road Hyderabad',
    note: 'An evening of celebrated hospitality, congratulations, and grand banquet dinner.',
    icon: Building,
  },
];

export const EventsSection = () => {
  const [copiedId, setCopiedId] = useState(null);

  const copyAddress = (id, address) => {
    navigator.clipboard.writeText(address);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 3000);
  };

  return (
    <section id="events" className="relative py-20 sm:py-32 px-4 sm:px-6 md:px-12 bg-navy text-ivory">
      <div className="max-w-5xl mx-auto relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <Badge variant="champagne" className="mb-2.5">
            Wedding Itinerary
          </Badge>
          <h2 className="text-[clamp(2.1rem,4.5vw,3.6rem)] font-serif font-normal text-ivory mt-2 mb-3 tracking-wide leading-tight">
            Events &amp; Celebrations
          </h2>
          <FloralDivider className="w-56 mx-auto text-champagne/70" />
          <p className="max-w-lg mx-auto text-base sm:text-lg text-champagne-muted font-serif italic mt-2.5 leading-relaxed">
            Solicit your gracious presence and heartfelt prayers on both auspicious occasions in Hyderabad.
          </p>
        </motion.div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 lg:gap-10">
          {EVENTS.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="h-full"
              >
                <Card className="editorial-card rounded-[2rem] p-6 sm:p-9 shadow-luxury-card hover:border-champagne/40 transition-all duration-300 flex flex-col justify-between overflow-hidden relative h-full">
                  {/* Subtle Corner Filigrees */}
                  <div className="absolute top-2.5 left-2.5 opacity-40">
                    <CornerOrnament position="top-left" className="w-6 h-6 text-champagne" />
                  </div>
                  <div className="absolute top-2.5 right-2.5 opacity-40">
                    <CornerOrnament position="top-right" className="w-6 h-6 text-champagne" />
                  </div>

                  {/* Top Hairline Accent */}
                  <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-champagne/50 to-transparent" />

                  <div>
                    {/* Badge */}
                    <div className="text-center pt-1 mb-3">
                      <Badge variant="champagne" className="text-[10px] tracking-widest2 font-cinzel">
                        {event.badge}
                      </Badge>
                    </div>

                    {/* Arabic Calligraphy & Title */}
                    <div className="text-center mb-5">
                      <p className="font-arabic text-xl sm:text-2xl text-champagne mb-1 select-none leading-relaxed" dir="rtl" lang="ar">
                        {event.arabicTitle}
                      </p>
                      <h3 className="font-serif text-2xl sm:text-3xl font-medium text-ivory tracking-wide">
                        {event.title}
                      </h3>
                    </div>

                    <div className="w-16 h-[1px] bg-champagne/25 mx-auto mb-5" />

                    {/* Schedule Information Row */}
                    <div className="space-y-3 mb-5 bg-navy-subtle/60 rounded-2xl p-4 sm:p-5 border border-champagne/20">
                      <div className="flex items-center gap-3 text-ivory">
                        <Calendar className="w-4 h-4 text-champagne flex-shrink-0" />
                        <span className="font-serif text-base sm:text-lg font-medium text-ivory">{event.date}</span>
                      </div>

                      <div className="flex items-center gap-3 text-ivory">
                        <Clock className="w-4 h-4 text-champagne flex-shrink-0" />
                        <span className="font-serif italic text-base sm:text-lg font-semibold text-champagne-light">
                          {event.time}
                        </span>
                      </div>
                    </div>

                    {/* Venue & Location Details */}
                    <div className="mb-6 space-y-2">
                      <div className="flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-full bg-navy-card text-champagne flex items-center justify-center flex-shrink-0 mt-0.5 border border-champagne/30">
                          <Icon className="w-4 h-4 text-champagne" />
                        </div>
                        <div>
                          <h4 className="font-serif text-xl sm:text-2xl font-medium text-ivory tracking-wide">
                            {event.venue}
                          </h4>
                          {event.subVenue && (
                            <p className="font-serif italic text-sm sm:text-base text-champagne-light font-medium">
                              {event.subVenue}
                            </p>
                          )}
                          <p className="text-sm sm:text-base text-champagne-muted font-serif mt-1 leading-relaxed">
                            {event.address}
                          </p>
                          <p className="text-xs sm:text-sm font-serif italic text-champagne-muted/80 mt-2">
                            {event.note}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions Buttons */}
                  <div className="pt-4 border-t border-champagne/20 flex flex-col sm:flex-row gap-2.5">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.mapsQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="default" className="w-full gap-2 text-xs font-serif font-semibold tracking-wider">
                        <Navigation className="w-3.5 h-3.5 text-navy-deep" />
                        <span>Get Directions</span>
                      </Button>
                    </a>

                    <Button
                      onClick={() => copyAddress(event.id, `${event.venue} ${event.subVenue}, ${event.address}`)}
                      variant="outline"
                      className="gap-2 text-xs font-serif font-semibold tracking-wider"
                    >
                      {copiedId === event.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Address Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-champagne-light" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
