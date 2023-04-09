import { useThree } from "@react-three/fiber";
import { Plane, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Background() {
  const height = useTexture("./displacement.jpg");
  const normal = useTexture("./NormalMap2.png");

  normal.anisotropy = 16;

  normal.wrapS = normal.wrapT = THREE.RepeatWrapping;
  normal.repeat = new THREE.Vector2(3, 30);

  height.wrapS = height.wrapT = THREE.RepeatWrapping;
  height.repeat = new THREE.Vector2(1, 2);

  height.anisotropy = 16;
  const viewport = useThree((state) => state.viewport);

  return (
    <group>
      <Plane
        scale={[viewport.width / 2, viewport.height / 0.95, 1]}
        rotation={[0, 0, 0]}
        position={[0, 0, 0]}
        args={[2, 1, 2, 2]}
      >
        <meshPhysicalMaterial
          color="#121423"
          metalness={0.9}
          roughness={0.3}
          displacementMap={height}
          displacementScale={0.1}
          normalMap={normal}
          normalScale={0.25}
        />
      </Plane>
    </group>
  );
}
