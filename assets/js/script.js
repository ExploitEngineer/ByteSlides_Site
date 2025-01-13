function firstSwiper() {
    const swiper = new Swiper('.swiper', {
        direction: 'vertical',
        loop: true,
    });
};

function secondSwiper() {
    const swiper = new Swiper(".mySwiper2", {
        slidesPerView: 3,
        spaceBetween: 30,
    });
};

firstSwiper();
secondSwiper();
