/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/cell.js":
/*!*****************************!*\
  !*** ./src/modules/cell.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCell\": () => (/* binding */ createCell)\n/* harmony export */ });\n/* harmony import */ var _loseGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loseGame */ \"./src/modules/loseGame.js\");\n/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix */ \"./src/modules/matrix.js\");\n/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startGame */ \"./src/modules/startGame.js\");\n/* harmony import */ var _winGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./winGame */ \"./src/modules/winGame.js\");\n\r\n\r\n\r\n\r\n\r\nconst body = document.querySelector('body');\r\nconst wrapper = document.createElement('div');\r\nwrapper.classList.add('wrapper');\r\nbody.append(wrapper)\r\n\r\nclass Cell {\r\n    constructor(isBomb, coordinates) {\r\n        this.isBomb = isBomb\r\n        this.coordinates = coordinates\r\n    }\r\n\r\n    setCellValue(value) {\r\n        this.value = value\r\n    }\r\n\r\n    setCellType() {\r\n        if (this.isBomb) {\r\n            this.setCellValue(\"<img class='bomb__ico' src='./src/img/bomb.jpeg'>\");\r\n            return\r\n        }\r\n\r\n        const countOfRoundedBombs = (0,_matrix__WEBPACK_IMPORTED_MODULE_1__.getCountOfRoundedBombs)(this.coordinates);\r\n        let bombCount = 0;\r\n\r\n        countOfRoundedBombs.forEach(cell => {\r\n            if (cell == 9 || cell.isBomb) {\r\n                bombCount++\r\n            }\r\n\r\n            if (bombCount) {\r\n                this.setCellValue(bombCount)\r\n            }\r\n        })\r\n    }\r\n\r\n    openCell() {\r\n        this.isOpened = true;\r\n        this.cell.classList.remove('cell__start');\r\n        if (this.isFlagged && this.isBomb) {\r\n            this.cell.innerHTML = this.value\r\n        }\r\n    }\r\n\r\n    setFlag(isFlagged) {\r\n        this.isFlagged = isFlagged;\r\n        if (this.isFlagged) {\r\n            this.cell.innerHTML = \"<img class='flag__ico' src='./src/img/flag.png'>\"\r\n        } else {\r\n            this.cell.innerHTML = this.value;\r\n            \r\n        }\r\n    }\r\n\r\n    onCellClick() {\r\n        if (this.value) {\r\n            this.isOpened = true;\r\n            this.cell.classList.remove('cell__start')\r\n        }\r\n\r\n\r\n        if (!this.value) {\r\n            const countOfRoundedBombs = (0,_matrix__WEBPACK_IMPORTED_MODULE_1__.getCountOfRoundedBombs)(this.coordinates);\r\n            this.isOpened = true;\r\n            this.cell.classList.remove('cell__start')\r\n            countOfRoundedBombs.forEach(cell => {\r\n                if (!cell.value && !cell.isOpened) {\r\n                    cell.onCellClick();\r\n                } else if (cell.value && !cell.isOpened) { // Открывает клетки, соседние с пустыми\r\n                    this.isOpened = true;\r\n                    this.cell.classList.remove('cell__start');\r\n                    cell.onCellClick();\r\n                }     \r\n            })\r\n        }\r\n\r\n        if (this.isBomb) {\r\n            (0,_matrix__WEBPACK_IMPORTED_MODULE_1__.openAllBombs)();\r\n            (0,_loseGame__WEBPACK_IMPORTED_MODULE_0__.loseGame)();\r\n            (0,_matrix__WEBPACK_IMPORTED_MODULE_1__.setTimer)(false);\r\n        }\r\n\r\n        if (this.isFlagged) {\r\n            this.cell.innerHTML = this.value ? this.value : '';\r\n            this.cell.isOpened = true;\r\n            this.cell.classList.remove('cell__start')\r\n        }\r\n    }\r\n\r\n    renderCell() {\r\n        const cell = document.createElement('div');\r\n        cell.innerHTML = this.value || '';\r\n        cell.classList.add(\"cell\");\r\n        cell.classList.add(\"cell__start\");\r\n        if (!this.isBomb && this.value) {\r\n            cell.classList.add(`cell__${this.value}`)\r\n        };\r\n        this.cell = cell;\r\n        this.cell.addEventListener('click',() => {\r\n            if (!this.isOpened) {\r\n                (0,_matrix__WEBPACK_IMPORTED_MODULE_1__.setTurns)();\r\n            }\r\n            this.onCellClick()\r\n            ;(0,_matrix__WEBPACK_IMPORTED_MODULE_1__.checkWinGame)();\r\n            (0,_matrix__WEBPACK_IMPORTED_MODULE_1__.checkFlags)();\r\n            \r\n        });\r\n        this.cell.addEventListener('contextmenu',(e) => {\r\n            e.preventDefault();\r\n            if (!this.isOpened) {\r\n                if (this.isFlagged) {\r\n                    this.setFlag(false);\r\n                    \r\n                } else if (!this.isFlagged && _matrix__WEBPACK_IMPORTED_MODULE_1__.avaliableFlags > 0){\r\n                    this.setFlag(true);\r\n                } \r\n                (0,_matrix__WEBPACK_IMPORTED_MODULE_1__.checkFlags)()\r\n                ;(0,_matrix__WEBPACK_IMPORTED_MODULE_1__.setTurns)();\r\n            }\r\n            \r\n        });\r\n        wrapper.append(cell);\r\n    }\r\n}\r\n\r\nfunction createCell(isBomb, coordinates) {\r\n    const newCell = new Cell(isBomb, coordinates);\r\n\r\n    newCell.setCellType();\r\n    newCell.renderCell();\r\n    return newCell\r\n\r\n}\n\n//# sourceURL=webpack://minesweeper/./src/modules/cell.js?");

