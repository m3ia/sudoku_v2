# sudoku_v2

Notes: 
// i created a grid of all the indices and looked for a mathematical way to push each item to a data structure. ended up with a triple-nested loop
// created large coordinates to represent parents, then sought a mathematical way to see where an index would fall into. on the way, i figured out a way to identify the exact row and column of an index: to get the column, use % 9 since the entire first column is a multiple of 9. to get the row, do Math.floor(index/9) since i know every 27 numbers will fall between a parent row
// the next problem was figuring out how to map these exact coordinates to the larger parent grid where the min is 0 and the max is 2 on both the y and x axes. all i wanted was to push the respective item to a parentGrid array where the index matches up with the parent. Then I asked for help lol: let parentArr = (parentGridRow * 3) + (parentGridCol)./
// Apparently this line allows us to flatten the parent grid out, and tells us which parent box the item lives in.
// parentGridRow - mult by 3 bc if we flatten the grid, it'd be in box index 3. 
// if you flatten the grid, and see the column numbers as a "divisor" and the row as the "remainder" 

`let parentGrid = [ [], [], [], [], [], [], [], [], []];

Algorithm for creating Parent Gride data structure
 we want: parentGrid[0] = [0, 1, 2, 0, 1, 2, 0, 1, 2];
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
}`