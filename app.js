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

// match win score
const MATCH_WIN_SCORE = 5;

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

function game() {
  const ROUND_RESULT = 2;

  let round = 0;
  let playerScore = 0;
  let computerScore = 0;

  do {
    let roundResult = playRound(getPlayerSelection(), getComputerSelection());

    showRoundResult(round++, roundResult);

    if (roundResult[ROUND_RESULT] === PLAYER_WIN) {
      playerScore++;
    } else if (roundResult[ROUND_RESULT] === PLAYER_LOSE) {
      computerScore++;
    }
  } while (
    playerScore !== MATCH_WIN_SCORE &&
    computerScore !== MATCH_WIN_SCORE
  ); // loop until one player reaches the match win score

  showFinalResult(playerScore, computerScore);
}

function showRoundResult(round, results) {
  const PLAYER_SELECTION = 0;
  const COMPUTER_SELECTION = 1;
  const ROUND_RESULT = 2;

  //print tied if the round is tied
  if (results[ROUND_RESULT] === TIED) {
    console.log(`Round ${round}: TIED`);
  }

  // print you win if the player wins the round
  if (results[ROUND_RESULT] === PLAYER_WIN) {
    console.log(
      `Round ${round}: You Win! ${choices[results[PLAYER_SELECTION]]} beats ${
        choices[results[COMPUTER_SELECTION]]
      }`
    );
  }

  //print you lose if the player lose the round
  if (results[ROUND_RESULT] === PLAYER_LOSE) {
    console.log(
      `Round ${round}: You Lose! ${
        choices[results[COMPUTER_SELECTION]]
      } beats ${choices[results[PLAYER_SELECTION]]}`
    );
  }
}

function showFinalResult(playerScore, computerScore) {
  if (playerScore === MATCH_WIN_SCORE) {
    console.log("YOU WIN!");
  } else if (computerScore === MATCH_WIN_SCORE) {
    console.log("YOU LOSE!");
  }

  console.log(`Your Score: ${playerScore}`);
  console.log(`Computer's Score: ${computerScore}`);
}

console.log(game());
