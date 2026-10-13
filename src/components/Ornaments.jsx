import React from 'react';

// Royal Monogram Crest (Refined 8-Pointed Star Monogram with Champagne Gold)
export const RoyalCrest = ({ className = "w-24 h-24" }) => (
  <div className={`relative flex items-center justify-center select-none ${className}`}>
    <svg viewBox="0 0 140 140" className="w-full h-full" fill="none">
      <defs>
        <radialGradient id="champagneCrestGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D8BB70" stopOpacity="0.2" />
          <stop offset="70%" stopColor="#A98A45" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#080F22" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="champagneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5EED9" />
          <stop offset="50%" stopColor="#D8BB70" />
          <stop offset="100%" stopColor="#A98A45" />
        </linearGradient>
      </defs>

      {/* Subtle Glow */}
      <circle cx="70" cy="70" r="62" fill="url(#champagneCrestGlow)" />

      {/* Outer 8-Pointed Star (Khatim) */}
      <polygon
        points="70,12 85,32 110,27 108,52 128,70 108,88 110,113 85,108 70,128 55,108 30,113 32,88 12,70 32,52 30,27 55,32"
        stroke="url(#champagneGradient)"
        strokeWidth="1.2"
        fill="rgba(12, 22, 49, 0.85)"
      />

      {/* Inner Concentric Rings */}
      <circle cx="70" cy="70" r="46" stroke="url(#champagneGradient)" strokeWidth="0.7" strokeDasharray="3 3" />
      <circle cx="70" cy="70" r="42" stroke="url(#champagneGradient)" strokeWidth="0.8" />

      {/* Central Monogram Text in Cormorant Garamond */}
      <text
        x="70"
        y="78"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="29"
        fontWeight="500"
        letterSpacing="1"
        fill="url(#champagneGradient)"
        textAnchor="middle"
        className="select-none"
      >
        W&amp;S
      </text>

      {/* Finial / Crown Accent */}
      <circle cx="70" cy="24" r="2" fill="#D8BB70" />
      <circle cx="70" cy="116" r="2" fill="#D8BB70" />
      <circle cx="24" cy="70" r="2" fill="#D8BB70" />
      <circle cx="116" cy="70" r="2" fill="#D8BB70" />
    </svg>
  </div>
);

// Symmetrical Delicate Champagne Floral Divider
export const FloralDivider = ({ className = "w-64" }) => (
  <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-champagne/60 to-champagne/80" />
    <svg viewBox="0 0 50 30" className="w-7 h-4 text-champagne fill-current opacity-85 flex-shrink-0">
      <path d="M25 2 C28 10, 38 14, 48 15 C38 16, 28 20, 25 28 C22 20, 12 16, 2 15 C12 14, 22 10, 25 2 Z" fill="currentColor" />
      <circle cx="25" cy="15" r="2" fill="#080F22" />
      <circle cx="14" cy="15" r="1.2" fill="currentColor" />
      <circle cx="36" cy="15" r="1.2" fill="currentColor" />
    </svg>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-champagne/60 to-champagne/80" />
  </div>
);

// Refined Rosette Medallion Emblem
export const IslamicMedallion = ({ className = "w-16 h-16 text-champagne" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor">
    <polygon
      points="50,6 61,21 81,17 78,37 94,50 78,63 81,83 61,79 50,94 39,79 19,83 22,63 6,50 22,37 19,17 39,21"
      strokeWidth="1"
      fill="currentColor"
      fillOpacity="0.06"
    />
    <circle cx="50" cy="50" r="32" strokeWidth="0.75" strokeDasharray="2 3" />
    <circle cx="50" cy="50" r="24" strokeWidth="0.8" />
    <polygon
      points="50,28 56,38 67,36 65,47 75,53 65,59 67,70 56,68 50,78 44,68 33,70 35,59 25,53 35,47 33,36 44,38"
      strokeWidth="0.75"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <circle cx="50" cy="50" r="4.5" fill="currentColor" fillOpacity="0.9" stroke="none" />
  </svg>
);

// Delicate Corner Filigree for Cards & Hero Frames
export const CornerOrnament = ({ position = "top-left", className = "w-10 h-10 text-champagne/70" }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-right': return 'scale-x-[-1]';
      case 'bottom-left': return 'scale-y-[-1]';
      case 'bottom-right': return 'scale-[-1]';
      default: return '';
    }
  };

  return (
    <svg viewBox="0 0 50 50" className={`${className} ${getTransform()}`} fill="none" stroke="currentColor">
      <path d="M 2 48 L 2 12 Q 2 2, 12 2 L 48 2" strokeWidth="1" />
      <path d="M 6 48 L 6 14 Q 6 6, 14 6 L 48 6" strokeWidth="0.5" strokeDasharray="1.5 2.5" />
      <circle cx="16" cy="16" r="2.5" fill="currentColor" stroke="none" />
      <path d="M 2 16 C 8 16, 16 8, 16 2" strokeWidth="0.7" />
      <circle cx="2" cy="48" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="48" cy="2" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
};

// Royal Bismillah Calligraphy (in Amiri with English Subtext)
export const BismillahCalligraphy = ({ className = "w-full max-w-xl text-champagne" }) => (
  <div className={`flex flex-col items-center justify-center select-none ${className}`}>
    <span 
      className="font-arabic text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-champagne font-normal tracking-wide text-center leading-[1.8] drop-shadow-sm"
      dir="rtl"
      lang="ar"
    >
      بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
    </span>
    <span className="text-xs sm:text-sm tracking-wide text-champagne-muted font-serif italic mt-2 text-center">
      In the name of ALLAH the most beneficent &amp; merciful
    </span>
  </div>
);

// Quranic Verse Display (Calm, Spacious, Editorial)
export const QuranVerseDisplay = () => (
  <div className="relative my-8 px-6 sm:px-10 py-8 text-center max-w-2xl mx-auto rounded-3xl border border-champagne/25 bg-navy-card/70 backdrop-blur-md shadow-luxury-card overflow-hidden">
    {/* Subtle Inner Highlight */}
    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-champagne/40 to-transparent pointer-events-none" />

    <div className="inline-block mb-3 px-4 py-1 rounded-full text-[10px] sm:text-[11px] uppercase tracking-widest2 font-cinzel text-champagne-light bg-navy-deep/80 border border-champagne/30">
      Surah An-Naba · 78:8
    </div>

    <div 
      className="font-arabic text-3xl sm:text-4xl text-ivory font-normal my-3 leading-[2.1]"
      dir="rtl"
      lang="ar"
    >
      وَخَلَقْنَاكُمْ أَزْوَاجًا
    </div>

    <div className="font-serif italic text-xl sm:text-2xl text-champagne-light font-normal mt-2">
      “And We created you in pairs.”
    </div>

    <div className="text-[11px] uppercase tracking-widest2 text-champagne-muted mt-2 font-cinzel">
      The Holy Qur’an
    </div>
  </div>
);
