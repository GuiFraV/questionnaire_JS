import React from 'react';
import { Canvas } from '@react-three/fiber';
import StarAnimation from './components/Stars';


function App() {
  return (
    <div className="h-screen bg-[#0b3d91]">
      <Canvas className="min-h-screen min-w-full">
        <StarAnimation />
      </Canvas>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
        Are you ready for the Test ?
      </div>
    </div>
  );
}

export default App;
