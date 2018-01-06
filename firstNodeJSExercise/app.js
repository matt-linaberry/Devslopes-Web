var calc = require('./calculator');
var readline = require('readline-sync');

var firstNumber = readline.question("hey bud, can i have a number? ");
var secondNumber = readline.question("hey bud, can i have another number? ");
var operations = ['+', '-', '*', '/'];
var theSelectedOp = readline.keyInSelect(operations, "hey bud, what would you like for me to do with these numbers?");
var result;
switch(theSelectedOp) {
  case 0:
    result = calc.add(firstNumber, secondNumber);
    break;
  case 1:
    result = calc.subtract(firstNumber, secondNumber);
    break;
  case 2:
    result = calc.multiply(firstNumber, secondNumber);
    break;
  case 3:
    result = calc.divide(firstNumber, secondNumber);
    break;
  default:
    result = -1
    break;
};

console.log("The result of " + firstNumber + " " + operations[theSelectedOp] + " " + secondNumber + " = " + result);
