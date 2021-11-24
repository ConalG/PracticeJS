//Function to get users input
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === "rock" || userInput === "paper" || userInput === "scissors"){
      return userInput;
    }
    else{
      console.log("Invalid selection");
    }
  }
  //Test Function
  
  /*console.log(getUserChoice("rock"));
  console.log(getUserChoice("Test"));
  */
  
  //Function to get computers Choice
  const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 2);
    switch (randomNum){
      case 0:
      return "rock";
      case 1:
      return "paper";
      case 2:
      return "scissors";
    }
  }
  
  // Test Computer Function
  //console.log(getComputerChoice());
  
  //Function to determine a winner
  const determineWinner = (userChoice,computerChoice) =>{
    //Draw
    if(userChoice === computerChoice){
      return "The game was a draw";
    }
    //Checks when user is rock
    if(userChoice === "rock"){
        if(computerChoice === "paper"){
          return "The computer won!";
        }else{
          return "You won!";
        }
    }
    //Checks when user is paper
    if(userChoice === "paper"){
      if(computerChoice === "scissors"){
        return "The computer won!";
      }else{
        return "You won!";
      }
    }
    //Checks when user is scissors
    if(userChoice === "scissors"){
      if(computerChoice === "rock"){
        return "The computer won!";
      }else{
        return "You won!";
      }
    }
  }
  //Testing winner function
  //console.log(determineWinner("rock","paper"));
  //console.log(determineWinner("paper","rock"));
  //console.log(determineWinner("rock","rock"));
  
  const playGame = uC =>{
    let userChoice = getUserChoice(uC);
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame("rock");
