const display = document.querySelector('#display');

createTable(16);

const resizeButton = document.querySelector('#resize');
let cells = document.querySelectorAll('.column');
const randomizeButton = document.querySelector('#randomizer');

resizeButton.addEventListener('click', resizeDisplay);
randomizeButton.addEventListener('click', randomColorPixel);

function createTable(dim) {
    for ( let i = 0 ; i < dim ; i++ ) {
        let row = document.createElement('div');
        row.className = "row";
        for ( let j = 0 ; j < dim ; j++ ) {
            let cell= document.createElement('div');
            cell.className = "column";
            row.appendChild(cell);
        }
        display.appendChild(row);
    }
}

addPixelBehavior();

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

function addPixelBehavior() {
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = 'black';
        });

        cell.addEventListener('mouseleave', () => {
            cell.style.backgroundColor = 'grey';
        });
    });
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
    cells = document.querySelectorAll('.column');
    addPixelBehavior();
}

function randomColorPixel() {
    cells.forEach(cell => {
        const randomRed = Math.random() * 255;
        const randomGreen = Math.random() * 255;
        const randomBlue = Math.random() * 255;
        cell.addEventListener('mouseleave', () => {
            cell.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
        });
    })
}
