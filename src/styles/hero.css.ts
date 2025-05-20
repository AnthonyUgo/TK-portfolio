import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const hero = style({
  backgroundImage: `url('https://images.unsplash.com/photo-1582719478171-2a6c142f54de?auto=format&fit=crop&w=1600&q=80')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: vars.color.white,
  padding: vars.spacing.md,
  textAlign: 'center',
});
