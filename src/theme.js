export const theme = {
  colors: {
    primary: '#1A1A2E',
    secondary: '#16213E',
    accent: '#00F5C4',
    secondaryAccent: '#E94560',
    text: '#EAEAEA',
    textSecondary: '#A9A9A9',
    gradient: 'linear-gradient(270deg, #16213E, #1A1A2E)',
  },
  fonts: {
    main: "'Poppins', sans-serif",
    heading: "'Montserrat', sans-serif",
  },
  fontSizes: {
    small: '0.875rem',
    p: '1.125rem',
    h3: '1.75rem',
    h2: '2.25rem',
    h1: '3.5rem',
  },
  styles: {
    glassEffect: `
      background: rgba(22, 33, 62, 0.8);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 15px;
    `,
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    flexCenter: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  }
};
