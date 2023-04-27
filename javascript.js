
function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let computerSelection = getComputerChoice(1, 3);

if (computerSelection === 1) {
    computerSelection = "rock";
} else if (computerSelection === 2) {
    computerSelection = "paper";
} else {
    computerSelection = "scissors";
}

console.log(computerSelection)

let playerSelection = String(prompt("write rock, paper or scissors").toLowerCase());

function playRound(playerSelection, computerSelection) {
let result = 0;
    if (computerSelection === "rock" && playerSelection === "paper" ||computerSelection === "scissors" && playerSelection === "rock" ||computerSelection === "paper" && playerSelection === "scissors") {
        return ++result + " " + "You win!";

    } else if (computerSelection === "paper" && playerSelection === "rock" ||
    computerSelection === "rock" && playerSelection === "scissors" ||
    computerSelection === "scissors" && playerSelection === "paper") {
        return ++result + " " + "You Lose!";
    
    } else (computerSelection === playerSelection); { 
        return result + " " + "it's a tie"; 
    }
}

//const playerSelection = "paper";
console.log(playerSelection)
console.log(playRound(playerSelection, computerSelection));

