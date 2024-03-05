let images = [
    "dice-01.svg",
    "dice-02.svg",
    "dice-03.svg",
    "dice-04.svg",
    "dice-05.svg",
    "dice-06.svg"
];
let dice = document.querySelectorAll("img");

function roll() {
    let player1Name = document.getElementById("player1").value;
    let player2Name = document.getElementById("player2").value;

    dice.forEach(function(die) {
        die.classList.add("shake");
    });
    setTimeout(function() {
        dice.forEach(function(die) {
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6);
        console.log("Die 1:", dieOneValue + 1);
        console.log("Die 2:", dieTwoValue + 1);

        // Determine the winner
        let winner;
        if (dieOneValue > dieTwoValue) {
            winner = player1Name;
        } else if (dieOneValue < dieTwoValue) {
            winner = player2Name;
        } else {
            winner = "It's a tie!";
        }
        console.log("Winner:", winner);

        // Update dice images
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = winner + " wins!";
    }, 1000);
}
