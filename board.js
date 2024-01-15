const DEFAULT_MODE = 'default';

let currentMode = DEFAULT_MODE;
let odinCounter = 100;
let isPaused = true;

const display = document.querySelector('#display');
const resizeButton = document.querySelector('#resize');
const randomizeButton = document.querySelector('#randomizer');
const defaultButton = document.querySelector('#classic');
const odinButton = document.querySelector('#darker');

resizeButton.addEventListener('click', resizeDisplay);
randomizeButton.addEventListener('click', () => currentMode = 'randomMode');
defaultButton.addEventListener('click', () => currentMode = DEFAULT_MODE);
odinButton.addEventListener('click', () => currentMode = 'odinMode');
display.addEventListener('click', () => isPaused = !isPaused);

createTable(16);

function createTable(dim) {
    for ( let i = 0 ; i < dim ; i++ ) {
        let row = document.createElement('div');
        row.className = "row";
        for ( let j = 0 ; j < dim ; j++ ) {
            let cell= document.createElement('div');
            cell.className = "column";
            cell.addEventListener('mouseover', changeColor);
            row.appendChild(cell);
        }
        display.appendChild(row);
    }
}

function changeColor(e) {
    if ( !isPaused ){
        if ( currentMode === DEFAULT_MODE ) {
            e.target.style.backgroundColor = 'grey';
        } else if ( currentMode === 'randomMode' ) {
            e.target.style.backgroundColor = `rgb(${genRandom()}, ${genRandom()}, ${genRandom()})`;
        } else if ( currentMode === 'odinMode' ) {
            e.target.style.backgroundColor = `rgb(${getOdinColor()}% ${getOdinColor()}%, ${getOdinColor()}%)`
        }
    }
}

const isValidNumber = (value) => {
    return value > 0 && value < 101;
}

const newUserDisplayValue = () => {
    let newValue = +prompt("Insert a new value for the display. From 1 to 100.", "24");
    while( !isValidNumber(newValue) ) {
        newValue = +prompt("Insert a valid value from 1 to 100.", "24");
    }
    return newValue;
}

function clearDisplay() {
    while( display.lastElementChild ) {
        display.removeChild(display.lastElementChild);
    }
}

function resizeDisplay() {
    const newValue = newUserDisplayValue();
    clearDisplay();
    createTable(newValue);
}

function getOdinColor() {
    odinCounter -= 1;
    return `${odinCounter}`;
}

function genRandom() {
    return Math.random() * 256;
}
