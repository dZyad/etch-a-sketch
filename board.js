const DEFAULT_MODE = 'default';

let currentMode = DEFAULT_MODE;

const display = document.querySelector('#display');
const resizeButton = document.querySelector('#resize');
const randomizeButton = document.querySelector('#randomizer');

resizeButton.addEventListener('click', resizeDisplay);
randomizeButton.addEventListener('click', () => currentMode = 'randomMode');

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
    if ( currentMode === DEFAULT_MODE ) {
        e.target.style.backgroundColor = 'grey';
    } else if ( currentMode === 'randomMode') {
        e.target.style.backgroundColor = `rgb(${genRandom()}, ${genRandom()}, ${genRandom()})`;
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

function genRandom() {
    console.log('random')
    return Math.random() * 256;
}
