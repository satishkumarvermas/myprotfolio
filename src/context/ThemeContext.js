import React, { createContext, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme } from '../theme';
import GlobalStyle from '../GlobalStyles';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Theme is permanently set to dark
  const currentTheme = darkTheme;

  return (
    <ThemeContext.Provider value={{ theme: 'dark' }}>
      <StyledThemeProvider theme={currentTheme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
