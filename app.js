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

// Round Details
let round = 0;
let playerScore = 0;
let computerScore = 0;

const startStage = document.getElementById("start");
const startBtn = document.getElementById("start__btn");

const playStage = document.getElementById("play");
const roundTitle = document.getElementById("round__title");
const instruction = document.getElementById("instruction");

const roundResultAlert = document.getElementById("round__result");
const roundResultTitle = document.getElementById("round__result__title");
const roundResultStatement = document.getElementById(
  "round__result__statement"
);
const nextRoundBtn = document.getElementById("next__round");

const playerScoreStatement = document.getElementById("player__score");
const computerScoreStatement = document.getElementById("computer__score");

const endStage = document.getElementById("end");
const matchResult = document.getElementById("match__result");
const playAgainBtn = document.getElementById("play__again__btn");

startBtn.addEventListener("click", () => {
  //hide the start stage
  startStage.classList.add("hide");
  //show the play stage
  playStage.classList.remove("hide");
});

showRoundTitle(++round);

showInstruction();

window.addEventListener("click", (e) => {
  //index of the result in the roundResult array
  const ROUND_RESULT = 2;
  //element that user clicked
  const selectedElement = e.target;

  if (selectedElement.classList.contains("p__rock")) {
    // show rock selected in the UI
    selectElement("p__rock");
    let roundResult = playRound(ROCK, getComputerSelection());

    //update the overall score
    if (roundResult[ROUND_RESULT] === PLAYER_WIN) {
      playerScore++;
    } else if (roundResult[ROUND_RESULT] === PLAYER_LOSE) {
      computerScore++;
    }

    if (playerScore !== MATCH_WIN_SCORE && computerScore !== MATCH_WIN_SCORE) {
      roundResultAlert.classList.remove("hide");
      roundResultTitle.textContent = `Round ${round}`;
      roundResultStatement.textContent = getRoundResultStatement(roundResult);
    } else {
      roundResultAlert.classList.remove("hide");
      roundResultTitle.textContent = `Round ${round}`;
      roundResultStatement.textContent = getRoundResultStatement(roundResult);
      nextRoundBtn.textContent = "See Results";
      playStage.classList.add("hide");
      endStage.classList.remove("hide");

      if (playerScore === MATCH_WIN_SCORE) {
        matchResult.textContent = `You Win!(${playerScore}:${computerScore})`;
      } else if (computerScore === MATCH_WIN_SCORE) {
        matchResult.textContent = `You Lose(${playerScore}:${computerScore})`;
      }
    }

    console.log(playerScore, computerScore);
  }

  if (selectedElement.classList.contains("p__paper")) {
    // show paper selected in the UI
    selectElement("p__paper");
    let roundResult = playRound(PAPER, getComputerSelection());

    //update the overall score
    if (roundResult[ROUND_RESULT] === PLAYER_WIN) {
      playerScore++;
    } else if (roundResult[ROUND_RESULT] === PLAYER_LOSE) {
      computerScore++;
    }

    if (playerScore !== MATCH_WIN_SCORE && computerScore !== MATCH_WIN_SCORE) {
      roundResultAlert.classList.remove("hide");
      roundResultTitle.textContent = `Round ${round}`;
      roundResultStatement.textContent = getRoundResultStatement(roundResult);
    } else {
      roundResultAlert.classList.remove("hide");
      roundResultTitle.textContent = `Round ${round}`;
      roundResultStatement.textContent = getRoundResultStatement(roundResult);
      nextRoundBtn.textContent = "See Results";
      playStage.classList.add("hide");
      endStage.classList.remove("hide");

      if (playerScore === MATCH_WIN_SCORE) {
        matchResult.textContent = `You Win!(${playerScore}:${computerScore})`;
      } else if (computerScore === MATCH_WIN_SCORE) {
        matchResult.textContent = `You Lose(${playerScore}:${computerScore})`;
      }
    }

    console.log(playerScore, computerScore);
  }

  if (selectedElement.classList.contains("p__scissors")) {
    // show scissors selected in the UI
    selectElement("p__scissors");
    let roundResult = playRound(SCISSORS, getComputerSelection());

    //update the overall score
    if (roundResult[ROUND_RESULT] === PLAYER_WIN) {
      playerScore++;
    } else if (roundResult[ROUND_RESULT] === PLAYER_LOSE) {
      computerScore++;
    }

    if (playerScore !== MATCH_WIN_SCORE && computerScore !== MATCH_WIN_SCORE) {
      roundResultAlert.classList.remove("hide");
      roundResultTitle.textContent = `Round ${round}`;
      roundResultStatement.textContent = getRoundResultStatement(roundResult);
    } else {
      roundResultAlert.classList.remove("hide");
      roundResultTitle.textContent = `Round ${round}`;
      roundResultStatement.textContent = getRoundResultStatement(roundResult);
      nextRoundBtn.textContent = "See Results";
      playStage.classList.add("hide");
      endStage.classList.remove("hide");

      if (playerScore === MATCH_WIN_SCORE) {
        matchResult.textContent = `You Win!(${playerScore}:${computerScore})`;
      } else if (computerScore === MATCH_WIN_SCORE) {
        matchResult.textContent = `You Lose(${playerScore}:${computerScore})`;
      }
    }

    console.log(playerScore, computerScore);
  }
  playerScoreStatement.textContent = `Score - ${playerScore}`;
  computerScoreStatement.textContent = `Score - ${computerScore}`;
});

