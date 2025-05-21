import { header } from "./header.js";

header();

const formDOM = document.querySelector('form');
const inputDOM = formDOM.querySelector('input');
const listDOM = document.querySelector('.todo-list');

let count = 1;

formDOM.addEventListener('submit', event => {
    event.preventDefault();

    if (inputDOM.value.trim() === '') {
        inputDOM.value = '';
        return;
    }

    listDOM.innerHTML += `
        <div class="todo-item">
            <p>${count++}</p>
            <p>${inputDOM.value}</p>
        </div>`;

    inputDOM.value = '';
});