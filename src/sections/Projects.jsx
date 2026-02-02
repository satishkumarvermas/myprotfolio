import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  ${({ theme }) => theme.styles.glassEffect};
  background: ${({ theme }) => theme.colors.secondary};
  padding: 2rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  flex-grow: 1;
  margin-bottom: 1.5rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
  border: 1px solid transparent;
  padding: 0.5rem 0;
  
  &:hover {
    text-decoration: underline;
  }
`;

const projects = [
  {
    title: "CipherHub",
    description: "Web application for encryption & decryption using RSA, AES, DES, Caesar Cipher, Hill Cipher, and Quantum concepts."
  },
  {
    title: "Landing Page",
    description: "Responsive landing page built using HTML and CSS."
  },
  {
    title: "Calculator",
    description: "Simple calculator using HTML, CSS, and JavaScript."
  }
];

function Projects({ id }) {
  return (
    <Section id={id} title="My Projects">
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.title}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLinks>
              <ProjectLink href="#">Live Demo</ProjectLink>
              <ProjectLink href="#">Source Code</ProjectLink>
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Section>
  );
}

export default Projects;
