const app = document.getElementById("app");
const roundTime = document.getElementById("lastRound");
let seconds = 0;
let minutes = 0;
var timer;

function countSeconds() {
    app.innerHTML = minutes + ":" + seconds;
    seconds++;
}

function countMinutes() {
    seconds = 0;
    minutes++;
}

function startTimer() {
    setInterval(countSeconds, 1000);
    setInterval(countMinutes, 60000);
}

function pauseTimer() {
    roundTime.innerHTML += `<li>${minutes - 0} minutes : ${seconds - 1} seconds</li>`;
    clearInterval(timer);
    seconds = 0;
    minutes = 0; 
}

function resetTimer() {
    location.reload();
}