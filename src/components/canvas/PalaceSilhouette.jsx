import React, { useMemo } from 'react';
import * as THREE from 'three';

/**
 * Procedural Islamic Palace Silhouette
 * Constructed from 3D primitives: Onion Domes, Minarets with balconies, and Arcaded Porticos.
 * Lit warmly with upward spotlights on the horizon for the Venue & Finale scenes.
 */
export const PalaceSilhouette = ({ position = [0, -2.5, -42], scale = 1.3 }) => {
  // Lathe points for Onion Dome
  const domePoints = useMemo(() => {
    const pts = [];
    pts.push(new THREE.Vector2(0, 3.2));
    pts.push(new THREE.Vector2(0.15, 3.0));
    pts.push(new THREE.Vector2(0.65, 2.5));
    pts.push(new THREE.Vector2(1.5, 1.8));
    pts.push(new THREE.Vector2(1.8, 1.1));
    pts.push(new THREE.Vector2(1.6, 0.4));
    pts.push(new THREE.Vector2(1.4, 0));
    return pts;
  }, []);

  return (
    <group position={position} scale={scale}>
      {/* Warm Uplighting for Palace Silhouette */}
      <spotLight
        position={[0, 0.5, 4]}
        target-position={[0, 6, 0]}
        color="#F5E6A8"
        intensity={6}
        angle={Math.PI / 2.5}
        penumbra={0.8}
        distance={30}
      />
      <pointLight position={[-10, 4, 2]} color="#D4AF37" intensity={3} distance={15} />
      <pointLight position={[10, 4, 2]} color="#D4AF37" intensity={3} distance={15} />

      {/* Main Palace Wall Base */}
      <mesh position={[0, 2.5, 0]}>
        <boxGeometry args={[34, 5, 2]} />
        <meshStandardMaterial color="#0C0C12" roughness={0.6} metalness={0.4} />
      </mesh>

      {/* Central Grand Onion Dome */}
      <group position={[0, 5, 0]}>
        {/* Dome Drum */}
        <mesh position={[0, 0.8, 0]}>
          <cylinderGeometry args={[2.0, 2.0, 1.6, 24]} />
          <meshStandardMaterial color="#111118" roughness={0.4} metalness={0.7} />
        </mesh>
        {/* Lathe Dome */}
        <mesh position={[0, 1.6, 0]}>
          <latheGeometry args={[domePoints, 24]} />
          <meshPhysicalMaterial
            color="#181824"
            emissive="#3A2E0F"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.3}
          />
        </mesh>
        {/* Golden Finial S spire */}
        <mesh position={[0, 5.0, 0]}>
          <cylinderGeometry args={[0.04, 0.1, 1.2, 12]} />
          <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.2} />
        </mesh>
        {/* Spire Crescent */}
        <mesh position={[0, 5.7, 0]} scale={0.25}>
          <torusGeometry args={[0.8, 0.15, 12, 32, Math.PI * 1.5]} />
          <meshStandardMaterial color="#FFF8E7" metalness={1} roughness={0.2} />
        </mesh>
      </group>

      {/* Flanking Medium Domes */}
      {[-6.5, 6.5].map((x, i) => (
        <group key={`dome-${i}`} position={[x, 5, 0]} scale={0.65}>
          <mesh position={[0, 0.8, 0]}>
            <cylinderGeometry args={[1.8, 1.8, 1.4, 20]} />
            <meshStandardMaterial color="#111118" roughness={0.5} metalness={0.6} />
          </mesh>
          <mesh position={[0, 1.5, 0]}>
            <latheGeometry args={[domePoints, 20]} />
            <meshPhysicalMaterial
              color="#181824"
              emissive="#3A2E0F"
              emissiveIntensity={0.25}
              metalness={0.8}
              roughness={0.35}
            />
          </mesh>
          <mesh position={[0, 5.0, 0]}>
            <cylinderGeometry args={[0.04, 0.08, 1.0, 12]} />
            <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.2} />
          </mesh>
        </group>
      ))}

      {/* 4 Majestic Minarets */}
      {[-13, -7.5, 7.5, 13].map((x, i) => {
        const height = Math.abs(x) > 10 ? 15 : 12.5;
        return (
          <group key={`minaret-${i}`} position={[x, 0, 0]}>
            {/* Tapered Shaft */}
            <mesh position={[0, height / 2, 0]}>
              <cylinderGeometry args={[0.55, 0.75, height, 16]} />
              <meshStandardMaterial color="#111118" roughness={0.4} metalness={0.6} />
            </mesh>
            {/* Mid Balcony (Sharfa) */}
            <mesh position={[0, height * 0.65, 0]}>
              <cylinderGeometry args={[0.85, 0.65, 0.4, 16]} />
              <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.25} />
            </mesh>
            {/* Upper Balcony */}
            <mesh position={[0, height, 0]}>
              <cylinderGeometry args={[0.95, 0.7, 0.5, 16]} />
              <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.25} />
            </mesh>
            {/* Minaret Dome & Spire */}
            <mesh position={[0, height + 0.9, 0]}>
              <coneGeometry args={[0.6, 1.4, 16]} />
              <meshStandardMaterial color="#181824" metalness={0.8} roughness={0.3} />
            </mesh>
            <mesh position={[0, height + 1.8, 0]}>
              <cylinderGeometry args={[0.03, 0.06, 0.8, 8]} />
              <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.2} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};
