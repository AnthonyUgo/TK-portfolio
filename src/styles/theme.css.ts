import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    background: '#f9f6f3',
    text: '#1e1e1e',
    accent: '#f4d8b4',
    accentHover: '#e2c69e',
    white: '#ffffff',
    muted: '#e8e6e3',
    cardShadow: 'rgba(0, 0, 0, 0.1)',
  },
  font: {
    heading: "'Playfair Display', serif",
    body: "'Kumbh Sans', sans-serif",
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
  },
  borderRadius: {
    sm: '8px',
    lg: '25px',
  },
});
