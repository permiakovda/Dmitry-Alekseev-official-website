const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //перетаскивание (свайп) на ПК
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    slideToClickedSlide: true,

    //Управление с клавиатуры
    keyboard: {
        enable: true,
        onlyInViewport: true,
    },

    //Количество слайдов для показа
    slidesPerView: 'auto',
    watchOverflow: false,
    spaceBetween: 30,

    //бесконечная прокрутка
    loop: true,
    loopedSlides: 3,

    //Авто прокрутка
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnIteraction: false,
    },

    //Скорость переключения слайдов
    speed: 800,

    //пагинация
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        bulletActiveClass: 'swiper-pagination__button_select',
        bulletClass: 'swiper-pagination__button',

    },

    //брейкпойнты (адаптивность)
    breakpoints: {
        320: {
            slidesPerView: 1,
        },

        720: {
            slidesPerView: 2,
        },

        1370: {
            slidesPerView: 3,
        },
    },
});