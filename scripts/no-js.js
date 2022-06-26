// ≈лси js не сработал на сайте то нужно показать меню например.
// если js сработал, то просто убираем класс no-js с body


document.addEventListener('DOMContentLoaded', function () {
    // —сылка на body с классом .no-js
    const bodyElem = document.querySelector('.no-js');

    // ќтключить класс .no-js т.к. js подключен
    bodyElem.classList.remove('no-js');
});