/***/ }),

/***/ "./src/modules/generateRandom.js":
/*!***************************************!*\
  !*** ./src/modules/generateRandom.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomInt\": () => (/* binding */ getRandomInt)\n/* harmony export */ });\nfunction getRandomInt(min, max) {\r\n    min = Math.ceil(min);\r\n    max = Math.floor(max);\r\n    return  Math.floor(Math.random() * (max - min) + min);\r\n}\n\n//# sourceURL=webpack://minesweeper/./src/modules/generateRandom.js?");

/***/ }),

/***/ "./src/modules/hudline.js":
/*!********************************!*\
  !*** ./src/modules/hudline.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addFlagsCounter\": () => (/* binding */ addFlagsCounter),\n/* harmony export */   \"createHudline\": () => (/* binding */ createHudline)\n/* harmony export */ });\n/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix */ \"./src/modules/matrix.js\");\n\r\n\r\n\r\nfunction createHudline() {\r\n    const wrapper = document.querySelector('.wrapper');\r\n    const hudline = document.createElement('div');\r\n    hudline.classList.add('hudline')\r\n    const hudlineFlagsCounter = document.createElement('div');\r\n    hudlineFlagsCounter.classList.add('hudline__flagCounter');\r\n    hudline.append(hudlineFlagsCounter);\r\n    const modeSelector = document.createElement('div');\r\n    if (_matrix__WEBPACK_IMPORTED_MODULE_0__.mode == \"medium\") {\r\n        modeSelector.innerHTML = `\r\n        <form action=\"select1.php\" method=\"post\" >\r\n            <select size=\"1\" name=\"hero[]\" id=\"selector\">\r\n            <option disabled>Выберите cложность</option>\r\n            <option value=\"easy\">Easy</option>\r\n            <option selected value=\"medium\">Medium</option>\r\n            <option value=\"hard\">Hard</option>\r\n            </select>\r\n        </form>\r\n    `\r\n    } else if (_matrix__WEBPACK_IMPORTED_MODULE_0__.mode == \"hard\") {\r\n        modeSelector.innerHTML = `\r\n        <form action=\"select1.php\" method=\"post\" >\r\n            <select size=\"1\" name=\"hero[]\" id=\"selector\">\r\n            <option disabled>Выберите cложность</option>\r\n            <option value=\"easy\">Easy</option>\r\n            <option value=\"medium\">Medium</option>\r\n            <option selected value=\"hard\">Hard</option>\r\n            </select>\r\n        </form>\r\n    `\r\n    } else {\r\n    modeSelector.innerHTML = `\r\n        <form action=\"select1.php\" method=\"post\" >\r\n            <select size=\"1\" name=\"hero[]\" id=\"selector\">\r\n            <option disabled>Выберите cложность</option>\r\n            <option selected value=\"easy\">Easy</option>\r\n            <option value=\"medium\">Medium</option>\r\n            <option value=\"hard\">Hard</option>\r\n            </select>\r\n        </form>\r\n    `\r\n    }\r\n    hudline.append(modeSelector);\r\n    const restartButton = document.createElement('button');\r\n    restartButton.classList.add('hudline__restart');\r\n    restartButton.innerText = 'save + restart'\r\n    hudline.append(restartButton);\r\n\r\n    const turns = document.createElement('div');\r\n    turns.classList.add('hudline__turns');\r\n    turns.innerText = `Кликов: 0`;\r\n    hudline.append(turns);\r\n\r\n    const timer = document.createElement('div');\r\n    timer.classList.add('hudline__timer');\r\n/*     timer.innerText = `Time: 0s`; */\r\n    hudline.append(timer);\r\n    \r\n    const hudlineBombsCounter = document.createElement('div');\r\n    hudlineBombsCounter.classList.add('hudline__bombCounter');\r\n    hudline.append(hudlineBombsCounter);\r\n\r\n    wrapper.append(hudline);\r\n}\r\n\r\nfunction addFlagsCounter(flags) {\r\n    const hudlineFlagsCounter = document.querySelector('.hudline__flagCounter');\r\n    hudlineFlagsCounter.innerHTML = `Флагов: ${flags}`;\r\n    const hudlineBombsCounter = document.querySelector('.hudline__bombCounter');\r\n    hudlineBombsCounter.innerHTML = `Бомб: ${_matrix__WEBPACK_IMPORTED_MODULE_0__.bombs - flags}`\r\n}\r\n\r\n\n\n//# sourceURL=webpack://minesweeper/./src/modules/hudline.js?");

