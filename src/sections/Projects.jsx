import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "CipherHub",
    description: "A web app for encryption & decryption using various ciphers, including quantum concepts.",
    tags: ["React", "Node.js", "Cryptography", "Quantum"],
    image: "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    sourceCode: "https://github.com/satishkumarvermas/CIPHERHUB",
    liveDemo: ""
  },
  {
    title: "FreshMart Landing Page",
    description: "A fully responsive landing page for a fictional grocery store, built with modern CSS.",
    tags: ["HTML", "CSS", "Responsive Design"],
    image: "https://picsum.photos/seed/project2/400/300",
    liveDemo: "https://satishkumarvermas.github.io/FreshMart/",
    sourceCode: "https://github.com/satishkumarvermas/FreshMart"
  },
  {
    title: "Simple Calculator",
    description: "A functional calculator with a clean UI, built with vanilla JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://picsum.photos/seed/project3/400/300",
    liveDemo: "https://satishkumarvermas.github.io/calculator/",
    sourceCode: "https://github.com/satishkumarvermas/calculator"
  }
];

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  ${({ theme }) => theme.styles.glassEffect};
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  flex-grow: 1;
  margin-bottom: 1rem;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.secondaryAccent};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  align-items: center;
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.5rem;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.1);
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

function Projects({ id }) {
  return (
    <Section id={id} title="My Projects">
      <ProjectsGrid>
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ImageContainer>
              <img src={project.image} alt={project.title} />
            </ImageContainer>
            <CardContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TagsContainer>
                {project.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </TagsContainer>
              <ProjectLinks>
                {project.sourceCode && (
                  <ProjectLink href={project.sourceCode} target="_blank" rel="noopener noreferrer" title="Source Code">
                    <FaGithub />
                  </ProjectLink>
                )}
                {project.liveDemo && (
                  <ProjectLink href={project.liveDemo} target="_blank" rel="noopener noreferrer" title="Live Demo">
                    <FaExternalLinkAlt />
                  </ProjectLink>
                )}
              </ProjectLinks>
            </CardContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Section>
  );
}

export default Projects;
