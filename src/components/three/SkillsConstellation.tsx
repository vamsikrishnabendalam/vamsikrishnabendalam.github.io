"use client";

import {
  Canvas,
  useFrame,
  useThree,
  type ThreeEvent,
} from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState, Suspense } from "react";
import * as THREE from "three";
import { skillsRadar } from "@/lib/data";

type Vec3 = [number, number, number];

function buildInitialPositions(): Vec3[] {
  return skillsRadar.map((_, i) => {
    const phi = Math.acos(1 - (2 * (i + 0.5)) / skillsRadar.length);
    const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
    const r = 2.4;
    return [
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi),
    ];
  });
}

function Constellation() {
  const [positions, setPositions] = useState<Vec3[]>(() =>
    buildInitialPositions(),
  );
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef<{ index: number; plane: THREE.Plane } | null>(null);
  const group = useRef<THREE.Group>(null);
  const { camera, raycaster, gl } = useThree();

  useFrame((_, delta) => {
    if (!group.current || dragging) return;
    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x += delta * 0.04;
  });

  useEffect(() => {
    if (!dragging) return;
    const canvas = gl.domElement;

    function onMove(e: PointerEvent) {
      const state = dragRef.current;
      if (!state || !group.current) return;
      const rect = canvas.getBoundingClientRect();
      const ndc = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1,
      );
      raycaster.setFromCamera(ndc, camera);
      const hit = new THREE.Vector3();
      if (!raycaster.ray.intersectPlane(state.plane, hit)) return;
      group.current.worldToLocal(hit);
      setPositions((prev) => {
        const next = prev.slice();
        next[state.index] = [hit.x, hit.y, hit.z];
        return next;
      });
    }

    function onEnd() {
      dragRef.current = null;
      setDragging(false);
      canvas.style.cursor = "auto";
    }

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onEnd);
    window.addEventListener("pointercancel", onEnd);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onEnd);
      window.removeEventListener("pointercancel", onEnd);
    };
  }, [dragging, camera, gl, raycaster]);

  function startDrag(index: number) {
    return (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation();
      if (!group.current) return;
      const world = new THREE.Vector3(...positions[index]);
      group.current.localToWorld(world);
      const normal = new THREE.Vector3();
      camera.getWorldDirection(normal).negate();
      const plane = new THREE.Plane();
      plane.setFromNormalAndCoplanarPoint(normal, world);
      dragRef.current = { index, plane };
      setDragging(true);
      gl.domElement.style.cursor = "grabbing";
    };
  }

  const linePositions = useMemo(() => {
    const arr: number[] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const a = positions[i];
        const b = positions[j];
        const d = Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
        if (d < 2.4) {
          arr.push(...a, ...b);
        }
      }
    }
    return new Float32Array(arr);
  }, [positions]);

  return (
    <group ref={group}>
      <lineSegments key={linePositions.length}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#39d9ff" transparent opacity={0.25} />
      </lineSegments>

      {skillsRadar.map((node, i) => (
        <group key={node.name} position={positions[i]}>
          <mesh
            onPointerDown={startDrag(i)}
            onPointerOver={(e) => {
              e.stopPropagation();
              if (!dragging) gl.domElement.style.cursor = "grab";
            }}
            onPointerOut={() => {
              if (!dragging) gl.domElement.style.cursor = "auto";
            }}
          >
            <sphereGeometry args={[0.12 + node.level * 0.06, 16, 16]} />
            <meshStandardMaterial
              color="#bff5ff"
              emissive="#39d9ff"
              emissiveIntensity={2.5}
            />
          </mesh>
          <Html center distanceFactor={8} style={{ pointerEvents: "none" }}>
            <div className="font-mono text-[10px] tracking-widest text-cyan whitespace-nowrap translate-y-4">
              {node.name}
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}

export function SkillsConstellation({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[6, 4, 6]} intensity={1.4} color="#39d9ff" />
        <pointLight position={[-4, -4, -4]} intensity={0.6} color="#ffb547" />
        <Suspense fallback={null}>
          <Constellation />
        </Suspense>
      </Canvas>
    </div>
  );
}
