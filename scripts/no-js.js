// ���� js �� �������� �� ����� �� ����� �������� ���� ��������.
// ���� js ��������, �� ������ ������� ����� no-js � body


document.addEventListener('DOMContentLoaded', function () {
    // ������ �� body � ������� .no-js
    const bodyElem = document.querySelector('.no-js');

    // ��������� ����� .no-js �.�. js ���������
    bodyElem.classList.remove('no-js');
});
