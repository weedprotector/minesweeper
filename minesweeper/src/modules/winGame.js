import { createMatrix } from "./matrix";


export function winGame() {
    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = '';
    const win = document.createElement('div');
    win.classList.add('win');
    win.innerHTML = `
        <div class="h2">Вы справились с разминированием!</div>
        <div class="win__question">Сыграть снова:</div>
        `;
    const button = document.createElement('button');
    button.innerText = "OK LET'S GO";
    win.append(button);
    wrapper.append(win);
    button.addEventListener('click', () => {
        createMatrix()
    })
}