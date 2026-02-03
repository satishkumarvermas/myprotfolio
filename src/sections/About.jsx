import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../components/Section';

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  ${({ theme }) => theme.styles.flexCenter};
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.colors.accent};
  box-shadow: 0 0 30px rgba(88, 166, 255, 0.5);
`;

const TextContainer = styled(motion.div)`
  flex: 2;
  padding: 2rem;
  ${({ theme }) => theme.styles.glassEffect};
  ${({ theme }) => theme.styles.boxShadow};
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

const OutlineButton = styled.a`
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  display: inline-block;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

function About({ id }) {
  return (
    <Section id={id} title="About Me">
      <AboutContainer>
        <ImageContainer
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <Image src="https://picsum.photos/seed/picsum/400/400" alt="Satish Kumar Verma" />
        </ImageContainer>
        <TextContainer
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AboutText>
            I am a passionate and results-driven Computer Science student with a 
            strong foundation in frontend development. My journey in tech has been
            fueled by a desire to create beautiful, intuitive, and high-performance
            web experiences. I thrive on turning complex problems into simple,
            elegant solutions.
          </AboutText>
          <OutlineButton href="/assets/SATISH_KR_VERMA_RESUME.pdf" download>
            Download Resume
          </OutlineButton>
        </TextContainer>
      </AboutContainer>
    </Section>
  );
}

export default About;
