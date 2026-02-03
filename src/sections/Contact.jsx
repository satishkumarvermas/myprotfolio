import React from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Torus } from '@react-three/drei';

const ContactContainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
`;

const Right = styled.div`
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
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid rgba(255, 255, 255, 0.1);
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
  border: 1px solid rgba(255, 255, 255, 0.1);
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
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  font-size: 1rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(88, 166, 255, 0.3);
  }
`;

const Atom = () => (
  <Canvas camera={{ position: [0, 0, 5] }}>
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
    <ambientLight intensity={0.5} />
    <directionalLight position={[3, 2, 1]} />
    <Sphere args={[0.3, 32, 32]}>
      <meshStandardMaterial color="#58A6FF" emissive="#58A6FF" emissiveIntensity={0.5} />
    </Sphere>
    {[...Array(3)].map((_, i) => (
      <Torus 
        key={i} 
        args={[1.5 + i * 0.5, 0.05, 16, 100]} 
        rotation={[i * Math.PI / 3, i * Math.PI / 4, 0]}
      >
        <meshStandardMaterial color="#8B949E" roughness={0.3} />
      </Torus>
    ))}
  </Canvas>
);


function Contact({ id }) {
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
    <Section id={id} title="Get In Touch">
      <ContactContainer>
        <Left>
          <Atom />
        </Left>
        <Right>
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
        </Right>
      </ContactContainer>
    </Section>
  );
}

export default Contact;
