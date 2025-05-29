import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const hero = style({
  backgroundImage: `url('/assets/hero-bg-optimized.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed', // ✅ Parallax effect on desktop
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
  backgroundAttachment: 'fixed',
  height: '100vh',
  width: '100vw',
  position: 'relative',
  left: '0',
  right: '0',
  margin: '0',
  padding: '0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#ffffff',
  textAlign: 'center',
});

globalStyle('.hero::after', {
  content: '',
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '30%',
  background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
  zIndex: 1,
});

globalStyle('.overlay', {
  backgroundColor: 'rgba(0, 0, 0, 0.55)', // darkened slightly for better contrast
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#ffffff',
  textAlign: 'center',
  padding: '2rem',
  zIndex: 2, // so it's above the gradient
});

// 📱 Responsive tweaks
globalStyle('@media (max-width: 768px)', {
  // No styles here!
});

globalStyle('@media (max-width: 768px) .hero', {
  backgroundPosition: 'top',
  height: '90vh',
  backgroundAttachment: 'scroll',
});

globalStyle('@media (max-width: 768px) .overlay', {
  padding: '1rem',
});

