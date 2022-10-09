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

function singleRound(playerSelection) {
    let player = playerSelection.toLowerCase();

    let computer = getComputerChoice().toLowerCase();

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

let playerScore = 0;
let computerScore = 0;

const button1 = document.createElement("button");
button1.innerHTML = "Rock";
document.body.appendChild(button1);
button1.addEventListener("click", function x() {
    if (playerScore !=5 && computerScore != 5) {
        const resultText = singleRound("Rock");

        if (resultText.slice(0, 8) == "You Win!") {
            playerScore += 1;
        } else if (resultText.slice(0, 9) == "You Lose!") {
            computerScore += 1;
        } 

        const result = document.createElement("div");
        result.textContent = resultText + ` [${playerScore} - ${computerScore}]`;

        document.getElementById("results").appendChild(result);

        if (playerScore == 5 && computerScore < 5) {
            const finalResult = document.createElement("div");
            finalResult.textContent = "Player Wins!";
            document.getElementById("results").appendChild(finalResult);

        } else if (computerScore == 5 && playerScore < 5) {
            const finalResult = document.createElement("div");
            finalResult.textContent = "Computer Wins!";
            document.getElementById("results").appendChild(finalResult);
        } else if (playerScore == 5 && computerScore == 5) {
            const finalResult = document.createElement("div");
            finalResult.textContent = "Player & Computer Tied!";
            document.getElementById("results").appendChild(finalResult);
        }
    }
});

const button2 = document.createElement("button");
button2.innerHTML = "Paper";
document.body.appendChild(button2);
button2.addEventListener("click", function x() {
    if (playerScore !=5 && computerScore != 5) {
        const resultText = singleRound("Paper");
    
        if (resultText.slice(0, 8) == "You Win!") {
            playerScore += 1;
        } else if (resultText.slice(0, 9) == "You Lose!") {
            computerScore += 1;
        } 
        
        const result = document.createElement("div");
        result.textContent = resultText + ` [${playerScore} - ${computerScore}]`;
        document.getElementById("results").appendChild(result);
        
        if (playerScore == 5 && computerScore < 5) {
            const finalResult = document.createElement("div");
            finalResult.textContent = "Player Wins!";
                document.getElementById("results").appendChild(finalResult);
        } else if (computerScore == 5 && playerScore < 5) {
            const finalResult = document.createElement("div");
            finalResult.textContent = "Computer Wins!";
            document.getElementById("results").appendChild(finalResult);
        } else if (playerScore == 5 && computerScore == 5) {
            const finalResult = document.createElement("div");
            finalResult.textContent = "Player & Computer Tied!";
            document.getElementById("results").appendChild(finalResult);
        }
    }
});


const button3 = document.createElement("button");
button3.innerHTML = "Scissors";
document.body.appendChild(button3);
button3.addEventListener("click", function x() {
    if (playerScore !=5 && computerScore != 5) {
        const resultText = singleRound("Scissors");

        if (resultText.slice(0, 8) == "You Win!") {
            playerScore += 1;
        } else if (resultText.slice(0, 9) == "You Lose!") {
            computerScore += 1;
        } 
    
        const result = document.createElement("div");
        result.textContent = resultText + ` [${playerScore} - ${computerScore}]`;
        document.getElementById("results").appendChild(result);
    
        if (playerScore == 5 && computerScore < 5) {
            const finalResult = document.createElement("div");
            finalResult.textContent = "Player Wins!";
            document.getElementById("results").appendChild(finalResult);
        } else if (computerScore == 5 && playerScore < 5) {
            const finalResult = document.createElement("div");
            finalResult.textContent = "Computer Wins!";
            document.getElementById("results").appendChild(finalResult);
        } else if (playerScore == 5 && computerScore == 5) {
            const finalResult = document.createElement("div");
            finalResult.textContent = "Player & Computer Tied!";
            document.getElementById("results").appendChild(finalResult);
        }
    }
});

const results = document.createElement("div");
results.setAttribute("id", "results");
document.body.appendChild(results);





