import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars as DreiStars } from '@react-three/drei';

/**
 * 3D Night Sky with Starlight & Slow-Drifting Mist
 */
export const Stars = ({ isMobile = false }) => {
  const mistRef = useRef();

  useFrame((state) => {
    if (mistRef.current) {
      mistRef.current.rotation.z = state.clock.getElapsedTime() * 0.015;
    }
  });

  return (
    <group>
      {/* Drei Stars Field */}
      <DreiStars
        radius={70}
        depth={60}
        count={isMobile ? 1200 : 3500}
        factor={5}
        saturation={0.4}
        fade
        speed={1.0}
      />

      {/* Gentle Distant Mist Aura */}
      <group ref={mistRef} position={[0, 10, -25]}>
        <mesh>
          <planeGeometry args={[90, 40]} />
          <meshBasicMaterial
            color="#081F19"
            transparent
            opacity={0.35}
            depthWrite={false}
          />
        </mesh>
      </group>
    </group>
  );
};
