function firstSwipper() {
    const swiper = new Swiper('.swiper', {
        direction: 'vertical',
        loop: true,
    });
};

function secondSwipper() {
    const customSwiper = new Swiper('.customSwiper', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
    });
};


firstSwipper();
secondSwipper();
