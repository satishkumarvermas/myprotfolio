import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from './theme';
import GlobalStyle from './GlobalStyles';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ParticlesComponent from './components/Particles';

const AppContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 5%;
  position: relative;
  z-index: 1;

  & > section {
    width: 100%;
    max-width: 1200px;
    margin-bottom: 8rem;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ParticlesComponent />
      <Navbar />
      <AppContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero id="hero" />
        <About id="about" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Contact id="contact" />
      </AppContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
