// Make an array of arrays for rows and columns
// Google Matrix implementation JS

let userInput2 =
    '128653947973284165546179823435891672862735419719426358657948231394512786281367594';

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

// let rowNum = 0; let colNum = 0;
// for (let i of userInput2) {
//     matrix[rowNum][colNum] = i;
//     if (rowNum === 8 && colNum === 8) {
//         break;
//     } 
//     // Create index for next loop
//     colNum++;
//     if (colNum > 8) {
//         colNum = 0;
//         rowNum++;
//     }
//     if (rowNum > 8) {
//         console.log(userInput2.length);
//         console.log('oops', rowNum, colNum);
//     }
// }

// console.log(matrix);

const doc = document;

// Get Grid
// let grid = doc.getElementsByClassName('grid')[0];

// matrix.forEach((elem, i, arr) => {
//     let tr = doc.createElement('tr');
//     grid.appendChild(tr);
//     elem.forEach((elem) => {
//         let td = doc.createElement('td');
//         tr.appendChild(td);
//         td.innerHTML = elem;
//     })
// })
// let tr = doc.createElement('tr');
// let td = doc.createElement('td');

// Get the array of everything in the parent of row 2, column 2 (9) 
// should be [1, 2, 8, 9, 7, 3, 5, 4, 6]
// Going to create a grid with the index of each item in the string:

// let indexMatrix = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];


// let sampleStr = "";
// for (let i = 0; i < 81; i++) {
//     sampleStr+=(i % 9);
// }
// rowNum = 0; colNum = 0;
// for (let i = 0; i < sampleStr.length; i++) {
//     indexMatrix[rowNum][colNum] = i;
//     if (rowNum === 8 && colNum === 8) {
//         break;
//     } 
//     // Create index for next loop
//     colNum++;
//     if (colNum > 8) {
//         colNum = 0;
//         rowNum++;
//     }
//     if (rowNum > 8) {
//     }
// }

// console.log(matrix);

// Get indexMatrix grid
// let indexMatrixGrid = doc.getElementsByClassName('indexMatrixGrid')[0];

// indexMatrix.forEach((elem, i, arr) => {
//     let tr = doc.createElement('tr');
//     indexMatrixGrid.appendChild(tr);
//     elem.forEach((elem) => {
//         let td = doc.createElement('td');
//         tr.appendChild(td);
//         td.innerHTML = elem;
//     })
// })

// let tr2 = doc.createElement('tr');
// let td2 = doc.createElement('td');

//  create an object for each item? as we loop through the string, we'll push the number to its "parent" array.
// every 3 iterations, parent goes up by 1 until it hits 9
// any time the parent array hits a length of 9, update parent count to 

let sampleStr = "";
for (let i = 0; i < 81; i++) {
    sampleStr+=(i % 9);
}
// console.log('sampleStr', sampleStr);

let parentGrid = [ [], [], [], [], [], [], [], [], []];

// Algorithm for creating Parent Gride data structure
//  we want: parentGrid[0] = [0, 1, 2, 0, 1, 2, 0, 1, 2];
for (let i = 0; i < sampleStr.length; i++) { // 75 @ 3,8 @ 1, 2
    // Gets the exact row and column for the item (x is between 0-8, y is between 0-8)
    let column = i % 9; // 3
    let row = Math.floor(i / 9); // 8
    // Gets the exact coordinates 
    let parentGridCol = Math.floor(column / 3); // 1
    let parentGridRow = Math.floor(row / 3); // 2
    // Push to respective parent array
    let parentArr = (parentGridRow * 3) + (parentGridCol); // 7
    parentGrid[parentArr].push(sampleStr[i]); // parentGrid[7].includes 75 
}
// console.log(parentGrid[7].includes(75)); // true
// console.log(parentGrid[0]); //  we want: parentGrid[0] = [0, 1, 2, 0, 1, 2, 0, 1, 2];
// [0, 1, 2, 9, 10, 11, 18, 19, 20]
// i created a grid of all the indices and looked for a mathematical way to push each item to a data structure. ended up with a triple-nested loop
// created large coordinates to represent parents, then sought a mathematical way to see where an index would fall into. on the way, i figured out a way to identify the exact row and column of an index: to get the column, use % 9 since the entire first column is a multiple of 9. to get the row, do Math.floor(index/9) since i know every 27 numbers will fall between a parent row
// the next problem was figuring out how to map these exact coordinates to the larger parent grid where the min is 0 and the max is 2 on both the y and x axes. all i wanted was to push the respective item to a parentGrid array where the index matches up with the parent. Then I asked for help lol: let parentArr = (parentGridRow * 3) + (parentGridCol)./
// Apparently this line allows us to flatten the parent grid out, and tells us which parent box the item lives in.
// parentGridRow - mult by 3 bc if we flatten the grid, it'd be in box index 3. 
// if you flatten the grid, and see the column numbers as a "divisor" and the row as the "remainder" 


