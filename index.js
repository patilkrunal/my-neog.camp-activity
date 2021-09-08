var readlineSync = require('readline-sync');

var username = readlineSync.question('Enter your name: ');

console.log('Hi ' + username + '. This is a short quiz.');