let attackavailable = false;

function attack() {
    if(!attackavailable) return;
    userSpeechbubble();
    let enemyBar = document.getElementById("enemyProgressbar");
    let enemyNumber = document.getElementById("enemyNumberbar");
    encounterPokemon[randomIndex].curHP -= yourPokemon[userPokemonChoice].moves.dmg; 
    if(encounterPokemon[randomIndex].curHP <= 0) {
        encounterPokemon[randomIndex].curHP = 0; 
        document.getElementById("audio").src = "sound/Cri.m4a";
        document.getElementById("audio").volume = 0.1;
        document.getElementById("audio").play();
        setTimeout( function() {
            startGame()
            encounterPokemon[randomIndex].curHP = encounterPokemon[randomIndex].maxHP;
        },1800)
    }
    enemyBar.value = encounterPokemon[randomIndex].curHP;
    enemyNumber.innerHTML = `${encounterPokemon[randomIndex].curHP} / ${encounterPokemon[randomIndex].maxHP}`;
    attackavailable = false;
    runAvailable = false;
    catchAvailable = false;
    bagAvailable = false;
    setTimeout(function() {
        enemyAttack();
    },3500);

}
let faintswitch = false;
function enemyAttack() {
    enemySpeechbubbles();
    faintswitch = false;
    let userBar = document.getElementById("userBar");
    let userNumber = document.getElementById("userNumberBar");
    yourPokemon[userPokemonChoice].curHP -= encounterPokemon[randomIndex].moves.dmg;
    if(yourPokemon[userPokemonChoice].curHP <= 0) {
        yourPokemon[userPokemonChoice].curHP = 0; 
        document.getElementById("audio").src = "sound/Cri.m4a";
        document.getElementById("audio").volume = 0.1;
        document.getElementById("audio").play();
        faintswitch = true;
        setTimeout(openPokemon,1800);
    }
    userBar.value = yourPokemon[userPokemonChoice].curHP
    userNumber.innerHTML = `${yourPokemon[userPokemonChoice].curHP} / ${yourPokemon[userPokemonChoice].maxHP}`;
    setTimeout(function() {
        attackavailable = true;
        runAvailable = true;
        catchAvailable = true;
        bagAvailable = true;
    }, 1800);
}


let attackorback = true;
function attacksBoxOrBack() {
    if(attackorback === true) {
        document.getElementById("userInfoBox").innerHTML = `
            <div class="yourMove interactionBoxButtons" onclick="attack()" id="${yourPokemon[userPokemonChoice].moves.type}">${yourPokemon[userPokemonChoice].moves.moveID}</div>
            <div class="yourMove interactionBoxButtons"></div>
            <div class="yourMove interactionBoxButtons"></div>
            <div class="yourMove interactionBoxButtons" onclick="attacksBoxOrBack()">back</div>
        `;
        attackorback = false;
    }
    else {
        document.getElementById("userInfoBox").innerHTML = `
            <div class="yourMove interactionBoxButtons" onclick="attacksBoxOrBack()">Attack</div>
            <div class="catchPkmn dropUp interactionBoxButtons" >Balls
                <div class="dropdownContent"> 
                    <img src="img/ball_pokeball.png" class="ballsImg" onclick="catchPokemon()">
                    <img src="img/ball_greatball.png" class="ballsImg" onclick="catchPokemon()">
                    <img src="img/ball_ultraball.png" class="ballsImg" onclick="catchPokemon()">
                </div>
            </div>
            <div class="fightItems interactionBoxButtons" onclick="openPokemon()">Pokemon</div>
            <div class="runOrStay interactionBoxButtons" onclick="running()">Run</div>
        `;
        attackorback = true;
    }
    
}