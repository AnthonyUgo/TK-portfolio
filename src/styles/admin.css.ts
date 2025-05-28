import { globalStyle } from '@vanilla-extract/css';

// ============================
// 📋 Admin Dashboard Base
// ============================
globalStyle('body', {
  fontFamily: `'Kumbh Sans', sans-serif`,
  backgroundColor: '#f9f6f3',
  backgroundImage: `url('https://www.transparenttextures.com/patterns/paper-fibers.png')`,
  color: '#1e1e1e',
  padding: '2rem',
});

globalStyle('.dashboard', {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '2rem',
});

// ============================
// 🎛️ Top Controls
// ============================
globalStyle('.actions', {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
  marginBottom: '2rem',
});

globalStyle('.actions button, .actions input[type="file"]', {
  padding: '0.75rem 1.5rem',
  borderRadius: '25px',
  border: 'none',
  backgroundColor: '#f4d8b4',
  fontWeight: 'bold',
  cursor: 'pointer',
});

// ============================
// 🖼️ Media Grid and Cards
// ============================
globalStyle('.media-list', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '1.5rem',
  marginTop: '2rem',
});

globalStyle('.media-card', {
  backgroundColor: '#fff',
  borderRadius: '12px',
  padding: '1rem',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

globalStyle('.media-card img, .media-card video', {
  width: '100%',
  borderRadius: '10px',
  marginBottom: '0.5rem',
});

globalStyle('.media-card button', {
  backgroundColor: '#ff6b6b',
  border: 'none',
  color: 'white',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold',
});

// ============================
// ✏️ Project Name Editing
// ============================
globalStyle('.project-title-input', {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  width: '100%',
  textAlign: 'center',
  padding: '0.5rem',
  marginBottom: '1rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
});
