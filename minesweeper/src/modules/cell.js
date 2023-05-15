import { getCountOfRoundedBombs } from "./matrix";

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
            this.setCellValue("💣");
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

    renderCell() {
        const cell = document.createElement('div');
        cell.innerHTML = this.value || '';
        cell.classList.add('cell')
        wrapper.append(cell);
    }
}

export function createCell(isBomb, coordinates) {
    const newCell = new Cell(isBomb, coordinates);

    newCell.setCellType();
    newCell.renderCell();
    return newCell

}