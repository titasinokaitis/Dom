import { header } from './header.js';
header();

const teams = ['Namai', 'Svečiai', 'Kebabai', 'Pomidorai'];
const appDOM = document.getElementById('app');

let HTML = '';
for (let i = 0; i < teams.length; i++) {
    HTML += `
        <div class="team">
            <div class="result">0</div>
            <p class="home">${teams[i]}</p>
            <div class="actions">
                <button data-team="${i}" type="button">+1</button>
                <button data-team="${i}" type="button">+2</button>
                <button data-team="${i}" type="button">+3</button>
            </div>
        </div>`;
}

appDOM.innerHTML = `<div class="board">${HTML}</div><div class="history"></div>`;

const resultsDOM = appDOM.querySelectorAll('.result');
const buttonsDOM = appDOM.querySelectorAll('button');
const historyDOM = appDOM.querySelector('.history');

const scores = new Array(teams.length).fill(0);

for (let i = 0; i < buttonsDOM.length; i++) {
    buttonsDOM[i].addEventListener('click', () => {
        const team = +buttonsDOM[i].dataset.team;
        const points = +buttonsDOM[i].textContent;
        scores[team] += points;
        resultsDOM[team].textContent = scores[team];
        historyDOM.insertAdjacentHTML(
            'afterbegin',
            `<div class="entry ${team ? 'away' : 'home'}">${team ? 'Svečių' : 'Namų'} komanda pelnė ${points} tašk${points - 1 ? 'us' : 'ą'}.</div>`
        );
    });
}