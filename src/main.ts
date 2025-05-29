import './styles/layout.css.ts';
import './styles/hero.css.ts';
import './styles/header.css.ts';
import './styles/button.css.ts';
import * as tkLogo from './styles/tkLogo.css';
import { themeClass } from './styles/theme.css';

document.body.classList.add(themeClass);

document.addEventListener('DOMContentLoaded', () => {
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
  const letterT = document.getElementById('letter-T');
  const letterK = document.getElementById('letter-K');

  if (letterT && letterK) {
    // Only run once per session
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
