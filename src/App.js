import styled from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  flex-grow: 1;
`;

function AppContent() {
  return (
    <AppContainer>
      <Navbar />
      <ContentWrapper>
        <Home />
      </ContentWrapper>
      <Footer />
    </AppContainer>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
