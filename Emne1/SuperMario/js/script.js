"use strict";

// Easter Egg. Add Cringles Logo somewhere.

let playerHealth = document.getElementById('playableHp');
let bowserHealth = document.getElementById('bowserHp');
let bowserAttackTimer;
let yoshiAvailable = false;
let toadAvailable = false;
let fireAvailable = false; 
let fireFlowerActive = false;
let chosenCharacter;

function chooseCharacter(character) {
    chosenCharacter = character;
    document.getElementById("playableID").src = `img/${character}.png`;
    document.getElementById("overlayStart").style.display = "none";
    bowserAttackTimer = setInterval(bowserAttack, 5000);
    setTimeout(activateYoshi, 30000);
    setTimeout(activateToad, 15000);
    setTimeout(peachBubbleIn, 20000);
    setTimeout(peachIdle ,2000);
}

// -- Attacks -- //
let bowserJRHP = true;
function attack() {
    bowserHealth.value -= 0.5;
    if (bowserHealth.value <= 0) {
        document.getElementById("overlayW").style.display = "block";
        clearInterval(bowserAttackTimer);
    }
    if(fireFlowerActive) {
        bowserHealth.value -= 6;
    }
    if(bowserHealth.value <= 120 && bowserJRHP === true) {
        bowserJRHP = false; 
        bowserJRBuff();

    }
    if(bowserHealth.value <= 30 && bowserRageAvailable === false) {
        bowserRageAvailable = false
        bowserRageSpeechIn();
    }
}

// -- Automatic choose of character chosen prior, for restart. -- //

function restart() {
    location.reload();
    // chooseCharacter(chosenCharacter);
    // document.getElementById("overlayGameOver").style.display = "none";
    // document.getElementById("overlayW").style.display = "none";
    // playerHealth.value = playerHealth.max;
    // bowserHealth.value = bowserHealth.max;
    // document.getElementById("playableID").style.transform = "rotate(0)";
}