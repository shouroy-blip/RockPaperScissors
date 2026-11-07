function playGame(playerChoice) {

    // Generate a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);

    let computerChoice;

    // Decide the computer's choice
    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (randomNumber === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

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
        result = "You win!";
    }

    // Otherwise the computer wins
    else {
        result = "Computer wins!";
    }

    document.getElementById("playerChoice").innerHTML =
        "You chose: " + playerChoice;

    document.getElementById("computerChoice").innerHTML =
        "Computer chose: " + computerChoice;

    document.getElementById("result").innerHTML = result;
}