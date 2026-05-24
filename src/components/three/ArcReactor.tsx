"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, Suspense } from "react";
import * as THREE from "three";

function Ring({
  radius,
  tube,
  color,
  speed,
  axis,
  segments = 64,
}: {
  radius: number;
  tube: number;
  color: string;
  speed: number;
  axis: "x" | "y" | "z";
  segments?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation[axis] += delta * speed;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, tube, 16, segments]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.8}
        metalness={0.6}
        roughness={0.2}
      />
    </mesh>
  );
}

function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const s = 1 + Math.sin(t * 2) * 0.05;
    ref.current.scale.setScalar(s);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.55, 32, 32]} />
      <meshStandardMaterial
        color="#bff5ff"
        emissive="#39d9ff"
        emissiveIntensity={3}
        metalness={0.2}
        roughness={0.05}
      />
    </mesh>
  );
}

function Spokes({ count = 8 }: { count?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * 0.4;
  });
  const spokes = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2;
        return { angle, key: i };
      }),
    [count],
  );
  return (
    <group ref={ref}>
      {spokes.map(({ angle, key }) => (
        <mesh
          key={key}
          position={[Math.cos(angle) * 0.95, Math.sin(angle) * 0.95, 0]}
          rotation={[0, 0, angle]}
        >
          <boxGeometry args={[0.55, 0.06, 0.06]} />
          <meshStandardMaterial
            color="#39d9ff"
            emissive="#39d9ff"
            emissiveIntensity={2.2}
            metalness={0.7}
            roughness={0.15}
          />
        </mesh>
      ))}
    </group>
  );
}

function buildParticlePositions(count: number) {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 2.8 + Math.random() * 1.5;
    arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    arr[i * 3 + 2] = r * Math.cos(phi);
  }
  return arr;
}

function Particles({ count = 200 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const [positions] = useState(() => buildParticlePositions(count));

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.05;
    ref.current.rotation.x += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#6be3ff"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

function Reactor() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ pointer }) => {
    if (!group.current) return;
    group.current.rotation.y += (pointer.x * 0.5 - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (-pointer.y * 0.3 - group.current.rotation.x) * 0.05;
  });
  return (
    <group ref={group}>
      <Core />
      <Spokes count={8} />
      <Ring radius={1.45} tube={0.04} color="#39d9ff" speed={0.6} axis="z" />
      <Ring radius={1.75} tube={0.025} color="#39d9ff" speed={-0.4} axis="z" />
      <Ring radius={2.05} tube={0.018} color="#6be3ff" speed={0.25} axis="x" />
      <Ring radius={2.05} tube={0.018} color="#6be3ff" speed={-0.3} axis="y" />
      <Ring radius={2.4} tube={0.01} color="#ffb547" speed={0.15} axis="z" segments={96} />
      <Particles count={220} />
    </group>
  );
}

export function ArcReactor({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#39d9ff" />
        <pointLight position={[-5, -3, -3]} intensity={0.8} color="#ffb547" />
        <Suspense fallback={null}>
          <Reactor />
        </Suspense>
      </Canvas>
    </div>
  );
}
