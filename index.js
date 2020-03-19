const readlineSync = require('readline-sync');
const tickTackToe = require('./tickTackToe');

let ans = 'n';

let winningPlayer = -1;
let currentIndexLine = 1;
let currentIndexColumn = 1;
let currentPlayer = 1;

let currentPlaingField = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];


do {
    console.log("play a game");
    tickTackToe.clearPlaingField (currentPlaingField);
    tickTackToe.outputPlaingField (currentPlaingField);
    winningPlayer = -1;
    currentPlayer = 1;
    
    while (winningPlayer == -1 ) {
      
      console.log("player ", currentPlayer, " move"); 
      
      currentIndexLine = readlineSync.questionInt('enter line number (1-3)');
      while (!tickTackToe.chechValidAddrCell (currentIndexLine, currentPlaingField)) {
        console.log("entered value error");
        currentIndexLine = readlineSync.questionInt('enter line number (1-3)');		  
      } 
      
      currentIndexColumn = readlineSync.questionInt('enter column number (1-3) ');
      while (!tickTackToe.chechValidAddrCell (currentIndexColumn, currentPlaingField)) {
        console.log("entered value error");
        currentIndexColumn = readlineSync.questionInt('enter column number (1-3) ');		  
      } 
      
      while (!tickTackToe.selectionCell (currentIndexLine, currentIndexColumn, currentPlayer, currentPlaingField)) {
        console.log("the cell is busy. choose another cell");
        currentIndexLine = readlineSync.questionInt('enter line number ');
        currentIndexColumn = readlineSync.questionInt('enter column number ');
      } 
      
      if (currentPlayer == 1) {
        currentPlayer = 2;	
      } else {
        currentPlayer = 1;	
      }		
      
      tickTackToe.outputPlaingField (currentPlaingField);
      
      winningPlayer = tickTackToe.checkWinPlayaer(currentPlaingField);
      
    }
    
    if (winningPlayer > 0) {
       console.log("player won", winningPlayer); 
    } else console.log("draw");
    
    
    ans = readlineSync.question('Do you want to play again? (y/n)? ');
} while (ans == 'y');