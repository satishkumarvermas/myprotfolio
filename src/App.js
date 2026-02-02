import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyle from './GlobalStyles';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 5%;

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
      <Navbar />
      <AppContainer>
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
