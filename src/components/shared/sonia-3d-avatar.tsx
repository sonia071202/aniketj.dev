"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function AvatarModel() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.16;
  });

  return (
    <Float speed={2} rotationIntensity={0.22} floatIntensity={0.7}>
      <group ref={group} position={[0, -0.32, 0]}>
        <mesh position={[0, -0.38, 0]} scale={[0.7, 0.58, 0.5]}>
          <sphereGeometry args={[1, 32, 24]} />
          <meshStandardMaterial color="#8b5cf6" roughness={0.4} metalness={0.18} />
        </mesh>
        <mesh position={[0, 0.42, 0]} scale={[0.48, 0.58, 0.43]}>
          <sphereGeometry args={[1, 32, 24]} />
          <meshStandardMaterial color="#f4b49d" roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.7, -0.08]} scale={[0.52, 0.46, 0.47]}>
          <sphereGeometry args={[1, 32, 24]} />
          <meshStandardMaterial color="#302236" roughness={0.65} />
        </mesh>
        <mesh position={[-0.18, 0.45, 0.39]} scale={[0.055, 0.075, 0.025]}>
          <sphereGeometry args={[1, 16, 12]} />
          <meshStandardMaterial color="#302236" roughness={0.3} />
        </mesh>
        <mesh position={[0.18, 0.45, 0.39]} scale={[0.055, 0.075, 0.025]}>
          <sphereGeometry args={[1, 16, 12]} />
          <meshStandardMaterial color="#302236" roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.28, 0.4]} scale={[0.1, 0.025, 0.02]}>
          <sphereGeometry args={[1, 16, 12]} />
          <meshStandardMaterial color="#c95772" roughness={0.35} />
        </mesh>
        <mesh position={[-0.36, 0.48, 0]} rotation={[0, 0, -0.2]} scale={[0.12, 0.4, 0.1]}>
          <capsuleGeometry args={[1, 1.4, 12, 20]} />
          <meshStandardMaterial color="#302236" roughness={0.65} />
        </mesh>
        <mesh position={[0.36, 0.48, 0]} rotation={[0, 0, 0.2]} scale={[0.12, 0.4, 0.1]}>
          <capsuleGeometry args={[1, 1.4, 12, 20]} />
          <meshStandardMaterial color="#302236" roughness={0.65} />
        </mesh>
        <mesh position={[0, -0.02, 0.42]} scale={[0.08, 0.08, 0.08]}>
          <sphereGeometry args={[1, 16, 12]} />
          <meshStandardMaterial color="#f4b49d" roughness={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

export function Sonia3DAvatar({ className = "" }: { className?: string }) {
  return (
    <div className={`h-12 w-12 cursor-grab active:cursor-grabbing ${className}`} aria-label="Interactive 3D avatar of Sonia Gupta">
      <Canvas camera={{ position: [0, 0.15, 3.3], fov: 28 }} dpr={[1, 2]}>
        <ambientLight intensity={1.8} />
        <directionalLight position={[2, 3, 4]} intensity={2.5} color="#c4b5fd" />
        <pointLight position={[-2, 0, 2]} intensity={2} color="#67e8f9" />
        <AvatarModel />
        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={1.25} maxPolarAngle={1.9} autoRotate autoRotateSpeed={1.4} />
      </Canvas>
    </div>
  );
}
