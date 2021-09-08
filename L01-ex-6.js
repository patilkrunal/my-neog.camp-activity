var readlineSync = require('readline-sync');

var city = readlineSync.question("Enter your city: ");

var score = 0;

if(city === "Nashik"){
  score++;
} else {
  score--;
}


console.log("Your score is " + score);