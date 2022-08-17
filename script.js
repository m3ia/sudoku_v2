// Make an array of arrays for rows and columns
// Google Matrix implementation JS

let userInput = '000000000973080060000109823400090602060030019010000008600908031000510786000000504';
let userInput2 = '128653947973284165546179823435891672862735419719426358657948231394512786281367594';

// This would allow us to have a 1:1 representation of the table in HTML
let matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
matrix[3][2]; // this accesses element at Row 3, Column 2
// write function that returns a subset of those values
    // Getting a row: matrix[rowNum]
    // Getting a column: matrix[i][colNum] -- using a loop
    // Getting a box: boxRow and boxColumn

// ^^ Array.repeat can create an array that repeats x number of elements

let rowNum = 0; let colNum = 0;
for (let i of userInput2) {
    matrix[rowNum][colNum] = i;
    if (rowNum === 8 && colNum === 8) {
        break;
    } 
    // Create index for next loop
    colNum++;
    if (colNum > 8) {
        colNum = 0;
        rowNum++;
    }
    if (rowNum > 8) {
        console.log(userInput2.length);
        console.log('oops', rowNum, colNum);
    }
}

console.log(matrix);

const doc = document;

// Get Grid
let grid = doc.getElementsByClassName('grid')[0];

matrix.forEach((elem, i, arr) => {
    let tr = doc.createElement('tr');
    grid.appendChild(tr);
    elem.forEach((elem) => {
        let td = doc.createElement('td');
        tr.appendChild(td);
        td.innerHTML = elem;
    })
})
let tr = doc.createElement('tr');
let td = doc.createElement('td');

