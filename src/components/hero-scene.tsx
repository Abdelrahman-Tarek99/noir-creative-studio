"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function Sculpture() {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const geometry = useMemo(
    () => new THREE.TorusKnotGeometry(1, 0.35, 128, 32, 2, 3),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;

    const t = state.clock.elapsedTime;
    const px = state.pointer.x;
    const py = state.pointer.y;

    pointer.current.x += (px * 0.3 - pointer.current.x) * 0.04;
    pointer.current.y += (py * 0.3 - pointer.current.y) * 0.04;

    meshRef.current.rotation.x = t * 0.08 + pointer.current.y * 0.5;
    meshRef.current.rotation.y = t * 0.12 + pointer.current.x * 0.5;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.3}>
      <mesh ref={meshRef} geometry={geometry} scale={viewport.width > 10 ? 1.1 : 0.85}>
        <meshStandardMaterial
          color="#1a1a19"
          metalness={0.95}
          roughness={0.08}
          envMapIntensity={1.4}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      style={{ pointerEvents: "auto" }}
    >
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-3, -2, 4]} intensity={0.3} color="#a65135" />
      <Environment preset="city" environmentIntensity={0.6} />
      <Sculpture />
    </Canvas>
  );
}
