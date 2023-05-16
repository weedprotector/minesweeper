import { createMatrix } from "./matrix";

export function welcome() {
    const body = document.querySelector('body')
    const startGame = document.createElement('div');
    startGame.classList.add('welcome');
    const welcomeMessage = document.createElement('div');
    welcomeMessage.innerText = 'Добро пожаловать в Сапер КС:ГО'
    welcomeMessage.classList.add('welcome__message')
    startGame.append(welcomeMessage);
    const button = document.createElement('button');
    button.innerText = 'НАЧАТЬ ИГРУ'
    startGame.append(button);
    body.append(startGame);
    button.addEventListener('click', () => createMatrix())

}