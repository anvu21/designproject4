import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Test = () => {
  //const test = useGLTF("./New_planet/scene.gltf");
  //const earth = test.nodes.planet_gas_2;
  const earth = useGLTF("./purple_planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={1.5} position-y={0} rotation-y={0} />
  );
};

const Purple_planet = () => {
  return (
    <div style={{ width: '300px', height: '300px' }}>
     <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Test />
        <Preload all />
      </Suspense>
    </Canvas>
    </div>
  );
  
};

export default Purple_planet;