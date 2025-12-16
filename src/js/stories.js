
const swiper = new Swiper('.about-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  speed: 500,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  allowTouchMove: true,
});


