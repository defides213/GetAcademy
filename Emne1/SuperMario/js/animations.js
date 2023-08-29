// -- Peach Idle Animation -- //

function peachIdle() {
    document.getElementById("peachImg").classList.add("peachBobDown");
    document.getElementById("peachImg").classList.remove("peachBobUp");
    document.getElementById("peachImg").classList.remove("peachCurrentHeight");
    setTimeout(function() {
        document.getElementById("peachImg").classList.add("peachBobUp");
        document.getElementById("peachImg").classList.add("peachCurrentHeight");
        document.getElementById("peachImg").classList.remove("peachBobDown");
    },900);
    setTimeout(peachIdle ,4000);
}

function resetIdle() {
    setTimeout(peachIdle, 2000);
}

// -- Yoshi Animations. -- //

/* #region Yoshi */

function activateYoshi() {
    yoshiAvailable = true;
    document.getElementById("yoshiavailable").src = `img/yoshiegg.png`;
}

function yoshiRun() {
    if (!yoshiAvailable) return;
    deactivateYoshi();
    document.getElementById("yoshiImg").classList.add("yoshirun");
    setTimeout(yoshiAnimationRun, 3000);

}
let yoshiPosition = -100;
function yoshiAnimationRun() {
    bowserHealth.value -= 20;
    document.getElementById("yoshi").style.transform = "rotate(-90deg)";
    document.getElementById("yoshiImg").classList.add("yoshifall");
    setTimeout(function () {
        document.getElementById("yoshiImg").classList.remove("yoshifall");
        document.getElementById("yoshiImg").classList.remove("yoshirun");
        document.getElementById("yoshi").style.transform = "rotate(0deg)";
        setTimeout(activateYoshi, 30000);
    }, 3200);
}

function deactivateYoshi() {
    yoshiAvailable = false;
    document.getElementById("yoshiavailable").src = `img/yoshieggblackandwhite.png`;
}

/* #endRegion */

// -- Toad Animations. -- //

function activateToad() {
    toadWalkIn();
    setTimeout(function() {
        toadAvailable = true;
        document.getElementById("toadAvailable").src = `img/shroom.png`;
    }, 2000);
}

function toadWalkIn() {
    document.getElementById("toadImg").classList.add("toadWalkIn");
    document.getElementById("toadImg").classList.remove("toadStance");
    setTimeout(function() {
        toadBubbleIn();
    }, 2000);
}

function toadWalkOut() {
    if (!toadAvailable) return;
    toadAvailable = false;
    toadShroom();
    deactivateToad();
    document.getElementById("toadImg").classList.remove("toadWalkIn");
    document.getElementById("toadImg").classList.add("toadFlip");
    document.getElementById("toadImg").classList.add("toadWalkOut");
    setTimeout(function () {
        document.getElementById("toadImg").classList.remove("toadFlip");
        document.getElementById("toadImg").classList.remove("toadWalkOut");
        document.getElementById("toadImg").classList.add("toadStance");
        setTimeout(activateToad, 15000);
    }, 1500);
}


function toadShroom() {
    playerHealth.value += playerHealth.value * 0.2;
}


function deactivateToad() {
    toadAvailable = false;
    toadBubbleOut();
    document.getElementById("toadAvailable").src = `img/shroomblackandwhite.png`;
}

// -- Fire Flower Animation -- //


function fireFlowerAvailable() {
    if(!fireAvailable) return;
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            setTimeout(function () {
                document.getElementById("playableID").src = `img/${chosenCharacter}.png`;
            }, 600);
            setTimeout(function () {
                document.getElementById("playableID").src = `img/fireflower${chosenCharacter}.png`;
            }, 800);
        }, i * 600);
    }
    setTimeout(function () {
        fireFlowerActive = true;
        setTimeout(function () {
            document.getElementById("playableID").src = `img/${chosenCharacter}.png`;
            fireFlowerActive = false;
        }, 2000);
    }, 5 * 600);
    fireFlowerDisables();
}

function fireFlowerDisables() {
    document.getElementById("firefloweravailable").src = `img/fireflowerblackandwhite.png`;
    peachBubbleOut();
    setTimeout(peachBubbleIn, 55000);
}

