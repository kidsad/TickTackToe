const { Given, When, Then, And } = require("cucumber");
const assert = require('assert');

const tickTackToe = require('../tickTackToe');
let numberPlayer = 1;
let currentIndexLine = 1;
let currentIndexColumn = 1;
let winningPlayer = -1;
let selectionResult = 0;

let currentPlaingField = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  let answer = 0;

  function convertPlaingFieldToStr(plaingField) {
    let result = "";
    for ( let i = 0; i < plaingField.length; i++ ) {  
        for ( let j = 0; j < plaingField[i].length; j++ ) {
            result = result + plaingField[i][j].toString(10);
      } 
      if (i < plaingField.length - 1) {
        result = result + "|";
      }  
    }	
    return result;

  }

  function convertStrToPlaingField(str) {
    let plaingField = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

    let i = 0;  

    for (i = 0; i <= 2; i ++) {
      plaingField[0][i] = Number(str[i]);
      plaingField[1][i] = Number(str[i+4]);
      plaingField[2][i] = Number(str[i+8]);

    }
    return plaingField; 
  }



         Given('поле {string}', function (input) {
          currentPlaingField = convertStrToPlaingField(input);
          
         });

  
         Given('ходит игрок {int}', function (input) {
          numberPlayer = input;
          
         });

         Given('игрок ходит в клетку {int}, {int}', function (input1, input2) {
          currentIndexLine = input1;
          currentIndexColumn = input2;
          selectionResult = tickTackToe.selectionCell(currentIndexLine, currentIndexColumn, numberPlayer,currentPlaingField);
          
         });

  
         Then('поле становится {string}', function (string) {           
           assert.equal(convertPlaingFieldToStr(currentPlaingField), string);
         });
         
         Then('победил игрок {int}', function (input) {
          assert.equal(tickTackToe.checkWinPlayaer(currentPlaingField), input);
          });

          Given('пустое поле', function () {
            currentPlaingField = [
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
            ];
          });


          Then('возвращается ошибка', function () {
            assert.equal(selectionResult, false);           
          });
   