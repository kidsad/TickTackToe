
function chechValidAddrCell (index, plaingField) {
 if (index >= 1 &&  index <= plaingField.length) {
   return true; 
 }	 
 return false;
}


function checkFreeCell (plaingField) {
   for ( let i = 0; i < plaingField.length; i++ ) {  
	  for ( let j = 0; j < plaingField[i].length; j++ ) {
        if (plaingField[i][j] == 0) {
		  return true;	
		}		
    }  
  }	
  return false;
}



function clearPlaingField (plaingField) { 
  for ( let i = 0; i < plaingField.length; i++ ) {  
	  for ( let j = 0; j < plaingField[i].length; j++ ) {
        plaingField[i][j] = 0;
    }  
  }	
}

function outputPlaingField (plaingField) { 
  for ( let i = 0; i < plaingField.length; i++ ) {  
	console.log(plaingField[i])
  }	
}


function checkWinPlayaer (plaingField) {
  let result = -1;
  let i = 0;
  let j = 0;  
  // проверка выигрыша по горизонтали
  for (i = 0; i < plaingField.length; i++ ) {  
    for (j = 0; j < plaingField[i].length - 1; j++ ) { 
      if ((plaingField[i][j] != plaingField[i][j+1]) || (plaingField[i][j] == 0)) {                
         break;         
      }    
    }
    if (j == plaingField[i].length - 1) {     
      result = plaingField[i][j];  
      return result;
    }
  } 
  
  // проверка выигрыша по вертикали
  for (j = 0; j < plaingField[0].length; j++ ) {  
    for (i = 0; i < plaingField.length - 1; i++ ) { 
      if ((plaingField[i][j] != plaingField[i+1][j]) || (plaingField[i][j] == 0)) {                
         break;         
      }    
    }
    if (i == plaingField.length - 1) {      
      result = plaingField[i][j];  
      return result;
    }
  } 

  // проверка выигрыша по диагонали слева направа и сверху вниз
  for (i = 0; i < plaingField.length - 1; i++ ) {
    if ((plaingField[i][i] != plaingField[i+1][i+1]) || (plaingField[i][i] == 0)) {                
      break;         
   }
  } 
   if (i == plaingField.length - 1) {    
    result = plaingField[i][i];
    return result;
  }  

  
  // проверка выигрыша по диагонали справа налево и сверху вниз
  for (i = 0; i < plaingField.length - 1; i++ ) {
    j = plaingField.length - 1 - i;
    if ((plaingField[i][j] != plaingField[i+1][j-1]) || (plaingField[i][j] == 0)) {                
      break;         
   }
  } 
   if (i == plaingField.length - 1) {    
    result = plaingField[i][0];  
    return result;
  } 
  
  // проверка на ничью
  if (!checkFreeCell(plaingField)) {
	result = 0;
	return result;  
  }
  
  
  return result;
  
}


function checkCell (indexLine, indexColumn, plaingField) {
  if (plaingField[indexLine - 1][indexColumn - 1] == 0) {
	  return true;
  } else {
	  return false;
  }
}
  

function selectionCell (indexLine, indexColumn, playerNumber, plaingField) {
  if (checkCell (indexLine, indexColumn, plaingField)) {
	plaingField[indexLine - 1][indexColumn - 1] = playerNumber;
	return true;
  } else {
	  return false;
  }

}

module.exports = { 
  chechValidAddrCell: chechValidAddrCell,
  checkFreeCell: checkFreeCell,
  outputPlaingField: outputPlaingField,
  checkWinPlayaer: checkWinPlayaer,
  selectionCell: selectionCell,
  checkWinPlayaer: checkWinPlayaer,
  clearPlaingField: clearPlaingField
};