/***/ }),

/***/ "./src/modules/loseGame.js":
/*!*********************************!*\
  !*** ./src/modules/loseGame.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loseGame\": () => (/* binding */ loseGame)\n/* harmony export */ });\n/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix */ \"./src/modules/matrix.js\");\n\r\n\r\nfunction loseGame() {\r\n    const body = document.querySelector('body');\r\n    body.classList.add('overflow-hidden')\r\n    const wrapper = document.querySelector('.wrapper');\r\n    const win = document.createElement('div');\r\n    win.classList.add('win');\r\n    win.innerHTML = `\r\n        <div class=\"win__message\">Вы подорвались!</div>\r\n        <div class=\"win__question\">Сыграть снова:</div>\r\n        `;\r\n    const button = document.createElement('button');\r\n    button.classList.add('win__button');\r\n    button.innerText = \"OK LET'S GO\";\r\n    win.append(button);\r\n    wrapper.append(win);\r\n    button.addEventListener('click', () => {\r\n        (0,_matrix__WEBPACK_IMPORTED_MODULE_0__.getValue)();\r\n        if (_matrix__WEBPACK_IMPORTED_MODULE_0__.mode == \"easy\") {\r\n            const wrapper = document.querySelector('.wrapper');\r\n            wrapper.classList.contains('wrapper_hard') ? wrapper.classList.remove('wrapper_hard') : null;\r\n            wrapper.classList.contains('wrapper_medium') ? wrapper.classList.remove('wrapper_medium') : null;\r\n            (0,_matrix__WEBPACK_IMPORTED_MODULE_0__.createMatrix)()\r\n        } else if (_matrix__WEBPACK_IMPORTED_MODULE_0__.mode == \"medium\") {\r\n            const wrapper = document.querySelector('.wrapper')\r\n            wrapper.classList.contains('wrapper_hard') ? wrapper.classList.remove('wrapper_hard') : null;\r\n            wrapper.classList.add('wrapper_medium')\r\n            ;(0,_matrix__WEBPACK_IMPORTED_MODULE_0__.createMatrix)(15, 15, 25)\r\n        } else if (_matrix__WEBPACK_IMPORTED_MODULE_0__.mode == \"hard\") {\r\n            const wrapper = document.querySelector('.wrapper')\r\n            wrapper.classList.contains('wrapper_medium') ? wrapper.classList.remove('wrapper_medium') : null;\r\n            wrapper.classList.add('wrapper_hard')\r\n            ;(0,_matrix__WEBPACK_IMPORTED_MODULE_0__.createMatrix)(25, 25, 75)\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://minesweeper/./src/modules/loseGame.js?");

