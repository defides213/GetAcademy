let boardOfTheGame = []
let userPoints = 0;
let compPoints = 0;
let iteration = 0;
let userButtons = true;

function start() {
    document.getElementById("introduction").style.display = "none";
    document.getElementById("overlay").style.display = "block";
}

function overlayStart() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("gameboard").style.display = "block";
}

function areyousure() {
    Swal.fire({
        title: "Are you sure?",
        text: "This will delete all your progress",
        showCancelButton: true,
        icon: "question",
        toast: true,
        confirmButtonColor: '#2c2936',
        cancelButtonColor: '#550707',
        confirmButtonText: "Yes",
        background: "#25232e",
        color: "white",
        allowEnterKey: false,
    }).then((result) => {
        if (result.isConfirmed) {
            reset();
        }
    })
}

function computerKnowledge() {
    if (iteration >= 9) {
        return;
    }
    let randomNumber = Math.floor(Math.random() * 9);
    do {
        randomNumber = Math.floor(Math.random() * 9);
    } while (boardOfTheGame[randomNumber] !== null);
    boardOfTheGame[randomNumber] = circleorx === 'xType' ? 'oType' : 'xType';
    let something = document.getElementById(`num${randomNumber}`);
    if (circleorx === 'xType') {
        something.innerHTML = `<i class="iconsize fa-regular fa-circle"></i>`;
    }
    if (circleorx === 'oType') {
        something.innerHTML = `<i class="iconsize fa-solid fa-x"></i>`;
    }
    if (verifyWinner() === true) {
        compPoints++;
        document.getElementById("compPoints").innerHTML = `${compPoints}`;
    }
    else {
        iteration++;
    }
}

function reset() {
    document.getElementById("introduction").style.display = "block";
    document.getElementById("gameboard").style.display = "none";
}
let circleorx;
function gamework(type) {
    overlayStart();
    for (let i = 0; i < 9; i++) {
        boardOfTheGame[i] = null;
    }
    circleorx = type;
    if (circleorx === "oType") {
        computerKnowledge();
    }
}

function placement(box, number) {
    if (!userButtons) return;
    if (boardOfTheGame[number] !== null) {
        return;
    }
    if (iteration >= 9) {
        return;
    }
    if (circleorx === "xType") {
        box.innerHTML = `<i class="iconsize fa-solid fa-x"></i>`;
    }
    if (circleorx === "oType") {
        box.innerHTML = `<i class="iconsize fa-regular fa-circle"></i>`;
    }
    boardOfTheGame[number] = circleorx;
    iteration++;
    if (verifyWinner() === false) {
        computerKnowledge();
    }
    else {
        userPoints++;
        document.getElementById("userPoints").innerHTML = `${userPoints}`;
    }
}

function activateUser() {
    userButtons = true
}

function verifyWinner() {
    if ((boardOfTheGame[0] !== null && boardOfTheGame[0] === boardOfTheGame[4] && boardOfTheGame[4] === boardOfTheGame[8]) ||
        (boardOfTheGame[0] !== null && boardOfTheGame[0] === boardOfTheGame[1] && boardOfTheGame[1] === boardOfTheGame[2]) ||
        (boardOfTheGame[3] !== null && boardOfTheGame[3] === boardOfTheGame[4] && boardOfTheGame[4] === boardOfTheGame[5]) ||
        (boardOfTheGame[6] !== null && boardOfTheGame[6] === boardOfTheGame[7] && boardOfTheGame[7] === boardOfTheGame[8]) ||
        (boardOfTheGame[0] !== null && boardOfTheGame[0] === boardOfTheGame[3] && boardOfTheGame[3] === boardOfTheGame[6]) ||
        (boardOfTheGame[1] !== null && boardOfTheGame[1] === boardOfTheGame[4] && boardOfTheGame[4] === boardOfTheGame[7]) ||
        (boardOfTheGame[2] !== null && boardOfTheGame[2] === boardOfTheGame[5] && boardOfTheGame[5] === boardOfTheGame[8]) ||
        (boardOfTheGame[2] !== null && boardOfTheGame[2] === boardOfTheGame[4] && boardOfTheGame[4] === boardOfTheGame[6])
    ) {
        reset()
        return true;
    }
    if (boardOfTheGame[0] !== null &&
        boardOfTheGame[1] !== null &&
        boardOfTheGame[2] !== null &&
        boardOfTheGame[3] !== null &&
        boardOfTheGame[4] !== null &&
        boardOfTheGame[5] !== null &&
        boardOfTheGame[6] !== null &&
        boardOfTheGame[7] !== null &&
        boardOfTheGame[8] !== null
    ) {
        reset()
    }
    return false;
}

function reset() {
    userButtons = false;
    // The reason why it's 2 for loops is because of the array (boardOfTheGame) 
    // didn't want to become null correctly with the timeout in the same loop
    for (let i = 0; i < 9; i++) {
        setTimeout(function () {
            document.getElementById(`num${i}`).innerHTML = ``;
        }, 1000);
    }
    for (let i = 0; i < 9; i++) {
        boardOfTheGame[i] = null;
        console.log(i)
    }
    userButtons = true;
    console.log(boardOfTheGame)
    iteration = 0;
}