import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding-top: 70px; // Offset for navbar
`;

const Title = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;

  span {
    color: ${({ theme }) => theme.colors.accent};
    text-shadow: 0 0 15px ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.75rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2.5rem;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
`;

const Button = styled.a`
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
`;

const PrimaryButton = styled(Button)`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  box-shadow: 0 0 20px rgba(0, 245, 255, 0.5);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 30px rgba(0, 245, 255, 0.8);
  }
`;

const OutlineButton = styled(Button)`
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accent};

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};


function Hero({ id }) {
  return (
    <HeroContainer id={id}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Title variants={itemVariants}>
          Hi, I'm <span>Satish Kumar Verma</span>
        </Title>
        <Subtitle variants={itemVariants}>
          Frontend Developer | React
        </Subtitle>
        <ButtonContainer variants={itemVariants}>
          <PrimaryButton href="#contact">Hire Me</PrimaryButton>
          <OutlineButton href="/assets/SATISH_KR_VERMA_RESUME.pdf" download>
            Download Resume
          </OutlineButton>
        </ButtonContainer>
      </motion.div>
    </HeroContainer>
  );
}

export default Hero;
