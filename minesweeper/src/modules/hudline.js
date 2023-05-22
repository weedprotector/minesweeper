import { bombs } from "./matrix";


export function createHudline() {
    const wrapper = document.querySelector('.wrapper');
    const hudline = document.createElement('div');
    hudline.classList.add('hudline')
    const hudlineFlagsCounter = document.createElement('div');
    hudlineFlagsCounter.classList.add('hudline__flagCounter');
    hudline.append(hudlineFlagsCounter)
    const hudlineBombsCounter = document.createElement('div');
    hudlineBombsCounter.classList.add('hudline__bombCounter');
    hudline.append(hudlineBombsCounter);

    wrapper.append(hudline);
}

export function addFlagsCounter(flags) {
    const hudlineFlagsCounter = document.querySelector('.hudline__flagCounter');
    hudlineFlagsCounter.innerHTML = `Флагов: ${flags}`;
    const hudlineBombsCounter = document.querySelector('.hudline__bombCounter');
    hudlineBombsCounter.innerHTML = `Бомб: ${bombs - flags}`
    
    
}