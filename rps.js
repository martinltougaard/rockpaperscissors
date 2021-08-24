var roundCount = 0;
var playerPoints = 0;
var computerPoints = 0;
var playerSelection = "";

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', rpsFunction);
});

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    var r = randomInt(3);
    switch (r) {
        case 0:
            return "Rock";
            break;
        case 1: 
            return "Paper";
            break;
        case 2: 
            return "Scissors"
            break;        
    }
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "Rock": 
            if (computerSelection === "Rock") {return 0;}
            else if (computerSelection === "Paper") {return -1;}
            else if (computerSelection === "Scissors") {return 1;}
            break;
        case "Paper": 
            if (computerSelection === "Rock") {return 1;}
            else if (computerSelection === "Paper") {return 0;}
            else if (computerSelection === "Scissors") {return -1;}
            break;
        case "Scissors": 
            if (computerSelection === "Rock") {return -1;}
            else if (computerSelection === "Paper") {return 1;}
            else if (computerSelection === "Scissors") {return 0;}
            break;
    }
}

function rpsFunction() {
    playerSelection = this.id;
    computerSelection = computerPlay();
    document.getElementById('computerChose').innerHTML = "The computer chose " + computerSelection.toLowerCase(); 
    var result = playRound(playerSelection, computerSelection);


    if (result === 1) {
        ++playerPoints;
        document.getElementById('roundResult').innerHTML = "You Won! " + playerSelection + " beat " + computerSelection;
    } else if (result === -1) {
        ++computerPoints;
        document.getElementById('roundResult').innerHTML = "You Lost! " + computerSelection + " beat " + playerSelection;
    } else if (result === 0) {
        document.getElementById('roundResult').innerHTML = "It's a tie! You both selected " + computerSelection;
    } 
    document.getElementById('runningScore').innerHTML = "The current score is " + playerPoints + " to " + computerPoints;

    ++roundCount;
    if (roundCount === 5) {
        if (playerPoints > computerPoints) {
            document.getElementById('runningScore').innerHTML = "You win the match. The score was " + playerPoints + " to " + computerPoints;
        } else if (playerPoints < computerPoints) {
            document.getElementById('runningScore').innerHTML = "You lose the match. The score was " + playerPoints + " to " + computerPoints;
        } else if (playerPoints === computerPoints) {
            document.getElementById('runningScore').innerHTML = "The match was a Tie. The score was " + playerPoints + " to " + computerPoints;
        }
        roundCount = 0;
        playerPoints = 0;
        computerPoints = 0;
    }
}


