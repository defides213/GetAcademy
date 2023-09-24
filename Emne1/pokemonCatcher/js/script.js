const randomEncounter = document.getElementById("randomEncounter");
const pokemonBag = document.getElementById("yourPokemonBag");
let randomIndex;

function randomEncounterPokemon() {
    randomIndex = Math.floor(Math.random() * randomPokemon.length);
    pokemonBag.innerHTML = ``;
    document.getElementById("randomEncounterButton").innerHTML = `Run`;
    randomEncounter.innerHTML = `
    <div class="padding">
        <div class="flex center">
            <img src="gifs/encounter.png" id="encounterImg">
        </div>
        <div class="flex center">
            <button onclick="catchPokemon()">Catch Me</button>
        </div>
        <div class="absolutename center">
            <div id="pokemonRandom">${randomPokemon[randomIndex].pokemonName}</div>
            <div id="lvl">level: ${randomPokemon[randomIndex].level}</div>
        </div>
        <div class="absoluteimg center">
            <img src="gifs/${randomPokemon[randomIndex].img}.gif" id="imgGif">
        </div>
    </div>
    `;
    switchButton = true;
}


function catchPokemon() {
    if (yourPokemon.length === 6) {
        alert("You are at max capacity");
        return;
    }
    yourPokemon.push(randomPokemon[randomIndex]);
    document.getElementById("audio").volume = 0.1;
    document.getElementById("audio").play();
    setTimeout(function () {
        alert(`You've caught ${randomPokemon[randomIndex].pokemonName}!`);
        randomPokemon.splice(randomIndex, 1);
        randomIndex = null;
        randomEncounter.innerHTML = ``;
    }, 800);
}

let switchButton = true;
function yourPokemonBag() {
    if (switchButton === true) {
        randomEncounter.innerHTML = ``;
        document.getElementById("randomEncounterButton").innerHTML = `Random Encounter`;
        pokemonBag.innerHTML = ``;
        for (let pokemon in yourPokemon) {
            pokemonBag.innerHTML += `
        <div class="box margin padding">
            <div id="pokemonRandom">${yourPokemon[pokemon].pokemonName}</div>
            <div id="lvl">level:  ${yourPokemon[pokemon].level}</div>
            <img src="gifs/${yourPokemon[pokemon].img}.gif" id="imgGif">
        </div>
        `;
        }
        switchButton = false;
    }
    else {
        pokemonBag.innerHTML = ``;
        switchButton = true;
    }
}


// before i used the for loop. i used these codes and they were awfull.

// <div class="flex center">
//    <div class="box1">
//        <img src="gifs/${yourPokemon[0].img}.gif" id="imgGif">
//    </div>
//    <div class="box2">
//        <img src="gifs/${yourPokemon[1].img}.gif" id="imgGif">
//    </div>
//    <div class="box3">
//        <img src="gifs/${yourPokemon[2].img}.gif" id="imgGif">
//    </div>
// </div>

// <div class="flex center">
//    <div class="box1">
//        <div id="pokemon0">
//            <div class="pokemon0Name center">
//                <div id="pokemonRandom">${yourPokemon[0].pokemonName}</div>
//            </div>
//            <div class="pokemon0Level center">
//                <div id="lvl">level:  ${yourPokemon[0].level}</div>
//            </div>
//            <div class="pokemon0img center">
//                <img src="gifs/${yourPokemon[0].img}.gif" id="imgGif">
//            </div>
//        </div>
//    </div>
//    <div class="box2">
//        <div id="pokemon1">
//            <div class="pokemon1Name center">
//                <div id="pokemonRandom">${yourPokemon[1].pokemonName}</div>
//            </div>
//            <div class="pokemon1Level center">
//                <div id="lvl">level:  ${yourPokemon[1].level}</div>
//            </div>
//            <div class="pokemon1img center">
//                <img src="gifs/${yourPokemon[1].img}.gif" id="imgGif">
//            </div>
//        </div>
//    </div>
//    <div class="box3">
//        <div id="pokemon2">
//            <div class="pokemon2Name center">
//                <div id="pokemonRandom">${yourPokemon[2].pokemonName}</div>
//            </div>
//            <div class="pokemon2Level center">
//                <div id="lvl">level:  ${yourPokemon[2].level}</div>
//            </div>
//            <div class="pokemon2img center">
//                <img src="gifs/${yourPokemon[2].img}.gif" id="imgGif">
//            </div>
//        </div>
//    </div>
// </div> 