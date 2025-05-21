import { header } from "./header.js";

header();


document.querySelector('title').textContent = 'Spalvos';

const colors = ['yellow', 'red', 'green', 'blue', 'orange', 'aqua']
const ulDOM = document.querySelector('.colors');

ulDOM.innerHTML = '';

for (const color of colors) {
    ulDOM.innerHTML += `<li style="background-color: ${color};">Spalva: ${color}</li>`;
}

