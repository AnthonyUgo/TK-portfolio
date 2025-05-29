import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const hero = style({
  backgroundImage: `url('/assets/hero-bg-optimized.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: vars.color.white,
  textAlign: 'center',
});

globalStyle('.hero', {
  backgroundImage: `url('/assets/hero-bg-optimized.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100vw',
  position: 'relative',
  left: '0',        // ✅ Ensure it's flush with viewport edge
  right: '0',
  margin: '0',      // ✅ Cancel any centered parent layout
  padding: '0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#ffffff',
  textAlign: 'center',
});

globalStyle('.overlay', {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  height: '100%',
  width: '100%', // ✅ make it fill horizontally
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#ffffff',
  textAlign: 'center',
  padding: '2rem',
});