nextRoundBtn.addEventListener("click", (e) => {
  roundResultAlert.classList.add("hide");
  removeSelected();
  showRoundTitle(++round);
});

playAgainBtn.addEventListener("click", () => {
  round = 0;
  playerScore = 0;
  computerScore = 0;
  endStage.classList.add("hide");
  startStage.classList.remove("hide");
  showRoundTitle(++round);
  nextRoundBtn.textContent = "Next Round";
});

function removeSelected() {
  const selectedList = document.getElementsByClassName("selected__box");

  if (selectedList[0].classList.contains("p__rock")) {
    const selectedElementList = document.getElementsByClassName("p__rock");
    for (let i = 0; i < selectedElementList.length; i++) {
      selectedElementList[0].classList.remove("selected__box");
      selectedElementList[1].classList.remove("selected__img");
      selectedElementList[2].classList.remove("selected__caption");
    }
  } else if (selectedList[0].classList.contains("p__paper")) {
    const selectedElementList = document.getElementsByClassName("p__paper");
    for (let i = 0; i < selectedElementList.length; i++) {
      selectedElementList[0].classList.remove("selected__box");
      selectedElementList[1].classList.remove("selected__img");
      selectedElementList[2].classList.remove("selected__caption");
    }
  } else if (selectedList[0].classList.contains("p__scissors")) {
    const selectedElementList = document.getElementsByClassName("p__scissors");
    for (let i = 0; i < selectedElementList.length; i++) {
      selectedElementList[0].classList.remove("selected__box");
      selectedElementList[1].classList.remove("selected__img");
      selectedElementList[2].classList.remove("selected__caption");
    }
  }

  if (selectedList[0].classList.contains("c__rock")) {
    const selectedElementList = document.getElementsByClassName("c__rock");
    for (let i = 0; i < selectedElementList.length; i++) {
      selectedElementList[0].classList.remove("selected__box");
      selectedElementList[1].classList.remove("selected__img");
      selectedElementList[2].classList.remove("selected__caption");
    }
  } else if (selectedList[0].classList.contains("c__paper")) {
    const selectedElementList = document.getElementsByClassName("c__paper");
    for (let i = 0; i < selectedElementList.length; i++) {
      selectedElementList[0].classList.remove("selected__box");
      selectedElementList[1].classList.remove("selected__img");
      selectedElementList[2].classList.remove("selected__caption");
    }
  } else if (selectedList[0].classList.contains("c__scissors")) {
    const selectedElementList = document.getElementsByClassName("c__scissors");
    for (let i = 0; i < selectedElementList.length; i++) {
      selectedElementList[0].classList.remove("selected__box");
      selectedElementList[1].classList.remove("selected__img");
      selectedElementList[2].classList.remove("selected__caption");
    }
  }
}

function getComputerSelection() {
  // return a number between 0 and 2(included)
  let comSelection = Math.floor(Math.random() * 3);

  if (comSelection === ROCK) {
    selectElement("c__rock");
  }

  if (comSelection === PAPER) {
    selectElement("c__paper");
  }

  if (comSelection === SCISSORS) {
    selectElement("c__scissors");
  }

  return comSelection;
}

function selectElement(identifier) {
  const elementList = document.getElementsByClassName(identifier);
  elementList[0].classList.add("selected__box");
  elementList[1].classList.add("selected__img");
  elementList[2].classList.add("selected__caption");
}

function showRoundTitle(round) {
  roundTitle.textContent = `Round ${round}`;
}

