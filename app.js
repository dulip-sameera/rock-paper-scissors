// Choices
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

// This array will be used in the validation statements and when showing the results
const choices = ["Rock", "Paper", "Scissors"];

//round results
const PLAYER_WIN = 1;
const PLAYER_LOSE = 0;
const TIED = -1;

function getPlayerSelection() {
  do {
    // Get the player input
    const selection = window
      .prompt("Enter Your Choice:(ROCK/PAPER/SCISSORS)")
      .trim()
      .toLowerCase();

    // Validates the player input
    if (selection === choices[ROCK].toLowerCase()) return ROCK;
    if (selection === choices[PAPER].toLowerCase()) return PAPER;
    if (selection === choices[SCISSORS].toLowerCase()) return SCISSORS;
  } while (true); // this will loop until one of the correct choices returns
}

function getComputerSelection() {
  // return a number between 0 and 2(included)
  return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
  // roundResult = [playerSelection, computerSelection, PLAYER_WIN/PLAYER_LOSE/TIED]
  let roundResult = [];

  roundResult.push(playerSelection);
  roundResult.push(computerSelection);

  // check for round TIED
  if (playerSelection === computerSelection) {
    roundResult.push(TIED);
    return roundResult;
  }

  // check whether the player is the winner
  if (
    (playerSelection === PAPER && computerSelection === ROCK) ||
    (playerSelection === ROCK && computerSelection === SCISSORS) ||
    (playerSelection === SCISSORS && computerSelection === PAPER)
  ) {
    roundResult.push(PLAYER_WIN);
    return roundResult;
  }

  // check whether the player is the loser
  if (
    (computerSelection === PAPER && playerSelection === ROCK) ||
    (computerSelection === ROCK && playerSelection === SCISSORS) ||
    (computerSelection === SCISSORS && playerSelection === PAPER)
  ) {
    roundResult.push(PLAYER_LOSE);
    return roundResult;
  }
}

console.log(playRound(getPlayerSelection(), getComputerSelection()));
