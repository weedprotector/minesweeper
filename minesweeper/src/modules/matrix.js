import { createCell } from "./cell";
import { getRandomInt } from "./generateRandom";

export let matrix = [];

export function createMatrix(width = 10, height = 10, bombCount = 10) {
    const welcome = document.querySelector('.welcome');
    welcome.classList.add('hidden')

    matrix = Array.from({length: height}, () => 
        Array.from({length: width}, () => 0)
    );

    addBombs(bombCount);

    

    matrix.forEach((matrixY, y) => {
        matrixY.forEach((matrixX, x) => {
            const newCell = createCell(Boolean(matrixX), {x, y})
            matrix[y][x] = newCell
        })
    })

    
    console.log(matrix);
}

function addBombs(bombCount) {
    let currentBombCount = bombCount;
    const matrixY = matrix.length;
    const matrixX = matrix[0].length;

    while (currentBombCount) {
        const x = getRandomInt(0, matrixX);
        const y = getRandomInt(0, matrixY);
        if (matrix[y][x] != 9) {
            matrix[y][x] = 9;
            currentBombCount--
        }
        
    }
}

export function getCountOfRoundedBombs(coordinates) {
    const {x, y} = coordinates;
    const n_1 = matrix[y - 1]?.[x - 1];
    const n_2 = matrix[y - 1]?.[x];
    const n_3 = matrix[y - 1]?.[x + 1];
    const n_4 = matrix[y]?.[x - 1];
    const n_5 = matrix[y]?.[x + 1];
    const n_6 = matrix[y + 1]?.[x - 1];
    const n_7 = matrix[y + 1]?.[x];
    const n_8 = matrix[y + 1]?.[x + 1];

    return [
        n_1,
        n_2,
        n_3,
        n_4,
        n_5,
        n_6,
        n_7,
        n_8
    ].filter((item) => typeof item !== "undefined");
}

export function openAllBombs() {
    matrix.forEach((matrixY, y) => {
        matrixY.forEach((matrixX, x) => {
            if (matrixX.isBomb) {
                matrixX.openCell()
            }
        })
    })
}


export function checkLoseGame() {
    let activeBombsCount = 0
    matrix.forEach((matrixY, y) => {
        matrixY.forEach((matrixX, x) => {
            if (matrixX.isBomb && !matrixX.isFlagged) {
                activeBombsCount++
            } else {
                activeBombsCount--
            }
        })
    })
    if (activeBombsCount == 0)  {
        console.log('выиграл')
    }
    console.log(activeBombsCount)
}