// Імпорт повного Swiper bundle
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const wrapper = document.querySelector('.slider .swiper-wrapper');

// Ініціалізуємо Swiper змінною, щоб можна було оновлювати
let swiper = null;

fetch('https://paw-hut.b.goit.study/api/feedbacks')
  .then(res => res.json())
  .then(json => {
    wrapper.innerHTML = '';

    json.feedbacks.forEach(fb => {
      wrapper.insertAdjacentHTML('beforeend', `
        <div class="swiper-slide">
          <div class="feedback">
            <p class="feedback-text">${fb.description}</p>
            <p class="feedback-author">— ${fb.author}</p>
            <p class="feedback-rate">Rating: ${fb.rate}</p>
          </div>
        </div>
      `);
    });

    if (swiper) {
      swiper.update(); // якщо слайдер вже існує, оновлюємо його
    } else {
      // Ініціалізація слайдера вперше
      swiper = new Swiper('.slider .swiper', {
        
        pagination: {
             el: '.controls .swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 5,
        },
        navigation: {
          nextEl: '.swiper-but .swiper-button-next',
          prevEl: '.swiper-but .swiper-button-prev',
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        },
      });
    }
  })
  .catch(err => {
    wrapper.innerHTML = '<div class="swiper-slide">Failed to load feedbacks</div>';
    console.error(err);
  });