function showInstruction() {
  instruction.textContent = `First to reach ${MATCH_WIN_SCORE} wins the match`;
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

function getRoundResultStatement(results) {
  const PLAYER_SELECTION = 0;
  const COMPUTER_SELECTION = 1;
  const ROUND_RESULT = 2;

  //print tied if the round is tied
  if (results[ROUND_RESULT] === TIED) {
    return `TIED`;
  }

  // print you win if the player wins the round
  if (results[ROUND_RESULT] === PLAYER_WIN) {
    return `You Win! ${choices[results[PLAYER_SELECTION]]} beats ${
      choices[results[COMPUTER_SELECTION]]
    }`;
  }

  //print you lose if the player lose the round
  if (results[ROUND_RESULT] === PLAYER_LOSE) {
    return `You Lose! ${choices[results[COMPUTER_SELECTION]]} beats ${
      choices[results[PLAYER_SELECTION]]
    }`;
  }
}
// function getPlayerSelection() {
//   do {
//     // Get the player input
//     const selection = window
//       .prompt("Enter Your Choice:(ROCK/PAPER/SCISSORS)")
//       .trim()
//       .toLowerCase();

//     // Validates the player input
//     if (selection === choices[ROCK].toLowerCase()) return ROCK;
//     if (selection === choices[PAPER].toLowerCase()) return PAPER;
//     if (selection === choices[SCISSORS].toLowerCase()) return SCISSORS;
//   } while (true); // this will loop until one of the correct choices returns
// }

// function getComputerSelection() {
//   // return a number between 0 and 2(included)
//   let comSelection = Math.floor(Math.random() * 3);

//   if (comSelection === ROCK) {
//     const rockElements = document.getElementsByClassName("c__rock");
//     rockElements[0].classList.add("selected__box");
//     rockElements[1].classList.add("selected__img");
//     rockElements[2].classList.add("selected__caption");
//   }

//   return comSelection;
// }

// function playRound(playerSelection, computerSelection) {
//   // roundResult = [playerSelection, computerSelection, PLAYER_WIN/PLAYER_LOSE/TIED]
//   let roundResult = [];

//   roundResult.push(playerSelection);
//   roundResult.push(computerSelection);

//   // check for round TIED
//   if (playerSelection === computerSelection) {
//     roundResult.push(TIED);
//     return roundResult;
//   }

//   // check whether the player is the winner
//   if (
//     (playerSelection === PAPER && computerSelection === ROCK) ||
//     (playerSelection === ROCK && computerSelection === SCISSORS) ||
//     (playerSelection === SCISSORS && computerSelection === PAPER)
//   ) {
//     roundResult.push(PLAYER_WIN);
//     return roundResult;
//   }

//   // check whether the player is the loser
//   if (
//     (computerSelection === PAPER && playerSelection === ROCK) ||
//     (computerSelection === ROCK && playerSelection === SCISSORS) ||
//     (computerSelection === SCISSORS && playerSelection === PAPER)
//   ) {
//     roundResult.push(PLAYER_LOSE);
//     return roundResult;
//   }
// }

// function game() {
//   const ROUND_RESULT = 2;

//   let round = 0;
//   let playerScore = 0;
//   let computerScore = 0;

//   do {
//     let roundResult = playRound(getPlayerSelection(), getComputerSelection());

//     showRoundResult(round++, roundResult);

//     if (roundResult[ROUND_RESULT] === PLAYER_WIN) {
//       playerScore++;
//     } else if (roundResult[ROUND_RESULT] === PLAYER_LOSE) {
//       computerScore++;
//     }
//   } while (
//     playerScore !== MATCH_WIN_SCORE &&
//     computerScore !== MATCH_WIN_SCORE
//   ); // loop until one player reaches the match win score

//   showFinalResult(playerScore, computerScore);
// }

// function showRoundResult(round, results) {
//   const PLAYER_SELECTION = 0;
//   const COMPUTER_SELECTION = 1;
//   const ROUND_RESULT = 2;

//   //print tied if the round is tied
//   if (results[ROUND_RESULT] === TIED) {
//     console.log(`Round ${round}: TIED`);
//   }

//   // print you win if the player wins the round
//   if (results[ROUND_RESULT] === PLAYER_WIN) {
//     console.log(
//       `Round ${round}: You Win! ${choices[results[PLAYER_SELECTION]]} beats ${
//         choices[results[COMPUTER_SELECTION]]
//       }`
//     );
//   }

//   //print you lose if the player lose the round
//   if (results[ROUND_RESULT] === PLAYER_LOSE) {
//     console.log(
//       `Round ${round}: You Lose! ${
//         choices[results[COMPUTER_SELECTION]]
//       } beats ${choices[results[PLAYER_SELECTION]]}`
//     );
//   }
// }

// function showFinalResult(playerScore, computerScore) {
//   if (playerScore === MATCH_WIN_SCORE) {
//     console.log("YOU WIN!");
//   } else if (computerScore === MATCH_WIN_SCORE) {
//     console.log("YOU LOSE!");
//   }

//   console.log(`Your Score: ${playerScore}`);
//   console.log(`Computer's Score: ${computerScore}`);
// }
