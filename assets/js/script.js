function swiper1() {
    const swiper = new Swiper(".mySwiper1", {
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
    });
}

function swiper2() {
    const swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            // When the viewport width is >= 320px
            320: {
                slidesPerView: 1
            },
            // When the viewport width is >= 768px
            768: {
                slidesPerView: 2
            },
            // When the viewport width is >= 1024px
            1024: {
                slidesPerView: 3
            },
        },
    });
}

swiper1();
swiper2();
