import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function renderStars() {
  document.querySelectorAll('.feedback-rate').forEach(el => {
    const rate = parseFloat(el.dataset.score);
    const stars = el.querySelectorAll('.star');
    stars.forEach((star, index) => {
      star.classList.remove('filled', 'half');
      if (index < Math.floor(rate)) {
        star.classList.add('filled');
      } else if (index === Math.floor(rate) && rate % 1 >= 0.5) {
        star.classList.add('half');
      }
    });
  });
}

const wrapper = document.querySelector('.slider .swiper-wrapper');
let swiper = null;

fetch('https://paw-hut.b.goit.study/api/feedbacks')
  .then(res => res.json())
  .then(json => {
    wrapper.innerHTML = '';

    json.feedbacks.forEach(fb => {
      wrapper.insertAdjacentHTML('beforeend', `
        <div class="swiper-slide">
          <div class="feedback">
            <div class="feedback-rate" data-score="${fb.rate}">
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
            </div>
            <p class="feedback-text">${fb.description}</p>
            <p class="feedback-author">— ${fb.author}</p>
          </div>
        </div>
      `);
    });

    renderStars();

    const updateSwiper = () => {
      const slidesPerView = window.innerWidth >= 768 ? 2 : 1; // брейкпоінт
      const totalSlides = json.feedbacks.length;
      const totalBullets = Math.ceil(totalSlides / slidesPerView);

      if (swiper) swiper.destroy(true, true); // якщо слайдер вже існує, видаляємо
swiper = new Swiper('.slider .swiper', {
  slidesPerView: slidesPerView,
  pagination: {
    el: '.controls .swiper-pagination',
    clickable: true,
    dynamicBullets: true,        // ОБОВ'ЯЗКОВО
    dynamicMainBullets: 3,       // Максимум 3 видимі bullets
  },
  navigation: {
    nextEl: '.swiper-but .swiper-button-next',
    prevEl: '.swiper-but .swiper-button-prev',
  },
});

    };

    updateSwiper();
    window.addEventListener('resize', updateSwiper); // оновлюємо при зміні ширини екрану
  })
  .catch(err => {
    wrapper.innerHTML = '<div class="swiper-slide">Failed to load feedbacks</div>';
    console.error(err);
  });
