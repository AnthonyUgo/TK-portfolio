import { style, globalStyle } from '@vanilla-extract/css';

// Base reset styles
globalStyle('html', {
  scrollBehavior: 'smooth',
});
globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

// Body and typography
globalStyle('body', {
  fontFamily: "'Kumbh Sans', sans-serif",
  backgroundColor: '#f9f6f3',
  backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")',
  color: '#1e1e1e',
  paddingTop: '70px',
  paddingBottom: '4rem',
  overflowX: 'hidden',
});
// Header styling
globalStyle('header', {
  position: 'fixed',
  width: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  top: 0,
  left: 0,
  zIndex: 1000,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
});

// Navigation styles
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
// Nav container layout
globalStyle('.nav-container', {
  display: 'flex',
  justifyContent: 'space-between', // logo left, hamburger right
  alignItems: 'center',
  padding: '1rem 2rem',
});

// Hamburger button
globalStyle('#menu-toggle', {
  fontSize: '1.75rem',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'block',
});
