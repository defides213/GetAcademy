let calculation = document.getElementById("calculation");
let outputcalculation = document.getElementById("outputcalculation");
let number1 = null;
let number2 = null;
let retriggeroutput = true;

function output(number) {
    if(retriggeroutput) {
        outputcalculation.value = number;
        retriggeroutput = false;
    }
    else {
        outputcalculation.value += number;
    }
    calculation.value += number;
}

let previousCalculation = "";
function specialCharacters(special) {
    calculation.value += special;
    if(number1 === null) {
        number1 = parseFloat(outputcalculation.value);
        if(special === "+/-") {
            number1 *= -1;
        }
        outputcalculation.value = number1;
        previousCalculation = special;
        retriggeroutput = true;
        return;
    }
    else if(number2 === null) {
        number2 = parseFloat(outputcalculation.value);
        if(special === "+/-") {
            number2 *= -1;
            outputcalculation.value = number2;
            number2 = null; 
            return;
        }
    }
    outputcalculation.value = "";
    if(special === "%") {
        number2 /= 100;
        number2 = number1 * number2;
        outputcalculation.value = number2;
        retriggeroutput = true;
    }
    else {
        processCalculation(previousCalculation);
        number2 = null;
        outputcalculation.value = number1;
        previousCalculation = special;
    }
}

function backspace() {
    outputcalculation.value = outputcalculation.value.slice(0, - 1);
    calculation.value = calculation.value.slice(0, -1);
}

function clearmonkey(special) {
    if(special === "c") {
        calculation.value = ``;
    } 
    else if(special === "ce") {
        outputcalculation.value = 0;
    }
    outputcalculation.value = 0;
    retriggeroutput = true;
    number1 = null;
    number2 = null;
}

function processCalculation(calculation) {
    if(calculation === "+") {
        number1 += number2;
        console.log(number1)
        retriggeroutput = true;
    }
    else if(calculation === "1/x") {
        number1 = 1 / number1;
        console.log(number1);
        retriggeroutput = true;
        outputcalculation.value = number1;
    }
    else if(calculation === "*") {
        number1 *= number2;
        console.log(number1)
        retriggeroutput = true;
    }
    else if(calculation === "-") {
        number1 -= number2;
        console.log(number1)
        retriggeroutput = true;
    }
    else if(calculation === "/") {
        number1 /= number2;
        console.log(number1)
        retriggeroutput = true;
    }
    else if(calculation === "√") {
        number1 = Math.sqrt(number1);
        console.log(number1)
        retriggeroutput = true;
        outputcalculation.value = number1;
    }
    else if(calculation === "x2") {
        number1 = Math.pow(number1, 2);
        console.log(number1)
        retriggeroutput = true;
        outputcalculation.value = number1;
    }
    else if(calculation === "+/-") {
        number1 -= number1;
        console.log(number1)
        retriggeroutput = true;
        outputcalculation.value = number1;
    }
}