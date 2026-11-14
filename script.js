let playCount = 0;
let lastComputerChoice = "";

function playGame(playerChoice) {

    // Stop the game after 3 plays
    if (playCount >= 3) {
        document.getElementById("result").innerHTML =
            "Game over! You have played 3 times.";
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

    // Count this play
    playCount++;

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
        result + "<br>Play: " + playCount + " of 3";

    // Bonus: Stop immediately if the player wins
    if (result === "You win! Game over!") {
        playCount = 3;
        return;
    }

    // Stop after 3 plays
    if (playCount === 3) {
        document.getElementById("result").innerHTML +=
            "<br>Game over! You have used all 3 plays.";
    }
}
