const display = document.querySelector('#display');

createTable(16);

let cells = document.querySelectorAll('.column');

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

cells.forEach(cell => {
    cell.addEventListener('mouseenter', () => {
        cell.style.backgroundColor = 'black';
    });

    cell.addEventListener('mouseleave', () => {
        cell.style.backgroundColor = 'grey';
    });
});
