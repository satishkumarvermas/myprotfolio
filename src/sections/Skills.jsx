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
      { name: 'React', icon: <FaReact />, docUrl: 'https://www.w3schools.com/react/' },
      { name: 'HTML5', icon: <FaHtml5 />, docUrl: 'https://www.w3schools.com/html/' },
      { name: 'CSS3', icon: <FaCss3Alt />, docUrl: 'https://www.w3schools.com/css/' },
      { name: 'JavaScript', icon: <FaJsSquare />, docUrl: 'https://www.w3schools.com/js/' },
      { name: 'Bootstrap', icon: <FaBootstrap />, docUrl: 'https://www.w3schools.com/bootstrap/' },
      { name: 'Styled Components', icon: <SiStyledcomponents />, docUrl: 'https://www.freecodecamp.org/news/styled-components-tutorial-for-beginners/' },
      { name: 'Framer Motion', icon: <SiFramer />, docUrl: 'https://www.freecodecamp.org/news/framer-motion-tutorial-for-beginners/' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java', icon: <FaJava />, docUrl: 'https://www.w3schools.com/java/' },
      { name: 'Spring Boot', icon: <SiSpringboot />, docUrl: 'https://www.freecodecamp.org/news/spring-boot-tutorial-for-beginners/' },
      { name: 'MySQL', icon: <SiMysql />, docUrl: 'https://www.w3schools.com/sql/' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, docUrl: 'https://www.w3schools.com/sql/' },
    ]
  },
  {
    title: 'Tools & Other',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, docUrl: 'https://www.w3schools.com/git/' },
      { name: 'GitHub', icon: <FaGithub />, docUrl: 'https://docs.github.com/en/get-started' },
      { name: 'Figma', icon: <FaFigma />, docUrl: 'https://www.figma.com/learn/' },
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

const SkillCardLink = styled(motion.a)`
  text-decoration: none;
`;

const SkillCard = styled.div`
  ${({ theme }) => theme.styles.flexCenter};
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  ${({ theme }) => theme.styles.glassEffect};
  ${({ theme }) => theme.styles.boxShadow};
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;

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
                <SkillCardLink
                  key={i}
                  href={skill.docUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <SkillCard>
                    <SkillIcon>{skill.icon}</SkillIcon>
                    <SkillName>{skill.name}</SkillName>
                  </SkillCard>
                </SkillCardLink>
              ))}
            </SkillsGrid>
          </Category>
        ))}
      </SkillsContainer>
    </Section>
  );
}

export default Skills;
