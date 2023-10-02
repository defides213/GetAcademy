let catchAvailable = false;


let catchRandom;
function catchPokemon() {
    if(!catchAvailable) return;
    attackavailable = false;
    runAvailable = false;
    catchAvailable = false;
    bagAvailable = false;
    throwBall();
    catchRandom = Math.floor(Math.random() * 10);
    console.log(catchRandom);
    if(catchRandom >= 5) {
        if (yourPokemon.length === 6) {
            alert("You are at max capacity");
            return;
        }
        yourPokemon.push(encounterPokemon[randomIndex]);
        yourPokemon[yourPokemon.length - 1].shiny = shinyTrue;
        setTimeout(function () {  
            document.getElementById("audio").src = "sound/catchsound.mp3";
            document.getElementById("audio").volume = 0.1;
            document.getElementById("audio").play();  
            caughtBall(); 
            encounterPokemon.splice(randomIndex, 1);
            randomIndex = null;
            setTimeout(startGame,3500);
        }, 800);
    }
    else {
        setTimeout(missBall,3000);
    }
    
}

function openBallBag() {

}
