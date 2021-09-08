var readlineSync = require('readline-sync');

var questionOne = {
  question: "National bird of india? ",
  answer: "Peacock"
}

var questionTwo = {
  question: "National game of India? ",
  answer: "Hockey"
}

var questionList = [questionOne, questionTwo];

var highScore = 0;
function Quiz(questionList, score){
  for(var i=0; i<questionList.length; i++){
    userAnswer = readlineSync.question(questionList[i].question);

    if(userAnswer === questionList[i].answer){
      score++;
      console.log("Correct answer");
    } else {
      score--;
      console.log("Wrong answer");
    }
    console.log("Your score is " + score);
  }
  return score;
}

var finalScore = Quiz(questionList, 0);

console.log("Quiz over!");
console.log("Final score is " + finalScore);

if(highscore < finalScore){
  highscore = finalScore;
  console.log("Congratulations! This is your highscore.");
  console.log("lets celebrate by taking a screenshot.");
} 
