const app = document.getElementById("app");
const roundTime = document.getElementById("lastRound");
let seconds = 0;
let minutes = 0;
let minutesTimer;
let secondsTimer;
var timer;

function countSeconds() {
    app.innerHTML = minutes + ":" + seconds;
    seconds++;
    if(seconds === 60) {
        minutes++;
        seconds = 0;
    }
}

function startTimer() {
    secondsTimer = setInterval(countSeconds, 1000);
    document.getElementById("overlayID").style.display = "none";
}

function pauseTimer() {
    roundTime.innerHTML += `<li>Paused at ${minutes} minutes : ${seconds - 1} seconds</li>`;
    clearInterval(secondsTimer);
    document.getElementById("overlayID").style.display = "block";
}

function resetTimer() {
    location.reload();
}