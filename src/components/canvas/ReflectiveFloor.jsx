import React from 'react';
import { MeshReflectorMaterial } from '@react-three/drei';

/**
 * Reflective Polished Dark Marble / Water Floor
 * Positioned across the ground for the Venue & Finale scenes.
 * High-end devices get MeshReflectorMaterial; lower-end get optimized PBR fallback.
 */
export const ReflectiveFloor = ({
  position = [0, -2.5, -28],
  isHighEnd = true,
}) => {
  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[60, 50]} />
      {isHighEnd ? (
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={512}
          mixBlur={1}
          mixStrength={1.8}
          roughness={0.22}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050508"
          metalness={0.85}
          mirror={0.5}
        />
      ) : (
        <meshStandardMaterial
          color="#050508"
          metalness={0.7}
          roughness={0.3}
        />
      )}
    </mesh>
  );
};