/***/ }),

/***/ "./src/modules/matrix.js":
/*!*******************************!*\
  !*** ./src/modules/matrix.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avaliableFlags\": () => (/* binding */ avaliableFlags),\n/* harmony export */   \"bombs\": () => (/* binding */ bombs),\n/* harmony export */   \"checkAvaliableFlags\": () => (/* binding */ checkAvaliableFlags),\n/* harmony export */   \"checkFlags\": () => (/* binding */ checkFlags),\n/* harmony export */   \"checkWinGame\": () => (/* binding */ checkWinGame),\n/* harmony export */   \"createMatrix\": () => (/* binding */ createMatrix),\n/* harmony export */   \"getCountOfRoundedBombs\": () => (/* binding */ getCountOfRoundedBombs),\n/* harmony export */   \"getValue\": () => (/* binding */ getValue),\n/* harmony export */   \"matrix\": () => (/* binding */ matrix),\n/* harmony export */   \"mode\": () => (/* binding */ mode),\n/* harmony export */   \"openAllBombs\": () => (/* binding */ openAllBombs),\n/* harmony export */   \"setTimer\": () => (/* binding */ setTimer),\n/* harmony export */   \"setTurns\": () => (/* binding */ setTurns),\n/* harmony export */   \"turns\": () => (/* binding */ turns)\n/* harmony export */ });\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ \"./src/modules/cell.js\");\n/* harmony import */ var _generateRandom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateRandom */ \"./src/modules/generateRandom.js\");\n/* harmony import */ var _hudline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hudline */ \"./src/modules/hudline.js\");\n/* harmony import */ var _winGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./winGame */ \"./src/modules/winGame.js\");\n\r\n\r\n\r\n\r\n\r\nlet matrix = [];\r\nlet bombs;\r\nlet avaliableFlags;\r\nlet mode;\r\nlet turns = -1;\r\n\r\nfunction createMatrix(width = 10, height = 10, bombCount = 10) {\r\n    bombs = bombCount;\r\n    const welcome = document.querySelector('.welcome');\r\n    welcome ? welcome.remove() : undefined;\r\n    \r\n    const wrapper = document.querySelector('.wrapper');\r\n    wrapper.innerHTML = ''\r\n\r\n    const body = document.querySelector('body');\r\n    body.classList.remove('overflow-hidden');\r\n\r\n\r\n    matrix = Array.from({length: height}, () => \r\n        Array.from({length: width}, () => 0)\r\n    );\r\n\r\n    addBombs(bombCount);\r\n    (0,_hudline__WEBPACK_IMPORTED_MODULE_2__.createHudline)();\r\n    (0,_hudline__WEBPACK_IMPORTED_MODULE_2__.addFlagsCounter)(0, bombCount)\r\n    restart();\r\n    getValue();\r\n    turns = -1\r\n    setTurns();\r\n    setTimer(true);\r\n\r\n    matrix.forEach((matrixY, y) => {\r\n        matrixY.forEach((matrixX, x) => {\r\n            const newCell = (0,_cell__WEBPACK_IMPORTED_MODULE_0__.createCell)(Boolean(matrixX), {x, y})\r\n            matrix[y][x] = newCell\r\n        })\r\n    })\r\n\r\n}\r\n\r\nfunction addBombs(bombCount) {\r\n    let currentBombCount = bombCount;\r\n    const matrixY = matrix.length;\r\n    const matrixX = matrix[0].length;\r\n\r\n    while (currentBombCount) {\r\n        const x = (0,_generateRandom__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(0, matrixX);\r\n        const y = (0,_generateRandom__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(0, matrixY);\r\n        if (matrix[y][x] != 9) {\r\n            matrix[y][x] = 9;\r\n            currentBombCount--\r\n        }\r\n        \r\n    }\r\n}\r\n\r\nfunction getCountOfRoundedBombs(coordinates) {\r\n    const {x, y} = coordinates;\r\n    const n_1 = matrix[y - 1]?.[x - 1];\r\n    const n_2 = matrix[y - 1]?.[x];\r\n    const n_3 = matrix[y - 1]?.[x + 1];\r\n    const n_4 = matrix[y]?.[x - 1];\r\n    const n_5 = matrix[y]?.[x + 1];\r\n    const n_6 = matrix[y + 1]?.[x - 1];\r\n    const n_7 = matrix[y + 1]?.[x];\r\n    const n_8 = matrix[y + 1]?.[x + 1];\r\n\r\n    return [\r\n        n_1,\r\n        n_2,\r\n        n_3,\r\n        n_4,\r\n        n_5,\r\n        n_6,\r\n        n_7,\r\n        n_8\r\n    ].filter((item) => typeof item !== \"undefined\");\r\n}\r\n\r\nfunction openAllBombs() {\r\n    matrix.forEach((matrixY, y) => {\r\n        matrixY.forEach((matrixX, x) => {\r\n            if (matrixX.isBomb) {\r\n                matrixX.openCell()\r\n            }\r\n        })\r\n    })\r\n}\r\n\r\n\r\nfunction checkWinGame() {\r\n    let unopenedCells = 0\r\n    matrix.forEach((matrixY, y) => {\r\n        matrixY.forEach((matrixX, x) => {\r\n            if (!matrixX.isBomb && !matrixX.isOpened) {\r\n                unopenedCells++\r\n            }\r\n        })\r\n    })\r\n    if (unopenedCells == 0) {\r\n        (0,_winGame__WEBPACK_IMPORTED_MODULE_3__.winGame)();\r\n    }\r\n}\r\n\r\nfunction checkFlags() {\r\n    let flags = 0\r\n    matrix.forEach((matrixY, y) => {\r\n        matrixY.forEach((matrixX, x) => {\r\n            if (matrixX.isFlagged && !matrixX.isOpened) {\r\n                flags++\r\n            }\r\n        })\r\n    })\r\n    ;(0,_hudline__WEBPACK_IMPORTED_MODULE_2__.addFlagsCounter)(flags)\r\n    checkAvaliableFlags(flags);\r\n}\r\n\r\nfunction checkAvaliableFlags(flags) {\r\n    avaliableFlags = bombs - flags;\r\n    return (avaliableFlags);\r\n}\r\n\r\nfunction restart() {\r\n    const restartButton = document.querySelector('.hudline__restart');\r\n    restartButton.addEventListener('click', () => {\r\n        getValue();\r\n        if (mode == \"easy\") {\r\n            const wrapper = document.querySelector('.wrapper');\r\n            wrapper.classList.contains('wrapper_hard') ? wrapper.classList.remove('wrapper_hard') : null;\r\n            wrapper.classList.contains('wrapper_medium') ? wrapper.classList.remove('wrapper_medium') : null;\r\n            createMatrix()\r\n        } else if (mode == \"medium\") {\r\n            const wrapper = document.querySelector('.wrapper')\r\n            wrapper.classList.contains('wrapper_hard') ? wrapper.classList.remove('wrapper_hard') : null;\r\n            wrapper.classList.add('wrapper_medium')\r\n            createMatrix(15, 15, 25)\r\n        } else if (mode == \"hard\") {\r\n            const wrapper = document.querySelector('.wrapper')\r\n            wrapper.classList.contains('wrapper_medium') ? wrapper.classList.remove('wrapper_medium') : null;\r\n            wrapper.classList.add('wrapper_hard')\r\n            createMatrix(25, 25, 75)\r\n        }\r\n    });\r\n}\r\n\r\nfunction getValue() {\r\n    const selector = document.querySelector('#selector');\r\n    mode = selector.value;\r\n}\r\n\r\nfunction setTurns() {\r\n    turns++\r\n    const hudlineTurns = document.querySelector('.hudline__turns');\r\n    hudlineTurns.innerText = `Кликов: ${turns}`\r\n}\r\n\r\nfunction setTimer(isOn) {\r\n    let time = 0;\r\n    const timer = document.querySelector('.hudline__timer');\r\n    timer.innerText = `Time: ${time}s`;\r\n\r\n    let timerId;\r\n    \r\n    if (isOn) {\r\n        timerId = setTimeout(function tick() {\r\n            time++\r\n            timer.innerText = `Time: ${time}s`\r\n            timerId = setTimeout(tick, 1000);\r\n          }, 1000);\r\n    } else {\r\n        clearTimeout(timerId);\r\n    }\r\n    \r\n}\n\n//# sourceURL=webpack://minesweeper/./src/modules/matrix.js?");

