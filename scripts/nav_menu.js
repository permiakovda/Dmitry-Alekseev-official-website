// ������ ��������� ��������� ���� nav_menu

document.addEventListener('DOMContentLoaded', function () { // ������ $(document).ready(function(){ (�.�. ��������� �����, ����� DOM ��� �����)


    // ������ ������� �� ������� ���������
    const navMenu = document.querySelector('.nav-menu-js');
    const navMenuList = document.querySelector('.nav-menu-list-js');
    navMenuList.classList.add('display');

    // ��� ����� �� ��������
    //document.addEventListener('click', function (e) {
    //    if (navMenu.querySelector(".nav-menu-list").classList.contains('transform')) {
    //        navMenu.querySelector(".nav-menu-list").classList.toggle('transform');
    //    }
    //});



    navMenu.onclick = function (event) {
        let target = event.target;

        if (target.classList.contains('nav-menu-nav-button-js')) {     // ������������� ��������� ��������� ���� �� ������

            target.closest('.nav-menu-js').querySelector('.nav-menu-list-js').classList.toggle('nav-menu-hide');
        };
    }
});


