import { getCountOfRoundedBombs, matrix } from "./matrix";

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
                }
                // Открывает клетки, соседние с пустыми
                if (cell.value && !cell.isOpened) {
                    this.isOpened = true;
                    this.cell.classList.remove('cell__start');
                    cell.onCellClick();
                }
            })
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
        this.cell.addEventListener('click', this.onCellClick.bind(this));
        wrapper.append(cell);
    }
}

export function createCell(isBomb, coordinates) {
    const newCell = new Cell(isBomb, coordinates);

    newCell.setCellType();
    newCell.renderCell();
    return newCell

}