# sudoku

## The Game: 
For Techtonica, we had 1 week to build a game of our choice with just HTML, CSS, and JavaScript, so I chose a game I'm passionate about: a [Sudoku](https://en.wikipedia.org/wiki/Sudoku) puzzle.

This app has 5 problems, so far--which you can explore by clicking "New Game". If you want to test the game out, you can view the solution in the console after inputting at least 1 item.

My bit of personal history with this game: it made me excited about programming again, after a few months of taking a break. The name "Sudoku_v2" is named after a failed first attempt, when I had been out of practice for so long. 

[Try it](https://github.com/m3ia/sudoku_v2)!
## Lessons Learned:
- To convert coordinates to indices, rows can be thought of as quotients and columns as remainders
- One great way to approach identifying "parent" boxes for an item is by flattening the grid
- Modulo operators are very handy for converting grid indices to (x,y)/(column, row) coordinates, and back
- Completing larger applications with just HTML, CSS, and JS can take hours--so you must anticipate maybe time x3 on problems don't yet know about


## Hardest Parts:
- Figuring out how to search for duplicates
- Updating styling based on duplicates in boxes
- Dynamically updating the styles without reloading the page

## Most rewarding:
- Finishing a basic game in hours
- Finally getting the dupe-search algorithm right

<img width="608" alt="Screen Shot 2022-08-18 at 10 41 05 PM" src="https://user-images.githubusercontent.com/38749469/185551140-adbfbca3-5624-496a-a0a0-56c4fc62165f.png">
