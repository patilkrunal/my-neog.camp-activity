var readlineSync = require('readline-sync');

var username = readlineSync.question("Enter your name: ");

for(var i=0; i<5; i++){
  console.log("i: " + i + " " + username);
}
