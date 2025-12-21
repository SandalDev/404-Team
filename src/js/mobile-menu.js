const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('data-burger-close');
const menuLinks = document.querySelectorAll('.menu-link-menu');

let scrollY = 0;

function handleEsc(e) {
  if (e.key === 'Escape') {
    closeMenu();
  }
}

function openMenu() {
  scrollY = window.scrollY;
  document.body.style.top = `-${scrollY}px`;
  document.body.classList.add('no-scroll');
  mobileMenu.classList.add('open');

  window.addEventListener('keydown', handleEsc);
}

function closeMenu() {
  mobileMenu.classList.remove('open');
  document.body.classList.remove('no-scroll');
  document.body.style.top = '';
  window.scrollTo(0, scrollY);

  window.removeEventListener('keydown', handleEsc);
}

burgerBtn.addEventListener('click', openMenu);

closeBtn.addEventListener('click', closeMenu);

mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    closeMenu();
  }
});

menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});