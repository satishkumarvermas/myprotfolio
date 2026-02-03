import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 70px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 1;

  @media (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
    height: 300px; /* Give a fixed height for the canvas on mobile */
  }
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Line = styled.div`
  width: 2rem;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.accent};
`;

const AnimatedSubtitle = styled(motion.h2)`
  font-size: 1.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
`;

const Description = styled(motion.p)`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const PrimaryButton = styled(motion.a)`
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  box-shadow: 0 0 20px rgba(88, 166, 255, 0.5);
  display: inline-block;
  width: fit-content;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 0 30px rgba(88, 166, 255, 0.8);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
  }
`;

const roles = ["Web Developer", "React Enthusiast", "UI/UX Designer", "Creative Coder"];

function Hero({ id }) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer id={id}>
      <Left>
        <Title>Satish Kumar Verma</Title>
        <SubtitleContainer>
          <Line />
          <AnimatePresence mode="wait">
            <AnimatedSubtitle
              key={roles[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {roles[index]}
            </AnimatedSubtitle>
          </AnimatePresence>
        </SubtitleContainer>
        <Description>
          I design and develop services for customers of all sizes,
          specializing in creating stylish, modern websites, web services and
          online stores.
        </Description>
        <PrimaryButton href="#projects">View My Work</PrimaryButton>
        <SocialLinks>
          <SocialIcon href="https://github.com/satishverma2004" target="_blank" rel="noopener noreferrer"><FaGithub /></SocialIcon>
          <SocialIcon href="https://linkedin.com/in/satish-kumar-verma-9526b3294" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></SocialIcon>
        </SocialLinks>
      </Left>
      <Right>
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#58A6FF"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Canvas>
      </Right>
    </HeroContainer>
  );
}

export default Hero;
