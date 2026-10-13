import React from 'react';
import { motion } from 'framer-motion';
import { FloralDivider, QuranVerseDisplay, IslamicMedallion, CornerOrnament } from './Ornaments';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export const InvitationSection = () => {
  return (
    <section id="invitation" className="relative py-20 sm:py-32 px-4 sm:px-6 md:px-12 bg-navy text-ivory overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-champagne/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-20">
        {/* Top Islamic Medallion Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-5"
        >
          <IslamicMedallion className="w-14 h-14 sm:w-16 sm:h-16 text-champagne" />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <Badge variant="champagne" className="mb-2.5">
            In The Name Of Allah
          </Badge>
          <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] font-cormorant font-normal text-ivory mt-2 mb-3 tracking-wide leading-tight">
            A Union of Grace &amp; Devotion
          </h2>
          <FloralDivider className="w-56 mx-auto text-champagne/70" />
        </motion.div>

        {/* Sacred Quranic Verse */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <QuranVerseDisplay />
        </motion.div>

        {/* Main Invitation Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-center my-10 sm:my-14 px-4 sm:px-8 max-w-2xl mx-auto"
        >
          <p className="font-serif italic text-xl xs:text-2xl sm:text-3xl text-champagne-light leading-relaxed font-normal">
            “With gratitude to Allah and the love and prayers of our families, we joyfully invite you to celebrate as <span className="font-normal not-italic text-ivory font-cormorant underline decoration-champagne/40 underline-offset-6">Mohammed Waqiullah Khan</span> and <span className="font-normal not-italic text-ivory font-cormorant underline decoration-champagne/40 underline-offset-6">Syeda Sara Fatima</span> begin their journey together.”
          </p>
        </motion.div>

        {/* Traditional Lineage & Family Honor Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <Card className="editorial-card rounded-3xl p-6 sm:p-12 relative overflow-hidden">
            {/* Corner Filigrees */}
            <div className="absolute top-3 left-3 opacity-50">
              <CornerOrnament position="top-left" className="w-7 h-7 sm:w-8 sm:h-8 text-champagne" />
            </div>
            <div className="absolute top-3 right-3 opacity-50">
              <CornerOrnament position="top-right" className="w-7 h-7 sm:w-8 sm:h-8 text-champagne" />
            </div>
            <div className="absolute bottom-3 left-3 opacity-50">
              <CornerOrnament position="bottom-left" className="w-7 h-7 sm:w-8 sm:h-8 text-champagne" />
            </div>
            <div className="absolute bottom-3 right-3 opacity-50">
              <CornerOrnament position="bottom-right" className="w-7 h-7 sm:w-8 sm:h-8 text-champagne" />
            </div>

            <div className="text-center space-y-6 sm:space-y-7 relative z-10">
              {/* Grandparents & Elders Tribute */}
              <div className="border-b border-champagne/20 pb-6">
                <span className="text-[11px] sm:text-xs uppercase tracking-widest2 text-champagne-muted font-cinzel font-medium block mb-1.5">
                  With the Blessings of Our Respected Parents
                </span>
                <h3 className="font-cormorant text-xl xs:text-2xl sm:text-3xl font-medium text-ivory tracking-wide">
                  Mrs. &amp; Mr. Late MOHAMMED ANWAR KHAN
                </h3>
                <p className="text-xs sm:text-sm font-manrope italic text-champagne-light mt-1">
                  (Well Known Khalifa Hakeem Shahji Biyabani Rh.)
                </p>
              </div>

              {/* Guardianship */}
              <div className="border-b border-champagne/20 pb-6">
                <span className="text-[11px] sm:text-xs uppercase tracking-widest2 text-champagne-muted font-cinzel font-medium block mb-1.5">
                  Under the Guardianship of
                </span>
                <p className="font-cormorant text-lg xs:text-xl sm:text-2xl font-medium text-ivory tracking-wide">
                  MR. ALHAJ SYED SHUJAUDDIN HUSSAINI (SHAMEEM)
                </p>
              </div>

              {/* Parents of Groom */}
              <div className="border-b border-champagne/20 pb-6">
                <span className="text-[11px] sm:text-xs uppercase tracking-widest2 text-champagne-muted font-cinzel font-medium block mb-1.5">
                  Warmly Requested By
                </span>
                <p className="font-cormorant italic text-2xl xs:text-3xl sm:text-4xl text-champagne my-1 leading-normal">
                  Mrs. &amp; Mr. Alhaj Mohammed Samiullah Khan (Jawaid)
                </p>
                <p className="text-xs sm:text-sm font-manrope italic text-champagne-muted mt-1">
                  (Khalifa Hz. Hameeduddin Sharfi Quadri Rh.)
                </p>
                <p className="font-manrope text-xs xs:text-sm sm:text-base text-champagne-muted/90 mt-3 max-w-xl mx-auto leading-relaxed">
                  Solicit your gracious presence on the auspicious occasion of the Marriage Ceremony of our son
                </p>
              </div>

              {/* Two-Column Balanced Couple Details */}
              <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch bg-navy-subtle/50 rounded-2xl p-5 xs:p-7 border border-champagne/20">
                {/* Groom's Side */}
                <div className="text-center md:text-right md:border-r md:border-champagne/20 md:pr-6 flex flex-col justify-center">
                  <span className="text-[11px] tracking-widest2 uppercase font-cinzel text-champagne font-semibold block mb-1">
                    GROOM
                  </span>
                  <p className="font-cormorant text-2xl xs:text-3xl font-medium text-ivory tracking-wide">
                    Mohammed Waqiullah Khan
                  </p>
                  <div className="mt-2.5">
                    <Badge variant="champagne" className="text-xs font-manrope font-semibold">
                      B.Com., M.B.A.
                    </Badge>
                  </div>
                </div>

                {/* Bride's Side */}
                <div className="text-center md:text-left md:pl-3 flex flex-col justify-center">
                  <span className="text-[11px] tracking-widest2 uppercase font-cinzel text-champagne font-semibold block mb-1">
                    BRIDE
                  </span>
                  <p className="font-cormorant text-2xl xs:text-3xl font-medium text-ivory tracking-wide">
                    Syeda Sara Fatima
                  </p>
                  <div className="mt-2.5">
                    <Badge variant="champagne" className="text-xs font-manrope font-semibold">
                      M.A., B.Ed.
                    </Badge>
                  </div>
                  <p className="text-xs font-manrope text-champagne-muted mt-2.5 leading-relaxed">
                    D/O <span className="font-medium text-ivory font-cinzel">LATE HZ. ALHAJ SYED AHMED ALI SHAH DHOTI</span>
                  </p>
                  <p className="text-[11px] font-manrope italic text-champagne-light/90 mt-0.5">
                    (Ex. Sajjada Nasheen Bargah Hz. Murad Shah Dhoti R.A.)
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
