let firstNumber = 0 ;
let secondNumber = 0;
let points = 0;
updateNumbers();

function resetNumber() {
    points = 0;
    updateNumbers();
}

function updateNumbers() {
    firstNumber = getRandomNumber();
    secondNumber = getRandomNumber();
    document.getElementById("firstNumber").innerHTML = firstNumber;
    document.getElementById("secondNumber").innerHTML = secondNumber;
    document.getElementById("points").innerHTML = points;
    document.getElementById("inputValue").value = "";
}

function submitNumber() {
    let inputValue = document.getElementById("inputValue").value;
    if(inputValue === "<" && firstNumber < secondNumber) {
        points++;
    }
    else if(inputValue === ">" && firstNumber > secondNumber) {
        points++;
    }
    else if(inputValue === "=" && firstNumber === secondNumber) {
        points++;
    }
    updateNumbers();
}

function getRandomNumber(){
    return Math.round(Math.random() * 100);
}
