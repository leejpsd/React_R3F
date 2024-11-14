import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Color } from "three";
import Meshes from "./Meshes";
import Meshes2 from "./Meshes2";
import Lights from "./Lights";

export default function MainCanvas() {
  // gl = renderer
  return (
    <Canvas
      gl={{ antialias: true }}
      shadows={"soft"}
      camera={{
        fov: 60,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 100,
        position: [5, 5, 5],
      }}
      scene={{ background: new Color(0x000000) }}
    >
      <OrbitControls />
      {/* <Meshes /> */}
      <Lights />
      <Meshes2 />
    </Canvas>
  );
}
