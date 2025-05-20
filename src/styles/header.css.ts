import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

// Header container
export const header = style({
  position: 'fixed',
  width: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  top: 0,
  left: 0,
  zIndex: 1000,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
});

// Navigation list
export const navList = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
  padding: '1rem 0',
  listStyle: 'none',
  margin: 0,
});

// Navigation link
export const navLink = style({
  textDecoration: 'none',
  color: vars.color.text,
  fontWeight: 'bold',
  transition: 'color 0.3s',
  selectors: {
    '&:hover': {
      color: vars.color.accent,
    },
  },
});
