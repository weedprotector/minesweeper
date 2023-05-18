import { checkLoseGame, createMatrix, getCountOfRoundedBombs, matrix, openAllBombs } from "./matrix";
import { welcome } from "./startGame";

const body = document.querySelector('body');
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
body.append(wrapper)

class Cell {
    constructor(isBomb, coordinates) {
        this.isBomb = isBomb
        this.coordinates = coordinates
    }

    setCellValue(value) {
        this.value = value
    }

    setCellType() {
        if (this.isBomb) {
            this.setCellValue("<img class='bomb__ico' src='./src/img/bomb.jpeg'>");
            return
        }

        const countOfRoundedBombs = getCountOfRoundedBombs(this.coordinates);
        let bombCount = 0;

        countOfRoundedBombs.forEach(cell => {
            if (cell == 9 || cell.isBomb) {
                bombCount++
            }

            if (bombCount) {
                this.setCellValue(bombCount)
            }
        })
    }

    openCell() {
        this.isOpened = true;
        this.cell.classList.remove('cell__start');
        if (this.isFlagged && this.isBomb) {
            this.cell.innerHTML = this.value
        }
    }

    setFlag(isFlagged) {
        this.isFlagged = isFlagged;
        if (this.isFlagged) {
            this.cell.innerHTML = "<img class='flag__ico' src='./src/img/flag.png'>"
        } else {
            this.cell.innerHTML = this.value;
            
        }
    }

    onCellClick() {
        if (this.value) {
            this.isOpened = true;
            this.cell.classList.remove('cell__start')
        }

        if (!this.value) {
            const countOfRoundedBombs = getCountOfRoundedBombs(this.coordinates);
            this.isOpened = true;
            this.cell.classList.remove('cell__start')
            countOfRoundedBombs.forEach(cell => {
                if (!cell.value && !cell.isOpened) {
                    cell.onCellClick();
                } else if (cell.value && !cell.isOpened) { // Открывает клетки, соседние с пустыми
                    this.isOpened = true;
                    this.cell.classList.remove('cell__start');
                    cell.onCellClick();
                }     
            })
        }

        if (this.isBomb) {
            openAllBombs();
        }

        if (this.isFlagged) {
            this.cell.innerHTML = this.value;
            this.cell.isOpened = true;
            this.cell.classList.remove('cell__start')
        }
    }

    renderCell() {
        const cell = document.createElement('div');
        cell.innerHTML = this.value || '';
        cell.classList.add("cell");
        cell.classList.add("cell__start");
        if (!this.isBomb && this.value) {
            cell.classList.add(`cell__${this.value}`)
        };
        this.cell = cell;
        this.cell.addEventListener('click',() => this.onCellClick());
        this.cell.addEventListener('contextmenu',(e) => {
            e.preventDefault();
            if (!this.isOpened) {
                if (this.isFlagged) {
                    this.setFlag(false);
                    
                } else {
                    this.setFlag(true);
                }
                checkLoseGame();
            }
            
        });
        wrapper.append(cell);
    }
}

export function createCell(isBomb, coordinates) {
    const newCell = new Cell(isBomb, coordinates);

    newCell.setCellType();
    newCell.renderCell();
    return newCell

}