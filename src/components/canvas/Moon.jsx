import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * 3D Glowing Crescent Moon (Hilal)
 * Procedurally constructed from 2 intersecting circle arcs, extruded with beveled edges,
 * with a high-metallic PBR surface and emissive warm rim.
 * Clicking/tapping triggers an easter egg sparkle flare!
 */
export const Moon = ({ onSparkleBurst }) => {
  const meshRef = useRef();
  const glowRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [pulse, setPulse] = useState(0);

  // Generate 2D Crescent Shape
  const crescentShape = useMemo(() => {
    const shape = new THREE.Shape();
    const R = 2.4; // Outer radius
    const r = 2.1; // Inner radius
    const d = 0.9; // Offset of inner circle

    // Outer circle arc (from -angle to +angle)
    const segments = 48;
    for (let i = 0; i <= segments; i++) {
      const theta = -Math.PI * 0.75 + (i / segments) * (Math.PI * 1.5);
      const x = Math.cos(theta) * R;
      const y = Math.sin(theta) * R;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }

    // Inner circle arc returning back
    for (let i = segments; i >= 0; i--) {
      const theta = -Math.PI * 0.65 + (i / segments) * (Math.PI * 1.3);
      const x = Math.cos(theta) * r + d;
      const y = Math.sin(theta) * r;
      shape.lineTo(x, y);
    }

    shape.closePath();
    return shape;
  }, []);

  const extrudeSettings = useMemo(() => ({
    depth: 0.35,
    bevelEnabled: true,
    bevelSegments: 4,
    steps: 1,
    bevelSize: 0.08,
    bevelThickness: 0.08,
  }), []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    // Gentle royal float
    meshRef.current.position.y = 8 + Math.sin(time * 0.7) * 0.25;
    meshRef.current.position.x = -6 + Math.cos(time * 0.5) * 0.15;
    meshRef.current.rotation.z = -0.25 + Math.sin(time * 0.4) * 0.04;

    // Pulse decay
    if (pulse > 0) {
      setPulse((prev) => Math.max(0, prev - delta * 2));
    }
    if (glowRef.current) {
      glowRef.current.intensity = 2.5 + Math.sin(time * 2) * 0.5 + pulse * 4;
    }
  });

  const handleClick = (e) => {
    e.stopPropagation();
    setPulse(1);
    if (onSparkleBurst) onSparkleBurst(meshRef.current.position);
  };

  return (
    <group position={[-6, 8, -12]}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        onClick={handleClick}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
        scale={isHovered ? 1.05 : 1}
      >
        <extrudeGeometry args={[crescentShape, extrudeSettings]} />
        <meshPhysicalMaterial
          color="#FFF8E7"
          emissive="#D4AF37"
          emissiveIntensity={isHovered ? 1.2 : 0.6 + pulse * 1.5}
          metalness={0.9}
          roughness={0.2}
          clearcoat={0.6}
          clearcoatRoughness={0.1}
          reflectivity={1}
        />
      </mesh>

      {/* Warm Golden Moon Point Light */}
      <pointLight
        ref={glowRef}
        color="#F5E6A8"
        intensity={3.5}
        distance={25}
        decay={2}
      />
    </group>
  );
};
