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

// Overlay container
globalStyle('.overlay', {
  backgroundColor: 'rgba(0, 0, 0, 0.3)', // subtle tint
  height: '100%',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: '#fff',
  padding: '2rem',
  zIndex: 2,
});

// Content wrapper
globalStyle('.hero-content', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
});

// TK logo container
globalStyle('.tk-logo', {
  fontFamily: `'Playfair Display', serif`,
  fontSize: '5rem',
  fontWeight: 600,
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem',
  zIndex: 3,
});

// Tagline
globalStyle('.tagline', {
  fontSize: '1.2rem',
  margin: '1rem 0',
  color: '#fff',
});

// Button
globalStyle('.btn', {
  backgroundColor: '#f4d8b4',
  color: '#1e1e1e',
  padding: '0.75rem 1.5rem',
  border: 'none',
  borderRadius: '25px',
  textDecoration: 'none',
  fontWeight: 'bold',
  marginTop: '1rem',
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
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '3rem',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '4rem 2rem',
});

globalStyle('.about-content', {
  flex: '1',
  backgroundColor: '#f9f9f9',
  padding: '2rem',
  borderRadius: '1rem',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  fontSize: '1.1rem',
  lineHeight: '1.8',
});

globalStyle('.about-content p', {
  marginBottom: '1.5rem',
});

// 🔲 Section Wrapper
globalStyle('#about', {
  padding: '4rem 2rem',
  maxWidth: '1200px',
  margin: '0 auto',
});

globalStyle('.about-wrapper', {
  display: 'flex',
  gap: '3rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap', // fallback on small widths
});

// 🖼️ Image Container
globalStyle('.about-image', {
  flex: '0 0 35%',
  display: 'flex',
  justifyContent: 'center',
});

globalStyle('.about-image img', {
  width: '100%',
  maxWidth: '300px',
  borderRadius: '50% / 35%', // oval shape
  objectFit: 'cover',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
});

// 📄 Text Content
globalStyle('.about-content', {
  flex: '1',
  fontSize: '1.1rem',
  lineHeight: '1.75',
});

globalStyle('.about-content h2', {
  marginBottom: '1.5rem',
  fontSize: '2rem',
  fontWeight: 'bold',
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

// 📱 Responsive Layout
globalStyle('@media (max-width: 768px)', {
  '.about-wrapper': {
    flexDirection: 'column',
    textAlign: 'center',
  },
  '.about-image': {
    marginBottom: '2rem',
  },
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


globalStyle('.faq-section', {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '3rem 1.5rem',
  fontSize: '1.1rem',
  color: '#1e1e1e',
  fontFamily: `'Kumbh Sans', sans-serif`,
});

globalStyle('.faq-section h2', {
  textAlign: 'center',
  marginBottom: '2.5rem',
  fontSize: '2rem',
  fontWeight: 'bold',
});

globalStyle('.faq-item', {
  backgroundColor: '#fff',
  borderRadius: '16px',
  boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
  marginBottom: '1.5rem',
  overflow: 'hidden',
  transition: 'box-shadow 0.3s ease',
});

globalStyle('.faq-question', {
  backgroundColor: '#f4d8b4',
  padding: '1rem 1.25rem',
  width: '100%',
  border: 'none',
  fontWeight: 'bold',
  fontSize: '1.05rem',
  textAlign: 'left',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
});

globalStyle('.faq-question:hover', {
  backgroundColor: '#ecd0a8',
});

globalStyle('.faq-answer', {
  padding: '1rem 1.25rem',
  backgroundColor: '#faf9f7',
  fontSize: '1rem',
  lineHeight: '1.6',
  display: 'none',
  animation: 'fadeIn 0.4s ease-in-out',
});

// styles/fadeIn.css.ts
import { keyframes, style } from '@vanilla-extract/css';

// Step 1: Define the animation
export const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

// Step 2: Apply the animation to a style
export const fadeInStyle = style({
  animation: `${fadeIn} 0.4s ease-in-out`,
});

