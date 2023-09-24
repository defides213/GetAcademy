const inputValue = document.getElementById("inputQuestion");
let answerValue = document.getElementById("theAnswer");
const answers = ["Yes", "No", "Maybe", "Indeed", "Perhaps", 'Positively', 'Probably',
    "Unsure", "Great", "Go and Explore"];
show8()

function show8() {
    answerValue.innerHTML = `8`;
}

function answerRandom() {
    inputValue.value = "";
    let randomIndex = Math.round(Math.random() * (answers.length - 1));
    let answerTxT = answers.length > 0 ? answers[randomIndex] : "Add more funds";
    answerValue.innerHTML = answerTxT;
    answers.splice(randomIndex, 1);
    console.log(randomIndex);
    inputValue.readOnly = true
    inputValue.disabled = true
    setTimeout(function () {
        inputQuestion.readOnly = false
        inputQuestion.disabled = false
    }, 1500);
}
