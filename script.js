function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getPlayerChoice() {
    var playerChoice = prompt("Please enter your choice: Rock, Paper, or Scissors").toLowerCase();
    while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
      alert("Invalid choice, please enter Rock, Paper, or Scissors");
      playerChoice = prompt("Please enter your choice: Rock, Paper, or Scissors").toLowerCase();
    }
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    var result;
    
    if (playerSelection === computerSelection) {
      result = "It's a Tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
               playerSelection === "scissors" && computerSelection === "paper" ||
               playerSelection === "paper" && computerSelection === "rock") {
      result = "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
      result = "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    return result;
}

function game() {
    var playerScore = 0;
    var computerScore = 0;
    
    for (var i = 0; i < 5; i++) { 
      var playerChoice = getPlayerChoice();
      var computerChoice = getComputerChoice();
      var roundResult = playRound(playerChoice, computerChoice);
      console.log(roundResult);
      
      if (roundResult.includes("Win")) {
        playerScore++;
      } else if (roundResult.includes("Lose")) {
        computerScore++;
      }
    }
    
    if (playerScore > computerScore) {
      console.log("You won the game! Your final score is " + playerScore + " to " + computerScore);
    } else if (playerScore < computerScore) {
      console.log("You lost the game! Your final score is " + playerScore + " to " + computerScore);
    } else {
      console.log("It's a tie! Your final score is " + playerScore + " to " + computerScore);
    }
}

console.log(game());