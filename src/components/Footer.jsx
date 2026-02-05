import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaInstagram, FaWhatsapp } from 'react-icons/fa';

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
  margin-bottom: 1.5rem;
`;

const PoweredBy = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  
  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    margin: 0 0.5rem;
    &:hover {
      text-decoration: underline;
    }
  }
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
        <SocialIcon href="https://www.instagram.com/mr_sillent.killer/" target="_blank" rel="noopener noreferrer"><FaInstagram /></SocialIcon>
        <SocialIcon href="https://wa.me/qr/DJXVXEO2XEWSF1" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></SocialIcon>
      </SocialLinks>
      <CopyrightText>© {new Date().getFullYear()} Satish Kumar Verma. All Rights Reserved.</CopyrightText>
      <PoweredBy>
        Powered by
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>,
        <a href="https://styled-components.com/" target="_blank" rel="noopener noreferrer">Styled Components</a>,
        <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer">Framer Motion</a> &
        <a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" target="_blank" rel="noopener noreferrer">React Three Fiber</a>
      </PoweredBy>
      <BackToTopButton onClick={scrollToTop} title="Back to Top">
        <FaArrowUp />
      </BackToTopButton>
    </FooterContainer>
  );
}

export default Footer;
