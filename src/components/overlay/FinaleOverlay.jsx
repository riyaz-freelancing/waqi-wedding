import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Copy, Check, MessageSquare, Heart, Sparkles, Send, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { INVITATION_CONFIG } from '../../data/invitation';

export const FinaleOverlay = ({ onFireworkBurst }) => {
  const [copied, setCopied] = useState(false);
  const [showRsvpModal, setShowRsvpModal] = useState(false);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpGuests, setRsvpGuests] = useState('2');
  const [rsvpStatus, setRsvpStatus] = useState(true); // true = attending

  // Trigger firework burst when entering this scene
  useEffect(() => {
    if (onFireworkBurst) onFireworkBurst();
  }, [onFireworkBurst]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (_) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleShareWhatsApp = () => {
    const text = INVITATION_CONFIG.whatsapp.shareMessage();
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleSendRsvp = (e) => {
    e.preventDefault();
    if (!rsvpName.trim()) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#FFF8E7', '#0B3D2E'],
      });
    } catch (_) {}

    const text = INVITATION_CONFIG.whatsapp.rsvpTemplate(rsvpName, rsvpGuests, rsvpStatus);
    const phone = INVITATION_CONFIG.whatsapp.rsvpNumber;
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    setShowRsvpModal(false);
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 sm:px-6 select-none pointer-events-none relative z-10">
      <div className="max-w-2xl w-full mx-auto space-y-8 pointer-events-auto text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-cinzel text-xs tracking-widest3 uppercase text-gold">
            Gratitude &amp; Celebration
          </span>
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-ivory mt-1">
            We Await Your Gracious Presence
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2 opacity-70">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs">✦</span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Compliments Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="glass-emerald-card p-6 sm:p-8 rounded-3xl border border-gold/40 shadow-luxury-card relative overflow-hidden"
        >
          <p className="font-cinzel text-xs sm:text-sm tracking-widest2 uppercase text-gold/90">
            With best compliment From:
          </p>
          <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-ivory mt-1">
            Near &amp; Dear
          </h3>

          <div className="flex items-center justify-center gap-2 my-4 text-gold">
            <span>❖</span>
            <div className="h-[1px] w-24 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />
            <span>❖</span>
          </div>

          <p className="font-cormorant italic text-sm sm:text-base text-ivory/85">
            Your prayers and warm presence will be the greatest blessing upon the newlyweds.
          </p>
        </motion.div>

        {/* Action Buttons: WhatsApp Share, Copy Link, RSVP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
        >
          {/* Share on WhatsApp */}
          <button
            onClick={handleShareWhatsApp}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-xs font-cinzel uppercase tracking-wider text-white border border-[#25D366]/50 transition-all shadow-md cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-[#25D366]" />
            <span>Share on WhatsApp</span>
          </button>

          {/* Copy Link */}
          <button
            onClick={handleCopyLink}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-navy-card hover:bg-navy-subtle text-xs font-cinzel uppercase tracking-wider text-gold-light border border-gold/30 hover:border-gold transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gold" />}
            <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
          </button>

          {/* RSVP Button */}
          <button
            onClick={() => setShowRsvpModal(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gold hover:bg-gold-light text-navy-deep text-xs font-cinzel uppercase tracking-wider font-bold shadow-gold-glow transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>RSVP</span>
          </button>
        </motion.div>

        {/* Footer Credits */}
        <p className="font-cinzel text-[10px] sm:text-[11px] tracking-widest2 uppercase text-gold-light/60 pt-8">
          Mohammed Waqiullah Khan &amp; Syeda Sara Fatima · October 2026
        </p>
      </div>

      {/* RSVP Modal */}
      <AnimatePresence>
        {showRsvpModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-deep/80 backdrop-blur-md pointer-events-auto"
            onClick={() => setShowRsvpModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md bg-navy-card rounded-3xl border border-gold/40 p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowRsvpModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gold/20 text-gold-light transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <span className="font-cinzel text-[11px] tracking-widest2 text-gold uppercase">
                  Marriage Ceremony RSVP
                </span>
                <h3 className="font-cormorant text-2xl font-bold text-ivory mt-1">
                  Confirm Your Presence
                </h3>
              </div>

              <form onSubmit={handleSendRsvp} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-cinzel text-gold-light uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={rsvpName}
                    onChange={(e) => setRsvpName(e.target.value)}
                    placeholder="e.g. Alhaj Mohammed & Family"
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-deep border border-gold/30 text-ivory placeholder-gold-light/30 focus:border-gold focus:outline-none text-sm font-jost"
                  />
                </div>

                <div>
                  <label className="block text-xs font-cinzel text-gold-light uppercase tracking-wider mb-1.5">
                    Number of Guests
                  </label>
                  <select
                    value={rsvpGuests}
                    onChange={(e) => setRsvpGuests(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-deep border border-gold/30 text-ivory focus:border-gold focus:outline-none text-sm font-jost"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                      <option key={num} value={num} className="bg-navy-deep text-ivory">
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-cinzel text-gold-light uppercase tracking-wider mb-1.5">
                    Attendance
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setRsvpStatus(true)}
                      className={`px-3 py-2 rounded-xl text-xs font-cinzel uppercase tracking-wider border transition-all ${
                        rsvpStatus
                          ? 'bg-gold/30 border-gold text-gold-light font-bold shadow-gold-subtle'
                          : 'bg-navy-deep border-gold/20 text-gold-light/60'
                      }`}
                    >
                      Attending (In Sha Allah)
                    </button>
                    <button
                      type="button"
                      onClick={() => setRsvpStatus(false)}
                      className={`px-3 py-2 rounded-xl text-xs font-cinzel uppercase tracking-wider border transition-all ${
                        !rsvpStatus
                          ? 'bg-red-950/60 border-red-500/50 text-red-200 font-bold'
                          : 'bg-navy-deep border-gold/20 text-gold-light/60'
                      }`}
                    >
                      Unable to Attend
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl bg-gold hover:bg-gold-light text-navy-deep font-cinzel text-xs font-bold uppercase tracking-widest1 transition-colors cursor-pointer shadow-gold-glow"
                >
                  <Send className="w-4 h-4" />
                  <span>Send RSVP to WhatsApp</span>
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
