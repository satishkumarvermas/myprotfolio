import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem;
  text-align: center;
`;

const SkillCard = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 1.5rem 1rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    transform: translateY(-5px);
    background: rgba(0, 245, 255, 0.1);
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Bootstrap",
  "Java",
  "MySQL",
  "Styled-Components",
  "Framer Motion"
];

function Skills({ id }) {
  return (
    <Section id={id} title="My Skills">
      <SkillsGrid>
        {skills.map((skill) => (
          <SkillCard key={skill}>{skill}</SkillCard>
        ))}
      </SkillsGrid>
    </Section>
  );
}

export default Skills;
