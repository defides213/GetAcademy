let outputDiv = document.getElementById("output");
let numToShow = 0;

function setnumber1() {
    numToShow = 1;
    outputDiv.innerHTML = numToShow;
    document.getElementById("output").classList.add("number");
}

function setnumber2() {
    numToShow = 2;
    outputDiv.innerHTML = numToShow;
    document.getElementById("output").classList.add("number");
}
