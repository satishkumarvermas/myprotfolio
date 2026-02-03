import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaJava, 
  FaGitAlt, FaGithub, FaFigma 
} from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiPostgresql, SiStyledcomponents, SiFramer } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJsSquare /> },
      { name: 'Bootstrap', icon: <FaBootstrap /> },
      { name: 'Styled Components', icon: <SiStyledcomponents /> },
      { name: 'Framer Motion', icon: <SiFramer /> },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
    ]
  },
  {
    title: 'Tools & Other',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Figma', icon: <FaFigma /> },
    ]
  }
];

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Category = styled.div`
  width: 100%;
`;

const CategoryTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
`;

const SkillCard = styled(motion.div)`
  ${({ theme }) => theme.styles.flexCenter};
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  ${({ theme }) => theme.styles.glassEffect};
  ${({ theme }) => theme.styles.boxShadow};
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(88, 166, 255, 0.1);
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.accent};
`;

const SkillName = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

function Skills({ id }) {
  return (
    <Section id={id} title="My Skills">
      <SkillsContainer>
        {skillCategories.map((category, index) => (
          <Category key={index}>
            <CategoryTitle>{category.title}</CategoryTitle>
            <SkillsGrid>
              {category.skills.map((skill, i) => (
                <SkillCard
                  key={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                </SkillCard>
              ))}
            </SkillsGrid>
          </Category>
        ))}
      </SkillsContainer>
    </Section>
  );
}

export default Skills;
