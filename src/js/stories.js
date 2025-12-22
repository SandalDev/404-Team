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
            <p class="feedback-author"> ${fb.author}</p>
          </div>
        </div>
      `);
    });

    renderStars();

    const updateSwiper = () => {
      const slidesPerView = window.innerWidth >= 768 ? 2 : 1;
      const totalSlides = json.feedbacks.length;

      if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
      }

      // Відключаємо loop для відсутності нескінченного циклу
      swiper = new Swiper('.slider .swiper', {
        slidesPerView: slidesPerView,
        spaceBetween: 16, // Додайте відступ між слайдами для кращого вигляду
        loop: false, // ВИМКНЕНО
        watchOverflow: true, // Важливо: відключає навігацію, коли слайдів менше ніж slidesPerView
        pagination: {
          el: '.controls .swiper-pagination',
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 1,
        },
        navigation: {
          nextEl: '.swiper-but .swiper-button-next',
          prevEl: '.swiper-but .swiper-button-prev',
          disabledClass: 'swiper-button-disabled', // Клас для вимкнених кнопок
        },
        breakpoints: {
          // Опціонально: додайте брейкпоінти для більш точної адаптивності
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          }
        }
      });

      // Додатково: обробка стану кнопок при ініціалізації
      updateNavigationButtons(swiper);
      
      // Слухаємо події свайпера для оновлення стану кнопок
      swiper.on('slideChange', function() {
        updateNavigationButtons(swiper);
      });
    };

    // Функція для оновлення стану кнопок навігації
    function updateNavigationButtons(swiperInstance) {
      if (!swiperInstance) return;
      
      const { isBeginning, isEnd } = swiperInstance;
      const prevBtn = document.querySelector('.swiper-but .swiper-button-prev');
      const nextBtn = document.querySelector('.swiper-but .swiper-button-next');
      
      if (prevBtn) {
        prevBtn.classList.toggle('swiper-button-disabled', isBeginning);
        prevBtn.disabled = isBeginning;
      }
      
      if (nextBtn) {
        nextBtn.classList.toggle('swiper-button-disabled', isEnd);
        nextBtn.disabled = isEnd;
      }
    }

    updateSwiper();
    window.addEventListener('resize', updateSwiper);
  })
  .catch(err => {
    wrapper.innerHTML = '<div class="swiper-slide">Failed to load feedbacks</div>';
    console.error(err);
  });