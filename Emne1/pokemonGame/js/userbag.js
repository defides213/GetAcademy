let closeBag = true;
function openBag() {
    if(closeBag === true) {
        disableMapArea();
        background.src = "img/bagbackground.png";
        document.getElementById("bagScreen").style.display = "block";
        document.getElementById("bagScreen").innerHTML = `
            <button id="heldPokemon" class="bagButtons" onclick="storedPokemonBag()">Held Pokemon</button>
            <button id="BattleMode" class="bagButtons" onclick="battleArenaEntrance()">battle Mode</button>
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
                    <img src="gifs/bunch/${yourPokemon[pokemon].shiny ? yourPokemon[pokemon].gif + "shiny" : yourPokemon[pokemon].gif}.gif" id="imgGif">
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