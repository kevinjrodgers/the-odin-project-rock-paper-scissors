let playerWin = 0;
let computerWin = 0;
let draws = 0;
let roundNum = 1;
let rockButton = document.querySelector("#rockBtn");
let paperButton = document.querySelector("#paperBtn");
let scissorsButton = document.querySelector("#scissorsBtn");
let roundTrackerLabel = document.querySelector("#roundTrack")
let playerWinTrackerLabel = document.querySelector("#playerWinNum");
let drawTrackerLabel = document.querySelector("#drawsNum");
let computerWinTrackerLabel = document.querySelector("#computerWinNum");
let body = document.querySelector("body");

//Add their respective event listeners
rockButton.addEventListener("click", () => {
  playRound("rock");
});
paperButton.addEventListener("click", () => {
  playRound("paper");
});
scissorsButton.addEventListener("click", () => {
  playRound("scissors");
});

function computerPlay() {
  let computerHand = Math.floor(Math.random()*(4-1))+1; //Number between 1 and 3
  if(computerHand == 1) {
    return "rock";
  }
  else if(computerHand == 2) {
    return "paper";
  }
  else if (computerHand == 3) {
    return "scissors";
  }
  else {
    console.log("error");
    return -1;
  }
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  if((playerSelection == "rock" && computerSelection == "scissors") ||
  (playerSelection == "paper" && computerSelection == "rock") ||
  (playerSelection == "scissors" && computerSelection == "paper")) {
    console.log("You win! " + playerSelection + " beats " + computerSelection);
    ++playerWin;
    ++roundNum;
    roundTrackerLabel.innerHTML = "Round: " + roundNum;
    playerWinTrackerLabel.innerHTML = "Player Wins: " + playerWin;
    game(playerWin, computerWin);
  }
  else if((playerSelection == "rock" && computerSelection == "rock") ||
  (playerSelection == "paper" && computerSelection == "paper") ||
  (playerSelection == "scissors" && computerSelection == "scissors")) {
    console.log("You draw! " + playerSelection + " and " + computerSelection + " are the same!");
    ++draws;
    ++roundNum;
    roundTrackerLabel.innerHTML = "Round: " + roundNum;
    drawTrackerLabel.innerHTML = "Draws: " + draws;
    game(playerWin, computerWin);
  }
  else if((playerSelection == "rock" && computerSelection == "paper") ||
  (playerSelection == "paper" && computerSelection == "scissors") ||
  (playerSelection == "scissors" && computerSelection == "rock")) {
    console.log("You lose! " + playerSelection + " doesn\'t beat " + computerSelection);
    ++computerWin;
    ++roundNum;
    roundTrackerLabel.innerHTML = "Round: " + roundNum;
    computerWinTrackerLabel.innerHTML = "Computer Wins: " + computerWin;
    game(playerWin, computerWin);
  }
}

function game() {
  if(playerWin == 5 || computerWin == 5) {
    //Trigger the end of the game
    if(playerWin > computerWin) {
      let winnerLabel = document.createElement("h1");
      winnerLabel.innerHTML = "Player wins!";
      body.appendChild(winnerLabel);
    }
    else {
      let winnerLabel = document.createElement("h1");
      winnerLabel.innerHTML = "Computer wins...";
      body.appendChild(winnerLabel);
    }
  }

}
