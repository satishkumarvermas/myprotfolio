import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Torus } from '@react-three/drei';
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaJava, FaFigma, FaExternalLinkAlt, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiPostgresql, SiStyledcomponents, SiFramer } from 'react-icons/si';
import Section from '../components/Section';
import emailjs from 'emailjs-com';

// Hero Section Styles
const breathingAnimation = keyframes`
  0% {
    box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);
  }
  50% {
    box-shadow: 0 0 30px rgba(0, 123, 255, 0.8);
  }
  100% {
    box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);
  }
`;

const HeroContainer = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Make it full viewport height */
  padding-top: 80px; /* Account for navbar height */
  padding-bottom: 50px; /* Add some padding at the bottom */
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 2rem; /* Keep existing horizontal padding */
  padding-right: 2rem; /* Keep existing horizontal padding */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding-top: 80px; /* Adjust for mobile too */
    padding-bottom: 30px;
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
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  box-shadow: 0 0 20px rgba(0, 123, 255, 0.5);
  display: inline-block;
  width: fit-content;
  text-decoration: none;
  animation: ${breathingAnimation} 3s ease-in-out infinite;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 0 30px rgba(0, 123, 255, 0.8);
    animation-play-state: paused;
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

// About Section Styles
const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
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
  box-shadow: 0 0 30px rgba(0, 123, 255, 0.5);

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const TextContainer = styled(motion.div)`
  flex: 2;
  padding: 2rem;
  ${({ theme }) => theme.styles.glassEffect};
  ${({ theme }) => theme.styles.boxShadow};

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;



const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
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

// Skills Section Styles
const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 480px) {
    padding: 0 1rem;
    gap: 2rem;
  }
`;

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

  @media (max-width: 480px) {
    font-size: 1.5rem;
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
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
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

const skillCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

// Projects Section Styles
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

const projects = [
  {
    title: "CipherHub",
    description: "A web app for encryption & decryption using various ciphers, including quantum concepts.",
    tags: ["React", "Node.js", "Cryptography", "Quantum"],
    image: "https://picsum.photos/seed/project1/400/300",
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

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(255, 255, 255, 0.1);
  }
`;

const ProjectImageContainer = styled.div`
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

const projectCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

// Contact Section Styles
const ContactContainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const ContactLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 500px;

  @media (max-width: 768px) {
    height: 300px;
    width: 100%;
  }
`;

const ContactRight = styled.div`
  flex: 1;
`;

const FormContainer = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;
  ${({ theme }) => theme.styles.glassEffect};
  ${({ theme }) => theme.styles.boxShadow};
  border-radius: 15px;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  font-size: 1rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 123, 255, 0.3);
  }
`;

const Atom = () => (
  <Canvas camera={{ position: [0, 0, 5] }}>
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
    <ambientLight intensity={0.5} />
    <directionalLight position={[3, 2, 1]} />
    <Sphere args={[0.3, 32, 32]}>
      <meshStandardMaterial color="#007BFF" emissive="#007BFF" emissiveIntensity={0.5} />
    </Sphere>
    {[...Array(3)].map((_, i) => (
      <Torus 
        key={i} 
        args={[1.5 + i * 0.5, 0.05, 16, 100]} 
        rotation={[i * Math.PI / 3, i * Math.PI / 4, 0]}
      >
        <meshStandardMaterial color="#6C757D" roughness={0.3} />
      </Torus>
    ))}
  </Canvas>
);

const roles = ["Web Developer", "React Enthusiast", "UI/UX Designer", "Creative Coder"];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_2lq6bch",
      "template_2cxvasz",
      e.target,
      "HaVMFW383yRF1vdjX"
    ).then((result) => {
        console.log(result.text);
        alert("Message sent successfully! 🚀");
    }, (error) => {
        console.log(error.text);
        alert("An error occurred, please try again.");
    });

    e.target.reset();
  };


  return (
    <>
      <HeroContainer
        id="home"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
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
            <SocialIcon href="https://github.com/satishkumarvermas" target="_blank" rel="noopener noreferrer"><FaGithub /></SocialIcon>
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
                color="#007BFF"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
        </Right>
      </HeroContainer>

      <Section id="about" title="About Me">
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

      <Section id="skills" title="My Skills">
        <SkillsContainer>
          {skillCategories.map((category, index) => (
            <Category key={index}>
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillsGrid>
                {category.skills.map((skill, i) => (
                  <SkillCard
                    key={i}
                    variants={skillCardVariants}
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

      <Section id="projects" title="My Projects">
        <ProjectsGrid>
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              variants={projectCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectImageContainer>
                <img src={project.image} alt={project.title} />
              </ProjectImageContainer>
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

      <Section id="contact" title="Get In Touch">
        <ContactContainer>
          <ContactLeft>
            <Atom />
          </ContactLeft>
          <ContactRight>
            <FormContainer 
              onSubmit={sendEmail}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <Input type="text" name="from_name" placeholder="Your Name" required />
              <Input type="email" name="from_email" placeholder="Your Email" required />
              <TextArea name="message" placeholder="Your Message" required />
              <SubmitButton type="submit">Send Message</SubmitButton>
            </FormContainer>
          </ContactRight>
        </ContactContainer>
      </Section>
    </>
  );
}

export default Home;
