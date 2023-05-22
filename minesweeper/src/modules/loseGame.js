import { createMatrix, getValue, mode } from "./matrix";

export function loseGame() {
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden')
    const wrapper = document.querySelector('.wrapper');
    const win = document.createElement('div');
    win.classList.add('win');
    win.innerHTML = `
        <div class="win__message">Вы подорвались!</div>
        <div class="win__question">Сыграть снова:</div>
        `;
    const button = document.createElement('button');
    button.classList.add('win__button');
    button.innerText = "OK LET'S GO";
    win.append(button);
    wrapper.append(win);
    button.addEventListener('click', () => {
        getValue();
        if (mode == "easy") {
            const wrapper = document.querySelector('.wrapper');
            wrapper.classList.contains('wrapper_hard') ? wrapper.classList.remove('wrapper_hard') : null;
            wrapper.classList.contains('wrapper_medium') ? wrapper.classList.remove('wrapper_medium') : null;
            createMatrix()
        } else if (mode == "medium") {
            const wrapper = document.querySelector('.wrapper')
            wrapper.classList.contains('wrapper_hard') ? wrapper.classList.remove('wrapper_hard') : null;
            wrapper.classList.add('wrapper_medium')
            createMatrix(15, 15, 25)
        } else if (mode == "hard") {
            const wrapper = document.querySelector('.wrapper')
            wrapper.classList.contains('wrapper_medium') ? wrapper.classList.remove('wrapper_medium') : null;
            wrapper.classList.add('wrapper_hard')
            createMatrix(25, 25, 75)
        }
    })
}