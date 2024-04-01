import { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
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


export default StarAnimation;