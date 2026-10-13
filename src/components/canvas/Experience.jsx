import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerformanceMonitor } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

import { CameraRig } from './CameraRig';
import { Gate } from './Gate';
import { Moon } from './Moon';
import { Stars } from './Stars';
import { Lanterns } from './Lanterns';
import { Mandala } from './Mandala';
import { Names3D } from './Names3D';
import { FloatingArchFrames } from './FloatingArchFrames';
import { PalaceSilhouette } from './PalaceSilhouette';
import { ReflectiveFloor } from './ReflectiveFloor';
import { Particles } from './Particles';
import { CelebrationFireworks } from './CelebrationFireworks';

/**
 * Main 3D Experience (WebGL Scene)
 */
export const Experience = ({
  scrollProgress = 0,
  isGateOpen = false,
  gateOpenTransition = 0,
  onToggleGate,
  onSceneBurstTrigger,
  fireworksRef,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [enableEffects, setEnableEffects] = useState(true);
  const [isLowPower, setIsLowPower] = useState(false);

  // Detect mobile & hardware capabilities
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) {
        setIsLowPower(true);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSparkleBurst = (pos) => {
    if (fireworksRef?.current) {
      fireworksRef.current.burst(pos || [0, 4, -15], 60);
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-auto z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 1.2, 7.8], fov: isMobile ? 55 : 45, near: 0.1, far: 80 }}
        dpr={isMobile ? [1, 1.3] : [1, 1.8]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.15,
        }}
        shadows={!isLowPower}
      >
        <PerformanceMonitor
          onDecline={() => {
            setEnableEffects(false);
            setIsLowPower(true);
          }}
        />

        {/* Deep Obsidian Noir Fog */}
        <color attach="background" args={['#040406']} />
        <fogExp2 attach="fog" args={['#060609', 0.038]} />

        {/* 24K Gold & Obsidian Noir Lighting Rig */}
        <ambientLight intensity={0.45} color="#2A2416" />
        <directionalLight
          position={[-6, 12, 10]}
          intensity={1.3}
          color="#FFF5D6"
          castShadow={!isLowPower}
        />
        <directionalLight
          position={[6, 8, -5]}
          intensity={0.55}
          color="#D4AF37"
        />

        {/* Drei HDRI Environment (Night preset for luxury reflections) */}
        <Environment preset="night" environmentIntensity={0.8} />

        <Suspense fallback={null}>
          {/* Camera Rig driven by Scroll */}
          <CameraRig
            scrollProgress={scrollProgress}
            isGateOpen={isGateOpen}
            gateOpenTransition={gateOpenTransition}
          />

          {/* Grand 3D Mughal Gate */}
          <Gate isOpen={isGateOpen} onToggleOpen={onToggleGate} />

          {/* 3D Glowing Crescent Moon */}
          <Moon onSparkleBurst={handleSparkleBurst} />

          {/* 3D Night Sky & Stars */}
          <Stars isMobile={isMobile} />

          {/* 10 Hanging Fanoos Lanterns */}
          <Lanterns count={isMobile ? 6 : 10} />

          {/* Layered Rotating Khatim Mandala Disc */}
          <Mandala />

          {/* 3D Golden Names with Light-Sweep */}
          <Names3D />

          {/* 3D Floating Couple Arch Frames */}
          <FloatingArchFrames />

          {/* Palace Silhouette on Horizon */}
          <PalaceSilhouette />

          {/* Reflective Dark Marble Floor */}
          <ReflectiveFloor isHighEnd={!isLowPower && !isMobile} />

          {/* Ambient Floating Gold Dust */}
          <Particles isMobile={isMobile} />

          {/* Interactive Fireworks & Burst Particle System */}
          <CelebrationFireworks ref={fireworksRef} />

          {/* Postprocessing Bloom & Vignette for Royal Metallic Sheen */}
          {enableEffects && !isLowPower && (
            <EffectComposer multisampling={0}>
              <Bloom
                luminanceThreshold={0.55}
                luminanceSmoothing={0.7}
                intensity={1.2}
                mipmapBlur
              />
              <Vignette eskil={false} offset={0.15} darkness={0.8} />
            </EffectComposer>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};
