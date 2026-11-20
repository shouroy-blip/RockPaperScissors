const MAX_PLAYS = 5;

let playCount = 0;
let lastComputerChoice = "";
let playerGuesses = [];

function playGame(playerChoice) {

    // Stop the game after MAX_PLAYS plays
    if (playCount >= MAX_PLAYS) {
        document.getElementById("result").innerHTML =
            "Game over! You have played " + MAX_PLAYS + " times.";
        return;
    }

    let choices = ["rock", "paper", "scissors"];
    let computerChoice;

    // Make sure the computer changes its choice each time
    do {
        let randomNumber = Math.floor(Math.random() * 3);
        computerChoice = choices[randomNumber];
    } while (computerChoice === lastComputerChoice);

    lastComputerChoice = computerChoice;

    // Count this play and remember what the player guessed
    playCount++;
    playerGuesses.push(playerChoice);

    let result;

    // Check if both choices are the same
    if (playerChoice === computerChoice) {
        result = "It's a draw!";
    }

    // Check if the player wins
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win! Game over!";
    }

    // Otherwise the computer wins
    else {
        result = "Computer wins!";
    }

    document.getElementById("playerChoice").innerHTML =
        "You chose: " + playerChoice;

    document.getElementById("computerChoice").innerHTML =
        "Computer chose: " + computerChoice;

    document.getElementById("result").innerHTML =
        result + "<br>Play: " + playCount + " of " + MAX_PLAYS;

    // Stop immediately if the player wins
    if (result === "You win! Game over!") {
        playCount = MAX_PLAYS;
        showGuessHistory("Game over! You have used all " + MAX_PLAYS + " plays.");
        return;
    }

    // Stop after MAX_PLAYS plays
    if (playCount === MAX_PLAYS) {
        showGuessHistory("Game over! You have used all " + MAX_PLAYS + " plays.");
    }
}

// Appends the final message plus the list of all guesses made this game
function showGuessHistory(message) {
    document.getElementById("result").innerHTML +=
        "<br>" + message +
        "<br>Your guesses: " + playerGuesses.join(", ");
}
