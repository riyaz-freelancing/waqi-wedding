import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Creates an N-pointed regular star shape
 */
function createStarShape(points, outerRadius, innerRadius) {
  const shape = new THREE.Shape();
  const step = Math.PI / points;

  for (let i = 0; i < 2 * points; i++) {
    const r = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = i * step - Math.PI / 2;
    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();
  return shape;
}

/**
 * Creates a circular ring with cutouts
 */
function createRingShape(outerR, innerR) {
  const shape = new THREE.Shape();
  shape.absarc(0, 0, outerR, 0, Math.PI * 2, false);
  const hole = new THREE.Path();
  hole.absarc(0, 0, innerR, 0, Math.PI * 2, true);
  shape.holes.push(hole);
  return shape;
}

export const Mandala = ({ position = [0, 2.5, -9], scale = 1.3 }) => {
  const layer1Ref = useRef();
  const layer2Ref = useRef();
  const layer3Ref = useRef();

  // Outer 16-pointed star
  const star16Shape = useMemo(() => createStarShape(16, 4.2, 3.4), []);
  // Middle 8-pointed star
  const star8Shape = useMemo(() => createStarShape(8, 2.8, 1.9), []);
  // Concentric Rings
  const outerRingShape = useMemo(() => createRingShape(4.5, 4.3), []);
  const midRingShape = useMemo(() => createRingShape(3.1, 2.95), []);

  const extrudeSettings = useMemo(() => ({
    depth: 0.08,
    bevelEnabled: true,
    bevelSegments: 2,
    bevelSize: 0.03,
    bevelThickness: 0.03,
  }), []);

  useFrame((_, delta) => {
    if (layer1Ref.current) layer1Ref.current.rotation.z += delta * 0.03;
    if (layer2Ref.current) layer2Ref.current.rotation.z -= delta * 0.05;
    if (layer3Ref.current) layer3Ref.current.rotation.z += delta * 0.07;
  });

  return (
    <group position={position} scale={scale}>
      {/* LAYER 1: Outer 16-pointed star & Rim (z = -0.2) */}
      <group ref={layer1Ref} position={[0, 0, -0.2]}>
        <mesh castShadow receiveShadow>
          <extrudeGeometry args={[star16Shape, extrudeSettings]} />
          <meshPhysicalMaterial
            color="#D4AF37"
            metalness={0.95}
            roughness={0.24}
            clearcoat={0.5}
            envMapIntensity={1.8}
          />
        </mesh>
        <mesh position={[0, 0, 0.04]}>
          <extrudeGeometry args={[outerRingShape, extrudeSettings]} />
          <meshStandardMaterial
            color="#F5E6A8"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* LAYER 2: Middle 8-pointed Khatim star rosette (z = 0) */}
      <group ref={layer2Ref} position={[0, 0, 0]}>
        <mesh castShadow receiveShadow>
          <extrudeGeometry args={[star8Shape, extrudeSettings]} />
          <meshPhysicalMaterial
            color="#E6D3A3"
            metalness={0.98}
            roughness={0.2}
            clearcoat={0.7}
            envMapIntensity={2.0}
          />
        </mesh>
        <mesh position={[0, 0, 0.04]}>
          <extrudeGeometry args={[midRingShape, extrudeSettings]} />
          <meshStandardMaterial
            color="#D4AF37"
            metalness={0.9}
            roughness={0.25}
          />
        </mesh>
      </group>

      {/* LAYER 3: Inner Octagram Core Jewel (z = 0.2) */}
      <group ref={layer3Ref} position={[0, 0, 0.2]}>
        <mesh>
          <cylinderGeometry args={[1.1, 1.1, 0.1, 8]} />
          <meshPhysicalMaterial
            color="#FFF8E7"
            emissive="#D4AF37"
            emissiveIntensity={0.6}
            metalness={0.95}
            roughness={0.15}
          />
        </mesh>
        {/* Center glowing gem */}
        <mesh position={[0, 0, 0.08]}>
          <octahedronGeometry args={[0.35, 2]} />
          <meshPhysicalMaterial
            color="#FFF4D0"
            emissive="#FFAA22"
            emissiveIntensity={1.8}
            metalness={0.1}
            roughness={0.1}
            transmission={0.6}
            thickness={0.5}
          />
        </mesh>
      </group>
    </group>
  );
};
