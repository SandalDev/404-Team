const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('data-burger-close');
const menuLinks = document.querySelectorAll('.menu-link-menu');

// відкрити меню
burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

// закрити меню
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

// закриття при кліку поза меню
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.remove('open');
  }
});
// закриття по клавіші ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
    mobileMenu.classList.remove('open');
  }
});

// закриття меню після кліку на посилання
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});