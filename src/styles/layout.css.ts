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
