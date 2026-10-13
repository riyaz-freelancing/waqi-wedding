import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';

import { Experience } from './components/canvas/Experience';
import { Loader } from './components/overlay/Loader';
import { HeroOverlay } from './components/overlay/HeroOverlay';
import { TitleOverlay } from './components/overlay/TitleOverlay';
import { FamilyOverlay } from './components/overlay/FamilyOverlay';
import { CoupleOverlay } from './components/overlay/CoupleOverlay';
import { EventsOverlay } from './components/overlay/EventsOverlay';
import { CountdownOverlay } from './components/overlay/CountdownOverlay';
import { VenueOverlay } from './components/overlay/VenueOverlay';
import { DuaOverlay } from './components/overlay/DuaOverlay';
import { FinaleOverlay } from './components/overlay/FinaleOverlay';
import { NavigationDock } from './components/overlay/NavigationDock';
import { CursorGlow } from './components/overlay/CursorGlow';
import { Fallback2D } from './components/overlay/Fallback2D';

export function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Gate Interaction State
  const [isGateOpen, setIsGateOpen] = useState(false);
  const [gateOpenTransition, setGateOpenTransition] = useState(0);

  // Scroll Progress (0.0 to 1.0)
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);

  const fireworksRef = useRef(null);
  const lenisRef = useRef(null);
  const sceneRefs = useRef([]);

  // Check WebGL support & Reduced Motion preference
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch (_) {
      setHasWebGL(false);
    }

    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mq.matches);
    }

    // Artificial grace period for assets to settle
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (!hasWebGL || prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? Math.max(0, Math.min(1, window.scrollY / totalScroll)) : 0;
      setScrollProgress(progress);

      const sceneIndex = Math.min(8, Math.floor(progress * 8.99));
      setActiveSceneIndex(sceneIndex);
    };

    lenis.on('scroll', handleScroll);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
    };
  }, [hasWebGL, prefersReducedMotion]);

  // Handle Gate Opening Transition
  const handleOpenGate = () => {
    setIsGateOpen(true);

    // Trigger golden celebration burst at the gate entrance
    if (fireworksRef.current) {
      fireworksRef.current.burst([0, 2.5, 0], 90);
    }

    // Animate gateOpenTransition from 0 to 1
    let start = null;
    const duration = 1800;
    const animateGate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const t = Math.min(1, elapsed / duration);
      setGateOpenTransition(t);
      if (t < 1) {
        requestAnimationFrame(animateGate);
      } else {
        // Smoothly glide camera into Scene 2
        if (lenisRef.current && sceneRefs.current[1]) {
          lenisRef.current.scrollTo(sceneRefs.current[1], { offset: 0, duration: 2.2 });
        }
      }
    };
    requestAnimationFrame(animateGate);
  };

  const handleSelectScene = (index) => {
    // If gate is not opened and jumping beyond hero, open it first
    if (!isGateOpen && index > 0) {
      setIsGateOpen(true);
    }

    const targetEl = sceneRefs.current[index];
    if (targetEl && lenisRef.current) {
      lenisRef.current.scrollTo(targetEl, { duration: 1.8 });
    } else if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFinaleBurst = () => {
    if (fireworksRef.current) {
      fireworksRef.current.burst([0, 4, -38], 120);
    }
  };

  // If 2D Fallback requested
  if (!hasWebGL || prefersReducedMotion) {
    return <Fallback2D />;
  }

  return (
    <div className="relative min-h-screen bg-[#040406] text-ivory selection:bg-gold/30 selection:text-[#FFFDF9] overflow-x-hidden">
      {/* 1. Gold Crescent Suspense Loader with Live Percentage */}
      <Loader isLoaded={isLoaded} />

      {/* 2. Desktop Cursor Glow Trail */}
      <CursorGlow />

      {/* 3. Floating Navigation Dock & Progress Bar */}
      <NavigationDock
        scrollProgress={scrollProgress}
        activeSceneIndex={activeSceneIndex}
        onSelectScene={handleSelectScene}
      />

      {/* 5. Master 3D WebGL Canvas Experience (Fixed in Background) */}
      <Experience
        scrollProgress={scrollProgress}
        isGateOpen={isGateOpen}
        gateOpenTransition={gateOpenTransition}
        onToggleGate={handleOpenGate}
        fireworksRef={fireworksRef}
      />

      {/* 6. Semantic Scrollable HTML Overlay Sections (9 Scenes) */}
      <main className="relative z-10 w-full">
        {/* Scene 1: Hero & Grand Gate Intro */}
        <div ref={(el) => (sceneRefs.current[0] = el)} id="scene-hero">
          <HeroOverlay isGateOpen={isGateOpen} onOpenGate={handleOpenGate} />
        </div>

        {/* Scene 2: Title & 3D Names */}
        <div ref={(el) => (sceneRefs.current[1] = el)} id="scene-title">
          <TitleOverlay />
        </div>

        {/* Scene 3: Respected Elders & Lineage */}
        <div ref={(el) => (sceneRefs.current[2] = el)} id="scene-families">
          <FamilyOverlay />
        </div>

        {/* Scene 4: The Couple & Floating 3D Arch Frames */}
        <div ref={(el) => (sceneRefs.current[3] = el)} id="scene-couple">
          <CoupleOverlay />
        </div>

        {/* Scene 5: Sacred Ceremonies (Nikah & Dinner) */}
        <div ref={(el) => (sceneRefs.current[4] = el)} id="scene-events">
          <EventsOverlay />
        </div>

        {/* Scene 6: 3D Flip Countdown */}
        <div ref={(el) => (sceneRefs.current[5] = el)} id="scene-countdown">
          <CountdownOverlay />
        </div>

        {/* Scene 7: Venues & Google Maps Modal */}
        <div ref={(el) => (sceneRefs.current[6] = el)} id="scene-venue">
          <VenueOverlay />
        </div>

        {/* Scene 8: Prophetic Dua under Moon & Stars */}
        <div ref={(el) => (sceneRefs.current[7] = el)} id="scene-dua">
          <DuaOverlay />
        </div>

        {/* Scene 9: Finale & WhatsApp RSVP */}
        <div ref={(el) => (sceneRefs.current[8] = el)} id="scene-finale">
          <FinaleOverlay onFireworkBurst={handleFinaleBurst} />
        </div>
      </main>
    </div>
  );
}

export default App;
