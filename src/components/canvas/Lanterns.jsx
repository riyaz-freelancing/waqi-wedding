import React, { useMemo } from 'react';
import { Lantern } from './Lantern';

/**
 * Curated 3D Lantern Array (10 Lanterns)
 * Positioned across the camera journey from gate entrance to palace finale.
 */
export const Lanterns = ({ count = 10 }) => {
  const lanternConfigs = useMemo(() => [
    // Entrance / Gate framing
    { position: [-3.2, 3.2, 2.5], scale: 0.85, speed: 1.1, phase: 0.2, chainLength: 3.5 },
    { position: [3.2, 3.5, 2.8], scale: 0.9, speed: 0.95, phase: 1.4, chainLength: 3.2 },

    // Title & Mandala approach
    { position: [-4.5, 4.2, -6.5], scale: 1.0, speed: 0.8, phase: 2.1, chainLength: 4.0 },
    { position: [4.8, 3.8, -7.0], scale: 1.05, speed: 1.25, phase: 0.8, chainLength: 3.6 },

    // Family & Couple Scene
    { position: [-5.2, 5.0, -15.5], scale: 1.15, speed: 0.7, phase: 3.2, chainLength: 4.5 },
    { position: [5.0, 4.8, -16.0], scale: 1.1, speed: 0.85, phase: 1.9, chainLength: 4.2 },

    // Events Corridor
    { position: [-3.8, 4.5, -24.0], scale: 1.0, speed: 1.15, phase: 0.5, chainLength: 3.8 },
    { position: [3.9, 4.6, -24.5], scale: 1.0, speed: 0.9, phase: 2.7, chainLength: 3.9 },

    // Palace & Finale Vista
    { position: [-6.5, 6.0, -32.0], scale: 1.25, speed: 0.65, phase: 1.1, chainLength: 5.0 },
    { position: [6.5, 5.8, -32.5], scale: 1.3, speed: 0.75, phase: 2.4, chainLength: 4.8 },
  ], []);

  const visibleConfigs = useMemo(() => lanternConfigs.slice(0, count), [lanternConfigs, count]);

  return (
    <group>
      {visibleConfigs.map((cfg, idx) => (
        <Lantern key={`fanoos-${idx}`} {...cfg} />
      ))}
    </group>
  );
};
