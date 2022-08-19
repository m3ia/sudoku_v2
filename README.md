# sudoku

## The Game: 
For Techtonica, we had 1 week to build a game of our choice with just HTML, CSS, and JavaScript, so I chose a game I'm passionate about: a [Sudoku](https://en.wikipedia.org/wiki/Sudoku) puzzle.

## Lessons Learned:
- Completing larger applications with just HTML, CSS, and JS can take hours--so you must anticipate problems you wouldn't anticipate would exist.
- Modulo operators are very handy for converting grid indices to (x,y)/(column, row) coordinates, and back.
- The way I approached finding the "parent" boxes for an item involved what's called "flattening" a grid
- In converting coordinates to indices, rows can be thought of as quotients and columns as remainders

## Hardest Parts:
- Figuring out how to search for duplicates
- Updating styling based on duplicates in boxes
- Dynamically updating the styles without reloading the page

## Most rewarding:
- Finishing a basic game in hours
- Finally getting the dupe-search algorithm right

<img width="608" alt="Screen Shot 2022-08-18 at 10 41 05 PM" src="https://user-images.githubusercontent.com/38749469/185551140-adbfbca3-5624-496a-a0a0-56c4fc62165f.png">
