document.getElementById("norflag").innerHTML = 
redWhiteBlue().repeat(6)
+ whiteBlue()
+ blue().repeat(2)
+ whiteBlue()
+ redWhiteBlue().repeat(6);


function redWhiteBlue() {
    return row('red', '', 'blue');
    
}

function whiteBlue() {
    return row('white', '', 'blue');
    
}

function blue() {
    return row('blue', 'blue', 'blue')
    
}

function square(color) {
    return `<div class="${color}"></div>`
}

function row(color1, color2, color3) {
    return square(color1).repeat(6)
    + square(color2)
    + square(color3).repeat(2)
    + square(color2)
    + square(color1).repeat(12)
    ;
}

document.getElementById("danflag").innerHTML = 
danRed().repeat(6)
+ danWhite().repeat(4)
+ danRed().repeat(6);

function danRed() {
    return row('red', 'white', '');
}

function danWhite() {
    return row('white', '', '');
}
