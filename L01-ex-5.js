var readlineSync = require('readline-sync');

var age = readlineSync.question("Enter your age: ");

if(age > 25){
  console.log("Age greater than 25.");
} else {
  console.log("Age is not greater than 25.");
}