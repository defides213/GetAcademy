
// -- Peach Speech Bubble -- //

function peachBubbleIn() {
    document.getElementById("peachBubble").classList.remove("peachBubbleAnimationOut");
    document.getElementById("peachBubble").classList.add("peachBubbleAnimationIn");
    document.getElementById("peachBubble").classList.remove("peachBubbleOpacity");
    document.getElementById("firefloweravailable").src = `img/fireflower.png`;
    document.getElementById("characterNamePeach").innerHTML = chosenCharacter + ".&nbsp;"  ;
    fireAvailable = true;
}

function peachBubbleOut() {
    document.getElementById("peachBubble").classList.remove("peachBubbleAnimationIn");
    document.getElementById("peachBubble").classList.add("peachBubbleAnimationOut");
    setTimeout(function() {
        document.getElementById("peachBubble").classList.add("peachBubbleOpacity");
    }, 180);
}

// -- Toad Speech Bubble -- //

function toadBubbleIn() {
    document.getElementById("toadBubble").classList.remove("toadBubbleOpacity");
    document.getElementById("toadBubble").classList.add("toadBubbleAnimationIn");
    document.getElementById("toadCharacterName").innerHTML = chosenCharacter + ".&nbsp;"  ;
}

function toadBubbleOut() {
    document.getElementById("toadBubble").classList.remove("toadBubbleAnimationIn");
    document.getElementById("toadBubble").classList.add("toadBubbleAnimationOut");
    setTimeout(function() {
        document.getElementById("toadBubble").classList.add("toadBubbleOpacity");
    }, 180);
}

// -- Bowser JR Speech Bubble -- //
let attackButton = document.getElementById("playerAttack");
function bowserJRBuff() {
    document.getElementById("bowserJRBubble").classList.remove("bowserJRBubbleAnimationOut");
    document.getElementById("bowserJRBubble").classList.add("bowserJRBubbleAnimationIn");
    document.getElementById("bowserJRBubble").classList.remove("bowserJRBubbleOpacity");
    attackButton.disabled = true;
    attackButton.classList.add("opacitychange");
    bowserHealth.value = 250;
    setTimeout(function() {
        document.getElementById("bowserJRBubble").classList.add("bowserJRBubbleAnimationOut");
        document.getElementById("bowserJRBubble").classList.remove("bowserJRBubbleAnimationIn");
        setTimeout(function() {
            document.getElementById("bowserJRBubble").classList.add("bowserJRBubbleOpacity");
        }, 180);
        attackButton.disabled = false;
        attackButton.classList.remove("opacitychange");
    },3000);
}

// -- BOWSER SPEECH BUBBLE -- //

function bowserRageSpeechIn() {
    attackButton.disabled = true;
    attackButton.classList.add("opacitychange");
    document.getElementById("bowserBubble").classList.remove("bowserBubbleAnimationOut");
    document.getElementById("bowserBubble").classList.add("bowserBubbleAnimationIn");
    document.getElementById("bowserBubble").classList.remove("bowserBubbleOpacity");
    document.getElementById("characterNameBowser").innerHTML = chosenCharacter + ".&nbsp;"  ;
    setTimeout(function() {
        bowserRageAvailable = true;
        bowserRage();
        bowserHealth.value = 200;
    }, 5000);
    setTimeout(function() {
        document.getElementById("bowserBubble").classList.add("bowserBubbleAnimationOut");
        document.getElementById("bowserBubble").classList.remove("bowserBubbleAnimationIn");
        setTimeout(function() {
            document.getElementById("bowserBubble").classList.add("bowserBubbleOpacity");
            attackButton.disabled = false;
            attackButton.classList.remove("opacitychange");
        }, 180);
    }, 7000);
}


