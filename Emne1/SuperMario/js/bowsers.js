let bowserRageActive = false;
let bowserRageAvailable = false;

// -- Bowser Normal Attack -- //

function bowserAttack() {
    playerHealth.value -= 6;
    document.getElementById("bowserBoi").style.right = `310px`;
    setTimeout(function () {
        document.getElementById("bowserBoi").style.right = `300px`;
    }, 300);
    if (playerHealth.value <= 0) {
        document.getElementById("playableID").style.transform = "rotate(-90deg)";
        document.getElementById("playableCharacters").style.top = "515px";
        setTimeout(function () {
            document.getElementById("overlayGameOver").style.display = "block";
            clearInterval(bowserAttackTimer);
        }, 1000);
    }
}

// -- Bowser Rage Buff -- //

function bowserRage() {
    if (!bowserRageAvailable) return;
    clearInterval(bowserAttackTimer);
    document.getElementById("bowserImgID").src = "img/bowserrage.png";
    setTimeout(function() {
        bowserAttackTimer = setInterval(bowserFireAttack,5000);
        bowserRageActive = true;
    },1000);
}

function bowserFireAttack() {
    if(bowserRageActive) {
        playerHealth.value -= 12;
        document.getElementById("bowserBoi").style.right = `310px`;
        setTimeout(function () {
            document.getElementById("bowserBoi").style.right = `300px`;
        }, 300);
    }
    if (playerHealth.value <= 0) {
        document.getElementById("playableID").style.transform = "rotate(-90deg)";
        document.getElementById("playableCharacters").style.top = "515px";
        setTimeout(function () {
            document.getElementById("overlayGameOver").style.display = "block";
            clearInterval(bowserAttackTimer);
        }, 1000);
    }
}