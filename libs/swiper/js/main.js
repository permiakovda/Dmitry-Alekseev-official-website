const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //�������������� (�����) �� ��
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    slideToClickedSlide: true,

    //���������� � ����������
    keyboard: {
        enable: true,
        onlyInViewport: true,
    },

    //���������� ������� ��� ������
    slidesPerView: 'auto',
    watchOverflow: false,
    spaceBetween: 30,

    //����������� ���������
    loop: true,
    loopedSlides: 3,

    //���� ���������
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnIteraction: false,
    },

    //�������� ������������ �������
    speed: 800,

    //���������
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        bulletActiveClass: 'swiper-pagination__button_select',
        bulletClass: 'swiper-pagination__button',

    },

    //����������� (������������)
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