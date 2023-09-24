const randomQuoteSays = document.getElementById("simonSaysQuote");
const overlay = document.getElementById("overlay");
let buttons = document.querySelectorAll(".buttons");
const simonSaysArray = [
    "Simon Says: Red", "Simon Says: Green",
    "Simon Says: Blue", "Simon Says: Yellow",
]
let quotesNumber;
let points = 0;
let counter = 0;

showOverlay()
function startGame() {
    overlay.style.display = "none";
    buttons.forEach(function (button) {
        button.disabled = true;
        button.classList.add("opacityChange");
    })
    setTimeout(randomQuote, 500);
}
let gameOver;
function randomQuote() {
    quotesNumber = Math.round(Math.random() * (simonSaysArray.length - 1));
    randomQuoteSays.innerHTML = simonSaysArray[quotesNumber]
    setTimeout(function () {
        buttons.forEach(function (button) {
            button.disabled = false;
            button.classList.remove("opacityChange");
        })
    }, 400);
    gameOver = setTimeout(showGameOver, 2000);
}

function checkCorrect(idButton) {
    clearTimeout(gameOver);
    if (quotesNumber === idButton) {
        points++;
        setTimeout(randomQuote, 500);
    }
    else {
        showGameOver();
    }
    document.getElementById("pointsNumber").innerHTML = points;
    buttons.forEach(function (button) {
        button.disabled = true;
        button.classList.add("opacityChange");
    })
    
}

function showGameOver() {
    overlay.style.display = "block";
    overlay.innerHTML = `
    <div class="flex center">
            <h1>GAME OVER</h1>
        </div>
        <div class="flex center">
            <p>You've lost. Congrats</p>
        </div>
        <div class="flex center">
            <p>Score: ${points}</p>
        </div>
        <div class="flex center">
            <button id="startGame" onclick="startGame()">Start Game</button>
        </div>
    `;
    points = 0;
    document.getElementById("pointsNumber").innerHTML = points;
}

function showOverlay() {
    overlay.innerHTML = `
    <div class="flex center">
            <h1>Welcome to the Simon Says game!</h1>
        </div>
        <div class="flex center">
            <p>Rules:</p>
        </div>
        <div class="flex center">
            <ul>
                <li>Click the correct button to earn a point</li>
                <li>Click the wrong button and you lose a points</li>
                <li>Reach 0 points and you lose</li>
                <li>Reach 10 points and you win</li>
            </ul>
            </div>
        <div class="flex center">
            <button id="startGame" onclick="startGame()">Start Game</button>
        </div>
    `;
}