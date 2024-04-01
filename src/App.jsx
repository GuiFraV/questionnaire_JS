import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function App() {
  return (
    <div className="h-screen bg-[#0b3d91]">
      <Canvas style={{ height: "100vh", width: "100vw" }}>
        <Stars />
      </Canvas>
    </div>
  );
}

export default App;
