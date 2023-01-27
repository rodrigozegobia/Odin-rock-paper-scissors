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
    console.log(`Computer player ` + computerSelection + `!`);
    return result;
}

console.log(playRound(getPlayerChoice(),getComputerChoice()));
