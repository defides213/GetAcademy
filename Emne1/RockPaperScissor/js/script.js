let userSelected = "noen";
let computerSelected = "noen";
let winnerW = "none";



function userChoice(selected) {
    userSelected = selected;
    computerChoise();
}

function computerChoise() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice == 1) computerSelected = "rock";
    if (randomChoice == 2) computerSelected = "paper";
    if (randomChoice == 3) computerSelected = "scissor";
    winnings();
}

function winnings() {
    if (userSelected == "rock" && computerSelected == "scissor"
        || userSelected == "paper" && computerSelected == "rock"
        || userSelected == "scissor" && computerSelected == "paper") {
        winnerW = "The Player";
    }
    if (computerSelected == "rock" && userSelected == "scissor"
        || computerSelected == "paper" && userSelected == "rock"
        || computerSelected == "scissor" && userSelected == "paper") {
        winnerW = "The Computer";
    }
    if (userSelected != "noen" && userSelected == computerSelected) {
        winnerW = "No one";
    }
    overlayWinner();
}


function overlayWinner() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("compFinalChoice").src = `img/${computerSelected}.png`;
    document.getElementById("userFinalChoice").src = `img/${userSelected}.png`;
    document.getElementById("winnerIs").innerHTML = `The Winner is ${winnerW}`;
}


function tryAgain() {
    //må se på en bedre "restart", Men dette er sånn det blir for nå 
    userSelected = "noen";
    computerSelected = "noen";
    winnerW = "none";
    document.getElementById("overlay").style.display = "none";

}