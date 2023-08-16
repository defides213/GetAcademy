// used for coloring background :)
let redTarget = document.getElementById('red');
let yellowTarget = document.getElementById('yellow');
let greenTarget = document.getElementById('green');
// used for intervals
let redColor = false;
let yellowColor = false;
let greenColor = true;
let timer;


function activateRed() {
    changeColorLights(redTarget, 'red');
    clearColorLights(greenTarget);
    setTimeout(activateYellow, 1000);
}

function activateYellow() {
    changeColorLights(yellowTarget, 'yellow');
    clearColorLights(redTarget);
    setTimeout(activateGreeb, 1000);
}
function activateGreeb() {
    changeColorLights(greenTarget, 'green');
    clearColorLights(yellowTarget);
    setTimeout(activateRed, 1000);
}

function startInterval() {
    timer = setInterval(function(){
        if (redColor) {
            changeColorLights(yellowTarget, 'yellow');
            clearColorLights(redTarget);
            yellowColor = true;
            redColor = false;
        }
        else if (yellowColor) {
            changeColorLights(greenTarget, 'green');
            clearColorLights(yellowTarget);
            greenColor = true;
            yellowColor = false;
        }
        else if (greenColor) {
            changeColorLights(redTarget, 'red')
            clearColorLights(greenTarget);
            redColor = true;
            greenColor = false;
        }
    }, 1000);
}

function stopInterval() {
    clearInterval(timer);
    clearColorLights(redTarget);
    clearColorLights(yellowTarget);
    clearColorLights(greenTarget);
}

function changeColorLights(target, color) {
    target.style.backgroundColor = color;
}
function clearColorLights(target) {
    changeColorLights(target, 'rgb(59, 59, 59)');
}




function colorRedtraffic(color) {
    redTarget.style.backgroundColor = color;
    yellowTarget.style.backgroundColor = 'rgb(59, 59, 59)';
    greenTarget.style.backgroundColor = 'rgb(59, 59, 59)';
}

function colorYellowtraffic(color) {
    yellowTarget.style.backgroundColor = color;
    greenTarget.style.backgroundColor = 'rgb(59, 59, 59)';
    redTarget.style.backgroundColor = 'rgb(59, 59, 59)';
}

function colorGreentraffic(color) {
    greenTarget.style.backgroundColor = color;
    redTarget.style.backgroundColor = 'rgb(59, 59, 59)';
    yellowTarget.style.backgroundColor = 'rgb(59, 59, 59)';
}