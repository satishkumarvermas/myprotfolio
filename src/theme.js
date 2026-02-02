export const theme = {
  colors: {
    primary: '#0A0A0A', // A very dark, near-black background
    secondary: 'rgba(255, 255, 255, 0.05)', // The glass container background
    accent: '#00F5FF', // A vibrant, glowing cyan for accents
    text: '#F0F0F0', // A slightly off-white for main text
    textSecondary: '#B3B3B3', // A dimmer white for subtitles and secondary text
  },
  fonts: {
    main: "'Space Grotesk', sans-serif",
  },
  styles: {
    glassEffect: `
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 15px;
    `
  }
};
