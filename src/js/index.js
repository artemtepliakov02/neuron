const burger = document.querySelector('.burger');
const overlay = document.querySelector('.nav-overlay');
const closeBtn = document.querySelector('.nav-overlay__close');

function openMenu() {
  overlay.classList.add('is-open');
  overlay.setAttribute('aria-hidden', 'false');
  burger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

burger?.addEventListener('click', openMenu);
closeBtn?.addEventListener('click', closeMenu);

overlay?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});


document.addEventListener('DOMContentLoaded', () => {
  const invertBtn = document.querySelector('.invert-toggle');

  if (!invertBtn) return;

  invertBtn.addEventListener('click', () => {
    document.body.classList.toggle('is-inverted');
  });
});