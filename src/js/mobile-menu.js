const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('data-burger-close');

// Відкрити меню
burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

// Закрити меню
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

// Закриття при кліку поза меню
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.remove('open');
  }
});
// Закриття по клавіші ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
    mobileMenu.classList.remove('open');
  }
});