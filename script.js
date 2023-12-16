// Create an array to hold values
let choices = ['rock', 'paper', 'scissors'];


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
        if (computerSelection === 'paper') {
            return 'You Lose';
        }
        else {
            return 'You Win';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You Lose';
        }
        else {
            return 'You Win';
        }
    } else {
        if (computerSelection === 'rock') {
            return 'You Lose';
        }
        else {
            return 'You Win';
        }
    }
}


// Simulate a game
function game() {

}

// Account for case sensitivity
const playerSelection = (prompt('select').toLowerCase());
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));