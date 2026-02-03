import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 3rem 5%;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
  margin-top: 8rem;
  position: relative;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
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

const CopyrightText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const BackToTopButton = styled.button`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  ${({ theme }) => theme.styles.flexCenter};
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(88, 166, 255, 0.3);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(88, 166, 255, 0.5);
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
  }
`;

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      <SocialLinks>
        <SocialIcon href="https://github.com/satishverma2004" target="_blank" rel="noopener noreferrer"><FaGithub /></SocialIcon>
        <SocialIcon href="https://linkedin.com/in/satish-kumar-verma-9526b3294" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialIcon>
        <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></SocialIcon>
      </SocialLinks>
      <CopyrightText>© {new Date().getFullYear()} Satish Kumar Verma. All Rights Reserved.</CopyrightText>
      <BackToTopButton onClick={scrollToTop} title="Back to Top">
        <FaArrowUp />
      </BackToTopButton>
    </FooterContainer>
  );
}

export default Footer;
