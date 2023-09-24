const output = document.getElementById("game");
const gamebackground = document.getElementById("gameBackground");
let randomIndex;


function startGame() {
    gamebackground.classList.remove("rel");
    document.getElementById("start").style.display = "none";
    gamebackground.innerHTML = `
        <img src="img/grassarea.png" usemap="#grassboxes" id="background">
        <div class="circle flex center">
            <img src="img/bag.png" id="bagIcon" onclick="openBag()">
        </div>  
        <map name="grassboxes" id="map">
            <area shape="rect" coords="90,130,470,250" href="#" onclick="encounterGame()">
            <area shape="rect" coords="545,130,940,250" href="#" onclick="encounterGame()">
            
            <area shape="rect" coords="90,345,470,460" href="#" onclick="encounterGame()">
            <area shape="rect" coords="545,345,940,460" href="#" onclick="encounterGame()">
        </map>
    `;
    const background = document.getElementById("background");
}

function disableMapArea() {
    document.getElementById("map").areas[0].coords="0,0,0,0";
    document.getElementById("map").areas[1].coords="0,0,0,0";
    document.getElementById("map").areas[2].coords="0,0,0,0";
    document.getElementById("map").areas[3].coords="0,0,0,0";
}

function enableMapArea() {
    document.getElementById("map").areas[0].coords="90,130,470,250";
    document.getElementById("map").areas[1].coords="545,130,940,250";
    document.getElementById("map").areas[2].coords="90,345,470,460";
    document.getElementById("map").areas[3].coords="545,345,940,460";
}

let closeBag = true;
function openBag() {
    if(closeBag === true) {
        disableMapArea();
        background.src = "img/bagbackground.png";
        document.getElementById("bagScreen").style.display = "block";
        document.getElementById("bagScreen").innerHTML = `
            <button id="heldPokemon" class="bagButtons" onclick="storedPokemonBag()">Held Pokemon</button>
            <button id="BattleMode" class="bagButtons">battle Mode</button>
            <button id="heldPokemon" class="bagButtons" onclick="alertMe()">Pokedex</button>
            <button id="BattleMode" class="bagButtons" onclick="alertMe()">Items</button>
        `;
    closeBag = false;
    }
    else {
        enableMapArea();
        background.src = "img/grassarea.png";
        document.getElementById("bagScreen").innerHTML = ``;
        document.getElementById("bagScreen").style.display = "none";
        closeBag = true;
    }
}

let storedPkmn = true;
function storedPokemonBag() {
    if(storedPkmn === true) {
        document.getElementById("bagScreen").innerHTML = ``;
        document.getElementById("inventory").style.display = "grid";
        document.getElementById("bagScreen").style.display = "none";
        for(let pokemon in yourPokemon) {
            document.getElementById("inventory").innerHTML += `
                <div class="box padding">
                    <div>${yourPokemon[pokemon].pokemonName}</div>
                    <div>lv:  ${yourPokemon[pokemon].level}</div>
                    <img src="gifs/bunch/${yourPokemon[pokemon].shiny}.gif" id="imgGif">
                    <div>${yourPokemon[pokemon].curHP} / ${yourPokemon[pokemon].maxHP} HP</div> 
                    <progress value="${yourPokemon[pokemon].curHP}" max="${yourPokemon[pokemon].maxHP}"></progress>
                </div> 
        `;
        }
        document.getElementById("inventory").innerHTML += `
        <div class="absoluteButton">
            <button id="heldPokemon" class="bagButtons" onclick="storedPokemonBag()">Back</button>
        </div> `;
        storedPkmn = false;
    }
    else {
        document.getElementById("inventory").style.display = "none";
        document.getElementById("bagScreen").style.display = "block";
        document.getElementById("inventory").innerHTML = ``;
        document.getElementById("bagScreen").innerHTML = `
            <button id="heldPokemon" class="bagButtons" onclick="storedPokemonBag()">Held Pokemon</button>
            <button id="BattleMode" class="bagButtons">battle Mode</button>
            <button id="heldPokemon" class="bagButtons" onclick="alertMe()">Pokedex</button>
            <button id="BattleMode" class="bagButtons" onclick="alertMe()">Items</button>
        `;
        
        storedPkmn = true;
    }
}

function alertMe() {
    alert("Under Construction")
}

let shinyTrue;
function encounterGame() {
    randomIndex = Math.floor(Math.random() * encounterPokemon.length);
    let shinyNumber = Math.floor(Math.random() * 10) + 1;
    shinyTrue = shinyNumber >= 8 ? true : false;
    let shinyimage = shinyNumber >= 8 ? `${encounterPokemon[randomIndex].shiny}` : `${encounterPokemon[randomIndex].gif}`;
    console.log(shinyNumber)
    setTimeout(function() {
        gamebackground.classList.add("rel");
        gamebackground.innerHTML = `
            <img src="img/encounterbackground.webp" usemap="#grassboxes" id="background">
            <div>
                <div class="enemyBox">
                    <div class="statusBox">
                        <div class="pkmnName">${encounterPokemon[randomIndex].pokemonName}</div>
                        <div class="pkmnLevel">lvl: ${encounterPokemon[randomIndex].level}</div>
                        <progress class="progressBarFight" value="${encounterPokemon[randomIndex].curHP}" max="${encounterPokemon[randomIndex].maxHP}"></progress>
                        <div class="currentHpNum">${encounterPokemon[randomIndex].curHP} / ${encounterPokemon[randomIndex].maxHP}</div>  
                    </div>
                </div>
                <div class="enemyImg">
                    <img src="gifs/bunch/${shinyimage}.gif" id="imgGif">
                </div>
            </div>
            <div>
                <div class="userBox">
                    <div class="statusBox">
                        <div class="pkmnName">${yourPokemon[0].pokemonName}</div>
                        <div class="pkmnLevel">lvl: ${yourPokemon[0].level}</div>
                        <progress class="progressBarFight" value="${yourPokemon[0].curHP}" max="${yourPokemon[0].maxHP}"></progress>
                        <div class="currentHpNum">${yourPokemon[0].curHP} / ${yourPokemon[0].maxHP}</div>  
                    </div>
                </div>
                <div class="userImg">
                    <img src="gifs/backside/${yourPokemon[0].shinyback}.gif" id="imgGif">
                </div>
            </div>
            <div class="rel">
                <div class="interactionBox">
                    <div class="yourMove interactionBoxButtons" id="${yourPokemon[0].moves.type}">${yourPokemon[0].moves.moveID}</div>
                    <div class="catchPkmn interactionBoxButtons" onclick="catchPokemon()">Balls</div>
                    <div class="fightItems interactionBoxButtons" onclick="alertMe()">Pokemon</div>
                    <div class="runOrStay interactionBoxButtons" onclick="startGame()">Run</div>
                </div>
            </div>
        `; 
    }, 1000);
}

function attacks() {

}

function catchPokemon() {
    if (yourPokemon.length === 6) {
        alert("You are at max capacity");
        return;
    }
    yourPokemon.push(encounterPokemon[randomIndex]);
    document.getElementById("audio").volume = 0.1;
    document.getElementById("audio").play();
    setTimeout(function () {
        alert(`You've caught ${encounterPokemon[randomIndex].pokemonName}!`);
        encounterPokemon.splice(randomIndex, 1);
        randomIndex = null;
        startGame();
    }, 800);
}