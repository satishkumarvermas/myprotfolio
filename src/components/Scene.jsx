import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, TorusKnot, MeshWobbleMaterial, SpotLight } from '@react-three/drei';
import { useTheme } from 'styled-components';

const WobblingTorus = () => {
  const theme = useTheme();
  const ref = useRef();
  
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.5;
      ref.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <TorusKnot ref={ref} args={[1, 0.4, 200, 32]} scale={1.5}>
      <MeshWobbleMaterial
        color={theme.colors.accent}
        factor={2}
        speed={2}
      />
    </TorusKnot>
  );
};

const Scene = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={-0.5} />
      <ambientLight intensity={0.2} />
      <SpotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />
      <directionalLight position={[-5, 5, 5]} intensity={1} />
      <WobblingTorus />
    </Canvas>
  );
};

export default Scene;
