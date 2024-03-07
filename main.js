/*Rules
1. if both names are not entered dice will not roll
2. +1 point on the score board for the player that wins 
3.
*/

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
    
    // alert to prevent roll if both names have not been entered
    if (!player1Name || !player2Name) {
        alert("Please enter names for both players before rolling the dice.");
        return;
    }

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
            homeScore.innerHTML = parseInt(homeScore.innerHTML) + 1;
        } else if (dieOneValue < dieTwoValue) {
            winner = player2Name;
            guestScore.innerHTML = parseInt(guestScore.innerHTML) + 1;
        } else {
            winner = "It's a tie!";
        }
        console.log("It's a tie:", winner);

        // Update dice images
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = winner + " wins!";
    }, 1000);
}




//Score board
// Get the input fields, labels, and score elements
const player1Input = document.getElementById('player1');
const player1Label = document.getElementById('player1-name');
const player2Input = document.getElementById('player2');
const player2Label = document.getElementById('player2-name');
const totalScore = document.getElementById('total');
const homeScore = document.querySelector('.h-score');
const guestScore = document.querySelector('.g-score');

// Function to update the labels with the input values
function updateLabels() {
    player1Label.innerHTML = player1Input.value;
    player2Label.innerHTML = player2Input.value;
}

// Add event listeners to the input fields
player1Input.addEventListener('input', updateLabels);
player2Input.addEventListener('input', updateLabels);



