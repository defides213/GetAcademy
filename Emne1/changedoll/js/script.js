//model

let head = "head";
let body = "body";
let legs = "legs";
let chosenHeads = 1;
let chosenBodies = 1;
let chosenLegs = 1;

//view
view();
function view() {
    let html = '';
    html += bodyParts(head, chosenHeads);
    html += bodyParts(body, chosenBodies);
    html += bodyParts(legs, chosenLegs);

    document.getElementById("model").innerHTML = html;
}

function bodyParts(part, partNumber) {
    let html = '';
    html += '<div class=bodyPart>'
    html += `<button onclick="nextPart('${part}','next')"> ← </button>`
    html += `<img src="img/${part}${partNumber}.png">`
    html += `<button onclick="nextPart('${part}','previous')"> → </button>`
    html += '</div>'
    return html;
}


//controller

function getPartNumber(direction, partVariable) {
    if (direction === 'next') {
        if (partVariable == 4) {
            partVariable = 1;

        }
        else {
            partVariable++;
        }
    }
    else {
        if (partVariable == 1) {
            partVariable = 4;
        }
        else {
            partVariable--;
        }
    }
    return partVariable;
}

function nextPart(part, direction) {
    if (part === head) {
        chosenHeads = getPartNumber(direction, chosenHeads)
    }
    else if (part === body) {
        chosenBodies = getPartNumber(direction, chosenBodies)
    }
    else if (part === legs) {
        chosenLegs = getPartNumber(direction, chosenLegs)
    }
    view();
}
