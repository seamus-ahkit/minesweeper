document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
    cells: [
      // First Row of cells
      {
        row: 0,
        col: 0,
        isMine: true,
        hidden: true,
        isMarked: true 
      }, 
      { 
        row: 0,
        col: 1,
        isMine: false,
        hidden: true,
        isMarked: true 
      }, 
      {
        row: 0,
        col: 2,
        isMine: false,
        hidden: true,
        isMarked: true 
      }, 
      {
        row: 0,
        col: 3,
        isMine: false,
        hidden: true,
        isMarked: true 
      },
      // Second Row of cells
      {
        row: 1,
        col: 0,
        isMine: false,
        hidden: true,
        isMarked: true 
      }, 
      { 
        row: 1,
        col: 1,
        isMine: true,
        hidden: true,
        isMarked: true 
      }, 
      {
        row: 1,
        col: 2,
        isMine: false,
        hidden: true,
        isMarked: true 
      }, 
      {
        row: 1,
        col: 3,
        isMine: true,
        hidden: true,
        isMarked: true 
      },
      // Third Row of cells
      {
        row: 2,
        col: 0,
        isMine: false,
        hidden: true,
        isMarked: true 
      }, 
      { 
        row: 2,
        col: 1,
        isMine: false,
        hidden: true,
        isMarked: true 
      }, 
      {
        row: 2,
        col: 2,
        isMine: false,
        hidden: true,
        isMarked: true 
      }, 
      {
        row: 2,
        col: 3,
        isMine: true,
        hidden: true,
        isMarked: true 
      },
      // Fourth Row of cells
      {
        row: 3,
        col: 0,
        isMine: true,
        hidden: true,
        isMarked: true 
      }, 
      { 
        row: 3,
        col: 1,
        isMine: false,
        hidden: true,
        isMarked: true 
      }, 
      {
        row: 3,
        col: 2,
        isMine: true,
        hidden: true,
        isMarked: true 
      }, 
      {
        row: 3,
        col: 3,
        isMine: false,
        hidden: true,
        isMarked: true 
      }
    ]
}


function startGame () {
for (i = 0; i < board.cells.length; i++) {                               
  board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])       
}
  lib.initBoard()
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)

}


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin() {
  for (var i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine === true && board.cells[i].isMarked === true) {
      return;
    } else
      if (board.cells[i].isMine === false && board.cells[i].hidden === true) {
        return;
      }
  }
  lib.displayMessage('Chicken Dinner!');
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);       //identifies the properties we are trying to access with our function  
  var count = 0;                                                       //set a variable to apply the mine count to
  for (var i = 0; i < surrounding.length; i++) {                       //loop iterates through the surrounding cells 
    if (surrounding[i].isMine === true) {                              
      count++                                                          //if isMine is true for any surrounding cell, the count is increased by 1
  }
}
  return count;                                                        //count is returned
}