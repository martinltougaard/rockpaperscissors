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

function game(){
    var playerPoints = 0;
    var computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Pick rock, paper or scissors");
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        if (result === 1){
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
            ++playerPoints;
        } else if (result === -1) {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
            ++computerPoints;    
        } else if (result === 0) {
            console.log("It's a Tie");
        }  
    }
    

    if (playerPoints > computerPoints) {
        console.log("You win the match. The score was " + playerPoints + " to " + computerPoints);
    } else if (playerPoints > computerPoints) {
        console.log("You lose the match. The score was " + playerPoints + " to " + computerPoints);
    } else if (playerPoints === computerPoints) {
        console.log("The match was a Tie. The score was " + playerPoints + " to " + computerPoints);
    } 
}

game();

