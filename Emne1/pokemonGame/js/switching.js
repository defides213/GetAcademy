let changePokemonBattle = true;
let bagAvailable = false;

function openPokemon() {
    if(!bagAvailable) return; 
    document.getElementById("inventory").innerHTML = ``;
    if(changePokemonBattle === true) {
        document.getElementById("inventory").style.display = "grid";
        document.getElementById("inventory").style.zIndex = "10";
        for(let pokemon in yourPokemon) {
            document.getElementById("inventory").innerHTML += `
                <div class="box padding">
                    <div>${yourPokemon[pokemon].pokemonName}</div>
                    <div>lv:  ${yourPokemon[pokemon].level}</div>
                    <img src="gifs/bunch/${yourPokemon[pokemon].shiny ? yourPokemon[pokemon].gif + "shiny" : yourPokemon[pokemon].gif}.gif" id="imgGif" onclick="switchPokemonIn(${pokemon})">
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

function switchPokemonIn(number) {
    userPokemonChoice = number;
    let changePokemonIG = document.getElementById("changePokemon");
    changePokemonIG.innerHTML = `
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
    `;
    setTimeout(userSwitchpokemonin(), 800);
    document.getElementById("inventory").innerHTML = ``;
    document.getElementById("inventory").style.display = "none";
    document.getElementById("inventory").style.zIndex = "1";
    changePokemonBattle = true;
    if(!faintswitch) {
        attackavailable = false;
        runAvailable = false;
        catchAvailable = false;
        bagAvailable = false;
        setTimeout(function() {
            enemyAttack();
        },3500);  
    }  
}