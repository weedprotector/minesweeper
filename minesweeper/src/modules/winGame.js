import { createMatrix } from "./matrix";


export function winGame() {
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden')
    const wrapper = document.querySelector('.wrapper');
    const win = document.createElement('div');
    win.classList.add('win');
    win.innerHTML = `
        <div class="win__message win__message_green">Counter-terrorists win!</div>
        <div class="win__question">Сыграть снова:</div>
        `;
    const button = document.createElement('button');
    button.classList.add('win__button');
    button.innerText = "OK LET'S GO";
    win.append(button);
    wrapper.append(win);
    button.addEventListener('click', () => {
        createMatrix()
    })
}