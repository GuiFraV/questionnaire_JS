import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function StarAnimation() {
  const starsRef = useRef();

  useFrame(({ clock }) => {
    starsRef.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  return (
    <Stars
      ref={starsRef}
      radius={50}
      depth={50}
      count={10000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
}

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