/***/ }),

/***/ "./src/modules/startGame.js":
/*!**********************************!*\
  !*** ./src/modules/startGame.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"welcome\": () => (/* binding */ welcome)\n/* harmony export */ });\n/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix */ \"./src/modules/matrix.js\");\n\r\n\r\nfunction welcome() {\r\n    const body = document.querySelector('body')\r\n    const startGame = document.createElement('div');\r\n    startGame.classList.add('welcome');\r\n    const welcomeMessage = document.createElement('div');\r\n    welcomeMessage.innerText = 'Welcome in Minesweeper'\r\n    welcomeMessage.classList.add('welcome__message')\r\n    startGame.append(welcomeMessage);\r\n    const button = document.createElement('button');\r\n    button.classList.add('welcome__button')\r\n    button.innerText = 'НАЧАТЬ ИГРУ'\r\n    startGame.append(button);\r\n    body.append(startGame);\r\n    button.addEventListener('click', () => (0,_matrix__WEBPACK_IMPORTED_MODULE_0__.createMatrix)())\r\n\r\n}\n\n//# sourceURL=webpack://minesweeper/./src/modules/startGame.js?");

/***/ }),

/***/ "./src/modules/winGame.js":
/*!********************************!*\
  !*** ./src/modules/winGame.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"winGame\": () => (/* binding */ winGame)\n/* harmony export */ });\n/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix */ \"./src/modules/matrix.js\");\n\r\n\r\n\r\nfunction winGame() {\r\n    \r\n    const body = document.querySelector('body');\r\n    body.classList.add('overflow-hidden')\r\n    const wrapper = document.querySelector('.wrapper');\r\n    const win = document.createElement('div');\r\n    win.classList.add('win');\r\n    win.innerHTML = `\r\n        <div class=\"win__message win__message_green\">Counter-terrorists win!</div>\r\n        <div class=\"win__question\">Сыграть снова:</div>\r\n        `;\r\n    const button = document.createElement('button');\r\n    button.classList.add('win__button');\r\n    button.innerText = \"OK LET'S GO\";\r\n    win.append(button);\r\n    wrapper.append(win);\r\n\r\n    button.addEventListener('click', () => {\r\n        (0,_matrix__WEBPACK_IMPORTED_MODULE_0__.getValue)();\r\n        if (_matrix__WEBPACK_IMPORTED_MODULE_0__.mode == \"easy\") {\r\n            const wrapper = document.querySelector('.wrapper');\r\n            wrapper.classList.contains('wrapper_hard') ? wrapper.classList.remove('wrapper_hard') : null;\r\n            wrapper.classList.contains('wrapper_medium') ? wrapper.classList.remove('wrapper_medium') : null;\r\n            (0,_matrix__WEBPACK_IMPORTED_MODULE_0__.createMatrix)()\r\n        } else if (_matrix__WEBPACK_IMPORTED_MODULE_0__.mode == \"medium\") {\r\n            const wrapper = document.querySelector('.wrapper')\r\n            wrapper.classList.contains('wrapper_hard') ? wrapper.classList.remove('wrapper_hard') : null;\r\n            wrapper.classList.add('wrapper_medium')\r\n            ;(0,_matrix__WEBPACK_IMPORTED_MODULE_0__.createMatrix)(15, 15, 25)\r\n        } else if (_matrix__WEBPACK_IMPORTED_MODULE_0__.mode == \"hard\") {\r\n            const wrapper = document.querySelector('.wrapper')\r\n            wrapper.classList.contains('wrapper_medium') ? wrapper.classList.remove('wrapper_medium') : null;\r\n            wrapper.classList.add('wrapper_hard')\r\n            ;(0,_matrix__WEBPACK_IMPORTED_MODULE_0__.createMatrix)(25, 25, 75)\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://minesweeper/./src/modules/winGame.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_startGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/startGame */ \"./src/modules/startGame.js\");\n\r\n\r\n(0,_modules_startGame__WEBPACK_IMPORTED_MODULE_0__.welcome)()\n\n//# sourceURL=webpack://minesweeper/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;