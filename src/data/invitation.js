/**
 * ==============================================================================
 * ROYAL ISLAMIC WEDDING INVITATION CONFIGURATION
 * ==============================================================================
 * Single source of truth for all wedding details, texts, timings, venues,
 * links, imagery, and theme palettes. Customize this file to reuse for other clients.
 */

export const INVITATION_CONFIG = {
  // SEO & Headings
  meta: {
    title: "Marriage Ceremony | Mohammed Waqiullah Khan & Syeda Sara Fatima",
    ogTitle: "Marriage Ceremony Invitation | Mohammed Waqiullah Khan & Syeda Sara Fatima",
    ogDescription: "In the name of ALLAH the most beneficent & merciful. Solicit your gracious presence on the auspicious occasion of the Marriage Ceremony of our son Mohammed Waqiullah Khan with Syeda Sara Fatima. Friday, 23rd October 2026, Hyderabad.",
    themeColor: "#030B18",
    url: typeof window !== 'undefined' ? window.location.href : "https://waqiullah-sara.wedding",
  },

  // Color Palette Tokens: Royal Midnight Sapphire Navy Blue & 24K Gold
  palette: {
    primary: "#081B38",
    deep: "#030B18",
    card: "#0A2246",
    subtle: "#0E2E5C",
    navy: "#081B38",
    navyDeep: "#030B18",
    navyCard: "#0A2246",
    gold: "#D4AF37",
    gold24k: "#F3D053",
    goldLight: "#FFF0A8",
    goldDark: "#7A5F19",
    ivory: "#FFFDF9",
    ivoryMuted: "#D5CDC0",
  },

  // Bismillah & Quranic Verse
  bismillah: {
    arabic: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    english: "In the name of ALLAH the most beneficent & merciful",
  },

  quranVerse: {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    shortArabic: "وَخَلَقْنَاكُمْ أَزْوَاجًا",
    english: "“And We created you in pairs.”",
    surah: "Surah An-Naba · 78:8",
  },

  propheticDua: {
    arabic: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    transliteration: "Barakallahu laka wa baraka alayka wa jama'a baynakuma fi khayr",
    translation: "“May Allah bless you, shower His blessings upon you, and unite you both in goodness and peace.”",
    source: "Sunan Abi Dawud",
  },

  // Occasion Details
  ceremony: {
    occasion: "Marriage Ceremony",
    subtext: "of our son",
  },

  // Couple Details
  groom: {
    fullName: "Mohammed Waqiullah Khan",
    shortName: "Waqiullah",
    degrees: "B.Com., M.B.A.",
    title: "Groom",
    relationPhrase: "of our son",
    avatarBadge: "W",
  },

  bride: {
    fullName: "Syeda Sara Fatima",
    shortName: "Sara",
    degrees: "M.A., B.Ed.",
    title: "Bride",
    connector: "With",
    daughterOfPrefix: "D/O.",
    fatherName: "LATE HZ. ALHAJ SYED AHMED ALI SHAH DHOTI",
    fatherTitle: "(Ex. Sajjada Nasheen Bargah Hz. Murad Shah Dhoti R.A.)",
    lineage: "D/O. LATE HZ. ALHAJ SYED AHMED ALI SHAH DHOTI (Ex. Sajjada Nasheen Bargah Hz. Murad Shah Dhoti R.A.)",
    avatarBadge: "S",
  },

  // Respected Elders & Hosts
  honors: {
    blessings: {
      title: "With the Blessings of Our Respected Parents",
      names: "Mrs. & Mr. Late MOHAMMED ANWAR KHAN",
      distinction: "Well Known Khalifa Hakeem Shahji Biyabani (Rh.)",
    },
    guardianship: {
      title: "Under the Guardianship of",
      name: "MR. ALHAJ SYED SHUJAUDDIN HUSSAINI (SHAMEEM)",
    },
    host: {
      salutation: "Mrs. & Mr.",
      name: "Alhaj Mohammed Samiullah Khan (Jawaid)",
      title: "(Khalifa Hz. Hameeduddin Sharfi Quadri Rh.)",
      invitationIntro: "Solicit your gracious presence on the auspicious occasion of the",
      occasion: "Marriage Ceremony",
      invitationPhrase: "Solicit your gracious presence on the auspicious occasion of the Marriage Ceremony of our son",
    },
    dateHeader: {
      inShaAllah: "In Sha Allah",
      day: "On Friday",
      dateFormatted: "the 23rd of October 2026",
      hijriDate: "(12th Jamadi ul Awwal 1448 Hijri)",
    },
    compliments: "With best compliment From: Near & Dear",
    complimentsObj: {
      title: "With best compliment From:",
      name: "Near & Dear",
    },
  },

  // Events & Venues
  events: [
    {
      id: "nikah",
      type: "Nikah",
      badge: "NIKAH",
      title: "Nikah Ceremony",
      inShaAllah: "In Sha Allah",
      day: "On Friday",
      dateFormatted: "the 23rd of October 2026",
      hijriDate: "(12th Jamadi ul Awwal 1448 Hijri)",
      timing: "NIKAH: After Juma · Namaz-e-Juma 1:30 pm",
      timeLabel: "Namaz-e-Juma 1:30 pm",
      subTiming: "After Juma",
      venueName: "MASJID-E-QUTUB SHAHI",
      venueSubtitle: "(Choti Masjid)",
      locationShort: "Murad Nagar, Hyderabad",
      fullAddress: "MASJID-E-QUTUB SHAHI (Choti Masjid), Murad Nagar, Hyderabad",
      mapsUrl: "https://maps.google.com/?q=Masjid-E-Qutub+Shahi+Murad+Nagar+Hyderabad",
      isoDateTime: "2026-10-23T13:30:00+05:30",
      calendar: {
        title: "Nikah: Mohammed Waqiullah Khan & Syeda Sara Fatima",
        description: "Nikah Ceremony After Juma (Namaz-e-Juma 1:30 pm) at Masjid-e-Qutub Shahi (Choti Masjid), Murad Nagar, Hyderabad.",
        location: "Masjid-e-Qutub Shahi (Choti Masjid), Murad Nagar, Hyderabad",
        startDate: "20261023T080000Z",
        endDate: "20261023T110000Z",
      },
    },
    {
      id: "dinner",
      type: "Dinner",
      badge: "DINNER",
      title: "Dinner Reception",
      inShaAllah: "In Sha Allah",
      day: "On Friday",
      dateFormatted: "the 23rd of October 2026",
      hijriDate: "(12th Jamadi ul Awwal 1448 Hijri)",
      timing: "Dinner: After Isha (9:00 pm)",
      timeLabel: "After Isha (9:00 pm)",
      subTiming: "After Isha",
      venueName: "PERFECT PALACE",
      venueSubtitle: "Pillar No. 89",
      locationShort: "Attapur Road, Ring Road, Hyderabad",
      fullAddress: "PERFECT PALACE, Pillar No. 89, Attapur Road, Ring Road, Hyderabad",
      mapsUrl: "https://maps.google.com/?q=Perfect+Palace+Pillar+89+Attapur+Road+Ring+Road+Hyderabad",
      isoDateTime: "2026-10-23T21:00:00+05:30",
      calendar: {
        title: "Dinner: Marriage Ceremony of Mohammed Waqiullah Khan & Syeda Sara Fatima",
        description: "Dinner After Isha (9:00 pm) at Perfect Palace, Pillar No. 89, Attapur Road, Ring Road, Hyderabad.",
        location: "Perfect Palace, Pillar No. 89, Attapur Road, Ring Road, Hyderabad",
        startDate: "20261023T153000Z",
        endDate: "20261023T190000Z",
      },
    },
  ],

  // Music & Audio (Disabled)
  audio: {
    enabled: false,
    localSrc: null,
    youtubeId: null,
  },

  // WhatsApp & Sharing Config
  whatsapp: {
    rsvpNumber: "919849012345",
    rsvpTemplate: (name, guests, status) => 
      encodeURIComponent(
        `Assalamu Alaikum!\n\n` +
        `This is *${name}*.\n` +
        `RSVP for Marriage Ceremony of Mohammed Waqiullah Khan & Syeda Sara Fatima:\n` +
        `• Attending: *${status ? "Yes, In Sha Allah" : "Unable to attend"}*\n` +
        `• Number of Guests: *${guests}*\n\n` +
        `Barakallahu feekum!`
      ),
    shareMessage: () =>
      encodeURIComponent(
        `✨ *Marriage Ceremony Invitation* ✨\n\n` +
        `In the name of ALLAH the most beneficent & merciful.\n\n` +
        `Solicit your gracious presence on the auspicious occasion of the\n` +
        `*Marriage Ceremony* of our son\n` +
        `*Mohammed Waqiullah Khan* (B.Com., M.B.A.)\n` +
        `With\n` +
        `*Syeda Sara Fatima* (M.A., B.Ed.)\n` +
        `D/O LATE HZ. ALHAJ SYED AHMED ALI SHAH DHOTI\n` +
        `(Ex. Sajjada Nasheen Bargah Hz. Murad Shah Dhoti R.A.)\n\n` +
        `📅 *Date:* Friday, the 23rd of October 2026 (12th Jamadi ul Awwal 1448 Hijri)\n\n` +
        `🕌 *NIKAH:* After Juma (Namaz-e-Juma 1:30 pm)\n` +
        `MASJID-E-QUTUB SHAHI (Choti Masjid), Murad Nagar, Hyderabad\n\n` +
        `🍽️ *Dinner:* After Isha (9:00 pm)\n` +
        `PERFECT PALACE, Pillar No. 89, Attapur Road, Ring Road, Hyderabad\n\n` +
        `With best compliment From: Near & Dear\n\n` +
        `View the invitation here:\n` +
        `${typeof window !== 'undefined' ? window.location.href : 'https://waqiullah-sara.wedding'}`
      ),
  },

  // Navigation Scenes for Dots & Camera Journey
  scenes: [
    { id: "hero", label: "Hero", shortLabel: "Intro", subtitle: "Bismillah" },
    { id: "title", label: "Marriage Ceremony", shortLabel: "Ceremony", subtitle: "Announcement" },
    { id: "families", label: "Respected Elders", shortLabel: "Elders", subtitle: "Blessings" },
    { id: "couple", label: "The Couple", shortLabel: "Couple", subtitle: "Waqiullah & Sara" },
    { id: "events", label: "Ceremonial Program", shortLabel: "Program", subtitle: "Nikah & Dinner" },
    { id: "countdown", label: "Countdown", shortLabel: "Timer", subtitle: "23 Oct 2026" },
    { id: "venue", label: "Venues", shortLabel: "Venues", subtitle: "Locations" },
    { id: "dua", label: "Prophetic Dua", shortLabel: "Dua", subtitle: "Blessings" },
    { id: "finale", label: "Compliments & RSVP", shortLabel: "RSVP", subtitle: "Near & Dear" },
  ],
};

/**
 * Generates an iCalendar (.ics) download for a given event
 */
export function downloadIcsFile(event) {
  const { title, description, location, startDate, endDate } = event.calendar;
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Waqiullah Sara Marriage Ceremony//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    `DTSTART:${startDate}`,
    `DTEND:${endDate}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${event.id}-ceremony-invitation.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Builds Google Calendar web add link
 */
export function getGoogleCalendarUrl(event) {
  const { title, description, location, startDate, endDate } = event.calendar;
  const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  return `${baseUrl}&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;
}
