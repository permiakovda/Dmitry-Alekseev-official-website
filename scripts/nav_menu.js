// Скрипт раскрытия гамбургер меню nav_menu

document.addEventListener('DOMContentLoaded', function () { // Аналог $(document).ready(function(){ (т.е. сработать тогда, когда DOM уже готов)


    // кнопка нажатие на которую проверяем
    const navMenu = document.querySelector('.nav-menu-js');
    const navMenuList = document.querySelector('.nav-menu-list-js');
    navMenuList.classList.add('display');

    // при клике на документ
    //document.addEventListener('click', function (e) {
    //    if (navMenu.querySelector(".nav-menu-list").classList.contains('transform')) {
    //        navMenu.querySelector(".nav-menu-list").classList.toggle('transform');
    //    }
    //});



    navMenu.onclick = function (event) {
        let target = event.target;

        if (target.classList.contains('nav-menu-nav-button-js')) {     // переключатель вилимости гамбургер меню по кнопку

            target.closest('.nav-menu-js').querySelector('.nav-menu-list-js').classList.toggle('nav-menu-hide');
        };
    }
});


