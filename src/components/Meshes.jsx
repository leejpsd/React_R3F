import {
  Box,
  Circle,
  Cone,
  Cylinder,
  Plane,
  Sphere,
  Torus,
  TorusKnot,
} from "@react-three/drei";
import React from "react";
import * as THREE from "three";

export default function Meshes() {
  return (
    <>
      {/* 메쉬의 기본 포지션은 0, 0, 0이므로 각 메쉬를 다른 위치에 배치하여 잘 보이도록 합니다 */}

      {/* 바닥 평면: 크기를 설정하고 그림자를 받을 수 있도록 설정 */}
      <Plane args={[40, 40]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Plane>

      {/* 기본 큐브 (Box) */}
      {/* 크기: 1x1x1, 위치: y축 0.5 */}
      <Box args={[1, 1, 1]} castShadow position-y={0.5}>
        <meshStandardMaterial color={0xff0000} /> {/* 빨간색 */}
      </Box>

      {/* 구 (Sphere) */}
      {/* 반지름: 1, 위치: (0, 1, 3), 색상: 노란색 */}
      <Sphere args={[1]} position={[0, 1, 3]} material-color={0xffff00} />

      {/* 원형 평면 (Circle) */}
      {/* 반지름: 1, 위치: (0, 1, -3), 색상: 보라색, 양면 렌더링 */}
      <Circle
        args={[1]}
        position={[0, 1, -3]}
        material-color={"violet"}
        material-side={THREE.DoubleSide}
      />

      {/* 원뿔 (Cone) */}
      {/* 반지름: 1, 높이: 2, 위치: (3, 1, 2), 색상: 갈색 */}
      <Cone args={[1, 2]} position={[3, 1, 2]} material-color={"brown"} />

      {/* 원통 (Cylinder) */}
      {/* 윗면 반지름: 2, 아랫면 반지름: 1, 높이: 2, 위치: (3, 1, -3), 색상: 분홍색 */}
      <Cylinder
        args={[2, 1, 2]}
        position={[3, 1, -3]}
        material-color={"pink"}
      />

      {/* 도넛 모양 (Torus) */}
      {/* 반지름: 1, 두께: 0.2, 위치: (-3, 1.2, -3), 색상: 핫핑크 */}
      <Torus
        args={[1, 0.2]}
        position={[-3, 1.2, -3]}
        material-color={"hotpink"}
      />

      {/* 토러스 노트 (Torus Knot) - 메탈릭 재질 */}
      {/* 색상: 빨간색, 위치: (-3, 1.6, 0), 거친 정도: 0.5, 금속성: 1 */}
      <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[-3, 1.6, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={0xff0000} roughness={0.5} metalness={1} />
      </TorusKnot>

      {/* 토러스 노트 (Torus Knot) - 램버트 재질 */}
      {/* 색상: 파란색, 발광색: 빨간색, 발광 강도: 0.5 */}
      <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[-7, 1.6, 0]}
        castShadow
        receiveShadow
      >
        <meshLambertMaterial
          color={0x0abff0}
          emissive={0xff0000} // 발광 색상
          emissiveIntensity={0.5} // 발광 강도
        />
      </TorusKnot>

      {/* 토러스 노트 (Torus Knot) - 퐁 재질 */}
      {/* 색상: 빨간색, 발광색: 초록색, 발광 강도: 0.5, 스펙큘러 컬러: 파란색, 광택도: 100 */}
      <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[-11, 1.6, 0]}
        castShadow
        receiveShadow
      >
        <meshPhongMaterial
          color={0xff0000} // 기본 색상
          emissive={0x00ff00} // 발광 색상
          emissiveIntensity={0.5} // 발광 강도
          specular={0x0000ff} // 스펙큘러 컬러 (가장 밝은 부분의 색상)
          shininess={100} // 광택도 (값이 클수록 반사되는 빛이 뚜렷함)
        />
      </TorusKnot>

      {/* 토러스 노트 (Torus Knot) - 뎁스 재질 */}
      {/* 투명도: 0.5 */}
      <TorusKnot
        args={[1, 0.2, 128, 128, 2, 3]}
        position={[-15, 1.6, 0]}
        castShadow
        receiveShadow
      >
        <meshDepthMaterial opacity={0.5} />
      </TorusKnot>
    </>
  );
}
