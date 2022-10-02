function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x == 0) {
        return "Rock"
    } else if (x == 1) {
        return "Paper"
    } else if (x == 2) {
        return "Scissors"
    }
}

function singleRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();

    let computer = computerSelection.toLowerCase();

    player = player.charAt(0).toUpperCase() + player.slice(1);

    computer = computer.charAt(0).toUpperCase() + computer.slice(1);

    let win;

    let loss;

    if (player.toLowerCase() == "rock") {
        if (computer.toLowerCase() == "rock") {
            return "Tie!"
        } else if (computer.toLowerCase() == "paper") {
            let loss = true;
            return `You Lose! ${computer} beats ${player}!`
        } else if (computer.toLowerCase() == "scissors") {
            let win = true;
            return `You Win! ${player} beats ${computer}!`
        }
    } else if (player.toLowerCase() == "paper") {
        if (computer.toLowerCase() == "rock") {
            let win = true;
            return `You Win! ${player} beats ${computer}!`
        } else if (computer.toLowerCase() == "paper") {
            return "Tie!"
        } else if (computer.toLowerCase() == "scissors") {
            let loss = true;
            return `You Lose! ${computer} beats ${player}!`
        }
    } else if (player.toLowerCase() == "scissors") {
        if (computer.toLowerCase() == "rock") {
            let loss = true;
            return `You Lose! ${computer} beats ${player}!`
        } else if (computer.toLowerCase() == "paper") {
            let win = true;
            return `You Win! ${player} beats ${computer}!`
        } else if (computer.toLowerCase() == "scissors") {
            return "Tie!"
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your move: ");
        const computerSelection = getComputerChoice();
        console.log(singleRound(playerSelection, computerSelection));
    }
    
}

game();