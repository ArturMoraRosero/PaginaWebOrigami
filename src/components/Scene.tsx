"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Preload, Environment } from "@react-three/drei";

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} color="#1E3D7A" />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" castShadow />
        <directionalLight position={[-10, 10, -5]} intensity={0.5} color="#7DC242" />

        <Environment preset="city" />

        <Suspense fallback={null}>
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
