import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

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
  transition: all 0.3s ease-in-out;
`;

const Logo = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  z-index: 1001;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
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

const HireButton = styled(motion.a)`
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accent};
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s;
  z-index: 1001;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1001;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.styles.flexCenter};
  flex-direction: column;
  list-style: none;
  z-index: 1000;
`;

const MobileNavLink = styled(motion.li)`
  margin: 2rem 0;
  font-size: 2rem;
  font-weight: 600;
  a {
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Nav isScrolled={isScrolled}>
        <Logo onClick={scrollToTop} title="Satish Kumar Verma">SKV</Logo>
        <NavLinks>
          <NavLink><a href="#about">About</a></NavLink>
          <NavLink><a href="#skills">Skills</a></NavLink>
          <NavLink><a href="#projects">Projects</a></NavLink>
          <NavLink><a href="#contact">Contact</a></NavLink>
        </NavLinks>
        <HireButton href="#contact">Hire Me</HireButton>
        <MobileNavIcon onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileNavIcon>
      </Nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileNavMenu
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <MobileNavLink variants={linkVariants}><a href="#about" onClick={toggleMobileMenu}>About</a></MobileNavLink>
            <MobileNavLink variants={linkVariants}><a href="#skills" onClick={toggleMobileMenu}>Skills</a></MobileNavLink>
            <MobileNavLink variants={linkVariants}><a href="#projects" onClick={toggleMobileMenu}>Projects</a></MobileNavLink>
            <MobileNavLink variants={linkVariants}><a href="#contact" onClick={toggleMobileMenu}>Contact</a></MobileNavLink>
          </MobileNavMenu>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

