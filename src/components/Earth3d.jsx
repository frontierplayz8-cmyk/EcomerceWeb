import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import Earth from "./earth";
import Canvaloader from "./CanvasLoader"


const Earth3d = () => {
    return (
        <Canvas camera={{ position: [12,0,0] , fov:45 }}
  gl={{antialias: true, powerPreference: "high-performance" }} >
    <Suspense fallback={<Canvaloader />}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 20, 10]} intensity={0.5} />
      <Earth />
      <Environment preset='studio'/>
    </Suspense>
  </Canvas>
    )
}

export default Earth3d