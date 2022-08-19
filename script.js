let doc = document;
// The starting Sudoku problem:
let starterGrid = '000000000973080060000109823400090602060030019010000008600908031000510786000000504';

// Create and append the table:
let grid = doc.getElementsByClassName('grid')[0];

// Initialize tr in the outermost scope
let tr = null;
// Creates the grid
starterGrid.split('').forEach((elem, i) => {
    // Adds a new table row every 9 items 
    if (i % 9 === 0) {
        tr = doc.createElement('tr');
        grid.appendChild(tr);
    }

    let td = doc.createElement('td');
    tr.appendChild(td);
    td.classList.add(`cell${i}`, 'cells');

    // If we hit 0 in the string, add an input box
    if (elem == 0) {
        td.innerHTML =
            `<input 
            type="text" 
            id="cell${i}"
            onchange="updateUserInput(${i})"
            maxLength="1"
        >
        </input>`;
        grid = doc.getElementsByClassName('grid')[0];
    } else {
        // Otherwise, add the number in the string
        td.innerHTML = Number(elem);
    }
});

// TODO: 
// Create index-to-coord function
// Create coord-to-index function
// Then set up validation as the user enters info--if there's a duplicate in the row, column, or parent, highlight both of the duplicates

// Checks for dupes each time an input is updated
function checkDupes(index) {
    // index represents the index of the changed cell
    // reset all cells to background color white if empty:
    // check rows for duplicates after input
    // Gets the input's row, column, DOM input and td elements

    // Probably don't need this to check for dupes in the row
    // let row = Math.floor(index / 9);
    // let column = index % 9;
    // let updatedCell = doc.getElementById(`cell${index}`);
    // let updatedCellBox = doc.getElementsByClassName(`cell${index}`)[0];
    // // Gets the changed value
    // let updatedCellVal = currentInput[index];

    // Gets all cells
    let allCells = doc.getElementsByClassName(`cells`);
    // Loop through all cells and: check row, column, and parent for dupes

    // Map of all the items in the same row, mapped to an array of their indexes
    let rowMap = new Map();
    for (let i = 0; i < allCells.length; i++) {
        let genCell = doc.getElementsByClassName(`cell${i}`)[0];
        genCell.style.backgroundColor = 'white';
        // Checks row items for dupe:
        if (Math.floor(i / 9) === Math.floor(index / 9)) {
            if (rowMap.has(currentInput[i])) {
                rowMap.set(currentInput[i], [...rowMap.get(currentInput[i]), i]);
            } else {
                rowMap.set(currentInput[i], [i]);
            }
        }
    }

    for (let [key, val] of rowMap) {
        if (key == '0' || val.length == '1') {
            continue;
        }
        for (let ind of val) {
            let dupeCellRow = Math.floor(ind / 9);
            let dupeCellCol = ind % 9;
            let exactInd = (dupeCellRow * 9) + dupeCellCol;
            // Locate them on the grid and update their backgroundColor
            let dupeCell = doc.getElementsByClassName(`cell${ind}`)[0];
            dupeCell.style.backgroundColor = 'yellow';
        }
            
    }
        console.log('rowMap', rowMap);


}

    // check duplicates for duplicates after input
        // First gives t/f if dupe exists
        // then updates the backgroundcolor for the dupe
        // updates the backgroundcolor of the item
    // check parent grids for duplicates after input
        // First gives t/f if dupe exists
        // then updates the backgroundcolor for the dupe
        // updates the backgroundcolor of the item
    
    // let parentGrid = [ [], [], [], [], [], [], [], [], []];

    // // Algorithm for creating Parent Gride data structure
    // //  we want: parentGrid[0] = [0, 1, 2, 0, 1, 2, 0, 1, 2];
    // for (let i = 0; i < currentInput.length; i++) { 
    //     // Gets the exact row and column for the item (x is between 0-8, y is between 0-8)
    //     let column = i % 9; 
    //     let row = Math.floor(i / 9); 
    //     // Gets the exact coordinates 
    //     let parentGridCol = Math.floor(column / 3); 
    //     let parentGridRow = Math.floor(row / 3); 
    //     // Push to respective parent array
    //     let parentArr = (parentGridRow * 3) + (parentGridCol); 
    //     parentGrid[parentArr].push(currentInput[i]); 
    // }
// }



// Creates a shallow copy of grid and converts it to an array 
let currentInput = starterGrid.slice();
// Event handler for input field
function updateUserInput(index) {
    const inputArr = currentInput.split('')
    // on submit, take all the values and update the user input string
    let updatedCellVal = doc.getElementById(`cell${index}`).value || 0;

    inputArr[index] = String(updatedCellVal);
    currentInput = inputArr.join('');
    console.log(currentInput);
    console.log(solution);
    checkDupes(index);
    return currentInput;
}

const solution = '128653947973284165546179823435891672862735419719426358657948231394512786281367594';

// Button that submits the form.
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
        // if the string matches say "you win!"
        result.innerHTML = "YAY! You got it!";
    } else {
        for (let i = 0; i < currentInput.length; i++) {
            if (currentInput[i] === solution[i]) {
                let cell = doc.getElementById(`cell${i}`);
                if (cell) {
                    cell.style.backgroundColor = 'white';
                }
            // if any item in the string doesn't match, return "not quite..."
            } else if (currentInput[i] == 0 || currentInput[i] != solution[i]) {
                let cell = doc.getElementById(`cell${i}`);
                if (cell) {
                    cell.style.backgroundColor = 'yellow';
                }
                result.innerHTML = "mmm not quite";
            }
        }
        result.innerHTML = "mmm not quite";
    }
})

