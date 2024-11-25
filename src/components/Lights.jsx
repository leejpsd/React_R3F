import { SpotLight, useHelper } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Lights() {
  const lightRef = useRef(null);
  const targetRef = useRef(null);
  const [target, setTarget] = useState();

  // useHelper 함수는 3D 환경에서 특정 라이트나 객체에 대한 헬퍼(보조선)를 추가해 시각적 확인을 도와줍니다.
  // 각 라이트 헬퍼의 예시는 아래와 같습니다.
  // useHelper(lightRef, THREE.DirectionalLightHelper, 3, 0xffff00); // Directional Light의 방향을 확인
  // useHelper(lightRef, THREE.PointLightHelper, 1, 0xffff00);       // Point Light의 범위와 위치를 확인
  // useHelper(lightRef, THREE.HemisphereLightHelper, 1, 0xffff00);  // Hemisphere Light의 상하 색상 범위를 확인
  // useHelper(lightRef, THREE.SpotLightHelper, 1, 0xffff00); // Spot Light의 방향과 범위 확인

  useEffect(() => {
    if (targetRef.current) setTarget(targetRef.current);
  }, []);

  return (
    // <ambientLight args={[0xffffff, 10]} />
    // Ambient Light: 장면 전체에 부드러운 빛을 주어 모든 객체가 같은 빛을 받게 하는 조명.
    // args: [color, intensity]
    // color: 빛의 색상 (기본값 0xffffff)
    // intensity: 빛의 세기

    <directionalLight
      ref={lightRef}
      castShadow
      args={[0xffffff, 5]}
      position={[4, 4, 4]}
      //그림자가 그려지는 범위
      shadow-camera-left={-25}
      shadow-camera-right={25}
      shadow-camera-top={25}
      shadow-camera-bottom={-25}
      shadow-camera-near={0.1}
      shadow-camera-far={1000}
      //그림자 퀄리티
      shadow-mapSize-width={4096}
      shadow-mapSize-height={4096}
    />
    // Directional Light: 태양광처럼 특정 방향으로 빛을 비추는 라이트, 그림자를 생성 가능.
    // position: 빛의 위치
    // castShadow: 그림자 활성화
    // shadow-camera-* 속성들: 그림자 카메라의 범위를 설정

    // <pointLight
    //   ref={lightRef}
    //   args={[0xffffff, 10, 10, 1]}
    //   position-y={2}
    //   castShadow
    // />
    // Point Light: 전구처럼 특정 지점에서 모든 방향으로 빛을 발산하는 라이트.
    // args: [color, intensity, distance, decay]
    // distance: 빛이 도달하는 최대 거리
    // decay: 거리 따라 빛이 약해지는 정도

    // <hemisphereLight
    //   ref={lightRef}
    //   args={[0x0000ff, 0xf00ff0, 5]}
    //   position-y={2}
    // />
    // Hemisphere Light: 하늘과 땅의 색을 사용해 빛을 비추는 라이트.
    // args: [skyColor, groundColor, intensity]
    // skyColor: 상부 색상
    // groundColor: 하부 색상
    // intensity: 빛의 세기

    // <rectAreaLight
    //   args={[0xffffff, 5, 4, 4]}
    //   position-y={1}
    //   rotation-x={-Math.PI / 2}
    // />
    // RectArea Light: 특정 사각형 영역에서 빛을 발산하는 라이트 (ex. 창문을 통해 들어오는 빛).
    // args: [color, intensity, width, height]
    // width, height: 빛을 발산하는 영역의 크기

    // <spotLight
    //   ref={lightRef}
    //   args={[0xffffff, 10, 100, Math.PI / 4, 1, 0.5]}
    //   castShadow
    //   position={[3, 3, 3]}
    // />
    // Spot Light: 특정 위치에서 원뿔 형태로 빛을 비추는 라이트 (ex. 스포트라이트).
    // args: [color, intensity, distance, angle, penumbra, decay]
    // angle: 빛이 퍼지는 각도 (라디안)
    // penumbra: 가장자리의 부드러움 정도
    // decay: 거리 따라 빛이 약해지는 정도

    // <SpotLight
    //   color={0xffffff} // 빛의 색상
    //   intensity={10} // 빛의 세기
    //   distance={100} // 빛이 도달하는 거리
    //   angle={Math.PI / 4} // 빛이 퍼지는 각도 (라디안)
    //   penumbra={1} // 빛이 가장자리에서 자연스럽게 퍼지는 정도
    //   decay={0.5} // 빛이 거리 따라 희미해지는 정도
    //   anglePower={100} // 빛이 퍼지는 각도 조정
    //   attenuation={5} // 빛의 감쇠 효과
    //   radiusTop={1} // 원뿔 상단의 반경
    //   radiusBottom={10} // 원뿔 하단의 반경
    //   opacity={1} // 빛의 불투명도
    //   volumetric // 볼류메트릭 효과(빛의 존재감이 더 강하게 표시됨)
    //   debug // 디버그 모드 활성화, 조명 시각화 확인 가능
    //   position={[3, 3, 3]} // 빛의 위치
    //   target={target} // 빛의 목표가 되는 위치 (target)
    // />
  );
}
