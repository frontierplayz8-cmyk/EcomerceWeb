import { useGLTF } from "@react-three/drei";
import React, { useMemo, useRef, useCallback, Suspense } from "react";
import { forwardRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";


const Earth = forwardRef((props, ref) => {
  const model = useGLTF("/earth.glb");
  const scene = useMemo(() => model.scene.clone(), [model.scene]);
  const localRef = useRef(null);

  const setRefs = useCallback(
    (node) => {
      localRef.current = node;
      if (!ref) return;
      if (typeof ref === "function") {
        ref(node);
      } else {
        ref.current = node;
      }
    },
    [ref]
  );

  useFrame((_, delta) => {
    if (!localRef.current) return;
    localRef.current.rotation.y += delta * 0.15;
    localRef.current.rotation.z += delta * 0.15;
  });

  return <primitive ref={setRefs} position={[11.3, 0, 0]} object={scene} {...props} />;
});

useGLTF.preload("/earth.glb")

export default Earth;