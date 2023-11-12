let battleModeOn = true;
let battleModePokemon;

function battleArenaEntrance() {
    battleModeOn = true;
    jefferyBag(); 
    santaClausBag();
    gregBag();
    console.log("jeffery", jeffery);
    console.log("greg", greg);
    console.log("santaclaus", santaClaus);
    gamebackground.innerHTML = `
        <img src="img/battlearena.jpg" usemap="#grassboxes" id="background">
        <div class="battleArenachoice" id="battlechoicedisplay">
            <div class="battletitle">
                <span>Only 3 of the 6 Pokemon will show here</span>
                <div class="chooseOpponent">
                    <div id="oponant1">Jeffery
                        <div><i class="fa-solid fa-user"></i></div>
                        <div>${jeffery[0].pokemonName}</div>
                        <img class="opponentgifs" src="gifs/bunch/${shinyTrue ? jeffery[0].gif + "shiny" : jeffery[0].gif}.gif" id="imgGif">
                        <div>${jeffery[1].pokemonName}</div>
                        <img class="opponentgifs" src="gifs/bunch/${shinyTrue ? jeffery[1].gif + "shiny" : jeffery[1].gif}.gif" id="imgGif">
                        <div>${jeffery[2].pokemonName}</div>
                        <img class="opponentgifs" src="gifs/bunch/${shinyTrue ? jeffery[2].gif + "shiny" : jeffery[2].gif}.gif" id="imgGif">
                    </div>
                    <div id="oponant2">Santa Claus
                        <div><i class="fa-solid fa-user"></i></div>
                        <div>${santaClaus[0].pokemonName}</div>
                        <img class="opponentgifs" src="gifs/bunch/${shinyTrue ? santaClaus[0].gif + "shiny" : santaClaus[0].gif}.gif" id="imgGif">
                        <div>${santaClaus[1].pokemonName}</div>
                        <img class="opponentgifs" src="gifs/bunch/${shinyTrue ? santaClaus[1].gif + "shiny" : santaClaus[1].gif}.gif" id="imgGif">
                        <div>${santaClaus[2].pokemonName}</div>
                        <img class="opponentgifs" src="gifs/bunch/${shinyTrue ? santaClaus[2].gif + "shiny" : santaClaus[2].gif}.gif" id="imgGif">
                    </div>
                    <div id="oponant3">Greg
                        <div><i class="fa-solid fa-user"></i></div>
                        <div>${greg[0].pokemonName}</div>
                        <img class="opponentgifs" src="gifs/bunch/${shinyTrue ? greg[0].gif + "shiny" : greg[0].gif}.gif" id="imgGif">
                        <div>${greg[1].pokemonName}</div>
                        <img class="opponentgifs" src="gifs/bunch/${shinyTrue ? greg[1].gif + "shiny" : greg[1].gif}.gif" id="imgGif">
                        <div>${greg[2].pokemonName}</div>
                        <img class="opponentgifs" src="gifs/bunch/${shinyTrue ? greg[2].gif + "shiny" : greg[2].gif}.gif" id="imgGif">
                    </div>
                </div>
            </div>
        </div> 
    `;
    document.getElementById("oponant1").addEventListener("click", function() {
        chosenOpponent(jeffery, 'Jeffery');
    })
    document.getElementById("oponant2").addEventListener("click", function() {
        chosenOpponent(santaClaus, 'Santa Claus');
    })
    document.getElementById("oponant3").addEventListener("click", function() {
        chosenOpponent(greg, 'Greg');
    })
    document.getElementById("bagScreen").innerHTML = ``;
    document.getElementById("bagScreen").style.display = "none";
    closeBag = true;
}
function chosenOpponent(opponentChosen, opponentName) {
    battleModePokemon = 0;
    document.getElementById("battlechoicedisplay").innerHTML = `
    <div class="battletitle">Choosen Opponent was ${opponentName}</div>
    <img class="opponentgifs" src="gifs/bunch/${shinyTrue ? opponentChosen[0].gif + "shiny" : opponentChosen[0].gif}.gif" id="imgGif">
    `;
    setTimeout(function() {
        bubble.style.display = "block";
        gamebackground.classList.add("rel");
        gamebackground.innerHTML = `
            <img src="img/battlearena.jpg" usemap="#grassboxes" id="background">
            <div>
                <div class="enemyBox">
                    <div class="statusBox">
                        <div class="pkmnName">${opponentChosen[battleModePokemon].pokemonName}</div>
                        <div class="pkmnLevel">lvl: ${opponentChosen[battleModePokemon].level}</div>
                        <progress class="progressBarFight" value="${opponentChosen[battleModePokemon].curHP}" max="${opponentChosen[battleModePokemon].maxHP}" id="enemyProgressbar"></progress>
                        <div class="currentHpNum" id="enemyNumberbar">${opponentChosen[battleModePokemon].curHP} / ${opponentChosen[battleModePokemon].maxHP}</div>  
                    </div>
                </div>
                <div class="enemyImg">
                    <img src="gifs/bunch/${shinyTrue ? opponentChosen[battleModePokemon].gif + "shiny" : opponentChosen[battleModePokemon].gif}.gif" id="imgGif">
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



function generateRandompokemon() {
    randomLevel = Math.floor(Math.random() * 50);
    randomIndex = Math.floor(Math.random() * encounterPokemon.length);
    encounterPokemon[randomIndex].level = randomLevel + 50;
    console.log(randomLevel)
    encounterPokemon[randomIndex].maxHP = randomLevel * encounterPokemon[randomIndex].healthGrowth + encounterPokemon[randomIndex].baseHP;
    encounterPokemon[randomIndex].curHP = randomLevel * encounterPokemon[randomIndex].healthGrowth + encounterPokemon[randomIndex].baseHP;
}

function jefferyBag() {
    for(let i = 0; i <= 5; i++) {
        generateRandompokemon()
        jeffery.push(encounterPokemon[randomIndex]);
        jeffery[jeffery.length - 1].shiny = shinyTrue;
    }
}

function santaClausBag() {
    for(let i = 0; i <= 5; i++) {
        generateRandompokemon()
        santaClaus.push(encounterPokemon[randomIndex]);
        santaClaus[santaClaus.length - 1].shiny = shinyTrue;
    }
}

function gregBag() {
    for(let i = 0; i <= 5; i++) {
        generateRandompokemon()
        greg.push(encounterPokemon[randomIndex]);
        greg[greg.length - 1].shiny = shinyTrue;
    }
}