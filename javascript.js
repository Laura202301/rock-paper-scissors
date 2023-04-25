
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

function playRound(playerSelection, computerSelection) {
let result;
    if (computerSelection === playerSelection){ 
	    result = "it's a tie";
    } else if (computerSelection === "rock" && playerSelection === "paper"){
 	    result = "You Win! Paper beats Rock";
    } else if (computerSelection === "paper" && playerSelection === "rock"){
    	result = "You Lose! Paper beats Rock";
    } else if (computerSelection === "scissors" && playerSelection === "rock"){
        result = "You Win! Rock beats Scissors"
    } else if (computerSelection === "rock" && playerSelection === "scissors"){
        result = "You Lose! Rock beats Scissors"
    } else if (computerSelection === "paper" && playerSelection === "scissors"){
        result = "You Win! Scissors beat Paper";
    } else {
        result = "You Lose! Scissors beat Paper";
    }
    return result;
}
const playerSelection = "rock";
console.log(playerSelection)
console.log(playRound(playerSelection, computerSelection));
