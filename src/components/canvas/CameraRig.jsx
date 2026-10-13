import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { damp3 } from 'maath/easing';

/**
 * Cinematic Scroll-Driven Camera Rig along Catmull-Rom Splines
 * Moves camera smoothly along the 9 wedding scenes with subtle mouse/gyro parallax.
 */
export const CameraRig = ({
  scrollProgress = 0,
  isGateOpen = false,
  gateOpenTransition = 0,
}) => {
  const { camera } = useThree();
  const currentLookAt = useRef(new THREE.Vector3(0, 1.8, 0));
  const targetPos = useRef(new THREE.Vector3());
  const targetLook = useRef(new THREE.Vector3());

  // 9 Scene Waypoint Camera Positions
  const cameraWaypoints = useMemo(() => [
    new THREE.Vector3(0, 1.2, 7.8),    // Scene 1: Hero / Closed Gate
    new THREE.Vector3(0, 1.8, -3.2),   // Scene 2: Title / 3D Names & Mandala
    new THREE.Vector3(-0.6, 2.2, -9.8), // Scene 3: Families
    new THREE.Vector3(0, 1.7, -12.2),  // Scene 4: Couple Frames
    new THREE.Vector3(0.8, 2.4, -18.5), // Scene 5: Auspicious Events
    new THREE.Vector3(0, 2.0, -23.5),  // Scene 6: Countdown
    new THREE.Vector3(0, 3.6, -27.5),  // Scene 7: Venue & Reflective Floor
    new THREE.Vector3(-0.8, 4.0, -30.5),// Scene 8: Prophetic Dua
    new THREE.Vector3(0, 4.2, -32.5),  // Scene 9: Finale & Palace Silhouette
  ], []);

  // 9 Scene LookAt Targets
  const lookAtWaypoints = useMemo(() => [
    new THREE.Vector3(0, 1.8, 0),      // Scene 1: Looking at Gate
    new THREE.Vector3(0, 2.2, -8.5),   // Scene 2: Looking at 3D Names & Mandala
    new THREE.Vector3(0, 2.0, -14.5),  // Scene 3: Families
    new THREE.Vector3(0, 1.5, -17.0),  // Scene 4: Couple Arch Frames
    new THREE.Vector3(0, 1.8, -24.0),  // Scene 5: Events Path
    new THREE.Vector3(0, 1.8, -28.5),  // Scene 6: Countdown
    new THREE.Vector3(0, 2.5, -42.0),  // Scene 7: Palace Silhouette
    new THREE.Vector3(-2.0, 4.0, -40.0),// Scene 8: Dua under Crescent Moon
    new THREE.Vector3(0, 3.0, -42.0),  // Scene 9: Palace Horizon Fireworks
  ], []);

  // CatmullRom 3D Splines
  const positionCurve = useMemo(
    () => new THREE.CatmullRomCurve3(cameraWaypoints, false, 'centripetal'),
    [cameraWaypoints]
  );
  const lookAtCurve = useMemo(
    () => new THREE.CatmullRomCurve3(lookAtWaypoints, false, 'centripetal'),
    [lookAtWaypoints]
  );

  useFrame((state, delta) => {
    // If gate is not opened yet, hold camera before gate
    let t = Math.max(0, Math.min(1, scrollProgress));
    if (!isGateOpen) {
      t = 0;
    } else if (gateOpenTransition < 1) {
      // During initial push through gate
      t = THREE.MathUtils.lerp(0, 0.08, gateOpenTransition);
    }

    // Evaluate spline curve points
    positionCurve.getPointAt(t, targetPos.current);
    lookAtCurve.getPointAt(t, targetLook.current);

    // Apply subtle parallax offset based on pointer / device tilt
    const parallaxX = state.pointer.x * 0.35;
    const parallaxY = state.pointer.y * 0.22;
    targetPos.current.x += parallaxX;
    targetPos.current.y += parallaxY;

    // Smoothly damp camera position
    damp3(camera.position, targetPos.current, 0.25, delta);

    // Smoothly damp camera lookAt vector
    damp3(currentLookAt.current, targetLook.current, 0.25, delta);
    camera.lookAt(currentLookAt.current);
  });

  return null;
};
