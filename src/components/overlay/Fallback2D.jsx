import React from 'react';
import { INVITATION_CONFIG, downloadIcsFile, getGoogleCalendarUrl } from '../../data/invitation';
import { Calendar, MapPin, Download, ExternalLink, Share2, MessageSquare } from 'lucide-react';

export const Fallback2D = () => {
  const { bismillah, quranVerse, propheticDua, groom, bride, honors, events, whatsapp } = INVITATION_CONFIG;

  const handleShare = () => {
    window.open(`https://api.whatsapp.com/send?text=${whatsapp.shareMessage()}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-arabesque-pattern text-ivory py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-16 text-center">
        {/* Header */}
        <header className="space-y-4">
          <p className="font-amiri text-3xl sm:text-4xl text-gold" dir="rtl">
            {bismillah.arabic}
          </p>
          <p className="font-cormorant italic text-sm text-ivory/80">
            {bismillah.english}
          </p>
          <div className="py-4">
            <span className="font-amiri text-2xl text-ivory" dir="rtl">
              {quranVerse.shortArabic}
            </span>
            <p className="font-cormorant italic text-gold-light mt-1">
              “{quranVerse.english}”
            </p>
          </div>
        </header>

        {/* Title */}
        <section className="glass-emerald-card p-8 rounded-3xl">
          <span className="font-cinzel text-xs tracking-widest3 uppercase text-gold">
            {honors.host.invitationPhrase}
          </span>
          <h1 className="font-cinzel text-2xl sm:text-3xl font-bold text-ivory mt-2 uppercase tracking-wider">
            Marriage Ceremony
          </h1>
          <p className="font-cormorant italic text-sm text-gold-light mt-1">
            of our son
          </p>

          <div className="my-6 space-y-2">
            <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-ivory">
              {groom.fullName}
            </h2>
            <p className="font-cinzel text-xs text-gold tracking-widest1">
              {groom.degrees}
            </p>
            <p className="font-cormorant italic text-lg text-gold-light">With</p>
            <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-ivory">
              {bride.fullName}
            </h2>
            <p className="font-cinzel text-xs text-gold tracking-widest1">
              {bride.degrees}
            </p>
            <p className="font-cormorant text-xs text-ivory/80 italic max-w-lg mx-auto pt-1">
              {bride.lineage}
            </p>
          </div>
        </section>

        {/* Respected Elders */}
        <section className="space-y-4 text-left">
          <div className="glass-navy-card p-6 rounded-2xl">
            <p className="font-cinzel text-xs text-gold uppercase tracking-wider">
              {honors.blessings.title}
            </p>
            <h3 className="font-cormorant text-xl text-ivory font-bold mt-1">
              {honors.blessings.names}
            </h3>
            <p className="font-cormorant italic text-xs text-gold-light">
              {honors.blessings.distinction}
            </p>
          </div>

          <div className="glass-navy-card p-5 rounded-2xl">
            <p className="font-cinzel text-xs text-gold uppercase tracking-wider">
              {honors.guardianship.title}
            </p>
            <h4 className="font-cinzel text-base text-ivory font-bold mt-1">
              {honors.guardianship.name}
            </h4>
          </div>

          <div className="glass-emerald-card p-6 rounded-2xl">
            <p className="font-cormorant italic text-xs text-gold-light">
              {honors.host.salutation}
            </p>
            <h3 className="font-cormorant text-xl text-ivory font-bold">
              {honors.host.name}
            </h3>
            <p className="font-cormorant italic text-xs text-gold">
              {honors.host.title}
            </p>
          </div>
        </section>

        {/* Events */}
        <section className="space-y-6">
          <h2 className="font-cormorant text-3xl text-ivory font-bold">
            Sacred Ceremonies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {events.map((evt) => (
              <div key={evt.id} className="glass-emerald-card p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-cinzel uppercase bg-navy-deep text-gold border border-gold/40">
                    {evt.type}
                  </span>
                  <p className="font-cinzel text-xs text-gold mt-3">
                    {evt.inShaAllah} · {evt.day}
                  </p>
                  <h3 className="font-cormorant text-2xl font-bold text-ivory mt-0.5">
                    {evt.dateFormatted}
                  </h3>
                  <p className="font-jost text-xs text-gold-light mt-1">
                    {evt.timing}
                  </p>
                  <p className="font-cinzel text-xs text-ivory font-semibold mt-3">
                    {evt.venueName}
                  </p>
                  <p className="font-jost text-xs text-ivory/70 mt-0.5">
                    {evt.fullAddress}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gold/20 flex gap-2">
                  <a
                    href={getGoogleCalendarUrl(evt)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 rounded-xl bg-navy-deep text-center text-xs font-cinzel uppercase text-gold-light border border-gold/30"
                  >
                    Google Cal
                  </a>
                  <a
                    href={evt.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 rounded-xl bg-gold/20 text-center text-xs font-cinzel uppercase text-ivory border border-gold/40"
                  >
                    Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dua */}
        <section className="glass-navy-card p-8 rounded-3xl">
          <p className="font-amiri text-2xl text-gold" dir="rtl">
            {propheticDua.arabic}
          </p>
          <p className="font-cormorant italic text-sm text-gold-light mt-2">
            {propheticDua.transliteration}
          </p>
          <p className="font-cormorant text-base text-ivory mt-2">
            {propheticDua.translation}
          </p>
        </section>

        {/* Share & Compliments */}
        <footer className="space-y-4 pt-6">
          <p className="font-cinzel text-sm uppercase text-gold tracking-widest2">
            {honors.compliments}
          </p>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-cinzel text-xs uppercase tracking-wider font-bold shadow-lg"
          >
            <Share2 className="w-4 h-4" />
            <span>Share on WhatsApp</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
