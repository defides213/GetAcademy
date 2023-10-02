const battleDisplay = document.getElementById("battlechoicedisplay");

function battleArenaEntrance() {
    gamebackground.innerHTML = `
    <img src="img/battlearena.jpg" usemap="#grassboxes" id="background">

        
    
    `;
        generateRandompokemon() 
        document.getElementById("bagScreen").innerHTML = ``;
        document.getElementById("bagScreen").style.display = "none";
        closeBag = true;
}

function chosenOpponent() {
    battleDisplay.style.display = "none";
}

function generateRandompokemon() {

}