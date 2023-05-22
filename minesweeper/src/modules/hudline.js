import { bombs , mode} from "./matrix";


export function createHudline() {
    const wrapper = document.querySelector('.wrapper');
    const hudline = document.createElement('div');
    hudline.classList.add('hudline')
    const hudlineFlagsCounter = document.createElement('div');
    hudlineFlagsCounter.classList.add('hudline__flagCounter');
    hudline.append(hudlineFlagsCounter);
    const modeSelector = document.createElement('div');
    if (mode == "medium") {
        modeSelector.innerHTML = `
        <form action="select1.php" method="post" >
            <select size="1" name="hero[]" id="selector">
            <option disabled>Выберите cложность</option>
            <option value="easy">Easy</option>
            <option selected value="medium">Medium</option>
            <option value="hard">Hard</option>
            </select>
        </form>
    `
    } else if (mode == "hard") {
        modeSelector.innerHTML = `
        <form action="select1.php" method="post" >
            <select size="1" name="hero[]" id="selector">
            <option disabled>Выберите cложность</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option selected value="hard">Hard</option>
            </select>
        </form>
    `
    } else {
    modeSelector.innerHTML = `
        <form action="select1.php" method="post" >
            <select size="1" name="hero[]" id="selector">
            <option disabled>Выберите cложность</option>
            <option selected value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            </select>
        </form>
    `
    }
    hudline.append(modeSelector);
    const restartButton = document.createElement('button');
    restartButton.classList.add('hudline__restart');
    restartButton.innerText = 'Сохранить сложность и перезагрузить'
    hudline.append(restartButton);
    
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
