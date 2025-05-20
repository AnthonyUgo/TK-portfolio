import { globalStyle } from '@vanilla-extract/css';

// -----------------------------
// Base reset styles
// -----------------------------
globalStyle('html', {
  scrollBehavior: 'smooth',
});

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

// -----------------------------
// Body and typography
// -----------------------------
globalStyle('body', {
  fontFamily: "'Kumbh Sans', sans-serif",
  backgroundColor: '#f9f6f3',
  backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")',
  color: '#1e1e1e',
  paddingTop: '70px',
  paddingBottom: '4rem',
  overflowX: 'hidden',
});

// -----------------------------
// Header
// -----------------------------
globalStyle('header', {
  position: 'fixed',
  width: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  top: 0,
  left: 0,
  zIndex: 1000,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
});

// -----------------------------
// Navigation styles
// -----------------------------
globalStyle('nav ul', {
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
  padding: '1rem 0',
  listStyle: 'none',
  margin: 0,
});

globalStyle('nav ul li a', {
  textDecoration: 'none',
  color: '#1e1e1e',
  fontWeight: 'bold',
  transition: 'color 0.3s',
});

globalStyle('nav ul li a:hover', {
  color: '#f4d8b4',
});

globalStyle('nav ul.active', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',
  alignItems: 'center',
});

// -----------------------------
// Nav container layout
// -----------------------------
globalStyle('.nav-container', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
});

// -----------------------------
// Hamburger button
// -----------------------------
globalStyle('#menu-toggle', {
  fontSize: '1.75rem',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'block',
  '@media': {
    '(min-width: 768px)': {
      display: 'none',
    },
    '(max-width: 767px)': {
      marginLeft: 'auto',
    },
  },
});

// -----------------------------
// Responsive nav layout (mobile)
// -----------------------------
globalStyle('nav ul', {
  '@media': {
    '(max-width: 767px)': {
      display: 'none',
    },
  },
});

globalStyle('.nav-container', {
  '@media': {
    '(max-width: 767px)': {
      flexDirection: 'row',
    },
  },
});

globalStyle('nav', {
  '@media': {
    '(max-width: 767px)': {
      flexGrow: 1,
      textAlign: 'right',
    },
  },
});

// -----------------------------
// Flash camera click effect
// -----------------------------
globalStyle('.flash', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'white',
  opacity: 0,
  transition: 'opacity 0.2s ease',
  pointerEvents: 'none',
  borderRadius: 'inherit',
  zIndex: 2,
});

globalStyle('.media', {
  position: 'relative',
  overflow: 'hidden',
});
