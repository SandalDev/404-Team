import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const aboutSwiper = new Swiper('.about-swiper', {
    pagination: {
        el: '.about-controls .swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
    },
    navigation: {
        nextEl: '.section-about .swiper-button-next, .about-controls .swiper-button-next',
        prevEl: '.section-about .swiper-button-prev, .about-controls .swiper-button-prev',
    },
});

function updateAboutNavigationButtons(swiperInstance) {
    // Знаходимо ВСІ кнопки тільки в секції about
    const nextButtons = document.querySelectorAll('#aboutus-a .swiper-button-next');
    const prevButtons = document.querySelectorAll('#aboutus-a .swiper-button-prev');
    
    if (!nextButtons.length || !prevButtons.length) return;
    
    // Застосовуємо обмеження до всіх кнопок в секції about
    nextButtons.forEach(nextButton => {
        if (swiperInstance.activeIndex >= 4) { 
            nextButton.style.opacity = '0.5';
            nextButton.style.cursor = 'not-allowed';
            nextButton.disabled = true;
        } else {
            nextButton.style.opacity = '1';
            nextButton.style.cursor = 'pointer';
            nextButton.disabled = false;
        }
    });
    
    prevButtons.forEach(prevButton => {
        if (swiperInstance.activeIndex === 0) {
            prevButton.style.opacity = '0.5';
            prevButton.style.cursor = 'not-allowed';
            prevButton.disabled = true;
        } else {
            prevButton.style.opacity = '1';
            prevButton.style.cursor = 'pointer';
            prevButton.disabled = false;
        }
    });
}

// Додаємо обробники подій для about-swiper
aboutSwiper.on('slideChange', () => {
    updateAboutNavigationButtons(aboutSwiper);
});

// Ініціалізуємо стан кнопок при завантаженні
updateAboutNavigationButtons(aboutSwiper);

// Обрізаємо слайди до 5 (якщо потрібно)
const slides = document.querySelectorAll('.about-swiper .swiper-slide');
if (slides.length > 5) {
    const wrapper = document.querySelector('.about-swiper .swiper-wrapper');
    Array.from(slides).slice(5).forEach(slide => slide.remove());
}