import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Gold Dust Sparkles & Floating Royal Embers
 */
export const Particles = ({ isMobile = false }) => {
  const pointsRef = useRef();

  // Custom drifting gold embers
  const count = isMobile ? 60 : 180;
  const { positions, randomSpeeds } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 22; // X
      pos[i * 3 + 1] = Math.random() * 16 - 2;      // Y
      pos[i * 3 + 2] = -Math.random() * 45 + 5;     // Z (spanning the journey)
      speeds[i] = 0.2 + Math.random() * 0.5;
    }
    return { positions: pos, randomSpeeds: speeds };
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes.position;
    const array = posAttr.array;

    for (let i = 0; i < count; i++) {
      // Drift upwards
      array[i * 3 + 1] += randomSpeeds[i] * delta;
      // Gentle horizontal sway
      array[i * 3 + 0] += Math.sin(state.clock.getElapsedTime() + i) * 0.005;

      // Wrap back down when rising too high
      if (array[i * 3 + 1] > 14) {
        array[i * 3 + 1] = -2;
      }
    }
    posAttr.needsUpdate = true;
  });

  return (
    <group>
      {/* Drei Sparkles for high-fidelity twinkle */}
      <Sparkles
        count={isMobile ? 70 : 220}
        scale={[24, 18, 50]}
        position={[0, 4, -20]}
        size={isMobile ? 2.5 : 4.0}
        speed={0.5}
        opacity={0.8}
        color="#F5E6A8"
      />

      {/* Custom Drifting Golden Embers */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.16}
          color="#D4AF37"
          transparent
          opacity={0.75}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
};
