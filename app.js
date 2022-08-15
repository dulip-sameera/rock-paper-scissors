// Choices
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const choices = ["Rock", "Paper", "Scissors"];

function getPlayerSelection() {
  do {
    // Get the player input
    const selection = window
      .prompt("Enter Your Choice:(ROCK/PAPER/SCISSORS)")
      .trim()
      .toLowerCase();

    // Validates the player input
    if (selection === "rock") return ROCK;
    if (selection === "paper") return PAPER;
    if (selection === "scissors") return SCISSORS;
  } while (true); // this will loop until one of the correct choices returns
}

function getComputerSelection() {
  // return a number between 0 and 2(included)
  return Math.floor(Math.random() * 3);
}

// console.log(getComputerSelection());
