/* layout.css.ts (Vanilla Extract version of styles.css) */

import { globalStyle } from '@vanilla-extract/css';

// ============================
// 🌍 Global Reset & Body
// ============================
globalStyle('html', {
  scrollBehavior: 'smooth',
});
globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});
globalStyle('body', {
  fontFamily: `'Kumbh Sans', sans-serif`,
  backgroundColor: '#f9f6f3',
  backgroundImage: `url('https://www.transparenttextures.com/patterns/paper-fibers.png')`,
  color: '#1e1e1e',
  paddingTop: '70px',
  paddingBottom: '4rem',
  overflowX: 'hidden',
});

// ============================
// 🧱 Header & Navigation
// ============================
globalStyle('header', {
  position: 'fixed',
  width: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  top: 0,
  left: 0,
  zIndex: 1000,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
});

globalStyle('.nav-container', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
});

globalStyle('.logo-small', {
  fontFamily: `'Playfair Display', serif`,
  fontSize: '2rem',
  color: '#1e1e1e',
  textDecoration: 'none',
  fontWeight: 'bold',
});

globalStyle('.logo-small:hover', {
  color: '#f4d8b4',
});

globalStyle('#menu-toggle', {
  fontSize: '2rem',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'none',
});

globalStyle('nav ul', {
  display: 'flex',
  gap: '2rem',
  listStyle: 'none',
  padding: 0,
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

globalStyle('section', {
  scrollMarginTop: '100px',
});

// ============================
// 🦸 Hero Section
// ============================
globalStyle('.hero', {
  backgroundImage: `url('https://images.unsplash.com/photo-1582719478171-2a6c142f54de?auto=format&fit=crop&w=1600&q=80')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  position: 'relative',
});

globalStyle('.overlay', {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  textAlign: 'center',
  padding: '2rem',
});

globalStyle('.logo', {
  fontFamily: `'Playfair Display', serif`,
  fontSize: '4rem',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
});

globalStyle('.logo span', {
  fontWeight: 300,
  fontSize: '1.5rem',
  display: 'block',
  textTransform: 'none',
});

globalStyle('.tagline', {
  fontSize: '1.2rem',
  margin: '1rem 0 2rem',
  color: '#e8e6e3',
});

globalStyle('.btn', {
  backgroundColor: '#f4d8b4',
  color: '#1e1e1e',
  padding: '0.75rem 1.5rem',
  border: 'none',
  borderRadius: '25px',
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'background-color 0.3s ease',
});

globalStyle('.btn:hover', {
  backgroundColor: '#e2c69e',
});

// ============================
// 🖼️ Media & Flash Effects
// ============================
globalStyle('.media', {
  position: 'relative',
  cursor: 'pointer',
  transform: 'translateY(0)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
});

globalStyle('.media img, .media video', {
  width: '100%',
  height: 'auto',
  display: 'block',
  borderRadius: '12px',
  objectFit: 'cover',
  boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
});

globalStyle('.flash', {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  background: 'white',
  opacity: 0,
  pointerEvents: 'none',
  transition: 'opacity 0.2s ease',
});

globalStyle('.camera-icon', {
  position: 'absolute',
  top: '10px',
  right: '10px',
  fontSize: '1.2rem',
  color: '#fff',
  background: 'rgba(0, 0, 0, 0.4)',
  padding: '4px 6px',
  borderRadius: '4px',
  opacity: 0,
  transition: 'opacity 0.2s ease',
  pointerEvents: 'none',
});

globalStyle('.media:hover .camera-icon', {
  opacity: 1,
});

// ============================
// 📱 Responsive
// ============================
globalStyle('@media (max-width: 768px)', {
  '.logo': { fontSize: '2.5rem' },
  '.tagline': { fontSize: '1rem' },
  '#menu-toggle': {
    display: 'block',
    color: '#1e1e1e',
    position: 'absolute',
    top: '1.25rem',
    right: '1.5rem',
    zIndex: 1001,
  },
  '#navbar ul': {
    display: 'none',
    flexDirection: 'column',
    textAlign: 'left',
    backgroundColor: '#fff',
    position: 'absolute',
    top: '70px',
    right: 0,
    width: '100%',
    padding: '1rem 2rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 999,
  },
  '#navbar.active ul': {
    display: 'flex',
  },
  'nav ul li': {
    marginBottom: '1rem',
  },
});

// ============================
// 📦 Project Section & Grid
// ============================
globalStyle('.project', {
  margin: '3rem 0',
});

globalStyle('.project h3', {
  marginBottom: '1rem',
});

globalStyle('.media-grid', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1rem',
});

// ============================
// 📬 Contact Form
// ============================
globalStyle('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '500px',
  margin: '2rem auto',
});

globalStyle('form label', {
  fontWeight: 'bold',
});

globalStyle('form input, form textarea', {
  padding: '0.75rem',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontFamily: `'Kumbh Sans', sans-serif`,
});

globalStyle('form button[type="submit"]', {
  backgroundColor: '#f4d8b4',
  color: '#1e1e1e',
  padding: '0.75rem 1.5rem',
  border: 'none',
  borderRadius: '25px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
});

globalStyle('form button[type="submit"]:hover', {
  backgroundColor: '#e2c69e',
});

// ============================
// 🧱 Section Headings
// ============================
globalStyle('section h2', {
  textAlign: 'center',
  margin: '2rem 0 1rem',
  fontSize: '2rem',
});

// ============================
// 🧾 About Section
// ============================
globalStyle('#about', {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '2rem',
  lineHeight: '1.8',
  fontSize: '1.1rem',
});

globalStyle('.about-content p', {
  marginBottom: '1.5rem',
});

globalStyle('.press-links h3', {
  marginTop: '2rem',
  marginBottom: '1rem',
});

globalStyle('.press-links ul', {
  listStyle: 'disc',
  paddingLeft: '1.25rem',
});

globalStyle('.press-links ul li a', {
  color: '#1e1e1e',
  textDecoration: 'underline',
  fontWeight: 'bold',
});