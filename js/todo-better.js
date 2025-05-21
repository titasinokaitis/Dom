import { header } from "./header.js";

header();

const h1DOM = document.querySelector('h1');
const formDOM = document.forms[0];
const inputDOM = document.getElementById('task');
const listDOM = document.querySelector('.list');

let count = 0;
let deletedCount = 0;

formDOM.addEventListener('submit', event => {
    event.preventDefault();

    listDOM.insertAdjacentHTML('afterbegin', `
        <div class="item">
            <div class="header">
                <div class="index">${++count}</div>
                <div class="actions">
                    <button class="btn" type="button">Edit</button>
                    <button class="btn" type="button">Delete</button>
                </div>
            </div>
            <div class="content text">
                <p>${inputDOM.value}</p>
                <form class="form">
                    <input value="${inputDOM.value}" placeholder="Your task" type="text" required>
                    <button type="submit">Save</button>
                    <button type="button">Cancel</button>
                </form>
            </div>
        </div>`);

    inputDOM.value = '';
    inputDOM.focus();

    h1DOM.textContent = `Task planner (${count - deletedCount})`;

    const contentDOM = listDOM.querySelector('.content');
    const pDOM = contentDOM.querySelector('p');
    const editBtnDOM = document.querySelector('.btn');
    const deleteBtnDOM = document.querySelector('.btn:last-child');
    const editFormDOM = listDOM.querySelector('form');
    const editInputDOM = editFormDOM.querySelector('input');
    const cancelBtnDOM = editFormDOM.querySelector('button:last-child');

    editBtnDOM.addEventListener('click', () => {
        contentDOM.classList.add('form');
        contentDOM.classList.remove('text');
    });

    deleteBtnDOM.addEventListener('click', () => {
        deleteBtnDOM.parentNode.parentNode.parentNode.remove();
        deletedCount++;
        h1DOM.textContent = `Task planner (${count - deletedCount})`;
    });

    editFormDOM.addEventListener('submit', (event) => {
        event.preventDefault();
        pDOM.textContent = editInputDOM.value;
        contentDOM.classList.add('text');
        contentDOM.classList.remove('form');
    });

    cancelBtnDOM.addEventListener('click', () => {
        contentDOM.classList.add('text');
        contentDOM.classList.remove('form');
    });
});