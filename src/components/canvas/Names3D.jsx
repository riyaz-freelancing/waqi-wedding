import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

/**
 * 3D Metallic Golden Typography with Light-Sweep Shimmer
 * Positioned in front of the rotating Mandala (Scene 2).
 */
export const Names3D = ({ position = [0, 2.5, -8.2] }) => {
  const sweepLightRef = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Specular light-sweep across the letters
    if (sweepLightRef.current) {
      sweepLightRef.current.position.x = Math.sin(time * 1.2) * 5.5;
      sweepLightRef.current.position.y = 2.5 + Math.cos(time * 1.2) * 0.8;
    }

    // Subtle breathing float
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(time * 1.0) * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Light-Sweep Point Light for Shimmer Effect */}
      <pointLight
        ref={sweepLightRef}
        color="#FFF8E7"
        intensity={4}
        distance={6}
        decay={2}
      />

      {/* "Marriage Ceremony" Pill Badge in 3D */}
      <group position={[0, 1.8, 0]}>
        <Text
          fontSize={0.28}
          font="https://fonts.gstatic.com/s/cinzel/v20/8vIJ7ww63mVu7gt79HzveM4.woff"
          color="#D4AF37"
          letterSpacing={0.22}
          anchorX="center"
          anchorY="middle"
        >
          MARRIAGE CEREMONY
        </Text>
      </group>

      {/* Groom: Mohammed Waqiullah Khan */}
      <group position={[0, 1.0, 0]}>
        <Text
          fontSize={0.62}
          font="https://fonts.gstatic.com/s/cormorantgaramond/v19/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYpHtK.woff"
          color="#FFF8E7"
          letterSpacing={0.06}
          anchorX="center"
          anchorY="middle"
        >
          Mohammed Waqiullah Khan
          <meshStandardMaterial
            color="#FFF4D0"
            metalness={0.9}
            roughness={0.22}
            envMapIntensity={2.0}
          />
        </Text>
        <Text
          position={[0, -0.42, 0]}
          fontSize={0.2}
          color="#D4AF37"
          letterSpacing={0.15}
          anchorX="center"
          anchorY="middle"
        >
          B.Com., M.B.A.
        </Text>
      </group>

      {/* "With" script joiner */}
      <group position={[0, 0.05, 0]}>
        <Text
          fontSize={0.38}
          color="#F5E6A8"
          anchorX="center"
          anchorY="middle"
        >
          With
        </Text>
      </group>

      {/* Bride: Syeda Sara Fatima */}
      <group position={[0, -0.85, 0]}>
        <Text
          fontSize={0.62}
          font="https://fonts.gstatic.com/s/cormorantgaramond/v19/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYpHtK.woff"
          color="#FFF8E7"
          letterSpacing={0.06}
          anchorX="center"
          anchorY="middle"
        >
          Syeda Sara Fatima
          <meshStandardMaterial
            color="#FFF4D0"
            metalness={0.9}
            roughness={0.22}
            envMapIntensity={2.0}
          />
        </Text>
        <Text
          position={[0, -0.42, 0]}
          fontSize={0.2}
          color="#D4AF37"
          letterSpacing={0.15}
          anchorX="center"
          anchorY="middle"
        >
          M.A., B.Ed.
        </Text>
      </group>
    </group>
  );
};
