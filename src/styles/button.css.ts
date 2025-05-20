import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

// ✅ Scoped class for future JSX or components
export const button = style({
  backgroundColor: vars.color.accent,
  color: vars.color.text,
  padding: '0.75rem 1.5rem',
  border: 'none',
  borderRadius: vars.borderRadius.lg,
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'background-color 0.3s ease',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.accentHover,
    },
  },
});

// ✅ Global override for HTML-based class
globalStyle('.btn', {
  backgroundColor: vars.color.accent,
  color: vars.color.text,
  padding: '0.75rem 1.5rem',
  border: 'none',
  borderRadius: vars.borderRadius.lg,
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'background-color 0.3s ease',
  cursor: 'pointer',
});

globalStyle('.btn:hover', {
  backgroundColor: vars.color.accentHover,
});
