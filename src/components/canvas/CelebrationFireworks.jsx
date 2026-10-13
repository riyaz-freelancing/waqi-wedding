import React, { useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * 3D Golden Firework / Sparkle Burst System
 * Exposed via ref with `burst(position, count)` method.
 */
export const CelebrationFireworks = forwardRef((props, ref) => {
  const [particles, setParticles] = useState([]);
  const pointsRef = useRef();

  useImperativeHandle(ref, () => ({
    burst(pos = [0, 3, -32], particleCount = 80) {
      const newBatch = [];
      const origin = Array.isArray(pos) ? pos : [pos.x, pos.y, pos.z];

      for (let i = 0; i < particleCount; i++) {
        // Random spherical explosion vector
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const speed = 2.0 + Math.random() * 5.0;

        newBatch.push({
          x: origin[0],
          y: origin[1],
          z: origin[2],
          vx: Math.sin(phi) * Math.cos(theta) * speed,
          vy: Math.sin(phi) * Math.sin(theta) * speed,
          vz: Math.cos(phi) * speed,
          life: 1.0,
          decay: 0.6 + Math.random() * 0.5,
        });
      }

      setParticles((prev) => [...prev.slice(-120), ...newBatch]);
    },
  }));

  useFrame((_, delta) => {
    if (particles.length === 0) return;

    setParticles((prev) =>
      prev
        .map((p) => ({
          ...p,
          x: p.x + p.vx * delta,
          y: p.y + p.vy * delta - 1.8 * delta, // gravity
          z: p.z + p.vz * delta,
          life: p.life - p.decay * delta,
        }))
        .filter((p) => p.life > 0)
    );
  });

  if (particles.length === 0) return null;

  const positions = new Float32Array(particles.length * 3);
  particles.forEach((p, i) => {
    positions[i * 3 + 0] = p.x;
    positions[i * 3 + 1] = p.y;
    positions[i * 3 + 2] = p.z;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.28}
        color="#FFF4D0"
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
});
