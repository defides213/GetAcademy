const output = document.getElementById("game");
const gamebackground = document.getElementById("gameBackground");


function startGame() {
    document.getElementById("startertext").style.display = "none";
    bubble.style.display = "none";
    document.getElementById("audio").pause();
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

function alertMe() {
    alert("Under Construction")
}

