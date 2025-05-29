import { style, keyframes } from '@vanilla-extract/css';

// Keyframes for T and K animations
const flyAwayT = keyframes({
  '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
  '100%': { transform: 'translate(-200px, -100px) rotate(-60deg)', opacity: 0 },
});

const flyAwayK = keyframes({
  '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
  '100%': { transform: 'translate(200px, -100px) rotate(60deg)', opacity: 0 },
});

const returnT = keyframes({
  '0%': { transform: 'translate(-200px, -100px) rotate(-60deg)', opacity: 0 },
  '100%': { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
});

const returnK = keyframes({
  '0%': { transform: 'translate(200px, -100px) rotate(60deg)', opacity: 0 },
  '100%': { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
});

// Wrapper container for TK logo
export const tkLogoWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '30vh',
  zIndex: 2,
});

export const logoContainer = style({
  fontSize: '6rem', // or 5rem depending on preference
  fontWeight: 700,
  color: '#fff',
  display: 'flex',
  gap: '0.25rem', // <<<< reduce this from '1rem'
  position: 'relative',
  zIndex: 10,
  justifyContent: 'center',
  alignItems: 'center',
});

export const letterT = style({
  transition: 'opacity 0.5s ease',
  willChange: 'transform, opacity',
});

export const letterK = style({
  transition: 'opacity 0.5s ease',
  willChange: 'transform, opacity',
});

export const animateOutT = style({
  animation: `${flyAwayT} 1.5s ease-out forwards`,
});

export const animateOutK = style({
  animation: `${flyAwayK} 1.5s ease-out forwards`,
});

export const animateInT = style({
  animation: `${returnT} 1.5s ease-in forwards`,
});

export const animateInK = style({
  animation: `${returnK} 1.5s ease-in forwards`,
});
