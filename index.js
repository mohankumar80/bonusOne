var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question(chalk.bold.blueBright("Please enter your name : "));
console.log(chalk.bold.blueBright("Welcome "+userName+" !!"));

var inputYear = readlineSync.question(chalk.bold.blueBright("Please enter Year of Birth : "));

var yearOfBirth = parseInt(inputYear);

if(yearOfBirth%4 == 0 || yearOfBirth%400 == 0) {
    console.log(chalk.bold.green(yearOfBirth+" is a Leap Year\n"));
} else {
    console.log(chalk.bold.bgRed(yearOfBirth+" is not a Leap Year\n"));
}

console.log(chalk.bold.green("If your's a leap year, share it on social media with your friends!!"));