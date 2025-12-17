
const aboutSwiper = new Swiper('.about-swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next, .swiper-button-next-custom',
        prevEl: '.swiper-button-prev, .swiper-button-prev-custom',
    },
});

