import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Experience from "./Experience.jsx";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Canvas
      gl={{ antialias: true }}
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [13, -3, -5],
      }}
    >
      <Experience />
    </Canvas>
    <Leva collapsed />
  </StrictMode>
);
