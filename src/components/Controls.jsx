import {
  FirstPersonControls,
  FlyControls,
  OrbitControls,
  PointerLockControls,
  TrackballControls,
} from "@react-three/drei";

export default function Controls() {
  return (
    <OrbitControls />

    // <OrbitControls
    //   enableDamping // 감속 효과를 활성화하여 카메라 이동이 부드러워짐
    //   dampingFactor={0.03} // 감속 효과의 강도 설정
    //   enableZoom // 줌 기능 활성화
    //   enablePan // 팬 기능 활성화 (마우스 드래그로 평행 이동)
    //   // autoRotate // 자동 회전 활성화
    //   // autoRotateSpeed={1} // 자동 회전 속도
    //   maxPolarAngle={Math.PI / 2} // 위아래로 이동 가능한 최대 각도 (세로 축 기준)
    //   minPolarAngle={Math.PI / 4} // 위아래로 이동 가능한 최소 각도
    //   maxAzimuthAngle={Math.PI / 2} // 좌우로 이동 가능한 최대 각도 (수평 축 기준)
    //   minAzimuthAngle={-Math.PI / 2} // 좌우로 이동 가능한 최소 각도
    // />
    // OrbitControls: 카메라를 주위를 도는 궤도형 컨트롤로, 줌, 팬, 회전 가능.

    // <FlyControls
    //   movementSpeed={1} // 이동 속도 설정
    //   rollSpeed={Math.PI / 20} // 회전 속도 설정
    //   autoForward={false} // 자동으로 앞으로 이동 여부
    // />
    // FlyControls: 자유롭게 3D 공간을 비행하며 움직이는 컨트롤.

    // <FirstPersonControls
    //   lookSpeed={0.1} // 카메라 시점 이동 속도
    //   movementSpeed={1} // 카메라 이동 속도
    //   lookVertical={false} // 위아래 시점 이동 여부
    // />
    // FirstPersonControls: 1인칭 시점으로 마우스 및 키보드로 이동 가능.

    // <PointerLockControls />
    // PointerLockControls: 마우스 커서를 숨기고 화면의 중앙에서 컨트롤하도록 고정.
    // 주로 1인칭 시점의 게임 컨트롤에 사용.

    // <TrackballControls
    //   rotateSpeed={2} // 회전 속도
    //   zoomSpeed={1.5} // 줌 속도
    //   panSpeed={0.5} // 팬 이동 속도
    //   noRotate={false} // 회전 비활성화 여부
    //   noZoom={false} // 줌 비활성화 여부
    //   noPan={false} // 팬 비활성화 여부
    //   staticMoving={false} // 정적 이동 여부 (true면 움직임이 멈추는 데 시간이 걸리지 않음)
    //   dynamicDampingFactor={0.05} // 움직임 감속 효과 설정
    // />
    // TrackballControls: 트랙볼처럼 마우스를 사용해 자유롭게 회전, 줌, 팬 가능.
  );
}
