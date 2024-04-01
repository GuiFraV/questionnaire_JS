import React from 'react';
import { Canvas } from '@react-three/fiber';
import StarAnimation from './components/Stars';


function App() {
  return (
    <div className="h-screen bg-[#0b3d91]">
      <Canvas className="min-h-screen min-w-full">
        <StarAnimation />
      </Canvas>
    </div>
  );
}

export default App;
