// Create const global array and max score
const CHOICES = ["rock", "paper", "scissors"];
const MAX_SCORE = 5;
const buttons = document.querySelectorAll("button");

// Initialize variables
let userScore = 0;
let computerScore = 0;

// Start game
game();

// Simulate a game
function game() {
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      let playerSelection = event.target.id;
      let computerSelection = getComputerChoice();

      let roundOutcome = playRound(playerSelection, computerSelection);

      // Tally and increment the round winner
      if (roundOutcome !== "Draw") {
        roundOutcome === "You Win" ? userScore++ : computerScore++;
      }
      console.log(roundOutcome);

      // Prevent game from proceeding
      if (userScore === MAX_SCORE || computerScore === MAX_SCORE) {
        declairWinner();

        buttons.forEach((button) => {
          button.disabled = true;
        });
      }
    });
  });
}

function getComputerChoice() {
  let roll = Math.floor(Math.random() * 3);
  return (computerChoice = CHOICES[roll]);
}

function playRound(playerSelection, computerSelection) {
  // If its the same selection, return a draw
  if (playerSelection === computerSelection) {
    return "Draw";
  }

  // Account for possible scenarios
  if (playerSelection === "rock") {
    return (result = computerSelection === "paper" ? "You Lose" : "You Win");
  } else if (playerSelection === "paper") {
    return (result = computerSelection === "scissors" ? "You Lose" : "You Win");
  } else {
    return (result = computerSelection === "rock" ? "You Lose" : "You Win");
  }
}

function declairWinner() {
  // Declare the winner depending on who reached it first
  userScore === MAX_SCORE
    ? console.log(`Player wins ${userScore} to ${computerScore}!`)
    : console.log(`Computer wins ${computerScore} to ${userScore}!`);
}
