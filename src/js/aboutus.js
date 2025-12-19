import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const aboutSwiper = new Swiper('.about-swiper', {
    loop: true,
    pagination: {
        el: '.about-controls .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});