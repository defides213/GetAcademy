const bubble = document.getElementById("speechbubble");

function userSpeechbubble() {
    bubble.innerHTML = `<p>${yourPokemon[userPokemonChoice].pokemonName} 
    used ${yourPokemon[userPokemonChoice].moves.moveID}</p>
    <p>it did ${yourPokemon[userPokemonChoice].moves.dmg} dmg</p>
    `;
    setTimeout(function() {
        bubble.innerHTML = `. . .`;
    }, 2000);
}

function enemySpeechbubbles() {
    bubble.innerHTML = `<p>${encounterPokemon[randomIndex].pokemonName} 
    used ${encounterPokemon[randomIndex].moves.moveID}</p>
    <p>it did ${encounterPokemon[randomIndex].moves.dmg} dmg</p>
    `;
    setTimeout(function() {
        bubble.innerHTML = `. . .`;
    }, 2000);
}

function userSwitchpokemonin() {
    bubble.innerHTML = `<p>The player switched in ${yourPokemon[userPokemonChoice].pokemonName} 
    </p>
    <p>Go get im' ${yourPokemon[userPokemonChoice].pokemonName}</p>
    `;
    setTimeout(function() {
        bubble.innerHTML = `. . .`;
    }, 3000);
}

function enemySwitchpokemonin() {
    bubble.innerHTML = `<p>The player switched in ${[].pokemonName} 
    </p>
    <p>Go get im' ${[].pokemonName}</p>
    `;
    setTimeout(function() {
        bubble.innerHTML = `. . .`;
    }, 3000);
}



function throwBall() {
    bubble.innerHTML = `<p>The player threw a ball at ${encounterPokemon[randomIndex].pokemonName}</p>
    `;
    setTimeout(function() {
        bubble.innerHTML = `. . .`;
    }, 3000);
}

function caughtBall() {
    bubble.innerHTML = `<p>The player Got ${encounterPokemon[randomIndex].pokemonName}</p>
    <p>Stashed ${encounterPokemon[randomIndex].pokemonName} in their Bag</p>
    `;
    setTimeout(function() {
        bubble.innerHTML = `. . .`;
    }, 3500);
}

function missBall() {
    bubble.innerHTML = `<p>${encounterPokemon[randomIndex].pokemonName} broke out of the ball</p>
    `;
    setTimeout(function() {
        bubble.innerHTML = `. . .`;
        setTimeout(function() {
            enemyAttack();
        }, 1000);
    },2500);
    
    
}