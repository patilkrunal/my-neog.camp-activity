var readlineSync = require('readline-sync');

var numberOne = readlineSync.question("Enter first Number: ");
var numberTwo = readlineSync.question("Enter second Number: ");

function addTwoNumbers(numberOne, numberTwo){
  var answer = numberOne + numberTwo;
  return answer;
}

numberOne = parseInt(numberOne);
numberTwo = parseInt(numberTwo);

console.log("Your sum is " + addTwoNumbers(numberOne, numberTwo));