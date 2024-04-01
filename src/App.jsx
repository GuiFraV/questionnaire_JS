import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';

import StarAnimation from './components/Stars';

function App() {
  const textRef = useRef();
  const buttonRef = useRef();

  const handleClick = () => {
    gsap.to(textRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        textRef.current.style.display = 'none';
      },
    });

    gsap.to(buttonRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        buttonRef.current.style.display = 'none';
      },
    });
  };

  return (
    <div className="h-screen bg-[#0b3d91]">
      <Canvas className="min-h-screen min-w-full">
        <StarAnimation />
      </Canvas>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div ref={textRef} className="text-white text-4xl font-bold mb-4">
          Are you ready for the Test?
        </div>
        <button
          ref={buttonRef}
          onClick={handleClick}
          className="bg-white text-[#0b3d91] px-4 py-2 rounded-md"
        >
          START
        </button>
      </div>
    </div>
  );
}

export default App;
