function getComputerChoice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function playRound(playerSelection) {
  let computerSelection = getComputerChoice(1, 3);

  if (computerSelection === 1) {
    computerSelection = "ROCK";
  } else if (computerSelection === 2) {
    computerSelection = "PAPER";
  } else {
    computerSelection = "SCISSORS";
  }

  let playerChoiceElement = document.querySelector(".player-choice");
  playerChoiceElement.textContent = playerSelection;

  let computerChoiceElement = document.querySelector(".computer-choice");
  computerChoiceElement.textContent = computerSelection;

  if (
    (computerSelection === "ROCK" && playerSelection === "PAPER") ||
    (computerSelection === "SCISSORS" && playerSelection === "ROCK") ||
    (computerSelection === "PAPER" && playerSelection === "SCISSORS")
  ) {
    playerScore++;
  } else if (
    (computerSelection === "PAPER" && playerSelection === "ROCK") ||
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER")
  ) {
    computerScore++;
  }

  let playerScoreElement = document.querySelector('.player-score');
  playerScoreElement.textContent = playerScore;

  let computerScoreElement = document.querySelector('.computer-score');
  computerScoreElement.textContent = computerScore;

  if (playerScore !== computerScore) {
    roundsPlayed++;
  }

  if (roundsPlayed === 5) {
    let playTextElement = document.querySelector('.play-text');
    let imageElement = document.querySelector('.img-challenge');
    
    if (playerScore > computerScore) {
      playTextElement.textContent = "PLAYER WINS!";
      imageElement.src = "./images/celebration.jpg";
      imageElement.alt = "Picture of celebration confetti";
    } else if (playerScore < computerScore) {
      playTextElement.textContent = "COMPUTER WINS!";
      imageElement.src = "./images/celebration.jpg";
      imageElement.alt = "Picture of celebration confetti";
    } else {
      playTextElement.textContent = "IT'S A TIE!";
    }
  }
}

let rockButton = document.querySelector(".rock-button");
let paperButton = document.querySelector(".paper-button");
let scissorsButton = document.querySelector(".scissors-button");

rockButton.addEventListener("click", function() {
  if (roundsPlayed < 5) {
    playRound("ROCK");
  }
});

paperButton.addEventListener("click", function() {
  if (roundsPlayed < 5) {
    playRound("PAPER");
  }
});

scissorsButton.addEventListener("click", function() {
  if (roundsPlayed < 5) {
    playRound("SCISSORS");
  }
});

document.querySelector(".arrow1").addEventListener("click", function() {
  location.reload();
});