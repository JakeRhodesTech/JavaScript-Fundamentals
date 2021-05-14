/* This program models rock, paper, scissors to demonstrate 
functions and control flow. The code is complete and working 
but I will need to comment and tidy it up at a later point. */

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput; 
  } else {
    console.log('Error!');
};
}

// console.log(getUserChoice('rock'));
// console.log(getUserChoice('bread'));

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1: 
      return 'paper';
    case 2: 
      return 'scissors';
  }
}

// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());

function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice){
    return 'The game is a tie'
  } 
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins'
    } else if (computerChoice === 'scissors') {
      return 'User wins'
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins'
    } else if (computerChoice === 'rock') {
      return 'Player wins'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins'
    } else if (computerChoice === 'paper') {
      return 'User wins'
    }
  }
  if (userChoice === 'bomb') {
    return 'User wins, but at what cost?'
  }
}

// console.log(determineWinner('paper', 'scissors'));

function playGame() {
  let userChoice = getUserChoice('bomb')
  let computerChoice = getComputerChoice()
  console.log('User selected: ' + userChoice)
  console.log('Computer selected: ' + computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}

playGame()