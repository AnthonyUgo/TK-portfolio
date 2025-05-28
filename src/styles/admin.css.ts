// src/styles/admin.css.ts
import { globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
  fontFamily: `'Kumbh Sans', sans-serif`,
  backgroundColor: '#f9f6f3',
  backgroundImage: `url('https://www.transparenttextures.com/patterns/paper-fibers.png')`,
  color: '#1e1e1e',
  padding: '2rem',
  margin: 0,
});

globalStyle('.dashboard', {
  maxWidth: '1200px',
  margin: '0 auto',
});

globalStyle('h1', {
  textAlign: 'center',
  fontSize: '2.25rem',
  marginBottom: '2rem',
});

globalStyle('.actions', {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
  marginBottom: '2rem',
});

globalStyle('.actions button, .actions input[type="file"]', {
  padding: '0.75rem 1.25rem',
  borderRadius: '25px',
  border: 'none',
  backgroundColor: '#f4d8b4',
  fontWeight: 'bold',
  fontSize: '1rem',
  cursor: 'pointer',
});

globalStyle('.project-grid', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1.5rem',
});

globalStyle('.project-card', {
  backgroundColor: '#fff',
  padding: '1rem',
  borderRadius: '12px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'transform 0.2s',
});

globalStyle('.project-card:hover', {
  transform: 'scale(1.01)',
});

globalStyle('.project-card img', {
  maxWidth: '100%',
  borderRadius: '10px',
  marginBottom: '1rem',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
});

globalStyle('.project-card input[type="text"]', {
  width: '100%',
  padding: '0.6rem',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  marginBottom: '0.75rem',
});

globalStyle('.project-card button', {
  backgroundColor: '#e2c69e',
  padding: '0.6rem 1.25rem',
  fontWeight: 'bold',
  fontSize: '1rem',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
});

globalStyle('.project-card button:hover', {
  backgroundColor: '#d4b488',
});
