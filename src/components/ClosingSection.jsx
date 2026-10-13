import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Send, MessageSquareQuote, Gift } from 'lucide-react';
import { FloralDivider, IslamicMedallion, CornerOrnament } from './Ornaments';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const INITIAL_DUAS = [
  {
    id: 1,
    name: 'Office Colleagues & Dear Friends',
    text: 'Warmest congratulations Waqi! Wishing you and Sara a magnificent wedding and an extraordinary lifetime filled with barakah, joy, and boundless achievements together!',
    tag: 'From Your Colleagues 💙',
  },
  {
    id: 2,
    name: 'Syed & Khan Family Elders',
    text: 'بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ. May Allah SWT shower His everlasting mercy and blessings upon your sacred union.',
    tag: 'Barakallahu Lakuma',
  },
];

export const ClosingSection = () => {
  const [duas, setDuas] = useState(INITIAL_DUAS);
  const [guestName, setGuestName] = useState('');
  const [guestDua, setGuestDua] = useState('');
  const [hasBlessed, setHasBlessed] = useState(false);
  const [blessingCount, setBlessingCount] = useState(312);

  const triggerBlessing = () => {
    confetti({
      particleCount: 80,
      spread: 75,
      origin: { y: 0.8 },
      colors: ['#D8BB70', '#EADBB3', '#A98A45', '#F5F0E6'],
    });

    if (!hasBlessed) {
      setHasBlessed(true);
      setBlessingCount((prev) => prev + 1);
    }
  };

  const handlePostDua = (e) => {
    e.preventDefault();
    if (!guestName.trim() || !guestDua.trim()) return;

    confetti({
      particleCount: 75,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#D8BB70', '#EADBB3', '#A98A45', '#F5F0E6'],
    });

    const newDua = {
      id: Date.now(),
      name: guestName.trim(),
      text: guestDua.trim(),
      tag: 'Blessed Wishes',
    };

    setDuas([newDua, ...duas]);
    setGuestName('');
    setGuestDua('');
    setBlessingCount((prev) => prev + 1);
  };

  return (
    <footer id="duas" className="relative py-20 sm:py-32 px-4 sm:px-6 md:px-12 bg-navy text-ivory overflow-hidden text-center">
      {/* Decorative Outer Border Frame */}
      <div className="absolute inset-3 sm:inset-8 border border-champagne/20 rounded-3xl pointer-events-none">
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
          <CornerOrnament position="top-left" className="w-6 h-6 sm:w-8 sm:h-8 text-champagne/50" />
        </div>
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
          <CornerOrnament position="top-right" className="w-6 h-6 sm:w-8 sm:h-8 text-champagne/50" />
        </div>
        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
          <CornerOrnament position="bottom-left" className="w-6 h-6 sm:w-8 sm:h-8 text-champagne/50" />
        </div>
        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3">
          <CornerOrnament position="bottom-right" className="w-6 h-6 sm:w-8 sm:h-8 text-champagne/50" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-20 flex flex-col items-center">
        {/* Top Medallion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-5"
        >
          <IslamicMedallion className="w-14 h-14 sm:w-16 sm:h-16 text-champagne" />
        </motion.div>

        {/* Special Colleague Surprise Ribbon */}
        <div className="mb-4">
          <Badge variant="champagne" className="gap-2 text-[10px] sm:text-[11px] font-manrope font-medium tracking-wide">
            <Gift className="w-3.5 h-3.5 text-champagne flex-shrink-0" />
            <span>Colleague Wedding Surprise · Crafted with Warmth</span>
          </Badge>
        </div>

        {/* Closing Sentiments in Cormorant Garamond */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-cormorant italic text-[clamp(1.9rem,4vw,3.2rem)] font-normal text-ivory mb-3 leading-tight"
        >
          “Your presence is our greatest gift.”
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-serif italic text-base sm:text-lg text-champagne-muted max-w-xl mx-auto leading-relaxed mb-6"
        >
          Please keep us in your duas as we begin this beautiful journey together under Allah’s divine guidance and grace.
        </motion.p>

        {/* Instant Blessing Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="my-3"
        >
          <Button
            onClick={triggerBlessing}
            size="lg"
            variant="default"
            className="w-full sm:w-auto gap-2.5 shadow-champagne-subtle text-xs"
          >
            <Heart className={`w-4 h-4 text-navy-deep transition-transform duration-200 ${hasBlessed ? 'fill-navy-deep' : ''}`} />
            <span>{hasBlessed ? 'Dua Sent with Love' : 'Send Instant Duas & Blessings'}</span>
            <span className="ml-1 text-[11px] bg-navy-deep/80 px-2.5 py-0.5 rounded-full text-champagne border border-champagne/30">
              {blessingCount}
            </span>
          </Button>
        </motion.div>

        {/* Interactive Digital Dua Book */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-2xl my-8 sm:my-10 text-left"
        >
          <Card className="editorial-card p-5 xs:p-7 sm:p-9 rounded-3xl">
            <div className="flex items-center gap-2.5 mb-5 text-ivory border-b border-champagne/20 pb-3.5">
              <MessageSquareQuote className="w-5 h-5 text-champagne flex-shrink-0" />
              <h3 className="font-cormorant text-2xl sm:text-3xl font-medium tracking-wide">The Digital Dua &amp; Blessings Wall</h3>
            </div>

            <form onSubmit={handlePostDua} className="space-y-3.5 mb-6">
              <div>
                <label htmlFor="guest-name" className="block text-[11px] uppercase tracking-widest2 font-cinzel text-champagne mb-1.5 font-medium">
                  Your Name or Family
                </label>
                <Input
                  id="guest-name"
                  type="text"
                  placeholder="e.g. Colleague / Dear Friend / Family Member"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="guest-dua" className="block text-[11px] uppercase tracking-widest2 font-cinzel text-champagne mb-1.5 font-medium">
                  Your Prayer &amp; Wishes
                </label>
                <Textarea
                  id="guest-dua"
                  rows={2}
                  placeholder="Write your personal congratulations and heartfelt duas for Waqiullah & Sara..."
                  value={guestDua}
                  onChange={(e) => setGuestDua(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="default"
                size="sm"
                className="gap-2 text-xs"
              >
                <Send className="w-3.5 h-3.5 text-navy-deep" />
                <span>Post Your Wish</span>
              </Button>
            </form>

            {/* Duas Stream */}
            <div className="space-y-3 max-h-52 overflow-y-auto pr-1">
              {duas.length === 0 ? (
                <p className="text-center py-6 text-xs text-champagne-muted font-manrope">
                  Be the first to share your sacred dua and congratulations.
                </p>
              ) : (
                duas.map((item) => (
                  <div key={item.id} className="p-3.5 rounded-xl bg-navy-subtle/70 border border-champagne/15 text-xs">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-cormorant font-medium text-ivory text-base sm:text-lg">{item.name}</span>
                      <Badge variant="champagne" className="text-[10px] py-0.5 px-2 font-cinzel">
                        {item.tag}
                      </Badge>
                    </div>
                    <p className="font-manrope text-champagne-muted leading-relaxed text-xs">{item.text}</p>
                  </div>
                ))
              )}
            </div>
          </Card>
        </motion.div>

        {/* Divider */}
        <div className="my-5">
          <FloralDivider className="w-48 sm:w-56 text-champagne/70" />
        </div>

        {/* Couple Signature in Cormorant Garamond Italic */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="my-2 select-none"
        >
          <span className="font-cormorant italic text-4xl xs:text-5xl sm:text-6xl md:text-7xl champagne-foil-text inline-block">
            Waqiullah &amp; Sara
          </span>
        </motion.div>

        {/* Wedding Date Numerals */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-cinzel text-sm xs:text-base sm:text-lg tracking-widest3 text-champagne font-medium mt-1"
        >
          23 · 10 · 2026
        </motion.p>

        {/* Compliments Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 pt-5 border-t border-champagne/20 w-full max-w-sm text-center"
        >
          <p className="text-sm uppercase tracking-widest2 font-serif text-champagne-muted font-medium">
            With best compliment From:
          </p>
          <p className="font-serif italic text-xl sm:text-2xl text-champagne-light font-medium mt-1">
            Near &amp; Dear
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
