# Mohammed Waqiullah Khan & Syeda Sara Fatima — Wedding Invitation

A bespoke, cinematic, editorial luxury Muslim wedding invitation website crafted with **React**, **Vite**, **Tailwind CSS v3**, and **Framer Motion**.

---

## ✨ Features & Structure

1. **Cinematic Hero Opening**
   - Elegant Arabic **Bismillah Calligraphy** (*بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ*) with English translation.
   - Symmetrical Islamic ornamental filigrees and gold border frame.
   - “With the blessings of our families”.
   - Couple's names revealed with a graceful blur-to-focus and fade-up animation:
     - **Mohammed Waqiullah Khan**
     - **&** (romantic script)
     - **Syeda Sara Fatima**
   - Wedding Date: **Friday, 23 October 2026** · Location: **Hyderabad, India**.
   - Parallax scrolling and minimal animated scroll indicator.

2. **Invitation Section**
   - Symmetrical Islamic floral arabesques and rosette medallion.
   - Sacred Qur’anic Verse: *“And We created you in pairs.” — Qur’an 78:8 (وَخَلَقْنَاكُمْ أَزْوَاجًا)*.
   - Editorial invitation message with generous whitespace and gold dividers.
   - Traditional family honor card preserving the respected names and lineage from the physical wedding card:
     - Respected Grandparents: **Mrs. & Mr. Late Mohammed Anwar Khan** *(Well Known Khalifa Hakeem Shahji Biyabani Rh.)*
     - Guardianship: **Mr. Alhaj Syed Shujauddin Hussaini (Shameem)**
     - Groom's Parents: **Mrs. & Mr. Alhaj Mohammed Samiullah Khan (Jawaid)** *(Khalifa Hz. Hameeduddin Sharfi Quadri Rh.)*
     - Bride's Revered Father: **Late Hz. Alhaj Syed Ahmed Ali Shah Dhoti** *(Ex. Sajjada Nasheen Bargah Hz. Murad Shah Dhoti R.A.)*
     - Academic distinctions: *B.Com., M.B.A.* & *M.A., B.Ed.*

3. **Wedding Date & Real-Time Countdown**
   - Friday, 23 October 2026 · 12th Jamadi ul Awwal 1448 Hijri.
   - Live countdown timer updating every second, synchronized to **Hyderabad Local Time (IST, UTC+5:30)**.
   - Instant **Google Calendar** integration and downloadable **Apple / Outlook (`.ics`)** calendar event file.

4. **Wedding Events & Venues**
   - **Event 1: The Nikah Ceremony**
     - Friday, 23 October 2026
     - After Namaz-e-Juma · 1:30 PM
     - **Masjid-e-Qutub Shahi (Choti Masjid)**, Murad Nagar, Hyderabad
   - **Event 2: The Wedding Dinner (Walima Reception)**
     - Friday, 23 October 2026
     - After Namaz-e-Isha · 9:00 PM
     - **Perfect Palace**, Pillar No. 89, Attapur Road, Ring Road, Hyderabad
   - Direct Google Maps navigation links and one-click "Copy Address" buttons with clipboard feedback.

5. **Romantic Closing & Duas**
   - Soft champagne aesthetic with ornamental rosettes.
   - “Your presence is our greatest gift.”
   - “Please keep us in your duas as we begin this beautiful journey.”
   - Handwritten signature in romantic *Great Vibes* script: **Waqiullah & Sara**.
   - Interactive **“Send Duas & Blessings”** button with celebratory gold & emerald confetti shower.
   - “With best compliments From: Near & Dear”.

6. **Floating Background Music Player**
   - Fixed top-right audio pill with Lucide volume & music icons.
   - Visualizer soundbars animate when playing.
   - References `/wedding-music.mp3` with polite, non-blocking notification if the file hasn't been added yet.
   - No autoplay (respects browser media engagement policies and accessibility).

7. **Floating Gold Dust Particle Atmosphere**
   - Lightweight HTML5 Canvas particle system simulating gentle floating golden embers.
   - Fully optimized, throttled, and respects `prefers-reduced-motion`.

---

## 🎨 Color Palette & Typography

- **Warm Ivory**: `#F8F3E9` (Backgrounds & Soft Card Surfaces)
- **Deep Forest Green**: `#243B2B` & `#1A2C20` (Text, Primary Accents, Gradient Depths)
- **Antique Gold**: `#B89A61` & `#D4B87F` (Borders, Medallions, Highlights)
- **Soft Champagne**: `#E9E0CF` & `#F7F3EB` (Cards, Badges, Secondary Accents)
- **Typography**:
  - **Cormorant Garamond**: Headings & editorial titles
  - **Great Vibes**: Romantic handwritten names & accents
  - **DM Sans**: Clean modern body text & UI labels
  - **Amiri**: Arabic calligraphy for Bismillah & Qur'anic verse

---

## 🎵 How to Add Your Background Music

To activate the background music:
1. Choose your preferred instrumental / wedding audio file (MP3 format).
2. Rename it to `wedding-music.mp3`.
3. Drop it into the `public/` folder of this project:
   ```
   Waqi-Website/
   ├── public/
   │   ├── favicon.svg
   │   └── wedding-music.mp3   <-- place file here
   ```
4. Reload the page and click the floating **"Play Music"** button in the top-right corner.

---

## 🚀 Running Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your web browser.

3. **Build for production**:
   ```bash
   npm run build
   ```
   The production files will be output to the `dist/` directory, ready to deploy to Netlify, Vercel, or GitHub Pages.
