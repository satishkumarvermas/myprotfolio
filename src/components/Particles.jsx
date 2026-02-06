import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { particlesConfig } from '../utils/particlesConfig';

const ParticlesComponent = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesComponent;
