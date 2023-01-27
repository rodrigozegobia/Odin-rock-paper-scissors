function getComputerChoice() {
    var choices = ['Rock', 'Paper', 'Scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice())

function getPlayerChoice() {
    var playerChoice = prompt("Enter Rock, Paper, or Scissors");
    while (playerChoice !== "Rock" && playerChoice !== "Paper" && playerChoice !== "Scissors") {
      alert("Enter Rock, Paper, or Scissors");
      playerChoice = prompt("Please enter your choice: Rock, Paper, or Scissors");
    }
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    var result;
    
    if (playerSelection === computerSelection) {
      result = "It's a Tie!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
               playerSelection === "Scissors" && computerSelection === "Paper" ||
               playerSelection === "Paper" && computerSelection === "Rock") {
      result = "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
      result = "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    return result;
}
