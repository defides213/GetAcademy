let lengthtrue = false;
let areatrue = false;
let lengthArray = ["Meter", "Decimeter", "Centimeter", "Milimeter"];

function dropdown(value) {
    console.log(value)
    if(value === "Length") {
        lengthchoice()
    }
    if(value === "Area") {
        area()
    }
}

function lengthchoice(inputvalue) {
    length1.style.display = "block";
    length2.style.display = "block";

    area1.style.display = "none";
    area2.style.display = "none";
    
    let leftSelect = document.getElementById("money");
    let rightSelect = document.getElementById("monkey");
    let leftValue = (lengthArray.findIndex(function(element) {
        return element === leftSelect.value
    }))
    let rightValue = (lengthArray.findIndex(function(element) {
        return element === rightSelect.value
    }))
    let result = Number.parseFloat(inputvalue);
    if(leftValue < rightValue) {
        for(let i = leftValue; i < rightValue; i++) {
            result = result * 10;
        }
    }
    else {
        for(let i = leftValue; i > rightValue; i--) {
            result = result / 10;
        }
        console.log(rightValue)
        console.log(leftValue)
    }
    output.value = result;
}

function area() {
    length1.style.display = "none";
    length2.style.display = "none";

    area1.style.display = "block";
    area2.style.display = "block";
}

