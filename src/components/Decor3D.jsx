"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

// Ringan: hanya sedikit partikel + satu mesh gunung sederhana, tanpa tekstur berat.

function Particles({ count = 40 }) {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = Math.random() * 6 - 1;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    const positionsAttr = pointsRef.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const y = positionsAttr.array[i * 3 + 1];
      positionsAttr.array[i * 3 + 1] = y + Math.sin(state.clock.elapsedTime + i) * 0.0015;
    }
    positionsAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#a9e9e0" size={0.06} transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function MountainSilhouette() {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.position.y = -2.2 + Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
  });

  return (
    <mesh ref={meshRef} position={[0, -2.2, -2]} rotation={[0, 0, 0]}>
      <coneGeometry args={[2.6, 2.4, 4]} />
      <meshBasicMaterial color="#1a6a66" transparent opacity={0.35} />
    </mesh>
  );
}

export default function Decor3D({ className = "" }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <Suspense fallback={null}>
          <MountainSilhouette />
          <Particles count={35} />
        </Suspense>
      </Canvas>
    </div>
  );
}
