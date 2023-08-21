let lightState = true;
let bg_color = document.body;
let rightlightOnOff = document.getElementById('rightLight'); 
let leftlightOnOff = document.getElementById('leftLight'); 

function lightSwitch() {
    lightState = !lightState;
    if(lightState === false) {
        lightsOn();
    }
    else {
        lightsOff();
    }
}

function lightsOn() {
    bg_color.style.backgroundColor = 'white';
    rightlightOnOff.style.color = 'yellow';
    leftlightOnOff.style.color = 'yellow';
    rightlightOnOff.style.textShadow = '0px 0px 10px orange ';
    leftlightOnOff.style.textShadow = '0px 0px 10px orange ';
}

function lightsOff() {
    bg_color.style.backgroundColor = 'rgb(73, 73, 73)';
    rightlightOnOff.style.color = 'rgb(73, 73, 73)';
    leftlightOnOff.style.color = 'rgb(73, 73, 73)';
    rightlightOnOff.style.textShadow = 'none';
    leftlightOnOff.style.textShadow = 'none';
}