let starterGrid = '000000000973080060000109823400090602060030019010000008600908031000510786000000504';

// Create and append the table:
let exampleGrid = doc.getElementsByClassName('exampleGrid')[0];

let tr = null;
starterGrid.split('').forEach((elem, i, arr) => {
    if (i % 9 === 0) {
        tr = doc.createElement('tr');
        exampleGrid.appendChild(tr);
    }

    let td = doc.createElement('td');
    tr.appendChild(td);
    if (elem == 0) {
        td.innerHTML =
            `<input 
            type="number" 
            max="9" 
            min="1"
            class="cells"
            id="cell${i}"
            onchange="updateUserInput(${i})"
            required
        >
        </input>`;
        exampleGrid = doc.getElementsByClassName('exampleGrid')[0];
        // if (i % 9 === 8) {

        // }
    } else {
        td.innerHTML = Number(elem);
    }
});

// let exampleMatrix = [
//     [0, 1, 2, 3, 4, 5, 6, 7, 8],
//     [9, 10, 11, 12, 13, 14, 15, 16, 17],
//     [18, 19, 20, 21, 22, 23, 24, 25, 26],
//     [27, 28, 29, 30, 31, 32, 33, 34, 35],
//     [36, 37, 38, 39, 40, 41, 42, 43, 44],
//     [45, 46, 47, 48, 49, 50, 51, 52, 53],
//     [54, 55, 56, 57, 58, 59, 60, 61, 62],
//     [63, 64, 65, 66, 67, 68, 69, 70, 71],
//     [72, 73, 74, 75, 76, 77, 78, 79, 80],
// ];


// for (let i = 0; i < 81; i++) {
//     userInput+=(i % 9);
// }
// rowNum = 0; colNum = 0;
// for (let i = 0; i < userInput.length; i++) {
//     exampleMatrix[rowNum][colNum] = userInput[i];
//     if (rowNum === 8 && colNum === 8) {
//         break;
//     } 
//     // Create index for next loop
//     colNum++;
//     if (colNum > 8) {
//         colNum = 0;
//         rowNum++;
//     }
//     if (rowNum > 8) {
//     }
// }
// console.log(exampleMatrix);

// exampleMatrix.forEach((elem) => {
//     let tr = doc.createElement('tr');
//     exampleGrid.appendChild(tr);
//     elem.forEach((elem, i, arr) => {
//         let td = doc.createElement('td');
//         tr.appendChild(td);
//         if (elem == 0) {
//             td.innerHTML =
//                 `<input 
//                 type="number" 
//                 max="9" 
//                 min="1"
//                 onchange="printMe(${i})"
//             >
//             </input>`;
//             exampleGrid = doc.getElementsByClassName('exampleGrid')[0];

//         } else {
//             td.innerHTML = elem;
//         }
//         console.log('i: ', i);
//     });
// });

// Creates a shallow copy of grid and converts it to an array 
let currentInput = starterGrid.slice();
// Event handler for input field
function updateUserInput(index) {
    currentInput = currentInput.split('')
    let updatedCellVal = doc.getElementById(`cell${index}`).value;
    currentInput[index] = String(updatedCellVal);
    currentInput = currentInput.join('');
    console.log(currentInput);
    console.log(solution);
    return currentInput;
}

// Create a button that submits the form.
    // on submit, take all the values and update the user input string
    // if the string matches say "you win!"
    // if any item in the string doesn't match, return "not quite..."

const solution = '128653947973284165546179823435891672862735419719426358657948231394512786281367594';

let submitBtn = doc.getElementsByClassName('submitBtn')[0];
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(currentInput);
    console.log(solution);
    console.log(currentInput === solution);
    
    // Update "result" element on page:
    let result = doc.getElementsByClassName('result')[0];
    if (currentInput === solution) {
        for (let i = 0; i < currentInput.length; i++) {
            let cell = doc.getElementById(`cell${i}`);
            if (cell) {
                cell.style.backgroundColor = 'white';
            }
        }
        result.innerHTML = "YAY! You got it!";
    } else {
        for (let i = 0; i < currentInput.length; i++) {
            if (currentInput[i] === solution[i]) {
                let cell = doc.getElementById(`cell${i}`);
                if (cell) {
                    cell.style.backgroundColor = 'white';
                }
            } else if (currentInput[i] == 0 || currentInput[i] != solution[i]) {
                let cell = doc.getElementById(`cell${i}`);
                cell.style.backgroundColor = 'yellow';
                result.innerHTML = "mmm not quite";
            }
        }
        result.innerHTML = "mmm not quite";
    }
})
// Create index-to-coord function
// Create coord-to-index function
// TODO: 

// Then set up validation as the user enters info--if there's a duplicate in the row, column, or parent, highlight both of the duplicates

