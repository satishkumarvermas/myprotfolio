import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  height: 70px;
  z-index: 1000;
  ${({ theme, isScrolled }) => isScrolled && theme.styles.glassEffect};
  transition: background 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;
`;

const Logo = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  @media (max-width: 768px) {
    display: none; // Basic responsiveness: hide on small screens
  }
`;

const NavLink = styled.li`
  margin: 0 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: color 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const HireButton = styled.a`
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accent};
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
  }
`;


function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Nav isScrolled={isScrolled}>
      <Logo onClick={scrollToTop} title="Satish Kumar Verma">SKV</Logo>
      <NavLinks>
        <NavLink><a href="#about">About</a></NavLink>
        <NavLink><a href="#skills">Skills</a></NavLink>
        <NavLink><a href="#projects">Projects</a></NavLink>
        <NavLink><a href="#contact">Contact</a></NavLink>
      </NavLinks>
      <HireButton href="#contact">Hire Me</HireButton>
    </Nav>
  );
}

export default Navbar;

