import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Share2, Copy, Check } from 'lucide-react';
import { INVITATION_CONFIG } from '../../data/invitation';

export const FinaleOverlay = ({ onFireworkBurst }) => {
  const [copied, setCopied] = useState(false);

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

  return (
    <section className="w-full flex flex-col items-center justify-center py-8 sm:py-12 px-4 sm:px-6 select-none pointer-events-none relative z-10">
      <div className="max-w-2xl w-full mx-auto space-y-6 pointer-events-auto text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-cinzel text-xs tracking-widest3 uppercase text-gold">
            Warmest Wishes
          </span>
          <h2 className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-ivory mt-1">
            Your Presence is Our Greatest Gift
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2 opacity-70">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs">✦</span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Compliments & Duas Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass-emerald-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gold/30 shadow-luxury-card relative overflow-hidden"
        >
          <p className="font-cormorant italic text-sm sm:text-base text-gold-light max-w-lg mx-auto leading-relaxed">
            Please keep us in your sincere duas as we begin this sacred lifelong journey under the divine blessings of Allah.
          </p>

          {/* Compliments attribution */}
          <div className="mt-4 pt-3 border-t border-gold/20">
            <p className="font-cinzel text-xs uppercase tracking-widest2 text-gold">
              {INVITATION_CONFIG.honors.compliments}
            </p>
          </div>

          {/* Actions: Share & Copy */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleShareWhatsApp}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gold hover:bg-gold-light text-navy-deep font-cinzel text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-subtle transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-navy-deep" />
              <span>Share Card</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-navy-deep/80 hover:bg-navy-deep text-ivory border border-gold/30 hover:border-gold font-cinzel text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-gold-light" />}
              <span>{copied ? 'Copied' : 'Copy Link'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
