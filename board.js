const display = document.querySelector('#display');

function createTable(dim) {
    for ( let i = 0 ; i < dim ; i++ ) {
        let row = document.createElement('div');
        row.classList = "row cell";
        for ( let j = 0 ; j < dim ; j++ ) {
            let cell= document.createElement('div');
            cell.classList = "column cell";
            row.appendChild(cell);
        }
        display.appendChild(row);
    }
}



createTable(16);