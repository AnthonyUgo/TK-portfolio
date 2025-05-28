// src/main.ts
import './styles/layout.css.ts';
import './styles/hero.css.ts';
import './styles/header.css.ts';
import './styles/button.css.ts';

import { themeClass } from './styles/theme.css';
document.body.classList.add(themeClass);

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  if (toggle && navbar) {
    toggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });

    // Optional: close menu after some inactivity or a click outside
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
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const answer = (button as HTMLElement).nextElementSibling as HTMLElement;
      const isOpen = answer.style.display === 'block';
      answer.style.display = isOpen ? 'none' : 'block';
    });
  });
});
