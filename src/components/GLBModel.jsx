import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function GLBModel() {
  const { scene } = useGLTF("/dancer.glb");

  useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  }, []);
  return <primitive object={scene} scale={0.01} position-y={0.8} />;
}
