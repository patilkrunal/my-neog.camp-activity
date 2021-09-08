var readlineSync = require('readline-sync');

var grocceryList = [];

for(var i=1; i<=5; i++){
  var item = readlineSync.question("Enter " + i + " th item: ");
  grocceryList[i-1] = item;
}
