"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Edges } from "@react-three/drei";

// Stages of assembly
// 1: Floating geometric origami fragments
// 2: Legs & Body form (Mid Scroll)
// 3: Neck forms (Deep Scroll)
// 4: Head & details form (Final)

const PARTS = [
  // Legs (Stage 2)
  { id: 'leg1', type: 'tetra', scale: [0.4, 2.5, 0.4], pos: [-0.8, -2, 1], rot: [0, 0, 0.1], stage: 2 },
  { id: 'leg2', type: 'tetra', scale: [0.4, 2.5, 0.4], pos: [0.8, -2, 1], rot: [0, 0, -0.1], stage: 2 },
  { id: 'leg3', type: 'tetra', scale: [0.4, 2.5, 0.4], pos: [-0.6, -2, -1.2], rot: [0.1, 0, 0], stage: 2 },
  { id: 'leg4', type: 'tetra', scale: [0.4, 2.5, 0.4], pos: [0.6, -2, -1.2], rot: [0.1, 0, 0], stage: 2 },
  // Body (Stage 2)
  { id: 'body_main', type: 'tetra', scale: [2, 1.5, 3], pos: [0, -0.4, -0.2], rot: [0.2, 0.3, 0], stage: 2 },
  { id: 'body_chest', type: 'tetra', scale: [1.8, 1.8, 2], pos: [0, -0.2, 1], rot: [-0.2, 0, 0], stage: 2 },
  // Neck (Stage 3)
  { id: 'neck_base', type: 'tetra', scale: [1.2, 2, 1.4], pos: [0, 1, 1.5], rot: [0.3, 0.2, 0], stage: 3 },
  { id: 'neck_top', type: 'tetra', scale: [0.8, 2.5, 1], pos: [0, 2.8, 2], rot: [0.4, -0.1, 0], stage: 3 },
  // Head (Stage 4)
  { id: 'head', type: 'tetra', scale: [1, 1.2, 2], pos: [0, 4.2, 2.6], rot: [0.2, 0, 0], stage: 4 },
  { id: 'snout', type: 'tetra', scale: [0.8, 0.8, 1.5], pos: [0, 3.8, 3.5], rot: [0.4, 0, 0], stage: 4 },
  // Details - Ears & Horns (Stage 4)
  { id: 'ear1', type: 'tetra', scale: [0.3, 0.8, 0.3], pos: [-0.6, 4.6, 2.2], rot: [-0.4, 0, 0.5], stage: 4 },
  { id: 'ear2', type: 'tetra', scale: [0.3, 0.8, 0.3], pos: [0.6, 4.6, 2.2], rot: [-0.4, 0, -0.5], stage: 4 },
  { id: 'horn1', type: 'tetra', scale: [0.15, 0.6, 0.15], pos: [-0.3, 5, 2.5], rot: [-0.2, 0, 0.2], stage: 4 },
  { id: 'horn2', type: 'tetra', scale: [0.15, 0.6, 0.15], pos: [0.3, 5, 2.5], rot: [-0.2, 0, -0.2], stage: 4 },
];

// Generate random initial scattered positions for each part, defined completely outside the component to avoid purity issues during render
const SCATTERED_DATA = PARTS.map(() => ({
  pos: [
    (Math.random() - 0.5) * 15, 
    (Math.random() - 0.5) * 15 + 5, 
    (Math.random() - 0.5) * 15 - 5
  ] as [number, number, number],
  rot: [
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2
  ] as [number, number, number]
}));

export default function OrigamiGiraffe() {
  const groupRef = useRef<THREE.Group>(null);
  // We use object pooling or refs to update without re-rendering
  const partsRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    const scrollY = window.scrollY;
    // Estimate max scroll width, we will use a fallback logic in case DOM height isn't fully loaded
    const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1000);
    const rawProgress = scrollY / maxScroll;
    const progress = Math.min(Math.max(rawProgress, 0), 1);

    if (groupRef.current) {
      // Giraffe slowly rotates to be visible from different angles while assembling
      // Let's cap the rotation so it rests facing slightly left at the end
      const targetY = state.pointer.x * 0.2 - Math.PI / 4; 
      
      // Spin while scrolling, then settle
      const spinRotation = progress * Math.PI * 2;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        spinRotation + targetY,
        0.05
      );
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -state.pointer.y * 0.1,
        0.05
      );
    }

    PARTS.forEach((part, i) => {
      const mesh = partsRefs.current[i];
      if (!mesh) return;

      const scatter = SCATTERED_DATA[i];
      const targetPos = part.pos;
      const targetRot = part.rot;

      let assembleProgress = 0;
      
      // Map stages to scroll percentages:
      // Stage 2 (Legs/Body): 0.1 to 0.4
      // Stage 3 (Neck): 0.4 to 0.6
      // Stage 4 (Head/Details): 0.6 to 0.8
      let start = 0;
      let end = 1;
      
      if (part.stage === 2) { start = 0.1; end = 0.4; }
      if (part.stage === 3) { start = 0.4; end = 0.6; }
      if (part.stage === 4) { start = 0.6; end = 0.8; }

      if (progress < start) {
        assembleProgress = 0;
      } else if (progress > end) {
        assembleProgress = 1;
      } else {
        assembleProgress = (progress - start) / (end - start);
      }
      
      // Smooth out the animation explicitly using typical easing
      const ease = 1 - Math.pow(1 - assembleProgress, 3); // Cubic out

      mesh.position.x = THREE.MathUtils.lerp(scatter.pos[0], targetPos[0], ease);
      mesh.position.y = THREE.MathUtils.lerp(scatter.pos[1], targetPos[1], ease);
      mesh.position.z = THREE.MathUtils.lerp(scatter.pos[2], targetPos[2], ease);

      mesh.rotation.x = THREE.MathUtils.lerp(scatter.rot[0], targetRot[0], ease);
      mesh.rotation.y = THREE.MathUtils.lerp(scatter.rot[1], targetRot[1], ease);
      mesh.rotation.z = THREE.MathUtils.lerp(scatter.rot[2], targetRot[2], ease);

      // Add gentle floating when unassembled
      if (ease < 1) {
        mesh.position.y += Math.sin(state.clock.elapsedTime * 2 + i) * 0.5 * (1 - ease);
        mesh.rotation.y += 0.01 * (1 - ease);
      }
    });
  });

  return (
    <group ref={groupRef} position={[2, -1, 0]} scale={0.8}>
      {PARTS.map((part, i) => (
        <mesh 
          key={part.id} 
          ref={(el) => { if (el) partsRefs.current[i] = el; }}
          scale={part.scale as [number, number, number]}
          castShadow
          receiveShadow
        >
          <tetrahedronGeometry args={[1, 0]} />
          
          <meshStandardMaterial 
            color="#ffffff" 
            roughness={0.9} 
            metalness={0.1}
            flatShading={true} // Crucial for origami faceted look
          />
          
          {/* Subtle metallic edges for the origami aesthetic */}
          <Edges 
            linewidth={2} 
            threshold={15} 
            color="#5A9E2F" // Accent Green Edge
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}
