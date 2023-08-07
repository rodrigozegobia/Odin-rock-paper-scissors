function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
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

const buttons = document.querySelectorAll('button');
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');

let playerScore = 0;
let computerScore = 0;

// Add click event listeners to the buttons
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const roundResult = playRound(playerChoice, computerChoice);
        
        // Display the round result and update the scores
        resultsDiv.textContent = roundResult;
        updateScores(roundResult);
        
        // Display the current score
        scoreDiv.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
        
        // Check for a winner
        if (playerScore === 5) {
            announceWinner("Player");
        } else if (computerScore === 5) {
            announceWinner("Computer");
        }
    });
});

function updateScores(result) {
    if (result.includes("Win")) {
        playerScore++;
    } else if (result.includes("Lose")) {
        computerScore++;
    }
}

function announceWinner(winner) {
    const winnerDiv = document.createElement('div');
    winnerDiv.textContent = `${winner} wins the game!`;
    winnerDiv.classList.add('winner');
    resultsDiv.appendChild(winnerDiv);
    
    // Disable the buttons after the game is won
    buttons.forEach(button => {
        button.removeEventListener('click', function() {});
        button.disabled = true;
    });
}
// ... (rest of your code remains unchanged)
