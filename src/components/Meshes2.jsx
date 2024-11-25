import { Plane, TorusKnot } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

export default function Meshes() {
  return (
    <>
      {/* 바닥 평면: 크기를 설정하고 그림자를 받을 수 있도록 설정 */}
      <Plane args={[40, 40]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Plane>

      {/* 토러스 노트 (Torus Knot) - 메탈릭 재질 */}
      {/* 색상: 빨간색, 위치: (-3, 1.6, 0), 거친 정도: 0.5, 금속성: 1 */}
      {/* <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[-3, 1.6, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={0xff0000} />
      </TorusKnot> */}
    </>
  );
}
