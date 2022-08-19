let doc = document;

// New Game Button
let reload = doc.getElementsByClassName('reloadBtn')[0];
reload.addEventListener("click", () => window.location.reload());

const solution = '128653947973284165546179823435891672862735419719426358657948231394512786281367594';

let starterGrid = '000000000973080060000109823400090602060030019010000008600908031000510786000000504';
// Available Problems:
let easyProblems = [
    [
        "000000000973080060000109823400090602060030019010000008600908031000510786000000504",
        "128653947973284165546179823435891672862735419719426358657948231394512786281367594"    
    ],
    [
        "000513096003000408060090030300600005104030907600005004090080070502000100730459000", "847513296913726458265894731379641825154238967628975314496182573582367149731459682"
    ],
    [
        "007036402004809350080004000040005006058302190296400070000100030035607200879240600",
        "917536482624819357583724961341975826758362194296481573462158739135697248879243615"
    ], 
    [
        "097060210500020003003800700000000500780000046001000000002004900400010008068070150",
        "897463215516927483243851769624738591785192346931546872152684937479315628368279154"
    ],
    [
        "070680000500009200000004570400010832700208005082040009059400000007300001000056047",
        "274685193516739284938124576465917832793268415182543769659471328847392651321856947"
    ]
]
// The starting Sudoku problem:
let randInd = Math.floor((Math.random() * 10) / 2);
let newProblem = easyProblems[randInd][0];
let newSolution = easyProblems[randInd][1];

// Create and append the table:
let grid = doc.getElementsByClassName('grid')[0];

// Initialize tr in the outermost scope
let tr = null;
// Creates the grid
newProblem.split('').forEach((elem, i) => {
    // Adds a new table row every 9 items 
    if (i % 9 === 0) {
        tr = doc.createElement('tr');
        grid.appendChild(tr);
    }

    let td = doc.createElement('td');
    tr.appendChild(td);
    td.classList.add(`cell${i}`, 'cells');

    // Styling: 
    let row = Math.floor(i / 9);
    let col = (i % 9);
    if (row % 3 === 0) {
        td.style.borderTop = '5px solid blue';
    };
    if (col % 3 === 0) {
        td.style.borderLeft = '5px solid blue';
    }
    if (col % 9 === 8) {
        td.style.borderRight = '5px solid blue';
    }
    if (row === 8) {
        td.style.borderBottom = '5px solid blue';
    }


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

// Checks for dupes each time an input is updated
function checkDupes() {
    let allCells = doc.getElementsByClassName(`cells`);
    // Map of all the items in the same row, mapped to an array of their indexes
    let rowMaps = [...Array(9).keys()].map(i => new Map());
    let colMaps = [...Array(9).keys()].map(i => new Map());
    let boxMaps = [...Array(9).keys()].map(i => new Map());
    for (let i = 0; i < allCells.length; i++) {
        // Reset all cells to background color white if empty:
        let genCell = doc.getElementsByClassName(`cell${i}`)[0];
        genCell.style.backgroundColor = 'white';
        let row = Math.floor(i / 9);
        let col = i % 9;
        let boxGridRow = Math.floor(col / 3);
        let boxGridCol = Math.floor(row / 3);
        let box = (boxGridRow * 3) + boxGridCol;

        // Build out row DS
        let rowMap = rowMaps[row];
        let colMap = colMaps[col];
        let boxMap = boxMaps[box];
        [rowMap, colMap, boxMap].forEach(elem => {
            if (elem.has(currentInput[i])) {
                elem.set(currentInput[i], [...elem.get(currentInput[i]), i]);
            } else {
                elem.set(currentInput[i], [i]);
            }
        });
    }
    // Check for dupes in every map and update background cell
    [rowMaps, colMaps, boxMaps].forEach(dupeMaps => {
        for (let dupeMap of dupeMaps) {
            for (let [key, val] of dupeMap) {
                if (key == '0' || val.length == '1') {
                    continue;
                }
                for (let ind of val) {
                    let dupeCell = doc.getElementsByClassName(`cell${ind}`)[0];
                    dupeCell.style.backgroundColor = 'yellow';
                }
            }
        }
    });
}

// Creates a shallow copy of grid and converts it to an array 
let currentInput = newProblem.slice();
// Event handler for input field
function updateUserInput(index) {
    const inputArr = currentInput.split('')
    // on submit, take all the values and update the user input string
    let updatedCellVal = doc.getElementById(`cell${index}`).value || 0;

    inputArr[index] = String(updatedCellVal);
    currentInput = inputArr.join('');
    console.log(currentInput);
    console.log(newSolution);
    checkDupes();
    return currentInput;
}

// Button that submits the form.
let submitBtn = doc.getElementsByClassName('submitBtn')[0];
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Update "result" element on page:
    let result = doc.getElementsByClassName('result')[0];
    if (currentInput === newSolution) {
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
            
            if (currentInput.includes('0')) {
                let cell = doc.getElementById(`cell${i}`);
                if (cell) {
                    cell.style.backgroundColor = 'white';
                }
                result.innerHTML = "Please fill out all boxes."
                result.style.display = "block"
                setTimeout( () => result.style.display = "none", 5000)
            // if any item in the string doesn't match, return "not quite..."
            } else if (currentInput != newSolution) {
                    let cell = doc.getElementById(`cell${i}`);
                    if (cell) {
                        cell.style.backgroundColor = 'yellow';
                    }
                result.innerHTML = "Hm not quite."
                result.style.display = "block";
                setTimeout(() => result.style.display = "none", 5000);
            }
        }
    }
})

