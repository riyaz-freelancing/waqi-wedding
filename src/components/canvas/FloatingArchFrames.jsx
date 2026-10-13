import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Procedural Arch Shape with point-pointed peak (Mughal Arch)
 */
function createArchShape(width, height) {
  const shape = new THREE.Shape();
  const w = width / 2;
  const hRect = height - w;

  shape.moveTo(-w, 0);
  shape.lineTo(w, 0);
  shape.lineTo(w, hRect);
  shape.bezierCurveTo(w * 0.85, hRect + w * 0.45, w * 0.25, height, 0, height);
  shape.bezierCurveTo(-w * 0.25, height, -w * 0.85, hRect + w * 0.45, -w, hRect);
  shape.closePath();
  return shape;
}

/**
 * Creates an arch border with inner hole
 */
function createArchBorderShape(outerW, outerH, borderThickness) {
  const shape = createArchShape(outerW, outerH);
  const hole = new THREE.Path();
  const innerW = (outerW - borderThickness * 2) / 2;
  const innerH = outerH - borderThickness;
  const hRect = innerH - innerW;

  hole.moveTo(-innerW, borderThickness);
  hole.lineTo(innerW, borderThickness);
  hole.lineTo(innerW, hRect);
  hole.bezierCurveTo(innerW * 0.85, hRect + innerW * 0.45, innerW * 0.25, innerH, 0, innerH);
  hole.bezierCurveTo(-innerW * 0.25, innerH, -innerW * 0.85, hRect + innerW * 0.45, -innerW, hRect);
  hole.closePath();

  shape.holes.push(hole);
  return shape;
}

/**
 * Single Floating Portrait Arch
 */
const SingleArchFrame = ({
  position,
  title,
  name,
  degrees,
  badgeText,
  texturePath = null, // Set image path e.g. "/photos/groom.jpg" here
}) => {
  const groupRef = useRef();
  const width = 2.6;
  const height = 4.0;

  const archBorder = useMemo(() => createArchBorderShape(width, height, 0.16), [width, height]);
  const archInner = useMemo(() => createArchShape(width - 0.28, height - 0.28), [width, height]);

  const extrudeSettings = useMemo(() => ({
    depth: 0.12,
    bevelEnabled: true,
    bevelSegments: 3,
    bevelSize: 0.04,
    bevelThickness: 0.04,
  }), []);

  return (
    <group ref={groupRef} position={position}>
      {/* Outer Golden Beveled Frame */}
      <mesh castShadow receiveShadow>
        <extrudeGeometry args={[archBorder, extrudeSettings]} />
        <meshPhysicalMaterial
          color="#D4AF37"
          metalness={0.95}
          roughness={0.22}
          clearcoat={0.6}
          envMapIntensity={2.0}
        />
      </mesh>

      {/* Inner Canvas / Photo Plane */}
      <mesh position={[0, 0.14, 0.02]}>
        <shapeGeometry args={[archInner]} />
        <meshStandardMaterial
          color="#0B0B10"
          roughness={0.4}
          metalness={0.3}
        />
      </mesh>

      {/* Monogram Crest / Photo Placeholder inside frame */}
      <group position={[0, 2.1, 0.06]}>
        {/* Subtle decorative inner star */}
        <mesh>
          <torusGeometry args={[0.7, 0.03, 16, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.3} />
        </mesh>
        <Text
          fontSize={0.52}
          font="https://fonts.gstatic.com/s/cormorantgaramond/v19/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYpHtK.woff"
          color="#F5E6A8"
          anchorX="center"
          anchorY="middle"
        >
          {badgeText}
        </Text>
      </group>

      {/* Label under frame */}
      <group position={[0, -0.4, 0.1]}>
        <Text
          fontSize={0.16}
          color="#D4AF37"
          letterSpacing={0.18}
          anchorX="center"
          anchorY="middle"
        >
          {title.toUpperCase()}
        </Text>
        <Text
          position={[0, -0.28, 0]}
          fontSize={0.24}
          font="https://fonts.gstatic.com/s/cormorantgaramond/v19/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYpHtK.woff"
          color="#FFF8E7"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
        <Text
          position={[0, -0.52, 0]}
          fontSize={0.15}
          color="#C9BEA4"
          letterSpacing={0.1}
          anchorX="center"
          anchorY="middle"
        >
          {degrees}
        </Text>
      </group>
    </group>
  );
};

/**
 * 3D Floating Couple Arch Frames with Intertwined Joining Emblem
 */
export const FloatingArchFrames = ({ position = [0, 1.2, -16.5] }) => {
  const masterGroupRef = useRef();

  useFrame((state) => {
    if (!masterGroupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Gentle floating bob
    masterGroupRef.current.position.y = position[1] + Math.sin(time * 0.9) * 0.12;

    // Subtle pointer parallax tilt
    const targetRotX = state.pointer.y * 0.12;
    const targetRotY = state.pointer.x * 0.15;
    masterGroupRef.current.rotation.x = THREE.MathUtils.lerp(
      masterGroupRef.current.rotation.x,
      targetRotX,
      0.05
    );
    masterGroupRef.current.rotation.y = THREE.MathUtils.lerp(
      masterGroupRef.current.rotation.y,
      targetRotY,
      0.05
    );
  });

  return (
    <group ref={masterGroupRef} position={position}>
      {/* Groom Frame */}
      <SingleArchFrame
        position={[-2.3, 0, 0]}
        title="Groom"
        name="Mohammed Waqiullah Khan"
        degrees="B.Com., M.B.A."
        badgeText="W"
      />

      {/* Central Intertwined Crescent / Heart Jewel */}
      <group position={[0, 2.0, 0.2]}>
        <mesh>
          <torusGeometry args={[0.55, 0.06, 16, 48]} />
          <meshPhysicalMaterial
            color="#FFF8E7"
            emissive="#D4AF37"
            emissiveIntensity={0.8}
            metalness={0.95}
            roughness={0.2}
          />
        </mesh>
        <pointLight color="#FFD27D" intensity={2.5} distance={5} />
      </group>

      {/* Bride Frame */}
      <SingleArchFrame
        position={[2.3, 0, 0]}
        title="Bride"
        name="Syeda Sara Fatima"
        degrees="M.A., B.Ed."
        badgeText="S"
      />
    </group>
  );
};
