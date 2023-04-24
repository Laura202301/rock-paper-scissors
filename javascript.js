
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

//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

let playerSelection = String(prompt("write rock, paper or scissors").toLowerCase());

function playRound (playerSelection, computerSelection) {
}
    if (computerSelection === playerSelection){
        alert("it's a tie");
    } else if (computerSelection === "rock" && playerSelection === "paper"){
        alert("Paper beats Rock");
    } else if (computerSelection === "paper" && playerSelection === "rock"){
        alert("Paper beats Rock");
    } else if (computerSelection === "rock" && playerSelection === "scissors"){
        alert("Rock beats Scissors");
    } else if (computerSelection === "scissors" && playerSelection === "rock"){
        alert("Rock beats Scissors");
    } else if (computerSelection === "paper" && playerSelection === "scissors"){
            alert("Scissors beat Paper");
    } else {
        alert("Scissors beat Paper");
    }
    
