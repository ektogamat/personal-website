import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Background from "./Background";
import LightSource from "./Lightsource";
import Effects from "./Effects";

import { Leva } from "leva";
import * as THREE from "three";
import "./styles.css";
import { Loader } from "@react-three/drei";
import Overlay from "./Overlay";

export default function App() {
  return (
    <>
      <Canvas
        id="my-canvas"
        gl={{
          antialias: false,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.LinearToneMapping,
          toneMappingExposure: 3
        }}
        dpr={1}
      >
        <Suspense fallback={null}>
          <LightSource />
          <Background />
          <Effects />
        </Suspense>
        <Leva collapsed hidden />
      </Canvas>
      <Overlay />
      <Loader />
    </>
  );
}
