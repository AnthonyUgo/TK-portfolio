import { globalStyle } from '@vanilla-extract/css';

/* Navbar styling */
globalStyle('.nav-container', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  background: 'rgba(0, 0, 0, 0.85)',
  boxShadow: '0 0 20px #00ffff', // Neon glow
  borderBottom: '2px solid #00ffff',
  padding: '1rem 2rem',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  zIndex: 1000,
  '@media': {
    '(max-width: 600px)': {
      padding: '0.5rem 1rem',
    },
  },
});

globalStyle('.logo-small', {
  color: '#00ffff',
  fontSize: '2rem',
  fontWeight: 700,
  textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff',
  textDecoration: 'none',
  transition: 'color 0.3s, text-shadow 0.3s',
  '@media': {
    '(max-width: 600px)': {
      fontSize: '1.5rem',
    },
  },
});

/* Body styling */
globalStyle('.admin-login-body', {
  fontFamily: `'Poppins', sans-serif`,
  backgroundColor: '#000',
  color: '#00ffff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  minHeight: '100vh',
  paddingTop: '120px', // ensures content sits below the navbar
  paddingLeft: '2rem',
  paddingRight: '2rem',
  paddingBottom: '2rem',
});

/* Admin Login Heading */
globalStyle('h1', {
  fontSize: '2.5rem',
  marginBottom: '1rem',
  textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff',
  textAlign: 'center',
  alignSelf: 'center',
  '@media': {
    '(max-width: 600px)': {
      fontSize: '2rem',
    },
  },
});

/* Form styling */
globalStyle('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',
  maxWidth: '400px',
  padding: '2rem',
  background: 'rgba(0, 0, 0, 0.8)',
  border: '1px solid #00ffff',
  borderRadius: '8px',
  boxShadow: '0 0 20px #00ffff',
});

/* Input fields */
globalStyle('input', {
  backgroundColor: '#111',
  border: '1px solid #00ffff',
  color: '#00ffff',
  padding: '0.75rem',
  fontSize: '1rem',
  borderRadius: '5px',
  outline: 'none',
  transition: 'all 0.3s',
});

globalStyle('input:focus', {
  backgroundColor: '#000',
  boxShadow: '0 0 10px #00ffff',
});

globalStyle('input:hover', {
  boxShadow: '0 0 5px #00ffff, 0 0 15px #00ffff',
});

/* Button styling */
globalStyle('button', {
  background: '#00ffff',
  color: '#000',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '5px',
  padding: '0.75rem',
  cursor: 'pointer',
  transition: 'all 0.3s',
});

globalStyle('button:hover', {
  background: '#fff',
  color: '#000',
  boxShadow: '0 0 10px #00ffff',
});

/* Error message */
globalStyle('.error', {
  color: '#ff4d4d',
  fontSize: '0.9rem',
  textAlign: 'center',
});

/* Footer styling */
globalStyle('footer', {
  marginTop: '20px',
  fontSize: '0.8rem',
  color: '#00ffff',
  textAlign: 'center',
  opacity: 0.7,
  fontFamily: `'Poppins', sans-serif`,
  textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff',
});
