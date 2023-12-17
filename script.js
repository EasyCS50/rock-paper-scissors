// Create an array to hold values
const choices = ['rock', 'paper', 'scissors'];
const maxScore = 5;

// Start game
game();


// Simulate a game
function game() {
    // Initialize variables
    let userScore = 0;
    let computerScore = 0;

    // Loop over rounds while user and computer score are below the max score
    for (let i = 0; userScore < maxScore && computerScore < maxScore; i++) {
        // Obtain user input and account for case sensitivity
        let playerSelection = prompt(`Select 'Rock' 'Paper' or Scissors`).toLowerCase();

        // Obtain the round outcome
        let computerSelection = getComputerChoice();
        roundOutcome = playRound(playerSelection, computerSelection);
        
        // Tally and increment the round winner
        if (roundOutcome !== 'Draw') {
            roundOutcome === 'You Win' ? userScore++ : computerScore++;
        }

        // Log the round outcome
        console.log(roundOutcome);
    }
    // Declare the winner depending on who reached it first
    userScore === maxScore ? console.log(`Player wins ${userScore} to ${computerScore}!`) : console.log(`Computer wins ${computerScore} to ${userScore}!`)
}


// Obtain computer's choice
function getComputerChoice() {
    // Randomly roll a number between 0-2
    let roll = Math.floor(Math.random() * 3);
    
    // Select choice from array index based on roll
    let choice = choices[roll];
    return choice;
}


// Simulate a round
function playRound(playerSelection, computerSelection) {
    // If its the same selection, return a draw
    if (playerSelection === computerSelection) {
        return 'Draw';
    }

    // Account for possible scenarios
    if (playerSelection === 'rock') {
        const result = computerSelection === 'paper' ? 'You Lose' : 'You Win';
        return result
    } else if (playerSelection === 'paper') {
        const result = computerSelection === 'scissors' ? 'You Lose' : 'You Win';
        return result;
    } else {
        const result = computerSelection === 'rock' ? 'You Lose' : 'You Win';
        return result
    }
}