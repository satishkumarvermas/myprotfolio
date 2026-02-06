export const baseTheme = {
  fonts: {
    main: "'Inter', sans-serif",
    heading: "'Gendy', sans-serif",
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
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 15px;
    `,
    boxShadow: '0 4px 30px rgba(255, 255, 255, 0.1)',
    flexCenter: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  }
};

export const darkTheme = {
  colors: {
    primary: '#212529', // Dark Gray (formerly text)
    secondary: '#343A40', // Even Darker Gray
    accent: '#63B3ED', // Lighter Blue (formerly secondaryAccent)
    secondaryAccent: '#007BFF', // Vibrant Blue (formerly accent)
    text: '#F8F9FA', // Light Gray (formerly primary)
    textSecondary: '#CED4DA', // Lighter Muted Gray
    gradient: 'linear-gradient(270deg, #212529, #343A40)',
  },
  ...baseTheme,
};
