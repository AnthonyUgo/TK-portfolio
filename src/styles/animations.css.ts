import { keyframes, style } from '@vanilla-extract/css';

const fadeIn = keyframes({
  '0%': { opacity: 0, transform: 'translateY(10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const fadeInUp = style({
  animation: `${fadeIn} 0.8s ease-in-out`,
});
