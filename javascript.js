
function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let computerResponse = getComputerChoice(1, 3);

if (computerResponse === 1) {
    computerResponse = "Rock";
} else if (computerResponse === 2) {
    computerResponse = "Paper";
} else {
    computerResponse = "Scissors";
}

console.log(computerResponse)
