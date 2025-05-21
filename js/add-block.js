const btnDOM = document.getElementById('add');
const listDOM = document.querySelector('.block-list');

btnDOM.addEventListener('click', () => {
    listDOM.innerHTML += '<div class="block"></div>';
});