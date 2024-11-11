import { Canvas } from "@react-three/fiber";
import React from "react";
import { Color } from "three";

export default function MainCanvas() {
  // gl = renderer
  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{
        fov: 60,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 100,
        position: [5, 5, 5],
      }}
      scene={{ background: new Color(0x000000) }}
    >
      {/* mesh 의 기본 포지션 0,0,0 */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={0xff0000} />
      </mesh>
    </Canvas>
  );
}
