import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="canvas-loader">
        <div className="canvas-loader__ring" />
        <p>{progress.toFixed(0)}% loaded</p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
