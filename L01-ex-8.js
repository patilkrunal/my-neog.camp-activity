var readlineSync = require('readline-sync');

var score = 0;

function Quiz(question, correctAnswer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === correctAnswer){
    console.log("Your answer is correct.");
    score++;
  } else {
    console.log("Your answer is wrong.");
    score--;
  }
}

var question = "Which language are you working on? ";

Quiz(question, "Javascript");

console.log("Your score is " + score);

