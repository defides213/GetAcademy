let shinyTrue;
let randomIndex;
let userPokemonChoice = 0;
let runAvailable = false;


function encounterGame() {
    battleModeOn = false;
    attackavailable = true;
    runAvailable = true;
    catchAvailable = true;
    bagAvailable = true;
    userPokemonChoice = 0;
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
        bubble.style.display = "block";
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
            <div id="changePokemon">
                <div class="userBox">
                    <div class="statusBox">
                        <div class="pkmnName">${yourPokemon[userPokemonChoice].pokemonName}</div>
                        <div class="pkmnLevel">lvl: ${yourPokemon[userPokemonChoice].level}</div>
                        <progress class="progressBarFight" value="${yourPokemon[userPokemonChoice].curHP}" max="${yourPokemon[userPokemonChoice].maxHP}" id="userBar"></progress>
                        <div class="currentHpNum" id="userNumberBar">${yourPokemon[userPokemonChoice].curHP} / ${yourPokemon[userPokemonChoice].maxHP}</div>  
                    </div>
                </div>
                <div class="userImg">
                    <img src="gifs/backside/${yourPokemon[userPokemonChoice].shiny ? yourPokemon[userPokemonChoice].gif + "shiny" : yourPokemon[userPokemonChoice].gif}back.gif" id="imgGif">
                </div>
            </div>
            <div class="rel">
                <div class="interactionBox" id="userInfoBox">
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
                </div>
            </div>
        `; 
    }, 2500);
}

function running() {
    if(!runAvailable) return;
    startGame();
}
