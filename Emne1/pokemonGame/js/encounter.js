let shinyTrue;
let randomIndex;
let userPokemonChoice = 0;


function encounterGame() {
    randomLevel = Math.floor(Math.random() * 50);
    randomIndex = Math.floor(Math.random() * encounterPokemon.length);
    encounterPokemon[randomIndex].level = randomLevel + 50;
    console.log(randomLevel)
    encounterPokemon[randomIndex].maxHP = randomLevel * encounterPokemon[randomIndex].healthGrowth + encounterPokemon[randomIndex].baseHP;
    encounterPokemon[randomIndex].curHP = randomLevel * encounterPokemon[randomIndex].healthGrowth + encounterPokemon[randomIndex].baseHP;
    let shinyNumber = Math.floor(Math.random() * 10) + 1;
    shinyTrue = shinyNumber >= 8 ? true : false;
    document.getElementById("audio").src = "sound/encountersound.mp3";
    document.getElementById("audio").volume = 0.1;
    document.getElementById("audio").play();
    setTimeout(function() {
        gamebackground.classList.add("rel");
        gamebackground.innerHTML = `
            <img src="img/encounterbackground.webp" usemap="#grassboxes" id="background">
            <div>
                <div class="enemyBox">
                    <div class="statusBox">
                        <div class="pkmnName">${encounterPokemon[randomIndex].pokemonName}</div>
                        <div class="pkmnLevel">lvl: ${encounterPokemon[randomIndex].level}</div>
                        <progress class="progressBarFight" value="${encounterPokemon[randomIndex].curHP}" max="${encounterPokemon[randomIndex].maxHP}" id="enemyProgressbar"></progress>
                        <div class="currentHpNum" id="enemyNumberbar">${encounterPokemon[randomIndex].curHP} / ${encounterPokemon[randomIndex].maxHP}</div>  
                    </div>
                </div>
                <div class="enemyImg">
                    <img src="gifs/bunch/${shinyTrue ? encounterPokemon[randomIndex].gif + "shiny" : encounterPokemon[randomIndex].gif}.gif" id="imgGif">
                </div>
            </div>
            <div>
                <div class="userBox">
                    <div class="statusBox">
                        <div class="pkmnName">${yourPokemon[userPokemonChoice].pokemonName}</div>
                        <div class="pkmnLevel">lvl: ${yourPokemon[userPokemonChoice].level}</div>
                        <progress class="progressBarFight" value="${yourPokemon[userPokemonChoice].curHP}" max="${yourPokemon[userPokemonChoice].maxHP}"></progress>
                        <div class="currentHpNum">${yourPokemon[userPokemonChoice].curHP} / ${yourPokemon[userPokemonChoice].maxHP}</div>  
                    </div>
                </div>
                <div class="userImg">
                    <img src="gifs/backside/${yourPokemon[userPokemonChoice].shiny ? yourPokemon[userPokemonChoice].gif + "shiny" : yourPokemon[userPokemonChoice].gif}back.gif" id="imgGif">
                </div>
            </div>
            <div class="rel">
                <div class="interactionBox" id="userInfoBox">
                    <div class="yourMove interactionBoxButtons" onclick="attacksBox()">Attack</div>
                    <div class="catchPkmn interactionBoxButtons" onclick="catchPokemon()">Balls</div>
                    <div class="fightItems interactionBoxButtons" onclick="openPokemon()">Pokemon</div>
                    <div class="runOrStay interactionBoxButtons" onclick="startGame()">Run</div>
                </div>
            </div>
        `; 
    }, 2500);
}

let changePokemonBattle = true;
function openPokemon() {
    document.getElementById("inventory").innerHTML = ``;
    if(changePokemonBattle === true) {
        document.getElementById("inventory").style.display = "grid";
        document.getElementById("inventory").style.zIndex = "10";
        for(let pokemon in yourPokemon) {
            document.getElementById("inventory").innerHTML += `
                <div class="box padding">
                    <div>${yourPokemon[pokemon].pokemonName}</div>
                    <div>lv:  ${yourPokemon[pokemon].level}</div>
                    <img src="gifs/bunch/${yourPokemon[pokemon].shiny ? yourPokemon[pokemon].gif + "shiny" : yourPokemon[pokemon].gif}.gif" id="imgGif" onclick="()">
                    <div>${yourPokemon[pokemon].curHP} / ${yourPokemon[pokemon].maxHP} HP</div> 
                    <progress value="${yourPokemon[pokemon].curHP}" max="${yourPokemon[pokemon].maxHP}"></progress>
                </div> 
            `;
        }
        changePokemonBattle = false
        document.getElementById("inventory").innerHTML += `
        <div class="absoluteButton">
            <button id="heldPokemon" class="bagButtons" onclick="openPokemon()">Back</button>
        </div> `;
    }
    else {
        document.getElementById("inventory").innerHTML = ``;
        document.getElementById("inventory").style.display = "none";
        document.getElementById("inventory").style.zIndex = "1";
        changePokemonBattle = true;
    }
}

function switchPokemonIn() {

}

function attacksBox() {
    document.getElementById("userInfoBox").innerHTML = `
        <div class="yourMove interactionBoxButtons" onclick="attack()" id="${yourPokemon[userPokemonChoice].moves.type}">${yourPokemon[userPokemonChoice].moves.moveID}</div>
        <div class="yourMove interactionBoxButtons"></div>
        <div class="yourMove interactionBoxButtons"></div>
        <div class="yourMove interactionBoxButtons" onclick="backToInfoBox()">back</div>
    `;
}

function attack() {
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
}

function backToInfoBox() {
    document.getElementById("userInfoBox").innerHTML = `
        <div class="yourMove interactionBoxButtons" onclick="attacksBox()">Attack</div>
        <div class="catchPkmn interactionBoxButtons" onclick="catchPokemon()">Balls</div>
        <div class="fightItems interactionBoxButtons" onclick="openPokemon()">Pokemon</div>
        <div class="runOrStay interactionBoxButtons" onclick="startGame()">Run</div>
    `;
}

function catchPokemon() {
    if (yourPokemon.length === 6) {
        alert("You are at max capacity");
        return;
    }
    yourPokemon.push(encounterPokemon[randomIndex]);
    yourPokemon[yourPokemon.length - 1].shiny = shinyTrue;
    document.getElementById("audio").src = "sound/catchsound.mp3";
    document.getElementById("audio").volume = 0.1;
    document.getElementById("audio").play();
    setTimeout(function () {
        alert(`You've caught ${encounterPokemon[randomIndex].pokemonName}!`);
        encounterPokemon.splice(randomIndex, 1);
        randomIndex = null;
        startGame();
    }, 800);
}