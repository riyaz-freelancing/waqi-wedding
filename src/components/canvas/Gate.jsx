import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Procedural Mughal / Ogee Mehrab Door Leaf Shape
 */
function createDoorLeafShape(width, height) {
  const shape = new THREE.Shape();
  // Door leaf starts at bottom-left (0,0) and extends to (width, height)
  // Left door hinge is at x=0; right door is mirrored.
  const rTop = width; // arch rise
  const hRect = height - rTop;

  shape.moveTo(0, 0);
  shape.lineTo(width, 0);
  shape.lineTo(width, hRect);

  // Ogee / Persian Arch curve to center peak
  // Curve up and in toward hinge side peak
  shape.bezierCurveTo(
    width * 0.85, hRect + rTop * 0.5,
    width * 0.3, hRect + rTop * 0.8,
    0, height
  );
  shape.lineTo(0, 0);

  return shape;
}

/**
 * Procedural Mughal Outer Arch Surround Shape
 */
function createArchSurroundShape(outerW, outerH, innerW, innerH) {
  const shape = new THREE.Shape();

  // Outer rectangle
  shape.moveTo(-outerW / 2, 0);
  shape.lineTo(outerW / 2, 0);
  shape.lineTo(outerW / 2, outerH);
  shape.lineTo(-outerW / 2, outerH);
  shape.closePath();

  // Inner hole for the gate opening (Mughal arch hole)
  const hole = new THREE.Path();
  const w = innerW / 2;
  const hRect = innerH - w;

  hole.moveTo(-w, 0);
  hole.lineTo(w, 0);
  hole.lineTo(w, hRect);
  hole.bezierCurveTo(w * 0.8, hRect + w * 0.5, w * 0.2, innerH, 0, innerH);
  hole.bezierCurveTo(-w * 0.2, innerH, -w * 0.8, hRect + w * 0.5, -w, hRect);
  hole.closePath();

  shape.holes.push(hole);
  return shape;
}

