import './styles/layout.css.ts';
import './styles/hero.css.ts';
import './styles/header.css.ts';
import './styles/button.css.ts';
import * as tkLogo from './styles/tkLogo.css';
import { themeClass } from './styles/theme.css';
import { fadeInUp } from './styles/animations.css';

document.body.classList.add(themeClass);

document.addEventListener('DOMContentLoaded', () => {
  // Fade-in animation
  document.querySelectorAll('.fade-in-up').forEach((el) => {
    el.classList.add(fadeInUp);
  });

  // Navbar toggle
  const toggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  if (toggle && navbar) {
    toggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (
        navbar.classList.contains('active') &&
        !navbar.contains(e.target as Node) &&
        e.target !== toggle
      ) {
        navbar.classList.remove('active');
      }
    });
  }

  // FAQ toggle
  document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const answer = (button as HTMLElement).nextElementSibling as HTMLElement;
      const isOpen = answer.style.display === 'block';
      answer.style.display = isOpen ? 'none' : 'block';
    });
  });

  // Logo animation
  const logoEl = document.getElementById('logo');
  const letterT = document.getElementById('letter-T');
  const letterK = document.getElementById('letter-K');

  if (logoEl) {
    logoEl.classList.add(tkLogo.logoContainer); // Use wrapper style if needed
  }

  if (letterT && letterK) {
    letterT.classList.add(tkLogo.letterT);
    letterK.classList.add(tkLogo.letterK);

    if (!sessionStorage.getItem('tkLogoPlayed')) {
      sessionStorage.setItem('tkLogoPlayed', 'true');

      letterT.classList.add(tkLogo.animateOutT);
      letterK.classList.add(tkLogo.animateOutK);

      setTimeout(() => {
        letterT.classList.remove(tkLogo.animateOutT);
        letterK.classList.remove(tkLogo.animateOutK);

        letterT.classList.add(tkLogo.animateInT);
        letterK.classList.add(tkLogo.animateInK);
      }, 1600);
    }
  }
});
