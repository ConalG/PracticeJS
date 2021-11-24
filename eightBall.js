//Declaring Varibales
let userName = "Conal";
let userQuestion = "Should I study?";
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
// Ternary expression
userName ? console.log(`Hello, ${userName}`) : console.log("Hello!");
// Loging question
console.log(`${userName} asked "${userQuestion}"`);
// Switch Statement
switch(randomNumber){
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidely so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "cannot predict now";
    break;
  case 4:
    eightBall = "do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

//Log answer
console.log(eightBall);