export const Gate = ({ isOpen, onToggleOpen }) => {
  const leftDoorRef = useRef();
  const rightDoorRef = useRef();
  const floodLightRef = useRef();
  const [hovered, setHovered] = useState(false);

  const doorWidth = 2.4;
  const doorHeight = 6.8;

  // Shapes
  const leftShape = useMemo(() => createDoorLeafShape(doorWidth, doorHeight), []);
  const archSurroundShape = useMemo(
    () => createArchSurroundShape(6.2, 8.4, doorWidth * 2, doorHeight),
    []
  );

  const doorExtrude = useMemo(() => ({
    depth: 0.15,
    bevelEnabled: true,
    bevelSegments: 3,
    steps: 1,
    bevelSize: 0.04,
    bevelThickness: 0.04,
  }), []);

  const archExtrude = useMemo(() => ({
    depth: 0.45,
    bevelEnabled: true,
    bevelSegments: 4,
    steps: 1,
    bevelSize: 0.08,
    bevelThickness: 0.08,
  }), []);

  // Animate door rotation and floodlight illumination
  useFrame((state, delta) => {
    const targetAngle = isOpen ? Math.PI * 0.6 : 0;
    const speed = 3.5;

    if (leftDoorRef.current) {
      leftDoorRef.current.rotation.y = THREE.MathUtils.damp(
        leftDoorRef.current.rotation.y,
        -targetAngle,
        speed,
        delta
      );
    }
    if (rightDoorRef.current) {
      rightDoorRef.current.rotation.y = THREE.MathUtils.damp(
        rightDoorRef.current.rotation.y,
        targetAngle,
        speed,
        delta
      );
    }
    if (floodLightRef.current) {
      const targetIntensity = isOpen ? 12 : 0.8;
      floodLightRef.current.intensity = THREE.MathUtils.damp(
        floodLightRef.current.intensity,
        targetIntensity,
        speed,
        delta
      );
    }
  });

  const handleClick = (e) => {
    e.stopPropagation();
    if (onToggleOpen) onToggleOpen();
  };

  return (
    <group position={[0, -2.5, 0]}>
      {/* Warm Golden Flood Light Behind Gate */}
      <spotLight
        ref={floodLightRef}
        position={[0, 3.5, -4]}
        target-position={[0, 2, 8]}
        color="#F5E6A8"
        intensity={0.8}
        angle={Math.PI / 3}
        penumbra={0.8}
        distance={25}
        decay={2}
        castShadow
      />

      {/* Ornate Arch Surround Portal (Obsidian Noir Stone) */}
      <mesh receiveShadow castShadow position={[0, 0, -0.1]}>
        <extrudeGeometry args={[archSurroundShape, archExtrude]} />
        <meshStandardMaterial
          color="#111116"
          metalness={0.8}
          roughness={0.25}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* 24K Gold Arch Bevel Trim Accent */}
      <mesh position={[0, 0, 0.35]}>
        <extrudeGeometry
          args={[
            archSurroundShape,
            { depth: 0.05, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02 },
          ]}
        />
        <meshPhysicalMaterial
          color="#F3D053"
          metalness={0.98}
          roughness={0.18}
          clearcoat={0.6}
        />
      </mesh>

      {/* Top Islamic Crescent Finial on Crown */}
      <group position={[0, 8.8, 0.2]} scale={0.4}>
        <mesh>
          <torusGeometry args={[0.7, 0.12, 16, 48, Math.PI * 1.5]} />
          <meshPhysicalMaterial
            color="#FFF8E7"
            emissive="#D4AF37"
            emissiveIntensity={0.8}
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[0, -0.6, 0]}>
          <cylinderGeometry args={[0.08, 0.15, 0.6, 16]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.3} />
        </mesh>
      </group>

      {/* LEFT DOOR LEAF (Hinge at x = -doorWidth) */}
      <group
        ref={leftDoorRef}
        position={[-doorWidth, 0, 0]}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <group position={[0, 0, 0]}>
          <mesh castShadow receiveShadow>
            <extrudeGeometry args={[leftShape, doorExtrude]} />
            <meshStandardMaterial
              color="#A98A45"
              metalness={0.85}
              roughness={0.28}
              envMapIntensity={1.5}
            />
          </mesh>

          {/* Left Door Ring Pull / Handle */}
          <group position={[doorWidth * 0.75, doorHeight * 0.45, 0.22]}>
            <mesh>
              <torusGeometry args={[0.22, 0.04, 16, 32]} />
              <meshPhysicalMaterial color="#FFF8E7" metalness={1} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0.18, 0]}>
              <cylinderGeometry args={[0.08, 0.08, 0.1, 16]} />
              <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.2} />
            </mesh>
          </group>

          {/* Decorative Gold Studs / Arabesque Bosses */}
          {[0.2, 0.5, 0.8].map((px, i) =>
            [0.2, 0.4, 0.6, 0.8].map((py, j) => (
              <mesh
                key={`stud-l-${i}-${j}`}
                position={[doorWidth * px, doorHeight * py, 0.2]}
              >
                <sphereGeometry args={[0.045, 12, 12]} />
                <meshStandardMaterial color="#FFF8E7" metalness={1} roughness={0.2} />
              </mesh>
            ))
          )}
        </group>
      </group>

      {/* RIGHT DOOR LEAF (Hinge at x = +doorWidth, mirrored along X) */}
      <group
        ref={rightDoorRef}
        position={[doorWidth, 0, 0]}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <group scale={[-1, 1, 1]}>
          <mesh castShadow receiveShadow>
            <extrudeGeometry args={[leftShape, doorExtrude]} />
            <meshStandardMaterial
              color="#A98A45"
              metalness={0.85}
              roughness={0.28}
              envMapIntensity={1.5}
            />
          </mesh>

          {/* Right Door Ring Pull */}
          <group position={[doorWidth * 0.75, doorHeight * 0.45, 0.22]}>
            <mesh>
              <torusGeometry args={[0.22, 0.04, 16, 32]} />
              <meshPhysicalMaterial color="#FFF8E7" metalness={1} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0.18, 0]}>
              <cylinderGeometry args={[0.08, 0.08, 0.1, 16]} />
              <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.2} />
            </mesh>
          </group>

          {/* Decorative Gold Studs */}
          {[0.2, 0.5, 0.8].map((px, i) =>
            [0.2, 0.4, 0.6, 0.8].map((py, j) => (
              <mesh
                key={`stud-r-${i}-${j}`}
                position={[doorWidth * px, doorHeight * py, 0.2]}
              >
                <sphereGeometry args={[0.045, 12, 12]} />
                <meshStandardMaterial color="#FFF8E7" metalness={1} roughness={0.2} />
              </mesh>
            ))
          )}
        </group>
      </group>
    </group>
  );
};
