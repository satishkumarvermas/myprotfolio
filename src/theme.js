export const theme = {
  colors: {
    primary: '#0D1117',
    secondary: '#161B22',
    accent: '#58A6FF',
    secondaryAccent: '#1F6FEB',
    text: '#C9D1D9',
    textSecondary: '#8B949E',
    gradient: 'linear-gradient(270deg, #0D1117, #161B22)',
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
      background: rgba(22, 27, 34, 0.8);
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
