import { header } from "./header.js";

header();

const btnDOM = document.querySelector('.click-me button');
const pDOM = document.querySelector('.click-me p');

let clickCount = 0;

function addOne() {
    pDOM.textContent = ++clickCount;
}

btnDOM.addEventListener('click', addOne);