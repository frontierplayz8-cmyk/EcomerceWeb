import { useGLTF } from "@react-three/drei";
import React, { forwardRef, useMemo } from "react";

const Shoe = forwardRef((props, ref) => {
  const model = useGLTF("/EcomerceWeb/shoe.glb");
  const scene = useMemo(() => model.scene.clone(), [model.scene]);

  return (
    <primitive
      ref={ref}
      rotation={[0, Math.PI / 1.1, 0]}
      object={scene}
      position={[-5, 3, 10]}
      {...props}
    />
  );
});

useGLTF.preload("/shoe.glb");

export default Shoe;
