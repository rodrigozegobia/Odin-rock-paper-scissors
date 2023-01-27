function getComputerChoice() {
    var choices = ['Rock', 'Paper', 'Scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice())

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