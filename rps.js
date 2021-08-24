var roundCount = 0;
var playerPoints = 0;
var computerPoints = 0;
var playerSelection = "";

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => rpsFunction(button.id));
});

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    var r = randomInt(3);
    switch (r) {
        case 0:
            return "rock";
            break;
        case 1: 
            return "paper";
            break;
        case 2: 
            return "scissors"
            break;        
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case "rock": 
            if (computerSelection === "rock") {return 0;}
            else if (computerSelection === "paper") {return -1;}
            else if (computerSelection === "scissors") {return 1;}
            break;
        case "paper": 
            if (computerSelection === "rock") {return 1;}
            else if (computerSelection === "paper") {return 0;}
            else if (computerSelection === "scissors") {return -1;}
            break;
        case "scissors": 
            if (computerSelection === "rock") {return -1;}
            else if (computerSelection === "paper") {return 1;}
            else if (computerSelection === "scissors") {return 0;}
            break;
    }
}

function rpsFunction(id) {
    playerSelection = id.toString();
    computerSelection = computerPlay();
    var result = playRound(playerSelection, computerSelection);


    if (result === 1) {
        ++playerPoints;
        document.getElementById('roundResult').innerHTML = "You Win! " + playerSelection + " beat " + computerSelection;
    } else if (result === -1) {
        ++computerPoints;
        document.getElementById('roundResult').innerHTML = "You Lose! " + computerSelection + " beat " + playerSelection;
    } else if (result === 0) {
        document.getElementById('roundResult').innerHTML = "It's a tie! You both selected " + computerSelection;
    } 
    document.getElementById('runningScore').innerHTML = "The current score is " + playerPoints + " to " + computerPoints;

    ++roundCount;
    if (roundCount === 5) {
        if (playerPoints > computerPoints) {
            document.getElementById('runningScore').innerHTML = "You win the match. The score was " + playerPoints + " to " + computerPoints;
        } else if (playerPoints > computerPoints) {
            document.getElementById('runningScore').innerHTML = "You lose the match. The score was " + playerPoints + " to " + computerPoints;
        } else if (playerPoints === computerPoints) {
            document.getElementById('runningScore').innerHTML = "The match was a Tie. The score was " + playerPoints + " to " + computerPoints;
        }
        roundCount = 0;
        playerPoints = 0;
        computerPoints = 0;
    }
}


