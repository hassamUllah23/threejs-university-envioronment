/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

type Props = {};

export default function Threefiber({}: Props) {
  const [width, height, depth] = [10, 5, 5];
  const [x, y, z] = [0, 0, 5];

  return (
    <div>
      <Canvas>
        <mesh>
          {/* <boxGeometry args={[width, height, depth]} />
          <meshMatcapMaterial />
          <ambientLight intensity={0.1} />
          <directionalLight color={"red"} position={[x, y, z]} /> */}
          <MyAnimatedBox />
        </mesh>
      </Canvas>
    </div>
  );
}

function MyAnimatedBox() {
  useFrame(({ scene, clock }) => {
    console.log(clock.getElapsedTime());
    meshRef.current.rotation.x = Math.sin(clock.getElapsedTime());
  });

  const meshRef = useRef(null);

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[10, 10, 3]} />
      <meshNormalMaterial />
    </mesh>
  );
}
