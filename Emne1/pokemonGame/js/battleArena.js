const battleDisplay = document.getElementById("battlechoicedisplay");

function battleArenaEntrance() {
    jefferyBag(); 
    santaClausBag()
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
    document.getElementById("bagScreen").innerHTML = ``;
    document.getElementById("bagScreen").style.display = "none";
    closeBag = true;
}

function chosenOpponent() {
    battleDisplay.style.display = "none";
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