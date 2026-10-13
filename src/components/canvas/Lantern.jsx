import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * 3D Royal Islamic Fanoos Lantern
 * Constructed with custom lathe/cylinder geometries, ornate brass caps,
 * translucent glowing inner core, and an integrated warm point light.
 */
export const Lantern = ({
  position = [0, 0, 0],
  scale = 1,
  speed = 1.2,
  phase = 0,
  chainLength = 4,
}) => {
  const groupRef = useRef();
  const lightRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [flare, setFlare] = useState(0);

  // Lathe points for classic Islamic Fanoos silhouette
  const lathePoints = useMemo(() => {
    const points = [];
    // Top finial
    points.push(new THREE.Vector2(0, 1.8));
    points.push(new THREE.Vector2(0.12, 1.6));
    points.push(new THREE.Vector2(0.08, 1.45));
    // Dome cap
    points.push(new THREE.Vector2(0.45, 1.2));
    points.push(new THREE.Vector2(0.55, 1.0));
    // Mid cage waist (widest section)
    points.push(new THREE.Vector2(0.65, 0.4));
    points.push(new THREE.Vector2(0.45, -0.6));
    // Bottom tray & finial
    points.push(new THREE.Vector2(0.35, -0.8));
    points.push(new THREE.Vector2(0.1, -1.1));
    points.push(new THREE.Vector2(0, -1.3));
    return points;
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Natural pendulum oscillation
    const currentSwing = 0.08 + flare * 0.25;
    groupRef.current.rotation.z = Math.sin(time * speed + phase) * currentSwing;
    groupRef.current.rotation.x = Math.cos(time * speed * 0.85 + phase) * (currentSwing * 0.6);

    // Smooth decay of flare boost
    if (flare > 0) {
      setFlare((prev) => Math.max(0, prev - delta * 1.5));
    }

    // Dynamic light intensity
    if (lightRef.current) {
      const baseIntensity = 1.8 + Math.sin(time * 3 + phase) * 0.25;
      lightRef.current.intensity = baseIntensity + flare * 4 + (isHovered ? 1.5 : 0);
    }
  });

  const handlePointerDown = (e) => {
    e.stopPropagation();
    setFlare(1.2);
  };

  return (
    <group position={position} scale={scale}>
      {/* Hanging Chain / Cord */}
      <mesh position={[0, chainLength / 2 + 1.8, 0]}>
        <cylinderGeometry args={[0.015, 0.015, chainLength, 8]} />
        <meshStandardMaterial color="#A98A45" metalness={0.9} roughness={0.3} />
      </mesh>

      {/* Swaying Lantern Body */}
      <group
        ref={groupRef}
        onClick={handlePointerDown}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
      >
        {/* Brass Cage Outer Silhouette */}
        <mesh castShadow receiveShadow>
          <latheGeometry args={[lathePoints, 8]} />
          <meshStandardMaterial
            color="#D4AF37"
            metalness={0.95}
            roughness={0.25}
            wireframe={false}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Inner Translucent Glowing Glass Core */}
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.38, 0.28, 1.3, 8]} />
          <meshPhysicalMaterial
            color="#FFF4D0"
            emissive="#FFB732"
            emissiveIntensity={isHovered ? 3.5 : 2.0 + flare * 3}
            transparent
            opacity={0.88}
            roughness={0.2}
            transmission={0.4}
            thickness={0.5}
          />
        </mesh>

        {/* Inner Point Light for Bloom & Scene Illumination */}
        <pointLight
          ref={lightRef}
          color="#FFD680"
          intensity={2.2}
          distance={7}
          decay={2}
        />
      </group>
    </group>
  );
};
