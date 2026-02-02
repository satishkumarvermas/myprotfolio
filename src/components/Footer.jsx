import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 3rem 5%;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
  margin-top: 4rem;
`;

const CopyrightText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  
  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;


function Footer() {
  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </SocialLinks>
      <CopyrightText>© 2026 Satish Kumar Verma. All rights reserved.</CopyrightText>
    </FooterContainer>
  );
}

export default Footer;
