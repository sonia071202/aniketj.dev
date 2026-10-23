"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function CreatureModel() {
  const creature = useRef<Group>(null);

  useFrame((state) => {
    if (!creature.current) return;
    creature.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.16;
  });

  return (
    <Float speed={2} rotationIntensity={0.18} floatIntensity={0.55}>
      <group ref={creature} position={[0, -0.12, 0]}>
        <mesh position={[0, -0.38, 0]} scale={[0.62, 0.55, 0.48]}>
          <sphereGeometry args={[1, 32, 24]} />
          <meshStandardMaterial color="#6d9f72" roughness={0.72} />
        </mesh>
        <mesh position={[0, 0.35, 0]} scale={[0.43, 0.48, 0.4]}>
          <sphereGeometry args={[1, 32, 24]} />
          <meshStandardMaterial color="#8fbe82" roughness={0.65} />
        </mesh>
        <mesh position={[-0.42, 0.45, 0]} rotation={[0, 0, -0.24]} scale={[0.42, 0.16, 0.1]}>
          <coneGeometry args={[1, 2.4, 32]} />
          <meshStandardMaterial color="#78aa78" roughness={0.72} />
        </mesh>
        <mesh position={[0.42, 0.45, 0]} rotation={[0, 0, 0.24]} scale={[0.42, 0.16, 0.1]}>
          <coneGeometry args={[1, 2.4, 32]} />
          <meshStandardMaterial color="#78aa78" roughness={0.72} />
        </mesh>
        <mesh position={[-0.15, 0.42, 0.35]} scale={[0.07, 0.09, 0.04]}>
          <sphereGeometry args={[1, 16, 12]} />
          <meshStandardMaterial color="#172b24" roughness={0.28} />
        </mesh>
        <mesh position={[0.15, 0.42, 0.35]} scale={[0.07, 0.09, 0.04]}>
          <sphereGeometry args={[1, 16, 12]} />
          <meshStandardMaterial color="#172b24" roughness={0.28} />
        </mesh>
        <mesh position={[0, 0.25, 0.36]} scale={[0.09, 0.025, 0.02]}>
          <sphereGeometry args={[1, 16, 12]} />
          <meshStandardMaterial color="#6b3f4f" roughness={0.4} />
        </mesh>
        <mesh position={[0, -0.03, 0.38]} scale={[0.1, 0.06, 0.05]}>
          <sphereGeometry args={[1, 16, 12]} />
          <meshStandardMaterial color="#b9d69c" roughness={0.62} />
        </mesh>
        <mesh position={[-0.25, -0.35, 0.03]} rotation={[0, 0, -0.15]} scale={[0.13, 0.32, 0.12]}>
          <capsuleGeometry args={[1, 1.2, 12, 20]} />
          <meshStandardMaterial color="#9b78bd" roughness={0.58} />
        </mesh>
        <mesh position={[0.25, -0.35, 0.03]} rotation={[0, 0, 0.15]} scale={[0.13, 0.32, 0.12]}>
          <capsuleGeometry args={[1, 1.2, 12, 20]} />
          <meshStandardMaterial color="#9b78bd" roughness={0.58} />
        </mesh>
      </group>
    </Float>
  );
}

export function Sonia3DAvatar({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative cursor-grab bg-transparent active:cursor-grabbing ${className}`}
      aria-label="Interactive 3D cute green creature avatar"
      title="Interactive 3D avatar"
    >
      <Canvas camera={{ position: [0, 0.12, 3.2], fov: 28 }} dpr={[1, 2]}>
        <ambientLight intensity={1.6} />
        <directionalLight position={[2, 3, 4]} intensity={2.4} color="#d8c6ff" />
        <pointLight position={[-2, 0, 2]} intensity={1.8} color="#67e8f9" />
        <CreatureModel />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} minPolarAngle={1.2} maxPolarAngle={1.9} />
      </Canvas>
    </div>
  );
}

