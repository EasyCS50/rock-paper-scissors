// Create const global array and max score
const CHOICES = ["rock", "paper", "scissors"];
const MAX_SCORE = 5;

// Start game
game();

// Simulate a game
function game() {
  // Initialize variables
  let userScore = 0;
  let computerScore = 0;

  // Loop over rounds while user and computer score are below the max score
  for (let i = 0; userScore < MAX_SCORE && computerScore < MAX_SCORE; i++) {
    // Obtain user input and account for case sensitivity
    let playerSelection = prompt(
      `Select 'Rock' 'Paper' or Scissors`
    ).toLowerCase();

    // Obtain the round outcome
    let computerSelection = getComputerChoice();
    roundOutcome = playRound(playerSelection, computerSelection);

    // Tally and increment the round winner
    if (roundOutcome !== "Draw") {
      roundOutcome === "You Win" ? userScore++ : computerScore++;
    }

    // Log the round outcome
    console.log(roundOutcome);
  }
  // Declare the winner depending on who reached it first
  userScore === MAX_SCORE
    ? console.log(`Player wins ${userScore} to ${computerScore}!`)
    : console.log(`Computer wins ${computerScore} to ${userScore}!`);
}

// Obtain computer's choice
function getComputerChoice() {
  // Randomly roll a number between 0-2
  let roll = Math.floor(Math.random() * 3);

  // Select choice from array index based on roll
  return computerChoice = CHOICES[roll];
}

// Simulate a round
function playRound(playerSelection, computerSelection) {
  // If its the same selection, return a draw
  if (playerSelection === computerSelection) {
    return "Draw";
  }

  // Account for possible scenarios
  if (playerSelection === "rock") {
    const result = computerSelection === "paper" ? "You Lose" : "You Win";
    return result;
  } else if (playerSelection === "paper") {
    const result = computerSelection === "scissors" ? "You Lose" : "You Win";
    return result;
  } else {
    const result = computerSelection === "rock" ? "You Lose" : "You Win";
    return result;
  }
}
