// Create const global array and max score
const CHOICES = ["rock", "paper", "scissors"];
const MAX_SCORE = 5;

// Initialize variables
let userScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const container = document.querySelector("#container");

const scores = document.createElement("p");
container.appendChild(scores);

const results = document.createElement("p");
container.appendChild(results);

// Start game
game();

// Simulate a game
function game() {
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      let userSelection = event.target.id;
      let computerSelection = getComputerChoice();

      let roundOutcome = playRound(userSelection, computerSelection);

      // Tally and increment the round winner
      if (!roundOutcome.includes(`Draw`)) {
        roundOutcome.includes(`Win`) ? userScore++ : computerScore++;
      }

      scores.textContent = `User score: ${userScore}, Computer score: ${computerScore}`;
      results.textContent = roundOutcome;

      // Prevent game from proceeding
      if (userScore === MAX_SCORE || computerScore === MAX_SCORE) {
        userScore === MAX_SCORE
          ? (scores.textContent = `Player wins ${userScore} to ${computerScore}!`)
          : (scores.textContent = `Computer wins ${computerScore} to ${userScore}!`);

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

function playRound(userSelection, computerSelection) {
  // If its the same selection, return a draw
  if (userSelection === computerSelection) {
    return `Draw! You both have chosen ${userSelection}.`;
  }

  // Account for possible scenarios
  if (userSelection === "rock") {
    return (result =
      computerSelection === "paper"
        ? `You Lose! ${computerSelection} beats ${userSelection}.`
        : `You Win! ${userSelection} beats ${computerSelection}.`);
  } else if (userSelection === "paper") {
    return (result =
      computerSelection === "scissors"
        ? `You Lose! ${computerSelection} beats ${userSelection}.`
        : `You Win! ${userSelection} beats ${computerSelection}.`);
  } else {
    return (result =
      computerSelection === "rock"
        ? `You Lose! ${computerSelection} beats ${userSelection}.`
        : `You Win! ${userSelection} beats ${computerSelection}.`);
  }
}
